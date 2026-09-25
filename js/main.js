// ============================================
// PROJECT DATA
// ============================================
const projects = [
  // --- Web & product work ---
  {
    id: '2getr',
    image: 'public/images/2getr.png',
    name: '2Getr',
    shortDesc: 'เว็บสั่งอาหารแบบรวมออเดอร์ของคนในตึกเดียวกัน',
    fullDesc: 'คนที่อยู่อพาร์ตเมนต์เดียวกันเปิด “batch” สั่งอาหารจากร้านเดียวกันพร้อมกัน แล้วหารค่าส่ง ยิ่งมีคนร่วมมาก ค่าส่งต่อหัวยิ่งถูก ถ้ามีคนอาสาไปรับของเองก็ได้ค่าส่งฟรีและได้แต้มเพิ่ม ในระบบมีหน้าเลือกร้าน หน้าติดตามออเดอร์ แชตของตึก กระเป๋าเงิน รีวิว ของรางวัล และฝั่งแอดมินสำหรับดูแลตึกกับร้านพาร์ตเนอร์',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'Supabase', 'Stripe', 'Leaflet', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: '🍱',
    status: 'งานที่ทำต่อเนื่อง',
    features: ['รวมออเดอร์เป็น batch แล้วหารค่าส่ง', 'โหมดอาสาไปรับของแทนเพื่อนบ้าน', 'แชตและแจ้งเตือนภายในตึก', 'กระเป๋าเงินและระบบของรางวัล', 'หลังบ้านสำหรับแอดมินตึกและร้านพาร์ตเนอร์']
  },
  {
    id: 'opt-pos',
    image: 'public/images/pos.png',
    name: 'Opt-POS',
    shortDesc: 'หน้าจอขายหน้าร้านแบบหน้าเดียว จบในจอเดียว',
    fullDesc: 'หน้าจอ POS ที่รวมรายการสินค้า ตะกร้า และการคิดเงินไว้ในหน้าเดียว ตั้งใจให้คนขายกดได้เร็วโดยไม่ต้องสลับหน้า เป็นตัวตั้งต้นที่เอาไปต่อยอดเป็นรุ่นถัดไป',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: '🛒',
    status: 'รุ่นแรก',
    features: ['เลือกสินค้าและคิดเงินในหน้าเดียว', 'สรุปยอดในตะกร้าแบบทันที', 'หน้าจอปรับตามขนาดจอหน้าร้าน']
  },
  {
    id: 'next2-pos',
    image: 'public/images/pos.png',
    name: 'Next2-POS',
    shortDesc: 'POS รุ่นสอง ที่เพิ่มระบบแต้มสมาชิกเข้าไป',
    fullDesc: 'รุ่นต่อจาก Opt-POS โดยรื้อหน้าขายใหม่ให้กดง่ายขึ้น และเพิ่มส่วนสะสมแต้มของลูกค้าเข้ามาในจังหวะคิดเงิน เพื่อให้ร้านผูกลูกค้าประจำไว้ได้ตั้งแต่หน้าจอเดียวกัน',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    icon: '💳',
    status: 'รุ่นต่อยอด',
    features: ['หน้าขายที่กดน้อยขั้นตอนลง', 'สะสมแต้มให้ลูกค้าตอนคิดเงิน', 'แยกส่วนแสดงผลให้อ่านง่ายขึ้น']
  },
  {
    id: 'opt-loyalty',
    image: 'public/images/pos.png',
    name: 'Opt-Loyalty',
    shortDesc: 'ระบบจองร้านและสะสมแต้มที่ต่อกับร้านค้าพาร์ตเนอร์',
    fullDesc: 'ระบบที่ให้ลูกค้าหาร้านบนแผนที่ จองคิว สะสมแต้ม และแลกคูปองด้วยการสแกน QR หรือบาร์โค้ด ฝั่งร้านมีหน้าจัดการโปรโมชัน ดูกราฟยอดใช้งาน และส่งข้อความหาลูกค้าได้ ติดตั้งเป็น PWA บนมือถือได้ และมีชุดทดสอบ Playwright ครอบ flow หลักอย่างการจอง การแลกคูปอง และการค้นหาบนแผนที่',
    category: 'web',
    tech: ['Next.js 16', 'NextAuth.js', 'Google Sheets API', 'Leaflet', 'Recharts', 'Playwright'],
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: '⭐',
    status: 'งานที่ทำต่อเนื่อง',
    features: ['หาร้านบนแผนที่แล้วจองคิว', 'แลกคูปองด้วย QR และบาร์โค้ด', 'หลังบ้านจัดการโปรโมชันและของรางวัล', 'กราฟสรุปการใช้งานของร้าน', 'ติดตั้งเป็นแอปบนมือถือได้ (PWA)']
  },
  {
    id: 'franchise-os',
    image: null,
    name: 'Franchise OS',
    shortDesc: 'ระบบบริหารแฟรนไชส์และครัวกลางของร้านทองม้วน',
    fullDesc: 'ระบบหลังบ้านให้เจ้าของแฟรนไชส์ทองม้วนคุมสาขาและครัวกลางจากที่เดียว ทั้งการสั่งของเข้าสาขา การผลิตของครัวกลาง และการดูยอดรายสาขา ออกแบบให้ใช้คนเดียวจริง ๆ จึงไม่ทำระบบหลายสิทธิ์หรือพอร์ทัลแยกให้สาขา ตอนนี้ลูกค้าเริ่มป้อนข้อมูลจริงเข้าระบบแล้ว',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #d97706, #b45309)',
    icon: '🏭',
    status: 'ใช้งานจริงกับลูกค้า',
    features: ['คุมสาขาและครัวกลางในที่เดียว', 'ติดตามการสั่งของเข้าสาขา', 'ดูยอดแยกรายสาขา', 'ออกแบบให้ผู้ใช้คนเดียวใช้ได้จบ']
  },
  {
    id: 'telesales',
    image: 'public/images/bot.png',
    name: 'TeleSales CRM',
    shortDesc: 'CRM ของทีมขายทางโทรศัพท์ที่ต่อกับระบบโทร 3CX',
    fullDesc: 'ระบบให้ทีมขายเก็บรายชื่อลูกค้า โทรออกผ่าน 3CX แล้วดึงบันทึกการโทรกลับเข้าระบบ มีหน้าติดตามงานต่ออายุ หน้าลูกค้าที่ต้องกลับไปคุยใหม่ หน้ารายงาน KPI และส่งออกเป็น Excel ได้ โดยแยกสิทธิ์ Admin, Manager และ Agent ออกจากกัน',
    category: 'web',
    tech: ['Next.js 16', '3CX VoIP', 'Supabase', 'NextAuth.js', 'SheetJS (xlsx)'],
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    icon: '📞',
    features: ['จัดการรายชื่อและสถานะลูกค้า', 'โทรออกและดึงบันทึกการโทรจาก 3CX', 'ติดตามงานต่ออายุและลูกค้าเก่า', 'รายงาน KPI ของทีม', 'ส่งออกรายงานเป็น Excel']
  },
  {
    id: 'ai-shop',
    image: 'public/images/bot.png',
    name: 'AI Shop Team',
    shortDesc: 'โต๊ะทำงานที่จัดคิวงานให้ผู้ช่วย AI หลายตัว',
    fullDesc: 'หน้าเว็บที่รวมงานประจำวันไว้บนบอร์ด Kanban แล้วมอบงานให้ “พนักงาน AI” แต่ละตัวที่ตั้งบทบาทไว้ มีคลังพรอมป์ที่หยิบมาใช้ซ้ำได้ กล่องรับข้อความจากคลิปบอร์ด และแถบเปิดเครื่องมือที่ใช้บ่อย',
    category: 'web',
    tech: ['React 19', 'Vite', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    icon: '🗂️',
    features: ['บอร์ด Kanban สำหรับคิวงาน', 'ตั้งบทบาทให้ผู้ช่วย AI แต่ละตัว', 'คลังพรอมป์ที่ใช้ซ้ำได้', 'กล่องรับข้อความจากคลิปบอร์ด']
  },
  {
    id: 'ai-office',
    image: 'public/images/bot.png',
    name: 'AI Team Office',
    shortDesc: 'ระบบกระจายงานให้ AI สามบทบาทช่วยกันทำ',
    fullDesc: 'เว็บที่แบ่ง AI ออกเป็นสามบทบาทคือ Researcher, Analyst และ Developer แล้วอ่านคำสำคัญจากโจทย์เพื่อส่งงานไปยังตัวที่เหมาะที่สุด ฝั่งเซิร์ฟเวอร์เป็น Express ที่เรียก Claude API แล้วส่งผลกลับมาแสดงบนหน้าเว็บ',
    category: 'ai',
    tech: ['Express.js', 'Node.js', 'Claude API', 'HTML/CSS'],
    gradient: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
    icon: '🤖',
    features: ['แบ่ง AI เป็นสามบทบาท', 'ส่งงานตามคำสำคัญในโจทย์', 'เรียก Claude API จากฝั่งเซิร์ฟเวอร์', 'ดูผลของแต่ละบทบาทบนหน้าเดียว']
  },
  {
    id: 'mlbb-meta',
    image: 'public/images/mlbb-tier.png',
    name: 'MLBB Meta Analyzer',
    shortDesc: 'เว็บดูเมตาและอัตราชนะของเกม Mobile Legends',
    fullDesc: 'เว็บที่แยก Backend กับ Frontend ออกจากกัน ฝั่ง API เป็น Express ที่อ่านข้อมูลฮีโร่จากฐานข้อมูลผ่าน Prisma ส่วนหน้าเว็บเป็น Next.js ที่เอาข้อมูลมาเรียงเป็น Tier List อัตราชนะ และชุดไอเท็มแนะนำ',
    category: 'web',
    tech: ['Next.js', 'Express.js', 'Prisma', 'SQLite', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
    icon: '🎮',
    features: ['จัดอันดับฮีโร่เป็น Tier List', 'ดูอัตราชนะของแต่ละตัว', 'แยก API ออกจากหน้าเว็บ', 'แนะนำชุดไอเท็ม']
  },
  {
    id: 'morse-code-learning',
    image: 'public/images/morse-code.png',
    name: 'Morse Code Learning App',
    shortDesc: 'เว็บฝึกรหัสมอร์สที่มีระบบสมาชิกและกระดานคะแนน',
    fullDesc: 'เว็บฝึกแปลงรหัสมอร์สที่แยกเป็นสองส่วน ฝั่งหน้าเว็บเป็น Next.js ส่วน API เป็น Express ที่ต่อ PostgreSQL ผ่าน Prisma มีสมัครสมาชิก เข้าสู่ระบบด้วย JWT เก็บสถิติที่ตอบผิดบ่อย และมีกระดานคะแนนให้ไล่กัน งานนี้ทำพร้อมเอกสาร ER Diagram และ Data Dictionary',
    category: 'web',
    tech: ['Next.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT'],
    gradient: 'linear-gradient(135deg, #1f4037, #99f2c8)',
    icon: '📡',
    status: 'เว็บฝึกเรียนรู้แบบ Full-stack',
    features: ['ฝึกแปลงรหัสมอร์สเป็นรอบ', 'สมัครและเข้าสู่ระบบด้วย JWT', 'เก็บสถิติข้อที่ผิดบ่อย', 'กระดานคะแนนผู้เล่น', 'มีเอกสาร ER Diagram ประกอบ']
  },
  {
    id: 'web-schedule',
    image: 'public/images/bot.png',
    name: 'Web Schedule Nara',
    shortDesc: 'เว็บจัดตารางงานที่มี API เก็บและรีเซ็ตข้อมูล',
    fullDesc: 'เว็บหน้าเดียวสำหรับเพิ่มและแก้ตารางงาน โดยมี Express เป็นตัวรับส่งข้อมูลผ่าน endpoint สองเส้นคือเส้นอ่าน/บันทึกตาราง และเส้นล้างข้อมูลเมื่อต้องเริ่มรอบใหม่',
    category: 'web',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'HTML/CSS'],
    gradient: 'linear-gradient(135deg, #36D1DC, #5B86E5)',
    icon: '📅',
    features: ['เพิ่มและแก้ตารางงาน', 'API สำหรับบันทึกตาราง', 'ล้างข้อมูลเพื่อเริ่มรอบใหม่', 'หน้าจอเรียบ ใช้ไม่กี่ขั้นตอน']
  },
  // --- Client prototypes (mock data, clearly labelled) ---
  {
    id: 'routepulse-demo',
    image: null,
    name: 'RoutePulse Client Demo',
    shortDesc: 'ต้นแบบระบบติดตามราคาค่าเดินทางรายชั่วโมง',
    fullDesc: 'ต้นแบบภาษาไทยที่ใช้เล่าให้ลูกค้าเห็นว่าระบบเก็บราคาค่าเดินทางจะทำงานยังไง หน้าจอจำลองการรัน 560 เส้นทางต่อชั่วโมง แสดงราคาของแต่ละช่วงบริการ นำเข้าจุดสนใจจากไฟล์ CSV ส่งออกข้อมูลกลับเป็น CSV และแสดงสถานะการส่งไฟล์ขึ้น S3 กับสุขภาพของ worker ตัวเว็บบอกไว้ชัดเจนว่ายังไม่ได้ต่อกับแพลตฟอร์มจริง',
    category: 'web',
    tech: ['Next.js 16', 'TypeScript', 'AWS S3', 'Drizzle ORM', 'Cloudflare Workers'],
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    icon: '🛣️',
    status: 'ต้นแบบ · ข้อมูลจำลอง',
    features: ['จำลองการรัน 560 เส้นทางต่อชั่วโมง', 'นำเข้าจุดสนใจจากไฟล์ CSV', 'ส่งออกข้อมูลกลับเป็น CSV', 'แสดงสถานะ worker และการส่งไฟล์ขึ้น S3', 'ระบุชัดว่าไม่ได้ต่อข้อมูลจริง']
  },
  {
    id: 'pulsepoint-alert-demo',
    image: null,
    name: 'PulsePoint Event Alert',
    shortDesc: 'ต้นแบบระบบแจ้งเตือนหน้างานอีเวนต์ 150 คน',
    fullDesc: 'ต้นแบบหน้าเดียวสำหรับงานสัมมนาขนาด 150 คน ฝั่งผู้ร่วมงานมีหน้าแจ้งเตือนบนเว็บ ขอสิทธิ์แจ้งเตือนของเบราว์เซอร์ และสแกน QR ตามจุดเช็กพอยต์ ฝั่งแอดมินมีหน้าร่างข้อความ เลือกกลุ่มผู้รับกับระดับความเร่งด่วน จัดการเช็กพอยต์ และดูบันทึกการส่ง ส่วนข้อความผ่าน LINE OA เป็นการจำลองให้ลูกค้าเห็นรูปแบบ ยังไม่ได้ต่อบัญชีจริง',
    category: 'web',
    tech: ['Next.js 16', 'TypeScript', 'Browser Notifications', 'Drizzle ORM'],
    gradient: 'linear-gradient(135deg, #f43f5e, #f97316)',
    icon: '📣',
    status: 'ต้นแบบ · ข้อมูลจำลอง',
    features: ['แจ้งเตือนผ่านเบราว์เซอร์', 'จุดเช็กพอยต์แบบสแกน QR', 'หน้าร่างข้อความของแอดมิน', 'เลือกกลุ่มผู้รับและระดับความเร่งด่วน', 'บันทึกการส่งย้อนหลัง']
  },
  {
    id: 'ev-nation',
    image: null,
    name: 'EV Nation',
    shortDesc: 'ต้นแบบแพลตฟอร์มบริการรถ EV สำหรับนำเสนอลูกค้า',
    fullDesc: 'ต้นแบบที่ใช้เล่าภาพรวมบริการรถไฟฟ้าให้ลูกค้าเห็นก่อนลงมือทำจริง มีหน้าหาสถานีชาร์จ จองคิว วางแผนเส้นทาง และรายงานสำหรับพาร์ตเนอร์ เปิดดูได้โดยไม่ต้องมีคีย์ Supabase หรือระบบจ่ายเงินจริง เพราะข้อมูลทั้งหมดเตรียมไว้เป็นชุดตัวอย่าง',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #22c55e, #0ea5e9)',
    icon: '⚡',
    status: 'ต้นแบบ · ข้อมูลจำลอง',
    features: ['หาสถานีชาร์จและจองคิว', 'วางแผนเส้นทางการเดินทาง', 'รายงานสำหรับพาร์ตเนอร์', 'เปิดดูได้โดยไม่ต้องตั้งค่าเซิร์ฟเวอร์']
  },
  {
    id: 'gp-easy',
    image: null,
    name: 'GP Easy',
    shortDesc: 'เครื่องคิดกำไรสุทธิของแม่ค้าออนไลน์',
    fullDesc: 'เครื่องมือคิดว่าขายของหนึ่งชิ้นแล้วเหลือกำไรเท่าไหร่จริง ๆ โดยหักทั้งค่าคอมมิชชัน ค่าธรรมเนียมธุรกรรม ค่าบริการที่มีเพดานต่อชิ้น ค่าธรรมเนียมคงที่ ค่าแอฟฟิลิเอต ส่วนลดร้าน ค่าส่งที่ร้านออกเอง ค่าแพ็ก ค่าโฆษณา และต้นทุนอื่น แล้วส่งออกเป็นไฟล์ Excel ได้โดยไม่ต้องพึ่งเซิร์ฟเวอร์',
    category: 'web',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers'],
    gradient: 'linear-gradient(135deg, #14b8a6, #84cc16)',
    icon: '🧮',
    status: 'เครื่องมือใช้งานในธุรกิจ',
    features: ['คิดกำไรสุทธิต่อชิ้น', 'รองรับค่าบริการแบบมีเพดาน', 'รวมค่าโฆษณาและค่าแพ็กเข้าไปด้วย', 'ส่งออกเป็นไฟล์ Excel ในเครื่อง']
  },
  {
    id: 'buildsure',
    image: null,
    name: 'BuildSure',
    shortDesc: 'งานวางโครงระบบงานก่อสร้างที่ยังอยู่ช่วงเตรียมงาน',
    fullDesc: 'งานที่กำลังวางแผนอยู่ โดยตอนนี้มีเอกสารแผนพัฒนาฉบับภาษาไทยกับโครงโปรเจกต์ที่ตั้งไว้รอ ยังไม่ได้ลงมือเขียนฟีเจอร์จริง จึงยังไม่มีหน้าจอให้ดู',
    category: 'web',
    tech: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'Cloudflare Workers'],
    gradient: 'linear-gradient(135deg, #64748b, #334155)',
    icon: '🏗️',
    status: 'ยังอยู่ขั้นวางแผน',
    features: ['เอกสารแผนพัฒนาภาษาไทย', 'โครงโปรเจกต์ที่ตั้งไว้รอเริ่มงาน']
  },

  // --- Mobile ---
  {
    id: 'unitask-flutter',
    image: 'public/images/unitask.png',
    name: 'Unitask (Flutter)',
    shortDesc: 'แอปจัดการงานกลุ่มที่งานจะปิดเมื่อทุกคนกดเสร็จ',
    fullDesc: 'แอปจัดการงานของทีมที่ทำด้วย Flutter ต่อกับ Firebase จุดที่ต่างจากแอป to-do ทั่วไปคืองานหนึ่งชิ้นจะถือว่าเสร็จก็ต่อเมื่อผู้รับผิดชอบทุกคนกดเสร็จแล้ว มีการเชิญคนเข้าโปรเจกต์ แยกสิทธิ์ตามบทบาท แจ้งเตือนเมื่อบทบาทหรือสถานะงานเปลี่ยน และสลับภาษากับธีมได้',
    category: 'mobile',
    tech: ['Flutter', 'Dart', 'Firebase', 'Material Design'],
    gradient: 'linear-gradient(135deg, #00B4DB, #0083B0)',
    icon: '📱',
    status: 'งานกลุ่ม',
    teamNote: 'ทำร่วมกับเพื่อนในทีม repo หลักอยู่ที่บัญชีของเพื่อนร่วมทีม',
    links: [{ label: 'GitHub (repo ของทีม)', url: 'https://github.com/lillianxhub/Unitask-flutter' }],
    features: ['งานปิดเมื่อผู้รับผิดชอบครบทุกคนกดเสร็จ', 'เชิญสมาชิกเข้าโปรเจกต์', 'แยกสิทธิ์ตามบทบาท', 'แจ้งเตือนเมื่อสถานะเปลี่ยน', 'สลับภาษาและธีมได้']
  },
  {
    id: 'unitask-android',
    image: 'public/images/unitask.png',
    name: 'Unitask (Android)',
    shortDesc: 'Unitask เวอร์ชัน Android แท้ ที่เขียนด้วย Kotlin',
    fullDesc: 'เวอร์ชันที่เขียนด้วย Kotlin ตรง ๆ บน Android เพื่อลองเทียบกับฝั่ง Flutter ว่าทำแบบ native แล้วต่างกันยังไง หน้าสมัครและเข้าสู่ระบบทำเป็น bottom sheet ส่วนข้อมูลโปรเจกต์จัดการอยู่ในเครื่อง ไม่ได้ต่อเซิร์ฟเวอร์',
    category: 'mobile',
    tech: ['Kotlin', 'Android SDK', 'Gradle', 'Material Design'],
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    icon: '📲',
    features: ['เขียนด้วย Kotlin บน Android โดยตรง', 'หน้าเข้าสู่ระบบแบบ bottom sheet', 'จัดการข้อมูลโปรเจกต์ในเครื่อง', 'ใช้คอมโพเนนต์ตาม Material Design']
  },

  // --- Automation, bots, desktop tools ---
  {
    id: 'nara-flow-ai',
    image: 'public/images/bot.png',
    name: 'Nara Flow AI',
    shortDesc: 'ส่วนขยาย Chrome ที่คุมงานสร้างวิดีโอจากแผงข้าง',
    fullDesc: 'ส่วนขยายที่เปิดเป็นแผงข้างของ Chrome แล้วใช้คุมงานสร้างวิดีโอเป็นชุด ตั้งพรอมป์ตามสไตล์ที่ใช้บ่อย แก้พรอมป์แล้วสั่งทำใหม่ ดาวน์โหลดไฟล์ที่ได้ และตั้งเวลาให้ทำงานต่อเองผ่าน alarms เป็นงานที่แก้ต่อเนื่องมาหลายรุ่นจนหน้าแผงข้างยาวกว่าหมื่นบรรทัด',
    category: 'automation',
    tech: ['Chrome Extension', 'Manifest V3', 'Side Panel API', 'Service Worker', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    icon: '🎬',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['คุมงานจากแผงข้างของ Chrome', 'พรอมป์สำเร็จรูปตามสไตล์ที่ใช้บ่อย', 'แก้พรอมป์แล้วสั่งทำใหม่', 'ดาวน์โหลดไฟล์ที่ได้อัตโนมัติ', 'ตั้งเวลาให้ทำงานต่อเอง']
  },
  {
    id: 'ereceipt-reconcile',
    image: 'public/images/bot.png',
    name: 'E-Receipt Reconciliation Bot',
    shortDesc: 'บอทกระทบยอดใบเสร็จจากอีเมลลง Google Sheets',
    fullDesc: 'บอทที่ตั้งให้ทำงานเองทุกวัน โดยอ่านยอดเงินจากอีเมลสองทางคือระบบภายในบริษัทกับผู้ให้บริการภายนอก แล้วเอามาเทียบกันก่อนเขียนผลลงชีตติดตาม ถ้ายอดไม่ตรงหรือหาอีเมลไม่เจอ จะแจ้งเตือนเข้า LINE และส่งอีเมลบอกผู้ดูแล งานนี้ส่งพร้อมคู่มือติดตั้งแบบทีละขั้นให้ลูกค้าทำเองได้',
    category: 'automation',
    tech: ['Google Apps Script', 'Gmail API', 'Google Sheets', 'LINE Notify'],
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    icon: '📋',
    status: 'ระบบอัตโนมัติสำหรับลูกค้า',
    features: ['อ่านยอดจากอีเมลสองแหล่ง', 'กระทบยอดแล้วเขียนลงชีตติดตาม', 'แจ้งเตือนเข้า LINE เมื่อยอดไม่ตรง', 'ตั้งเวลาให้ทำงานเองทุกวัน', 'มีคู่มือติดตั้งให้ลูกค้าทำเอง']
  },
  {
    id: 'loongmordek-auto-sheets',
    image: 'public/images/bot.png',
    name: 'Loongmordek Auto Sheets',
    shortDesc: 'สคริปต์แปลงข้อความ AI ก้อนเดียวเป็นคิวโพสต์ 4 แพลตฟอร์ม',
    fullDesc: 'สคริปต์ใน Google Sheets ที่ให้ลูกค้าวางข้อความจาก AI ยาว ๆ ก้อนเดียว แล้วระบบแยกออกเป็นสี่แถวสำหรับ Facebook, Instagram, TikTok และ YouTube Shorts ทุกแถวจะตั้งสถานะเป็น “รอตรวจ” ไว้ก่อนเสมอ ให้คนตรวจแล้วค่อยเปลี่ยนเป็น “รอคิว” เอง ระบบจึงไม่โพสต์อะไรออกไปเองโดยไม่มีคนดู',
    category: 'automation',
    tech: ['Google Apps Script', 'Google Sheets', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #16a34a, #65a30d)',
    icon: '🗒️',
    status: 'ระบบอัตโนมัติสำหรับลูกค้า',
    features: ['แยกข้อความก้อนเดียวเป็น 4 แถว', 'ตั้งสถานะรอตรวจก่อนเสมอ', 'มีไฟล์ทดสอบตัวแปลงข้อความ', 'ติดตั้งในชีตของลูกค้าได้โดยตรง']
  },
  {
    id: 'music-adblocker',
    image: 'public/images/music-ad.png',
    name: 'Music Ad Blocker',
    shortDesc: 'ส่วนขยาย Chrome ที่ข้ามโฆษณาบน YouTube',
    fullDesc: 'ส่วนขยายเล็ก ๆ ที่เขียนไว้ใช้ตอนเปิดเพลงบน YouTube โดยคอยตรวจว่าช่วงนี้เป็นโฆษณาไหม แล้วข้ามให้อัตโนมัติ ขอสิทธิ์แค่ storage กับหน้า YouTube เท่านั้น ไม่ได้ขอสิทธิ์ทั้งเบราว์เซอร์',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #1DB954, #191414)',
    icon: '🎵',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['ตรวจและข้ามช่วงโฆษณา', 'ทำงานเฉพาะหน้า YouTube', 'ขอสิทธิ์เท่าที่จำเป็น', 'มีหน้าป๊อปอัปสำหรับเปิดปิด']
  },
  {
    id: 'elearning-bot',
    image: 'public/images/bot.png',
    name: 'E-Learning Automator',
    shortDesc: 'ส่วนขยายช่วยเร่งวิดีโอและไล่ขั้นตอนในระบบเรียนออนไลน์',
    fullDesc: 'ส่วนขยาย Chrome ที่ทำงานบนหน้าเรียนออนไลน์ โดยตั้งความเร็ววิดีโอเป็น 2 เท่า และช่วยไล่ขั้นตอนของแบบทดสอบแบบสองชั้นให้ไม่ต้องมานั่งกดซ้ำเอง เขียนเป็นงานทดลองว่าจะแทรกสคริปต์เข้าไปคุมหน้าเว็บที่มีอยู่แล้วได้แค่ไหน',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #2196F3, #21CBF3)',
    icon: '📚',
    status: 'งานทดลอง',
    features: ['ตั้งความเร็ววิดีโออัตโนมัติ', 'ไล่ขั้นตอนแบบทดสอบสองชั้น', 'แทรกสคริปต์ลงหน้าเว็บที่เปิดอยู่', 'เปิดปิดได้จากหน้าป๊อปอัป']
  },
  {
    id: 'fastwork-scraper',
    image: 'public/images/bot.png',
    name: 'Fastwork Scraper',
    shortDesc: 'ตัวเก็บรายการงานฟรีแลนซ์ที่มีหน้าเว็บดูผลในตัว',
    fullDesc: 'สคริปต์ที่ใช้ Puppeteer เปิดเบราว์เซอร์อัตโนมัติเพื่อไล่เก็บรายการงานและหมวดหมู่จากเว็บหางานฟรีแลนซ์ แล้วมี Express คอยรับคำสั่งจากหน้าเว็บที่ทำด้วย Vite ให้กดสั่งเก็บและดูผลได้จากหน้าจอ ไม่ต้องรันจากเทอร์มินัลอย่างเดียว',
    category: 'automation',
    tech: ['Node.js', 'Puppeteer', 'Express.js', 'Vite'],
    gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)',
    icon: '🕷️',
    status: 'งานทดลอง',
    features: ['ควบคุมเบราว์เซอร์ด้วย Puppeteer', 'เก็บรายการงานและหมวดหมู่', 'สั่งงานผ่านหน้าเว็บ', 'ดูผลที่เก็บได้จากหน้าจอ']
  },
  {
    id: 'tiktok-cart',
    image: 'public/images/tiktok-bot.png',
    name: 'TikTok Cart Bot',
    shortDesc: 'บอทเพิ่มสินค้าเข้าตะกร้าโชว์ผ่านอีมูเลเตอร์ Android',
    fullDesc: 'บอทที่สั่งงานแอปบนอีมูเลเตอร์ Android ผ่าน ADB แล้วใช้ uiautomator2 กดตามหน้าจอเพื่อเพิ่มสินค้าเข้าตะกร้าโชว์ทีละรายการ มี Flask เป็นหน้าควบคุมเล็ก ๆ ให้สั่งรันและดูสถานะ และเว้นจังหวะกดแบบสุ่มเพื่อไม่ให้ยิงรัวเกินไป',
    category: 'automation',
    tech: ['Python', 'uiautomator2', 'ADB', 'Flask'],
    gradient: 'linear-gradient(135deg, #010101, #ff0050)',
    icon: '🛍️',
    status: 'งานทดลอง',
    features: ['สั่งงานอีมูเลเตอร์ผ่าน ADB', 'กดหน้าจอด้วย uiautomator2', 'หน้าควบคุมด้วย Flask', 'เว้นจังหวะกดแบบสุ่ม']
  },
  {
    id: 'video-tinder',
    image: 'public/images/bot.png',
    name: 'Video Tinder',
    shortDesc: 'โปรแกรมคัดคลิปแบบปัดซ้ายขวาบนเดสก์ท็อป',
    fullDesc: 'โปรแกรมบน Windows ที่เปิดคลิปในโฟลเดอร์ขึ้นมาให้ดูทีละไฟล์ แล้วกดเก็บหรือกดทิ้งแบบเดียวกับการปัดซ้ายขวา เพื่อคัดคลิปจำนวนมากให้จบเร็ว ตัวโปรแกรมทำหน้าจอด้วย Tkinter แยกงานประมวลผลวิดีโอไว้คนละเธรด และแพ็กเป็นไฟล์ .exe ให้เปิดใช้ได้โดยไม่ต้องติดตั้ง Python',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'OpenCV', 'moviepy', 'PyInstaller'],
    gradient: 'linear-gradient(135deg, #f43f5e, #8b5cf6)',
    icon: '🎞️',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['ดูคลิปทีละไฟล์แล้วกดเก็บหรือทิ้ง', 'แยกงานประมวลผลออกจากหน้าจอ', 'จัดไฟล์ที่คัดแล้วเข้าโฟลเดอร์', 'แพ็กเป็น .exe ใช้ได้เลย']
  },
  {
    id: 'auto-vpn',
    image: 'public/images/network.png',
    name: 'Auto VPN Bot',
    shortDesc: 'โปรแกรมสลับประเทศ VPN ให้อัตโนมัติ',
    fullDesc: 'โปรแกรมบน Windows ที่คุมหน้าต่างของ ProtonVPN ให้สลับประเทศตามลำดับหรือสุ่มก็ได้ โดยอ่านตำแหน่งปุ่มจากไฟล์ตั้งค่า แล้วสั่งเมาส์กดผ่าน pyautogui และจัดตำแหน่งหน้าต่างด้วย win32gui มีหน้าจอ Tkinter ให้ดูสถานะและเก็บ log ไว้ตรวจย้อนหลัง',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'pyautogui', 'win32gui'],
    gradient: 'linear-gradient(135deg, #0F2027, #2C5364)',
    icon: '🔐',
    status: 'รุ่นแรก',
    features: ['สลับประเทศตามลำดับหรือสุ่ม', 'อ่านตำแหน่งปุ่มจากไฟล์ตั้งค่า', 'จัดตำแหน่งหน้าต่างอัตโนมัติ', 'เก็บ log ไว้ตรวจย้อนหลัง']
  },
  {
    id: 'vpn-dashboard',
    image: 'public/images/network.png',
    name: 'Auto VPN Bot v2',
    shortDesc: 'รุ่นต่อยอดที่แยกส่วนคุม VPN กับคุม Chrome ออกจากกัน',
    fullDesc: 'รุ่นสองของ Auto VPN Bot ที่รื้อโค้ดจากไฟล์เดียวออกเป็นส่วนคุม VPN กับส่วนคุมโปรไฟล์ Chrome แยกกัน เพิ่มคีย์ลัดสำหรับสั่งงานระหว่างทำอย่างอื่น และแพ็กเป็น .exe ให้เปิดใช้ได้โดยไม่ต้องติดตั้ง Python',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'win32gui', 'pyautogui', 'PyInstaller'],
    gradient: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
    icon: '🖥️',
    status: 'รุ่นต่อยอด',
    features: ['แยกส่วนคุม VPN กับคุม Chrome', 'เปิดโปรไฟล์เบราว์เซอร์ตามที่ตั้งไว้', 'สั่งงานด้วยคีย์ลัด', 'แพ็กเป็น .exe ใช้ได้เลย']
  },
  {
    id: 'edge-auto',
    image: 'public/images/network.png',
    name: 'Edge Multi-Profile',
    shortDesc: 'ตัวเปิดโปรไฟล์ Edge หลายชุดพร้อมกันด้วยคีย์ลัด',
    fullDesc: 'โปรแกรม Windows ที่เปิดหลายโปรไฟล์ของเบราว์เซอร์พร้อมกันด้วยคีย์ลัด โดยอ่านรายชื่อโปรไฟล์จาก registry ของเครื่อง จัดตำแหน่งหน้าต่างให้ไม่ทับกัน เก็บ log ไว้ตรวจย้อนหลัง และย่อเก็บไว้ที่ system tray ได้เพื่อไม่ให้เกะกะ',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'pystray', 'PyInstaller'],
    gradient: 'linear-gradient(135deg, #1f4e79, #2e75b6)',
    icon: '🪟',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['เปิดหลายโปรไฟล์ด้วยคีย์ลัด', 'อ่านรายชื่อโปรไฟล์จาก registry', 'ย่อเก็บที่ system tray', 'แพ็กเป็น .exe ใช้ได้เลย']
  },
  {
    id: 'auto-hotmail',
    image: 'public/images/music-ad.png',
    name: 'Auto Sub Hotmail',
    shortDesc: 'ส่วนขยายที่กดปุ่มซ้ำ ๆ บนหน้าเว็บแทนเรา',
    fullDesc: 'ส่วนขยายเบราว์เซอร์ขนาดเล็กที่ทำหน้าที่กดปุ่มตามจุดที่ตั้งไว้บนหน้าเว็บ เพื่อไม่ต้องนั่งกดเองซ้ำ ๆ เปิดปิดได้จากหน้าป๊อปอัป เขียนเป็นงานทดลองเรื่องการแทรกสคริปต์ลงหน้าเว็บ',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #0078D4, #50e6ff)',
    icon: '✉️',
    status: 'งานทดลอง',
    features: ['กดปุ่มตามจุดที่ตั้งไว้', 'เปิดปิดจากหน้าป๊อปอัป', 'แทรกสคริปต์ลงหน้าเว็บที่เปิดอยู่']
  },
  {
    id: 'ai-limits-widget',
    image: null,
    name: 'AI Limits Widget',
    shortDesc: 'วิดเจ็ตบนเดสก์ท็อปที่บอกโควตา AI ที่เหลือ',
    fullDesc: 'วิดเจ็ตแถบเล็ก ๆ บน Windows ที่บอกว่าโควตาของ Claude และ Codex เหลือกี่เปอร์เซ็นต์ และจะรีเซ็ตเมื่อไหร่ ฝังอยู่ชั้นเดียวกับวอลเปเปอร์จึงไม่ลอยทับโปรแกรมอื่น อัปเดตทุก 5 นาที ไม่มีแอนิเมชันต่อเนื่อง และไม่ใช้การแคปหน้าจอหรือ OCR เพื่อให้กินแบตน้อย ตัววิดเจ็ตอ่านเฉพาะตัวเลขเปอร์เซ็นต์ ไม่อ่านหรือเก็บ token กับข้อความสนทนา',
    category: 'automation',
    tech: ['PowerShell', 'Windows Script Host', 'JSON'],
    gradient: 'linear-gradient(135deg, #475569, #0f172a)',
    icon: '🔋',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['บอกโควตาที่เหลือและเวลารีเซ็ต', 'ฝังกับชั้นวอลเปเปอร์ ไม่ลอยทับ', 'อัปเดตทุก 5 นาทีเพื่อประหยัดแบต', 'ไม่อ่านหรือเก็บ token และข้อความ']
  },
  {
    id: 'forma-database',
    image: null,
    name: 'FormA Database System',
    shortDesc: 'ไฟล์ Excel ที่ทำเป็นฟอร์มกรอกและฐานข้อมูลในตัว',
    fullDesc: 'งานที่แปลงแบบฟอร์ม Excel ของลูกค้าให้กลายเป็นระบบที่กรอกผ่าน UserForm แล้วบันทึกลงชีตฐานข้อมูลในไฟล์เดียวกัน ค้นหาและเรียกข้อมูลเก่ากลับมาแก้ได้ ตัวไฟล์ .xlsm ทั้งไฟล์สร้างจากสคริปต์ Python ที่สั่ง Excel ผ่าน win32com จึงสร้างใหม่ซ้ำได้เหมือนเดิมทุกครั้ง',
    category: 'automation',
    tech: ['Excel VBA', 'UserForm (VBA)', 'Python', 'win32com', 'XLSM'],
    gradient: 'linear-gradient(135deg, #1D6F42, #A9D08E)',
    icon: '📑',
    status: 'เครื่องมือใช้งานในธุรกิจ',
    features: ['กรอกข้อมูลผ่าน UserForm', 'บันทึกลงชีตฐานข้อมูลในไฟล์เดียว', 'ค้นหาและแก้ข้อมูลเก่าได้', 'สร้างไฟล์ใหม่ซ้ำได้จากสคริปต์']
  },
  // --- Trading systems ---
  {
    id: 'grid-bot',
    image: 'public/images/trading-bot.png',
    name: 'Grid Trading Bot v3',
    shortDesc: 'บอทวางไม้เป็นตารางที่ต่อกับ MetaTrader 5',
    fullDesc: 'บอทที่ต่อเข้า MetaTrader 5 เพื่อวางไม้เป็นตารางตามระยะที่ตั้งไว้ อ่านค่าทั้งหมดจากไฟล์ตั้งค่า JSON จึงเปลี่ยนคู่เงินหรือระยะห่างได้โดยไม่ต้องแก้โค้ด เขียน log แยกไฟล์ตามคู่เงินและตามวัน ปิดโปรแกรมด้วยสัญญาณหยุดอย่างเป็นระเบียบ และมีหน้า dashboard ไว้ดูสถานะระหว่างรัน เป็นรุ่นที่สามหลังจากลองแก้มาแล้วสองรอบ',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'JSON', 'Dashboard'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    icon: '📈',
    status: 'งานทดลองของตัวเอง',
    features: ['วางไม้เป็นตารางตามระยะที่ตั้งไว้', 'ตั้งค่าทั้งหมดผ่านไฟล์ JSON', 'แยก log ตามคู่เงินและวันที่', 'ปิดโปรแกรมอย่างเป็นระเบียบ', 'หน้า dashboard ดูสถานะระหว่างรัน']
  },
  {
    id: 'smart-grid-ea',
    image: 'public/images/trading-bot.png',
    name: 'Smart Grid EA',
    shortDesc: 'บอทเทรดที่ดูสภาพตลาดและข่าวก่อนตัดสินใจ',
    fullDesc: 'รุ่นที่ต่อยอดจากบอทตาราง โดยเพิ่มตัวอ่านสภาพตลาดเพื่อดูว่าช่วงนี้ราคาเป็นเทรนด์หรือออกข้าง และมีตัวกรองข่าวที่ดึงตารางข่าวเข้ามาเว้นช่วงเวลาที่ราคามักเหวี่ยง ส่วนการดูผลทำเป็นหน้าเว็บที่รับข้อมูลสดผ่าน Socket.IO จึงเห็นสถานะเปลี่ยนโดยไม่ต้องรีเฟรช',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'Flask', 'Socket.IO', 'pandas'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    icon: '🧭',
    status: 'งานทดลองของตัวเอง',
    features: ['อ่านสภาพตลาดก่อนเข้าไม้', 'กรองช่วงเวลาที่มีข่าว', 'หน้าเว็บดูผลแบบสด', 'คำนวณตัวชี้วัดด้วย pandas']
  },
  {
    id: 'forex-order-watcher',
    image: 'public/images/trading-bot.png',
    name: 'Forex Order Watcher',
    shortDesc: 'ตัวเฝ้าดูสถานะไม้ที่เปิดอยู่ โดยไม่ส่งคำสั่งเอง',
    fullDesc: 'โปรแกรมที่อ่านไม้ที่เปิดอยู่จาก MetaTrader 5 แล้วแสดงยอดพอร์ตอย่าง balance, equity, กำไรลอยตัว และ margin เก็บ snapshot ล่าสุดไว้ในไฟล์เพื่อเทียบว่าไม้ไหนหายไปจากรายการ แล้วแจ้งเตือนเมื่อพบว่ามีไม้ถูกปิด ตั้งใจให้เป็นตัวเฝ้าดูอย่างเดียว จึงไม่มีส่วนส่งคำสั่งเปิดหรือปิดไม้ และมีโหมดจำลองให้ทดสอบได้โดยไม่ต้องต่อบัญชีจริง',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'Tkinter', 'JSON', 'pytest'],
    gradient: 'linear-gradient(135deg, #0ea5e9, #1e293b)',
    icon: '👁️',
    status: 'เครื่องมือเฝ้าดูสถานะ',
    features: ['อ่านไม้ที่เปิดอยู่จาก MetaTrader 5', 'สรุปยอดพอร์ตในหน้าเดียว', 'เทียบ snapshot เพื่อหาไม้ที่หายไป', 'มีโหมดจำลองสำหรับทดสอบ', 'ไม่มีส่วนส่งคำสั่งซื้อขาย']
  },

  // --- AI & data ---
  {
    id: 'secretary-bot',
    image: 'public/images/bot.png',
    name: 'น้องเลขา Bot',
    shortDesc: 'บอท Telegram ที่จดงานให้แล้วเตือนตามเวลา',
    fullDesc: 'บอทบน Telegram ที่รับข้อความหรือรูปแล้วให้ Gemini ช่วยตีความว่าเป็นงานอะไร กำหนดส่งเมื่อไหร่ จากนั้นเก็บลงฐานข้อมูลในเครื่องและส่งเตือนกลับมาตามเวลาที่ถึงกำหนด',
    category: 'ai',
    tech: ['Python', 'Telegram Bot API', 'Google Gemini', 'SQLite'],
    gradient: 'linear-gradient(135deg, #2AABEE, #229ED9)',
    icon: '🗓️',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['รับงานจากข้อความและรูป', 'ให้ Gemini ตีความรายละเอียดงาน', 'เก็บงานลงฐานข้อมูลในเครื่อง', 'ส่งเตือนกลับตามเวลาที่ตั้ง']
  },
  {
    id: 'thai-rag-api',
    image: null,
    name: 'Thai RAG API',
    shortDesc: 'API ถามตอบภาษาไทยจากเอกสาร ที่รันในเครื่องทั้งหมด',
    fullDesc: 'API ต้นแบบที่ให้ถามคำถามภาษาไทยแล้วตอบจากเอกสารที่ใส่เข้าไป โดยแปลง PDF เป็นข้อความ ตัดเป็นท่อน แล้วทำเป็นเวกเตอร์ด้วยโมเดล bge-m3 เก็บไว้ใน SQLite เวลาถามจะค้นท่อนที่ใกล้เคียงที่สุดก่อนส่งให้โมเดลภาษาเขียนคำตอบ ทุกอย่างรันผ่าน Ollama บนเครื่องตัวเอง ข้อมูลจึงไม่ออกไปไหน',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'Ollama', 'bge-m3', 'SQLite'],
    gradient: 'linear-gradient(135deg, #059669, #065f46)',
    icon: '📚',
    status: 'ต้นแบบ AI ที่รันในเครื่อง',
    features: ['แปลง PDF เป็นคลังความรู้', 'ค้นเอกสารด้วยความหมาย ไม่ใช่คำตรง', 'ตอบคำถามภาษาไทยจากเอกสารที่ใส่', 'รันในเครื่องทั้งหมด ข้อมูลไม่ออกนอก']
  },
  {
    id: 'laos-lottery',
    image: 'public/images/trading-bot.png',
    name: 'Lao Lottery Data Lab',
    shortDesc: 'งานทดลองหาแพตเทิร์นจากข้อมูลย้อนหลัง',
    fullDesc: 'งานทดลองที่ดึงผลย้อนหลังจากหน้าเว็บ แล้วลองสามวิธีเทียบกันคือการนับความถี่ โมเดล Neural Network ของ scikit-learn และกฎแบบเขียนเงื่อนไขเอง จุดประสงค์คือดูว่าวิธีไหนอธิบายข้อมูลได้ดีกว่ากัน ไม่ใช่เครื่องมือทำนายที่เชื่อถือได้ เพราะผลรางวัลเป็นการสุ่ม',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'pandas', 'BeautifulSoup'],
    gradient: 'linear-gradient(135deg, #F7971E, #FFD200)',
    icon: '🎲',
    status: 'งานทดลอง ไม่ใช่เครื่องมือทำนาย',
    features: ['ดึงข้อมูลย้อนหลังจากหน้าเว็บ', 'เทียบสามวิธีวิเคราะห์', 'เปิดผลผ่าน API', 'สรุปความถี่ของเลขที่ออก']
  },
  {
    id: 'tiktok-analytics',
    image: 'public/images/tiktok-bot.png',
    name: 'TikTok Analytics',
    shortDesc: 'ระบบรวมข้อมูลคลิปและสรุปเป็นรายงานให้ทีม',
    fullDesc: 'ระบบที่ใช้ Playwright ไล่เก็บข้อมูลคลิปเข้าฐานข้อมูล PostgreSQL ผ่าน Prisma แล้วสรุปเป็นกราฟบนหน้าเว็บ Next.js มีระบบเข้าสู่ระบบ นำเข้าและส่งออกไฟล์ CSV กับ Excel และสคริปต์ตรวจความถูกต้องของข้อมูลก่อนเอาไปใช้',
    category: 'ai',
    tech: ['Next.js 16', 'Prisma', 'PostgreSQL', 'Playwright', 'Recharts'],
    gradient: 'linear-gradient(135deg, #010101, #25F4EE)',
    icon: '📊',
    status: 'ต้นแบบสำหรับลูกค้า',
    features: ['เก็บข้อมูลคลิปอัตโนมัติ', 'สรุปเป็นกราฟบนหน้าเว็บ', 'นำเข้าและส่งออก CSV กับ Excel', 'ตรวจความถูกต้องของข้อมูลก่อนใช้']
  },

  // --- Academic & coursework ---
  {
    id: 'dmd-sportday-load-test',
    image: null,
    name: 'DMD Sport Day Load Test',
    shortDesc: 'ชุดทดสอบว่าระบบงานกีฬารับคนพร้อมกันได้แค่ไหน',
    fullDesc: 'ชุดทดสอบภาระงานด้วย k6 ที่แบ่งเป็นสิบโหมด ตั้งแต่ทดสอบเบา ๆ ไปจนถึงโหมดเต็มที่จำลองผู้ใช้หมื่นคนค้างไว้ยี่สิบนาที ทุกครั้งที่รันจะได้ไฟล์สรุปทั้งตาราง p95 อัตราข้อผิดพลาด และข้อมูลดิบแบบบีบอัด ในชุดเขียนกำกับไว้ว่ารายการ endpoint ยังเป็นฉบับร่างที่ต้องให้ลูกค้ายืนยันก่อน และให้รันจากเครื่องบนคลาวด์เท่านั้น ไม่ยิงจากเครื่องที่ออฟฟิศ',
    category: 'academic',
    tech: ['k6', 'JavaScript', 'JSON', 'Load Testing'],
    gradient: 'linear-gradient(135deg, #7d64ff, #bf40bf)',
    icon: '🏟️',
    status: 'ชุดทดสอบระบบ',
    features: ['ทดสอบสิบโหมดตามลักษณะงาน', 'จำลองผู้ใช้หมื่นคนพร้อมกัน', 'สรุป p95 และอัตราข้อผิดพลาด', 'กำกับให้ยืนยัน endpoint ก่อนรัน']
  },
  {
    id: 'onet-network',
    image: 'public/images/network.png',
    name: 'ONet Network Sim',
    shortDesc: 'แบบจำลองพฤติกรรมเครือข่ายพร้อมกราฟสรุปผล',
    fullDesc: 'งานวิชาเครือข่ายที่เขียนแบบจำลองการส่งข้อมูลด้วย Python แล้ววัดผลออกมาเป็นสถิติ พร้อมวาดกราฟด้วย matplotlib เพื่อเทียบว่าเงื่อนไขแต่ละแบบให้ผลต่างกันยังไง',
    category: 'academic',
    tech: ['Python', 'matplotlib', 'numpy', 'Simulation'],
    gradient: 'linear-gradient(135deg, #4b6cb7, #182848)',
    icon: '🛰️',
    status: 'งานรายวิชา',
    features: ['จำลองการส่งข้อมูลในเครือข่าย', 'วัดผลเป็นค่าสถิติ', 'วาดกราฟเทียบแต่ละเงื่อนไข']
  },
  {
    id: 'irfa-research',
    image: null,
    name: 'IRFA — Research Fund Assistant',
    shortDesc: 'โครงงานสัมมนาเรื่องผู้ช่วยหาทุนวิจัย',
    fullDesc: 'โครงงานรายวิชาสัมมนาที่เสนอระบบช่วยนักวิจัยรุ่นใหม่หาทุนที่ตรงกับงานของตัวเอง โดยวางแนวทางเป็น Hybrid RAG คือดึงข้อมูลจากเอกสารทุนมาประกอบคำตอบร่วมกับฐานความรู้ที่จัดโครงสร้างไว้ ตอนนี้อยู่ขั้นข้อเสนอโครงงาน ยังไม่ได้เริ่มเขียนโค้ด ทำร่วมกับเพื่อนอีกหนึ่งคนภายใต้อาจารย์ที่ปรึกษา',
    category: 'academic',
    tech: ['RAG', 'Information Extraction', 'Semantic Matching', 'Knowledge Graph'],
    gradient: 'linear-gradient(135deg, #a3a3a3, #525252)',
    icon: '🔬',
    status: 'ข้อเสนอโครงงาน — ยังไม่เริ่มพัฒนา',
    teamNote: 'โครงงานรายวิชาสัมมนา ทำร่วมกับเพื่อนอีกหนึ่งคน',
    features: ['วางแนวทางระบบช่วยหาทุนวิจัย', 'ออกแบบการดึงข้อมูลจากเอกสารทุน', 'จับคู่งานวิจัยกับทุนที่เหมาะ']
  },
  {
    id: 'spring-boot-coursework',
    image: null,
    name: 'Java & Spring Boot Coursework',
    shortDesc: 'ชุดแล็บวิชา Java ที่ไล่ตั้งแต่ bean ไปจนถึง transaction',
    fullDesc: 'รวมงานแล็บรายวิชาที่ไล่ทีละเรื่อง ตั้งแต่ขอบเขตของ bean การทำหน้าเว็บด้วย Thymeleaf การจัดการ transaction ไปจนถึงการเรียก API ด้วย WebClient แต่ละแล็บใช้ Maven จัดการ dependency และบางตัวยก PostgreSQL ขึ้นด้วย Docker Compose เพื่อให้ทุกคนรันได้เหมือนกัน',
    category: 'academic',
    tech: ['Java', 'Spring Boot', 'Maven', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #6DB33F, #1B1F23)',
    icon: '🎓',
    status: 'รวมงานรายวิชา',
    features: ['ไล่เรื่อง bean scope และ transaction', 'ทำหน้าเว็บด้วย Thymeleaf', 'เรียก API ด้วย WebClient', 'ยกฐานข้อมูลด้วย Docker Compose']
  },
];

