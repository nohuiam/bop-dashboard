// API utilities for calling localhost MCP server HTTP endpoints

const BASE_URL = 'http://localhost';

// Fetch with timeout
async function fetchWithTimeout(url, options = {}, timeout = 3000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Check health of a single server
export async function checkServerHealth(server) {
  const url = `${BASE_URL}:${server.port}/health`;

  try {
    const response = await fetchWithTimeout(url);

    if (!response.ok) {
      return {
        serverId: server.id,
        status: 'error',
        message: `HTTP ${response.status}`,
        uptime: null
      };
    }

    const data = await response.json();

    return {
      serverId: server.id,
      status: 'healthy',
      uptime: data.uptime || data.uptimeHours || null,
      version: data.version || null,
      message: 'OK'
    };
  } catch (error) {
    if (error.name === 'AbortError') {
      return {
        serverId: server.id,
        status: 'timeout',
        message: 'Request timed out'
      };
    }

    return {
      serverId: server.id,
      status: 'offline',
      message: error.message || 'Connection failed'
    };
  }
}

// Check health of all servers
export async function checkAllServersHealth(servers) {
  const results = await Promise.all(
    servers.map(server => checkServerHealth(server))
  );

  return results.reduce((acc, result) => {
    acc[result.serverId] = result;
    return acc;
  }, {});
}

// Get server stats (if available)
export async function getServerStats(server) {
  const url = `${BASE_URL}:${server.port}/stats`;

  try {
    const response = await fetchWithTimeout(url);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

// Call a specific API endpoint
export async function callApi(server, endpoint, options = {}) {
  const url = `${BASE_URL}:${server.port}${endpoint}`;

  try {
    const response = await fetchWithTimeout(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    }, 10000);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
