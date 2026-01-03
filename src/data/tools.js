// Tool definitions for all 20 servers (349 total tools)
// Each tool has: name, description, inputs (key parameters)

export const TOOLS = {
  'context-guardian': [
    { name: 'context_guardian_validate', desc: 'Validate operation against rules', inputs: 'operation_type, context, severity' },
    { name: 'context_guardian_validate_batch', desc: 'Validate batch operations', inputs: 'operation_type, batch_size, sample_items' },
    { name: 'context_guardian_record_mistake', desc: 'Record a mistake for learning', inputs: 'what_happened, why_it_happened, impact' },
    { name: 'context_guardian_get_stats', desc: 'Get validation statistics', inputs: 'time_period, include_trends' },
    { name: 'context_guardian_get_mistakes', desc: 'Query recorded mistakes', inputs: 'filter, limit, include_patterns' },
    { name: 'context_guardian_session_state', desc: 'Track session state', inputs: 'query_type, session_id, time_window' },
    { name: 'context_guardian_knowledge_lookup', desc: 'Query knowledge base', inputs: 'query_type, query, category' },
    { name: 'context_guardian_add_rule', desc: 'Add validation rule', inputs: 'rule_type, severity, condition, action' },
    { name: 'context_guardian_get_rules', desc: 'Query validation rules', inputs: 'filter, limit' },
    { name: 'context_guardian_get_guidelines', desc: 'Get operation guidelines', inputs: 'operation_type, context' },
    { name: 'context_guardian_search_solutions', desc: 'Search for solutions', inputs: 'query, context, limit' },
    { name: 'context_guardian_detect_drift', desc: 'Detect drift from baseline', inputs: 'target_type, target, baseline' },
    { name: 'context_guardian_capture_snapshot', desc: 'Capture state snapshot', inputs: 'snapshot_type, targets, label' },
    { name: 'context_guardian_get_validation_history', desc: 'Get validation history', inputs: 'filter, limit, include_stats' }
  ],

  'quartermaster': [
    { name: 'quartermaster_search', desc: 'FTS5 full-text search', inputs: 'query, scope, path, file_types' },
    { name: 'quartermaster_live_find', desc: 'Realtime filesystem search', inputs: 'query, path, max_depth' },
    { name: 'quartermaster_hybrid_find', desc: 'Combined index + live search', inputs: 'query, path, prefer' },
    { name: 'quartermaster_recent', desc: 'Get recently modified files', inputs: 'type, hours, limit' },
    { name: 'quartermaster_inventory', desc: 'Analyze directory contents', inputs: 'path, options' },
    { name: 'quartermaster_audit', desc: 'Health assessment', inputs: '(none)' },
    { name: 'quartermaster_get_metadata', desc: 'Get file metadata', inputs: 'filepath' },
    { name: 'quartermaster_suggest_location', desc: 'Suggest file placement', inputs: 'filepath, content' },
    { name: 'quartermaster_suggest_scope', desc: 'Suggest search scope', inputs: 'query' },
    { name: 'quartermaster_inbox_drop', desc: 'Queue file for classification', inputs: 'filepath' },
    { name: 'quartermaster_inbox_status', desc: 'Get inbox queue status', inputs: '(none)' },
    { name: 'quartermaster_watch_status', desc: 'Get watcher health', inputs: '(none)' },
    { name: 'quartermaster_approval_state', desc: 'Files by approval status', inputs: 'state, limit' },
    { name: 'quartermaster_health', desc: 'Health check', inputs: '(none)' },
    { name: 'quartermaster_duplicates', desc: 'Find duplicate files', inputs: 'path, min_size' },
    { name: 'quartermaster_alerts', desc: 'Get system alerts', inputs: 'severity, category' },
    { name: 'quartermaster_refresh_index', desc: 'Refresh file index', inputs: 'path, force_refresh' },
    { name: 'quartermaster_snapshot', desc: 'Generate snapshot', inputs: '(none)' },
    { name: 'quartermaster_about', desc: 'Server info', inputs: '(none)' },
    { name: 'quartermaster_daily_digest', desc: 'Daily summary', inputs: 'date' },
    { name: 'quartermaster_weekly_report', desc: 'Weekly trends report', inputs: 'week_start' },
    { name: 'reindex_files', desc: 'Legacy: refresh index', inputs: 'path, force_refresh' },
    { name: 'quartermaster_find', desc: 'Legacy: search files', inputs: 'query, scope' }
  ],

  'snapshot': [
    { name: 'snapshot_capture_snapshot', desc: 'Capture system state', inputs: 'type, label' },
    { name: 'snapshot_verify_integrity', desc: 'Verify against snapshot', inputs: 'snapshot_id' },
    { name: 'snapshot_list_snapshots', desc: 'List all snapshots', inputs: 'limit, type, status' },
    { name: 'snapshot_get_snapshot_details', desc: 'Get snapshot details', inputs: 'snapshot_id, include_files' },
    { name: 'snapshot_compare_snapshots', desc: 'Compare two snapshots', inputs: 'snapshot_id_1, snapshot_id_2' },
    { name: 'snapshot_restore_snapshot', desc: 'Restore from snapshot (destructive)', inputs: 'snapshot_id, confirm' }
  ],

  'catasorter': [
    { name: 'classify_document', desc: 'Classify file using GLEC', inputs: 'file_path, extract_nuggets, user_hint' },
    { name: 'get_classification', desc: 'Get existing classification', inputs: 'file_path' },
    { name: 'get_dewey_stats', desc: 'Get Dewey counters', inputs: '(none)' },
    { name: 'get_workflow_metrics', desc: 'Get workflow statistics', inputs: 'include_details' },
    { name: 'organize_document', desc: 'Classify and move file', inputs: 'file_path, user_hint, dry_run' },
    { name: 'batch_process', desc: 'Batch classify files', inputs: 'max_files, dry_run, extract_nuggets' }
  ],

  'looker': [
    { name: 'enhanced_search', desc: 'Multi-source web search', inputs: 'query, sources, credibilityThreshold' },
    { name: 'validate_source', desc: 'Check source credibility', inputs: 'url, contentType, verificationLevel' },
    { name: 'search_history', desc: 'Manage search history', inputs: 'action, timeRange, options' },
    { name: 'content_analysis', desc: 'Analyze content quality', inputs: 'content, analysisType, context' },
    { name: 'cross_reference', desc: 'Find related sources', inputs: 'primaryUrl, searchDepth, options' }
  ],

  'smart-file-organizer': [
    { name: 'organize_files', desc: 'Organize files in directory', inputs: 'sourcePath, options' },
    { name: 'get_organization_stats', desc: 'Get organization stats', inputs: 'timeRange' },
    { name: 'rollback_operation', desc: 'Rollback file moves', inputs: 'movementId, batchId, confirmDangerous' }
  ],

  'bonzai-bloat-buster': [
    { name: 'analyze_directory', desc: 'Scan for duplicates', inputs: 'directoryPath, generatePlan' },
    { name: 'process_documents', desc: 'Add to vector DB', inputs: 'filePaths' },
    { name: 'compare_documents', desc: 'Compare two files', inputs: 'filePathA, filePathB' },
    { name: 'get_storage_stats', desc: 'Get vector DB stats', inputs: '(none)' },
    { name: 'execute_consolidation_plan', desc: 'Execute dedup plan', inputs: 'planPath, dryRun' },
    { name: 'batch_compare_documents', desc: 'Bulk comparison', inputs: 'newFiles, existingFiles, threshold' }
  ],

  'enterspect': [
    { name: 'semantic_search', desc: 'NLP-powered search', inputs: 'query, scope, max_results' },
    { name: 'keyword_search', desc: 'Keyword match search', inputs: 'keywords, file_types, date_range' },
    { name: 'filter_by_category', desc: 'Filter by GLEC category', inputs: 'glec_type, subject, importance' },
    { name: 'recent_activity', desc: 'Get recent file activity', inputs: 'activity_type, limit, time_range_hours' },
    { name: 'spatial_navigate', desc: '3D spatial navigation', inputs: 'x, y, z, radius' },
    { name: 'find_related', desc: 'Find similar files', inputs: 'file_path, similarity_threshold' },
    { name: 'search_index_status', desc: 'Get index health', inputs: '(none)' },
    { name: 'update_search_index', desc: 'Refresh search index', inputs: 'full_rebuild, path' }
  ],

  'neurogenesis-engine': [
    { name: 'create_synapse', desc: 'Create new MCP server', inputs: 'name, purpose, tools, ports' },
    { name: 'fire_neurotransmitter', desc: 'Server-to-server signal', inputs: 'fromServer, toServer, signal' },
    { name: 'create_workflow', desc: 'Define workflow template', inputs: 'name, description, steps' },
    { name: 'get_synaptic_network', desc: 'View server network', inputs: 'includeHealth, includeConnections' },
    { name: 'discover_emergent_capabilities', desc: 'Find server synergies', inputs: 'servers, depth' },
    { name: 'get_possible_pathways', desc: 'List routing options', inputs: 'startServer, endServer' },
    { name: 'visualize_pathway', desc: 'Visualize route', inputs: 'pathway, format' },
    { name: 'log_generation_error', desc: 'Record error', inputs: 'serverName, errorType, message' },
    { name: 'get_errors_by_server', desc: 'Errors by server', inputs: 'serverName, limit' },
    { name: 'get_errors_by_type', desc: 'Errors by type', inputs: 'errorType, limit' },
    { name: 'get_recent_errors', desc: 'Recent errors', inputs: 'limit, severity' },
    { name: 'get_error_stats', desc: 'Error trends', inputs: 'period, groupBy' },
    { name: 'validate_generated_code', desc: 'Full code validation', inputs: 'buildId, checks' },
    { name: 'check_syntax_only', desc: 'Syntax check', inputs: 'code, language' },
    { name: 'check_mcp_compliance', desc: 'MCP compliance check', inputs: 'buildId' },
    { name: 'scan_security_vulnerabilities', desc: 'Security scan', inputs: 'buildId, depth' },
    { name: 'check_server_health', desc: 'Server health check', inputs: 'serverName, includeMetrics' },
    { name: 'get_performance_metrics', desc: 'Performance metrics', inputs: 'serverName, period' },
    { name: 'get_health_snapshot', desc: 'Health snapshot', inputs: 'servers' },
    { name: 'get_memory_usage', desc: 'Memory statistics', inputs: 'serverName' },
    { name: 'submit_feedback', desc: 'Submit feedback', inputs: 'buildId, rating, category, comment' },
    { name: 'get_feedback_by_server', desc: 'Feedback by server', inputs: 'serverName, limit' },
    { name: 'get_feedback_stats', desc: 'Feedback statistics', inputs: 'period' },
    { name: 'get_open_feedback', desc: 'Unresolved feedback', inputs: 'priority, limit' },
    { name: 'update_feedback_status', desc: 'Update feedback', inputs: 'feedbackId, status' },
    { name: 'track_event', desc: 'Send event to Chronos', inputs: 'entityType, entityId, eventType' }
  ],

  'chronos-synapse': [
    { name: 'track_event', desc: 'Record temporal event', inputs: 'entityType, entityId, eventType' },
    { name: 'track_snapshot', desc: 'Capture state snapshot', inputs: 'entityType, entityId, state' },
    { name: 'batch_track_events', desc: 'Batch event recording', inputs: 'correlationId, events' },
    { name: 'get_timeline', desc: 'Get event history', inputs: 'entityType, entityId, eventTypes' },
    { name: 'analyze_causality', desc: 'Root cause analysis', inputs: 'effectEventId, maxDepth' },
    { name: 'detect_correlation', desc: 'Find correlations', inputs: 'eventId, timeWindowHours' },
    { name: 'trace_impact', desc: 'Forward impact trace', inputs: 'causeEventId, maxDepth' },
    { name: 'explain_change', desc: 'Explain why changed', inputs: 'entityType, entityId, change' },
    { name: 'detect_cycles', desc: 'Find recurring cycles', inputs: 'entityType, entityId, minOccurrences' },
    { name: 'detect_trends', desc: 'Find trends', inputs: 'metric, entityType, entityId' },
    { name: 'detect_anomalies', desc: 'Find outliers', inputs: 'entityType, entityId, metric' },
    { name: 'predict_next_event', desc: 'Predict when next', inputs: 'eventType, entityType, entityId' },
    { name: 'predict_bottleneck', desc: 'Find limits', inputs: 'scope, horizon' },
    { name: 'forecast_metric', desc: 'Forecast value', inputs: 'metric, entityType, forecastDays' },
    { name: 'what_if_analysis', desc: 'Simulate change', inputs: 'scenario, affectedMetrics' },
    { name: 'optimize_timing', desc: 'Find best time', inputs: 'action, constraints, optimizeFor' },
    { name: 'suggest_schedule', desc: 'Optimal schedule', inputs: 'task, frequency, priority' },
    { name: 'optimize_sequence', desc: 'Order operations', inputs: 'operations, goal' },
    { name: 'find_maintenance_window', desc: 'Best maintenance time', inputs: 'maintenanceDuration, criticalServices' }
  ],

  'trinity-coordinator': [
    { name: 'route_task', desc: 'Route to team member', inputs: 'task, targetMember, priority' },
    { name: 'execute_workflow', desc: 'Run workflow', inputs: 'workflowName, steps' },
    { name: 'delegate_to_code', desc: 'Delegate to Claude Code', inputs: 'task, filePaths, instructions' },
    { name: 'delegate_to_perplexity', desc: 'Delegate research', inputs: 'query, domain, depth' },
    { name: 'create_workflow', desc: 'Create workflow template', inputs: 'name, description, steps' },
    { name: 'get_routing_history', desc: 'Routing history', inputs: 'limit, targetMember' },
    { name: 'watch_work_orders', desc: 'Monitor orders', inputs: 'status' },
    { name: 'get_pending_work', desc: 'Get pending orders', inputs: '(none)' },
    { name: 'get_work_status', desc: 'Order status', inputs: 'workOrderId' },
    { name: 'get_trinity_status', desc: 'Overall status', inputs: '(none)' },
    { name: 'notify_desktop', desc: 'Send notification', inputs: 'message, workOrderId' },
    { name: 'get_pending_handoffs', desc: 'Pending handoffs', inputs: 'member' },
    { name: 'analyze_work_order_complexity', desc: 'Complexity analysis', inputs: 'workOrderId' },
    { name: 'suggest_model_provider', desc: 'Model routing', inputs: 'workOrderId' }
  ],

  'claude-code-bridge': [
    { name: 'create_work_order', desc: 'Create task for Code', inputs: 'sessionId, operation, targetPath, fileCount' },
    { name: 'get_work_order', desc: 'Get work order details', inputs: 'id' },
    { name: 'list_work_orders', desc: 'List work orders', inputs: 'status' },
    { name: 'update_work_order', desc: 'Report progress', inputs: 'id, status, results' },
    { name: 'cancel_work_order', desc: 'Cancel work order', inputs: 'id' },
    { name: 'get_bridge_status', desc: 'Bridge health', inputs: '(none)' },
    { name: 'get_neural_metrics', desc: 'Performance metrics', inputs: 'timeWindow' },
    { name: 'prune_old_work_orders', desc: 'Archive old orders', inputs: 'olderThanDays' }
  ],

  'niws-server': [
    // Core Research
    { name: 'research_query', desc: 'Execute research query', inputs: 'query' },
    { name: 'get_research_stats', desc: 'Research statistics', inputs: '(none)' },
    { name: 'get_budget_status', desc: 'Budget status', inputs: '(none)' },
    { name: 'get_cache_stats', desc: 'Cache statistics', inputs: '(none)' },
    // RSS (sample)
    { name: 'rss_add_feed', desc: 'Add RSS feed', inputs: 'url, name, category' },
    { name: 'rss_poll_feeds', desc: 'Poll all feeds', inputs: '(none)' },
    { name: 'rss_get_articles', desc: 'Get articles', inputs: 'feedId, limit' },
    { name: 'rss_search_articles', desc: 'Search articles', inputs: 'query' },
    // Bias Analysis (sample)
    { name: 'analysis_bias_check', desc: 'Check for bias', inputs: 'text' },
    { name: 'analysis_fact_check', desc: 'Fact check content', inputs: 'claims' },
    { name: 'analysis_sentiment', desc: 'Analyze sentiment', inputs: 'text' },
    // Script Generation (sample)
    { name: 'script_generate', desc: 'Generate video script', inputs: 'topic, style' },
    { name: 'script_validate', desc: 'Validate script', inputs: 'scriptId' },
    // Story Clustering
    { name: 'story_cluster_articles', desc: 'Cluster related articles', inputs: 'articles' },
    { name: 'story_get_timeline', desc: 'Story timeline', inputs: 'clusterId' },
    // Note: niws-server has 102 tools total, showing key ones
  ],

  'project-context': [
    { name: 'get_configuration', desc: 'Get configuration', inputs: 'section' },
    { name: 'get_path_configuration', desc: 'Path permissions', inputs: 'path' },
    { name: 'update_configuration', desc: 'Update configuration', inputs: 'section, settings' },
    { name: 'validate_path', desc: 'Check if path allowed', inputs: 'path, operation' },
    { name: 'check_rate_limit', desc: 'Check/record operation', inputs: 'operation, cost' }
  ],

  'knowledge-curator': [
    { name: 'curate_knowledge', desc: 'Transform to PK format', inputs: 'filePath, classification, options' },
    { name: 'analyze_nugget_patterns', desc: 'Pattern analysis', inputs: 'nuggetIds, analysisType' },
    { name: 'update_search_index', desc: 'Update search index', inputs: 'pkId, content, keywords' },
    { name: 'build_cross_references', desc: 'Build cross-refs', inputs: 'sourceId, targetIds, referenceType' },
    { name: 'get_compression_stats', desc: 'Compression stats', inputs: 'timeRange' },
    { name: 'query_knowledge_graph', desc: 'Query knowledge graph', inputs: 'startNode, depth, relationshipTypes' }
  ],

  'pk-manager': [
    { name: 'pk_rebuild', desc: '7-phase PK rebuild', inputs: 'source_path, options' },
    { name: 'get_rebuild_status', desc: 'Rebuild status', inputs: 'rebuildId' },
    { name: 'list_rebuilds', desc: 'List rebuilds', inputs: 'limit, status' },
    { name: 'rollback_rebuild', desc: 'Rollback rebuild', inputs: 'rebuildId, backupId' }
  ],

  'research-bus': [
    { name: 'research_query', desc: 'Execute Perplexity research', inputs: 'query, backend, importance' },
    { name: 'get_budget_status', desc: 'Budget status', inputs: '(none)' },
    { name: 'get_cache_stats', desc: 'Cache statistics', inputs: '(none)' },
    { name: 'health_check', desc: 'Backend health', inputs: '(none)' },
    { name: 'get_citations', desc: 'Get citations', inputs: 'vault_id' },
    { name: 'get_citation_summary', desc: 'Citation summary', inputs: 'vault_id' },
    { name: 'get_vault_stats', desc: 'Vault statistics', inputs: '(none)' },
    { name: 'list_vaults', desc: 'List citation vaults', inputs: 'include_expired, limit' },
    { name: 'clear_expired_vaults', desc: 'Clear expired', inputs: '(none)' },
    { name: 'optimize_query', desc: 'Improve query', inputs: 'query' },
    { name: 'validate_source', desc: 'Source credibility', inputs: 'url, vault_id' },
    { name: 'synthesize_results', desc: 'Combine results', inputs: 'query, research_ids, style' }
  ],

  'intelligent-router': [
    { name: 'route_request', desc: 'Route by intent', inputs: 'request, context, routing' },
    { name: 'get_routing_history', desc: 'Routing history', inputs: 'limit, intent, status' }
  ],

  'verifier-mcp': [
    { name: 'extract_claims', desc: 'Extract claims from text', inputs: 'text, context, include_implicit' },
    { name: 'verify_claims', desc: 'Verify claims', inputs: 'domain, claims, options' },
    { name: 'list_sources', desc: 'Query verification sources', inputs: 'domain, query' }
  ],

  'tool-registry': [
    // Core Registry
    { name: 'tool_registry_add', desc: 'Register new tool', inputs: 'toolName, serverName, description, riskLevel' },
    { name: 'tool_registry_get', desc: 'Get tool details', inputs: 'toolName' },
    { name: 'tool_registry_list', desc: 'List tools', inputs: 'enabled, serverName, category' },
    { name: 'tool_registry_stats', desc: 'Registry statistics', inputs: '(none)' },
    // Most important
    { name: 'tool_registry_can_do', desc: '"Can I do X?" query', inputs: 'query' },
    // Analytics
    { name: 'tool_analytics_usage', desc: 'Usage analytics', inputs: 'toolName' },
    { name: 'tool_analytics_popular', desc: 'Most used tools', inputs: 'limit' },
    // Recommendations
    { name: 'tool_recommend_for_me', desc: 'Personalized recs', inputs: 'userId, limit' },
    { name: 'tool_recommend_similar', desc: 'Similar tools', inputs: 'toolName, limit' },
    // Ecosystem
    { name: 'tool_ecosystem_map', desc: 'Ecosystem map', inputs: '(none)' },
    { name: 'tool_ecosystem_health', desc: 'Ecosystem health', inputs: '(none)' },
    // Discovery
    { name: 'discover_tools', desc: 'Discover all tools', inputs: 'force' },
    // Note: tool-registry has 65 tools total, showing key ones
  ],

  // New servers (building)
  'safe-batch-processor': [
    { name: 'batch_validate', desc: 'Validate batch before execution', inputs: 'items, rules' },
    { name: 'batch_execute', desc: 'Execute validated batch', inputs: 'batch_id, options' },
    { name: 'batch_rollback', desc: 'Rollback batch operation', inputs: 'batch_id' },
    { name: 'batch_status', desc: 'Get batch status', inputs: 'batch_id' },
    { name: 'batch_list', desc: 'List batch operations', inputs: 'status, limit' },
    { name: 'batch_preview', desc: 'Preview batch effects', inputs: 'items, dry_run' },
    { name: 'batch_pause', desc: 'Pause running batch', inputs: 'batch_id' },
    { name: 'batch_resume', desc: 'Resume paused batch', inputs: 'batch_id' }
  ],

  'intake-guardian': [
    { name: 'intake_validate', desc: 'Validate incoming content', inputs: 'content, rules' },
    { name: 'intake_sanitize', desc: 'Sanitize input data', inputs: 'content, level' },
    { name: 'intake_detect_threats', desc: 'Detect malicious content', inputs: 'content' },
    { name: 'intake_quarantine', desc: 'Quarantine suspicious input', inputs: 'content_id' },
    { name: 'intake_stats', desc: 'Get intake statistics', inputs: 'time_range' },
    { name: 'intake_rules', desc: 'Manage validation rules', inputs: 'action, rule' }
  ],

  'health-monitor': [
    { name: 'health_check_all', desc: 'Check all servers health', inputs: '(none)' },
    { name: 'health_check_server', desc: 'Check specific server', inputs: 'server_id' },
    { name: 'health_get_metrics', desc: 'Get system metrics', inputs: 'metric_type' },
    { name: 'health_set_alert', desc: 'Set alert threshold', inputs: 'metric, threshold' },
    { name: 'health_get_alerts', desc: 'Get active alerts', inputs: 'severity' },
    { name: 'health_history', desc: 'Get health history', inputs: 'server_id, time_range' },
    { name: 'health_dashboard', desc: 'Get dashboard data', inputs: '(none)' },
    { name: 'health_report', desc: 'Generate health report', inputs: 'format' },
    { name: 'health_subscribe', desc: 'Subscribe to health events', inputs: 'events' },
    { name: 'health_unsubscribe', desc: 'Unsubscribe from events', inputs: 'subscription_id' }
  ],

  'synapse-relay': [
    { name: 'relay_send', desc: 'Send message to server', inputs: 'target, message' },
    { name: 'relay_broadcast', desc: 'Broadcast to all servers', inputs: 'message' },
    { name: 'relay_subscribe', desc: 'Subscribe to events', inputs: 'event_types' },
    { name: 'relay_unsubscribe', desc: 'Unsubscribe from events', inputs: 'subscription_id' },
    { name: 'relay_status', desc: 'Get relay status', inputs: '(none)' },
    { name: 'relay_history', desc: 'Get message history', inputs: 'limit' }
  ],

  'filesystem-guardian': [
    { name: 'fs_get_xattrs', desc: 'Get extended attributes', inputs: 'path' },
    { name: 'fs_set_xattr', desc: 'Set extended attribute', inputs: 'path, key, value' },
    { name: 'fs_spotlight_search', desc: 'Search via Spotlight', inputs: 'query, scope' },
    { name: 'fs_spotlight_index', desc: 'Index path in Spotlight', inputs: 'path' },
    { name: 'fs_get_tags', desc: 'Get Finder tags', inputs: 'path' },
    { name: 'fs_set_tags', desc: 'Set Finder tags', inputs: 'path, tags' },
    { name: 'fs_get_comments', desc: 'Get Finder comments', inputs: 'path' },
    { name: 'fs_set_comment', desc: 'Set Finder comment', inputs: 'path, comment' },
    { name: 'fs_quarantine_check', desc: 'Check quarantine status', inputs: 'path' },
    { name: 'fs_quarantine_remove', desc: 'Remove quarantine flag', inputs: 'path' },
    { name: 'fs_get_uti', desc: 'Get Uniform Type Identifier', inputs: 'path' },
    { name: 'fs_get_metadata', desc: 'Get all Mac metadata', inputs: 'path' }
  ],

  'consolidation-engine': [
    { name: 'consolidate_analyze', desc: 'Analyze docs for consolidation', inputs: 'paths' },
    { name: 'consolidate_plan', desc: 'Create consolidation plan', inputs: 'analysis_id' },
    { name: 'consolidate_execute', desc: 'Execute consolidation', inputs: 'plan_id, dry_run' },
    { name: 'consolidate_preview', desc: 'Preview merged result', inputs: 'plan_id' },
    { name: 'consolidate_rollback', desc: 'Rollback consolidation', inputs: 'execution_id' },
    { name: 'consolidate_status', desc: 'Get consolidation status', inputs: 'execution_id' },
    { name: 'consolidate_history', desc: 'Get consolidation history', inputs: 'limit' },
    { name: 'consolidate_stats', desc: 'Get consolidation stats', inputs: 'time_range' }
  ]
};

// Get tools for a server
export function getToolsForServer(serverId) {
  return TOOLS[serverId] || [];
}

// Get total tool count
export function getTotalToolCount() {
  return Object.values(TOOLS).reduce((sum, tools) => sum + tools.length, 0);
}

// Search tools by name or description
export function searchTools(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  for (const [serverId, tools] of Object.entries(TOOLS)) {
    for (const tool of tools) {
      if (tool.name.toLowerCase().includes(lowerQuery) ||
          tool.desc.toLowerCase().includes(lowerQuery)) {
        results.push({ ...tool, serverId });
      }
    }
  }

  return results;
}
