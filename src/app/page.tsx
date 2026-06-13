import ProjectShowcase from "@/components/ProjectShowcase";
import Chatbot from "@/components/Chatbot";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/BossZY27",
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: "mailto:pakin.meksuwan@email.com",
    icon: MailIcon,
  },
  {
    label: "Novels",
    href: "#",
    icon: PenIcon,
  },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />

          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              2nd-year CS @ KKU
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Pakin
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
              นักศึกษา CS ม.ขอนแก่นที่หลงใหลการสร้าง Automation Tools
              และ Interactive Web Apps — จากระบบเทรดอัตโนมัติ
              ไปจนถึงแพลตฟอร์มเรียนรู้รหัส Morse
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
              {[
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "Flutter",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-2 text-gray-600">
              <span className="text-xs">Scroll to explore</span>
              <svg
                className="h-5 w-5 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────── */}
        <ProjectShowcase />
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] bg-gray-900/40">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12">
          <h2 className="text-xl font-semibold text-gray-100">
            Pakin Meksuwan{" "}
            <span className="text-gray-500 font-normal">(Boss)</span>
          </h2>

          <p className="max-w-md text-center text-sm leading-relaxed text-gray-400">
            CS Student @ KKU &bull; AI-driven Development &bull; Automated
            Trading &bull; Creative Writing
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-gray-400 transition-colors hover:border-violet-500/30 hover:text-violet-300"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-2 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Pakin Meksuwan. Built with
            Next.js &amp; Tailwind CSS.
          </div>
        </div>
      </footer>

      {/* ── Chatbot (floating) ───────────────────────────────── */}
      <Chatbot />
    </>
  );
}
