# FIND EVIL Evidence Dataset

## Dataset

`findevil/evidence/oauth_token_theft_case.json`

## Case Summary

The sample case models an OAuth token theft investigation against a finance administrator account. The case includes identity, OAuth, cloud storage, and endpoint artifacts.

## Evidence Artifacts

| ID | Type | Artifact | Finding supported |
| --- | --- | --- | --- |
| EV-001 | identity | identity log | MFA fatigue |
| EV-002 | identity | identity log | impossible travel |
| EV-003 | oauth | OAuth audit log | suspicious grant with `offline_access` |
| EV-004 | oauth | OAuth audit log | refresh token family reuse |
| EV-005 | storage | cloud storage log | large payroll archive download |
| EV-006 | endpoint | process log | credential cache metadata touch |

## Ground Truth

- Confirmed: MFA fatigue, impossible travel, suspicious OAuth grant, refresh token replay, archive download, endpoint credential-cache touch.
- Inference: likely account compromise and OAuth persistence.
- Corrected inference: data exfiltration is likely but not confirmed because the sample evidence does not include an external destination artifact.

## Why This Dataset Helps Judging

The dataset intentionally includes enough evidence to support a serious incident but withholds one decisive proof item. This forces the agent to self-correct and avoid overstating exfiltration.
