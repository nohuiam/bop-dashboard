// Server registry - all 20 MCP servers with HTTP API ports
// HTTP APIs are on ports 8001-8021

export const SERVERS = [
  {
    id: 'context-guardian',
    name: 'Context Guardian',
    port: 8001,
    category: 'Safety',
    description: 'Validation, mistake tracking, safety rules',
    toolCount: 14
  },
  {
    id: 'quartermaster',
    name: 'Quartermaster',
    port: 8002,
    category: 'Files',
    description: 'File search, inventory, monitoring, alerts',
    toolCount: 23
  },
  {
    id: 'snapshot',
    name: 'Snapshot',
    port: 8003,
    category: 'Backup',
    description: 'Capture, verify, restore system state',
    toolCount: 6
  },
  {
    id: 'catasorter',
    name: 'Catasorter',
    port: 8005,
    category: 'Classification',
    description: 'GLEC classification, document organization',
    toolCount: 6
  },
  {
    id: 'looker',
    name: 'Looker',
    port: 8006,
    category: 'Research',
    description: 'Web search, credibility analysis',
    toolCount: 5
  },
  {
    id: 'smart-file-organizer',
    name: 'Smart File Organizer',
    port: 8007,
    category: 'Files',
    description: 'File organization with rollback',
    toolCount: 3
  },
  {
    id: 'bonzai-bloat-buster',
    name: 'Bonzai Bloat Buster',
    port: 8008,
    category: 'Dedup',
    description: 'Duplicate detection, consolidation via Qdrant',
    toolCount: 6
  },
  {
    id: 'enterspect',
    name: 'Enterspect',
    port: 8009,
    category: 'Search',
    description: 'Semantic search, spatial navigation',
    toolCount: 8
  },
  {
    id: 'neurogenesis-engine',
    name: 'Neurogenesis Engine',
    port: 8010,
    category: 'Meta',
    description: 'Server generation, workflows, diagnostics',
    toolCount: 26
  },
  {
    id: 'chronos-synapse',
    name: 'Chronos Synapse',
    port: 8011,
    category: 'Temporal',
    description: 'Temporal analysis, patterns, predictions',
    toolCount: 19
  },
  {
    id: 'trinity-coordinator',
    name: 'Trinity Coordinator',
    port: 8012,
    category: 'Orchestration',
    description: 'Multi-agent orchestration, work orders',
    toolCount: 14
  },
  {
    id: 'claude-code-bridge',
    name: 'Claude Code Bridge',
    port: 8013,
    category: 'Bridge',
    description: 'Desktop-to-Code communication, work orders',
    toolCount: 8
  },
  {
    id: 'niws-server',
    name: 'NIWS Server',
    port: 8015,
    category: 'News',
    description: 'News processing, RSS, bias analysis, video',
    toolCount: 102
  },
  {
    id: 'project-context',
    name: 'Project Context',
    port: 8016,
    category: 'Config',
    description: 'Configuration, path validation, rate limits',
    toolCount: 5
  },
  {
    id: 'knowledge-curator',
    name: 'Knowledge Curator',
    port: 8017,
    category: 'Knowledge',
    description: 'Document curation, compression, cross-refs',
    toolCount: 6
  },
  {
    id: 'pk-manager',
    name: 'PK Manager',
    port: 8018,
    category: 'Knowledge',
    description: 'Project Knowledge rebuild, rollback',
    toolCount: 4
  },
  {
    id: 'research-bus',
    name: 'Research Bus',
    port: 8019,
    category: 'Research',
    description: 'Perplexity research, citations, synthesis',
    toolCount: 12
  },
  {
    id: 'intelligent-router',
    name: 'Intelligent Router',
    port: 8020,
    category: 'Routing',
    description: 'Intent detection, workflow routing',
    toolCount: 2
  },
  {
    id: 'verifier-mcp',
    name: 'Verifier MCP',
    port: 8021,
    category: 'Cognitive',
    description: 'Claim extraction, fact verification',
    toolCount: 3
  },
  {
    id: 'tool-registry',
    name: 'Tool Registry',
    port: 8004,
    category: 'Meta',
    description: 'Tool discovery, ecosystem coordination',
    toolCount: 65
  },
  // New servers (built & tested Jan 2, 2026)
  {
    id: 'safe-batch-processor',
    name: 'Safe Batch Processor',
    port: 8022,
    category: 'Batch',
    description: 'Safe batch operations with validation and rollback',
    toolCount: 4
  },
  {
    id: 'intake-guardian',
    name: 'Intake Guardian',
    port: 8023,
    category: 'Safety',
    description: 'Input validation, sanitization, threat detection',
    toolCount: 5
  },
  {
    id: 'health-monitor',
    name: 'Health Monitor',
    port: 8024,
    category: 'Monitoring',
    description: 'System health, metrics, alerting',
    toolCount: 7
  },
  {
    id: 'synapse-relay',
    name: 'Synapse Relay',
    port: 8025,
    category: 'Orchestration',
    description: 'Inter-server messaging and event relay',
    toolCount: 4
  },
  {
    id: 'filesystem-guardian',
    name: 'Filesystem Guardian',
    port: 8026,
    category: 'Files',
    description: 'Mac-specific file ops, xattrs, Spotlight integration',
    toolCount: 6
  },
  {
    id: 'consolidation-engine',
    name: 'Consolidation Engine',
    port: 8032,
    category: 'Dedup',
    description: 'Document merging, consolidation planning',
    toolCount: 6
  },
  // Cognitive Architecture servers (built Jan 3, 2026)
  {
    id: 'consciousness-mcp',
    name: 'Consciousness MCP',
    port: 8028,
    category: 'Cognitive',
    description: 'Meta-awareness, pattern learning, ecosystem reflection',
    toolCount: 10
  },
  {
    id: 'skill-builder',
    name: 'Skill Builder',
    port: 8029,
    category: 'Cognitive',
    description: 'Skill creation, validation, matching, and usage tracking',
    toolCount: 8
  },
  {
    id: 'percolation-server',
    name: 'Percolation Server',
    port: 8030,
    category: 'Cognitive',
    description: 'Blueprint optimization through stress testing and patching',
    toolCount: 8
  },
  {
    id: 'experience-layer',
    name: 'Experience Layer',
    port: 8031,
    category: 'Cognitive',
    description: 'Experience tracking, learning patterns, knowledge synthesis',
    toolCount: 8
  },
  {
    id: 'tenets-server',
    name: 'Tenets Server',
    port: 8027,
    category: 'Cognitive',
    description: 'Ethical decision evaluation against 25 Gospel tenets',
    toolCount: 8
  }
];

// Category colors for visual grouping
export const CATEGORIES = {
  'Safety': '#e74c3c',
  'Files': '#3498db',
  'Backup': '#9b59b6',
  'Classification': '#f39c12',
  'Research': '#1abc9c',
  'Dedup': '#e67e22',
  'Search': '#2ecc71',
  'Meta': '#34495e',
  'Temporal': '#8e44ad',
  'Orchestration': '#c0392b',
  'Bridge': '#16a085',
  'News': '#d35400',
  'Config': '#7f8c8d',
  'Knowledge': '#27ae60',
  'Routing': '#2980b9',
  'Verification': '#c0392b',
  'Batch': '#9b59b6',
  'Monitoring': '#3498db',
  'Cognitive': '#9c27b0'
};

// Get server by ID
export function getServer(id) {
  return SERVERS.find(s => s.id === id);
}

// Get servers by category
export function getServersByCategory(category) {
  return SERVERS.filter(s => s.category === category);
}

// Get all unique categories
export function getCategories() {
  return [...new Set(SERVERS.map(s => s.category))];
}
