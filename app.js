const scenarios = [
  {
    id: "oauth-token-theft",
    name: "OAuth Token Theft",
    riskSeed: 87,
    confidence: "91%",
    eta: "4m",
    alerts: [
      {
        title: "Impossible travel login",
        source: "identity",
        severity: "high",
        detail: "User finance-admin authenticated from Belgrade 11 minutes after a Chicago session.",
      },
      {
        title: "Suspicious token refresh",
        source: "oauth",
        severity: "critical",
        detail: "Refresh token reused from a new ASN after MFA fatigue events.",
      },
      {
        title: "Large export job",
        source: "storage",
        severity: "high",
        detail: "Quarterly payroll archive exported to an unmanaged device.",
      },
      {
        title: "Command runner spawned",
        source: "endpoint",
        severity: "medium",
        detail: "PowerShell child process touched browser credential cache metadata.",
      },
    ],
    events: [
      {
        time: "09:12 UTC",
        title: "MFA prompt burst",
        body: "Six push prompts were sent to finance-admin in 94 seconds. The final prompt was accepted.",
      },
      {
        time: "09:18 UTC",
        title: "New OAuth grant",
        body: "A new desktop client grant requested mail.read, files.read, and offline_access scopes.",
      },
      {
        time: "09:24 UTC",
        title: "Token replay",
        body: "The same refresh token family appeared from AS58224 with no device enrollment record.",
      },
      {
        time: "09:31 UTC",
        title: "Data staging",
        body: "Payroll, vendor, and legal folders were queried within a seven-minute window.",
      },
      {
        time: "09:38 UTC",
        title: "Archive export",
        body: "A 1.8 GB archive was downloaded from cloud storage using the suspicious grant.",
      },
    ],
    rules: [
      {
        label: "Identity compromise",
        score: 32,
        evidence: "Impossible travel + accepted MFA prompt burst.",
      },
      {
        label: "OAuth persistence",
        score: 27,
        evidence: "offline_access scope and refresh token reuse from a new network.",
      },
      {
        label: "Likely exfiltration",
        score: 29,
        evidence: "Large export follows privilege-bearing token replay.",
      },
    ],
    approvals: [
      {
        title: "Revoke token families",
        detail: "Invalidate finance-admin refresh tokens and force re-authentication.",
      },
      {
        title: "Disable OAuth grant",
        detail: "Block the suspicious desktop client until ownership is verified.",
      },
    ],
    response: [
      "Revoke finance-admin refresh token families and active sessions.",
      "Disable the suspicious OAuth client grant.",
      "Quarantine unmanaged device artifacts and collect endpoint triage.",
      "Audit payroll, vendor, and legal folders for additional reads.",
      "Notify legal/security leadership with the evidence timeline.",
    ],
    summary:
      "EvidenceOps Agent correlated identity, OAuth, storage, and endpoint signals. The sequence shows MFA fatigue, a new OAuth grant, token replay from an unmanaged network, then a large payroll archive export.",
  },
  {
    id: "ransomware-prelude",
    name: "Ransomware Prelude",
    riskSeed: 76,
    confidence: "84%",
    eta: "7m",
    alerts: [
      {
        title: "Backup catalog touched",
        source: "backup",
        severity: "high",
        detail: "Service account enumerated backup snapshots outside its usual window.",
      },
      {
        title: "Mass rename simulation",
        source: "endpoint",
        severity: "critical",
        detail: "A script tested extension changes across 620 files in a shared drive.",
      },
      {
        title: "Privilege escalation",
        source: "directory",
        severity: "high",
        detail: "Temporary admin membership was granted to an inactive contractor account.",
      },
    ],
    events: [
      {
        time: "13:04 UTC",
        title: "Dormant account resumed",
        body: "Contractor-ops logged in for the first time in 81 days from a new workstation.",
      },
      {
        time: "13:11 UTC",
        title: "Admin group change",
        body: "The account joined Backup Operators and Local Admin on two file servers.",
      },
      {
        time: "13:23 UTC",
        title: "Snapshot discovery",
        body: "Backup catalog queries increased 41x compared with the user's baseline.",
      },
      {
        time: "13:29 UTC",
        title: "Rename rehearsal",
        body: "A script renamed test files using an extension pattern seen in ransomware staging.",
      },
    ],
    rules: [
      {
        label: "Pre-encryption staging",
        score: 30,
        evidence: "Backup discovery and mass rename behavior occur in the same session.",
      },
      {
        label: "Privilege abuse",
        score: 23,
        evidence: "Inactive contractor account gained admin and backup roles.",
      },
      {
        label: "Containment urgency",
        score: 22,
        evidence: "File server access and script rehearsal indicate near-term blast radius.",
      },
    ],
    approvals: [
      {
        title: "Suspend contractor-ops",
        detail: "Disable the account pending owner verification and device review.",
      },
      {
        title: "Freeze file server writes",
        detail: "Temporarily block write access for the suspicious session scope.",
      },
    ],
    response: [
      "Suspend contractor-ops and preserve authentication logs.",
      "Remove temporary admin and backup group memberships.",
      "Snapshot affected file shares before further changes occur.",
      "Block the originating workstation from file server writes.",
      "Start ransomware readiness communications for IT leadership.",
    ],
    summary:
      "EvidenceOps Agent identified ransomware prelude behavior: dormant account reactivation, privilege escalation, backup enumeration, and a mass rename rehearsal against shared files.",
  },
  {
    id: "insider-exfiltration",
    name: "Insider Exfiltration",
    riskSeed: 69,
    confidence: "78%",
    eta: "12m",
    alerts: [
      {
        title: "Unusual repository clone",
        source: "developer",
        severity: "medium",
        detail: "Departing engineer cloned seven private repositories after resignation notice.",
      },
      {
        title: "Personal storage upload",
        source: "dlp",
        severity: "high",
        detail: "Compressed source archive uploaded to a personal cloud domain.",
      },
      {
        title: "Policy bypass attempt",
        source: "proxy",
        severity: "high",
        detail: "Traffic matched a blocked file sharing category, then retried through a new domain.",
      },
    ],
    events: [
      {
        time: "18:42 UTC",
        title: "Access spike",
        body: "Repository reads exceeded the engineer's 30-day baseline by 9.4x.",
      },
      {
        time: "18:57 UTC",
        title: "Archive creation",
        body: "A 640 MB source bundle was created in a temporary project directory.",
      },
      {
        time: "19:06 UTC",
        title: "Blocked upload",
        body: "The first upload attempt was blocked by policy at the proxy layer.",
      },
      {
        time: "19:13 UTC",
        title: "Successful alternate upload",
        body: "The archive was uploaded to a personal storage domain with no business justification.",
      },
    ],
    rules: [
      {
        label: "Data loss risk",
        score: 24,
        evidence: "Personal storage upload after blocked file sharing attempt.",
      },
      {
        label: "Insider pattern",
        score: 21,
        evidence: "Departing employee performs broad repository cloning.",
      },
      {
        label: "Policy evasion",
        score: 18,
        evidence: "Retry through alternate domain after proxy block.",
      },
    ],
    approvals: [
      {
        title: "Disable external upload",
        detail: "Block personal storage destinations for the user and device.",
      },
      {
        title: "Open legal hold ticket",
        detail: "Preserve repository, proxy, and endpoint evidence for HR/legal review.",
      },
    ],
    response: [
      "Disable external upload destinations for the user and device.",
      "Preserve repository access logs and endpoint archive metadata.",
      "Notify HR/legal with the evidence timeline.",
      "Rotate secrets in repositories accessed during the spike.",
      "Review whether the uploaded archive contained regulated data.",
    ],
    summary:
      "EvidenceOps Agent correlated repository access, archive creation, DLP controls, and proxy retries to identify likely insider exfiltration by a departing engineer.",
  },
];

