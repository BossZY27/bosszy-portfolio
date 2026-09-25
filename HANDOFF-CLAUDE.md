# ส่งต่องานเว็บไซต์ Portfolio ให้ Claude

อัปเดตล่าสุด: 25 กันยายน 2026 หลัง commit `6971d93` (`feat: add interactive portfolio art direction`)

## เป้าหมายของเจ้าของเว็บ

Phakin Meksuwan (BossZY) อยากให้ portfolio เป็นเว็บที่มีบุคลิกแบบงานออกแบบ/งานศิลป์ มีภาพและการเคลื่อนไหวที่โต้ตอบได้ ไม่ดูเหมือนเว็บที่สร้างจากเทมเพลต AI แต่ยังอ่านง่าย ใช้งานง่าย และรองรับมือถือกับแท็บเล็ต ภาษาไทยควรเป็นธรรมชาติแบบนักศึกษา ไม่ทางการหรือขายตัวเองเกินไป โปรเจกต์ทั้งหมดต้องมีคำอธิบายว่างานคืออะไร ทำอะไรได้ และแต่ละ tech stack ใช้ทำอะไร

## สถานะปัจจุบัน

- Production ยังเป็นเว็บ static จาก `index.html`, `css/`, `js/` ไม่ใช่ Next.js แม้จะมี `src/` สำรองอยู่ อย่าเปลี่ยนระบบ build โดยไม่คุยกับเจ้าของเว็บ
- หน้าแรกมีฉาก scroll แบบ sticky สำหรับ Intro, Story และ Tools, ภาพ Three.js อยู่ใน `js/spatial.js`, และรายการโปรเจกต์ 43 งานอยู่ใน `js/main.js`
- งาน art direction รอบล่าสุดเพิ่มการ์ดภาพประกอบที่วาดด้วย CSS สำหรับ 2Getr, Opt-POS และ Grid Trading Bot บนหน้าแรก ผู้ใช้กดหมายเลข 01–03 เพื่อเลือกงาน แล้วกด “ดูรายละเอียด” เพื่อเปิด modal ของโปรเจกต์
- ช่วง Story มีภาพประกอบเปลี่ยนตามปีที่เลื่อนถึง โหมด “ลดการเคลื่อนไหว” ในเมนูจะเปลี่ยนฉาก Story/Tools ให้เป็นเนื้อหาเรียงอ่านตามปกติและหยุดภาพเคลื่อนไหวหลัก
- ตรวจด้วยเบราว์เซอร์แล้วที่ขนาดมือถือ 354px, แท็บเล็ต 745px และเดสก์ท็อป 1309px: ไม่มีการล้นแนวนอน; การเลือกการ์ด เปิด modal และโหมดลดการเคลื่อนไหวทำงาน ตรวจ `node --check` กับ JS ที่แก้แล้ว
- Commit `6971d93` ถูก push ไป `origin/master` แล้ว และตรวจเว็บจริง `https://bosszy-portfolio.vercel.app/` พบการ์ด art, ปุ่มเลือกงาน, ปุ่มรายละเอียด และข้อความ “43 งาน และยังไปกันต่อ” แล้ว การ deploy ผ่าน GitHub integration สำเร็จ; คำสั่ง Vercel CLI ใน sandbox นี้ยังติดสิทธิ์เขียนไฟล์ auth แต่ไม่ต้อง deploy ซ้ำ

## ไฟล์ที่ควรรู้จัก

| ไฟล์ | หน้าที่ |
| --- | --- |
| `index.html` | โครงหน้า, ข้อความหลัก, SEO, การ์ด art และ Story |
| `css/style.css` | Design system และ responsive เดิม |
| `css/art.css` | ภาพประกอบ, การ์ด interactive, breakpoint และโหมด motion-off ที่เพิ่งเพิ่ม |
| `js/main.js` | รายการ 43 โปรเจกต์, archive, modal, chatbot; `window.triggerProjectModal(id)` ใช้เปิดรายละเอียด |
| `js/art.js` | ปุ่มเลือกการ์ด, touch/keyboard, motion preference; เก็บค่าที่ `localStorage` key `bosszy-motion` |
| `js/spatial.js` | Three.js และสถานะของ sticky-scroll scene |
| `interactive.html`, `js/interactive.js` | หน้า 3D playground แยกจากหน้าแรก |
| `vercel.json` | ตั้งค่า deploy static; อย่าแก้ถ้าไม่ได้ตั้งใจย้ายไป Next.js |

