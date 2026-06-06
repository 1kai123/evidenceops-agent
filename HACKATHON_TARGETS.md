# Hackathon Targets

Current date: 2026-06-06.

## Verified Open / Upcoming Targets

These were checked on 2026-06-06.

| Priority | Hackathon | Status | Deadline | Prize | Submission link | Best fit |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Splunk Agentic Ops Hackathon | Open | Jun 15, 2026, 9:00 AM PDT | $20,000 cash | https://splunk.devpost.com/ | Strongest immediate fit for security/agentic ops |
| 2 | Band of Agents Hackathon | Registration opens Jun 12, 2026, 15:00 UTC | Jun 19, 2026, 15:00 UTC | $10,000+ | https://lablab.ai/ai-hackathons/band-of-agents-hackathon/live | Strong multi-agent enterprise fit |
| 3 | FIND EVIL! | Open | Jun 15, 2026, 11:45 PM EDT | $22,000+ cash | https://findevil.devpost.com/ | Good security fit, but requires stronger SIFT/DFIR execution |
| 4 | UiPath AgentHack | Open | Jun 29, 2026, 11:45 PM PDT | $50,000 cash | https://uipath-agenthack.devpost.com/ | Possible pivot to agentic enterprise automation/RPA |

## Priority 1: Splunk Agentic Ops Hackathon

Why:

- It is open now and accepts online submissions.
- The Security track maps directly to EvidenceOps Agent.
- The official judging direction emphasizes human-in-the-loop agentic operations, which is already central to the demo.
- Required materials match what is already prepared: public repo, open-source license, README, architecture diagram, demo video under 3 minutes, and Splunk interaction plan.

Submit as:

Agentic SecOps workspace for Splunk telemetry.

Needs:

- Public GitHub repository.
- Public demo URL.
- Demo video under 3 minutes.
- Project description from `DEVPOST_ANSWERS.md`.
- Use `SPLUNK_INTEGRATION.md` to explain saved searches, SPL inputs, and Splunk MCP mapping.

Best track:

Security.

Source notes:

- Official Devpost page lists online/public status, $20,000 cash prize, June 15 deadline, and the Security/Observability/Platform tracks.
- Splunk's announcement says the hackathon is for developers, security professionals, IT/network engineers, and observability teams, and specifically highlights human-in-the-loop judging.

## Priority 2: Band of Agents

Why:

- Strong thematic fit for multi-agent enterprise workflows.
- EvidenceOps Agent already maps cleanly to Evidence Collector, Threat Assessor, Response Drafter, and Approval Coordinator agents.
- Static demo is enough to show the workflow.
- It has a later deadline than Splunk/FIND EVIL, giving time to add any required Band/Codeband API framing after registration opens.

Submit as:

Regulated or high-stakes enterprise incident response workflow.

Needs:

- GitHub repository.
- Demo URL.
- Demo video.
- Project description from `DEVPOST_ANSWERS.md`.
- Check whether the official Band Agent API is required after registration opens.

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
- `EXECUTION_LOG_SAMPLE.md`
- `SIFT_DFIR_INTEGRATION.md`

Fastest improvement:

- Add a small generated Protocol SIFT-style JSON execution trace and render it in the demo or include it as a downloadable artifact.
- Strengthen `ACCURACY_REPORT.md` with scenario-by-scenario expected vs observed findings.
- In the video, explicitly mention that the current prototype is the analyst cockpit and the SIFT/MCP connector is the next integration layer.

## Priority 4: UiPath AgentHack

Why:

- Large prize pool and later deadline.
- EvidenceOps could be reframed as enterprise incident response automation with approval-controlled robotic actions.

Why it is not first:

- Current implementation does not use UiPath tooling.
- A credible submission would need a real UiPath automation or at least a clear Maestro/agentic automation workflow.

Possible pivot:

- Use UiPath-style automations for ticket creation, evidence collection, report routing, or approval handoff.
- Keep the current UI as the control desk and add a documented automation workflow.

## Submission Order

1. Publish GitHub repository.
2. Deploy GitHub Pages or Netlify demo.
3. Record 2-3 minute demo video.
4. Submit Splunk Agentic Ops.
5. Register for Band of Agents when registration opens on Jun 12.
6. Improve DFIR/SIFT integration before FIND EVIL.
7. Decide whether to pivot for UiPath AgentHack after the first two submissions.

## Copy-Paste Positioning

EvidenceOps Agent is an explainable multi-agent incident response workspace. It correlates alerts into evidence timelines, scores incident risk, drafts a response brief, and queues risky containment actions for human approval.
