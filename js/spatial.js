(() => {
  'use strict';

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const lerp = (from, to, amount) => from + (to - from) * amount;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowPower = (navigator.deviceMemory && navigator.deviceMemory <= 2)
    || (!navigator.deviceMemory && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

  const storyFrames = [...document.querySelectorAll('.story-frame')];
  const toolRows = [...document.querySelectorAll('[data-tool-row]')];
  const toolsReadout = document.getElementById('tools-readout-text');
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const heroCopy = document.querySelector('.hero-copy');
  const heroMeta = document.querySelector('.hero-meta');
  const storyPin = document.querySelector('.story-pin');

  const state = {
    hero: 0,
    story: 0,
    tools: 0,
    scroll: 0,
    pointerX: 0,
    pointerY: 0,
    targetPointerX: 0,
    targetPointerY: 0
  };

  function chapterProgress(element) {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const distance = Math.max(1, element.offsetHeight - window.innerHeight);
    return clamp(-rect.top / distance);
  }

  function updateScrollState() {
    const hero = document.querySelector('[data-chapter="hero"]');
    const story = document.querySelector('[data-chapter="story"]');
    const tools = document.querySelector('[data-chapter="tools"]');
    state.hero = chapterProgress(hero);
    state.story = chapterProgress(story);
    state.tools = chapterProgress(tools);
    state.scroll = window.scrollY;

    if (!reducedMotion) {
      const heroExit = clamp((state.hero - .48) / .42);
      if (heroCopy) {
        heroCopy.style.opacity = String(1 - heroExit);
        heroCopy.style.transform = `translate3d(0, ${-heroExit * 70}px, 0)`;
      }
      if (heroMeta) {
        heroMeta.style.opacity = String(1 - clamp((state.hero - .62) / .3));
        heroMeta.style.transform = `translate3d(0, ${state.hero * 28}px, 0)`;
      }
    }

    const frameIndex = Math.min(storyFrames.length - 1, Math.floor(state.story * storyFrames.length));
    storyFrames.forEach((frame, index) => frame.classList.toggle('active', index === frameIndex));
    storyPin?.style.setProperty('--story-progress', state.story.toFixed(4));

    const activeToolIndex = Math.min(toolRows.length - 1, Math.floor(state.tools * toolRows.length));
    toolRows.forEach((row, index) => row.classList.toggle('active', index <= activeToolIndex));
    if (toolsReadout && toolRows[activeToolIndex]) {
      toolsReadout.textContent = toolRows[activeToolIndex].querySelector('strong')?.textContent.toUpperCase() || '';
    }

    updateActiveNavigation();
  }

  function updateActiveNavigation() {
    let activeId = '';
    const anchors = ['about', 'skills', 'projects', 'contact'];
    anchors.forEach(id => {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= window.innerHeight * .42) activeId = id;
    });
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`));
  }

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      updateScrollState();
      scrollTicking = false;
    });
  }, { passive: true });

  window.addEventListener('pointermove', event => {
    state.targetPointerX = (event.clientX / window.innerWidth - .5) * 2;
    state.targetPointerY = (event.clientY / window.innerHeight - .5) * 2;
  }, { passive: true });

  updateScrollState();

  if (!window.THREE) return;
  const canvas = document.getElementById('spatial-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !lowPower,
    powerPreference: lowPower ? 'low-power' : 'high-performance'
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.6));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0c0b, .065);
  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, .1, 100);
  camera.position.set(0, 0, 8.4);

  const objectRoot = new THREE.Group();
  const coreRoot = new THREE.Group();
  objectRoot.add(coreRoot);
  scene.add(objectRoot);

  const paperColor = new THREE.Color(0xe8e5dc);
  const signalColor = new THREE.Color(0xb8ed3b);
  const rustColor = new THREE.Color(0xf06437);
  const blueColor = new THREE.Color(0x6faeba);

  const shellMaterial = new THREE.MeshBasicMaterial({
    color: paperColor,
    wireframe: true,
    transparent: true,
    opacity: .3
  });
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.62, lowPower ? 1 : 2), shellMaterial);
  shell.rotation.set(.18, .2, -.12);
  coreRoot.add(shell);

  const knotMaterial = new THREE.MeshBasicMaterial({
    color: rustColor,
    wireframe: true,
    transparent: true,
    opacity: .66
  });
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(.74, .19, lowPower ? 64 : 128, lowPower ? 8 : 12, 2, 3),
    knotMaterial
  );
  knot.rotation.x = .7;
  coreRoot.add(knot);

  const pointCount = lowPower ? 420 : 1100;
  const positions = new Float32Array(pointCount * 3);
  for (let i = 0; i < pointCount; i += 1) {
    const radius = 2.1 + Math.random() * 2.7;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pointMaterial = new THREE.PointsMaterial({ color: signalColor, size: lowPower ? .014 : .018, transparent: true, opacity: .58 });
  const points = new THREE.Points(pointGeometry, pointMaterial);
  objectRoot.add(points);

  const rings = new THREE.Group();
  const ringConfigs = [
    { radius: 2.12, tube: .008, color: signalColor, rotation: [1.2, .2, 0] },
    { radius: 2.48, tube: .006, color: blueColor, rotation: [.2, .8, .4] },
    { radius: 2.86, tube: .005, color: paperColor, rotation: [.7, .1, 1.1] }
  ];
  ringConfigs.forEach(config => {
    const material = new THREE.MeshBasicMaterial({ color: config.color, transparent: true, opacity: .33 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(config.radius, config.tube, 4, 160), material);
    ring.rotation.set(...config.rotation);
    rings.add(ring);
  });
  objectRoot.add(rings);

  const markerGeometry = new THREE.BoxGeometry(.055, .055, .055);
  const markerMaterial = new THREE.MeshBasicMaterial({ color: paperColor, transparent: true, opacity: .9 });
  for (let i = 0; i < 18; i += 1) {
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    const angle = (i / 18) * Math.PI * 2;
    const orbit = 2.1 + (i % 3) * .37;
    marker.position.set(Math.cos(angle) * orbit, Math.sin(angle * 1.4) * 1.5, Math.sin(angle) * orbit);
    objectRoot.add(marker);
  }

  const guideMaterial = new THREE.LineBasicMaterial({ color: 0x777a70, transparent: true, opacity: .14 });
  const guidePoints = [];
  for (let i = 0; i <= 40; i += 1) guidePoints.push(new THREE.Vector3(-8 + i * .4, -2.8, -2.4));
  const guideGeometry = new THREE.BufferGeometry().setFromPoints(guidePoints);
  const guide = new THREE.Line(guideGeometry, guideMaterial);
  scene.add(guide);

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  const clock = new THREE.Clock();
  function renderScene() {
    requestAnimationFrame(renderScene);
    if (document.hidden || state.story >= 1) return;

    const elapsed = clock.getElapsedTime();
    const mobile = window.innerWidth < 760;
    state.pointerX = lerp(state.pointerX, state.targetPointerX, .045);
    state.pointerY = lerp(state.pointerY, state.targetPointerY, .045);

    const heroToStory = clamp(state.story * 1.4);
    const exitStory = clamp((state.story - .82) / .18);
    const targetX = mobile ? 0 : lerp(2.05, -2.35, heroToStory);
    const targetY = mobile ? lerp(-1.55, .72, heroToStory) : lerp(.15, -.18, heroToStory);
    objectRoot.position.x = lerp(objectRoot.position.x, targetX + state.pointerX * .11, .055);
    objectRoot.position.y = lerp(objectRoot.position.y, targetY - state.pointerY * .09, .055);
    objectRoot.position.z = lerp(objectRoot.position.z, lerp(0, -1.15, state.story), .055);

    const scale = lerp(mobile ? .58 : 1, mobile ? .5 : .72, heroToStory) * (1 - exitStory * .42);
    objectRoot.scale.setScalar(scale);
    objectRoot.rotation.y = (reducedMotion ? .25 : elapsed * .075) + state.hero * 1.6 + state.story * 3.2 + state.pointerX * .08;
    objectRoot.rotation.x = -.08 + state.story * .38 + state.pointerY * .06;
    coreRoot.rotation.z = (reducedMotion ? .1 : elapsed * -.055) + state.story * 1.8;
    knot.rotation.y = (reducedMotion ? .35 : elapsed * .18) + state.hero * 2.2;
    rings.rotation.x = state.story * 1.2;
    rings.rotation.z = (reducedMotion ? 0 : elapsed * .025) - state.hero * .7;
    points.rotation.y = reducedMotion ? 0 : elapsed * -.012;
    pointMaterial.opacity = .58 * (1 - exitStory);
    shellMaterial.opacity = .3 * (1 - exitStory);
    knotMaterial.opacity = .66 * (1 - exitStory);

    camera.position.x = state.pointerX * .08;
    camera.position.y = -state.pointerY * .08;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  document.body.classList.add('scene-ready');
  renderScene();
})();
