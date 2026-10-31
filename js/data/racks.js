// Each rack is one category of work. `garment` picks the cut drawn in garment.js.
export const RACKS = [
  { id: 'new', label: 'NEW DROPS', th: 'งานใหม่ล่าสุด', match: (p) => Boolean(p.isNew) },
  { id: 'web', label: 'WEB', th: 'เว็บและระบบหลังบ้าน', garment: 'tee' },
  { id: 'mobile', label: 'MOBILE', th: 'แอปมือถือ', garment: 'hoodie' },
  { id: 'automation', label: 'AUTOMATION', th: 'บอทและระบบอัตโนมัติ', garment: 'shirt' },
  { id: 'trading', label: 'TRADING', th: 'บอทเทรด', garment: 'tank' },
  { id: 'ai', label: 'AI', th: 'งานที่ใช้ AI', garment: 'longsleeve' },
  { id: 'academic', label: 'SCHOOL', th: 'งานเรียนและงานกลุ่ม', garment: 'varsity' },
];

export const DEFAULT_RACK = 'new';

export function rackById(id) {
  return RACKS.find((r) => r.id === id) || RACKS[0];
}

export function projectsInRack(rack, projects) {
  const match = rack.match || ((p) => p.category === rack.id);
  return projects.filter(match);
}

export function garmentFor(project) {
  return rackById(project.category).garment || 'tee';
}
