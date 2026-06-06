# Publish to GitHub

The project is already committed locally. Use this guide after creating a public empty repository on GitHub.

## Recommended Repository

Repository name:

```text
evidenceops-agent
```

Description:

```text
Explainable AI incident response workspace for hackathon submission.
```

Visibility:

```text
Public
```

Do not initialize with README, license, or gitignore.

## Push Commands

Replace `YOUR_USERNAME` with your GitHub username:

```powershell
cd C:\Users\ZMC\Desktop\TEST\evidenceops-agent
git remote add origin https://github.com/YOUR_USERNAME/evidenceops-agent.git
git branch -M main
git push -u origin main
```

If the remote already exists:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/evidenceops-agent.git
git push -u origin main
```

## Confirm Upload

After pushing, the repository should show these files:

- `index.html`
- `app.js`
- `styles.css`
- `README.md`
- `ARCHITECTURE.md`
- `DEVPOST_ANSWERS.md`
- `VIDEO_SHOTLIST.md`
- `DATASET.md`
- `ACCURACY_REPORT.md`
- `demo-screenshot.png`

## GitHub Pages

1. Open repository settings.
2. Open Pages.
3. Choose "Deploy from a branch".
4. Select branch `main`.
5. Select folder `/root`.
6. Save.

The demo URL will look like:

```text
https://YOUR_USERNAME.github.io/evidenceops-agent/
```
