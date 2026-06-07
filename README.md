# EvidenceOps Agent

EvidenceOps Agent is an AI incident response workspace built for online hackathon submission. It turns scattered security alerts into an explainable response packet: risk score, evidence timeline, agent reasoning, human approval gates, and a submission-ready incident brief.

## Hackathon Targets

- FIND EVIL!: automated incident response and forensic reasoning.
- Splunk Agentic Ops Hackathon: agentic security operations and observability workflow.
- Band of Agents: multi-agent enterprise workflow, with agents for evidence collection, threat assessment, and response drafting.

## Submission Pack

- `ONE_PAGE_PITCH.md`: judge-friendly one-page pitch.
- `CURRENT_STATUS.md`: current publish/submission status and next actions.
- `JUDGING_HIGHLIGHTS.md`: strongest differentiators and demo path.
- `SUBMISSION_RISKS.md`: risks that can weaken the submission and how to mitigate them.
- `DEVPOST_ANSWERS.md`: copy-ready answers for common hackathon forms.
- `SPLUNK_SUBMISSION_READY.md`: focused Splunk Agentic Ops submission copy.
- `SPLUNK_MCP_EVIDENCE_PACK.md`: judge-facing Splunk MCP and AI Toolkit alignment.
- `splunk/`: saved searches, MCP tool manifest, mock trace, and AppInspect checklist.
- `PRIZE_CLAIM_GUIDE_CN.md`: Chinese checklist for prize claiming, W-8BEN, and payment preparation.
- `VIDEO_SHOTLIST.md`: 2-3 minute demo recording script.
- `DEMO_NARRATION.md`: full demo voiceover, subtitles, and upload checklist.
- `FINAL_SUBMISSION_CHECKLIST.md`: final publish, deploy, video, and submission checklist.

## Demo

Open `index.html` in a browser.

1. Click the reload icon to load the sample incident.
2. Pick one of the incident scenarios: OAuth token theft, ransomware prelude, or insider exfiltration.
3. Click `Run agent`.
4. Review the risk score, evidence timeline, Splunk readiness strip, reasoning cards, MCP-style tool trace, approval queue, and incident brief.
5. Use `Copy report` or `Download report` for the submission narrative.

## What It Shows

- Multi-source alert correlation across identity, OAuth, endpoint, storage, backup, developer, DLP, and proxy signals.
- Evidence-linked explanation instead of a black-box risk score.
- Splunk-ready saved search and MCP-style tool trace outputs for each incident.
- Judge proof pack that maps the static demo to Splunk MCP Server, saved searches, and Splunk Developer Tools.
- Human approval checkpoint before taking disruptive actions such as token revocation.
- Multi-scenario replay for judging and demo videos.
- A reusable UI that can later connect to Splunk, SIEM data, or MCP tools.

## Future Integration

- Replace mock scenario data with Splunk search results.
- Add MCP tools for log retrieval and ticket creation.
- Use `SPLUNK_INTEGRATION.md` as the planned SPL and Splunk MCP mapping.
- Use `SIFT_DFIR_INTEGRATION.md` as the planned DFIR artifact ingestion model.
- Use `EXECUTION_LOG_SAMPLE.md` as the production audit trail model.
- Export the incident brief as Markdown, PDF, or Slack/Jira payload.
- Add a replay mode for judging/demo videos.

## Demo Script

EvidenceOps Agent helps responders move from noisy alerts to a defensible response plan. In this scenario, the agent correlates MFA fatigue, an OAuth grant, token replay, and a large payroll archive download. It assigns a critical risk score, cites the evidence timeline, and drafts immediate response steps: revoke token families, disable the OAuth grant, quarantine artifacts, audit file reads, and notify leadership.
