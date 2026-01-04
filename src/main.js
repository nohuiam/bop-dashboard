// boxofprompts.com Local Dashboard - Layer A
// Server catalog with health status and tool definitions

import { SERVERS, CATEGORIES, getCategories } from './data/servers.js';
import { TOOLS, getToolsForServer, getTotalToolCount } from './data/tools.js';
import { checkAllServersHealth } from './utils/api.js';
import './style.css';

// State
let healthStatus = {};
let expandedServers = new Set();
let healthPollingInterval = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  startHealthPolling();
});

// Main render function
function renderApp() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <header class="header">
      <h1>boxofprompts.com</h1>
      <div class="header-stats">
        <span class="stat">${SERVERS.length} servers</span>
        <span class="stat">${getTotalToolCount()} tools</span>
        <span class="stat" id="health-summary">checking...</span>
      </div>
    </header>

    <main class="main">
      <section class="servers-section">
        <h2>SERVERS</h2>
        <p class="hint">Click to expand tools. Hover tools for definitions.</p>
        <div id="server-list" class="server-list">
          ${renderServerList()}
        </div>
      </section>

      <section class="status-section">
        <h2>STATUS</h2>
        <div id="status-panel" class="status-panel">
          <div class="status-item">
            <span class="status-label">Last check:</span>
            <span id="last-check">-</span>
          </div>
          <div class="status-item">
            <span class="status-label">Healthy:</span>
            <span id="healthy-count">-</span>
          </div>
          <div class="status-item">
            <span class="status-label">Offline:</span>
            <span id="offline-count">-</span>
          </div>
          <button id="refresh-btn" class="refresh-btn">Refresh Now</button>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>Local Dashboard - boxofprompts.com prototype</p>
      <p class="hint">Health checks every 30 seconds</p>
    </footer>
  `;

  // Add event listeners
  document.getElementById('refresh-btn').addEventListener('click', refreshHealth);

  // Add click handlers for servers
  document.querySelectorAll('.server-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.tool-item')) {
        toggleServer(card.dataset.serverId);
      }
    });
  });
}

// Render server list
function renderServerList() {
  const categories = getCategories();

  return categories.map(category => {
    const serversInCategory = SERVERS.filter(s => s.category === category);
    const categoryColor = CATEGORIES[category] || '#666';

    return `
      <div class="category-group">
        <h3 class="category-title" style="border-left: 4px solid ${categoryColor}">
          ${category}
          <span class="category-count">(${serversInCategory.length})</span>
        </h3>
        <div class="category-servers">
          ${serversInCategory.map(server => renderServerCard(server)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render individual server card
function renderServerCard(server) {
  const status = healthStatus[server.id];
  const statusClass = getStatusClass(status);
  const statusIcon = getStatusIcon(status);
  const isExpanded = expandedServers.has(server.id);
  const tools = getToolsForServer(server.id);

  return `
    <div class="server-card ${statusClass} ${isExpanded ? 'expanded' : ''}" data-server-id="${server.id}">
      <div class="server-header">
        <span class="status-indicator">${statusIcon}</span>
        <span class="server-name">${server.name}</span>
        <span class="server-port">:${server.port}</span>
        <span class="tool-count">${server.toolCount} tools</span>
        <span class="expand-icon">${isExpanded ? '[-]' : '[+]'}</span>
      </div>
      <div class="server-desc">${server.description}</div>
      ${isExpanded ? renderToolList(tools) : ''}
    </div>
  `;
}

// Render tool list for expanded server
function renderToolList(tools) {
  if (!tools || tools.length === 0) {
    return '<div class="tool-list"><p class="no-tools">No tools defined</p></div>';
  }

  return `
    <div class="tool-list">
      ${tools.map(tool => `
        <div class="tool-item" title="${tool.desc}\n\nInputs: ${tool.inputs}">
          <span class="tool-name">${tool.name}</span>
          <span class="tool-desc">${tool.desc}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Toggle server expansion
function toggleServer(serverId) {
  if (expandedServers.has(serverId)) {
    expandedServers.delete(serverId);
  } else {
    expandedServers.add(serverId);
  }
  renderApp();
}

// Get status class for styling
function getStatusClass(status) {
  if (!status) return 'status-unknown';
  switch (status.status) {
    case 'healthy': return 'status-healthy';
    case 'error': return 'status-error';
    case 'timeout': return 'status-timeout';
    case 'offline': return 'status-offline';
    default: return 'status-unknown';
  }
}

// Get status icon
function getStatusIcon(status) {
  if (!status) return '?';
  switch (status.status) {
    case 'healthy': return '●';
    case 'error': return '!';
    case 'timeout': return '◐';
    case 'offline': return '○';
    default: return '?';
  }
}

// Refresh health status
async function refreshHealth() {
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.textContent = 'Checking...';
  refreshBtn.disabled = true;

  try {
    healthStatus = await checkAllServersHealth(SERVERS);
    renderApp();
    updateStatusPanel();
  } catch (error) {
    console.error('Health check failed:', error);
  }

  refreshBtn.textContent = 'Refresh Now';
  refreshBtn.disabled = false;
}

// Update status panel
function updateStatusPanel() {
  const now = new Date();
  document.getElementById('last-check').textContent = now.toLocaleTimeString();

  const healthy = Object.values(healthStatus).filter(s => s.status === 'healthy').length;
  const offline = Object.values(healthStatus).filter(s => s.status === 'offline' || s.status === 'timeout').length;

  document.getElementById('healthy-count').textContent = `${healthy}/${SERVERS.length}`;
  document.getElementById('offline-count').textContent = offline;

  // Update header summary
  const summary = document.getElementById('health-summary');
  if (healthy === SERVERS.length) {
    summary.textContent = 'all healthy';
    summary.className = 'stat healthy';
  } else if (offline > 0) {
    summary.textContent = `${offline} offline`;
    summary.className = 'stat warning';
  } else {
    summary.textContent = 'checking...';
    summary.className = 'stat';
  }
}

// Start health polling
function startHealthPolling() {
  // Initial check
  refreshHealth();

  // Poll every 30 seconds
  healthPollingInterval = setInterval(refreshHealth, 30000);
}

// Stop health polling (for cleanup)
function stopHealthPolling() {
  if (healthPollingInterval) {
    clearInterval(healthPollingInterval);
  }
}

// Export for debugging
window.bopDashboard = {
  refreshHealth,
  healthStatus: () => healthStatus,
  servers: SERVERS,
  tools: TOOLS
};