// ============================================
// CATEGORY CONFIG
// ============================================
const categories = {
  all: { label: 'All Projects', icon: '🔥' },
  web: { label: 'Web Apps', icon: '🌐' },
  mobile: { label: 'Mobile Apps', icon: '📱' },
  automation: { label: 'Automation', icon: '🤖' },
  trading: { label: 'Trading', icon: '📈' },
  ai: { label: 'AI & ML', icon: '🧠' },
  academic: { label: 'Academic', icon: '🎓' }
};

// คำอธิบาย stack ใช้ร่วมกันทุกงาน เพื่อให้ tag ไม่ใช่แค่รายชื่อเทคโนโลยี
const techNotes = {
  'Next.js': 'framework สำหรับสร้างเว็บ React ที่จัดการหน้าเว็บ, routing และงานฝั่ง server ได้ในโปรเจกต์เดียว',
  React: 'ไลบรารีสำหรับสร้าง UI จาก component ทำให้แยกส่วนหน้าจอและสถานะการใช้งานได้เป็นระบบ',
  TypeScript: 'JavaScript ที่เพิ่ม type ช่วยจับข้อผิดพลาดของข้อมูลตั้งแต่ตอนพัฒนา',
  'Tailwind CSS': 'utility CSS สำหรับประกอบหน้าตาและ responsive layout ได้เร็วโดยคุม design token ได้ละเอียด',
  Vite: 'ตัว build และ dev server ที่เปิดหน้าเว็บระหว่างพัฒนาได้ไว เหมาะกับงาน React ที่ไม่ต้องใช้ฝั่ง server',
  Supabase: 'บริการหลังบ้านที่ให้ทั้งฐานข้อมูล Postgres, ระบบล็อกอิน และ API แบบเรียลไทม์มาพร้อมกัน',
  Firebase: 'บริการหลังบ้านของ Google ที่ใช้เก็บข้อมูลแบบซิงก์สดและจัดการผู้ใช้ในแอปมือถือ',
  'NextAuth.js': 'ไลบรารีจัดการล็อกอินและ session ของเว็บ Next.js โดยไม่ต้องเขียนระบบยืนยันตัวตนเอง',
  Prisma: 'ORM ที่ทำให้โค้ดฝั่งแอปคุยกับฐานข้อมูลผ่าน type-safe model',
  'Drizzle ORM': 'ORM สำหรับ TypeScript ที่ช่วยกำหนด schema และ query ฐานข้อมูลในแบบ type-safe',
  'Express.js': 'web framework บน Node.js สำหรับสร้าง API และจัดการ request จาก frontend',
  'Node.js': 'runtime สำหรับรัน JavaScript ฝั่ง server หรือทำงานอัตโนมัตินอกเบราว์เซอร์',
  'Socket.IO': 'ช่องทางส่งข้อมูลสองทางแบบต่อเนื่อง ใช้ให้หน้าเว็บเห็นค่าที่เปลี่ยนโดยไม่ต้องรีเฟรช',
  PostgreSQL: 'ฐานข้อมูลเชิงสัมพันธ์สำหรับเก็บข้อมูลที่ต้องเชื่อมโยงกันและใช้งานหลายผู้ใช้',
  SQLite: 'ฐานข้อมูลไฟล์เดียว เหมาะกับ prototype และแอปที่อยากติดตั้งง่าย',
  JWT: 'token ที่ใช้ยืนยันตัวตนระหว่าง frontend และ API โดยไม่ต้องเก็บ session ไว้ในทุก request',
  Stripe: 'บริการรับชำระเงินที่รับหน้าที่จัดการบัตรและธุรกรรม ทำให้เว็บไม่ต้องเก็บข้อมูลบัตรเอง',
  Leaflet: 'ไลบรารีแผนที่บนเว็บ ใช้ปักหมุดตำแหน่งและให้ผู้ใช้เลื่อนดูพื้นที่รอบตัว',
  Recharts: 'ไลบรารีวาดกราฟสำหรับ React ใช้แปลงตัวเลขสรุปให้กลายเป็นภาพที่อ่านเร็ว',
  Playwright: 'เครื่องมือสั่งงานเบราว์เซอร์ด้วยโค้ด ใช้ได้ทั้งเขียนเทสต์อัตโนมัติและไล่เก็บข้อมูลจากหน้าเว็บ',
  'Cloudflare Workers': 'ที่รันโค้ดฝั่ง server แบบกระจายตามภูมิภาค เหมาะกับเว็บเล็กที่ไม่อยากดูแลเซิร์ฟเวอร์เอง',
  'AWS S3': 'object storage สำหรับเก็บไฟล์และรายงานที่ต้องทนทานและเรียกดูภายหลังได้',
  '3CX VoIP': 'ระบบโทรศัพท์ผ่านอินเทอร์เน็ตขององค์กร ใช้สั่งโทรออกและดึงบันทึกการโทรกลับเข้าระบบ',
  'SheetJS (xlsx)': 'ไลบรารีอ่านและเขียนไฟล์ Excel จากโค้ด ใช้ตอนนำเข้าหรือส่งออกรายงาน',
  'Claude API': 'API ของโมเดลภาษา ใช้ให้ระบบตีความและตอบงานภาษาอย่างมีบริบท',
  'Google Gemini': 'โมเดลภาษาและภาพของ Google ใช้ตีความข้อความหรือรูปที่ผู้ใช้ส่งเข้ามา',
  Ollama: 'runtime สำหรับรันโมเดลภาษาและ embedding บนเครื่องของผู้ใช้',
  'bge-m3': 'โมเดลที่แปลงข้อความเป็นเวกเตอร์ เพื่อค้นหาเอกสารที่ความหมายใกล้เคียงกับคำถาม',
  FastAPI: 'framework Python สำหรับทำ API ที่เร็ว มี validation และเอกสาร endpoint อัตโนมัติ',
  Flask: 'web framework Python ขนาดเบาสำหรับทำ dashboard หรือหน้าควบคุมเล็ก ๆ',
  Python: 'ภาษาหลักสำหรับ automation, งานข้อมูล, ต้นแบบ AI และเครื่องมือเดสก์ท็อปหลายชิ้นในชุดนี้',
  pandas: 'ไลบรารี Python สำหรับจัดตารางข้อมูลและคำนวณค่าสรุปหรือตัวชี้วัด',
  numpy: 'ไลบรารีคำนวณตัวเลขและ array ของ Python สำหรับงาน simulation และ data analysis',
  'scikit-learn': 'ชุดโมเดล machine learning มาตรฐานของ Python ใช้เทรนและเทียบผลของหลายวิธี',
  matplotlib: 'ไลบรารี Python สำหรับสร้างกราฟและภาพสรุปผลการวิเคราะห์',
  BeautifulSoup: 'ไลบรารี Python สำหรับอ่านโครงสร้าง HTML แล้วดึงค่าที่ต้องการออกมา',
  pytest: 'framework เขียนเทสต์ของ Python ใช้ยืนยันว่าตรรกะยังทำงานถูกหลังแก้โค้ด',
  Java: 'ภาษาสำหรับพัฒนาระบบฝั่ง server ที่เน้นโครงสร้างและความทนทานของโปรแกรม',
  'Spring Boot': 'framework Java สำหรับสร้าง web application และ API ด้วยโครงสร้างมาตรฐาน',
  Maven: 'เครื่องมือ build และจัดการ dependency ของโปรเจกต์ Java',
  Docker: 'เครื่องมือแยก environment ของแอปและ database ให้เปิดซ้ำได้เหมือนกันทุกเครื่อง',
  Flutter: 'framework สำหรับสร้างแอปมือถือจาก codebase เดียวและส่งออกได้หลายแพลตฟอร์ม',
  Dart: 'ภาษาที่ใช้พัฒนาแอป Flutter',
  Kotlin: 'ภาษาหลักสำหรับแอป Android แบบ native',
  'Android SDK': 'ชุดเครื่องมือและ API สำหรับเข้าถึงความสามารถของ Android',
  Gradle: 'ระบบ build และจัดการ dependency ของโปรเจกต์ Android',
  'Material Design': 'แนวทางออกแบบ UI ของ Google ที่ช่วยให้หน้าจอมือถือมีรูปแบบคุ้นเคย',
  'HTML/CSS': 'HTML กำหนดโครงสร้างเนื้อหา ส่วน CSS กำหนดการจัดวาง หน้าตา และการรองรับหลายขนาดจอ',
  JavaScript: 'ภาษาหลักของเว็บ ใช้ทำ interaction, automation และ script บนแพลตฟอร์มต่าง ๆ',
  'Chrome Extension': 'ส่วนขยายเบราว์เซอร์ที่เพิ่มความสามารถเฉพาะหน้าเว็บหรือ workflow การท่องเว็บ',
  'Manifest V3': 'มาตรฐานส่วนขยาย Chrome รุ่นปัจจุบันที่กำหนดสิทธิ์และ lifecycle ของ extension',
  'Side Panel API': 'ส่วนที่ทำให้ extension เปิดแผงควบคุมค้างไว้ข้างหน้าเว็บ แทนที่จะเป็นป๊อปอัปที่ปิดเมื่อคลิกออก',
  'Service Worker': 'สคริปต์เบื้องหลังของ extension ที่ทำงานต่อแม้ไม่ได้เปิดหน้าไหนอยู่ ใช้รับงานตามเวลาหรือเหตุการณ์',
  'Browser Notifications': 'Web API สำหรับแสดงการแจ้งเตือนจากเว็บให้ผู้ใช้เห็น',
  Puppeteer: 'เครื่องมือควบคุม Chromium ด้วยโค้ด เหมาะกับงาน browser automation และ scraping ที่ได้รับอนุญาต',
  uiautomator2: 'ไลบรารีที่สั่งแตะและกดหน้าจอ Android จากโค้ด Python เหมือนมีคนกดเอง',
  ADB: 'เครื่องมือสื่อสารกับเครื่อง Android หรืออีมูเลเตอร์จากคอมพิวเตอร์ ใช้สั่งเปิดแอปและส่งคำสั่งเข้าไป',
  Tkinter: 'ชุด UI ของ Python สำหรับทำโปรแกรม desktop ขนาดเล็กบน Windows',
  win32gui: 'โมดูล Python สำหรับอ่านและควบคุมหน้าต่างของ Windows',
  win32com: 'โมดูล Python ที่สั่งงานโปรแกรม Windows อย่าง Excel ได้โดยตรง ใช้สร้างไฟล์ซ้ำได้เหมือนเดิมทุกครั้ง',
  pyautogui: 'ไลบรารี Python สำหรับสั่งเมาส์และคีย์บอร์ดตาม workflow บนหน้าจอ',
  pystray: 'ไลบรารีสำหรับทำ icon และเมนูของโปรแกรมใน system tray',
  PyInstaller: 'เครื่องมือแพ็กโปรแกรม Python ให้เปิดใช้งานบน Windows ได้โดยไม่ต้องติดตั้ง Python แยก',
  OpenCV: 'ไลบรารีประมวลผลภาพและวิดีโอ เช่น อ่านเฟรมออกมาทำภาพตัวอย่าง',
  moviepy: 'ไลบรารี Python ที่ช่วยประกอบ workflow ตัดต่อวิดีโอด้วยโค้ด',
  PowerShell: 'ภาษาสคริปต์ของ Windows สำหรับอ่านค่าในเครื่องและสั่งงานระบบ',
  'Windows Script Host': 'ตัวรันสคริปต์ของ Windows ใช้เปิดโปรแกรมแบบไม่มีหน้าต่างดำโผล่',
  'MetaTrader 5': 'แพลตฟอร์มเทรดและ API สำหรับอ่านข้อมูลตลาดหรือสถานะคำสั่งซื้อขาย',
  Dashboard: 'หน้าจอสรุปสถานะระหว่างที่ระบบกำลังทำงาน ใช้ดูว่าตอนนี้เกิดอะไรขึ้นบ้าง',
  'Telegram Bot API': 'API สำหรับรับส่งข้อความและทำ workflow ผ่าน Telegram bot',
  'Google Apps Script': 'JavaScript ที่รันอยู่ใน Google Workspace ใช้เชื่อม Sheets กับ Gmail และตั้งให้ทำงานตามเวลา',
  'Google Sheets API': 'ส่วนที่ให้ระบบภายนอกอ่านและเขียนข้อมูลในชีตได้ ใช้แทนฐานข้อมูลในงานที่ทีมยังทำงานบนชีต',
  'Google Sheets': 'ตารางออนไลน์ที่ใช้เป็นทั้งหน้าจอทำงานและฐานข้อมูลเบื้องต้นใน workflow ทีม',
  'Gmail API': 'ส่วนที่ให้สคริปต์ค้นและอ่านอีเมลตามเงื่อนไข เพื่อดึงข้อมูลออกมาใช้ต่อ',
  'LINE Notify': 'ช่องทางส่งข้อความแจ้งเตือนเข้า LINE จากระบบอัตโนมัติ',
  k6: 'เครื่องมือ load testing สำหรับจำลองผู้ใช้จำนวนมากและวัดความทนของ API',
  'Load Testing': 'การจำลองผู้ใช้จำนวนมากเข้าระบบพร้อมกัน เพื่อดูว่าจะช้าหรือพังตรงจุดไหนก่อนใช้งานจริง',
  'Excel VBA': 'ภาษา macro ใน Excel สำหรับทำฟอร์ม ปุ่ม และ workflow บน workbook',
  'UserForm (VBA)': 'หน้าต่างกรอกข้อมูลที่สร้างใน Excel ใช้แทนการพิมพ์ลงช่องตารางตรง ๆ',
  XLSM: 'รูปแบบไฟล์ Excel ที่บรรจุ macro VBA ได้',
  JSON: 'รูปแบบข้อมูลน้ำหนักเบาที่ใช้เก็บ config, แลกเปลี่ยนข้อมูล และบันทึก snapshot ระหว่างระบบ',
  RAG: 'วิธีให้โมเดลดึงข้อมูลจากคลังความรู้ก่อนตอบ เพื่อลดการเดาและอ้างอิงแหล่งที่มาได้',
  'Information Extraction': 'การสกัดข้อมูลสำคัญจากเอกสารให้กลายเป็นฟิลด์ที่ค้นหาและเปรียบเทียบได้',
  'Semantic Matching': 'การจับคู่สิ่งที่ความหมายใกล้กัน เช่น โปรไฟล์งานวิจัยกับทุนที่เหมาะ',
  'Knowledge Graph': 'โครงสร้างข้อมูลแบบความสัมพันธ์ ช่วยเชื่อม entity และเงื่อนไขที่เกี่ยวข้อง',
  Simulation: 'การสร้างแบบจำลองเพื่อทดลองพฤติกรรมของระบบก่อนนำไปใช้จริง'
};

