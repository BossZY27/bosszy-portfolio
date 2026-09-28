(() => {
  'use strict';

  const relic = document.getElementById('hero-relic');
  const hero = document.getElementById('hero');
  if (!relic || !hero) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let heroVisible = true;

  function still() {
    return reducedMotion.matches || document.body.classList.contains('motion-off');
  }

  function paint() {
    frame = 0;
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
    const exit = still() ? 0 : Math.min(1, Math.max(0, (progress - .42) / .45));
    relic.style.opacity = String(1 - exit);
    relic.style.setProperty('--relic-x', still() ? '0px' : `${(pointerX * 13).toFixed(1)}px`);
    relic.style.setProperty('--relic-y', still() ? '0px' : `${(pointerY * 9 - exit * 38).toFixed(1)}px`);
  }

  function queuePaint() {
    if (!heroVisible) return;
    if (!frame) frame = requestAnimationFrame(paint);
  }

  const heroObserver = new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    relic.classList.toggle('is-paused', !heroVisible);
    if (heroVisible) queuePaint();
    else paint();
  });
  heroObserver.observe(hero);

  window.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || still()) return;
    pointerX = (event.clientX / window.innerWidth - .5) * 2;
    pointerY = (event.clientY / window.innerHeight - .5) * 2;
    queuePaint();
  }, { passive: true });
  window.addEventListener('scroll', queuePaint, { passive: true });
  window.addEventListener('resize', queuePaint, { passive: true });
  window.addEventListener('portfolio:motionchange', queuePaint);
  reducedMotion.addEventListener?.('change', queuePaint);
  paint();
})();
