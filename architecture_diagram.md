# EvidenceOps Agent Architecture Diagram

```mermaid
flowchart LR
  analyst[Security analyst] --> ui[EvidenceOps Agent web workspace]

  subgraph App["Static HTML/CSS/JavaScript prototype"]
    ui --> scenarios[Scenario telemetry store]
    scenarios --> timeline[Evidence timeline builder]
    scenarios --> scoring[Risk and confidence scoring]
    scenarios --> trace[Splunk MCP-style tool trace]
    timeline --> brief[Incident brief generator]
    scoring --> approvals[Human approval queue]
    trace --> approvals
  end

  subgraph Splunk["Production Splunk integration path"]
    saved[Splunk saved searches] --> mcp[Splunk MCP Server or Splunk APIs]
    es[Splunk ES notable events] --> mcp
    indexes[Identity, endpoint, DLP, proxy, backup indexes] --> mcp
  end

  mcp -. replaces mock telemetry .-> scenarios
  approvals --> actions[Controlled response actions]
  brief --> exports[Markdown, Jira, Slack, PDF exports]
```

The submitted demo uses deterministic mock telemetry so judges can replay each incident scenario without credentials. In production, the scenario telemetry store would be replaced by Splunk saved searches, Splunk MCP Server calls, Splunk Enterprise Security notable events, or Splunk API responses. Splunk remains the system of record for operational data, while EvidenceOps Agent provides explainable investigation, risk scoring, approval gates, and report generation.
