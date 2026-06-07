# EvidenceOps Agent: FIND EVIL Terminal Edition

This folder contains a terminal-running edition for FIND EVIL! judges. It uses only Python standard library modules so it can run on a Linux terminal or SIFT-style workstation without extra dependencies.

## Run

```bash
python3 agent.py evidence/oauth_token_theft_case.json --log execution_log_sample.json
```

## What The Agent Demonstrates

- Evidence ingestion from a case JSON file.
- Tool-style analysis steps with timestamps.
- Findings mapped to specific evidence IDs.
- A self-correction sequence: the agent detects that external destination proof is missing and changes "confirmed exfiltration" to "likely exfiltration".
- Human approval gates for disruptive actions.

## Files

- `agent.py`: terminal agent.
- `evidence/oauth_token_theft_case.json`: sample case evidence.
- `execution_log_sample.json`: generated sample execution log.
