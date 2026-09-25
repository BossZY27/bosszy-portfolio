# ส่งต่องานเว็บไซต์ Portfolio ให้ Claude

อัปเดตล่าสุด: 25 กันยายน 2569 หลังรอบตรวจข้อมูล 43 งาน และทำ art direction ต่อไปยัง Selected Cases, คลังงาน และ Contact

## เป้าหมายของเจ้าของเว็บ

Phakin Meksuwan (BossZY) อยากให้ portfolio เป็นเว็บที่มีบุคลิกแบบงานออกแบบ มีภาพและการเคลื่อนไหวที่โต้ตอบได้ ไม่ดูเหมือนเว็บที่สร้างจากเทมเพลต AI แต่ยังอ่านง่าย ใช้งานง่าย และรองรับมือถือกับแท็บเล็ต ภาษาไทยควรเป็นธรรมชาติแบบนักศึกษา ไม่ทางการหรือขายตัวเองเกินไป โปรเจกต์ทั้งหมดต้องมีคำอธิบายว่างานคืออะไร ทำอะไรได้ และแต่ละ tech stack ใช้ทำอะไร

## สถานะปัจจุบัน

- Production ยังเป็นเว็บ static จาก `index.html`, `css/`, `js/` ไม่ใช่ Next.js แม้จะมี `src/` สำรองอยู่ อย่าเปลี่ยนระบบ build โดยไม่คุยกับเจ้าของเว็บ
- หน้าแรกมีฉาก scroll แบบ sticky สำหรับ Intro, Story และ Tools, ภาพ Three.js อยู่ใน `js/spatial.js`, และรายการโปรเจกต์ 43 งานอยู่ใน `js/main.js`
- รอบนี้ตรวจข้อมูลทั้ง 43 งานกับไฟล์จริงในเครื่อง แล้วแก้คำอธิบายกับ tech stack ที่ไม่ตรงหลักฐาน รายละเอียดอยู่ในหัวข้อ "สิ่งที่แก้ในรอบล่าสุด"
- ภาษาภาพชุด "แผ่นแบบช่าง" เดินต่อเนื่องด้วยเลข FIG. คือ FIG. 01 ที่ช่วง Story, FIG. 02 ถึง 04 ที่ Selected Cases และ FIG. 05 ที่ Contact
- การ์ดในคลังงานเลิกใช้ภาพ mockup แล้ว เปลี่ยนเป็นลวดลายที่วาดด้วย CSS ตามหมวดงาน เพราะภาพชุดเดิมถูกใช้ซ้ำข้ามงานที่ไม่เกี่ยวกัน และไฟล์ภาพรวมกันหนักราว 4.7 MB
- งานที่เป็นต้นแบบหรือใช้ข้อมูลจำลองติดป้ายสถานะไว้บนการ์ดตั้งแต่หน้าคลัง ไม่ต้องเปิด modal ก็เห็น

## ไฟล์ที่ควรรู้จัก

| ไฟล์ | หน้าที่ |
| --- | --- |
| `index.html` | โครงหน้า, ข้อความหลัก, SEO, การ์ด art และ Story |
| `css/style.css` | Design system และ responsive เดิม |
| `css/art.css` | ภาพประกอบหน้าแรก, การ์ด interactive และโหมด motion-off |
| `css/plates.css` | แผ่นของ Selected Cases, ลวดลายการ์ดในคลังงาน, แถบตำแหน่ง, modal และ Contact |
| `js/main.js` | รายการ 43 โปรเจกต์, `techNotes`, archive, modal, chatbot; `window.triggerProjectModal(id)` ใช้เปิดรายละเอียด |
| `js/art.js` | ปุ่มเลือกการ์ด, touch/keyboard, motion preference; เก็บค่าที่ `localStorage` key `bosszy-motion` |
| `js/plates.js` | แถบ `ARCHIVE_POS` และการใช้ลูกศรกับแท็บกรอง รันหลัง `DOMContentLoaded` เพราะ `main.js` วาดการ์ดในจังหวะนั้น |
| `js/spatial.js` | Three.js และสถานะของ sticky-scroll scene |
| `interactive.html`, `js/interactive.js` | หน้า 3D playground แยกจากหน้าแรก |
| `vercel.json` | ตั้งค่า deploy static; อย่าแก้ถ้าไม่ได้ตั้งใจย้ายไป Next.js |

## สิ่งที่แก้ในรอบล่าสุด

