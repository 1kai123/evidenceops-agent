# SIFT / DFIR Integration Plan

EvidenceOps Agent can be extended from a telemetry cockpit into a DFIR assistant by ingesting SIFT Workstation or Protocol SIFT outputs.

## Intended DFIR Inputs

- Timeline artifacts from Plaso/log2timeline.
- Browser history and download records.
- Windows event logs.
- File system metadata.
- Memory triage summaries.
- Network indicators from case notes.

## Normalized Evidence Schema

```json
{
  "time": "2026-06-06T09:24:00Z",
  "source": "dfir.timeline",
  "host": "FIN-LAPTOP-02",
  "actor": "finance-admin",
  "title": "Token replay",
  "body": "Refresh token family observed from unmanaged ASN after MFA prompt burst.",
  "artifact": "plaso-output.csv:18291"
}
```

## Example Pipeline

```text
SIFT artifact export
  -> evidence normalizer
  -> Evidence Collector Agent
  -> Threat Assessor Agent
  -> Response Drafter Agent
  -> Human Approval Coordinator
```

## Mock CLI Contract

A future CLI could accept a case folder:

```powershell
node tools/ingest-dfir.js --case .\cases\oauth-token-theft --out evidence.json
```

The output would match the same `events` shape used in `app.js`, allowing the UI and report generator to remain unchanged.

## FIND EVIL Positioning

For FIND EVIL, EvidenceOps Agent should be submitted as an evidence-first incident response assistant:

- It does not execute destructive containment automatically.
- It keeps evidence references attached to each finding.
- It preserves a tool execution log.
- It queues risky response actions for human approval.

## Current Prototype Limitation

The current version uses synthetic data and does not yet parse real SIFT artifacts. `DATASET.md`, `ACCURACY_REPORT.md`, and `EXECUTION_LOG_SAMPLE.md` document the mock ground truth, current verification, and production audit trail expectations.
