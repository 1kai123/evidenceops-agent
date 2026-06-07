# Splunk MCP Evidence Pack

This file gives judges a direct path from the demo UI to Splunk MCP Server and Splunk AI Toolkit concepts.

## Official Product Alignment

- Splunk MCP Server provides a secure, standardized interface for AI assistants and agents to connect with Splunk platform data.
- Splunk AI Toolkit includes Agent Builder, hosted foundation models, knowledge bases, MCP server support, and governed agent workflows.
- EvidenceOps Agent uses deterministic mock telemetry today so judges can replay incidents without credentials; the same UI contract maps to Splunk MCP Server tool calls in production.

References:

- Splunk MCP Server docs: https://help.splunk.com/en/splunk-cloud-platform/mcp-server-for-splunk-platform/1.2/about-mcp-server-for-splunk-platform
- Splunk AI Toolkit: https://www.splunk.com/en_us/products/ai-toolkit.html

## What Was Added for Judges

- `splunk/savedsearches.conf`: concrete SPL saved-search prototypes for OAuth token theft, ransomware prelude, and insider exfiltration.
- `splunk/mcp_tool_manifest.json`: maps EvidenceOps agents to MCP-style tools and guardrails.
- `splunk/mock_mcp_trace_oauth.json`: an auditable example of tool call inputs, outputs, and Splunk search IDs.
- `splunk/appinspect_checklist.md`: implementation path for Splunk Developer Tools and AppInspect.

## Bonus Prize Positioning

### Best Use of Splunk MCP Server

EvidenceOps Agent is designed around a visible tool trace. The analyst can inspect which search ran, what evidence returned, and whether the agent is allowed to take action. This aligns with MCP as a governed bridge between AI systems and Splunk data.

### Best Use of Splunk Developer Tools

The repository now includes saved search prototypes and an AppInspect-oriented packaging checklist. A production implementation would ship these under a Splunk app package and run AppInspect before deployment.

## Trust Boundary

The project intentionally separates:

1. Read-only evidence collection from Splunk.
2. Risk and confidence scoring.
3. Human approval for high-impact containment.
4. Ticket or response action creation after approval.

This is the core differentiator: the agent does not hide behind a risk score, and it does not execute disruptive actions without a human checkpoint.