ตรวจทุกงานกับโฟลเดอร์จริงใน `Desktop/My Project` และที่อื่นบนเดสก์ท็อป จุดที่ข้อมูลเดิมไม่ตรงหลักฐาน

| งาน | เดิม | หลักฐานจริง |
| --- | --- | --- |
| 2Getr | เว็บคอมมูนิตี้ไว้พูดคุยและแชร์เนื้อหา, ใช้ Prisma และ Zustand | เว็บสั่งอาหารแบบรวมออเดอร์ของคนในตึกเดียวกัน (ตลาดสหรัฐ) ใช้ Next.js 16, Supabase, Stripe, Leaflet ไม่มี Prisma และ Zustand ใน `package.json` |
| Opt-Loyalty | ระบุแค่ Next.js, React, TypeScript, Tailwind | มี NextAuth, Google Sheets API, Leaflet, Recharts, QR/บาร์โค้ด, Twilio, Resend, PWA และเทสต์ Playwright |
| AI Shop Team | บอกว่าเป็น Next.js และช่วยคาดการณ์ยอดขาย | เป็น React + Vite ไม่มีส่วนคาดการณ์ยอดขาย มีบอร์ด Kanban, คลังพรอมป์, กล่องคลิปบอร์ด |
| E-Learning Automator | Python + Selenium | เป็น Chrome Extension Manifest V3 (`manifest.json` ระบุ 2.0x playback และ quiz สองชั้น) |
| TikTok Cart Bot | Python + Selenium | ใช้ `uiautomator2` สั่งอีมูเลเตอร์ Android ผ่าน ADB ไม่ใช่ Selenium |
| Auto VPN App | "VPN APIs" | คุมหน้าต่าง ProtonVPN ด้วย `pyautogui` และ `win32gui` ไม่ได้เรียก API |
| EV Nation | "Interactive Maps" | ไม่มีไลบรารีแผนที่ใน `package.json` เป็นต้นแบบข้อมูลจำลองที่ใช้ Supabase |
| TikTok Analytics | ระบุ Python | เป็น TypeScript ทั้งหมด เก็บข้อมูลด้วย Playwright ต่อ PostgreSQL ผ่าน Prisma |
| Music Ad Blocker | "รองรับหลายเว็บไซต์" | `manifest.json` ระบุเฉพาะ `*://*.youtube.com/*` |
| Loongmordek Auto Sheets | ระบุ Google Drive | ใช้แค่ `SpreadsheetApp` |
| FormA Database System | "Windows Forms" | เป็น UserForm ของ VBA และสร้างไฟล์ด้วย `win32com` |
| Next2-POS | "รองรับหลายสาขา ซิงก์เรียลไทม์" | ในโค้ดมีแต่ระบบแต้มสมาชิก ไม่พบส่วนหลายสาขา |

สามรายการที่ไม่มีหลักฐานรองรับ ถูกแทนที่ด้วยงานจริงที่เจอ (เจ้าของเว็บอนุมัติแล้ว)

- `ai-cartoon` ไม่มีโค้ดแปลงรูปการ์ตูนเลย โฟลเดอร์ `ai cartoon/` มีแต่แอป ai-office ซ้ำกับ AI Shop Team แทนด้วย **Nara Flow AI** ส่วนขยาย Chrome ใน `pronetwork2/`
- `flutter-mobile` เป็นสำเนาของ Unitask-flutter ตัวเดียวกัน แทนด้วย **Franchise OS** จาก `franchise-os/`
- `google-apps-script` เป็นรายการกว้าง ๆ ที่อ้างถึง Calendar ซึ่งไม่มีในโค้ด แทนด้วย **E-Receipt Reconciliation Bot** จาก `for app script/`

งานที่เป็นรุ่นต่อยอดของกันและกัน เขียนกำกับให้ชัดแทนที่จะแยกเป็นคนละระบบ ได้แก่ Opt-POS กับ Next2-POS และ Auto VPN Bot กับ Auto VPN Bot v2

## เรื่องที่ยังค้างอยู่

