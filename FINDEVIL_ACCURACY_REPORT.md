# FIND EVIL Accuracy Report

## Test Run

Command:

```bash
cd findevil
python3 agent.py evidence/oauth_token_theft_case.json --log execution_log_sample.json
```

## Results

| Finding | Evidence | Assessment |
| --- | --- | --- |
| Compromised identity likely | EV-001, EV-002 | Correct inference. MFA fatigue plus impossible travel supports likely compromise. |
| OAuth persistence likely | EV-003, EV-004 | Correct inference. `offline_access` and token replay support persistence. |
| Likely data exfiltration | EV-005 | Correctly cautious. Archive download is proven, but external destination is not. |
| Endpoint triage required | EV-006 | Correct. Endpoint signal is suspicious but needs collection before attribution. |

## Self-Correction

The agent starts with the candidate claim `confirmed exfiltration`. During validation, it checks whether the storage artifact includes `external_destination_confirmed: true`. Because the sample case sets this to `false`, the agent changes the finding to `Likely data exfiltration` and records the correction in `findevil/execution_log_sample.json`.

## False Positives

- No confirmed exfiltration claim is emitted.
- No malware attribution is emitted.
- No destructive action is executed.

## Missed Artifacts

The current sample does not include browser history, memory artifacts, packet capture, or full disk image evidence. A stronger version should add these artifacts and verify the endpoint credential-cache event with SIFT tools.

## Hallucination Controls

- Every finding contains evidence IDs.
- The agent emits uncertainty when decisive proof is missing.
- Destructive actions are placed behind human approval gates.