function getTechNote(tech) {
  const key = Object.keys(techNotes).find(name => tech === name || tech.startsWith(`${name} `));
  return techNotes[key] || 'เครื่องมือหรือแนวทางที่ใช้ทำงานส่วนนี้';
}

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  renderProjects();
  renderFeaturedProjects();
  initFilterTabs();
  initModal();
  initScrollAnimations();
  initNavbar();
  initSmoothScroll();
  updateProjectCount();
  initScrollProgressBar();
  initChatbot();
  initInlineChat();
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
});

// ============================================
// PARTICLE ANIMATION (MAGNETIC & SHOCKWAVE)
// ============================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, active: false };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(randomY = false) {
      this.x = Math.random() * canvas.width;
      this.y = randomY ? Math.random() * canvas.height : -10;
      this.size = Math.random() * 2 + 0.5;
      this.baseSpeedX = (Math.random() - 0.5) * 0.4;
      this.baseSpeedY = (Math.random() - 0.5) * 0.4;
      this.speedX = this.baseSpeedX;
      this.speedY = this.baseSpeedY;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212';
    }
    update() {
      if (mouse.active && mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = 220;
        
        if (dist < attractRadius) {
          const force = (attractRadius - dist) / attractRadius;
          this.speedX += (dx / dist) * force * 0.08;
          this.speedY += (dy / dist) * force * 0.08;
        }
      }

      this.speedX *= 0.94;
      this.speedY *= 0.94;
      this.speedX += this.baseSpeedX * 0.06;
      this.speedY += this.baseSpeedY * 0.06;

      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  const particleCount = Math.min(90, Math.floor(window.innerWidth / 12));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  window.addEventListener('click', (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    
    particles.forEach(p => {
      const dx = p.x - clickX;
      const dy = p.y - clickY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 280;
      
      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist;
        p.speedX += (dist === 0 ? 0 : dx / dist) * force * 14;
        p.speedY += (dist === 0 ? 0 : dy / dist) * force * 14;
      }
    });
  });

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxConnectDist = 130;
        
        if (dist < maxConnectDist) {
          const alpha = 0.12 * (1 - dist / maxConnectDist);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================
// TYPING EFFECT
// ============================================
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const texts = ['Full-Stack Developer', 'AI Engineer', 'Trading Bot Developer', 'Automation Expert', 'Mobile App Developer'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = texts[textIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex--);
      delay = 50;
    } else {
      el.textContent = current.substring(0, charIndex++);
      delay = 100;
    }

    if (!isDeleting && charIndex === current.length + 1) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 500;
    }
    setTimeout(type, delay);
  }
  type();
}

