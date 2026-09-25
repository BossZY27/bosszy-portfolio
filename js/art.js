(() => {
  'use strict';

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.getElementById('motion-toggle');
  const art = document.getElementById('hero-art');
  const stack = art?.querySelector('.hero-art-stack');
  const cards = [...(art?.querySelectorAll('[data-art-card]') || [])];
  const selectors = [...(art?.querySelectorAll('[data-art-select]') || [])];
  const openButton = document.getElementById('art-open');
  const featured = [{ id: '2getr', name: '2Getr' }, { id: 'opt-pos', name: 'Opt-POS' }, { id: 'grid-bot', name: 'Grid Trading Bot' }];
  let savedPreference = null;

  try { savedPreference = localStorage.getItem('bosszy-motion'); } catch (_) { /* Private browsing can block storage. */ }

  function applyMotionPreference() {
    const motionOff = motionQuery.matches || savedPreference === 'off';
    document.body.classList.toggle('motion-off', motionOff);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(motionOff));
      toggle.disabled = motionQuery.matches;
      toggle.textContent = motionQuery.matches ? 'ลดการเคลื่อนไหวแล้ว' : motionOff ? 'เปิดการเคลื่อนไหว' : 'ลดการเคลื่อนไหว';
      toggle.setAttribute('aria-label', motionQuery.matches ? 'ระบบตั้งค่าให้ลดการเคลื่อนไหวอยู่แล้ว' : toggle.textContent);
    }
    if (motionOff && stack) {
      stack.style.setProperty('--art-x', '0px');
      stack.style.setProperty('--art-y', '0px');
    }
    window.dispatchEvent(new Event('portfolio:motionchange'));
  }

  toggle?.addEventListener('click', () => {
    savedPreference = document.body.classList.contains('motion-off') ? 'on' : 'off';
    try { localStorage.setItem('bosszy-motion', savedPreference); } catch (_) { /* Choice still works until reload. */ }
    applyMotionPreference();
  });
  motionQuery.addEventListener?.('change', applyMotionPreference);
  applyMotionPreference();

  let active = 0;
  function selectCard(index, focus = false) {
    if (!cards.length) return;
    active = (index + cards.length) % cards.length;
    cards.forEach((card, cardIndex) => {
      const selected = cardIndex === active;
      card.classList.toggle('is-active', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    selectors.forEach((button, buttonIndex) => button.setAttribute('aria-pressed', String(buttonIndex === active)));
    if (openButton) openButton.textContent = `ดูรายละเอียด ${featured[active].name} ↗`;
    if (focus) cards[active].focus();
  }

  selectors.forEach((button, index) => button.addEventListener('click', () => selectCard(index)));
  openButton?.addEventListener('click', () => window.triggerProjectModal?.(featured[active].id));

  let startX = null;
  let suppressClick = false;
  art?.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') startX = event.clientX; });
  art?.addEventListener('pointerup', event => {
    if (startX === null) return;
    const distance = event.clientX - startX;
    startX = null;
    if (Math.abs(distance) < 36) return;
    suppressClick = true;
    selectCard(active + (distance < 0 ? 1 : -1));
    window.setTimeout(() => { suppressClick = false; }, 50);
  });
  art?.addEventListener('pointercancel', () => { startX = null; });

  cards.forEach((card, index) => {
    card.addEventListener('click', event => {
      if (suppressClick) { event.preventDefault(); return; }
      selectCard(index);
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        selectCard(active + (event.key === 'ArrowRight' ? 1 : -1), true);
      }
    });
  });

  art?.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || document.body.classList.contains('motion-off') || !stack) return;
    const bounds = art.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    stack.style.setProperty('--art-x', `${(x * 12).toFixed(1)}px`);
    stack.style.setProperty('--art-y', `${(y * 12).toFixed(1)}px`);
  }, { passive: true });
  art?.addEventListener('pointerleave', () => {
    stack?.style.setProperty('--art-x', '0px');
    stack?.style.setProperty('--art-y', '0px');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const total = document.getElementById('story-project-total')?.textContent?.trim();
    const now = document.querySelector('.story-art-now');
    if (total && now) now.innerHTML = `${total}<i>+</i>`;
  });
})();
