# Deployment Guide

## Fastest Option: GitHub Pages

1. Create a new GitHub repository named `evidenceops-agent`.
2. Upload `index.html`, `styles.css`, `app.js`, `README.md`, and `SUBMISSION.md`.
3. Open repository settings.
4. Enable Pages from the main branch root.
5. Use the generated URL as the hackathon demo link.

## Fast Option: Netlify

1. Go to Netlify.
2. Drag the `evidenceops-agent` folder into the deploy area.
3. Use the generated site URL as the demo link.

## Local Preview

From this folder:

```powershell
python -m http.server 5177 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5177
```

## Demo State

Before recording or screenshots:

1. Open the page.
2. Choose the `OAuth Token Theft` scenario for the clearest security story.
3. Click `Run agent`.
4. Mark one approval action as approved.
5. Capture the dashboard with the generated report visible.