// ============================================
// RENDER PROJECTS
// ============================================
function renderFeaturedProjects() {
  const stage = document.getElementById('featured-stage');
  if (!stage) return;

  const selectedIds = ['2getr', 'franchise-os', 'grid-bot'];
  const selected = selectedIds
    .map(id => projects.find(project => project.id === id))
    .filter(Boolean);

  // ต่อเลข FIG. จากภาพประกอบช่วง Story ที่เป็น FIG. 01
  stage.innerHTML = selected.map((project, index) => `
    <article class="featured-case reveal" data-plate="${index + 1}" data-category="${project.category}">
      <div class="featured-visual">
        ${cornerMarks()}
        <span class="featured-number">FIG. 0${index + 2}</span>
        ${project.image
          ? `<img src="${project.image}" alt="ภาพประกอบของ ${project.name}" loading="lazy"><span class="visual-note">ภาพประกอบ ไม่ใช่ภาพหน้าจอจริง</span>`
          : `<span class="card-plate featured-plate" aria-hidden="true"><span class="card-plate-motif"></span><span class="card-plate-no">${String(index + 2).padStart(2, '0')}</span></span>`}
        <span class="featured-rule" aria-hidden="true"></span>
      </div>
      <div class="featured-info">
        <span class="project-type">${categories[project.category]?.label || project.category}</span>
        <h3>${project.name}</h3>
        <p>${project.fullDesc}</p>
        <dl class="featured-spec">
          <div><dt>STACK</dt><dd>${project.tech.length} ตัว</dd></div>
          <div><dt>SCOPE</dt><dd>${project.status || 'งานส่วนตัว'}</dd></div>
          <div><dt>DOES</dt><dd>${project.features.length} อย่าง</dd></div>
        </dl>
        <div class="featured-tech">${project.tech.slice(0, 5).map(tech => `<span>${tech}</span>`).join('')}</div>
        <button class="case-open view-details-btn" type="button" data-id="${project.id}">แกะดูงานนี้</button>
      </div>
    </article>
  `).join('');
}

