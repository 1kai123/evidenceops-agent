# Partner MCP Mapping

This mapping shows how EvidenceOps Agent can satisfy the Google Cloud Rapid Agent requirement for partner-MCP style tool use through the Dynatrace track while preserving the security workflow already built for the first submission.

## Dynatrace Track Pattern

| Agent need | MCP-style tool | Evidence returned |
| --- | --- | --- |
| Detect operational anomaly | `dynatrace_query_service_anomalies` | Service, latency/error spike, time window, severity |
| Reconstruct impact | `dynatrace_fetch_entity_timeline` | Entity changes, dependency graph, affected workloads |
| Connect release context | `dynatrace_correlate_deployment_events` | Deployment ID, owner, change window, rollback state |
| Add security runtime context | `dynatrace_get_security_runtime_events` | Suspicious process, credential access signal, host |

## Google Edition Flow

1. Agent Builder receives the alert cluster.
2. The agent calls Dynatrace/MCP-style observability tools.
3. Gemini summarizes only retrieved evidence.
4. The workspace displays reasoning, tool traces, approval gates, and a brief.

## Why It Matters

Security and operations teams should not accept a black-box AI incident answer. The Dynatrace/MCP layer gives every claim a retrieval path across services, traces, logs, and runtime events, and the approval layer prevents the agent from silently taking disruptive actions.