const alertFeed = document.querySelector("#alertFeed");
const timeline = document.querySelector("#timeline");
const agentOutput = document.querySelector("#agentOutput");
const approvalQueue = document.querySelector("#approvalQueue");
const reportText = document.querySelector("#reportText");
const briefStatus = document.querySelector("#briefStatus");
const scenarioSelect = document.querySelector("#scenarioSelect");

let currentScenario = scenarios[0];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function populateScenarioSelect() {
  scenarioSelect.innerHTML = scenarios
    .map(
      (scenario) =>
        `<option value="${escapeHtml(scenario.id)}">${escapeHtml(scenario.name)}</option>`,
    )
    .join("");
}

function renderScenario() {
  currentScenario =
    scenarios.find((scenario) => scenario.id === scenarioSelect.value) ?? scenarios[0];

  alertFeed.innerHTML = currentScenario.alerts
    .map(
      (alert) => `
        <article class="alert">
          <b>${escapeHtml(alert.title)}</b>
          <small>${escapeHtml(alert.source.toUpperCase())}</small>
          <p>${escapeHtml(alert.detail)}</p>
          <span class="pill">${escapeHtml(alert.severity)}</span>
        </article>
      `,
    )
    .join("");

  timeline.innerHTML = currentScenario.events
    .map(
      (event) => `
        <article class="event">
          <small>${escapeHtml(event.time)}</small>
          <h3>${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(event.body)}</p>
        </article>
      `,
    )
    .join("");

  agentOutput.innerHTML =
    "<p>Run the agent to score this incident and draft a response brief.</p>";
  approvalQueue.innerHTML =
    "<p class=\"muted-note\">Approval actions appear after the agent completes analysis.</p>";

  document.querySelector("#riskScore").textContent = currentScenario.riskSeed;
  document.querySelector("#confidence").textContent = "pending";
  document.querySelector("#evidenceCount").textContent = currentScenario.events.length;
  document.querySelector("#eta").textContent = currentScenario.eta;
  briefStatus.textContent = "scenario loaded";
  reportText.textContent = "Run the agent to generate the incident brief.";
}