// เครื่องหมายมุมแบบแผ่นแบบช่าง ใช้ซ้ำทั้ง Selected Cases และ modal
function cornerMarks() {
  return '<span class="corner-marks" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal" data-category="${p.category}" data-id="${p.id}" style="--card-order: ${i}">
      <div class="project-card-header" tabindex="0" role="button" aria-label="ดูรายละเอียด ${p.name}">
        <span class="card-plate" aria-hidden="true">
          <span class="card-plate-motif"></span>
          <span class="card-plate-no">${String(i + 1).padStart(2, '0')}</span>
        </span>
        <span class="project-card-category">${categories[p.category]?.label || p.category}</span>
      </div>
      <div class="project-card-body">
        ${p.status ? `<span class="project-card-status">${p.status}</span>` : ''}
        <h3 class="project-card-title">${p.name}</h3>
        <p class="project-card-desc">${p.shortDesc}</p>
        <div class="project-card-tech">
          ${p.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.tech.length > 4 ? `<span class="tech-tag">+${p.tech.length - 4}</span>` : ''}
        </div>
      </div>
      <div class="project-card-footer">
        <button class="view-details-btn" type="button" data-id="${p.id}">ดูรายละเอียด</button>
      </div>
    </article>
  `).join('');
}

// ============================================
// FILTER TABS
// ============================================
function initFilterTabs() {
  const btns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('projects-grid');
  if (!btns.length || !grid) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = grid.querySelectorAll('.project-card');

      // 1. Fade out current cards
      const visibleCards = Array.from(cards).filter(c => !c.classList.contains('hidden'));
      visibleCards.forEach(card => {
        card.classList.remove('fade-in');
        card.classList.add('fade-out');
      });

      // 2. Wait for fade-out to complete (300ms)
      setTimeout(() => {
        let shownIndex = 0;
        cards.forEach(card => {
          card.classList.remove('fade-out');
          const match = filter === 'all' || card.dataset.category === filter;
          
          if (match) {
            card.classList.remove('hidden');
            card.classList.add('fade-in');
            card.style.animationDelay = `${shownIndex * 0.06}s`;
            shownIndex++;
          } else {
            card.classList.add('hidden');
          }
        });

        // Update count
        const count = grid.querySelectorAll('.project-card:not(.hidden)').length;
        const countEl = document.getElementById('filter-count');
        if (countEl) countEl.textContent = count;
      }, 300);
    });
  });
}

// ============================================
// MODAL
// ============================================
let lastFocusedElement = null;

function initModal() {
  const overlay = document.getElementById('project-modal');
  if (!overlay) return;

  // Delegate click on view details buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-details-btn');
    if (btn) {
      const project = projects.find(p => p.id === btn.dataset.id);
      if (project) openModal(project);
    }
    // Also allow clicking the card header
    const cardHeader = e.target.closest('.project-card-header');
    if (cardHeader) {
      const card = cardHeader.closest('.project-card');
      if (card) {
        const project = projects.find(p => p.id === card.dataset.id);
        if (project) openModal(project);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    const cardHeader = e.target.closest?.('.project-card-header');
    if (cardHeader && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      const card = cardHeader.closest('.project-card');
      const project = projects.find(p => p.id === card?.dataset.id);
      if (project) openModal(project);
      return;
    }

    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
      return;
    }

    if (e.key === 'Tab' && overlay.classList.contains('active')) {
      const focusable = overlay.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      // ถ้าโฟกัสหลุดออกไปนอก modal ให้ดึงกลับเข้ามาก่อน ไม่อย่างนั้น Tab จะวิ่งไปหาเนื้อหาข้างหลัง
      if (!overlay.contains(document.activeElement)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Close modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('.modal-close')) {
      closeModal();
    }
  });
}

function openModal(project) {
  const overlay = document.getElementById('project-modal');
  const content = document.getElementById('modal-inner');
  if (!overlay || !content) return;

  const safeLinks = (project.links || []).filter(link => /^https:\/\//.test(link.url));

  content.innerHTML = `
    <div class="modal-header" style="background: ${project.image ? `linear-gradient(to bottom, rgba(10, 10, 26, 0.2), rgba(10, 10, 26, 0.8)), url('${project.image}') no-repeat center/cover` : project.gradient}">
      ${cornerMarks()}
      <button class="modal-close" type="button" aria-label="ปิดรายละเอียดโปรเจกต์">&times;</button>
      ${project.image ? '' : `<div class="modal-icon">${project.name.slice(0, 2).toUpperCase()}</div>`}
      <h2 class="modal-title">${project.name}</h2>
      <div class="modal-meta"><span class="modal-category-badge">${categories[project.category]?.label || project.category}</span>${project.status ? `<span class="modal-status-badge">${project.status}</span>` : ''}</div>
    </div>
    <div class="modal-body">
      <h4 class="modal-section-title">งานนี้คืออะไร</h4>
      <p class="modal-description">${project.fullDesc}</p>
      ${project.teamNote ? `<p class="modal-team-note"><span>หมายเหตุ</span>${project.teamNote}</p>` : ''}
      <h4 class="modal-section-title">Tech stack — ใช้ทำอะไรบ้าง</h4>
      <div class="modal-tech-explain">
        ${project.tech.map(t => `<div class="modal-tech-item"><strong>${t}</strong><p>${getTechNote(t)}</p></div>`).join('')}
      </div>
      ${project.features ? `
        <h4 class="modal-section-title modal-features-heading">สิ่งที่งานนี้ทำได้</h4>
        <ul class="modal-features">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      ` : ''}
      ${safeLinks.length ? `
        <h4 class="modal-section-title modal-features-heading">ลิงก์</h4>
        <div class="modal-links">
          ${safeLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}<i aria-hidden="true">↗</i></a>`).join('')}
        </div>
      ` : ''}
    </div>
  `;

  lastFocusedElement = document.activeElement;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  focusCloseButton(content);
}

