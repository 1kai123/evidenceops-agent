from pathlib import Path
import textwrap

import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "brand-portal" / "assets" / "video"
OUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1280, 720
FPS = 24
SCENE_SECONDS = 5

INK = "#111316"
PAPER = "#F7F6F1"
PANEL = "#FFFFFF"
LINE = "#D9D6CA"
RED = "#D43D2F"
BLUE = "#2367A5"
GREEN = "#1F7A55"
MUTED = "#69727D"


def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/georgiab.ttf" if bold else "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/courbd.ttf" if bold else "C:/Windows/Fonts/cour.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


F_TITLE = font(72, True)
F_H2 = font(44, True)
F_BODY = font(28)
F_MONO = font(20, True)
F_SMALL = font(18)


def draw_grid(draw):
    for x in range(0, W, 34):
        draw.line((x, 0, x, H), fill="#E6E2D6", width=1)
    for y in range(0, H, 34):
        draw.line((0, y, W, y), fill="#E6E2D6", width=1)


def wrap(draw, text, width, font_obj):
    words = text.split()
    lines = []
    line = ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textbbox((0, 0), trial, font=font_obj)[2] <= width:
            line = trial
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def panel(draw, xy, fill=PANEL, outline=INK, shadow=BLUE):
    x1, y1, x2, y2 = xy
    draw.rectangle((x1 + 10, y1 + 10, x2 + 10, y2 + 10), fill=shadow)
    draw.rectangle(xy, fill=fill, outline=outline, width=3)


def label(draw, xy, text, fill=RED):
    draw.text(xy, text.upper(), font=F_MONO, fill=fill)


def paragraph(draw, xy, text, width, fill=INK, line_gap=10):
    x, y = xy
    for line in wrap(draw, text, width, F_BODY):
        draw.text((x, y), line, font=F_BODY, fill=fill)
        y += 38 + line_gap
    return y


def scene_base():
    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)
    draw_grid(d)
    d.rectangle((0, 0, W, 8), fill=INK)
    d.rectangle((0, H - 8, W, H), fill=INK)
    d.text((52, 34), "EVIDENCEOPS AGENT / BRAND PORTAL WALKTHROUGH", font=F_MONO, fill=INK)
    return img, d


def make_scene(idx, title, eyebrow, body, side=None):
    img, d = scene_base()
    label(d, (52, 106), eyebrow)
    y = 145
    for line in textwrap.wrap(title, width=32):
        d.text((52, y), line, font=F_TITLE, fill=INK)
        y += 82
    paragraph(d, (56, y + 22), body, 690, fill="#30373F")

    panel(d, (830, 132, 1188, 575), fill=INK, shadow=RED)
    d.text((860, 164), f"0{idx}", font=F_TITLE, fill=PAPER)
    d.line((860, 252, 1158, 252), fill="#4B4F55", width=2)
    if side:
        yy = 292
        for head, copy, color in side:
            d.text((860, yy), head.upper(), font=F_MONO, fill=color)
            yy += 32
            for line in wrap(d, copy, 280, F_SMALL):
                d.text((860, yy), line, font=F_SMALL, fill=PAPER)
                yy += 27
            yy += 20
    d.text((52, 655), "Published kit: brandkity.com/p/zhangmengcheng23s-workspace/evidenceops-agent", font=F_MONO, fill=INK)
    return img


scenes = [
    make_scene(
        1,
        "Evidence that moves at machine speed and still stands up in review.",
        "Brand promise",
        "A security-native brand portal for an explainable AI incident response workspace.",
        [("Primary artifact", "Published BrandKity BrandKit", RED), ("Backup proof", "Live GitHub Pages portal and asset package", BLUE)],
    ),
    make_scene(
        2,
        "Built directly against the Brand Portals scoring criteria.",
        "Judge fit",
        "The portal maps presentation, organization, design quality, consistency, and completeness to visible proof.",
        [("25%", "Brand presentation", RED), ("25%", "Organization and delivery", BLUE), ("50%", "Design, consistency, completeness", GREEN)],
    ),
    make_scene(
        3,
        "Not generic AI branding. A case-file identity for incident response.",
        "Design quality",
        "Evidence IDs, terminal traces, approval gates, and uncertainty labels make the brand specific to security operations.",
        [("Tone", "Calm under pressure", RED), ("System", "Forensic ink, case paper, evidence red", BLUE)],
    ),
    make_scene(
        4,
        "A complete kit judges can inspect without hunting.",
        "Completeness",
        "Logo suite, colors, typography, voice rules, Devpost cover, social assets, guidelines, QA report, and downloadable package.",
        [("Assets", "SVG logos and PNG cover", RED), ("Proof", "QA report plus source repository", GREEN)],
    ),
    make_scene(
        5,
        "One visual language across product, report, social, and submission.",
        "Consistency",
        "The same evidence-centered language appears in the product demo, report examples, cover art, and BrandKity kit.",
        [("Use case", "SOC review and analyst approval", BLUE), ("Promise", "Traceable response, not magic automation", RED)],
    ),
    make_scene(
        6,
        "Primary URL: BrandKity. Backup: full live portal and package.",
        "Submission ready",
        "The project is ready for final submission as soon as Devpost restores Brand Portals access or provides an alternate accepted path.",
        [("Ready", "BrandKity kit published", GREEN), ("Blocked", "Devpost Brand subdomain still returns 403", RED)],
    ),
]

poster = scenes[0]
poster.save(OUT_DIR / "evidenceops-brand-walkthrough-poster.png", optimize=True)

video_path = OUT_DIR / "evidenceops-brand-walkthrough.mp4"
writer = cv2.VideoWriter(str(video_path), cv2.VideoWriter_fourcc(*"mp4v"), FPS, (W, H))
if not writer.isOpened():
    raise RuntimeError("Could not open MP4 writer")

for scene in scenes:
    frame = cv2.cvtColor(np.array(scene), cv2.COLOR_RGB2BGR)
    for _ in range(FPS * SCENE_SECONDS):
        writer.write(frame)

writer.release()
print(video_path)
print(OUT_DIR / "evidenceops-brand-walkthrough-poster.png")
