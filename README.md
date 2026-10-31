# Phakin Meksuwan (BossZY) — Developer Portfolio

พอร์ตโฟลิโอรวมงานที่ผมทำ ตั้งแต่เว็บแอป ระบบอัตโนมัติ บอทเทรด แอปมือถือ ไปจนถึงงานเรียน จัดแขวนเป็นราวเสื้อ หนึ่งราวคือหนึ่งหมวด หนึ่งตัวคือหนึ่งงาน

**เว็บจริง:** [bosszy-portfolio.vercel.app](https://bosszy-portfolio.vercel.app)

---

## เกี่ยวกับผม

* **ชื่อ:** ภาคิน เมฆสุวรรณ (Phakin Meksuwan / BossZY)
* **กำลังเรียน:** วิทยาการคอมพิวเตอร์ ชั้นปีที่ 2 มหาวิทยาลัยขอนแก่น
* **งานที่ทำบ่อย:** เว็บแบบ full-stack, ระบบอัตโนมัติบนเดสก์ท็อปและเบราว์เซอร์, บอทเทรดบน MetaTrader 5, งานที่ต่อ API ของโมเดลภาษา และงานเว็บลูกค้าบน WordPress

---

## เครื่องมือที่ใช้

* **ภาษา:** Python, JavaScript, TypeScript, Kotlin, Dart, Java, C
* **Frontend:** React, Next.js, Vue, Tailwind CSS, HTML, CSS
* **Backend:** Node.js, Express.js, FastAPI, Flask, Spring Boot
* **มือถือ:** Flutter, Android (Kotlin)
* **ฐานข้อมูลและบริการ:** PostgreSQL, SQLite, Supabase, Prisma, Drizzle ORM, Vercel, Cloudflare Workers
* **ระบบอัตโนมัติ:** Puppeteer, Playwright, Chrome Extension (Manifest V3), Google Apps Script, uiautomator2, pyautogui
* **เว็บลูกค้า:** WordPress, PHP, Elementor, Yoast SEO, Google Analytics 4
* **AI:** Claude API, Google Gemini, Ollama, RAG, MCP

---

## ในเว็บมีอะไร

เว็บมีผลงาน 54 ชิ้น แบ่งเป็น 7 ราว: NEW DROPS (งานใหม่ล่าสุด), WEB, MOBILE, AUTOMATION, TRADING, AI และ SCHOOL

* **บนราว:** ชี้เมาส์ที่เสื้อตัวไหน ตัวนั้นจะหมุนมาด้านหน้า แล้วบอกชื่อ สถานะ และสิ่งที่ทำได้ บนมือถือราวเลื่อนแนวนอนได้ ตัวที่อยู่ตรงกลางจะหันหน้าเอง
* **คลิกเปิดงาน:** ด้านหน้าเสื้อพิมพ์ชื่องาน ด้านหลังพิมพ์ tech stack ป้ายที่ห้อยข้างเสื้อบอกว่าแต่ละเทคทำหน้าที่อะไร ส่วนป้ายคำอธิบายเริ่มจาก "ทำอะไรได้บ้าง"
* **VIEW AS LIST:** ดูทุกงานเป็นรายการ ค้นได้จากชื่อ เทค สถานะ หรือความสามารถ

ทรงเสื้อบอกหมวดของงาน: WEB เป็นเสื้อยืด, MOBILE เป็นฮู้ด, AUTOMATION เป็นเชิ้ต, TRADING เป็นเสื้อกล้าม, AI เป็นเสื้อแขนยาว, SCHOOL เป็นแจ็กเก็ต varsity

---

## หมายเหตุเรื่องภาพและลิงก์

* เสื้อทุกตัววาดด้วย SVG จากสีของงาน ไม่ใช่ภาพหน้าจอของงานจริง
* งานที่เป็นต้นแบบหรือใช้ข้อมูลจำลองเขียนกำกับไว้ในสถานะของงาน
* ใส่ลิงก์เฉพาะงานที่มีลิงก์สาธารณะจริงเท่านั้น งานของลูกค้าที่ยังไม่ได้ขออนุญาตจะไม่มีลิงก์ และงานลูกค้าที่เพิ่มรอบ ต.ค. 2569 ไม่ใส่ชื่อแบรนด์

---

## โครงสร้างเว็บ

หน้า production เป็น static HTML, CSS และ JavaScript (ES modules) ที่ deploy ผ่าน Vercel ไม่มีขั้น build

| ไฟล์ | หน้าที่ |
| --- | --- |
| `index.html` | โครงหน้า, SEO, SVG defs ที่เสื้อทุกตัวใช้ร่วมกัน, dialog ของหน้าดูงาน About Contact และรายการ |
| `css/tokens.css` | สี ฟอนต์ ขนาด และจังหวะ animation |
| `css/base.css` | header, ปุ่ม, แถบวิ่งด้านล่าง, reduced motion |
| `css/rack.css` | แท็บ ราว เสื้อ และ caption |
| `css/detail.css` | หน้าดูงาน ป้ายเทค ปุ่ม FRONT/BACK และป้ายคำอธิบาย |
| `css/panels.css` | ลิ้นชัก About/Contact และหน้ารายการ |
| `js/data/projects.js` | ข้อมูลงานทั้งหมด แก้ไฟล์นี้ตรง ๆ |
| `js/data/tech-notes.js` | คำอธิบายของแต่ละเทค |
| `js/data/racks.js` | รายการราว และทรงเสื้อของแต่ละหมวด |
| `js/garment.js` | วาดเสื้อ SVG ด้านหน้า ด้านหลัง และด้านข้าง |
| `js/rack.js` | ราว การหมุนเสื้อ และการเลื่อนบนมือถือ |
| `js/detail.js` | หน้าดูงาน การยกเสื้อออกจากราว การเปลี่ยนงาน และการสลับหน้าหลัง |
| `js/panels.js` | About, Contact และหน้ารายการพร้อมช่องค้นหา |
| `js/main.js` | ต่อทุกส่วนเข้าด้วยกัน และเก็บสถานะใน URL (`#/web`, `#/web/2getr`) |

---

## รันในเครื่อง

```bash
python -m http.server 4173 --bind 127.0.0.1
```

แล้วเปิด `http://127.0.0.1:4173/` (ต้องรันผ่านเซิร์ฟเวอร์ เพราะ ES modules เปิดจากไฟล์ตรง ๆ ไม่ได้)

---

## การเข้าถึง

* ใช้คีย์บอร์ดได้ทั้งหน้า: ลูกศรซ้ายขวาเลือกเสื้อบนราวและเลือกแท็บ, Enter เปิดงาน, ลูกศรเปลี่ยนงานในหน้าดูงาน, Escape ปิด แล้วโฟกัสกลับไปที่เสื้อตัวเดิม
* หน้าดูงานและลิ้นชักเป็น `<dialog>` แบบ modal จึงโฟกัสอยู่ข้างในจนกว่าจะปิด
* เว็บอ่านค่า `prefers-reduced-motion` ของระบบ ถ้าเปิดไว้จะปิด animation และแถบวิ่ง

---

ดูงานเพิ่มเติมได้ที่ [GitHub](https://github.com/BossZY27)
