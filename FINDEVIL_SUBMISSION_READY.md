# FIND EVIL! Submission Ready Pack

## Project Name

EvidenceOps Agent: Traceable IR Agent

## Short Description

EvidenceOps Agent is a traceable incident-response agent that turns case evidence into a structured investigation narrative, validates its own claims against artifacts, and records the full tool and reasoning sequence.

## Why It Fits FIND EVIL!

FIND EVIL! rewards autonomous execution, IR accuracy, auditability, guardrails, and usability. This edition adds a terminal-running agent path in `findevil/` so judges can run the sample investigation locally, inspect the evidence file, and verify that each finding maps back to an artifact.

## Run Instructions

```bash
cd findevil
python3 agent.py evidence/oauth_token_theft_case.json --log execution_log_sample.json
```

Windows PowerShell:

```powershell
cd .\findevil
python .\agent.py .\evidence\oauth_token_theft_case.json --log .\execution_log_sample.json
```

## Submission Links

- Live demo: https://1kai123.github.io/evidenceops-agent/
- Repository: https://github.com/1kai123/evidenceops-agent
- Demo video: https://youtu.be/9U1Q8vSjjBw
- Devpost submission: https://devpost.com/software/evidenceops-agent

## Submission Status

- Registered for FIND EVIL!.
- Submitted on Devpost.
- Current video risk: the video is the existing UI demo. FIND EVIL asks for a live terminal execution screencast with audio narration and at least one self-correction sequence. Replace the video before the deadline for stronger eligibility and judging fit.

## What To Emphasize

- Self-correction: the agent first treats the archive export as confirmed exfiltration, then downgrades wording to likely exfiltration after validation sees no external destination artifact.
- Accuracy validation: every finding cites evidence IDs from the case file.
- Audit trail: `findevil/execution_log_sample.json` records each step, tool name, input, output, and correction.
- Guardrails: destructive actions are recommendation-only and require human approval.
