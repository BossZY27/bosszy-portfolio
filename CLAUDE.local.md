# ข้อมูลส่งต่องาน Portfolio

ก่อนพัฒนาต่อให้อ่าน [HANDOFF-CLAUDE.md](HANDOFF-CLAUDE.md) เพื่อดูสถานะล่าสุด เป้าหมายของเจ้าของเว็บ ไฟล์ที่ใช้งานจริง และรายการตรวจงาน โปรดเช็ก `git status` กับเว็บไซต์จริงอีกครั้ง เพราะสถานะ deployment ในเอกสารอาจเปลี่ยนหลังจากที่เขียนไว้

หน้า production เป็น static HTML/CSS/JS (`index.html`) แม้ repo จะมีโค้ด Next.js อยู่ ห้ามถือว่า `src/app/page.tsx` คือหน้าเว็บจริงโดยไม่ตรวจ `vercel.json`
