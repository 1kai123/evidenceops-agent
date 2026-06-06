# Submission Risks

This file lists issues that can weaken the submission and the fastest mitigation for each one.

## Risk 1: No Public Repository

Impact: Most hackathons require a public code URL.

Mitigation: Create a public GitHub repository named `evidenceops-agent`, push this folder, and update `DEVPOST_ANSWERS.md` plus `SUBMISSION_VALUES.json`.

## Risk 2: No Public Demo URL

Impact: Judges may not run a local static app.

Mitigation: Deploy with GitHub Pages or Netlify. The repository already includes a GitHub Pages workflow and `netlify.toml`.

## Risk 3: No Demo Video

Impact: Many judges watch the video before opening the repo.

Mitigation: Record a 2-3 minute walkthrough using `VIDEO_SHOTLIST.md`. Start with the OAuth Token Theft scenario and show one approval action.

## Risk 4: Mock Data Looks Too Lightweight

Impact: Security judges may expect stronger DFIR or SIEM grounding.

Mitigation: Point to `DATASET.md`, `ACCURACY_REPORT.md`, `SPLUNK_INTEGRATION.md`, `SIFT_DFIR_INTEGRATION.md`, and `EXECUTION_LOG_SAMPLE.md`.

## Risk 5: Project Seems Like a Dashboard, Not an Agent

Impact: Agent-focused hackathons reward autonomous workflow design.

Mitigation: Emphasize the four-agent model: Evidence Collector, Threat Assessor, Response Drafter, and Approval Coordinator.

## Risk 6: Automated Actions Feel Unsafe

Impact: Incident response automation can look dangerous if it appears to revoke access without review.

Mitigation: Highlight the Human Approval Queue and explain that high-impact containment is queued, not blindly executed.

## Risk 7: Wrong Hackathon Order

Impact: Spending time on the hardest target first may reduce the chance of prize-ready submission.

Mitigation: Submit in this order: Band of Agents, Splunk Agentic Ops, then FIND EVIL after improving DFIR evidence.

## Fastest Path to Submit

1. Publish GitHub repository.
2. Deploy static demo.
3. Record demo video.
4. Fill Band of Agents submission with `DEVPOST_ANSWERS.md`.
5. Reuse the same project for Splunk Agentic Ops with `SPLUNK_INTEGRATION.md`.
