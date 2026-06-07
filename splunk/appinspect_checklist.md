# Splunk Developer Tools and App Inspect Checklist

EvidenceOps Agent is currently submitted as a static browser prototype. This checklist documents the path to a Splunk app-quality build for the Best Use of Splunk Developer Tools bonus prize.

## Packaging Path

- Create a Splunk app folder: `evidenceops_agent/`.
- Place saved searches in `default/savedsearches.conf`.
- Place app metadata in `default/app.conf`.
- Keep sample data and dashboards separate from production configuration.
- Run Splunk AppInspect before publishing or installing in a shared environment.

## AppInspect-Focused Controls

- No hard-coded credentials, bearer tokens, private keys, or real customer data.
- All searches are parameterized and scoped by role.
- No automatic containment action without a human approval event.
- Tool calls and generated incident briefs write audit logs.
- Example configs and datasets are documented in the repository.

## Current Repository Evidence

- `splunk/savedsearches.conf`: saved search prototypes for the three demo scenarios.
- `splunk/mcp_tool_manifest.json`: MCP tool-to-agent mapping with guardrails.
- `splunk/mock_mcp_trace_oauth.json`: auditable MCP-style trace for the OAuth scenario.
- `SPLUNK_INTEGRATION.md`: SPL mapping and production integration notes.
- `architecture_diagram.md`: root architecture diagram required by the hackathon.
