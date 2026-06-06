# EvidenceOps Agent One-Page Pitch

## Product

EvidenceOps Agent is an explainable AI incident response workspace for security teams. It turns scattered alerts into a risk-scored, evidence-linked response packet that a human analyst can approve.

## Problem

Security incidents rarely arrive as one clean alert. Analysts must connect identity events, OAuth grants, endpoint signals, storage downloads, DLP warnings, proxy traffic, backup anomalies, and developer activity before they can decide whether to contain an account or escalate the case.

That reconstruction is slow, repetitive, and risky. A black-box AI answer is not enough because security teams need evidence, confidence, audit trails, and approval boundaries.

## Solution

EvidenceOps Agent uses a coordinated agent workflow:

- Evidence Collector normalizes alerts into a timeline.
- Threat Assessor scores the incident and explains the attack path.
- Response Drafter writes an analyst-ready incident brief.
- Approval Coordinator separates high-impact actions from safe automation.

The current demo includes three replayable scenarios: OAuth token theft, ransomware prelude, and insider exfiltration.

For Splunk Agentic Ops, the UI also exposes how the workflow maps to production telemetry: each scenario shows data source coverage, MCP-style tool calls, and approval gates before containment actions.

## Why Now

AI agents are becoming practical for security operations, but high-stakes workflows need guardrails. EvidenceOps Agent shows how an agent can move fast while still preserving human control and evidence transparency.

## What Judges Can Verify

- Run the static demo locally or from a deployed URL.
- Switch between three incident scenarios.
- Click `Run agent` to generate risk, confidence, reasoning, Splunk tool traces, approvals, and a report.
- Inspect the architecture, dataset notes, accuracy notes, Splunk plan, SIFT/DFIR plan, and execution log sample.

## Hackathon Fit

- Band of Agents: multi-agent enterprise workflow with human approval gates.
- Splunk Agentic Ops: agentic SecOps layer over Splunk telemetry.
- FIND EVIL!: evidence-first DFIR workflow with SIFT integration path.

## Next Milestones

- Replace mock telemetry with Splunk saved searches.
- Add MCP/SIFT ingestion for forensic artifacts.
- Persist execution logs and analyst approvals.
- Export reports to Jira, Slack, Markdown, and PDF.
