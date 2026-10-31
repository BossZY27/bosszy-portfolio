// SVG garments drawn from a project's colour and its rack's cut.
// Front carries the project name, back carries the tech stack like a tour tee,
// and side is the narrow view a garment shows while it hangs on the rail.
import { garmentFor } from './data/racks.js';
import { escapeXml } from './dom.js';

const W = 240;
const H = 300;
const SIDE_W = 70;
const MIRROR = `matrix(-1 0 0 1 ${W} 0)`;
const CREAM = '#efe7d6';
const WOOD = '#4a2e21';
const METAL = '#8d8c88';
const FONT = "Archivo, Anuphan, 'Noto Sans Thai', sans-serif";

const CUTS = {
  tee: { sleeve: 'short', neck: 'crew' },
  longsleeve: { sleeve: 'long', neck: 'crew' },
  hoodie: { sleeve: 'long', neck: 'hood', pocket: 'kangaroo' },
  shirt: { sleeve: 'long', neck: 'collar', placket: 'buttons', pocket: 'chest' },
  tank: { sleeve: 'none', neck: 'crew' },
  varsity: { sleeve: 'long', neck: 'rib', placket: 'snaps', ribs: true, contrastSleeves: true },
};

const FRONT = {
  torso: 'M98 46 Q120 64 142 46 L182 56 L180 288 Q120 296 60 288 L58 56 Z',
  torsoBack: 'M98 46 Q120 52 142 46 L182 56 L180 288 Q120 296 60 288 L58 56 Z',
  tank: 'M100 46 Q120 66 140 46 L156 48 Q158 102 184 116 L182 288 Q120 296 58 288 L56 116 Q82 102 84 48 Z',
  tankBack: 'M100 46 Q120 56 140 46 L156 48 Q158 102 184 116 L182 288 Q120 296 58 288 L56 116 Q82 102 84 48 Z',
  shortSleeve: 'M60 56 L24 96 L42 124 L66 108 Z',
  longSleeve: 'M60 57 Q38 68 30 104 L14 256 L38 262 L62 126 Z',
  neckline: 'M98 46 Q120 64 142 46',
  hoodBehind: 'M86 54 Q88 18 120 16 Q152 18 154 54 Q120 74 86 54 Z',
  hoodBack: 'M86 50 Q88 14 120 12 Q152 14 154 50 Q152 88 120 96 Q88 88 86 50 Z',
  collar: 'M98 46 L116 76 L104 82 L90 54 Z',
  chestPocket: 'M138 100 H166 V128 Q152 134 138 128 Z',
  kangaroo: 'M82 206 L158 206 L170 262 L70 262 Z',
  hemRib: 'M60 274 L180 274 L180 288 Q120 296 60 288 Z',
  cuffRib: 'M15.5 243 L39.8 249 L38 262 L14 256 Z',
  folds: 'M78 130 Q84 200 76 280 M164 130 Q158 210 166 282 M118 200 Q124 240 116 286',
};

const SIDE = {
  body: 'M24 52 Q35 46 46 52 L52 120 Q55 200 56 288 Q35 296 14 288 Q15 200 18 120 Z',
  tank: 'M27 52 Q35 48 43 52 L50 122 Q54 200 55 288 Q35 296 15 288 Q16 200 20 122 Z',
  shortSleeve: 'M45 54 Q60 72 56 116 L48 110 Z',
  longSleeve: 'M45 54 Q60 82 58 256 L49 252 L47 118 Z',
  hood: 'M25 54 Q12 40 20 28 Q30 24 34 48 Z',
  hemRib: 'M14 276 L56 276 L56 288 Q35 296 14 288 Z',
  folds: 'M30 70 Q28 180 31 286 M41 80 Q43 190 40 288',
};