// ระหว่างที่ overlay ยังอยู่ในช่วง transition ปุ่มปิดอาจยังรับโฟกัสไม่ได้
// ใช้ setTimeout แทน requestAnimationFrame เพราะ rAF จะถูกหยุดเมื่อแท็บไม่ได้แสดงผลอยู่
function focusCloseButton(content) {
  const target = content.querySelector('.modal-close');
  if (!target) return;
  target.focus();
  [0, 60, 180].forEach(delay => {
    window.setTimeout(() => {
      if (document.activeElement !== target) target.focus();
    }, delay);
  });
}

function closeModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    lastFocusedElement?.focus?.();
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + '+';
    }
  }, 20);
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(links.classList.contains('active')));
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 70; // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// UPDATE PROJECT COUNT
// ============================================
function updateProjectCount() {
  const countEl = document.getElementById('filter-count');
  if (countEl) countEl.textContent = projects.length;
  const storyCountEl = document.getElementById('story-project-total');
  if (storyCountEl) storyCountEl.textContent = projects.length;
}

// ============================================
// NEW ENHANCED ANIMATIONS
// ============================================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloader-bar');
  if (!preloader || !bar) return;

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 85) {
      clearInterval(interval);
    } else {
      width += Math.random() * 10;
      if (width > 85) width = 85;
      bar.style.width = width + '%';
    }
  }, 100);

  window.addEventListener('load', () => {
    clearInterval(interval);
    bar.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        initTypingEffect();
      }, 400);
    }, 500);
  });
  
  // Fallback
  setTimeout(() => {
    clearInterval(interval);
    bar.style.width = '100%';
    if (!preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        initTypingEffect();
      }, 400);
    }
  }, 3000);
}

