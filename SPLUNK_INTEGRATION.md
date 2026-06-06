# Splunk Integration Plan

EvidenceOps Agent currently uses synthetic telemetry in `app.js`. The intended Splunk integration replaces those arrays with saved searches or Splunk MCP Server calls.

## Data Inputs

### Identity Signals

```spl
index=identity sourcetype=auth user=finance-admin
| stats count values(src_ip) values(country) min(_time) max(_time) by user
| eval signal="identity"
```

### OAuth Signals

```spl
index=cloud sourcetype=oauth user=finance-admin
| search scope IN ("offline_access", "files.read", "mail.read")
| table _time user client_id scope src_ip asn
| eval signal="oauth"
```

### Storage Signals

```spl
index=storage sourcetype=file_activity user=finance-admin action IN ("download", "export")
| stats sum(bytes) as total_bytes values(path) as paths by user, session_id
| where total_bytes > 1000000000
| eval signal="storage"
```

### Endpoint Signals

```spl
index=endpoint sourcetype=process user=finance-admin
| search process_name IN ("powershell.exe", "cmd.exe", "wscript.exe")
| table _time host user process_name parent_process command_line
| eval signal="endpoint"
```

## Agent Flow

1. Run saved searches for identity, OAuth, storage, and endpoint signals.
2. Normalize results into the EvidenceOps event schema.
3. Score the case with transparent rule outputs.
4. Generate the incident brief.
5. Queue risky response actions for human approval.

## Splunk MCP Server Mapping

- `search`: run SPL and retrieve event tables.
- `saved_searches`: list approved detections.
- `notable_events`: pull ES notable events.
- `create_ticket`: open a case after human approval.

## Why This Matters

Splunk is strong at collecting and querying telemetry. EvidenceOps Agent focuses on the analyst workflow after detections fire: timeline reconstruction, explanation, response drafting, and approval boundaries.
