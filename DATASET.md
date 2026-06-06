# Dataset Documentation

The current prototype uses mock security telemetry designed to demonstrate the workflow without exposing real customer data or requiring judge credentials.

## Scenarios

### OAuth Token Theft

Signals:

- Impossible travel login.
- MFA prompt burst.
- Suspicious OAuth grant.
- Refresh token replay.
- Large payroll archive export.

Expected finding:

Likely identity compromise with OAuth persistence and data exfiltration.

### Ransomware Prelude

Signals:

- Dormant account reactivation.
- Temporary admin group membership.
- Backup catalog enumeration.
- Mass rename rehearsal on shared files.

Expected finding:

Likely pre-encryption ransomware staging requiring urgent containment.

### Insider Exfiltration

Signals:

- Departing engineer performs broad repository cloning.
- Source archive creation.
- Blocked upload to personal storage.
- Successful retry through alternate personal storage domain.

Expected finding:

Likely insider exfiltration requiring legal/HR evidence preservation.

## Reproducibility

All scenario data is embedded in `app.js`. To reproduce the demo:

1. Open `index.html`.
2. Select a scenario.
3. Click `Run agent`.
4. Confirm that the generated incident brief names the selected scenario and includes the corresponding timeline evidence.

## Accuracy Notes

This dataset is synthetic. The prototype demonstrates workflow, explainability, and approval design rather than claiming production detection accuracy.