function initSpotlightEffect() {
  const updateSpotlight = (card, clientX, clientY) => {
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.project-card, .skill-card, .stat-card, .contact-link');
    if (card) updateSpotlight(card, e.clientX, e.clientY);
  });

  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const card = document.elementFromPoint(touch.clientX, touch.clientY)?.closest('.project-card, .skill-card, .stat-card, .contact-link');
    if (card) updateSpotlight(card, touch.clientX, touch.clientY);
  }, { passive: true });
}

function initTiltEffect() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const applyTilt = (card, clientX, clientY) => {
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.setProperty('--card-tilt', `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`);
  };

  const resetTilt = (card) => {
    card.style.setProperty('--card-tilt', 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.project-card, .skill-card, .stat-card, .contact-link');
    if (card) applyTilt(card, e.clientX, e.clientY);
  });

  document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.project-card, .skill-card, .stat-card, .contact-link');
    if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
      resetTilt(card);
    }
  });

  document.addEventListener('touchstart', (e) => {
    const card = e.target.closest('.project-card, .skill-card, .stat-card, .contact-link');
    if (card) {
      const touch = e.touches[0];
      applyTilt(card, touch.clientX, touch.clientY);
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const card = document.elementFromPoint(touch.clientX, touch.clientY)?.closest('.project-card, .skill-card, .stat-card, .contact-link');
    
    document.querySelectorAll('.project-card, .skill-card, .stat-card, .contact-link').forEach(c => {
      if (c !== card) resetTilt(c);
    });

    if (card) applyTilt(card, touch.clientX, touch.clientY);
  }, { passive: true });

  document.addEventListener('touchend', () => {
    document.querySelectorAll('.project-card, .skill-card, .stat-card, .contact-link').forEach(resetTilt);
  });
}

function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + '%';
  });
}

function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.btn, .filter-btn, .view-details-btn, .modal-close');
    if (!target) return;

    let container = target.querySelector('.ripple-container');
    if (!container) {
      container = document.createElement('span');
      container.className = 'ripple-container';
      target.appendChild(container);
    }

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

