// About, Contact and the plain list of every work, each in a <dialog>.
import { RACKS, projectsInRack } from './data/racks.js';
import { escapeHtml, prefersReducedMotion, qs } from './dom.js';

const CLOSE_MS = 420;

/**
 * @param {{ projects: object[], styleNoFor: (p: object) => string, onPick: (p: object) => void }} options
 */
export function createPanels({ projects, styleNoFor, onPick }) {
  const panels = new Map([...document.querySelectorAll('dialog.panel')].map((d) => [d.dataset.panel, d]));
  const listBody = qs('.work-list');
  const search = qs('#work-search');
  const status = qs('#work-search-status');
  let lastTrigger = null;

  function renderList() {
    listBody.innerHTML = RACKS.filter((r) => r.id !== 'new').map((rack) => {
      const rows = projectsInRack(rack, projects).map((p) => {
        const features = p.features || [];
        const haystack = [p.name, p.shortDesc, p.status, ...p.tech, ...features].join(' ').toLowerCase();
        const can = features.length ? `<span class="work-can">ทำได้: ${features.map(escapeHtml).join(' · ')}</span>` : '';
        return `<li data-search="${escapeHtml(haystack)}">
          <button type="button" class="work-row" data-id="${p.id}">
            <span class="work-no">${styleNoFor(p)}</span>
            <span class="work-main"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.shortDesc)}</span>${can}</span>
            <span class="work-status">${escapeHtml(p.status || 'งานส่วนตัว')}</span>
            <span class="work-tech">${p.tech.map(escapeHtml).join(' · ')}</span>
          </button></li>`;
      }).join('');
      return `<section class="work-group" aria-labelledby="group-${rack.id}">
        <h3 id="group-${rack.id}"><span>${rack.label}</span> ${escapeHtml(rack.th)}</h3><ul>${rows}</ul></section>`;
    }).join('');
  }

  function filterList() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    listBody.querySelectorAll('li[data-search]').forEach((li) => {
      const hit = !q || li.dataset.search.includes(q);
      li.hidden = !hit;
      if (hit) shown += 1;
    });
    listBody.querySelectorAll('.work-group').forEach((g) => {
      g.hidden = !g.querySelector('li:not([hidden])');
    });
    status.textContent = q ? `เจอ ${shown} งาน` : `ทั้งหมด ${projects.length} งาน`;
  }

  function open(name, trigger) {
    const dialog = panels.get(name);
    if (!dialog || dialog.open) return;
    lastTrigger = trigger || document.activeElement;
    dialog.showModal();
    requestAnimationFrame(() => dialog.classList.add('is-open'));
    if (name === 'list') search.focus({ preventScroll: true });
  }

  function close(dialog, { restoreFocus = true } = {}) {
    if (!dialog.open || dialog.dataset.closing) return Promise.resolve();
    dialog.dataset.closing = 'true';
    dialog.classList.remove('is-open');
    return new Promise((resolve) => {
      setTimeout(() => {
        dialog.close();
        delete dialog.dataset.closing;
        if (restoreFocus && lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
        resolve();
      }, prefersReducedMotion() ? 0 : CLOSE_MS);
    });
  }

  panels.forEach((dialog) => {
    dialog.addEventListener('cancel', (e) => {
      e.preventDefault();
      close(dialog);
    });
    dialog.addEventListener('click', async (e) => {
      if (e.target === dialog || e.target.closest('[data-close]')) {
        close(dialog);
        return;
      }
      const row = e.target.closest('.work-row');
      if (!row) return;
      const project = projects.find((p) => p.id === row.dataset.id);
      await close(dialog, { restoreFocus: false });
      if (project) onPick(project);
    });
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open]');
    if (trigger) open(trigger.dataset.open, trigger);
  });
  search.addEventListener('input', filterList);

  renderList();
  filterList();
  return { open };
}
