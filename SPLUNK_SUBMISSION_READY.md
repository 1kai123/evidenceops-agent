# Splunk Agentic Ops Submission

Use this file for the Splunk Agentic Ops Hackathon submission.

Checked date: 2026-06-06.

## Event

- Hackathon: Splunk Agentic Ops Hackathon
- URL: https://splunk.devpost.com/
- Deadline: Jun 15, 2026, 9:00 AM PDT
- Prize pool: $20,000 cash
- Recommended track: Security

## Links

- Repository: https://github.com/1kai123/evidenceops-agent
- Demo URL: https://1kai123.github.io/evidenceops-agent/
- Demo video: https://youtu.be/9U1Q8vSjjBw
- Devpost submission: https://devpost.com/software/evidenceops-agent

## Project Name

EvidenceOps Agent

## Tagline

Explainable AI incident response with evidence timelines, multi-agent reasoning, and human approval gates.

## Short Description

EvidenceOps Agent is a Splunk-ready agentic SecOps cockpit. It turns fragmented identity, OAuth, endpoint, storage, DLP, proxy, backup, and developer alerts into an evidence timeline, risk score, human approval queue, and downloadable incident brief.

## What It Does

The demo supports three incident response scenarios: OAuth token theft, ransomware prelude, and insider exfiltration. For each scenario, the agent workflow normalizes alerts, reconstructs the timeline, scores the incident, explains the reasoning, shows Splunk data source coverage and MCP-style tool calls, queues high-impact actions for approval, and drafts a response brief.

The current prototype uses mock telemetry for judge-friendly replay. In a Splunk deployment, those mock arrays would be replaced with saved searches or Splunk MCP Server calls, as described in `SPLUNK_INTEGRATION.md`. The UI intentionally exposes the trace from saved search to evidence to approval gate so judges can inspect the agent workflow instead of trusting a black-box answer.

## Why It Fits Splunk

Splunk is strong at collecting and querying operational telemetry. EvidenceOps Agent focuses on what happens after detections fire: evidence reconstruction, explainable assessment, response drafting, and controlled action approval.

The Security track is the strongest fit because the project demonstrates incident triage, human-in-the-loop response, and audit-friendly evidence handling.

## How It Uses AI / Agents

EvidenceOps Agent is designed as four coordinated agents:

- Evidence Collector: retrieves and normalizes Splunk events.
- Threat Assessor: maps the timeline to attack patterns and generates risk/confidence.
- Response Drafter: writes the incident brief and recommended actions.
- Approval Coordinator: prevents disruptive containment until a human approves.

The prototype uses deterministic logic to make the judging demo inspectable without external credentials. The intended production version swaps the deterministic rules for model-backed reasoning while keeping the same evidence, tool trace, and approval boundaries.

## Built With

HTML, CSS, JavaScript, mock SIEM telemetry, Splunk integration design, agent workflow design.

## Repository Files to Mention

- `README.md`: product overview and run instructions.
- `ARCHITECTURE.md`: agent architecture and trust boundaries.
- `SPLUNK_INTEGRATION.md`: SPL examples and Splunk MCP mapping.
- `EXECUTION_LOG_SAMPLE.md`: sample audit trail for agent execution.
- `DEVPOST_ANSWERS.md`: general copy-ready answers.
- `VIDEO_SHOTLIST.md`: 2-3 minute demo recording plan.
- `DEMO_NARRATION.md`: full voiceover, subtitle text, and upload checklist.

## Demo Video Path

1. Open the deployed demo.
2. Select `OAuth Token Theft`.
3. Click `Run agent`.
4. Show the alert feed, evidence timeline, risk score, and reasoning cards.
5. Show the Splunk-ready workflow strip and MCP-style tool trace.
6. Approve one Human Approval Queue action.
7. Show the generated incident brief and explain the Splunk saved-search replacement path.

Keep the video under 3 minutes.

## Before Final Submit

- Verify repository is public.
- Verify GitHub Pages or Netlify demo returns HTTP 200.
- Demo video uploaded and set to unlisted.
- Demo video URL inserted into the submission materials.
- Final Devpost submit completed and verified.