function initLaserTrailCursor() {
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (isTouch) return;

  const canvas = document.getElementById('cursor-canvas');
  if (!canvas) return;
  document.body.classList.add('custom-cursor-active');

  const ctx = canvas.getContext('2d');
  let trail = [];
  const maxTrail = 25;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY, age: 1.0 });
    if (trail.length > maxTrail) {
      trail.shift();
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Smoothly decay trail age
    trail.forEach(p => p.age -= 0.04);
    trail = trail.filter(p => p.age > 0);

    if (trail.length > 1) {
      for (let i = 1; i < trail.length; i++) {
        const p1 = trail[i - 1];
        const p2 = trail[i];
        const ratio = i / trail.length;
        const currentAge = p2.age;
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        
        ctx.lineCap = 'round';
        ctx.lineWidth = ratio * 7 * currentAge;
        
        const r = Math.floor(6 + (124 - 6) * (1 - ratio));
        const g = Math.floor(182 + (58 - 182) * (1 - ratio));
        const b = Math.floor(212 + (237 - 212) * (1 - ratio));
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${ratio * 0.8 * currentAge})`;
        
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.shadowBlur = ratio * 12 * currentAge;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function init3DParallaxShapes() {
  const shapes = document.querySelectorAll('.glass-shape');
  if (!shapes.length) return;

  let mouseX = 0;
  let mouseY = 0;
  let gyroX = 0;
  let gyroY = 0;
  let hasGyro = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    updateShapes();
  });

  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma !== null && e.beta !== null) {
      hasGyro = true;
      gyroX = Math.max(-30, Math.min(30, e.gamma)) / 30;
      gyroY = Math.max(-30, Math.min(30, e.beta - 45)) / 30;
      updateShapes();
    }
  });

  window.addEventListener('scroll', () => {
    updateShapes();
  });

  function updateShapes() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    shapes.forEach(shape => {
      const speed = parseFloat(shape.dataset.speed || 0.05);
      const scrollOffset = scrollTop * speed;
      
      const currentX = hasGyro ? gyroX : mouseX;
      const currentY = hasGyro ? gyroY : mouseY;

      const offsetX = currentX * 25;
      const offsetY = currentY * 25;
      
      shape.style.transform = `translate3d(${offsetX}px, ${scrollOffset + offsetY}px, 0) rotate(${scrollTop * 0.04}deg)`;
    });
  }
}

// ============================================
// CHATBOT ASSISTANT LOGIC
// ============================================
window.triggerProjectModal = (id) => {
  const project = projects.find(p => p.id === id);
  if (project) {
    openModal(project);
  }
};

function initInlineChat() {
  const trigger = document.getElementById('open-chat-inline');
  const toggle = document.getElementById('chat-toggle-btn');
  if (!trigger || !toggle) return;
  trigger.addEventListener('click', () => {
    if (!document.getElementById('chat-window')?.classList.contains('active')) {
      toggle.click();
    }
  });
}

function initChatbot() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatMessages = document.getElementById('chat-messages');
  const quickRepliesContainer = document.getElementById('chat-quick-replies');
  const inputForm = document.getElementById('chat-input-form');
  const inputEl = document.getElementById('chat-input');

  if (!toggleBtn || !chatWindow || !chatMessages || !inputForm || !inputEl) return;

  chatMessages.innerHTML = '';

  // Toggle chat window
  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', String(chatWindow.classList.contains('active')));
    if (chatWindow.classList.contains('active')) {
      inputEl.focus();
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('active');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    });
  }

  appendBotMessage(
    `อยากดูงานแบบไหน พิมพ์ชื่อโปรเจกต์ เทคที่สนใจ หรือกดปุ่มด้านล่างได้เลยครับ`
  );
  showInitialQuickReplies();

  // Form submit handler
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = inputEl.value.trim();
    if (!query) return;

    appendUserMessage(query);
    inputEl.value = '';

    showTypingIndicator();
    
    setTimeout(() => {
      removeTypingIndicator();
      const reply = processUserQuery(query);
      appendBotMessage(reply.text);
      if (reply.replies && reply.replies.length > 0) {
        showQuickReplies(reply.replies);
      } else {
        showInitialQuickReplies();
      }
    }, 600 + Math.random() * 400);
  });

  function appendUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg chat-msg-user';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendBotMessage(html) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg chat-msg-bot';
    msg.innerHTML = html;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  let typingIndicator = null;

  function showTypingIndicator() {
    if (typingIndicator) return;
    typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    if (typingIndicator) {
      typingIndicator.remove();
      typingIndicator = null;
    }
  }

  function showQuickReplies(list) {
    quickRepliesContainer.innerHTML = '';
    list.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = item.label;
      btn.addEventListener('click', () => {
        appendUserMessage(item.label);
        showTypingIndicator();
        
        setTimeout(() => {
          removeTypingIndicator();
          const reply = processUserQuery(item.query);
          appendBotMessage(reply.text);
          if (reply.replies && reply.replies.length > 0) {
            showQuickReplies(reply.replies);
          } else {
            showInitialQuickReplies();
          }
        }, 500);
      });
      quickRepliesContainer.appendChild(btn);
    });
  }

  function showInitialQuickReplies() {
    showQuickReplies([
      { label: '🧠 แนะนำผลงาน AI', query: 'ai' },
      { label: '🐍 ผลงาน Python', query: 'python' },
      { label: '📈 บอทเทรด MT5', query: 'trading' },
      { label: '🌐 ค้นหา Web Apps', query: 'web' },
      { label: '📞 ช่องทางติดต่อ', query: 'contact' }
    ]);
  }

  function processUserQuery(rawQuery) {
    const q = rawQuery.toLowerCase().trim()
      .replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s+/g, " ");

    // Greetings
    if (q === 'hello' || q === 'hi' || q === 'hey' || q.includes('สวัสดี') || q.includes('ดีครับ') || q.includes('ดีค่ะ') || q.includes('หวัดดี')) {
      return {
        text: `สวัสดีครับ อยากดูงานที่ใช้ Python, React หรือเทคอื่น ๆ พิมพ์ชื่อมาได้เลย หรือเลือกจากปุ่มด้านล่างครับ`,
        replies: []
      };
    }

    // Contacts
    if (q.includes('contact') || q.includes('ติดต่อ') || q.includes('email') || q.includes('อีเมล') || q.includes('gmail') || q.includes('github')) {
      return {
        text: `ติดต่อภาคินได้ทางนี้ครับ<br><br>📧 <strong>Email:</strong> <a href="mailto:bossboss27.b3@gmail.com" style="color: #06b6d4; text-decoration: underline; font-weight: 500;">bossboss27.b3@gmail.com</a><br>💻 <strong>GitHub:</strong> <a href="https://github.com/BossZY27" target="_blank" rel="noopener noreferrer" style="color: #06b6d4; text-decoration: underline; font-weight: 500;">github.com/BossZY27</a>`,
        replies: [
          { label: '🔥 ดูผลงานทั้งหมด', query: 'all_projects' },
          { label: '🤖 แนะนำโปรเจกต์ AI', query: 'ai' }
        ]
      };
    }

    // Category Matcher
    let selectedCategory = null;
    if (q.includes('web') || q.includes('เว็บ') || q.includes('website')) selectedCategory = 'web';
    else if (q.includes('mobile') || q.includes('มือถือ') || q.includes('แอป') || q.includes('ios') || q.includes('android')) selectedCategory = 'mobile';
    else if (q.includes('automation') || q.includes('ออโตเมชัน') || q.includes('สแครป') || q.includes('scraper') || q.includes('ขูดข้อมูล') || q.includes('บอทแอดบล็อก') || q.includes('adblock') || q.includes('ad block')) selectedCategory = 'automation';
    else if (q.includes('trading') || q.includes('เทรด') || q.includes('forex') || q.includes('ea') || q.includes('หุ้น') || q.includes('mt5') || q.includes('metatrader')) selectedCategory = 'trading';
    else if (q.includes('ai') || q.includes('ml') || q.includes('neural') || q.includes('gemini') || q.includes('claude') || q.includes('ปัญญาประดิษฐ์') || q.includes('สมองกล')) selectedCategory = 'ai';
    else if (q.includes('academic') || q.includes('วิชาการ') || q.includes('มหาลัย') || q.includes('เรียน') || q.includes('จำลอง') || q.includes('sim')) selectedCategory = 'academic';
    else if (q === 'all_projects' || q.includes('ทั้งหมด') || q.includes('ผลงานทั้งหมด')) selectedCategory = 'all';

    if (selectedCategory) {
      const filtered = selectedCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);
      
      const catTitle = selectedCategory === 'all' ? 'ผลงานทั้งหมด' : categories[selectedCategory]?.label || selectedCategory;
      
      let html = `เจอ ${filtered.length} งานในหมวด <strong>${catTitle}</strong><br><br>`;
      filtered.forEach(p => {
        html += `• <strong>${p.name}</strong> — ${p.shortDesc}<br>`;
        html += `<button class="chat-project-btn" onclick="triggerProjectModal('${p.id}')">เปิดรายละเอียด ${p.name}</button><br>`;
      });

      return {
        text: html,
        replies: [
          { label: '🌐 Web Apps', query: 'web' },
          { label: '📱 Mobile', query: 'mobile' },
          { label: '🤖 Automation', query: 'automation' },
          { label: '📈 Trading', query: 'trading' },
          { label: '🧠 AI & ML', query: 'ai' }
        ]
      };
    }

    // Technology Matcher
    const matchedTechs = [];
    const techKeywords = ['python', 'react', 'typescript', 'next.js', 'nextjs', 'flutter', 'kotlin', 'express', 'tkinter', 'opencv', 'prisma', 'supabase', 'fastapi', 'nodejs', 'node.js', 'selenium', 'puppeteer', 'sqlite'];
    
    techKeywords.forEach(t => {
      if (q.includes(t)) matchedTechs.push(t);
    });

    if (matchedTechs.length > 0) {
      const primaryTech = matchedTechs[0];
      const filtered = projects.filter(p => 
        p.tech.some(t => t.toLowerCase().includes(primaryTech))
      );

      if (filtered.length > 0) {
        let html = `เจอ ${filtered.length} งานที่ใช้ <strong>${primaryTech.toUpperCase()}</strong><br><br>`;
        filtered.forEach(p => {
          html += `• <strong>${p.name}</strong> — ${p.shortDesc}<br>`;
          html += `<button class="chat-project-btn" onclick="triggerProjectModal('${p.id}')">เปิดรายละเอียด ${p.name}</button><br>`;
        });

        return {
          text: html,
          replies: []
        };
      }
    }

    // Individual Project Matcher
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      const pName = p.name.toLowerCase();
      const pId = p.id.toLowerCase();
      
      if (q.includes(pId) || q.includes(pName) || (p.name.includes(' ') && q.includes(pName.replace(/\s+/g, "")))) {
        let html = `<strong>${p.name}</strong> · ${categories[p.category]?.label || p.category}<br><br>`;
        html += `${p.fullDesc}<br><br>`;
        html += `<strong>เทคที่ใช้:</strong> ${p.tech.join(', ')}<br><br>`;
        html += `<button class="chat-project-btn" onclick="triggerProjectModal('${p.id}')">เปิดรายละเอียดทั้งหมด</button>`;
        
        return {
          text: html,
          replies: []
        };
      }
    }

    // Fallback
    return {
      text: `ยังหาไม่เจอครับ ลองค้นด้วยคำสั้น ๆ แบบนี้ได้เลย<br><br>• หมวดงาน: Web, Mobile, Automation, Trading, AI<br>• เทคที่ใช้: Python, React, Next.js, Flutter, OpenCV, MT5<br>• ชื่อโปรเจกต์: น้องเลขา, 2Getr, Opt-POS, Video Tinder`,
      replies: []
    };
  }
}
