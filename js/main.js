// Wires the rack, detail view and panels together and keeps the URL in step:
// #/web shows the WEB rack, #/web/2getr opens 2Getr from that rack.
import { PROJECTS } from './data/projects.js';
import { TECH_NOTES } from './data/tech-notes.js';
import { DEFAULT_RACK, RACKS, projectsInRack, rackById } from './data/racks.js';
import { createRack } from './rack.js';
import { createDetail } from './detail.js';
import { createPanels } from './panels.js';
import { escapeHtml, qs, styleNumber } from './dom.js';

const SITE_TITLE = 'Phakin Meksuwan (BossZY) | ภาคิน เมฆสุวรรณ มข — Portfolio';
const indexById = new Map(PROJECTS.map((p, i) => [p.id, i]));
const styleNoFor = (p) => styleNumber(indexById.get(p.id));

function writeHash(rackId, projectId) {
  const hash = `#/${rackId}${projectId ? `/${projectId}` : ''}`;
  if (location.hash !== hash) history.replaceState(null, '', hash);
}

function readHash() {
  const [, rackId, projectId] = location.hash.split('/');
  const rack = RACKS.some((r) => r.id === rackId) ? rackId : DEFAULT_RACK;
  return { rackId: rack, project: PROJECTS.find((p) => p.id === projectId) || null };
}

function fillMarquee() {
  const words = ['NEW DROPS', 'KHON KAEN', `${PROJECTS.length} WORKS ON THE RAIL`, 'TRY · BREAK · FIX · SHIP', 'PHAKIN MEKSUWAN', 'CS @ KKU'];
  const run = words.map((w) => `<span>${escapeHtml(w)}</span><span class="dot" aria-hidden="true">●</span>`).join('');
  qs('.marquee-track').innerHTML = run + run;
}

const rack = createRack({
  root: qs('.rack'),
  tabs: qs('.rack-tabs'),
  caption: qs('.rack-caption'),
  projects: PROJECTS,
  onOpen: (project, list) => detail.open(project, list),
  onRackChange: (r) => {
    if (!detail.isOpen()) writeHash(r.id);
  },
});

const detail = createDetail({
  dialog: qs('#detail'),
  notes: TECH_NOTES,
  styleNoFor,
  rack,
  onChange: (project) => {
    writeHash(rack.currentRack().id, project && project.id);
    document.title = project ? `${project.name} · Phakin Meksuwan (BossZY)` : SITE_TITLE;
  },
});

/** Open a work from anywhere: switch to a rack that holds it, then pull it off the rail. */
async function openProject(project, preferredRack) {
  const holds = (id) => projectsInRack(rackById(id), PROJECTS).some((p) => p.id === project.id);
  const target = preferredRack && holds(preferredRack) ? preferredRack : project.category;
  await rack.show(target, { animated: false });
  rack.reveal(project.id);
  detail.open(project, rack.list());
}

createPanels({ projects: PROJECTS, styleNoFor, onPick: (p) => openProject(p) });

qs('[data-count="all"]').textContent = String(PROJECTS.length);
qs('[data-count="new"]').textContent = String(PROJECTS.filter((p) => p.isNew).length);
fillMarquee();

const start = readHash();
if (start.project) {
  openProject(start.project, start.rackId);
} else {
  rack.show(start.rackId);
}
