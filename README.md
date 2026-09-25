# Phakin Meksuwan (BossZY) — Developer Portfolio

พอร์ตโฟลิโอรวมงานที่ผมทำ ตั้งแต่เว็บแอป ระบบอัตโนมัติ บอทเทรด แอปมือถือ ไปจนถึงงานเรียน

**เว็บจริง:** [bosszy-portfolio.vercel.app](https://bosszy-portfolio.vercel.app)

---

## เกี่ยวกับผม

* **ชื่อ:** ภาคิน เมฆสุวรรณ (Phakin Meksuwan / BossZY)
* **กำลังเรียน:** วิทยาการคอมพิวเตอร์ ชั้นปีที่ 2 มหาวิทยาลัยขอนแก่น
* **งานที่ทำบ่อย:** เว็บแบบ full-stack, ระบบอัตโนมัติบนเดสก์ท็อปและเบราว์เซอร์, บอทเทรดบน MetaTrader 5 และงานที่ต่อ API ของโมเดลภาษา

---

## เครื่องมือที่ใช้

* **ภาษา:** Python, JavaScript, TypeScript, Kotlin, Dart, Java
* **Frontend:** React, Next.js, Tailwind CSS, HTML, CSS, vanilla JS
* **Backend:** Node.js, Express.js, FastAPI, Flask, Spring Boot
* **มือถือ:** Flutter, Android (Kotlin)
* **ฐานข้อมูลและบริการ:** PostgreSQL, SQLite, Supabase, Prisma, Drizzle ORM, Vercel, Cloudflare Workers
* **ระบบอัตโนมัติ:** Puppeteer, Playwright, Chrome Extension (Manifest V3), Google Apps Script, PyInstaller, win32gui, pyautogui, uiautomator2
* **บอทเทรด:** MetaTrader 5, กลยุทธ์แบบ grid, ตัวกรองข่าว, dashboard ดูสถานะระหว่างรัน
* **AI:** Claude API, Google Gemini, Ollama กับโมเดลที่รันในเครื่อง, RAG แบบง่าย

---

## ผลงานในเว็บ (43 งาน)

คลังงานในเว็บแบ่งเป็นหมวด Web, Mobile, Automation, Trading, AI และ Academic ทุกงานเปิดดูได้ว่าแก้ปัญหาอะไร ทำอะไรได้ และเทคแต่ละตัวรับหน้าที่ไหนในระบบ งานที่เป็นต้นแบบหรือใช้ข้อมูลจำลองจะติดป้ายบอกไว้บนการ์ดตั้งแต่หน้าคลัง

ตัวอย่างงานที่หยิบมาเล่าละเอียดในหน้าแรก:

1. **2Getr** — เว็บสั่งอาหารแบบรวมออเดอร์ของคนในตึกเดียวกัน แล้วหารค่าส่ง มีแชตของตึก กระเป๋าเงิน และของรางวัล
2. **Franchise OS** — ระบบบริหารแฟรนไชส์และครัวกลางของร้านทองม้วน ขึ้นใช้งานจริงกับลูกค้าแล้ว
3. **Grid Trading Bot v3** — บอทวางไม้เป็นตารางที่ต่อกับ MetaTrader 5 ตั้งค่าผ่านไฟล์ JSON และมี dashboard ดูสถานะ

งานอื่นที่อยู่ในคลัง เช่น Opt-Loyalty (จองร้านและสะสมแต้ม), TeleSales CRM (ต่อกับระบบโทร 3CX), Thai RAG API (ถามตอบภาษาไทยจากเอกสาร รันในเครื่องทั้งหมด), E-Receipt Reconciliation Bot (กระทบยอดใบเสร็จจากอีเมลลง Google Sheets) และ Morse Code Learning App (เว็บฝึกรหัสมอร์สพร้อมกระดานคะแนน)

---

## หมายเหตุเรื่องภาพและลิงก์

* ภาพประกอบในหน้าแรกเป็นภาพที่วาดขึ้น ไม่ใช่ภาพหน้าจอจริง และมีป้ายกำกับไว้บนภาพ
* การ์ดในคลังงานใช้ภาพที่วาดด้วย CSS ตามหมวดงาน ไม่ได้ใช้ภาพถ่ายหน้าจอ
* ใส่ลิงก์เฉพาะงานที่มีลิงก์สาธารณะจริงเท่านั้น งานของลูกค้าที่ยังไม่ได้ขออนุญาตเปิดเผย จะไม่มีลิงก์

---

## โครงสร้างเว็บ

หน้า production เป็น static HTML, CSS และ JavaScript ที่ deploy ผ่าน Vercel

| ไฟล์ | หน้าที่ |
| --- | --- |
| `index.html` | โครงหน้า ข้อความหลัก SEO และการ์ดภาพในหน้าแรก |
| `css/style.css` | design system และ responsive ของทั้งเว็บ |
| `css/art.css` | ภาพประกอบหน้าแรก ช่วง Story และโหมดลดการเคลื่อนไหว |
| `css/plates.css` | ภาษาภาพ "แผ่นแบบช่าง" ของ Selected Cases, คลังงาน, modal และ Contact |
| `js/main.js` | ข้อมูลโปรเจกต์ 43 งาน คำอธิบาย tech stack modal และ chatbot |
| `js/art.js` | การ์ดเลือกงานในหน้าแรก และค่าความชอบเรื่องการเคลื่อนไหว |
| `js/spatial.js` | ฉาก Three.js ของช่วง sticky scroll |
| `js/plates.js` | แถบบอกตำแหน่งในคลังงาน และการใช้คีย์บอร์ดกับแท็บกรอง |

---

## รันในเครื่อง

```bash
python -m http.server 4173 --bind 127.0.0.1
```

แล้วเปิด `http://127.0.0.1:4173/`

---

## การเข้าถึง

* ใช้คีย์บอร์ดได้ทั้งหน้า ทั้งการ์ด modal และแท็บกรอง (ลูกศรซ้ายขวา, Home, End)
* modal ล็อกโฟกัสไว้ข้างใน ปิดด้วย Escape แล้วคืนโฟกัสกลับที่เดิม
* มีปุ่ม "ลดการเคลื่อนไหว" ในเมนู และเว็บจะอ่านค่า `prefers-reduced-motion` ของระบบให้เองด้วย

---

ดูงานเพิ่มเติมได้ที่ [GitHub](https://github.com/BossZY27)
