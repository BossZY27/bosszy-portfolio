export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "trading-bot",
    title: "Automated Trading Bot",
    category: "Automation & Bots",
    description:
      "ระบบเทรดอัตโนมัติที่วิเคราะห์ตลาดและเปิด/ปิดออเดอร์แบบ real-time พร้อมระบบ risk management และ logging ครบวงจร",
    tech: ["Python", "REST API", "WebSocket", "Pandas"],
    image: "/images/trading-bot.png",
  },
  {
    id: "tiktok-automation",
    title: "TikTok Automation Script",
    category: "Automation & Bots",
    description:
      "สคริปต์อัตโนมัติสำหรับจัดการ TikTok ทั้งการโพสต์ วิเคราะห์ engagement และเพิ่ม reach อย่างเป็นระบบ",
    tech: ["Python", "Selenium", "Browser Automation"],
    image: "/images/tiktok-bot.png",
    githubUrl: "https://github.com/BossZY27/tiktok-analytics",
  },
  {
    id: "morse-code",
    title: "Morse Code Platform",
    category: "Web Development",
    description:
      "แพลตฟอร์มเว็บสำหรับเรียนรู้และแปลงรหัส Morse แบบ interactive พร้อมระบบเสียงและ visual feedback",
    tech: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
    image: "/images/morse-code.png",
    githubUrl: "https://github.com/BossZY27/morsecode",
  },
  {
    id: "mlbb-tierlist",
    title: "MLBB Tier List",
    category: "Web Development",
    description:
      "เว็บไซต์ Tier List สำหรับเกม Mobile Legends: Bang Bang แสดงข้อมูล Meta Hero พร้อมระบบ filter และ search",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/mlbb-tier.png",
  },
];
