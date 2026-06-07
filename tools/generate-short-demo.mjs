import { writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import Module from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";

const bundledNodeModules =
  process.env.CODEX_NODE_MODULES ||
  path.join(
    process.env.USERPROFILE || "",
    ".cache",
    "codex-runtimes",
    "codex-primary-runtime",
    "dependencies",
    "node",
    "node_modules",
  );
const require = createRequire(path.join(bundledNodeModules, "package.json"));
process.env.NODE_PATH = [
  bundledNodeModules,
  path.join(bundledNodeModules, ".pnpm", "node_modules"),
  process.env.NODE_PATH,
]
  .filter(Boolean)
  .join(path.delimiter);
Module._initPaths();
const { chromium } = require("playwright");

const repoDir = path.resolve(import.meta.dirname, "..");
const outputPath = path.join(process.env.USERPROFILE || repoDir, "Downloads", "evidenceops-agent-demo-short.webm");
const appUrl = pathToFileURL(path.join(repoDir, "index.html")).href;

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
await page.goto(appUrl);
await page.click("#runAgent");
await page.waitForTimeout(900);

const captures = [];
const options = await page.locator("#scenarioSelect option").evaluateAll((nodes) =>
  nodes.map((node, index) => ({ index, value: node.value, text: node.textContent.trim() })),
);

for (const option of options.slice(0, 3)) {
  await page.selectOption("#scenarioSelect", option.value);
  await page.click("#runAgent");
  await page.waitForTimeout(900);
  const png = await page.screenshot({ type: "png", fullPage: false });
  captures.push({ ...option, dataUrl: `data:image/png;base64,${png.toString("base64")}` });
}

const recorder = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
await recorder.setContent(`<!doctype html><html><body style="margin:0;background:#08111f"><canvas id="c" width="1280" height="720"></canvas></body></html>`);

const videoBase64 = await recorder.evaluate(
  async ({ captures }) => {
    const canvas = document.querySelector("#c");
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const imgs = await Promise.all(
      captures.map(
        (capture) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ ...capture, img });
            img.onerror = reject;
            img.src = capture.dataUrl;
          }),
      ),
    );

    const stream = canvas.captureStream(12);
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9"
      : "video/webm";
    const chunks = [];
    const mediaRecorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 1600000 });

    const blobToBase64 = (blob) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.readAsDataURL(blob);
      });

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function wrapText(text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (const word of words) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
          ctx.fillText(line, x, y);
          line = word;
          y += lineHeight;
        } else {
          line = test;
        }
      }
      if (line) ctx.fillText(line, x, y);
      return y + lineHeight;
    }

    function drawBackground() {
      const gradient = ctx.createLinearGradient(0, 0, W, H);
      gradient.addColorStop(0, "#08111f");
      gradient.addColorStop(0.48, "#10243a");
      gradient.addColorStop(1, "#0f2f2d");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);
    }

    function drawScreenshot(img, x, y, w, h) {
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,.32)";
      ctx.shadowBlur = 18;
      roundRect(x, y, w, h, 12);
      ctx.fillStyle = "#0b1220";
      ctx.fill();
      ctx.clip();
      ctx.drawImage(img, x, y, w, h);
      ctx.restore();
      ctx.strokeStyle = "rgba(255,255,255,.20)";
      ctx.lineWidth = 2;
      roundRect(x, y, w, h, 12);
      ctx.stroke();
    }

    function drawTitle(title, subtitle) {
      ctx.fillStyle = "#f8fafc";
      ctx.font = "700 50px Arial";
      ctx.fillText(title, 58, 80);
      ctx.fillStyle = "#b8d8ff";
      ctx.font = "400 24px Arial";
      wrapText(subtitle, 60, 122, 1040, 32);
    }

    function drawBullets(items, x, y, width) {
      ctx.font = "400 27px Arial";
      for (const item of items) {
        ctx.fillStyle = "#63e6be";
        ctx.fillText("•", x, y);
        ctx.fillStyle = "#e5edf7";
        y = wrapText(item, x + 32, y, width - 32, 35) + 8;
      }
    }

    function drawScene(sceneIndex, progress) {
      drawBackground();
      const eased = 1 - Math.pow(1 - progress, 3);
      if (sceneIndex === 0) {
        drawTitle("EvidenceOps Agent", "Explainable AI incident response for the Splunk Agentic Ops Hackathon.");
        drawBullets(
          [
            "Turns fragmented SIEM alerts into a timeline, risk score, and response packet.",
            "Shows Splunk MCP-style tool traces so analysts can audit how evidence was gathered.",
            "Keeps high-impact containment actions behind human approval gates.",
          ],
          70,
          205,
          690,
        );
        drawScreenshot(imgs[0].img, 735, 165, 480, 270);
        drawScreenshot(imgs[1].img, 805, 455, 350, 197);
      } else if (sceneIndex === 1) {
        drawTitle("Live Analyst Workspace", "The demo is a working browser app published on GitHub Pages.");
        drawScreenshot(imgs[0].img, 55, 135, 820, 461);
        drawBullets(
          [
            "Scenario replay: OAuth token theft, ransomware prelude, and insider exfiltration.",
            "Run agent updates risk, confidence, evidence count, approvals, and report output.",
          ],
          925,
          210,
          290,
        );
      } else if (sceneIndex === 2) {
        drawTitle("Splunk MCP Tool Trace", "A production version would replace mock telemetry with Splunk searches, ES notables, MCP calls, or APIs.");
        drawScreenshot(imgs[1].img, 60, 150, 815, 459);
        drawBullets(
          [
            "Visible tool calls map Splunk data sources to each evidence item.",
            "The analyst sees why the agent raised or lowered risk.",
            "Splunk remains the source of operational truth.",
          ],
          925,
          200,
          290,
        );
      } else if (sceneIndex === 3) {
        drawTitle("Human Approval Queue", "Automation is useful only when the blast radius is controlled.");
        drawScreenshot(imgs[2].img, 55, 145, 820, 461);
        drawBullets(
          [
            "The agent can recommend disabling tokens, freezing writes, or opening an incident.",
            "A human must approve containment actions before execution.",
            "The generated incident brief can be copied or downloaded.",
          ],
          925,
          195,
          290,
        );
      } else {
        drawTitle("Why It Can Win", "Built for the Security track, with an extra shot at Best Use of Splunk MCP Server.");
        drawBullets(
          [
            "Clear problem: analysts lose time reconstructing incidents across identity, endpoint, DLP, proxy, and backup signals.",
            "Clear demo: three replayable incidents, explainable scoring, MCP trace, approval queue, generated brief.",
            "Clear next step: connect Splunk saved searches and MCP Server to replace deterministic mock telemetry.",
          ],
          85,
          185,
          1030,
        );
        ctx.fillStyle = "rgba(99,230,190,.10)";
        roundRect(85, 540, 1050 * eased, 68, 16);
        ctx.fill();
        ctx.fillStyle = "#dffcf4";
        ctx.font = "700 28px Arial";
        ctx.fillText("Live demo: https://1kai123.github.io/evidenceops-agent/", 115, 583);
      }
      ctx.fillStyle = "rgba(255,255,255,.25)";
      ctx.fillRect(60, 680, 1160, 8);
      ctx.fillStyle = "#63e6be";
      ctx.fillRect(60, 680, 1160 * ((sceneIndex + progress) / 5), 8);
    }

    const sceneSeconds = 28;
    const totalScenes = 5;
    const start = performance.now();
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size) chunks.push(event.data);
    };
    const stopped = new Promise((resolve) => {
      mediaRecorder.onstop = async () => resolve(await blobToBase64(new Blob(chunks, { type: mimeType })));
    });
    mediaRecorder.start(1000);

    await new Promise((resolve) => {
      function frame(now) {
        const elapsed = (now - start) / 1000;
        const sceneIndex = Math.min(totalScenes - 1, Math.floor(elapsed / sceneSeconds));
        const progress = Math.min(1, (elapsed - sceneIndex * sceneSeconds) / sceneSeconds);
        drawScene(sceneIndex, progress);
        if (elapsed < sceneSeconds * totalScenes) {
          requestAnimationFrame(frame);
        } else {
          drawScene(totalScenes - 1, 1);
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });

    mediaRecorder.stop();
    return await stopped;
  },
  { captures },
);

await writeFile(outputPath, Buffer.from(videoBase64, "base64"));
await browser.close();
console.log(outputPath);
