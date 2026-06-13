export interface ChatNode {
  id: string;
  message: string;
  choices?: { label: string; nextId: string; url?: string }[];
}

export const chatTree: Record<string, ChatNode> = {
  root: {
    id: "root",
    message:
      "สวัสดีครับ! ผม Pakin's Assistant 🤖\nเจ้าของ Portfolio นี้เป็นนักศึกษา ปี 2 สาขา Computer Science ม.ขอนแก่น (KKU) ครับ\n\nมีอะไรอยากรู้ เลือกได้เลย!",
    choices: [
      { label: "🤖 Automation & Bots", nextId: "cat_automation" },
      { label: "🌐 Web Development", nextId: "cat_web" },
      { label: "📱 Mobile & Extensions", nextId: "cat_mobile" },
      { label: "👤 Profile & Skills", nextId: "cat_profile" },
    ],
  },

  // ── Automation & Bots ──────────────────────────────────────────
  cat_automation: {
    id: "cat_automation",
    message:
      "🤖 Automation & Bots\nผลงานด้าน Automation ทั้ง Trading, Social Media และ Desktop Tools",
    choices: [
      { label: "📈 Automated Trading Bot", nextId: "proj_trading" },
      { label: "🎵 TikTok Automation", nextId: "proj_tiktok" },
      { label: "🔒 Auto VPN App", nextId: "proj_vpn" },
      { label: "🖥️ EdgeAutoOpen", nextId: "proj_edge" },
      { label: "📥 Program Downloader", nextId: "proj_downloader" },
      { label: "🔙 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_trading: {
    id: "proj_trading",
    message:
      "📈 Automated Trading Bot\n\nระบบเทรดอัตโนมัติที่วิเคราะห์ตลาดและเปิด/ปิดออเดอร์แบบ real-time\n\n• Tech: Python, REST API, WebSocket, Pandas\n• ฟีเจอร์: Real-time analysis, Risk management\n• ระบบ Logging + Monitoring ครบวงจร\n• ออกแบบ Architecture ให้รองรับหลาย strategy\n\n🔒 โปรเจกต์นี้เป็น Private Repository",
    choices: [
      { label: "🔙 กลับหมวด Automation", nextId: "cat_automation" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_tiktok: {
    id: "proj_tiktok",
    message:
      "🎵 TikTok Automation Script\n\nสคริปต์จัดการ TikTok อัตโนมัติ ทั้งโพสต์, วิเคราะห์ engagement และเพิ่ม reach\n\n• Tech: Python, Selenium, Browser Automation\n• ฟีเจอร์: Auto post, Engagement analytics\n• รองรับ scheduling และ batch operations\n• ระบบ anti-detection เพื่อความปลอดภัย",
    choices: [
      { label: "💻 View on GitHub", nextId: "proj_tiktok", url: "https://github.com/BossZY27/tiktok-analytics" },
      { label: "🔙 กลับหมวด Automation", nextId: "cat_automation" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_vpn: {
    id: "proj_vpn",
    message:
      "🔒 Auto VPN App\n\nBot จัดการเชื่อมต่อ VPN อัตโนมัติ พร้อม .exe\n\n• Tech: Python, PyInstaller\n• ระบบ Logging + Config ผ่าน settings.json\n• มี .exe พร้อมใช้งาน",
    choices: [
      { label: "🔙 กลับหมวด Automation", nextId: "cat_automation" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_edge: {
    id: "proj_edge",
    message:
      "🖥️ EdgeAutoOpen\n\nโปรแกรมเปิด Microsoft Edge อัตโนมัติตามเงื่อนไข\n\n• Tech: Python, PyInstaller\n• มี .exe พร้อมใช้งาน\n• Build ด้วย spec file",
    choices: [
      { label: "🔙 กลับหมวด Automation", nextId: "cat_automation" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_downloader: {
    id: "proj_downloader",
    message:
      "📥 Program Downloader\n\nโปรแกรมดาวน์โหลดและจัดการโปรแกรมอัตโนมัติ พร้อมระบบตรวจรหัส\n\n• Tech: Python, PyInstaller\n• Auto download + Verification system\n• มี .exe พร้อมใช้งาน",
    choices: [
      { label: "🔙 กลับหมวด Automation", nextId: "cat_automation" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },

  // ── Web Development ────────────────────────────────────────────
  cat_web: {
    id: "cat_web",
    message:
      "🌐 Web Development\nผลงานเว็บ Full-stack ทั้ง Platform และ Application",
    choices: [
      { label: "🔤 Morse Code Platform", nextId: "proj_morse" },
      { label: "⚔️ MLBB Tier List", nextId: "proj_mlbb" },
      { label: "📅 Web Schedule Nara", nextId: "proj_schedule" },
      { label: "🌐 ProNetwork Simulation", nextId: "proj_pronetwork" },
      { label: "🔙 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_morse: {
    id: "proj_morse",
    message:
      "🔤 Morse Code Platform\n\nแพลตฟอร์มเว็บสำหรับเรียนรู้และแปลงรหัส Morse แบบ interactive\n\n• Tech: React, TypeScript, Web Audio API, Tailwind CSS\n• ฟีเจอร์: แปลง text ↔ morse แบบ real-time\n• มีระบบเสียงและ visual feedback\n• UI/UX ออกแบบมาให้ใช้งานง่าย",
    choices: [
      { label: "💻 View on GitHub", nextId: "proj_morse", url: "https://github.com/BossZY27/morsecode" },
      { label: "🔙 กลับหมวด Web", nextId: "cat_web" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_mlbb: {
    id: "proj_mlbb",
    message:
      "⚔️ MLBB Tier List\n\nเว็บ Tier List สำหรับ Mobile Legends: Bang Bang\n\n• Tech: React, Node.js, Express, MongoDB\n• ฟีเจอร์: Hero data, Meta analysis, Filter & Search\n• Full-stack application\n• ข้อมูลอัปเดตตาม patch ล่าสุด\n\n🚧 กำลังพัฒนา — ลิงก์จะอัปเดตเร็ว ๆ นี้",
    choices: [
      { label: "🔙 กลับหมวด Web", nextId: "cat_web" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_schedule: {
    id: "proj_schedule",
    message:
      "📅 Web Schedule Nara\n\nเว็บจัดการตารางเวลา deploy บน Vercel\n\n• Tech: Next.js, Node.js, Vercel\n• Production-ready\n• มี API routes สำหรับ CRUD",
    choices: [
      { label: "🔙 กลับหมวด Web", nextId: "cat_web" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_pronetwork: {
    id: "proj_pronetwork",
    message:
      "🌐 ProNetwork Simulation\n\nระบบ Simulation เครือข่ายพร้อม Architecture spec\n\n• Tech: Python, System Design\n• Architecture spec + Implementation plan\n• O-NET simulation model",
    choices: [
      { label: "🔙 กลับหมวด Web", nextId: "cat_web" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },

  // ── Mobile & Extensions ────────────────────────────────────────
  cat_mobile: {
    id: "cat_mobile",
    message:
      "📱 Mobile & Extensions\nแอปมือถือและ Browser Extensions",
    choices: [
      { label: "📋 Unitask (Flutter)", nextId: "proj_unitask" },
      { label: "📱 Project Mobile (Kotlin)", nextId: "proj_kotlin" },
      { label: "🎵 MusicAdBlocker", nextId: "proj_music" },
      { label: "🌐 ProNetwork Extension", nextId: "proj_pronet_ext" },
      { label: "📧 Auto Sub HotMail", nextId: "proj_hotmail" },
      { label: "🔙 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_unitask: {
    id: "proj_unitask",
    message:
      "📋 Unitask - Flutter\n\nแอป Cross-platform จัดการ Task\n\n• Tech: Flutter, Dart\n• รองรับ Android + iOS\n• UI/UX ใช้งานง่าย",
    choices: [
      { label: "🔙 กลับหมวด Mobile", nextId: "cat_mobile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_kotlin: {
    id: "proj_kotlin",
    message:
      "📱 Project Mobile - Kotlin\n\nแอป Native Android\n\n• Tech: Kotlin, Android SDK\n• Material Design UI\n• Native performance",
    choices: [
      { label: "🔙 กลับหมวด Mobile", nextId: "cat_mobile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_music: {
    id: "proj_music",
    message:
      "🎵 MusicAdBlocker\n\nChrome Extension บล็อกโฆษณาบนเว็บฟังเพลง\n\n• Tech: JavaScript, Chrome Extensions API\n• Content Script injection + Popup UI\n• ใช้งานจริงบน Chrome ได้",
    choices: [
      { label: "🔙 กลับหมวด Mobile", nextId: "cat_mobile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_pronet_ext: {
    id: "proj_pronet_ext",
    message:
      "🌐 ProNetwork Extension\n\nBrowser Extension จัดการเครือข่าย\n\n• Tech: JavaScript, Chrome Extensions API\n• Background + Content Script\n• Network simulation patterns",
    choices: [
      { label: "🔙 กลับหมวด Mobile", nextId: "cat_mobile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  proj_hotmail: {
    id: "proj_hotmail",
    message:
      "📧 Auto Sub HotMail\n\nExtension auto-click สำหรับ Hotmail\n\n• Tech: JavaScript, Chrome Extension\n• Auto-click + Form automation\n• ประหยัดเวลาทำงานซ้ำ ๆ",
    choices: [
      { label: "🔙 กลับหมวด Mobile", nextId: "cat_mobile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },

  // ── Profile & Skills ───────────────────────────────────────────
  cat_profile: {
    id: "cat_profile",
    message:
      "👤 Profile & Skills\nข้อมูลเกี่ยวกับ Pakin และทักษะต่าง ๆ",
    choices: [
      { label: "🎓 เกี่ยวกับ Pakin", nextId: "profile_about" },
      { label: "💻 Technical Skills", nextId: "profile_skills" },
      { label: "🛠️ Tools & Tech", nextId: "profile_tools" },
      { label: "📞 ติดต่อ / Contact", nextId: "profile_contact" },
      { label: "🔙 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  profile_about: {
    id: "profile_about",
    message:
      "🎓 เกี่ยวกับ Pakin Meksuwan (Boss)\n\n• นักศึกษาปี 2 สาขา Computer Science\n• มหาวิทยาลัยขอนแก่น (KKU)\n• สนใจด้าน AI-driven Development, Automated Trading และ Creative Writing\n• ชอบสร้าง tools ที่แก้ปัญหาจริง ๆ ตั้งแต่ Bot, Web App ไปจนถึง Browser Extension\n• มีผลงานมากกว่า 10 โปรเจกต์\n• เขียนนิยายบน readAwrite / MEB",
    choices: [
      { label: "🔙 กลับหมวด Profile", nextId: "cat_profile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  profile_skills: {
    id: "profile_skills",
    message:
      "💻 Technical Skills\n\n• Languages: Python, JavaScript/TypeScript, Kotlin, Dart\n• Frontend: React, Next.js, Tailwind CSS\n• Backend: Node.js, Express, MongoDB\n• Mobile: Flutter, Android (Kotlin)\n• Browser Extensions: Chrome Extensions API\n• Desktop: Python + PyInstaller\n• Automation: Selenium, WebSocket, REST API",
    choices: [
      { label: "🔙 กลับหมวด Profile", nextId: "cat_profile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  profile_tools: {
    id: "profile_tools",
    message:
      "🛠️ Tools & Technologies\n\n• IDE: VS Code, Android Studio\n• Version Control: Git, GitHub\n• Deployment: Vercel, PyInstaller\n• Design: Figma\n• AI Tools: Claude, ChatGPT\n• OS: Windows 11",
    choices: [
      { label: "🔙 กลับหมวด Profile", nextId: "cat_profile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
  profile_contact: {
    id: "profile_contact",
    message:
      "📞 Contact\n\nสนใจร่วมงานหรือมีคำถาม? ติดต่อ Pakin ได้เลยครับ!\n\n• GitHub: BossZY27\n• Email: pakin.meksuwan@email.com\n• Novel: readAwrite / MEB",
    choices: [
      { label: "💻 GitHub", nextId: "profile_contact", url: "https://github.com/BossZY27" },
      { label: "📧 Send Email", nextId: "profile_contact", url: "mailto:pakin.meksuwan@email.com" },
      { label: "🔙 กลับหมวด Profile", nextId: "cat_profile" },
      { label: "🏠 กลับเมนูหลัก", nextId: "root" },
    ],
  },
};
