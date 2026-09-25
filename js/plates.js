/* Plates: ตัวช่วยเล็ก ๆ ของช่วง Archive
   1) แถบบอกว่ากำลังดูแผ่นที่เท่าไหร่จากทั้งหมด ทำหน้าที่เดียวกับ readout ของช่วง Tools
   2) เลื่อนแท็บกรองด้วยลูกศรซ้ายขวาได้ ตามแนวทาง tab ของ WAI-ARIA
   ทั้งสองส่วนเป็นส่วนเสริม ถ้าสคริปต์นี้ไม่ทำงาน หน้า Archive ยังใช้ได้ครบ */
(() => {
  'use strict';

  // main.js วาดการ์ดตอน DOMContentLoaded และลงทะเบียน listener ไว้ก่อนไฟล์นี้
  // สคริปต์แบบ defer จะรันตอน readyState เป็น "interactive" ซึ่งยังไม่มีการ์ดในหน้า จึงต้องรอ event จริง
  if (document.readyState === 'complete') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  }

  function start() {
  const section = document.getElementById('projects');
  const grid = document.getElementById('projects-grid');
  const tabs = [...document.querySelectorAll('.filter-btn')];
  if (!section || !grid) return;

  // ---------- 1) แถบบอกตำแหน่งในคลังงาน ----------
  const readout = document.createElement('div');
  readout.className = 'archive-readout';
  readout.setAttribute('aria-hidden', 'true');
  readout.innerHTML = '<span>ARCHIVE_POS</span><strong id="archive-readout-text">SHEET 01</strong>';
  section.appendChild(readout);

  // ข้อความสำหรับโปรแกรมอ่านหน้าจอ แยกจากแถบที่เป็นภาพ เพื่อไม่ให้อ่านรัวตอนเลื่อน
  const live = document.createElement('p');
  live.className = 'sr-only';
  live.setAttribute('role', 'status');
  live.setAttribute('aria-live', 'polite');
  section.appendChild(live);

  const readoutText = readout.querySelector('#archive-readout-text');
  let activeCard = null;

  function visibleCards() {
    return [...grid.querySelectorAll('.project-card:not(.hidden)')];
  }

  function paintReadout() {
    const cards = visibleCards();
    if (!cards.length) {
      readoutText.textContent = 'ไม่พบงานในหมวดนี้';
      return;
    }
    const index = activeCard ? cards.indexOf(activeCard) : -1;
    const position = index >= 0 ? index + 1 : 1;
    readoutText.textContent = `SHEET ${String(position).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  }

  // หาการ์ดที่อยู่ใกล้ขอบบนของ viewport ที่สุด แล้วใช้เป็นตำแหน่งปัจจุบัน
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) activeCard = entry.target;
    });
    paintReadout();
  }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });

  grid.querySelectorAll('.project-card').forEach(card => observer.observe(card));

  // แสดงแถบเฉพาะตอนที่คลังงานอยู่ในจอ
  const sectionWatcher = new IntersectionObserver(([entry]) => {
    readout.classList.toggle('is-on', entry.isIntersecting);
  }, { threshold: 0.04 });
  sectionWatcher.observe(section);

  // ---------- 2) แท็บกรอง ----------
  if (tabs.length) {
    const group = tabs[0].parentElement;
    group?.setAttribute('role', 'tablist');
    tabs.forEach(tab => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(tab.classList.contains('active')));
      tab.tabIndex = tab.classList.contains('active') ? 0 : -1;
    });

    function focusTab(index) {
      const next = tabs[(index + tabs.length) % tabs.length];
      tabs.forEach(tab => { tab.tabIndex = tab === next ? 0 : -1; });
      next.focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('keydown', event => {
        const keys = { ArrowRight: 1, ArrowLeft: -1 };
        if (event.key in keys) {
          event.preventDefault();
          focusTab(index + keys[event.key]);
          return;
        }
        if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          focusTab(event.key === 'Home' ? 0 : tabs.length - 1);
        }
      });

      tab.addEventListener('click', () => {
        tabs.forEach(other => {
          const selected = other === tab;
          other.setAttribute('aria-selected', String(selected));
          other.tabIndex = selected ? 0 : -1;
        });
        // initFilterTabs ใน main.js รอ 300ms ก่อนซ่อนการ์ด จึงอ่านผลหลังจากนั้น
        window.setTimeout(() => {
          activeCard = null;
          const count = visibleCards().length;
          paintReadout();
          live.textContent = count
            ? `กรองหมวด ${tab.textContent.trim()} แล้ว พบ ${count} งาน`
            : `กรองหมวด ${tab.textContent.trim()} แล้ว ไม่พบงานในหมวดนี้`;
        }, 340);
      });
    });
  }

  paintReadout();
  }
})();
