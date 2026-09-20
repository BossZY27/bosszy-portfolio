// ============================================
// PROJECT DATA
// ============================================
const projects = [
  // --- Web Applications ---
  {
    id: '2getr',
image: 'public/images/2getr.png',
    name: '2Getr',
    shortDesc: 'เว็บคอมมูนิตี้สำหรับพูดคุยและแชร์เนื้อหา',
    fullDesc: 'เว็บคอมมูนิตี้แบบ Full-stack ที่ให้ผู้ใช้สมัครสมาชิก พูดคุยแบบเรียลไทม์ แชร์เนื้อหา และดูแลพื้นที่ของกลุ่มตัวเองได้',
    category: 'web',
    tech: ['Next.js 15', 'React 19', 'Supabase', 'Prisma', 'TypeScript', 'Zustand'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: '👥',
    features: ['แชตแบบเรียลไทม์', 'สมัครและเข้าสู่ระบบ', 'โพสต์และแชร์เนื้อหา', 'จัดการคอมมูนิตี้']
  },
  {
    id: 'opt-pos',
image: 'public/images/pos.png',
    name: 'Opt-POS',
    shortDesc: 'ระบบขายหน้าร้านสำหรับร้านค้าปลีก',
    fullDesc: 'ระบบ POS สำหรับขายสินค้า เช็กสต็อก ติดตามยอดขาย ออกใบเสร็จ และดูรายงานสรุปของร้าน',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: '🛒',
    features: ['จัดการสต็อกสินค้า', 'ติดตามยอดขาย', 'พิมพ์ใบเสร็จ', 'ดูรายงานสรุป']
  },
  {
    id: 'next2-pos',
image: 'public/images/pos.png',
    name: 'Next2-POS',
    shortDesc: 'ระบบ POS เวอร์ชัน 2 ที่พัฒนาต่อยอด',
    fullDesc: 'ระบบ POS เวอร์ชันที่สองที่ต่อยอดจากของเดิม ปรับหน้าจอให้ใช้ง่ายขึ้น เพิ่มการรองรับหลายสาขา และซิงก์ข้อมูลแบบเรียลไทม์',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    icon: '💳',
    features: ['หน้าจอใช้งานง่ายขึ้น', 'รองรับหลายสาขา', 'ซิงก์ข้อมูลแบบเรียลไทม์', 'รายงานละเอียดขึ้น']
  },
  {
    id: 'opt-loyalty',
image: 'public/images/pos.png',
    name: 'Opt-Loyalty',
    shortDesc: 'ระบบสะสมแต้มและดูแลลูกค้าประจำ',
    fullDesc: 'ระบบ CRM สำหรับเก็บแต้ม จัดการของรางวัล ทำแคมเปญ และดูว่าลูกค้าแต่ละกลุ่มกลับมาใช้บริการแบบไหน',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: '⭐',
    features: ['ระบบสะสมแต้ม', 'ดูพฤติกรรมลูกค้า', 'จัดการของรางวัล', 'สร้างแคมเปญ']
  },
  {
    id: 'telesales',
image: 'public/images/bot.png',
    name: 'TeleSales CRM',
    shortDesc: 'CRM สำหรับทีมขายทางโทรศัพท์ที่ต่อกับ 3CX',
    fullDesc: 'ระบบให้ทีมขายเก็บรายชื่อลูกค้า โทรผ่าน 3CX บันทึกประวัติการคุย ดู KPI และส่งออกรายงาน Excel โดยแยกสิทธิ์ Admin, Manager และ Agent',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', '3CX VoIP'],
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    icon: '📞',
    features: ['จัดการรายชื่อลูกค้า', 'โทรผ่าน 3CX', 'ดู KPI ของทีม', 'แยกสิทธิ์ผู้ใช้', 'ส่งออกรายงาน Excel']
  },
  {
    id: 'ai-shop',
image: 'public/images/bot.png',
    name: 'AI Shop Team',
    shortDesc: 'ระบบช่วยดูภาพรวมร้านค้าและทีมงานด้วย AI',
    fullDesc: 'เว็บสำหรับรวมข้อมูลร้านค้าไว้ในที่เดียว แล้วใช้ AI ช่วยมองแนวโน้มยอดขาย สต็อก และงานของทีม',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    icon: '🏪',
    features: ['สรุปข้อมูลร้านด้วย AI', 'จัดการงานของทีม', 'ดูแนวโน้มสต็อก', 'คาดการณ์ยอดขาย']
  },
  {
    id: 'ai-office',
image: 'public/images/bot.png',
    name: 'AI Team Office',
    shortDesc: 'ระบบส่งงานให้ AI หลายตัวช่วยกันทำ',
    fullDesc: 'เว็บ Full-stack ที่แบ่ง AI เป็นบทบาท Researcher, Analyst และ Developer แล้วส่งงานไปยังตัวที่เหมาะจากคำสำคัญในโจทย์ โดยใช้ Claude API',
    category: 'ai',
    tech: ['Express.js', 'Node.js', 'Claude API', 'HTML/CSS/JS'],
    gradient: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
    icon: '🤖',
    features: ['AI หลายบทบาท', 'แยกงานตามคำสำคัญ', 'เชื่อมต่อ Claude API', 'ติดตามงานระหว่าง Agent']
  },
  {
    id: 'mlbb-meta',
image: 'public/images/mlbb-tier.png',
    name: 'MLBB Meta Analyzer',
    shortDesc: 'เว็บดูเมตาและสถิติของเกม Mobile Legends',
    fullDesc: 'เว็บ Full-stack สำหรับดู Tier List อัตราชนะ แนวโน้มเมตา และไอเท็มแนะนำของ Mobile Legends โดยแยก Backend API ออกจากหน้าเว็บ',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'Express.js', 'Prisma', 'SQLite'],
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
    icon: '🎮',
    features: ['จัดอันดับฮีโร่', 'วิเคราะห์อัตราชนะ', 'ติดตามเมตา', 'แนะนำชุดไอเท็ม']
  },
  {
    id: 'laos-lottery',
image: 'public/images/trading-bot.png',
    name: 'Lao Lottery AI',
    shortDesc: 'โปรเจกต์ทดลองวิเคราะห์ข้อมูลหวยลาวด้วย AI',
    fullDesc: 'งานทดลองกับข้อมูลย้อนหลัง โดยเทียบการวิเคราะห์ความถี่ โมเดล Neural Network และกฎตรวจผลแบบ Heuristic',
    category: 'ai',
    tech: ['FastAPI', 'Python', 'Neural Network', 'ML'],
    gradient: 'linear-gradient(135deg, #F7971E, #FFD200)',
    icon: '🎰',
    features: ['ทดลองโมเดลทำนาย', 'วิเคราะห์ความถี่', 'ใช้ Neural Network', 'ดูข้อมูลย้อนหลัง']
  },
  {
    id: 'ai-cartoon',
image: 'public/images/2getr.png',
    name: 'AI Cartoon',
    shortDesc: 'เว็บแปลงรูปภาพให้เป็นภาพการ์ตูนด้วย AI',
    fullDesc: 'เว็บสำหรับอัปโหลดรูป เลือกสไตล์ แล้วดูตัวอย่างภาพการ์ตูนที่ AI สร้างให้ก่อนบันทึก',
    category: 'ai',
    tech: ['Next.js', 'React', 'TypeScript', 'AI/ML'],
    gradient: 'linear-gradient(135deg, #E44D26, #F16529)',
    icon: '🎨',
    features: ['แปลงรูปเป็นภาพการ์ตูน', 'เลือกได้หลายสไตล์', 'ดูตัวอย่างก่อนบันทึก', 'ส่งออกภาพความละเอียดสูง']
  },
  {
    id: 'web-schedule',
image: 'public/images/bot.png',
    name: 'Web Schedule Nara',
    shortDesc: 'ระบบจัดการตารางเวลา',
    fullDesc: 'เว็บสำหรับเพิ่ม แก้ไข และดูตารางเวลาของ Nara ผ่านหน้าปฏิทิน พร้อมระบบแจ้งเตือน',
    category: 'web',
    tech: ['Web Technologies', 'JavaScript', 'HTML/CSS'],
    gradient: 'linear-gradient(135deg, #36D1DC, #5B86E5)',
    icon: '📅',
    features: ['เพิ่มและแก้ไขตาราง', 'ดูแบบปฏิทิน', 'ระบบแจ้งเตือน', 'หน้าจอใช้งานไม่ซับซ้อน']
  },
  // --- Mobile Apps ---
  {
    id: 'unitask-flutter',
image: 'public/images/unitask.png',
    name: 'Unitask (Flutter)',
    shortDesc: 'แอปจดและจัดลำดับงานที่ใช้ได้หลายแพลตฟอร์ม',
    fullDesc: 'แอป Flutter สำหรับเพิ่ม แก้ไข และจัดหมวดหมู่งาน พร้อมกำหนดระดับความสำคัญใน To-do list',
    category: 'mobile',
    tech: ['Flutter', 'Dart', 'Material Design'],
    gradient: 'linear-gradient(135deg, #00B4DB, #0083B0)',
    icon: '📱',
    features: ['เพิ่ม แก้ไข และลบงาน', 'แยกหมวดหมู่', 'กำหนดความสำคัญ', 'ใช้ได้หลายแพลตฟอร์ม']
  },
  {
    id: 'unitask-android',
image: 'public/images/unitask.png',
    name: 'Unitask (Android)',
    shortDesc: 'แอปจดงานบน Android ที่เขียนด้วย Kotlin',
    fullDesc: 'แอป Android สำหรับจดและจัดการงาน เก็บข้อมูลไว้ในเครื่อง และใช้หน้าตาตามแนวทาง Material Design',
    category: 'mobile',
    tech: ['Kotlin', 'Android SDK', 'Gradle'],
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    icon: '📲',
    features: ['พัฒนาสำหรับ Android โดยตรง', 'ใช้ Material Design', 'เก็บข้อมูลในเครื่อง', 'เพิ่มและจัดการงาน']
  },
  {
    id: 'flutter-mobile',
image: 'public/images/unitask.png',
    name: 'Flutter Mobile App',
    shortDesc: 'โปรเจกต์ทดลองทำแอปมือถือด้วย Flutter',
    fullDesc: 'งานทดลองสร้างหน้าจอและโครงสร้างแอปมือถือด้วย Flutter จากโค้ดชุดเดียว เพื่อให้ใช้ต่อได้หลายแพลตฟอร์ม',
    category: 'mobile',
    tech: ['Flutter', 'Dart'],
    gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    icon: '✨',
    features: ['ใช้โค้ดชุดเดียว', 'ออกแบบหน้าจอมือถือ', 'ปรับตามขนาดหน้าจอ']
  },
  // --- Automation & Bots ---
  {
    id: 'music-adblocker',
image: 'public/images/music-ad.png',
    name: 'Music Ad Blocker',
    shortDesc: 'ส่วนขยาย Chrome สำหรับลดโฆษณาบนเว็บฟังเพลง',
    fullDesc: 'ส่วนขยายเบราว์เซอร์ที่ตรวจและบล็อกส่วนโฆษณาบนเว็บฟังเพลงที่รองรับ เขียนตามมาตรฐาน Manifest V3',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #1DB954, #191414)',
    icon: '🎵',
    features: ['ตรวจและบล็อกโฆษณา', 'รองรับหลายเว็บไซต์', 'ทำงานเบา', 'ใช้ Manifest V3']
  },
  {
    id: 'fastwork-scraper',
image: 'public/images/bot.png',
    name: 'Fastwork Scraper',
    shortDesc: 'บอทเก็บข้อมูลงานจาก Fastwork.co',
    fullDesc: 'สคริปต์ Puppeteer ที่เปิดเว็บอัตโนมัติ ดึงรายการงานและข้อมูลฟรีแลนซ์ แล้วจัดข้อมูลให้นำไปใช้ต่อได้',
    category: 'automation',
    tech: ['Node.js', 'Puppeteer', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)',
    icon: '🕷️',
    features: ['เก็บรายการงาน', 'ดึงข้อมูลฟรีแลนซ์', 'ควบคุมเบราว์เซอร์อัตโนมัติ', 'ส่งออกข้อมูล']
  },
  {
    id: 'elearning-bot',
image: 'public/images/bot.png',
    name: 'E-Learning Automator',
    shortDesc: 'บอทช่วยทำขั้นตอนซ้ำในระบบ E-Learning',
    fullDesc: 'งานทดลองใช้ Selenium ควบคุมหน้า E-Learning เพื่อเลื่อนบทเรียนและติดตามความคืบหน้าตามขั้นตอนที่ตั้งไว้',
    category: 'automation',
    tech: ['Python', 'Browser Automation', 'Selenium'],
    gradient: 'linear-gradient(135deg, #2196F3, #21CBF3)',
    icon: '📚',
    features: ['เลื่อนบทเรียนตามลำดับ', 'จัดการขั้นตอนในแบบทดสอบ', 'ติดตามความคืบหน้า', 'ใช้กับหลายหน้าเว็บได้']
  },
  {
    id: 'auto-vpn',
image: 'public/images/network.png',
    name: 'Auto VPN App',
    shortDesc: 'เครื่องมือจัดการ VPN อัตโนมัติ',
    fullDesc: 'โปรแกรมบน Windows สำหรับเพิ่มโปรไฟล์ VPN เชื่อมต่ออัตโนมัติ และดูสถานะผ่านหน้าจอเดียว',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'VPN APIs'],
    gradient: 'linear-gradient(135deg, #0F2027, #2C5364)',
    icon: '🔐',
    features: ['จัดการ VPN', 'เชื่อมต่ออัตโนมัติ', 'มีหน้าจอควบคุม', 'เก็บหลายโปรไฟล์']
  },
  {
    id: 'vpn-dashboard',
image: 'public/images/network.png',
    name: 'Automation Dashboard',
    shortDesc: 'แดชบอร์ดรวมงาน VPN เบราว์เซอร์ และหน้าต่าง Windows',
    fullDesc: 'โปรแกรมหน้าเดียวสำหรับเปิดโปรไฟล์เบราว์เซอร์ จัดตำแหน่งหน้าต่างผ่าน win32gui และสั่งงานบนหน้าจอที่ต้องทำซ้ำ',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'win32gui', 'pyautogui'],
    gradient: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
    icon: '🖥️',
    features: ['จัดตำแหน่งหน้าต่าง', 'เปิดโปรไฟล์เบราว์เซอร์', 'ทำขั้นตอนซ้ำอัตโนมัติ', 'สั่งงานด้วยคีย์ลัด']
  },
  {
    id: 'edge-auto',
image: 'public/images/network.png',
    name: 'Edge Multi-Profile',
    shortDesc: 'เปิดโปรไฟล์ Edge และ Chrome หลายชุดด้วยคีย์ลัด',
    fullDesc: 'โปรแกรม Windows สำหรับเปิดหลายโปรไฟล์ด้วยคีย์ลัด ตั้งจุดคลิกอัตโนมัติ เก็บ log และย่อไว้ใน System Tray โดยแพ็กเป็นไฟล์ .exe ได้',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'pystray', 'PyInstaller'],
    gradient: 'linear-gradient(135deg, #0078D7, #00BCF2)',
    icon: '🌐',
    features: ['เปิดหลายโปรไฟล์', 'สั่งงานด้วยคีย์ลัด', 'ย่อไว้ใน System Tray', 'ตั้งจุดคลิกอัตโนมัติ', 'แพ็กเป็นไฟล์ .exe']
  },
  {
    id: 'auto-hotmail',
image: 'public/images/music-ad.png',
    name: 'Auto Sub Hotmail',
    shortDesc: 'ส่วนขยาย Chrome ช่วยคลิกขั้นตอนสมัคร Hotmail',
    fullDesc: 'ส่วนขยายที่ช่วยกดปุ่ม Create บนหน้า Sign-in และ Sign-up ของ Microsoft ตามขั้นตอนที่กำหนดไว้',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #FFB347, #FFCC33)',
    icon: '📧',
    features: ['คลิกปุ่มตามขั้นตอน', 'ช่วยกรอกฟอร์ม', 'ทำงานบน Chrome', 'ติดตั้งขนาดเล็ก']
  },
  {
    id: 'tiktok-cart',
image: 'public/images/tiktok-bot.png',
    name: 'TikTok Cart Bot',
    shortDesc: 'บอทช่วยจัดการสินค้าใน TikTok Shop',
    fullDesc: 'เครื่องมืออัตโนมัติสำหรับเพิ่มสินค้าเข้าตะกร้า จัดรายการสินค้า และดูแล Showcase บน TikTok Shop',
    category: 'automation',
    tech: ['Python', 'Selenium', 'Flask'],
    gradient: 'linear-gradient(135deg, #000000, #EE1D52)',
    icon: '🛍️',
    features: ['จัดการตะกร้า', 'ดูแล Showcase', 'จัดรายการสินค้า', 'เพิ่มสินค้าอัตโนมัติ']
  },
  {
    id: 'video-tinder',
image: 'public/images/2getr.png',
    name: 'Video Tinder',
    shortDesc: 'คัด แยก และตัดวิดีโอด้วยการปัด',
    fullDesc: 'โปรแกรมบนคอมสำหรับปัดเลือกว่าจะเก็บ ตัด หรือไม่ใช้วิดีโอ แล้วช่วยแยกไฟล์ รวมคลิป ตรวจภาพการ์ตูน และทำรายงานย้อนหลัง',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'OpenCV', 'FFmpeg', 'moviepy'],
    gradient: 'linear-gradient(135deg, #FF416C, #FF4B2B)',
    icon: '🎬',
    features: ['ปัดเพื่อคัดวิดีโอ', 'รวมหลายคลิป', 'ตัดช่วงที่เลือก', 'ตรวจภาพการ์ตูน', 'เก็บรายงานย้อนหลัง']
  },
  // --- Trading ---
  {
    id: 'grid-bot',
image: 'public/images/trading-bot.png',
    name: 'Grid Trading Bot v3',
    shortDesc: 'บอท Grid Trading ที่ดูแล Forex หลายคู่เงิน',
    fullDesc: 'บอทเทรดเวอร์ชัน 3 ที่รันกลยุทธ์ Grid กับหลายคู่เงินบน MetaTrader 5 พร้อมหน้าจอดูสถานะและไฟล์ตั้งค่าที่แก้ได้',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'JSON Config', 'Dashboard'],
    gradient: 'linear-gradient(135deg, #00b09b, #96c93d)',
    icon: '📊',
    features: ['ดูแลหลายคู่เงิน', 'ใช้กลยุทธ์ Grid', 'ดูสถานะแบบเรียลไทม์', 'ปรับค่าผ่านไฟล์', 'คำนวณขนาด lot อัตโนมัติ']
  },
  {
    id: 'smart-grid-ea',
image: 'public/images/trading-bot.png',
    name: 'Smart Grid EA',
    shortDesc: 'Expert Advisor ที่ดูข่าวและสภาพตลาดก่อนทำงาน',
    fullDesc: 'EA บน MetaTrader 5 ที่ใช้กลยุทธ์ Grid ร่วมกับตัวกรองข่าว เรดาร์ตลาด การแยกสภาพตลาด และหน้าเว็บดูสถานะ',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'Flask', 'News API'],
    gradient: 'linear-gradient(135deg, #F7971E, #FFD200)',
    icon: '📈',
    features: ['กลยุทธ์ Grid', 'กรองช่วงข่าว', 'ดูภาพรวมตลาด', 'แยกสภาพตลาด', 'แดชบอร์ดบนเว็บ']
  },
  // --- AI & ML ---
  {
    id: 'secretary-bot',
image: 'public/images/bot.png',
    name: 'น้องเลขา Bot',
    shortDesc: 'บอท Telegram ช่วยอ่านตารางและเตือนนัด',
    fullDesc: 'บอทผู้ช่วยส่วนตัวที่รับข้อความภาษาคน อ่านตารางจากรูปด้วย OCR หาเวลาว่าง และแจ้งเตือนก่อนนัด โดยใช้ Gemini ช่วยตีความข้อมูล',
    category: 'ai',
    tech: ['Python', 'Telegram Bot API', 'Google Gemini', 'SQLite'],
    gradient: 'linear-gradient(135deg, #0088cc, #29b6f6)',
    icon: '🤖',
    features: ['รับคำสั่งเป็นภาษาคน', 'อ่านตารางจากรูป', 'ช่วยหาเวลาว่าง', 'แจ้งเตือนอัตโนมัติ', 'ใช้ Gemini ช่วยตีความ']
  },
  {
    id: 'tiktok-analytics',
image: 'public/images/tiktok-bot.png',
    name: 'TikTok Analytics',
    shortDesc: 'แพลตฟอร์มวิเคราะห์ข้อมูล TikTok',
    fullDesc: 'เว็บรวมสถิติจาก TikTok เพื่อดูแนวโน้มของคอนเทนต์และติดตามผลผ่านแดชบอร์ด',
    category: 'ai',
    tech: ['Next.js', 'React', 'Data Analytics', 'Python'],
    gradient: 'linear-gradient(135deg, #000000, #25F4EE)',
    icon: '📱',
    features: ['สรุปข้อมูล', 'ดูสถิติบนแดชบอร์ด', 'วิเคราะห์แนวโน้ม', 'ติดตามผลของคอนเทนต์']
  },
  {
    id: 'google-apps-script',
image: 'public/images/bot.png',
    name: 'Google Apps Script',
    shortDesc: 'ชุดสคริปต์ช่วยลดงานซ้ำใน Google Workspace',
    fullDesc: 'รวม Google Apps Script ที่เชื่อม Sheets, Gmail และ Calendar เพื่อให้ขั้นตอนที่ต้องทำซ้ำทำงานเองตามเงื่อนไข',
    category: 'automation',
    tech: ['Google Apps Script', 'JavaScript', 'Google APIs'],
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    icon: '📋',
    features: ['จัดการข้อมูลใน Sheets', 'ส่งอีเมลอัตโนมัติ', 'เชื่อม Google Calendar', 'สร้างฟังก์ชันใช้เอง']
  },
  // --- Academic ---
  {
    id: 'onet-network',
image: 'public/images/network.png',
    name: 'ONet Network Sim',
    shortDesc: 'งานจำลองเครือข่าย Bio-SCION เทียบกับ TCP/IP',
    fullDesc: 'งานวิชา Computer Networks (CP352005) ที่จำลอง Bio-SCION ซึ่งรวม NDN, SCION ISD และ Capability-Based Security แล้วเทียบผลกับ TCP/IP ด้วยวิธี Monte Carlo',
    category: 'academic',
    tech: ['Python', 'matplotlib', 'numpy', 'Simulation'],
    gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)',
    icon: '🎓',
    features: ['จำลอง Bio-SCION', 'ทดลองด้วยวิธี Monte Carlo', 'เทียบผลกับ TCP/IP', 'สร้างกราฟสรุปผล']
  },
  // --- Verified workspace projects added from local project documentation ---
  {
    id: 'ai-limits-widget',
    name: 'AI Limits Widget',
    shortDesc: 'วิดเจ็ต Windows สำหรับดูโควตา Claude และ Codex แบบประหยัดแบต',
    fullDesc: 'วิดเจ็ตบนหน้า Desktop ของ Windows สำหรับดูโควตา Claude และ Codex โดยอ่านเฉพาะเปอร์เซ็นต์กับเวลารีเซ็ตจากข้อมูลในเครื่อง และไม่บังหน้าต่างที่กำลังใช้',
    category: 'automation',
    tech: ['PowerShell', 'Windows Script Host', 'JSON', 'Windows Desktop'],
    gradient: 'linear-gradient(135deg, #1b2a35, #4b6a58)',
    icon: '▦',
    status: 'เครื่องมือที่ทำไว้ใช้เอง',
    features: ['อัปเดตทุก 5 นาที', 'ดับเบิลคลิกเพื่อรีเฟรช', 'ไม่เก็บ token หรือข้อความสนทนา', 'ไม่มีแอนิเมชันที่ทำงานค้างไว้']
  },
  {
    id: 'routepulse-demo',
    name: 'RoutePulse Client Demo',
    shortDesc: 'ต้นแบบติดตามราคาตามเส้นทางและตรวจข้อมูลทุกชั่วโมง',
    fullDesc: 'เดโมภาษาไทยที่จำลองการเช็กราคา 560 เส้นทางต่อชั่วโมง รับและส่งออกไฟล์ CSV ดูสถานะตัวประมวลผล และส่งรายงาน โดยแยกข้อมูลทดลองออกจากระบบจริง',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'AWS S3', 'Drizzle ORM'],
    gradient: 'linear-gradient(135deg, #183a5a, #278a8c)',
    icon: '⌁',
    status: 'ต้นแบบสำหรับลูกค้า',
    features: ['จำลองการตรวจ 560 เส้นทางต่อชั่วโมง', 'รับและส่งออก CSV', 'ลองประมวลผลซ้ำได้เมื่อมีปัญหา', 'มีขั้นตอนยืนยันก่อนต่อระบบจริง']
  },
  {
    id: 'buildsure',
    name: 'BuildSure',
    shortDesc: 'ต้นแบบแดชบอร์ดติดตามงบและความคืบหน้างานก่อสร้าง',
    fullDesc: 'ต้นแบบแพลตฟอร์มสำหรับมองภาพรวมโครงการก่อสร้าง ทั้งงวดงาน ความคืบหน้า และจุดที่ต้องตรวจรับ เพื่อสื่อสารข้อมูลระหว่างเจ้าของงานและผู้เกี่ยวข้องให้ชัดขึ้น',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #0d2b47, #337194)',
    icon: '⌂',
    status: 'ต้นแบบผลิตภัณฑ์',
    features: ['ดูภาพรวมโครงการ', 'ติดตามความคืบหน้าเป็นงวดงาน', 'สรุปตัวเลขสำคัญในหน้าเดียว', 'เปิดอ่านหน้างานได้หลายขนาดจอ']
  },
  {
    id: 'dmd-sportday-load-test',
    name: 'DMD Sport Day Load Test',
    shortDesc: 'ชุดทดสอบโหลด k6 สำหรับระบบจัดงานกีฬา',
    fullDesc: 'ชุดทดสอบความพร้อมของ API สำหรับงาน DMD Sport Day 2026 มีตั้งแต่การเช็กเบื้องต้นไปจนถึงจำลองโหลดเต็ม พร้อมตรวจค่าก่อนเริ่มและสรุป P95, error rate กับจำนวน request',
    category: 'academic',
    tech: ['k6', 'JavaScript', 'JSON', 'Load Testing'],
    gradient: 'linear-gradient(135deg, #3b2349, #7c3c58)',
    icon: '↯',
    status: 'ชุดทดสอบระบบ',
    features: ['10 รูปแบบการทดสอบ', 'ตรวจความพร้อมก่อนยิงระบบจริง', 'สรุปผลเป็น Markdown และ JSON', 'แยกค่าที่ต้องยืนยันจาก endpoint จริง']
  },
  {
    id: 'pulsepoint-alert-demo',
    name: 'PulsePoint Event Alert',
    shortDesc: 'ต้นแบบแจ้งเตือนผู้ร่วมงานและเช็กอินด้วย QR',
    fullDesc: 'ต้นแบบสำหรับงานสัมมนา 150 คน มีการแจ้งเตือนบนเว็บและ LINE OA จุดเช็กอินด้วย QR หน้าส่งข้อความของแอดมิน และประวัติการส่ง โดยเก็บข้อมูลเดโมไว้ในเบราว์เซอร์',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Browser Notifications', 'LINE OA'],
    gradient: 'linear-gradient(135deg, #51253b, #c24d4d)',
    icon: '!',
    status: 'ต้นแบบสำหรับลูกค้า',
    features: ['แยกหน้าผู้ร่วมงานกับแอดมิน', 'จำลองจุดเช็กอินด้วย QR', 'เลือกกลุ่มผู้รับและระดับความสำคัญ', 'ทดสอบแจ้งเตือนในเบราว์เซอร์']
  },
  {
    id: 'ev-nation',
    name: 'EV Nation',
    shortDesc: 'ต้นแบบแพลตฟอร์มบริการรถ EV สำหรับค้นหาสถานีและวางแผนการเดินทาง',
    fullDesc: 'เดโมบริการรถ EV ตั้งแต่ค้นหาสถานี ดูช่วงเวลาว่าง จองคิว วางแผนทริป ไปจนถึงหน้ารายงานของพาร์ตเนอร์ โดยใช้ข้อมูลจำลองเพื่อให้ลองใช้งานได้ครบขั้นตอน',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Interactive Maps', 'Mock Data'],
    gradient: 'linear-gradient(135deg, #103e3f, #499879)',
    icon: '⚡',
    status: 'ต้นแบบสำหรับลูกค้า',
    features: ['ค้นหาสถานีชาร์จบนแผนที่', 'จำลองการจองคิว', 'วางแผนทริปในเมืองและทางไกล', 'แดชบอร์ดสำหรับพาร์ตเนอร์']
  },
  {
    id: 'forex-order-watcher',
    name: 'Forex Order Watcher',
    shortDesc: 'เครื่องมือเฝ้าดูออเดอร์ Forex โดยไม่ส่งคำสั่งเทรด',
    fullDesc: 'โปรแกรมอ่านออเดอร์ที่เปิดอยู่จาก MetaTrader 5 เทียบกับข้อมูลรอบก่อน คำนวณภาพรวมพอร์ต และแจ้งเมื่อออเดอร์เดิมปิดหรือหายไป พร้อมโหมดทดลองที่ไม่ต้องต่อบัญชีจริง',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'JSON', 'CLI'],
    gradient: 'linear-gradient(135deg, #17262f, #265b63)',
    icon: '◉',
    status: 'เครื่องมือเฝ้าดูสถานะ',
    features: ['อ่านออเดอร์จาก MT5', 'เก็บข้อมูลรอบล่าสุด', 'แจ้งเตือนออเดอร์ที่หายไป', 'ทดลองได้โดยไม่ต่อบัญชีจริง']
  },
  {
    id: 'gp-easy',
    name: 'GP Easy',
    shortDesc: 'เว็บคำนวณกำไรสุทธิสำหรับร้านค้า',
    fullDesc: 'เว็บเครื่องมือช่วยคำนวณกำไรสุทธิของร้านค้า เพื่อทำให้ต้นทุน ราคา และค่าใช้จ่ายที่กระจัดกระจาย กลายเป็นตัวเลขที่อ่านและตัดสินใจได้ง่ายขึ้น',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Calculation Logic'],
    gradient: 'linear-gradient(135deg, #453522, #aa7a32)',
    icon: '%',
    status: 'ต้นแบบผลิตภัณฑ์',
    features: ['กรอกต้นทุนและรายรับ', 'คำนวณกำไรสุทธิ', 'สรุปผลเพื่อเปรียบเทียบทางเลือก', 'ออกแบบเป็นเครื่องมือใช้งานเร็ว']
  },
  {
    id: 'loongmordek-auto-sheets',
    name: 'Loongmordek Auto Sheets',
    shortDesc: 'แปลงคอนเทนต์จาก AI เป็นคิวโพสต์ 4 แพลตฟอร์มใน Google Sheets',
    fullDesc: 'Google Apps Script ที่รับคอนเทนต์หนึ่งชุดแล้วแยกเป็นแถวสำหรับ Facebook, Instagram, TikTok และ YouTube Shorts โดยทุกโพสต์ต้องรอคนตรวจและอนุมัติก่อน',
    category: 'automation',
    tech: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'Google Drive'],
    gradient: 'linear-gradient(135deg, #195b48, #4da071)',
    icon: '↳',
    status: 'ระบบอัตโนมัติสำหรับลูกค้า',
    features: ['แยกคอนเทนต์เป็น 4 แพลตฟอร์ม', 'กำหนดเวลาและช่วงห่างของโพสต์', 'ต้องตรวจงานก่อนส่งต่อ', 'ทดสอบตัวแยกข้อความแยกจาก Sheet ได้']
  },
  {
    id: 'thai-rag-api',
    name: 'Thai RAG API',
    shortDesc: 'API ต้นแบบสำหรับถามตอบจากฐานความรู้ภาษาไทยบนเครื่อง',
    fullDesc: 'ต้นแบบ FastAPI ที่ใช้ Ollama ตอบคำถามจากเอกสารภาษาไทย ค้นข้อความที่เกี่ยวข้องด้วย embedding และเก็บคลังความรู้ใน SQLite พร้อมหน้าทดลอง API',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'Ollama', 'bge-m3', 'SQLite'],
    gradient: 'linear-gradient(135deg, #292447, #6650a4)',
    icon: '⌘',
    status: 'ต้นแบบ AI ที่รันในเครื่อง',
    features: ['ถามตอบจากฐานความรู้ภาษาไทย', 'เพิ่มข้อความเข้าคลังผ่าน API', 'ค้นข้อมูลที่ความหมายใกล้กัน', 'รันในเครื่องโดยไม่ส่งข้อมูลขึ้น Cloud']
  },
  {
    id: 'forma-database',
    name: 'FormA Database System',
    shortDesc: 'ระบบบันทึกข้อมูล Form A บน Excel พร้อมฟอร์มค้นหาและฐานข้อมูล',
    fullDesc: 'ระบบ Excel VBA สำหรับบันทึกและค้นหาข้อมูล Form A เช่น เครื่องจักร ประเภท และผู้รับผิดชอบ โดยใช้ Python ช่วยสร้างไฟล์ .xlsm และโมดูล VBA ที่จำเป็น',
    category: 'automation',
    tech: ['Excel VBA', 'Python', 'XLSM', 'Windows Forms'],
    gradient: 'linear-gradient(135deg, #174c34, #2d8d5f)',
    icon: '▤',
    status: 'เครื่องมือใช้งานในธุรกิจ',
    features: ['ฟอร์มกรอกข้อมูลพร้อมตรวจความถูกต้อง', 'ค้นหาและเรียกดูข้อมูลเดิม', 'บันทึกข้อมูลไว้ใน Workbook', 'สร้างไฟล์ที่เปิดใช้ Macro ได้จาก Source']
  },
  {
    id: 'irfa-research',
    name: 'IRFA — Research Fund Assistant',
    shortDesc: 'ข้อเสนอโครงงานผู้ช่วยอัจฉริยะสำหรับการขอทุนวิจัย มข.',
    fullDesc: 'โครงงานสัมมนาด้าน Computer Science ที่วางระบบช่วยนักวิจัยรุ่นใหม่ค้นหาทุน ตรวจคุณสมบัติ ถามตอบระเบียบพร้อมอ้างอิง และตรวจความครบของข้อเสนอ โดยผสาน RAG กับข้อมูลเชิงโครงสร้าง',
    category: 'academic',
    tech: ['RAG', 'Information Extraction', 'Semantic Matching', 'Knowledge Graph'],
    gradient: 'linear-gradient(135deg, #2d3551, #687db5)',
    icon: '∴',
    status: 'แนวคิดโครงงาน — ยังไม่เริ่มพัฒนา',
    features: ['จับคู่ทุนกับคุณสมบัติผู้สมัคร', 'ตอบคำถามพร้อมอ้างอิงเอกสาร', 'ตรวจข้อเสนอเทียบเงื่อนไขทุน', 'วางวิธีวัดผลและตรวจคำตอบ']
  },
  {
    id: 'morse-code-learning',
    name: 'Morse Code Learning App',
    shortDesc: 'เว็บฝึก Morse Code พร้อมบัญชีผู้ใช้และสถิติการฝึก',
    fullDesc: 'เว็บฝึก Morse Code ที่สมัครสมาชิกได้ เลือกโหมดฝึก สุ่มตัวอักษรหรือคำผ่าน API และเก็บทั้งความแม่นยำกับความเร็วของแต่ละคน',
    category: 'web',
    tech: ['Next.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT'],
    gradient: 'linear-gradient(135deg, #20252f, #546271)',
    icon: '·–',
    status: 'เว็บฝึกเรียนรู้แบบ Full-stack',
    features: ['สมัครและเข้าสู่ระบบ', 'เลือกโหมดฝึก Morse', 'บันทึกความแม่นยำและ WPM', 'เก็บสถิติและค่าของแต่ละคน']
  },
  {
    id: 'spring-boot-coursework',
    name: 'Java & Spring Boot Coursework',
    shortDesc: 'รวมงานวิชา Software Design ตั้งแต่ OOP ไปจนถึงฐานข้อมูล',
    fullDesc: 'งานจากวิชา CP353002 ที่ฝึก Java OOP, Spring Boot REST API, Bean Scope, Thymeleaf, ความสัมพันธ์ในฐานข้อมูล และ Transaction ผ่านโจทย์ย่อยหลายแบบ',
    category: 'academic',
    tech: ['Java', 'Spring Boot', 'Maven', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #3b2c28, #8a4e35)',
    icon: '☕',
    status: 'รวมงานรายวิชา',
    features: ['Java OOP และคำนวณค่าขนส่ง', 'REST API และการแบ่งชั้นของระบบ', 'Thymeleaf MVC และเชื่อมฐานข้อมูล', 'ความสัมพันธ์ One-to-many กับ @Transactional และ BigDecimal']
  }
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
  Supabase: 'backend service ที่มีฐานข้อมูล, authentication และ real-time API พร้อมใช้',
  Prisma: 'ORM ที่ทำให้โค้ดฝั่งแอปคุยกับฐานข้อมูลผ่าน type-safe model',
  Zustand: 'state manager ขนาดเล็กสำหรับแชร์สถานะระหว่าง component ของ React',
  'Express.js': 'web framework บน Node.js สำหรับสร้าง API และจัดการ request จาก frontend',
  'Node.js': 'runtime สำหรับรัน JavaScript ฝั่ง server หรือทำงานอัตโนมัตินอกเบราว์เซอร์',
  PostgreSQL: 'ฐานข้อมูลเชิงสัมพันธ์สำหรับเก็บข้อมูลที่ต้องเชื่อมโยงกันและใช้งานหลายผู้ใช้',
  JWT: 'token ที่ใช้ยืนยันตัวตนระหว่าง frontend และ API โดยไม่ต้องเก็บ session ไว้ในทุก request',
  Java: 'ภาษาสำหรับพัฒนาระบบฝั่ง server ที่เน้นโครงสร้างและความทนทานของโปรแกรม',
  'Spring Boot': 'framework Java สำหรับสร้าง web application และ API ด้วยโครงสร้างมาตรฐาน',
  Maven: 'เครื่องมือ build และจัดการ dependency ของโปรเจกต์ Java',
  Docker: 'เครื่องมือแยก environment ของแอปและ database ให้เปิดซ้ำได้เหมือนกันทุกเครื่อง',
  'Claude API': 'API ของโมเดลภาษา ใช้ให้ระบบตีความและตอบงานภาษาอย่างมีบริบท',
  FastAPI: 'framework Python สำหรับทำ API ที่เร็ว มี validation และเอกสาร endpoint อัตโนมัติ',
  Python: 'ภาษาหลักสำหรับ automation, data processing, AI prototype และ desktop utility หลายงานในชุดนี้',
  Flutter: 'framework สำหรับสร้างแอปมือถือจาก codebase เดียวและส่งออกได้หลายแพลตฟอร์ม',
  Dart: 'ภาษาที่ใช้พัฒนาแอป Flutter',
  Kotlin: 'ภาษาหลักสำหรับแอป Android แบบ native',
  'Android SDK': 'ชุดเครื่องมือและ API สำหรับเข้าถึงความสามารถของ Android',
  Gradle: 'ระบบ build และจัดการ dependency ของโปรเจกต์ Android',
  'Material Design': 'แนวทางออกแบบ UI ของ Google ที่ช่วยให้หน้าจอมือถือมีรูปแบบคุ้นเคย',
  'Web Technologies': 'พื้นฐานการทำเว็บทั้งโครงสร้าง เนื้อหา หน้าตา และ interaction บนเบราว์เซอร์',
  'HTML/CSS': 'HTML กำหนดโครงสร้างเนื้อหา ส่วน CSS กำหนดการจัดวาง หน้าตา และการรองรับหลายขนาดจอ',
  JavaScript: 'ภาษาหลักของเว็บ ใช้ทำ interaction, automation และ script บนแพลตฟอร์มต่าง ๆ',
  'Chrome Extension': 'ส่วนขยายเบราว์เซอร์ที่เพิ่มความสามารถเฉพาะหน้าเว็บหรือ workflow การท่องเว็บ',
  'Manifest V3': 'มาตรฐานส่วนขยาย Chrome รุ่นปัจจุบันที่กำหนดสิทธิ์และ lifecycle ของ extension',
  Puppeteer: 'เครื่องมือควบคุม Chromium ด้วยโค้ด เหมาะกับงาน browser automation และ scraping ที่ได้รับอนุญาต',
  Selenium: 'เครื่องมือทดสอบและควบคุมเว็บเบราว์เซอร์ข้ามหลาย browser',
  'Browser Automation': 'แนวทางให้โปรแกรมทำขั้นตอนบนเว็บที่ทำซ้ำแทนผู้ใช้ภายใต้ขอบเขตที่อนุญาต',
  'VPN APIs': 'ส่วนเชื่อมต่อสำหรับอ่านหรือควบคุมสถานะการเชื่อมต่อ VPN ผ่านโปรแกรม',
  win32gui: 'โมดูล Python สำหรับอ่านและควบคุมหน้าต่างของ Windows',
  pyautogui: 'ไลบรารี Python สำหรับสั่งเมาส์และคีย์บอร์ดตาม workflow บนหน้าจอ',
  pystray: 'ไลบรารีสำหรับทำ icon และเมนูของโปรแกรมใน system tray',
  PyInstaller: 'เครื่องมือแพ็กโปรแกรม Python ให้เปิดใช้งานบน Windows ได้โดยไม่ต้องติดตั้ง Python แยก',
  Tkinter: 'ชุด UI ของ Python สำหรับทำโปรแกรม desktop ขนาดเล็กบน Windows',
  OpenCV: 'ไลบรารีประมวลผลภาพและวิดีโอ เช่น ตรวจจับหรือวิเคราะห์เฟรม',
  FFmpeg: 'เครื่องมือจัดการไฟล์วิดีโอและเสียง เช่น ตัด รวม แปลง และเข้ารหัส',
  moviepy: 'ไลบรารี Python ที่ช่วยประกอบ workflow ตัดต่อวิดีโอด้วยโค้ด',
  'MetaTrader 5': 'แพลตฟอร์มเทรดและ API สำหรับอ่านข้อมูลตลาดหรือสถานะคำสั่งซื้อขาย',
  'News API': 'แหล่งข้อมูลข่าวที่ระบบเรียกมาใช้เป็นเงื่อนไขหรือข้อมูลประกอบการตัดสินใจ',
  Flask: 'web framework Python ขนาดเบาสำหรับทำ dashboard หรือ API',
  'Telegram Bot API': 'API สำหรับรับส่งข้อความและทำ workflow ผ่าน Telegram bot',
  'Google Gemini': 'โมเดลภาษา/มัลติโหมดที่ใช้ตีความข้อความและภาพตาม workflow ของระบบ',
  SQLite: 'ฐานข้อมูลไฟล์เดียว เหมาะกับ prototype และแอปที่อยากติดตั้งง่าย',
  'Google Apps Script': 'JavaScript บน Google Workspace สำหรับเชื่อม Sheets, Gmail, Drive และงานตามเวลา',
  'Google Sheets': 'ตารางออนไลน์ที่ใช้เป็นทั้งหน้าจอทำงานและฐานข้อมูลเบื้องต้นใน workflow ทีม',
  'Google Drive': 'ที่เก็บไฟล์ของ Google สำหรับอ้างอิงหรือจัดการ asset ใน workflow',
  'AWS S3': 'object storage สำหรับเก็บไฟล์และรายงานที่ต้องทนทานและเรียกดูภายหลังได้',
  'Drizzle ORM': 'ORM สำหรับ TypeScript ที่ช่วยกำหนด schema และ query ฐานข้อมูลในแบบ type-safe',
  k6: 'เครื่องมือ load testing สำหรับจำลองผู้ใช้จำนวนมากและวัดความทนของ API',
  'Browser Notifications': 'Web API สำหรับแสดงการแจ้งเตือนจากเว็บให้ผู้ใช้เห็น',
  'LINE OA': 'ช่องทาง LINE Official Account สำหรับสื่อสารหรือแจ้งเตือนผู้ใช้ผ่าน LINE',
  'Interactive Maps': 'ส่วนติดต่อแผนที่ที่ให้ผู้ใช้เลือกตำแหน่งและสำรวจข้อมูลเชิงพื้นที่',
  'Mock Data': 'ข้อมูลจำลองสำหรับทดสอบ flow และสื่อสารแนวคิดโดยไม่แตะข้อมูลจริง',
  'Data Analytics': 'กระบวนการสรุปและตีความข้อมูลเพื่อมองแนวโน้มและตัวชี้วัดที่ใช้งานได้',
  'Google APIs': 'API สำหรับเชื่อมบริการต่าง ๆ ของ Google เข้ากับระบบหรือ automation',
  'Neural Network': 'โมเดล machine learning ที่เรียนรู้รูปแบบจากข้อมูลตัวอย่าง',
  ML: 'เทคนิคให้โปรแกรมเรียนรู้ pattern จากข้อมูลเพื่อใช้ทำนายหรือจัดประเภท',
  'AI/ML': 'งานที่ใช้โมเดล AI หรือ machine learning เป็นส่วนหนึ่งของประสบการณ์ผู้ใช้',
  JSON: 'รูปแบบข้อมูลน้ำหนักเบาที่ใช้เก็บ config, exchange data และ snapshot ระหว่างระบบ',
  CLI: 'รูปแบบการใช้งานผ่าน Command Line เหมาะกับงานที่ต้องสั่งรันเองหรือตั้งให้ทำงานเป็นรอบ',
  'Calculation Logic': 'ตรรกะคำนวณที่แปลงข้อมูลธุรกิจเป็นตัวเลขสำหรับตัดสินใจ',
  Ollama: 'runtime สำหรับรันโมเดลภาษาและ embedding บนเครื่องของผู้ใช้',
  'bge-m3': 'embedding model สำหรับแปลงข้อความเป็นเวกเตอร์เพื่อค้นหาความหมายที่ใกล้เคียง',
  'Excel VBA': 'ภาษา macro ใน Excel สำหรับทำฟอร์ม ปุ่ม และ workflow บน workbook',
  XLSM: 'รูปแบบไฟล์ Excel ที่บรรจุ macro VBA ได้',
  'Windows Forms': 'หน้าต่างฟอร์มบน Windows สำหรับรับข้อมูลและค้นหาข้อมูลในเครื่องมือ desktop',
  RAG: 'วิธีให้โมเดลดึงข้อมูลจากคลังความรู้ก่อนตอบ เพื่อลดการเดาและอ้างอิงแหล่งที่มาได้',
  'Information Extraction': 'การสกัดข้อมูลสำคัญจากเอกสารให้กลายเป็นฟิลด์ที่ค้นหาและเปรียบเทียบได้',
  'Semantic Matching': 'การจับคู่สิ่งที่ความหมายใกล้กัน เช่น โปรไฟล์งานวิจัยกับทุนที่เหมาะ',
  'Knowledge Graph': 'โครงสร้างข้อมูลแบบความสัมพันธ์ ช่วยเชื่อม entity และเงื่อนไขที่เกี่ยวข้อง',
  matplotlib: 'ไลบรารี Python สำหรับสร้างกราฟและภาพสรุปผลการวิเคราะห์',
  numpy: 'ไลบรารีคำนวณตัวเลขและ array ของ Python สำหรับงาน simulation และ data analysis',
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

  const selectedIds = ['2getr', 'opt-pos', 'grid-bot'];
  const selected = selectedIds
    .map(id => projects.find(project => project.id === id))
    .filter(Boolean);

  stage.innerHTML = selected.map((project, index) => `
    <article class="featured-case reveal">
      <div class="featured-visual">
        <span class="featured-number">CASE 0${index + 1}</span>
        ${project.image
          ? `<img src="${project.image}" alt="หน้าจอโปรเจกต์ ${project.name}" loading="lazy">`
          : `<div class="featured-placeholder" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div>`}
      </div>
      <div class="featured-info">
        <span class="project-type">${categories[project.category]?.label || project.category}</span>
        <h3>${project.name}</h3>
        <p>${project.fullDesc}</p>
        <div class="featured-tech">${project.tech.slice(0, 5).map(tech => `<span>${tech}</span>`).join('')}</div>
        <button class="case-open view-details-btn" type="button" data-id="${project.id}">Open case</button>
      </div>
    </article>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal" data-category="${p.category}" data-id="${p.id}" style="--card-order: ${i}">
      <div class="project-card-header" tabindex="0" role="button" aria-label="ดูรายละเอียด ${p.name}">
        ${p.image
          ? `<img src="${p.image}" alt="ภาพโปรเจกต์ ${p.name}" loading="lazy">`
          : `<span class="project-card-icon" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>`}
        <span class="project-card-category">${categories[p.category]?.label || p.category}</span>
        <span class="project-card-index">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${p.name}</h3>
        <p class="project-card-desc">${p.shortDesc}</p>
        <div class="project-card-tech">
          ${p.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.tech.length > 4 ? `<span class="tech-tag">+${p.tech.length - 4}</span>` : ''}
        </div>
      </div>
      <div class="project-card-footer">
        <button class="view-details-btn" type="button" data-id="${p.id}">View details</button>
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

  content.innerHTML = `
    <div class="modal-header" style="background: ${project.image ? `linear-gradient(to bottom, rgba(10, 10, 26, 0.2), rgba(10, 10, 26, 0.8)), url('${project.image}') no-repeat center/cover` : project.gradient}">
      <button class="modal-close" type="button" aria-label="ปิดรายละเอียดโปรเจกต์">&times;</button>
      ${project.image ? '' : `<div class="modal-icon">${project.name.slice(0, 2).toUpperCase()}</div>`}
      <h2 class="modal-title">${project.name}</h2>
      <div class="modal-meta"><span class="modal-category-badge">${categories[project.category]?.label || project.category}</span>${project.status ? `<span class="modal-status-badge">${project.status}</span>` : ''}</div>
    </div>
    <div class="modal-body">
      <h4 class="modal-section-title">งานนี้คืออะไร</h4>
      <p class="modal-description">${project.fullDesc}</p>
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
    </div>
  `;

  lastFocusedElement = document.activeElement;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => content.querySelector('.modal-close')?.focus());
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
