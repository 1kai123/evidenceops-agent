# Final Submission Checklist

This checklist is ordered by what should be done next.

## 1. Publish Code

- Create a public GitHub repository named `evidenceops-agent`.
- Do not initialize it with README, license, or gitignore because this folder already has those files.
- Add the remote:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/evidenceops-agent.git
git branch -M main
git push -u origin main
```

## 2. Deploy Demo

Fastest option:

- Use Netlify drag-and-drop with this folder or connect the GitHub repository.

GitHub Pages option:

- Open repository settings.
- Go to Pages.
- Deploy from branch `main`, folder `/root`.
- Wait for the generated Pages URL.

## 3. Record Demo Video

- Use `VIDEO_SHOTLIST.md`.
- Keep the video under 3 minutes.
- Start with the OAuth Token Theft scenario.
- Click `Run agent`.
- Mark one approval action approved.
- Show the generated report.

## 4. Submit to Hackathons

### Highest Fit Now

- Band of Agents: submit as a multi-agent enterprise incident response workflow.
- Splunk Agentic Ops: submit as a Splunk-ready agentic SecOps workspace.

### Needs More Work Before Strong Submission

- FIND EVIL!: current project needs real or mock SIFT/DFIR execution logs, case dataset notes, and accuracy evidence. `DATASET.md` and `ACCURACY_REPORT.md` are already started.

## 5. Submission Links to Fill

- GitHub repository: TODO
- Demo URL: TODO
- Demo video: TODO

## 6. Files Judges Should Notice

- `README.md`: run instructions and product overview.
- `ARCHITECTURE.md`: agent architecture and trust boundaries.
- `DATASET.md`: scenario documentation.
- `ACCURACY_REPORT.md`: prototype verification and limitations.
- `DEVPOST_ANSWERS.md`: copy-ready submission answers.
- `VIDEO_SHOTLIST.md`: demo recording script.

## 7. Confirmation-Sensitive Steps

The following actions create external side effects and should be confirmed before execution:

- Creating a GitHub repository.
- Publishing code publicly.
- Creating or submitting hackathon accounts.
- Submitting Devpost/lablab forms.
- Uploading demo videos.
