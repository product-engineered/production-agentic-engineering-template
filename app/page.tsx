import type { CSSProperties } from "react";

const logoMarkStyle = {
  letterSpacing: "-0.06em",
} satisfies CSSProperties;

export default function Home() {
  return (
    <main className="landing-grid min-h-screen px-4 py-4 text-black sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col border border-neutral-400 bg-neutral-0 shadow-[2px_2px_0_0_var(--color-neutral-300)] sm:min-h-[calc(100vh-3rem)]">
        <header className="px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-3 flex-col sm:flex-row">
            <div className="flex flex-col gap-0 items-center">
              <h1 className="font-bold tracking-normal text-black sm:text-base">
                Agentic Engineering in Production
              </h1>
              <div className="flex">
                <div className="bg-red h-1.5 w-11"></div>
                <div className="bg-green h-1.5 w-11"></div>
                <div className="bg-yellow h-1.5 w-11"></div>
                <div className="bg-blue h-1.5 w-11"></div>
                <div className="bg-magenta h-1.5 w-11"></div>
                <div className="bg-cyan h-1.5 w-11"></div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span
                className="font-mono text-[11px] font-medium italic leading-none text-black sm:text-xs"
                style={logoMarkStyle}
              >
                by
              </span>
              <a
                href="https://productengineered.com"
                className="bg-blue px-2 py-2 sm:px-3 sm:py-2 font-mono text-[11px] font-extrabold italic leading-none text-neutral-0 uppercase transition-colors hover:bg-neutral-800 sm:text-xs"
                style={logoMarkStyle}
              >
                Product Engineered
              </a>
            </div>
          </div>
          <div className="mt-5 border-t border-neutral-400" />
        </header>

        <section className="flex flex-1 px-5 sm:px-8 py-12 items-start">
          <div className="flex w-full max-w-5xl flex-col items-start text-left gap-6">
            <h2 className="text-2xl font-bold tracking-normal text-black sm:text-4xl">
              Your project starts here
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Context",
                  desc: "Pre-configured .md files, synced with rulesync for all agents.",
                },
                {
                  label: "Validation",
                  desc: "Linting, formatting and typechecking.",
                },
                { label: "Testing", desc: "Vitest wired up and ready to go." },
                {
                  label: "Visual Feedback",
                  desc: "Playwright and skills let your agents visualize their work.",
                },
                {
                  label: "Secret management",
                  desc: "Secure secret management by default. Keep your production services safe.",
                },
                {
                  label: "Documentation",
                  desc: "Project structure and scripts to fetch docs context.",
                },
                {
                  label: "Hooks",
                  desc: "Prevent your agent from committing non-compliant code with git hooks.",
                },
                {
                  label: "Specs",
                  desc: "Pre-made templates for AI-friendly product and engineering specs.",
                },
              ].map(({ label, desc }) => (
                <div key={label} className="border border-neutral-300 p-4">
                  <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-blue mb-2">
                    {label}
                  </p>
                  <p className="text-sm leading-6 text-neutral-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-5 py-4 sm:px-8">
          <div className="border-t border-black pt-4">
            <div className="flex flex-col gap-3 font-mono text-xs font-semibold uppercase tracking-normal text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
              <p>Production Agentic Engineering Template</p>
              <p>
                Made by{" "}
                <a
                  href="https://x.com/mulholo"
                  className="underline decoration-neutral-400 underline-offset-2 transition-colors hover:text-black"
                >
                  @mulholo
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
