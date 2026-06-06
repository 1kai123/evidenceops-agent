# Accuracy Report

## Scope

This report covers the current static prototype of EvidenceOps Agent. The prototype uses synthetic scenarios and transparent deterministic scoring rules.

## Ground Truth

Each scenario has an expected finding documented in `DATASET.md`:

- OAuth Token Theft: identity compromise, OAuth persistence, and likely exfiltration.
- Ransomware Prelude: pre-encryption ransomware staging.
- Insider Exfiltration: likely insider exfiltration and policy evasion.

## Verification Performed

The UI was tested across all three scenarios. For each scenario:

- The scenario selector loaded the correct incident.
- `Run agent` produced three reasoning cards.
- The generated report included the selected scenario name.
- The approval queue produced two human approval actions.
- One approval action could be marked approved.

## False Positives and False Negatives

Because the dataset is synthetic and rule-based, the current prototype does not measure real-world false positives or false negatives.

Potential false positive risks in a production version:

- Legitimate travel or VPN behavior may look like impossible travel.
- Backup maintenance can resemble ransomware prelude behavior.
- A departing engineer may clone repositories for legitimate handoff work.

Potential false negative risks:

- Slow, low-volume exfiltration may evade simple thresholds.
- Token theft without impossible travel may require deeper OAuth telemetry.
- Ransomware preparation may avoid mass rename rehearsal.

## Hallucination Controls

- The prototype does not generate unsupported claims beyond embedded scenario data.
- Every report cites timeline events from the selected scenario.
- Human approval gates prevent the UI from implying that disruptive actions have already been executed.

## Evidence Integrity

- The prototype is read-only with respect to evidence data.
- No destructive actions are available.
- Response actions are recommendations only until a human marks them approved.

## Next Accuracy Work

- Add real or public training case data.
- Add structured execution logs with timestamps and tool calls.
- Compare agent findings to known ground truth.
- Track false positives, missed findings, and unsupported claims.