1. **ภาพหน้าจอจริง** ภาพสองรูปที่เหลือในหน้าแรก (2Getr, Grid Trading Bot) เป็นภาพที่วาดขึ้น ไม่ใช่ภาพหน้าจอจริง ตอนนี้ติดป้าย "ภาพประกอบ ไม่ใช่ภาพหน้าจอจริง" ไว้แล้ว ถ้าเจ้าของเว็บมี screenshot จริงเมื่อไหร่ ให้เปลี่ยนแล้วเอาป้ายออก
2. **ลิงก์ของงานลูกค้า** Franchise OS ขึ้นใช้งานจริงแล้วและมี URL production แต่เป็นของลูกค้า ยังไม่ได้ใส่ลิงก์ในเว็บ ต้องขออนุญาตก่อน
3. **ไฟล์ภาพเก่า** `public/images/` ยังมีไฟล์ที่ไม่ได้ใช้แล้วอีกแปดไฟล์ ลบได้เมื่อแน่ใจว่าไม่ย้อนกลับไปใช้ดีไซน์เดิม
4. **Unitask (Flutter)** ใส่ลิงก์ repo ของทีมไว้แล้วพร้อมป้าย "งานกลุ่ม" ถ้าจะเพิ่มลิงก์งานอื่น ต้องเป็นลิงก์ที่เปิดดูได้จริงเท่านั้น

## กติกาที่ต้องรักษา

- ชื่อเจ้าของเว็บสะกด **Phakin** มี `h` เสมอ ชื่อไทย "ภาคิน เมฆสุวรรณ"
- เก็บ title SEO ปัจจุบัน: `Phakin Meksuwan (BossZY) | ภาคิน เมฆสุวรรณ มข — Portfolio`
- อย่าลบไฟล์ยืนยัน Google Search Console `googled64e5cb94f5696fa.html`
- อย่าแก้ `vercel.json` หรือย้ายไป Next.js โดยไม่ได้รับคำสั่ง
- หลีกเลี่ยงคำ AI cliché และข้อความที่เว่อร์เกินงานจริง
- อย่าเขียนคำอธิบายหรือ tech stack ที่หาหลักฐานในไฟล์จริงไม่ได้ ถ้าไม่แน่ใจให้ถามเจ้าของเว็บ
- ทุก tag ใน `tech` ต้องมีคำอธิบายใน `techNotes` ไม่อย่างนั้น modal จะขึ้นข้อความสำรองที่ไม่ได้บอกอะไร
- ไม่ใส่ token, API key หรือ URL ที่ฝัง credential ลงในโค้ดหรือเอกสาร
- ก่อนแก้ไฟล์ ให้ดู `git status` และก่อนส่งงานให้เช็ก syntax, diff, responsive, การใช้งานด้วยคีย์บอร์ด และ reduced motion

## วิธีรันและตรวจเร็ว ๆ

รันเว็บ static ที่ root ของ repo ด้วย `python -m http.server 4173 --bind 127.0.0.1` แล้วเปิด `http://127.0.0.1:4173/`

ตรวจ syntax ด้วย `node --check js/main.js`, `node --check js/art.js`, `node --check js/plates.js`, `node --check js/spatial.js` และตรวจ whitespace ด้วย `git diff --check`

ตรวจว่าไม่มี tag ไหนหลุดคำอธิบาย ด้วยการเทียบรายการ `tech` ทั้งหมดกับคีย์ของ `techNotes` ใน `js/main.js`

## ผลตรวจรอบล่าสุด

ตรวจบนเบราว์เซอร์ที่ 360x640, 390x844, 768x1024 และ 1440x900

- ไม่มีการเลื่อนแนวนอนในทุกขนาด (`window.scrollX` เป็น 0 หลังสั่งเลื่อนไปขวาสุด)
- เปิด modal ด้วย Enter จากการ์ด โฟกัสไปที่ปุ่มปิด, Tab วนอยู่ในกรอบ modal, Escape ปิดแล้วคืนโฟกัสกลับที่การ์ดเดิม
- แท็บกรองใช้ลูกศรซ้ายขวาเลื่อนได้ Enter เลือกได้ และประกาศจำนวนผลลัพธ์ผ่าน `role="status"`
- ปุ่มลดการเคลื่อนไหวปิด transition ของส่วนใหม่ทั้งหมด และคงเส้นบอกระยะไว้ให้เห็นแทนการวิ่งเข้ามา
- chatbot ยังค้นงานจากข้อมูลชุดใหม่ได้ ไม่มี error ใน console

หมายเหตุ การตรวจด้วยภาพหน้าจอของแผ่น Selected Cases ใบที่สอง ทำผ่านการอ่านค่า computed style เพราะช่วงท้ายของรอบ browser pane หยุดวาดภาพ ให้ดูด้วยตาอีกครั้งบนเว็บจริงหลัง deploy
