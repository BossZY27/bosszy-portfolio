// ============================================
// PROJECT DATA
// ============================================
const projects = [
  // --- Web Applications ---
  {
    id: '2getr',
    name: '2Getr',
    shortDesc: 'แพลตฟอร์ม Social Community สำหรับเชื่อมต่อผู้คน',
    fullDesc: 'Full-stack social/community web application ที่มีระบบ Real-time features, User Authentication, Content Sharing และ Community Management ครบวงจร',
    category: 'web',
    tech: ['Next.js 15', 'React 19', 'Supabase', 'Prisma', 'TypeScript', 'Zustand'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: '👥',
    features: ['Real-time messaging', 'User authentication', 'Content sharing', 'Community management']
  },
  {
    id: 'opt-pos',
    name: 'Opt-POS',
    shortDesc: 'ระบบ Point of Sale สำหรับร้านค้าปลีก',
    fullDesc: 'ระบบ POS ที่ออกแบบมาสำหรับธุรกิจร้านค้าปลีก พร้อมระบบจัดการสินค้าคงคลัง การติดตามยอดขาย และรายงานสรุป',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: '🛒',
    features: ['Inventory management', 'Sales tracking', 'Receipt printing', 'Reports & analytics']
  },
  {
    id: 'next2-pos',
    name: 'Next2-POS',
    shortDesc: 'ระบบ POS เวอร์ชัน 2 ที่พัฒนาต่อยอด',
    fullDesc: 'POS System เวอร์ชันที่ 2 ที่ปรับปรุงประสิทธิภาพและเพิ่มฟีเจอร์ใหม่จากเวอร์ชันแรก',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    icon: '💳',
    features: ['Enhanced UI/UX', 'Multi-branch support', 'Real-time sync', 'Advanced reporting']
  },
  {
    id: 'opt-loyalty',
    name: 'Opt-Loyalty',
    shortDesc: 'ระบบ CRM จัดการ Loyalty Program',
    fullDesc: 'ระบบบริหารจัดการโปรแกรมสะสมแต้มและ Customer Loyalty สำหรับธุรกิจ พร้อมติดตามพฤติกรรมลูกค้า',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: '⭐',
    features: ['Points system', 'Customer analytics', 'Reward management', 'Campaign tools']
  },
  {
    id: 'telesales',
    name: 'TeleSales CRM',
    shortDesc: 'ระบบ CRM สำหรับทีม TeleSales พร้อม VoIP',
    fullDesc: 'ระบบ CRM ครบวงจร สำหรับทีม TeleSales มีระบบจัดการ Lead, VoIP/3CX Click-to-call, Call Logging, KPI Dashboard และ Excel Report Export รองรับหลาย Role (Admin/Manager/Agent)',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', '3CX VoIP'],
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    icon: '📞',
    features: ['Lead management', 'VoIP integration', 'KPI dashboards', 'Multi-role access', 'Excel export']
  },
  {
    id: 'ai-shop',
    name: 'AI Shop Team',
    shortDesc: 'แพลตฟอร์มจัดการร้านค้าด้วย AI',
    fullDesc: 'ระบบบริหารจัดการร้านค้าที่ขับเคลื่อนด้วย AI ช่วยวิเคราะห์และจัดการทีมงานอย่างมีประสิทธิภาพ',
    category: 'web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    icon: '🏪',
    features: ['AI-powered insights', 'Team management', 'Inventory optimization', 'Sales forecasting']
  },
  {
    id: 'ai-office',
    name: 'AI Team Office',
    shortDesc: 'ระบบ Multi-Agent AI จัดการงานอัตโนมัติ',
    fullDesc: 'Full-stack web app ที่มี AI Agents หลายตัว (Researcher, Analyst, Developer) ทำงานร่วมกัน ระบบจะ Route งานไปยัง Agent ที่เหมาะสมผ่าน Keyword Matching โดยใช้ Claude API',
    category: 'ai',
    tech: ['Express.js', 'Node.js', 'Claude API', 'HTML/CSS/JS'],
    gradient: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
    icon: '🤖',
    features: ['Multi-agent system', 'Task routing', 'Claude AI integration', 'Real-time collaboration']
  },
  {
    id: 'mlbb-meta',
    name: 'MLBB Meta Analyzer',
    shortDesc: 'เว็บวิเคราะห์ Meta เกม Mobile Legends',
    fullDesc: 'Full-stack Gaming Analytics Web App สำหรับวิเคราะห์ Meta ของเกม Mobile Legends: Bang Bang มี Backend API แยกจาก Frontend',
    category: 'web',
    tech: ['Next.js 16', 'React 19', 'Express.js', 'Prisma', 'SQLite'],
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
    icon: '🎮',
    features: ['Hero tier lists', 'Win rate analysis', 'Meta tracking', 'Build recommendations']
  },
  {
    id: 'laos-lottery',
    name: 'Lao Lottery AI',
    shortDesc: 'ระบบ AI ทำนายหวยลาว ด้วย Neural Network',
    fullDesc: 'ระบบทำนายหวยลาวที่ใช้ AI/ML พร้อม Frequency Analysis, Neural Network Model และ Heuristic Validation',
    category: 'ai',
    tech: ['FastAPI', 'Python', 'Neural Network', 'ML'],
    gradient: 'linear-gradient(135deg, #F7971E, #FFD200)',
    icon: '🎰',
    features: ['AI prediction model', 'Frequency analysis', 'Neural network', 'Historical data analysis']
  },
  {
    id: 'ai-cartoon',
    name: 'AI Cartoon',
    shortDesc: 'แอปพลิเคชัน AI สำหรับสร้าง Cartoon',
    fullDesc: 'Web application ที่ใช้ AI ในการสร้างและแปลงรูปภาพเป็นสไตล์ Cartoon',
    category: 'ai',
    tech: ['Next.js', 'React', 'TypeScript', 'AI/ML'],
    gradient: 'linear-gradient(135deg, #E44D26, #F16529)',
    icon: '🎨',
    features: ['Image to cartoon conversion', 'Multiple art styles', 'Real-time preview', 'High-quality output']
  },
  {
    id: 'web-schedule',
    name: 'Web Schedule Nara',
    shortDesc: 'ระบบจัดการตารางเวลา',
    fullDesc: 'ระบบจัดการตารางเวลาสำหรับ Nara พร้อมอินเทอร์เฟซที่ใช้งานง่าย',
    category: 'web',
    tech: ['Web Technologies', 'JavaScript', 'HTML/CSS'],
    gradient: 'linear-gradient(135deg, #36D1DC, #5B86E5)',
    icon: '📅',
    features: ['Schedule management', 'Calendar view', 'Notifications', 'User-friendly interface']
  },
  // --- Mobile Apps ---
  {
    id: 'unitask-flutter',
    name: 'Unitask (Flutter)',
    shortDesc: 'แอปจัดการงาน Cross-Platform ด้วย Flutter',
    fullDesc: 'Task Management App แบบ Cross-platform สร้างด้วย Flutter สำหรับจัดการงานและ To-do list',
    category: 'mobile',
    tech: ['Flutter', 'Dart', 'Material Design'],
    gradient: 'linear-gradient(135deg, #00B4DB, #0083B0)',
    icon: '📱',
    features: ['Task CRUD', 'Categories', 'Priority levels', 'Cross-platform']
  },
  {
    id: 'unitask-android',
    name: 'Unitask (Android)',
    shortDesc: 'แอปจัดการงาน Native Android ด้วย Kotlin',
    fullDesc: 'Task Management App แบบ Native Android สร้างด้วย Kotlin และ Android SDK',
    category: 'mobile',
    tech: ['Kotlin', 'Android SDK', 'Gradle'],
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    icon: '📲',
    features: ['Native performance', 'Material Design', 'Local storage', 'Task management']
  },
  {
    id: 'flutter-mobile',
    name: 'Flutter Mobile App',
    shortDesc: 'แอปมือถือ Cross-Platform',
    fullDesc: 'โปรเจกต์แอปมือถือที่พัฒนาด้วย Flutter Framework',
    category: 'mobile',
    tech: ['Flutter', 'Dart'],
    gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    icon: '✨',
    features: ['Cross-platform', 'Modern UI', 'Responsive design']
  },
  // --- Automation & Bots ---
  {
    id: 'music-adblocker',
    name: 'Music Ad Blocker',
    shortDesc: 'Chrome Extension บล็อกโฆษณาเว็บเพลง',
    fullDesc: 'Browser Extension สำหรับบล็อกโฆษณาบนเว็บไซต์ Music Streaming ต่างๆ พัฒนาด้วย Manifest V3',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #1DB954, #191414)',
    icon: '🎵',
    features: ['Ad blocking', 'Multiple platforms', 'Lightweight', 'Manifest V3']
  },
  {
    id: 'fastwork-scraper',
    name: 'Fastwork Scraper',
    shortDesc: 'Bot scrape ข้อมูลงานจาก Fastwork.co',
    fullDesc: 'Web Scraping Bot สำหรับดึงข้อมูลรายการงานและข้อมูล Freelancer จากเว็บ Fastwork.co ใช้ Puppeteer',
    category: 'automation',
    tech: ['Node.js', 'Puppeteer', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)',
    icon: '🕷️',
    features: ['Job listing scraping', 'Freelancer data extraction', 'Automated browsing', 'Data export']
  },
  {
    id: 'elearning-bot',
    name: 'E-Learning Automator',
    shortDesc: 'Bot เรียน E-Learning อัตโนมัติ',
    fullDesc: 'Automation Bot ที่ช่วยเลื่อนผ่านบทเรียน E-Learning ออนไลน์อัตโนมัติ',
    category: 'automation',
    tech: ['Python', 'Browser Automation', 'Selenium'],
    gradient: 'linear-gradient(135deg, #2196F3, #21CBF3)',
    icon: '📚',
    features: ['Auto course progression', 'Quiz handling', 'Progress tracking', 'Multi-platform']
  },
  {
    id: 'auto-vpn',
    name: 'Auto VPN App',
    shortDesc: 'เครื่องมือจัดการ VPN อัตโนมัติ',
    fullDesc: 'Desktop Tool สำหรับจัดการ VPN Connections อัตโนมัติ พร้อม GUI ที่ใช้งานง่าย',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'VPN APIs'],
    gradient: 'linear-gradient(135deg, #0F2027, #2C5364)',
    icon: '🔐',
    features: ['VPN management', 'Auto-connect', 'GUI interface', 'Profile management']
  },
  {
    id: 'vpn-dashboard',
    name: 'Automation Dashboard',
    shortDesc: 'แดชบอร์ดควบคุม VPN และ Window Management',
    fullDesc: 'Desktop Dashboard สำหรับจัดการ Browser Profiles, Windows ผ่าน win32gui และ Automate งานซ้ำๆ',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'win32gui', 'pyautogui'],
    gradient: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
    icon: '🖥️',
    features: ['Window management', 'Browser profiles', 'Task automation', 'Hotkey support']
  },
  {
    id: 'edge-auto',
    name: 'Edge Multi-Profile',
    shortDesc: 'เปิด Browser หลาย Profile พร้อม Hotkey',
    fullDesc: 'Browser Multi-Profile Launcher v9 — เปิดหลาย Edge/Chrome Profiles ด้วย Hotkeys, Auto-click, Logging และ System Tray พร้อม Package เป็น .exe',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'pystray', 'PyInstaller'],
    gradient: 'linear-gradient(135deg, #0078D7, #00BCF2)',
    icon: '🌐',
    features: ['Multi-profile launch', 'Hotkey support', 'System tray', 'Auto-click', 'Packaged as .exe']
  },
  {
    id: 'auto-hotmail',
    name: 'Auto Sub Hotmail',
    shortDesc: 'Chrome Extension สำหรับ Auto-click สมัครอีเมล',
    fullDesc: 'Chrome Extension ที่ Auto-click ปุ่ม Create บนหน้า Microsoft Sign-in/Signup สำหรับการสร้างบัญชี Hotmail อัตโนมัติ',
    category: 'automation',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    gradient: 'linear-gradient(135deg, #FFB347, #FFCC33)',
    icon: '📧',
    features: ['Auto-click', 'Form automation', 'Chrome extension', 'Lightweight']
  },
  {
    id: 'tiktok-cart',
    name: 'TikTok Cart Bot',
    shortDesc: 'Automation สำหรับ TikTok Shopping',
    fullDesc: 'Bot อัตโนมัติสำหรับจัดการตะกร้าสินค้าบน TikTok Shop พร้อม Showcase Management',
    category: 'automation',
    tech: ['Python', 'Selenium', 'Flask'],
    gradient: 'linear-gradient(135deg, #000000, #EE1D52)',
    icon: '🛍️',
    features: ['Cart automation', 'Showcase management', 'Product listing', 'Auto-add to cart']
  },
  {
    id: 'video-tinder',
    name: 'Video Tinder',
    shortDesc: 'จัดการวิดีโอแบบ Swipe — Pass/Fail/Cut',
    fullDesc: 'Desktop App สำหรับจัดการวิดีโอแบบ Swipe ทำได้ทั้ง Pass/Fail/Cut พร้อม Auto-sorting, Video Merging, Smart Cutting, Cartoon Detection และ Audit Reports',
    category: 'automation',
    tech: ['Python', 'Tkinter', 'OpenCV', 'FFmpeg', 'moviepy'],
    gradient: 'linear-gradient(135deg, #FF416C, #FF4B2B)',
    icon: '🎬',
    features: ['Swipe to sort', 'Video merging', 'Smart cutting', 'Cartoon detection', 'Audit reports']
  },
  // --- Trading ---
  {
    id: 'grid-bot',
    name: 'Grid Trading Bot v3',
    shortDesc: 'Multi-pair Grid Trading Bot สำหรับ Forex',
    fullDesc: 'Automated Grid Trading Bot เวอร์ชัน 3 สำหรับเทรด Forex หลายคู่เงินพร้อมกัน ทำงานบน MetaTrader 5 พร้อม Dashboard แสดงผล',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'JSON Config', 'Dashboard'],
    gradient: 'linear-gradient(135deg, #00b09b, #96c93d)',
    icon: '📊',
    features: ['Multi-pair trading', 'Grid strategy', 'Real-time dashboard', 'Configurable settings', 'Auto lot sizing']
  },
  {
    id: 'smart-grid-ea',
    name: 'Smart Grid EA',
    shortDesc: 'Expert Advisor พร้อม News Filter & Radar',
    fullDesc: 'Advanced Expert Advisor ที่ใช้ Grid Trading Logic บน MetaTrader 5 พร้อม News Filter, Market Radar, Regime Detection และ Web Dashboard',
    category: 'trading',
    tech: ['Python', 'MetaTrader 5', 'Flask', 'News API'],
    gradient: 'linear-gradient(135deg, #F7971E, #FFD200)',
    icon: '📈',
    features: ['Grid trading', 'News filter', 'Market radar', 'Regime detection', 'Web dashboard']
  },
  // --- AI & ML ---
  {
    id: 'secretary-bot',
    name: 'น้องเลขา Bot',
    shortDesc: 'Telegram Bot ผู้ช่วยจัดตาราง พร้อม AI & OCR',
    fullDesc: 'Telegram Bot ที่ทำหน้าที่เป็นผู้ช่วยจัดตารางส่วนตัว รองรับ Natural Language, OCR จากรูปภาพ, วิเคราะห์เวลาว่าง, แจ้งเตือนอัตโนมัติ (สรุปรายวัน 7AM + แจ้งเตือนก่อนนัด 15 นาที) ขับเคลื่อนด้วย Gemini AI',
    category: 'ai',
    tech: ['Python', 'Telegram Bot API', 'Google Gemini', 'SQLite'],
    gradient: 'linear-gradient(135deg, #0088cc, #29b6f6)',
    icon: '🤖',
    features: ['Natural language input', 'OCR schedule extraction', 'Free time analysis', 'Auto notifications', 'Gemini AI powered']
  },
  {
    id: 'tiktok-analytics',
    name: 'TikTok Analytics',
    shortDesc: 'แพลตฟอร์มวิเคราะห์ข้อมูล TikTok',
    fullDesc: 'ระบบวิเคราะห์ข้อมูลจาก TikTok พร้อม Dashboard แสดงผลสถิติต่างๆ',
    category: 'ai',
    tech: ['Next.js', 'React', 'Data Analytics', 'Python'],
    gradient: 'linear-gradient(135deg, #000000, #25F4EE)',
    icon: '📱',
    features: ['Data analytics', 'Statistics dashboard', 'Trend analysis', 'Performance tracking']
  },
  {
    id: 'google-apps-script',
    name: 'Google Apps Script',
    shortDesc: 'Automation Scripts สำหรับ Google Workspace',
    fullDesc: 'ชุด Google Apps Script สำหรับ Automate งานต่างๆ บน Google Workspace เช่น Google Sheets, Gmail และ Google Calendar',
    category: 'automation',
    tech: ['Google Apps Script', 'JavaScript', 'Google APIs'],
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    icon: '📋',
    features: ['Sheet automation', 'Email automation', 'Calendar integration', 'Custom functions']
  },
  // --- Academic ---
  {
    id: 'onet-network',
    name: 'ONet Network Sim',
    shortDesc: 'จำลอง Bio-SCION Network Architecture',
    fullDesc: 'โปรเจกต์วิชา Computer Networks (CP352005) — จำลอง Bio-SCION Architecture (NDN + SCION ISD + Capability-Based Security) เทียบกับ TCP/IP ด้วย Monte-Carlo Simulations พร้อมกราฟเปรียบเทียบ',
    category: 'academic',
    tech: ['Python', 'matplotlib', 'numpy', 'Simulation'],
    gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)',
    icon: '🎓',
    features: ['Bio-SCION simulation', 'Monte-Carlo methods', 'TCP/IP comparison', 'Publication-quality graphs']
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

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initParticles();
  renderProjects();
  initFilterTabs();
  initModal();
  initScrollAnimations();
  initCounterAnimation();
  initNavbar();
  initSmoothScroll();
  updateProjectCount();
  initSpotlightEffect();
  initTiltEffect();
  initScrollProgressBar();
  initRippleEffect();
  initLaserTrailCursor();
  init3DParallaxShapes();
  initChatbot();
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
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <div class="project-card fade-in-up" data-category="${p.category}" data-id="${p.id}" style="animation-delay: ${i * 0.05}s">
      <div class="project-card-header" style="background: ${p.gradient}">
        <span class="project-card-icon">${p.icon}</span>
        <span class="project-card-category">${categories[p.category]?.icon || ''} ${categories[p.category]?.label || p.category}</span>
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
        <button class="view-details-btn" data-id="${p.id}">View Details →</button>
      </div>
    </div>
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

  // Close modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('.modal-close')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(project) {
  const overlay = document.getElementById('project-modal');
  const content = document.getElementById('modal-inner');
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="modal-header" style="background: ${project.gradient}">
      <button class="modal-close">&times;</button>
      <div class="modal-icon">${project.icon}</div>
      <h2 class="modal-title">${project.name}</h2>
      <span class="modal-category-badge">${categories[project.category]?.icon || ''} ${categories[project.category]?.label || project.category}</span>
    </div>
    <div class="modal-body">
      <p class="modal-description">${project.fullDesc}</p>
      <h4 class="modal-section-title">🛠️ Technologies</h4>
      <div class="modal-tech-list">
        ${project.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
      </div>
      ${project.features ? `
        <h4 class="modal-section-title" style="margin-top: 24px">✨ Key Features</h4>
        <ul class="modal-features">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
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

  document.querySelectorAll('.fade-in-up, .section-header, .stat-card, .skill-card, .contact-link').forEach(el => {
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
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('active');
        toggle.classList.remove('active');
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
  const statEl = document.querySelector('[data-target]');
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

function initChatbot() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatMessages = document.getElementById('chat-messages');
  const quickRepliesContainer = document.getElementById('chat-quick-replies');
  const inputForm = document.getElementById('chat-input-form');
  const inputEl = document.getElementById('chat-input');

  if (!toggleBtn || !chatWindow || !chatMessages || !inputForm || !inputEl) return;

  // Toggle chat window
  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
      inputEl.focus();
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  }

  appendBotMessage(
    `ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม (บอส - Phakin Meksuwan) ครับ! 🤖<br><br>ผมเขียนบอทตัวนี้ขึ้นมาเพื่อช่วยค้นหาโปรเจกต์และทักษะของผมโดยอัตโนมัติ คุณอยากดูผลงานด้านไหน เลือกกดปุ่มด้านล่างหรือพิมพ์ถามคีย์เวิร์ดได้เลยครับ!`
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
        text: `สวัสดีครับ! พิมพ์คำค้นหาภาษาที่อยากดูได้เลย เช่น Python, React, Automation หรือคลิกเลือกปุ่มด้านล่างเพื่อสืบค้นข้อมูลได้เลยครับ 😊`,
        replies: []
      };
    }

    // Contacts
    if (q.includes('contact') || q.includes('ติดต่อ') || q.includes('email') || q.includes('อีเมล') || q.includes('gmail') || q.includes('github')) {
      return {
        text: `คุณสามารถติดต่อผมได้ผ่านช่องทางเหล่านี้เลยครับ:<br><br>📧 **Email:** <a href="mailto:bossboss27.b3@gmail.com" style="color: #06b6d4; text-decoration: underline; font-weight: 500;">bossboss27.b3@gmail.com</a><br>💻 **GitHub:** <a href="https://github.com/BossZY27" target="_blank" style="color: #06b6d4; text-decoration: underline; font-weight: 500;">github.com/BossZY27</a>`,
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
      
      let html = `นี่คือผลงานเด่นในหมวดหมู่ **${catTitle}** (${filtered.length} โปรเจกต์) ครับ:<br><br>`;
      filtered.forEach(p => {
        html += `• **${p.name}** - ${p.shortDesc}<br>`;
        html += `<button class="chat-project-btn" onclick="triggerProjectModal('${p.id}')">🔍 ดูรายละเอียดโปรเจกต์ ${p.name}</button><br>`;
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
        let html = `นี่คือผลงานที่พัฒนาด้วย **${primaryTech.toUpperCase()}** (${filtered.length} โปรเจกต์) ครับ:<br><br>`;
        filtered.forEach(p => {
          html += `• **${p.name}** - ${p.shortDesc}<br>`;
          html += `<button class="chat-project-btn" onclick="triggerProjectModal('${p.id}')">🔍 ดูรายละเอียดโปรเจกต์ ${p.name}</button><br>`;
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
        let html = `**โปรเจกต์: ${p.name}** (${categories[p.category]?.label || p.category})<br><br>`;
        html += `📝 **คำอธิบาย:** ${p.fullDesc}<br><br>`;
        html += `🛠️ **เทคโนโลยี:** ${p.tech.join(', ')}<br><br>`;
        html += `<button class="chat-project-btn" onclick="triggerProjectModal('${p.id}')">🔍 เปิดหน้าต่างดูรายละเอียดโปรเจกต์</button>`;
        
        return {
          text: html,
          replies: []
        };
      }
    }

    // Fallback
    return {
      text: `ขออภัยด้วยครับ ผมยังไม่พบโปรเจกต์ที่สอดคล้องกับคำค้นหาของคุณ 😅<br><br>ลองพิมพ์คำค้นหาประเภท:<br>• **หมวดหมู่:** Web, Mobile, Automation, Trading, AI<br>• **เทคโนโลยี:** Python, React, Next.js, Flutter, OpenCV, MT5<br>• **ชื่อโปรเจกต์:** น้องเลขา, 2getr, opt-pos, video tinder<br><br>หรือกดเลือกปุ่มด่วนยอดนิยมด้านล่างนี้ได้เลยนะครับ 👇`,
      replies: []
    };
  }
}
