# Winning Upgrade Plan

Goal: make EvidenceOps Agent look less like a static hackathon mock and more like a production-ready Splunk agentic security workflow.

## Judging Criteria Response

### Technological Implementation

Current state: static HTML/CSS/JS prototype with deterministic scenario data.

Upgrade evidence now present:

- Saved search prototypes in `splunk/savedsearches.conf`.
- MCP tool mapping in `splunk/mcp_tool_manifest.json`.
- Mock MCP trace in `splunk/mock_mcp_trace_oauth.json`.
- AppInspect checklist in `splunk/appinspect_checklist.md`.

Next best upgrade:

- Add a real Splunk free-trial screenshot or export after connecting one saved search.
- Add a short `curl` or MCP-client transcript if a Splunk MCP endpoint becomes available.

### Design

Current state: usable analyst cockpit with alert feed, timeline, reasoning, approval queue, tool trace, and report.

Completed upgrade:

- Added a judge proof pack section to the live demo so judges see the repository evidence without digging.
- Updated the Devpost story to mention the Splunk evidence pack.
- Kept the demo dense and operational, not marketing-heavy.

### Potential Impact

Current state: clear Security track story around faster triage and safer containment.

Next best upgrade:

- Quantify expected impact in the story: minutes saved per investigation, reduced containment risk, and auditability.

### Quality of the Idea

Current state: explainable incident response with approval gates.

Next best upgrade:

- Emphasize the trust boundary: agent recommends, Splunk records, human approves, action executes.

## Bonus Prize Strategy

### Best Use of Splunk MCP Server

Strongest path. The visible tool trace and `splunk/mcp_tool_manifest.json` make this credible.

### Best Use of Splunk Developer Tools

Secondary path. The AppInspect checklist and saved searches help, but a packaged Splunk app would make it stronger.

### Best Use of Splunk Hosted Models

Weakest path right now. The project does not actually use Splunk-hosted models. Mention as future path only, unless a real integration is added.

## Immediate Devpost Update Copy

Added this idea to the Devpost project story:

> After submission, I added a judge-facing Splunk evidence pack with saved search prototypes, an MCP tool manifest, a mock MCP trace, and an AppInspect checklist so reviewers can see exactly how the static demo maps to a production Splunk agent workflow.
