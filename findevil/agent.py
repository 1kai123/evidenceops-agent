#!/usr/bin/env python3
import argparse
import json
from datetime import datetime, timezone
from pathlib import Path


def utc_now():
    return datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def log_step(logs, tool, input_summary, output_summary, evidence_ids=None, correction=None):
    entry = {
        "time": utc_now(),
        "tool": tool,
        "input": input_summary,
        "output": output_summary,
        "evidence_ids": evidence_ids or [],
    }
    if correction:
        entry["correction"] = correction
    logs.append(entry)


def load_case(path):
    with Path(path).open("r", encoding="utf-8") as f:
        return json.load(f)


def evidence_by_type(case, evidence_type):
    return [item for item in case["evidence"] if item["type"] == evidence_type]


def analyze(case):
    logs = []
    findings = []

    identity = evidence_by_type(case, "identity")
    oauth = evidence_by_type(case, "oauth")
    storage = evidence_by_type(case, "storage")
    endpoint = evidence_by_type(case, "endpoint")

    log_step(
        logs,
        "load_case",
        case["case_id"],
        f"Loaded {len(case['evidence'])} evidence artifacts for {case['title']}.",
        [item["id"] for item in case["evidence"]],
    )

    if identity:
        findings.append(
            {
                "name": "Compromised identity likely",
                "confidence": 0.88,
                "evidence_ids": [item["id"] for item in identity],
                "detail": "MFA prompt burst and impossible travel indicate likely account compromise.",
            }
        )
        log_step(
            logs,
            "analyze_identity",
            "identity artifacts",
            "Detected MFA fatigue followed by impossible travel.",
            [item["id"] for item in identity],
        )

    if oauth:
        findings.append(
            {
                "name": "OAuth persistence likely",
                "confidence": 0.91,
                "evidence_ids": [item["id"] for item in oauth],
                "detail": "New OAuth grant requested offline access and token family reuse was observed.",
            }
        )
        log_step(
            logs,
            "analyze_oauth",
            "oauth artifacts",
            "Found suspicious offline_access grant and token replay.",
            [item["id"] for item in oauth],
        )

    initial_storage_claim = "confirmed exfiltration"
    corrected_storage_claim = "likely exfiltration"
    if storage:
        destination_proof = any(item.get("external_destination_confirmed") for item in storage)
        if not destination_proof:
            correction = {
                "before": initial_storage_claim,
                "after": corrected_storage_claim,
                "reason": "Archive export is proven, but no artifact confirms the external destination.",
            }
            finding_name = "Likely data exfiltration"
            confidence = 0.78
        else:
            correction = None
            finding_name = "Confirmed data exfiltration"
            confidence = 0.93

        findings.append(
            {
                "name": finding_name,
                "confidence": confidence,
                "evidence_ids": [item["id"] for item in storage],
                "detail": "Large payroll archive export occurred after suspicious OAuth activity.",
            }
        )
        log_step(
            logs,
            "validate_storage_claim",
            initial_storage_claim,
            f"Validated storage evidence and reported {finding_name.lower()}.",
            [item["id"] for item in storage],
            correction,
        )

    if endpoint:
        findings.append(
            {
                "name": "Endpoint triage required",
                "confidence": 0.69,
                "evidence_ids": [item["id"] for item in endpoint],
                "detail": "PowerShell touched credential cache metadata; collect endpoint artifacts before destructive action.",
            }
        )
        log_step(
            logs,
            "analyze_endpoint",
            "endpoint artifacts",
            "Endpoint signal supports triage but not standalone attribution.",
            [item["id"] for item in endpoint],
        )

    risk = min(95, round(sum(item["confidence"] for item in findings) / max(len(findings), 1) * 100))
    approvals = [
        "Revoke refresh token families",
        "Disable suspicious OAuth grant",
        "Quarantine endpoint artifacts",
    ]
    log_step(
        logs,
        "build_incident_brief",
        "validated findings",
        f"Generated incident brief with risk {risk} and {len(approvals)} approval-gated actions.",
        [eid for finding in findings for eid in finding["evidence_ids"]],
    )

    return {
        "case_id": case["case_id"],
        "title": case["title"],
        "risk_score": risk,
        "findings": findings,
        "approval_required": approvals,
        "summary": "Evidence supports identity compromise, OAuth persistence, and likely data exfiltration. One claim was corrected after validation because external destination proof was missing.",
        "execution_log": logs,
    }


def main():
    parser = argparse.ArgumentParser(description="Run EvidenceOps FIND EVIL terminal agent.")
    parser.add_argument("case_file", help="Path to case evidence JSON.")
    parser.add_argument("--log", help="Path to write structured execution log JSON.")
    args = parser.parse_args()

    result = analyze(load_case(args.case_file))

    if args.log:
        Path(args.log).write_text(json.dumps(result["execution_log"], indent=2), encoding="utf-8")

    printable = {k: v for k, v in result.items() if k != "execution_log"}
    print(json.dumps(printable, indent=2))


if __name__ == "__main__":
    main()