function buildReport(score) {
  const responseSteps = currentScenario.response
    .map((step, index) => `${index + 1}. ${step}`)
    .join("\n");
  const evidence = currentScenario.events
    .map((event) => `- ${event.time}: ${event.title} - ${event.body}`)
    .join("\n");

  return `Incident: ${currentScenario.name}
Severity: ${score >= 85 ? "Critical" : "High"}
Confidence: ${currentScenario.confidence}

What happened:
${currentScenario.summary}

Evidence timeline:
${evidence}

Recommended response:
${responseSteps}

Human approval gates:
${currentScenario.approvals.map((item) => `- ${item.title}: ${item.detail}`).join("\n")}

Hackathon angle:
The demo turns raw alerts into an explainable response packet with evidence references, risk scoring, multi-scenario replay, and human approval checkpoints.`;
}

function renderApprovals() {
  approvalQueue.innerHTML = currentScenario.approvals
    .map(
      (item, index) => `
        <article class="approval-item" data-approval="${index}">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.detail)}</p>
          <button type="button" data-approve="${index}">Mark approved</button>
        </article>
      `,
    )
    .join("");
}

function runAgent() {
  const totalScore = currentScenario.rules.reduce((sum, rule) => sum + rule.score, 0);
  const score = Math.min(totalScore, 99);
  document.querySelector("#riskScore").textContent = score;
  document.querySelector("#confidence").textContent = currentScenario.confidence;
  document.querySelector("#eta").textContent = "done";

  agentOutput.innerHTML = currentScenario.rules
    .map(
      (rule) => `
        <article class="reason-card">
          <strong>${escapeHtml(rule.label)} +${rule.score}</strong>
          <p>${escapeHtml(rule.evidence)}</p>
        </article>
      `,
    )
    .join("");

  renderApprovals();
  reportText.textContent = buildReport(score);
  briefStatus.textContent = "ready";
}

function approveAction(index) {
  const item = approvalQueue.querySelector(`[data-approval="${index}"]`);
  const button = approvalQueue.querySelector(`[data-approve="${index}"]`);
  if (!item || !button) return;
  item.classList.add("approved");
  button.textContent = "Approved";
  button.disabled = true;
  briefStatus.textContent = "approval logged";
  setTimeout(() => {
    briefStatus.textContent = "ready";
  }, 1200);
}

async function copyReport() {
  const text = reportText.textContent.trim();
  if (!text || text.startsWith("Run the agent")) return;
  await navigator.clipboard.writeText(text);
  briefStatus.textContent = "copied";
  setTimeout(() => {
    briefStatus.textContent = "ready";
  }, 1200);
}

function downloadReport() {
  const text = reportText.textContent.trim();
  if (!text || text.startsWith("Run the agent")) return;
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `evidenceops-${currentScenario.id}-brief.md`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  briefStatus.textContent = "downloaded";
  setTimeout(() => {
    briefStatus.textContent = "ready";
  }, 1200);
}

scenarioSelect.addEventListener("change", renderScenario);
document.querySelector("#loadScenario").addEventListener("click", renderScenario);
document.querySelector("#runAgent").addEventListener("click", runAgent);
document.querySelector("#copyReport").addEventListener("click", copyReport);
document.querySelector("#downloadReport").addEventListener("click", downloadReport);
approvalQueue.addEventListener("click", (event) => {
  const index = event.target?.dataset?.approve;
  if (index !== undefined) approveAction(Number(index));
});

populateScenarioSelect();
renderScenario();
