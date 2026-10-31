// The rail: garments hang side-on, the one under the pointer (or in the
// middle on touch screens) turns to face front and its neighbours make room.
import { renderGarment, renderSide } from './garment.js';
import { RACKS, rackById, projectsInRack } from './data/racks.js';
import { animate, escapeHtml, styleNumber } from './dom.js';

const FRONT_RATIO = 240 / 300;
const SIDE_RATIO = 70 / 300;
const GAP = 8;
const MIN_SLOT = 18;
const CAROUSEL_SLOT = 54;
const CAROUSEL_BELOW = 640;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/**
 * @param {{
 *   root: HTMLElement, tabs: HTMLElement, caption: HTMLElement,
 *   projects: object[], onOpen: (project: object, list: object[]) => void,
 *   onRackChange?: (rack: object) => void
 * }} options
 */
export function createRack({ root, tabs, caption, projects, onOpen, onRackChange = () => {} }) {
  const track = root.querySelector('.rack-track');
  const indexById = new Map(projects.map((p, i) => [p.id, i]));
  const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
  let rack = null;
  let items = [];
  let active = -1;
  let carousel = false;
  let metrics = { slot: 0, push: 0, front: 0 };
  let scrollFrame = 0;

  const nodes = () => [...track.children];
  const styleNo = (p) => styleNumber(indexById.get(p.id));

  function renderTabs() {
    tabs.innerHTML = RACKS.map((r) => {
      const count = projectsInRack(r, projects).length;
      return `<button type="button" role="tab" class="rack-tab" id="tab-${r.id}" data-rack="${r.id}"
        aria-controls="rack-panel" aria-selected="false" tabindex="-1">${r.label}<sup>${count}</sup></button>`;
    }).join('');
  }

  function syncTabs() {
    tabs.querySelectorAll('.rack-tab').forEach((tab) => {
      const on = tab.dataset.rack === rack.id;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    root.setAttribute('aria-labelledby', `tab-${rack.id}`);
  }

  function renderItems() {
    track.innerHTML = items.map((p, i) => {
      const uid = `r-${p.id}`;
      const label = `${p.name} · ${p.shortDesc}`;
      return `<li class="garment" data-id="${p.id}" style="--i:${i}">
        <button type="button" class="garment-btn" aria-label="${escapeHtml(label)}">
          ${renderSide(p, { uid })}${renderGarment(p, { uid, styleNo: styleNo(p) })}
        </button></li>`;
    }).join('');
  }

  function measure() {
    const first = track.firstElementChild;
    if (!first) return;
    const h = first.offsetHeight;
    const front = h * FRONT_RATIO;
    const side = h * SIDE_RATIO;
    const width = root.clientWidth;
    carousel = !hoverMedia.matches || width < CAROUSEL_BELOW;
    const n = items.length;
    const slot = carousel
      ? Math.min(side * 0.95, CAROUSEL_SLOT)
      : clamp((width * 0.86 - front) / Math.max(1, n - 1), MIN_SLOT, side * 0.92);
    metrics = { slot, front, push: (front - slot) / 2 + GAP };
    root.classList.toggle('is-carousel', carousel);
    track.style.setProperty('--slot-w', `${slot.toFixed(1)}px`);
  }

  function itemCenter(li) {
    return li.offsetLeft - track.scrollLeft + li.offsetWidth / 2;
  }

  function renderCaption() {
    const p = items[active];
    if (!p) {
      caption.style.setProperty('--cap-x', `${(root.clientWidth / 2).toFixed(0)}px`);
      caption.innerHTML = `<strong>${escapeHtml(rack.label)}</strong> · ${items.length} ชิ้น
        <span>${escapeHtml(rack.th)} · ${carousel ? 'เลื่อนราวแล้วแตะตัวกลางเพื่อเปิด' : 'ชี้ที่เสื้อเพื่อหมุนดู คลิกเพื่อเปิด'}</span>`;
      return;
    }
    const li = nodes()[active];
    const x = clamp(track.offsetLeft + itemCenter(li), 140, root.clientWidth - 140);
    caption.style.setProperty('--cap-x', `${x.toFixed(0)}px`);
    const can = (p.features || []).slice(0, 2).map(escapeHtml).join(' · ');
    caption.innerHTML = `<strong>${escapeHtml(p.name)}</strong> — ${escapeHtml(p.status || styleNo(p))}
      <span>${escapeHtml(p.shortDesc)}</span>${can ? `<span class="cap-can">ทำได้: ${can}</span>` : ''}`;
  }

  function applyShift() {
    nodes().forEach((li, i) => {
      const shift = active < 0 || i === active ? 0 : i < active ? -metrics.push : metrics.push;
      li.style.setProperty('--shift', `${shift.toFixed(1)}px`);
      li.classList.toggle('is-active', i === active);
    });
    renderCaption();
  }

  function activate(index, { swing = true } = {}) {
    const next = index >= 0 && index < items.length ? index : -1;
    if (next === active) return;
    active = next;
    applyShift();
    const li = nodes()[active];
    if (swing && li) {
      animate(li.querySelector('.garment-btn'), [
        { transform: 'rotate(0deg)' }, { transform: 'rotate(2.4deg)' },
        { transform: 'rotate(-1.4deg)' }, { transform: 'rotate(0.5deg)' }, { transform: 'rotate(0deg)' },
      ], { duration: 760, easing: 'ease-out' });
    }
  }

  function centerOn(index, behavior = 'smooth') {
    const li = nodes()[index];
    if (!li) return;
    track.scrollTo({ left: li.offsetLeft + li.offsetWidth / 2 - track.clientWidth / 2, behavior });
  }

  function nearestToCenter() {
    const mid = track.clientWidth / 2;
    let best = -1;
    let bestDist = Infinity;
    nodes().forEach((li, i) => {
      const d = Math.abs(itemCenter(li) - mid);
      if (d < bestDist) { best = i; bestDist = d; }
    });
    return best;
  }

  function relayout() {
    measure();
    if (carousel && active < 0) active = 0;
    applyShift();
    if (carousel) centerOn(active, 'instant');
  }

  async function show(rackId, { animated = true } = {}) {
    const nextRack = rackById(rackId);
    if (rack && nextRack.id === rack.id) return;
    if (animated && rack) {
      await animate(track, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-36px)' }],
        { duration: 220, easing: 'ease-in' });
    }
    rack = nextRack;
    items = projectsInRack(rack, projects);
    active = -1;
    renderItems();
    syncTabs();
    relayout();
    onRackChange(rack);
    if (animated) {
      nodes().forEach((li, i) => animate(li.querySelector('.garment-btn'), [
        { opacity: 0, transform: 'translateY(-18px) rotate(-3deg)' },
        { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
      ], { duration: 460, delay: i * 26, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'backwards' }));
    }
  }

  function indexOfNode(target) {
    const li = target.closest('.garment');
    return li ? nodes().indexOf(li) : -1;
  }

  track.addEventListener('pointerover', (e) => {
    if (carousel || e.pointerType !== 'mouse') return;
    const i = indexOfNode(e.target);
    if (i >= 0) activate(i);
  });
  root.addEventListener('pointerleave', (e) => {
    if (!carousel && e.pointerType === 'mouse' && !root.contains(document.activeElement)) activate(-1);
  });
  track.addEventListener('focusin', (e) => {
    const i = indexOfNode(e.target);
    if (i < 0) return;
    activate(i);
    if (carousel) centerOn(i);
  });
  track.addEventListener('focusout', (e) => {
    if (!carousel && !track.contains(e.relatedTarget) && !root.matches(':hover')) activate(-1);
  });
  track.addEventListener('click', (e) => {
    const i = indexOfNode(e.target);
    if (i < 0) return;
    if (carousel && i !== active) {
      activate(i);
      centerOn(i);
      return;
    }
    activate(i, { swing: false });
    onOpen(items[i], items);
  });
  track.addEventListener('keydown', (e) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1 };
    const i = indexOfNode(e.target);
    if (i < 0) return;
    let next = -1;
    if (e.key in keys) next = clamp(i + keys[e.key], 0, items.length - 1);
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = items.length - 1;
    if (next < 0) return;
    e.preventDefault();
    nodes()[next].querySelector('.garment-btn').focus();
  });
  track.addEventListener('scroll', () => {
    if (!carousel || scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      activate(nearestToCenter(), { swing: false });
    });
  }, { passive: true });

  tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.rack-tab');
    if (tab) show(tab.dataset.rack);
  });
  tabs.addEventListener('keydown', (e) => {
    const list = [...tabs.querySelectorAll('.rack-tab')];
    const i = list.indexOf(document.activeElement);
    if (i < 0) return;
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = list[(i + step + list.length) % list.length];
    next.focus();
    show(next.dataset.rack);
  });

  new ResizeObserver(() => relayout()).observe(root);
  hoverMedia.addEventListener('change', relayout);
  renderTabs();

  return {
    show,
    currentRack: () => rack,
    list: () => items,
    /** Keep the rail in step with the detail view so closing lands on the right garment. */
    reveal(id) {
      const i = items.findIndex((p) => p.id === id);
      if (i < 0) return;
      activate(i, { swing: false });
      if (carousel) centerOn(i, 'instant');
    },
    /** Where a garment's front sits once it has finished turning. */
    frontRect(id) {
      const li = nodes().find((n) => n.dataset.id === id);
      if (!li) return null;
      const box = track.getBoundingClientRect();
      const cx = box.left + itemCenter(li);
      return { left: cx - metrics.front / 2, top: box.top + li.offsetTop, width: metrics.front, height: li.offsetHeight };
    },
    setLifted(id, lifted) {
      nodes().forEach((li) => li.classList.toggle('is-lifted', lifted && li.dataset.id === id));
    },
  };
}
