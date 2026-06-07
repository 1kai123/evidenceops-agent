# FIND EVIL Terminal Demo Script

Target length: under 5 minutes.

## Shot 1: Repository And Setup

Show:

```bash
ls
cd findevil
ls
```

Narration:

EvidenceOps Agent has a FIND EVIL terminal edition. It runs with Python standard library only and reads a local evidence JSON case file.

## Shot 2: Evidence File

Show:

```bash
cat evidence/oauth_token_theft_case.json
```

Narration:

The case includes identity, OAuth, storage, and endpoint artifacts. Every artifact has an evidence ID so findings can be traced.

## Shot 3: Run Agent

Show:

```bash
python3 agent.py evidence/oauth_token_theft_case.json --log execution_log_sample.json
```

Narration:

The agent generates a structured investigation brief, assigns risk, maps findings to evidence IDs, and puts disruptive actions behind approval gates.

## Shot 4: Self-Correction

Show:

```bash
cat execution_log_sample.json
```

Narration:

The important moment is self-correction. The agent initially considers confirmed exfiltration, validates the storage artifact, sees that external destination proof is missing, and downgrades the claim to likely exfiltration.

## Shot 5: Live UI

Show the GitHub Pages demo and run the OAuth Token Theft scenario.

Narration:

The web workspace is the analyst-facing view. The terminal agent is the judge-verifiable execution path.
