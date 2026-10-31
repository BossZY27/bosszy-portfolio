// Detail view: one garment pulled off the rail, with FRONT/BACK, hang tags
// for each tech, and a care label that explains the work.
import { renderGarment } from './garment.js';
import { rackById } from './data/racks.js';
import { animate, escapeHtml, isClientWork, noteFor, prefersReducedMotion, qs } from './dom.js';

const GITHUB_URL = 'https://github.com/BossZY27';
const TAG_COLORS = ['#1a1a1a', '#d8c29f', '#f7f5ef', '#b6f03c', '#e9b7c4', '#c9d3db', '#f2c14e'];
const TAG_DROPS = [0, 26, 10, 38, 4, 30, 16, 42];
const EASE_OUT = 'cubic-bezier(.16,1,.3,1)';
const pad = (n) => String(n).padStart(2, '0');

function tagInk(hex) {
  const n = parseInt(hex.slice(1), 16);
  const lum = (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
  return lum > 0.55 ? '#141414' : '#f5f2ea';
}

/**
 * @param {{
 *   dialog: HTMLDialogElement, notes: Record<string, string>,
 *   styleNoFor: (project: object) => string,
 *   rack: ReturnType<typeof import('./rack.js').createRack>,
 *   onChange: (project: object | null) => void
 * }} options
 */
export function createDetail({ dialog, notes, styleNoFor, rack, onChange }) {
  const veil = qs('.detail-veil', dialog);
  const garmentEl = qs('.detail-garment', dialog);
  const tagsEl = qs('.detail-tags', dialog);
  const titleEl = qs('.detail-title', dialog);
  const countEl = qs('.detail-count', dialog);
  const labelEl = qs('.care-label', dialog);
  const toggleEl = qs('.face-toggle', dialog);
  const chrome = [...dialog.querySelectorAll('.detail-caption, .care-label, .detail-tags, .detail-arrow, .detail-close, .detail-count')];
  let list = [];
  let index = 0;
  let face = 'front';
  let selectedTag = null;
  let busy = false;
  let pendingClose = false;
  let swipeStart = null;

  const current = () => list[index];

  /** End an animated step; a close asked for mid-step runs now. */
  function settle() {
    busy = false;
    if (pendingClose) {
      pendingClose = false;
      close();
    }
  }

  function renderTags(p) {
    tagsEl.innerHTML = p.tech.map((tag, i) => {
      const bg = TAG_COLORS[i % TAG_COLORS.length];
      return `<li style="--drop:${TAG_DROPS[i % TAG_DROPS.length]}px;--tag-bg:${bg};--tag-ink:${tagInk(bg)}">
        <button type="button" class="hang-tag" data-tag="${escapeHtml(tag)}" aria-pressed="${tag === selectedTag}">${escapeHtml(tag)}</button></li>`;
    }).join('');
  }

  function usedFor(p) {
    if (!selectedTag) {
      return `<p class="label-used is-empty">แตะป้ายข้างเสื้อเพื่อดูว่าแต่ละเทคทำหน้าที่อะไรในงานนี้</p>`;
    }
    return `<p class="label-used"><strong>${escapeHtml(selectedTag)}</strong> ${escapeHtml(noteFor(selectedTag, notes))}</p>`;
  }

  function links(p) {
    if (p.links && p.links.length) {
      return p.links.map((l) => `<a class="label-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)} <span aria-hidden="true">↗</span></a>`).join('');
    }
    const note = isClientWork(p) ? 'งานของลูกค้า ยังไม่ได้ขออนุญาตเปิดลิงก์' : 'งานนี้ยังไม่มีลิงก์สาธารณะ';
    return `<p class="label-fine">${note}</p><a class="label-link" href="${GITHUB_URL}" target="_blank" rel="noopener">ดูงานอื่นบน GitHub <span aria-hidden="true">↗</span></a>`;
  }

  function renderLabel(p) {
    const features = (p.features || []).map((f) => `<li>${escapeHtml(f)}</li>`).join('');
    labelEl.innerHTML = `
      <header class="label-head"><span>${styleNoFor(p)}</span><span>${rackById(p.category).label}</span></header>
      <p class="label-status">${escapeHtml(p.status || 'งานส่วนตัว')}</p>
      <h3 class="label-lede">${escapeHtml(p.shortDesc)}</h3>
      ${features ? `<h4 class="label-h">ทำอะไรได้บ้าง</h4><ul class="label-list">${features}</ul>` : ''}
      <h4 class="label-h">รายละเอียด</h4>
      <p class="label-body">${escapeHtml(p.fullDesc)}</p>
      ${p.teamNote ? `<p class="label-fine">${escapeHtml(p.teamNote)}</p>` : ''}
      <h4 class="label-h">แต่ละเทคใช้ทำอะไร</h4>
      <div class="label-used-wrap">${usedFor(p)}</div>
      <footer class="label-foot">${links(p)}<p class="label-care">CARE · ลอง พัง แก้ แล้วทำต่อ</p></footer>`;
  }

  function render() {
    const p = current();
    const uid = `d-${p.id}`;
    const styleNo = styleNoFor(p);
    garmentEl.dataset.face = face;
    garmentEl.innerHTML =
      `<div class="face is-front">${renderGarment(p, { uid, styleNo, face: 'front', grain: true })}</div>` +
      `<div class="face is-back">${renderGarment(p, { uid, styleNo, face: 'back', grain: true })}</div>`;
    garmentEl.setAttribute('aria-label', `${p.name} ด้าน${face === 'front' ? 'หน้า' : 'หลัง'}`);
    titleEl.textContent = p.name;
    countEl.textContent = `${rack.currentRack().label} · ${pad(index + 1)} / ${pad(list.length)}`;
    syncToggle();
    renderTags(p);
    renderLabel(p);
  }

  function syncToggle() {
    toggleEl.dataset.face = face;
    toggleEl.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.face === face)));
  }

  async function setFace(next) {
    if (next === face || busy) return;
    face = next;
    syncToggle();
    garmentEl.setAttribute('aria-label', `${current().name} ด้าน${face === 'front' ? 'หน้า' : 'หลัง'}`);
    const incoming = garmentEl.querySelector(`.face.is-${face}`);
    garmentEl.dataset.wiping = 'true';
    garmentEl.dataset.face = face;
    await animate(incoming, [
      { clipPath: 'inset(100% 0 0 0)', transform: 'translateX(0)', easing: 'steps(4, end)' },
      { clipPath: 'inset(58% 0 0 0)', transform: 'translateX(4px)', easing: 'steps(3, end)' },
      { clipPath: 'inset(22% 0 0 0)', transform: 'translateX(-3px)', easing: 'steps(3, end)' },
      { clipPath: 'inset(0 0 0 0)', transform: 'translateX(0)' },
    ], { duration: 420 });
    delete garmentEl.dataset.wiping;
  }

  function fadeChrome(show, delay = 0) {
    const frames = show ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }];
    return Promise.all(chrome.map((el) => animate(el, frames, { duration: show ? 320 : 180, delay, easing: 'ease-out', fill: 'both' })));
  }

  function flipFrom(rect) {
    const to = garmentEl.getBoundingClientRect();
    const s = rect.width / to.width;
    return `translate(${(rect.left - to.left).toFixed(1)}px, ${(rect.top - to.top).toFixed(1)}px) scale(${s.toFixed(3)})`;
  }

  async function open(project, rackList) {
    if (busy) return;
    busy = true;
    list = rackList;
    index = Math.max(0, list.findIndex((p) => p.id === project.id));
    face = 'front';
    selectedTag = null;
    render();
    dialog.showModal();
    dialog.scrollTop = 0;
    document.documentElement.classList.add('has-detail');
    onChange(project);
    const from = rack.frontRect(project.id);
    rack.setLifted(project.id, Boolean(from));
    qs('.detail-close', dialog).focus({ preventScroll: true });
    const moves = [
      animate(veil, [{ opacity: 0 }, { opacity: 1 }], { duration: 420, easing: 'ease-out' }),
      fadeChrome(true, 220),
    ];
    if (from) {
      moves.push(animate(garmentEl, [
        { transform: flipFrom(from), transformOrigin: '0 0' },
        { transform: 'none', transformOrigin: '0 0' },
      ], { duration: 640, easing: EASE_OUT }));
    }
    await Promise.all(moves);
    chrome.forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
    settle();
  }

  async function close() {
    if (!dialog.open) return;
    if (busy) {
      pendingClose = true;
      return;
    }
    busy = true;
    const p = current();
    rack.reveal(p.id);
    garmentEl.dataset.face = 'front';
    const to = rack.frontRect(p.id);
    rack.setLifted(p.id, Boolean(to));
    const moves = [
      fadeChrome(false),
      animate(veil, [{ opacity: 1 }, { opacity: 0 }], { duration: 460, easing: 'ease-in', fill: 'forwards' }),
    ];
    if (to && !prefersReducedMotion()) {
      moves.push(animate(garmentEl, [
        { transform: 'none', transformOrigin: '0 0' },
        { transform: flipFrom(to), transformOrigin: '0 0' },
      ], { duration: 520, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' }));
    }
    await Promise.all(moves);
    dialog.close();
    [garmentEl, veil, ...chrome].forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
    document.documentElement.classList.remove('has-detail');
    rack.setLifted(null, false);
    const back = document.querySelector(`.garment[data-id="${CSS.escape(p.id)}"] .garment-btn`);
    if (back) back.focus({ preventScroll: true });
    busy = false;
    onChange(null);
  }

  async function step(dir) {
    if (busy || list.length < 2) return;
    busy = true;
    const out = `translateX(${-dir * 22}%) scaleX(.24)`;
    const inn = `translateX(${dir * 22}%) scaleX(.24)`;
    await Promise.all([
      animate(garmentEl, [{ transform: 'none', opacity: 1 }, { transform: out, opacity: 0, filter: 'blur(3px)' }], { duration: 280, easing: 'cubic-bezier(.5,0,.75,0)' }),
      animate(tagsEl, [{ opacity: 1 }, { opacity: 0, transform: `translateX(${-dir * 30}px)` }], { duration: 220 }),
    ]);
    index = (index + dir + list.length) % list.length;
    face = 'front';
    selectedTag = null;
    render();
    rack.reveal(current().id);
    onChange(current());
    labelEl.scrollTop = 0;
    await Promise.all([
      animate(garmentEl, [{ transform: inn, opacity: 0, filter: 'blur(3px)' }, { transform: 'none', opacity: 1, filter: 'blur(0)' }], { duration: 460, easing: EASE_OUT }),
      animate(labelEl, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 360, easing: EASE_OUT }),
      ...[...tagsEl.children].map((li, i) => animate(li, [
        { opacity: 0, transform: 'translateY(-10px) rotate(-8deg)' }, { opacity: 1, transform: 'none' },
      ], { duration: 420, delay: 80 + i * 40, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'backwards' })),
    ]);
    settle();
  }

  function selectTag(tag) {
    selectedTag = selectedTag === tag ? null : tag;
    tagsEl.querySelectorAll('.hang-tag').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tag === selectedTag)));
    qs('.label-used-wrap', labelEl).innerHTML = usedFor(current());
    const btn = [...tagsEl.querySelectorAll('.hang-tag')].find((b) => b.dataset.tag === tag);
    if (btn) {
      animate(btn, [{ transform: 'rotate(0)' }, { transform: 'rotate(-9deg)' }, { transform: 'rotate(5deg)' }, { transform: 'rotate(0)' }],
        { duration: 520, easing: 'ease-out' });
    }
  }

  dialog.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  dialog.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) close();
    const stepBtn = e.target.closest('[data-step]');
    if (stepBtn) step(Number(stepBtn.dataset.step));
    const faceBtn = e.target.closest('.face-toggle button');
    if (faceBtn) setFace(faceBtn.dataset.face);
    const tag = e.target.closest('.hang-tag');
    if (tag) selectTag(tag.dataset.tag);
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.target.closest('.face-toggle') && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      setFace(e.key === 'ArrowLeft' ? 'front' : 'back');
      return;
    }
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
  garmentEl.parentElement.addEventListener('pointerdown', (e) => {
    swipeStart = e.pointerType === 'mouse' ? null : { x: e.clientX, y: e.clientY };
  });
  garmentEl.parentElement.addEventListener('pointerup', (e) => {
    if (!swipeStart) return;
    const dx = e.clientX - swipeStart.x;
    const dy = e.clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) step(dx < 0 ? 1 : -1);
  });

  return { open, close, isOpen: () => dialog.open };
}
