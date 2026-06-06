# Judging Highlights

Use this file to quickly explain why EvidenceOps Agent is worth judging seriously.

## Strongest Differentiators

- Explainable by default: every score is tied to evidence, not just a model output.
- Multi-agent structure: collector, assessor, drafter, and approval coordinator have distinct responsibilities.
- Human approval gate: disruptive response actions are queued for review before execution.
- Multi-scenario demo: OAuth token theft, ransomware prelude, and insider exfiltration show breadth.
- Static and portable: judges can open the app without cloud credentials.
- Integration-ready: Splunk, MCP, SIFT/DFIR, Jira, Slack, and report export paths are documented.

## Demo Path for Judges

1. Open the demo.
2. Select `OAuth Token Theft`.
3. Click `Run agent`.
4. Review the critical risk score and evidence timeline.
5. Approve one item in the Human Approval Queue.
6. Read the generated incident brief.
7. Switch to another scenario to show repeatability.

## Best Submission Framing

For Band of Agents, call it a regulated enterprise workflow where agents coordinate incident response but keep the human in control.

For Splunk Agentic Ops, call it an agentic SecOps cockpit that consumes Splunk searches and turns them into evidence timelines, risk scores, and response drafts.

For FIND EVIL!, call it an evidence-first DFIR assistant with a SIFT/Protocol SIFT integration roadmap, mock case dataset, accuracy report, and execution log model.

## What Is Already Built

- Browser-based demo UI.
- Three incident scenarios.
- Evidence timeline and alert feed.
- Risk score and confidence display.
- Agent reasoning cards.
- Human approval queue.
- Generated incident brief.
- Copy and download report actions.
- Architecture and integration documentation.

## Honest Limitations

- Current telemetry is mocked for demo reliability.
- Real Splunk/SIFT connectors are documented but not implemented.
- The accuracy report is a prototype benchmark, not a production validation.
- Automated containment is intentionally not executed in the demo.

These limitations are acceptable for a hackathon prototype because the core workflow, interaction model, and integration direction are visible.
