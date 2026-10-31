// Small DOM helpers shared by the rack, detail view and panels.
const XML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape text for safe use inside HTML or SVG markup. */
export function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => XML_ESCAPES[ch]);
}

export const escapeHtml = escapeXml;

/** @returns {HTMLElement} */
export function qs(selector, root = document) {
  const node = root.querySelector(selector);
  if (!node) throw new Error(`Missing element: ${selector}`);
  return node;
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Run a Web Animation and resolve when it ends; skipped when motion is reduced. */
export function animate(node, keyframes, options) {
  if (prefersReducedMotion() || typeof node.animate !== 'function') return Promise.resolve();
  return node.animate(keyframes, { fill: 'none', ...options }).finished.catch(() => undefined);
}

/** BZY-007 style number used on prints and labels. */
export function styleNumber(index) {
  return `BZY-${String(index + 1).padStart(3, '0')}`;
}

/** Tech tags may carry a version ("Next.js 16"); notes are keyed by the bare name. */
export function noteFor(tag, notes) {
  return notes[tag] || notes[tag.replace(/\s+[0-9.]+$/, '')] || '';
}

export function isClientWork(project) {
  return /ลูกค้า/.test(project.status || '');
}
