# Hackathon Targets

Current date: 2026-06-06.

## Priority 1: Band of Agents

Why:

- Strong thematic fit for multi-agent enterprise workflows.
- EvidenceOps Agent already maps cleanly to Evidence Collector, Threat Assessor, Response Drafter, and Approval Coordinator agents.
- Static demo is enough to show the workflow.

Submit as:

Regulated or high-stakes enterprise incident response workflow.

Needs:

- GitHub repository.
- Demo URL.
- Demo video.
- Project description from `DEVPOST_ANSWERS.md`.

## Priority 2: Splunk Agentic Ops Hackathon

Why:

- Security/observability fit is strong.
- Project can be framed as a Splunk-ready agentic SecOps cockpit.
- `ARCHITECTURE.md` already explains how Splunk searches feed the agent workflow.

Submit as:

Agentic SecOps workspace for Splunk telemetry.

Needs:

- Public repository.
- Public demo video under 3 minutes.
- Architecture diagram in repo.
- Description of how Splunk data would replace mock telemetry.

Extra improvement before final submission:

- Add one mock SPL query block to README or architecture docs.

## Priority 3: FIND EVIL!

Why:

- High prize pool and strong security theme.
- Harder fit because it expects DFIR/SIFT-specific evidence, execution logs, and accuracy reporting.

Submit as:

Evidence-first incident response agent prototype.

Needs before strong submission:

- More explicit SIFT/DFIR integration.
- Execution log sample.
- Accuracy report with case-style ground truth.

Already prepared:

- `DATASET.md`
- `ACCURACY_REPORT.md`
- `ARCHITECTURE.md`

## Submission Order

1. Publish GitHub repository.
2. Deploy GitHub Pages or Netlify demo.
3. Record 2-3 minute demo video.
4. Submit Band of Agents.
5. Submit Splunk Agentic Ops.
6. Improve DFIR/SIFT integration before FIND EVIL.

## Copy-Paste Positioning

EvidenceOps Agent is an explainable multi-agent incident response workspace. It correlates alerts into evidence timelines, scores incident risk, drafts a response brief, and queues risky containment actions for human approval.
