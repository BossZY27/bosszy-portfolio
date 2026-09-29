"""Render the portfolio's original, silent turning-point motion graphic.

Requires Pillow and ffmpeg. Run from the repository root with:
    python scripts/make_momentum_video.py
"""

from __future__ import annotations

import math
import random
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "video"
WIDTH, HEIGHT = 600, 750
FPS, SECONDS = 24, 6
AMBER = (245, 178, 96)
CREAM = (255, 232, 186)


def smooth(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3 - 2 * value)


def catmull(points: list[tuple[float, float]], subdivisions: int = 30) -> list[tuple[int, int]]:
    result = []
    padded = [points[0], *points, points[-1]]
    for index in range(1, len(padded) - 2):
        p0, p1, p2, p3 = padded[index - 1:index + 3]
        for step in range(subdivisions):
            t = step / subdivisions
            t2, t3 = t * t, t * t * t
            x = .5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * t
                      + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2
                      + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3)
            y = .5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t
                      + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2
                      + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)
            result.append((round(x), round(y)))
    result.append(tuple(map(round, points[-1])))
    return result


TRAIL = catmull([
    (108, 588), (164, 552), (221, 579), (264, 503),
    (221, 455), (285, 409), (346, 434), (385, 366),
    (355, 307), (438, 270), (481, 205),
])

random.seed(27)
SPECKS = [(random.randrange(WIDTH), random.randrange(HEIGHT), random.randrange(8, 34))
          for _ in range(185)]


def render(frame: int) -> Image.Image:
    time = frame / FPS
    progress = smooth((time - .55) / 4.3)
    image = Image.new("RGB", (WIDTH, HEIGHT), "#111310")
    pixels = image.load()
    for y in range(HEIGHT):
        for x in range(WIDTH):
            radius = math.hypot((x - 385) * .8, (y - 365) * .9)
            warmth = max(0, 1 - radius / 470)
            noise = ((x * 17 + y * 31) % 29) / 29 - .5
            pixels[x, y] = (
                int(15 + warmth * 19 + noise * 4),
                int(17 + warmth * 11 + noise * 3),
                int(15 + warmth * 4 + noise * 2),
            )

    draw = ImageDraw.Draw(image, "RGBA")
    for x, y, alpha in SPECKS:
        draw.point((x, y), fill=(236, 198, 145, alpha))
    for offset in range(-HEIGHT, WIDTH + HEIGHT, 31):
        draw.line((offset, 0, offset + HEIGHT, HEIGHT), fill=(207, 179, 133, 9), width=1)

    # A layered paper/blueprint surface: imperfect edges keep it tactile.
    draw.polygon([(70, 167), (467, 116), (537, 592), (130, 647)], fill=(0, 0, 0, 78))
    draw.polygon([(64, 148), (470, 101), (526, 583), (116, 633)],
                 fill=(34, 32, 26, 235), outline=(184, 141, 86, 120), width=2)
    draw.polygon([(76, 160), (459, 115), (510, 570), (128, 616)],
                 fill=(39, 36, 29, 172), outline=(241, 209, 157, 46), width=1)
    draw.line((104, 163, 156, 610), fill=(215, 169, 107, 65), width=3)
    for index in range(10):
        x = 150 + index * 5
        y = 200 + index * 31
        draw.line((x, y, min(x + 210 + index % 3 * 32, 486), y - 23),
                  fill=(218, 197, 159, 22 + index % 3 * 9), width=2)
    for x, y, r in [(250, 273, 34), (348, 372, 45), (226, 490, 29)]:
        draw.arc((x - r, y - r, x + r, y + r), 25, 305,
                 fill=(219, 155, 91, int(24 * (1 - progress) + 8)), width=2)
        draw.line((x - 13, y - 10, x + 18, y + 14),
                  fill=(212, 127, 90, int(45 * (1 - progress) + 8)), width=2)

    # The same line stays in view as it is patiently traced from start to end.
    draw.line(TRAIL, fill=(186, 139, 92, 39), width=2, joint="curve")
    shown = max(2, round(progress * (len(TRAIL) - 1)))
    active = TRAIL[:shown]
    glow = Image.new("RGBA", (WIDTH, HEIGHT))
    gd = ImageDraw.Draw(glow)
    gd.line(active, fill=(*AMBER, 205), width=11, joint="curve")
    glow = glow.filter(ImageFilter.GaussianBlur(17))
    image = Image.alpha_composite(image.convert("RGBA"), glow)
    draw = ImageDraw.Draw(image, "RGBA")
    draw.line(active, fill=(*AMBER, 145), width=5, joint="curve")
    draw.line(active, fill=(*CREAM, 245), width=2, joint="curve")
    x, y = active[-1]
    pulse = 8 + 2 * math.sin(time * 8)
    draw.ellipse((x - pulse, y - pulse, x + pulse, y + pulse), fill=(*CREAM, 195))
    draw.ellipse((x - 19, y - 19, x + 19, y + 19), outline=(*AMBER, 105), width=2)
    for number in range(5):
        angle = time * 2.7 + number * math.tau / 5
        distance = 23 + 5 * math.sin(time * 3 + number)
        sx, sy = x + math.cos(angle) * distance, y + math.sin(angle) * distance
        draw.ellipse((sx - 1, sy - 1, sx + 2, sy + 2), fill=(*CREAM, 175))

    # Quiet film-frame marks, not a UI overlay or generated lettering.
    for left, top, dx, dy in [(24, 24, 1, 1), (576, 24, -1, 1),
                               (24, 726, 1, -1), (576, 726, -1, -1)]:
        draw.line((left, top + 19 * dy, left, top, left + 19 * dx, top),
                  fill=(225, 177, 111, 85), width=2)
    return image.convert("RGB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    destination = OUT / "momentum.mp4"
    command = [
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-f", "rawvideo", "-pixel_format", "rgb24", "-video_size", f"{WIDTH}x{HEIGHT}",
        "-framerate", str(FPS), "-i", "-", "-an", "-c:v", "libx264",
        "-preset", "medium", "-crf", "23", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", str(destination),
    ]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    assert process.stdin is not None
    try:
        for frame in range(FPS * SECONDS):
            still = render(frame)
            if frame == 0:
                still.save(OUT / "momentum-poster.jpg", quality=86, optimize=True)
            process.stdin.write(still.tobytes())
    finally:
        process.stdin.close()
    if process.wait() != 0:
        raise RuntimeError("ffmpeg could not encode the momentum video")
    print(destination)


if __name__ == "__main__":
    main()
