# Demo Narration

Use this script for a 2-3 minute public demo video. The best first submission target is Splunk Agentic Ops, so the narration emphasizes agentic SecOps, evidence handling, and human-in-the-loop response.

## Recording Setup

- Open the deployed demo URL after GitHub Pages is enabled.
- Use a 16:9 browser window.
- Start on the default dashboard.
- Recommended scenario: `OAuth Token Theft`.
- Keep the final video under 3 minutes.

## Voiceover Script

### 0:00-0:15 Opening

EvidenceOps Agent is an explainable AI incident response workspace for security teams. It turns fragmented alerts into an evidence-linked response packet with a risk score, agent reasoning, human approval gates, and a downloadable incident brief.

### 0:15-0:35 Scenario

The demo includes three replayable incidents: OAuth token theft, ransomware prelude, and insider exfiltration. I will start with OAuth token theft because it combines identity compromise, OAuth persistence, and suspicious data access in one chain.

### 0:35-1:10 Run The Agent

When I click Run agent, the workspace correlates alerts from identity, OAuth, endpoint, storage, DLP, and proxy systems. The result is not just a black-box score. The agent builds a timeline, assigns risk and confidence, and explains which evidence supports each conclusion.

### 1:10-1:40 Human Approval

High-impact response actions are not executed blindly. The agent creates a human approval queue for steps such as revoking tokens, disabling suspicious OAuth grants, freezing writes, or opening a legal hold. A responder can approve an action only after reviewing the supporting evidence.

### 1:40-2:10 Incident Brief

The bottom panel generates the incident brief. It summarizes what happened, cites the evidence timeline, lists recommended containment steps, and preserves the approval gates. The report can be copied or downloaded for a case record, Jira ticket, Slack handoff, or leadership update.

### 2:10-2:35 Splunk Integration

The current prototype uses mock telemetry so judges can run it without credentials. In a Splunk deployment, those mock events are replaced with saved searches or Splunk MCP Server calls. Splunk remains the telemetry system of record, while EvidenceOps Agent becomes the analyst cockpit for timeline reconstruction, explainable assessment, and controlled response.

### 2:35-2:45 Closing

The key idea is fast agentic response with evidence and human control. EvidenceOps Agent helps teams move from noisy alerts to a defensible incident response plan.

## On-Screen Actions

1. Show the dashboard title and scenario selector.
2. Select `OAuth Token Theft`.
3. Click `Run agent`.
4. Pause on the risk score and confidence.
5. Point to the evidence timeline.
6. Point to the agent reasoning cards.
7. Click one `Mark approved` action.
8. Show the generated incident brief.
9. Mention `Copy report` and `Download report`.
10. Briefly switch to another scenario to show repeatability.

## Subtitle Text

EvidenceOps Agent turns fragmented security alerts into an explainable response packet.

It correlates identity, OAuth, endpoint, storage, DLP, and proxy signals into one incident timeline.

The agent scores the incident and explains which evidence supports each conclusion.

High-impact containment actions are queued for human approval before execution.

The generated incident brief can be copied or downloaded for handoff.

In production, mock telemetry can be replaced with Splunk saved searches or Splunk MCP Server calls.

## Upload Checklist

- Video length is under 3 minutes.
- Repository URL is visible or included in the video description.
- Demo URL is visible or included in the video description after Pages is enabled.
- The video shows `Run agent`.
- The video shows at least one approval action.
- The video shows the generated incident brief.
- The description includes: `Built with HTML, CSS, JavaScript, mock SIEM telemetry, Splunk integration design, and agent workflow design.`