/** @param {string} hex */
function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => c / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Mix a colour toward black (amount < 0) or white (amount > 0). */
function shade(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const target = amount < 0 ? 0 : 255;
  const t = Math.abs(amount);
  const mix = (c) => Math.round(c + (target - c) * t);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(mix);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

/** Print colour that reads on the fabric. */
export function inkOn(hex) {
  return luminance(hex) > 0.6 ? '#161616' : '#f5f2ea';
}

function contrastSleeve(color) {
  return luminance(color) > 0.6 ? '#1d1d1f' : CREAM;
}

const path = (d, fill, extra = '') => `<path d="${d}" fill="${fill}"${extra}/>`;

function wrapWords(text, maxChars, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  for (const word of words) {
    const last = lines[lines.length - 1];
    if (last !== undefined && (last + ' ' + word).length <= maxChars) {
      lines[lines.length - 1] = `${last} ${word}`;
    } else {
      lines.push(word);
    }
  }
  if (lines.length <= maxLines) return lines;
  return [...lines.slice(0, maxLines - 1), lines.slice(maxLines - 1).join(' ')];
}

function textLines(lines, { x, y, size, weight, ink, stretch = 100, spacing = 0, leading = 0.92 }) {
  const style = `font-family:${FONT};font-weight:${weight};font-stretch:${stretch}%;letter-spacing:${spacing}px`;
  return lines
    .map((line, i) => `<text x="${x}" y="${(y + i * size * leading).toFixed(1)}" text-anchor="middle" font-size="${size.toFixed(1)}" fill="${ink}" style="${style}">${escapeXml(line)}</text>`)
    .join('');
}

function bigPrint(project, styleNo, ink, top) {
  const lines = wrapWords(project.name.toUpperCase(), 10, 3);
  const longest = Math.max(...lines.map((l) => l.length));
  const size = Math.min(34, Math.max(13, 118 / (longest * 0.6)));
  const height = size * 0.92 * (lines.length - 1);
  const y = top + (70 - height) / 2;
  return (
    textLines(lines, { x: 120, y, size, weight: 900, ink, stretch: 82, spacing: -0.4 }) +
    textLines([styleNo], { x: 120, y: y + height + 17, size: 7.5, weight: 600, ink, spacing: 1.6 })
  );
}

function chestPrint(project, styleNo, ink, cut) {
  const name = wrapWords(project.name.toUpperCase(), 11, 3);
  if (cut.ribs) {
    const initial = (project.name.match(/[A-Za-z0-9]/) || ['B'])[0].toUpperCase();
    return (
      `<text x="90" y="138" text-anchor="middle" font-size="48" fill="${CREAM}" stroke="${inkOn(CREAM)}" stroke-width="2.2" paint-order="stroke" style="font-family:${FONT};font-weight:900;font-stretch:90%">${escapeXml(initial)}</text>` +
      textLines(name, { x: 156, y: 104, size: 7.5, weight: 700, ink, leading: 1.25 })
    );
  }
  return (
    textLines(name, { x: 86, y: 100, size: 8, weight: 700, ink, leading: 1.25 }) +
    textLines([styleNo], { x: 86, y: 100 + name.length * 10 + 4, size: 5.5, weight: 600, ink, spacing: 1 })
  );
}

function backPrint(project, ink, top) {
  const tech = project.tech.slice(0, 8).map((t) => t.toUpperCase());
  const lines = [
    textLines(['BOSSZY'], { x: 120, y: top, size: 9, weight: 700, ink, spacing: 3 }),
    textLines(['STACK'], { x: 120, y: top + 28, size: 26, weight: 900, ink, stretch: 80 }),
    `<path d="M92 ${top + 36} H148" stroke="${ink}" stroke-width="1.2" opacity=".7"/>`,
    textLines(tech, { x: 120, y: top + 54, size: 10, weight: 600, ink, stretch: 90, spacing: 0.6, leading: 1.45 }),
    textLines([project.status || ''], { x: 120, y: 272, size: 7.5, weight: 500, ink }),
  ];
  return lines.join('');
}

function hanger() {
  return (
    `<path d="M54 60 Q120 26 186 60" fill="none" stroke="${WOOD}" stroke-width="7" stroke-linecap="round"/>` +
    `<path d="M120 36 V20 C120 10 128 5 134 9 C138 12 137 18 132 19" fill="none" stroke="${METAL}" stroke-width="2.6" stroke-linecap="round"/>` +
    `<rect x="114" y="30" width="12" height="9" rx="2" fill="#3a2419"/>`
  );
}

function sleeves(cut, color) {
  if (cut.sleeve === 'none') return { svg: '', clip: '' };
  const d = cut.sleeve === 'short' ? FRONT.shortSleeve : FRONT.longSleeve;
  const pair = path(d, color) + path(d, color, ` transform="${MIRROR}"`);
  const clip = `<path d="${d}"/><path d="${d}" transform="${MIRROR}"/>`;
  return { svg: pair, clip };
}

function trims(cut, color, sleeveColor, face) {
  const dark = shade(color, -0.22);
  const parts = [];
  if (cut.neck === 'crew' && face === 'front') parts.push(`<path d="${FRONT.neckline}" fill="none" stroke="${dark}" stroke-width="5"/>`);
  if (cut.neck === 'hood' && face === 'front') {
    parts.push(`<path d="${FRONT.neckline}" fill="none" stroke="${shade(color, -0.35)}" stroke-width="8"/>`);
    parts.push(`<path d="M110 60 L108 104 M130 60 L132 104" stroke="${shade(color, 0.55)}" stroke-width="2.4" stroke-linecap="round"/>`);
  }
  if (cut.neck === 'collar' && face === 'front') {
    const collar = shade(color, 0.08);
    parts.push(path(FRONT.collar, collar, ' stroke="rgba(0,0,0,.25)"'));
    parts.push(path(FRONT.collar, collar, ` stroke="rgba(0,0,0,.25)" transform="${MIRROR}"`));
  }
  if (cut.neck === 'collar' && face === 'back') parts.push(`<path d="M60 84 Q120 94 180 84" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1.6"/>`);
  if (cut.neck === 'rib') parts.push(`<path d="${face === 'front' ? FRONT.neckline : 'M98 46 Q120 52 142 46'}" fill="none" stroke="${dark}" stroke-width="7"/>`);
  if (cut.placket && face === 'front') {
    parts.push('<path d="M120 70 V288" stroke="rgba(0,0,0,.24)" stroke-width="1.4"/>');
    const btn = cut.placket === 'snaps' ? shade(color, 0.6) : luminance(color) > 0.5 ? '#2b2b2b' : '#f2efe6';
    const ys = cut.placket === 'snaps' ? [92, 130, 168, 206, 244] : [92, 128, 164, 200, 236, 272];
    ys.forEach((y) => parts.push(`<circle cx="120" cy="${y}" r="${cut.placket === 'snaps' ? 3.6 : 2.6}" fill="${btn}"/>`));
  }
  if (cut.pocket === 'chest' && face === 'front') parts.push(path(FRONT.chestPocket, shade(color, -0.06), ' stroke="rgba(0,0,0,.22)"'));
  if (cut.pocket === 'kangaroo' && face === 'front') parts.push(path(FRONT.kangaroo, shade(color, -0.1), ' stroke="rgba(0,0,0,.2)"'));
  if (cut.ribs) {
    const stripe = `stroke="${sleeveColor}" stroke-width="1.6"`;
    parts.push(path(FRONT.hemRib, dark));
    parts.push(`<path d="M60 279 H180 M60 284 H180" ${stripe}/>`);
    parts.push(path(FRONT.cuffRib, dark) + path(FRONT.cuffRib, dark, ` transform="${MIRROR}"`));
  }
  return parts.join('');
}

function shading(clipId, clipPaths, folds, grain) {
  return (
    `<clipPath id="${clipId}">${clipPaths}</clipPath>` +
    `<g clip-path="url(#${clipId})" pointer-events="none">` +
    `<rect width="${W}" height="${H}" fill="url(#g-shade-v)"/>` +
    `<rect width="${W}" height="${H}" fill="url(#g-shade-h)"/>` +
    `<path d="${folds}" fill="none" stroke="#000" stroke-opacity=".07" stroke-width="2.5"/>` +
    (grain ? `<rect width="${W}" height="${H}" filter="url(#f-grain)" opacity=".55"/>` : '') +
    '</g>'
  );
}

function svgOpen(viewW, cls) {
  return `<svg class="${cls}" viewBox="0 0 ${viewW} ${H}" aria-hidden="true" focusable="false">`;
}

/**
 * @param {{ id: string, name: string, color: string, tech: string[], status?: string }} project
 * @param {{ uid: string, styleNo: string, face?: 'front' | 'back', grain?: boolean }} options
 * @returns {string} SVG markup
 */
export function renderGarment(project, { uid, styleNo, face = 'front', grain = false }) {
  const cut = CUTS[garmentFor(project)];
  const color = project.color;
  const ink = inkOn(color);
  const sleeveColor = cut.contrastSleeves ? contrastSleeve(color) : color;
  const isTank = cut.sleeve === 'none';
  const torso = face === 'front' ? (isTank ? FRONT.tank : FRONT.torso) : (isTank ? FRONT.tankBack : FRONT.torsoBack);
  const arms = sleeves(cut, sleeveColor);
  const hasHood = cut.neck === 'hood';
  const printTop = hasHood ? (face === 'front' ? 100 : 120) : 100;
  const print = face === 'back'
    ? backPrint(project, ink, printTop)
    : cut.placket ? chestPrint(project, styleNo, ink, cut) : bigPrint(project, styleNo, ink, printTop);

  return (
    svgOpen(W, `garment-svg is-${face}`) +
    (hasHood && face === 'front' ? path(FRONT.hoodBehind, shade(color, -0.28)) : '') +
    hanger() +
    arms.svg +
    path(torso, color) +
    trims(cut, color, sleeveColor, face) +
    (hasHood && face === 'back' ? path(FRONT.hoodBack, shade(color, -0.08), ' stroke="rgba(0,0,0,.18)"') : '') +
    print +
    shading(`clip-${uid}-${face}`, `<path d="${torso}"/>${arms.clip}`, FRONT.folds, grain) +
    '</svg>'
  );
}

/** Narrow view of the garment hanging edge-on. */
export function renderSide(project, { uid }) {
  const cut = CUTS[garmentFor(project)];
  const color = project.color;
  const sleeveColor = cut.contrastSleeves ? contrastSleeve(color) : color;
  const body = cut.sleeve === 'none' ? SIDE.tank : SIDE.body;
  const sleeve = cut.sleeve === 'short' ? SIDE.shortSleeve : cut.sleeve === 'long' ? SIDE.longSleeve : '';
  const clipId = `clip-${uid}-side`;
  return (
    svgOpen(SIDE_W, 'garment-svg is-side') +
    (cut.neck === 'hood' ? path(SIDE.hood, shade(color, -0.25)) : '') +
    `<path d="M35 40 V22 C35 12 42 7 48 11 C52 14 51 20 46 21" fill="none" stroke="${METAL}" stroke-width="2.6" stroke-linecap="round"/>` +
    `<rect x="31" y="34" width="8" height="24" rx="3" fill="${WOOD}"/>` +
    path(body, color) +
    (sleeve ? path(sleeve, shade(sleeveColor, -0.06)) : '') +
    (cut.ribs ? path(SIDE.hemRib, shade(color, -0.22)) : '') +
    `<clipPath id="${clipId}"><path d="${body}"/>${sleeve ? `<path d="${sleeve}"/>` : ''}</clipPath>` +
    `<g clip-path="url(#${clipId})" pointer-events="none"><rect width="${SIDE_W}" height="${H}" fill="url(#g-side)"/>` +
    `<path d="${SIDE.folds}" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="2"/></g>` +
    '</svg>'
  );
}
