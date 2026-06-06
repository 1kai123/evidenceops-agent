# Demo Video Shot List

Target length: 2 minutes 30 seconds.

## 0:00-0:15 Opening

Say:

"EvidenceOps Agent is an explainable AI incident response workspace. It turns fragmented security alerts into an evidence-linked response packet with a risk score, agent reasoning, human approval gates, and a downloadable report."

Show:

- The dashboard title.
- The scenario selector.
- The score strip.

## 0:15-0:45 Scenario Selection

Say:

"The prototype includes three replayable incidents: OAuth token theft, ransomware prelude, and insider exfiltration. I will start with OAuth token theft because it shows identity compromise, OAuth persistence, and data exfiltration in one chain."

Show:

- Open the scenario selector.
- Choose OAuth Token Theft.
- Point to the alert feed and evidence timeline.

## 0:45-1:20 Run Agent

Say:

"When I click Run Agent, the workspace scores the incident and explains why. The agent identifies identity compromise, OAuth persistence, and likely exfiltration. Each conclusion is tied to evidence from the timeline."

Show:

- Click `Run agent`.
- Highlight the risk score.
- Highlight the three reasoning cards.

## 1:20-1:50 Human Approval

Say:

"High-impact actions are not executed blindly. The agent creates a human approval queue. A responder can approve token revocation or OAuth grant disablement only after reviewing the evidence."

Show:

- Click `Mark approved` on one action.
- Show the approval state change.

## 1:50-2:15 Report

Say:

"The bottom panel generates the incident brief. It includes what happened, evidence timeline, recommended response, and approval gates. The report can be copied or downloaded for handoff to leadership, Jira, Slack, or a case record."

Show:

- Scroll or point to the report panel.
- Click or mention `Copy report` and `Download report`.

## 2:15-2:30 Closing

Say:

"The current demo uses mock telemetry so it is easy for judges to run. The next integration connects the same workflow to Splunk searches, Splunk MCP Server, SIFT tools, or endpoint triage data."

Show:

- Briefly switch to another scenario to prove replayability.
