# Agent Execution Log Sample

This sample shows the evidence trail a production EvidenceOps Agent run should preserve.

## Run Metadata

```json
{
  "run_id": "eo-2026-06-06-001",
  "scenario": "OAuth Token Theft",
  "started_at": "2026-06-06T09:12:00Z",
  "completed_at": "2026-06-06T09:16:24Z",
  "operator": "human-analyst",
  "mode": "human_approval_required"
}
```

## Tool Calls

```json
[
  {
    "step": 1,
    "agent": "Evidence Collector",
    "tool": "splunk.search",
    "query_name": "identity_impossible_travel",
    "status": "success",
    "events_returned": 2
  },
  {
    "step": 2,
    "agent": "Evidence Collector",
    "tool": "splunk.search",
    "query_name": "oauth_refresh_token_reuse",
    "status": "success",
    "events_returned": 3
  },
  {
    "step": 3,
    "agent": "Threat Assessor",
    "tool": "local.rule_engine",
    "status": "success",
    "findings": ["identity_compromise", "oauth_persistence", "likely_exfiltration"]
  },
  {
    "step": 4,
    "agent": "Response Drafter",
    "tool": "report.generate_markdown",
    "status": "success",
    "output": "incident_brief"
  },
  {
    "step": 5,
    "agent": "Approval Coordinator",
    "tool": "approval.queue",
    "status": "waiting_for_human",
    "actions": ["revoke_token_families", "disable_oauth_grant"]
  }
]
```

## Human Approval Record

```json
{
  "action": "revoke_token_families",
  "approved_by": "human-analyst",
  "approved_at": "2026-06-06T09:17:10Z",
  "justification": "Evidence shows token replay from unmanaged ASN followed by large export."
}
```

## Production Requirement

Every production response action should have the originating finding, evidence references, tool call history, human approval state, and result status.
