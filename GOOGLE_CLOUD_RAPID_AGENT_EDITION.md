# Google Cloud Rapid Agent Edition

EvidenceOps Agent can be submitted as a fast Google Cloud Rapid Agent edition by framing the product as a Gemini-grounded security evidence agent.

## Contest Fit

- Hackathon: Google Cloud Rapid Agent Hackathon.
- Deadline: Jun 11, 2026 at 2:00 PM PDT.
- Prize pool: $60,000 cash.
- Submission angle: a functional AI agent that uses Gemini / Google Cloud Agent Builder style orchestration and the Dynatrace partner track to solve a real-world incident-response problem.

## Product Angle

EvidenceOps Agent helps a security team move from noisy alerts to a defensible response packet. The Google edition uses:

- Gemini for grounded incident summarization, uncertainty statements, and response drafting.
- Agent Builder style orchestration for the triage, retrieval, reasoning, approval, and brief-generation flow.
- Dynatrace-style observability and MCP retrieval for auditable correlation across infrastructure, application, identity, and security signals.
- Human approval gates before disruptive response actions.

## Judge Demo Path

1. Open the live demo: https://1kai123.github.io/evidenceops-agent/
2. Select `OAuth Token Theft`.
3. Click `Run agent`.
4. Point judges to the Google Cloud Rapid Agent edition section.
5. Show that the agent does not produce a black-box answer: it cites evidence, lists tool calls, exposes approval gates, and generates a response brief.

## Evidence Files

- `google-cloud/agent_builder_flow.json`
- `google-cloud/gemini_prompt_contract.md`
- `google-cloud/partner_mcp_mapping.md`
- `google-cloud/dynatrace_trace_sample.json`
- `splunk/mcp_tool_manifest.json`
- `splunk/mock_mcp_trace_oauth.json`

## Important Claim Boundary

This edition is a prototype and integration blueprint. It demonstrates the application workflow, prompt contract, Dynatrace-track mapping, MCP-style tool schema, and judge-facing product experience. It should not claim a fully deployed Google Cloud production backend unless that backend is added before submission.

## Submission Copy

EvidenceOps Agent is a Gemini-ready incident response workspace that turns security and observability alerts into an auditable response packet. The agent flow follows a Google Cloud Agent Builder style pattern: triage the alert, retrieve infrastructure and application evidence through Dynatrace/MCP-style tools, ask Gemini to draft a grounded incident brief, expose uncertainty, and require human approval before disruptive containment steps. The demo shows OAuth token theft, ransomware prelude, and insider exfiltration scenarios with evidence timelines, tool traces, approval gates, and copy/downloadable incident briefs.