## งานที่ควรทำต่อ (ตามลำดับ)

1. เมื่อมีการแก้รอบใหม่ ให้ตรวจ `https://bosszy-portfolio.vercel.app/` ว่า commit ใหม่ขึ้นจริงทั้ง desktop และ mobile หากยังไม่ขึ้น ให้เช็กสถานะ deployment ก่อนสั่ง deploy ซ้ำ
2. ทดสอบหน้าแรกบนเครื่องจริงหรือ device emulation เพิ่ม: 360×640, 390×844, 768×1024, 1440×900 รวมถึงเมนูมือถือ, modal, keyboard, touch swipe และระบบ `prefers-reduced-motion`
3. ทำ art direction ให้ต่อเนื่องไปยัง Selected Cases, คลัง 43 งาน และ Contact โดยคงหลัก “ให้เนื้อหานำ ภาพเคลื่อนไหวช่วยเล่า” อย่าใส่เอฟเฟกต์ซ้ำทุกการ์ดหรือทำให้หาเนื้อหายาก
4. เปลี่ยนภาพโปรเจกต์ตัวเด่นเป็น screenshot จริงเมื่อเจ้าของเว็บมีไฟล์ให้ ตรวจความถูกต้องของชื่อ/คำอธิบาย/tech stack ก่อนเผยแพร่ อย่าแต่งข้อมูลที่ไม่มีหลักฐาน
5. ตรวจเนื้อหาโปรเจกต์ทั้ง 43 งานกับ repo/ไฟล์จริง แล้วเติม GitHub และ Live Demo เฉพาะงานที่มีลิงก์จริง คำอธิบายต้องบอกปัญหา วิธีทำ และผลลัพธ์ด้วยภาษาง่าย
6. อัปเดต `README.md` หลังเว็บนิ่ง: ตอนนี้ยังกล่าวถึง “29+” และดีไซน์รุ่นเก่า ไม่ตรงกับเว็บจริง

## กติกาที่ต้องรักษา

- ชื่อเจ้าของเว็บสะกด **Phakin** มี `h` เสมอ ชื่อไทย “ภาคิน เมฆสุวรรณ”
- เก็บ title SEO ปัจจุบัน: `Phakin Meksuwan (BossZY) | ภาคิน เมฆสุวรรณ มข — Portfolio`
- อย่าลบไฟล์ยืนยัน Google Search Console `googled64e5cb94f5696fa.html`
- อย่าแก้ `vercel.json` หรือย้ายไป Next.js โดยไม่ได้รับคำสั่ง
- หลีกเลี่ยงคำ AI cliché เช่น “สร้างสรรค์ด้วยใจ”, “ยินดีต้อนรับสู่โลกแห่ง...” และข้อความที่เว่อร์เกินงานจริง
- ไม่ใส่ token, API key หรือ URL ที่ฝัง credential ลงในโค้ด เอกสาร หรือคำสั่ง deploy; ใช้ `git push origin master` ผ่าน credential ที่เครื่องจัดการอยู่
- ก่อนแก้ไฟล์ ให้ดู `git status` และรักษางานที่คนอื่นทำไว้; ก่อนส่งงานให้เช็ก syntax, diff, responsive, การใช้งานด้วยคีย์บอร์ด และ reduced motion

## วิธีรันและตรวจเร็ว ๆ

รันเว็บ static ที่ root ของ repo ด้วย `python -m http.server 4173 --bind 127.0.0.1` แล้วเปิด `http://127.0.0.1:4173/` ตรวจ JS ด้วย `node --check js/art.js`, `node --check js/spatial.js`, `node --check js/main.js` และตรวจ whitespace ด้วย `git diff --check` ไฟล์ `AGENTS.md` ของ repo นี้เป็นคำเตือนของ Next.js สำหรับส่วน `src/` เท่านั้น; หน้า production ยังใช้ static HTML/JS/CSS
