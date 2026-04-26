import { StateFrame } from "@/components/StateFrame";
import { getState } from "@/lib/states";

export default function GmailComposePage() {
  const state = getState("gmail-compose")!;

  return (
    <StateFrame state={state} wide>
      <div className="relative w-full max-w-6xl">
        {/* Mock browser chrome */}
        <div className="rounded-t-xl border border-white/10 bg-zinc-900 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="block h-3 w-3 rounded-full bg-red-400" />
            <span className="block h-3 w-3 rounded-full bg-yellow-400" />
            <span className="block h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-3 flex-1 truncate rounded-md bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-400">
              https://mail.google.com/mail/u/0/#inbox
            </div>
          </div>
        </div>

        {/* Mock Gmail page */}
        <div className="relative grid grid-cols-[200px_1fr] gap-0 rounded-b-xl border-x border-b border-white/10 bg-[#F6F8FC] min-h-[640px]">
          {/* Sidebar */}
          <aside className="border-r border-zinc-200 bg-white px-3 py-4">
            <button className="mb-4 flex w-full items-center gap-2 rounded-2xl bg-[#C2E7FF] px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-[#a8dcfd]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
              </svg>
              Compose
            </button>
            <ul className="space-y-1 text-sm">
              {[
                ["Inbox", true, "1,204"],
                ["Starred", false, ""],
                ["Snoozed", false, ""],
                ["Sent", false, ""],
                ["Drafts", false, "12"],
                ["Spam", false, ""],
              ].map(([label, active, count]) => (
                <li
                  key={String(label)}
                  className={
                    "flex items-center justify-between rounded-r-full px-3 py-1.5 " +
                    (active
                      ? "bg-[#FCE8E6] font-bold text-[#D93025]"
                      : "text-zinc-700 hover:bg-zinc-100")
                  }
                >
                  <span>{label}</span>
                  {count && <span className="text-xs">{count}</span>}
                </li>
              ))}
            </ul>
          </aside>

          {/* Inbox list (just decoration) */}
          <div className="px-4 py-3 text-xs text-zinc-500">
            <div className="space-y-1">
              {[
                ["Anna Tully", "Q4 planning sync — let's lock the roadmap…", "10:42"],
                ["Pavel J.", "Renewal terms for 2026 — proposal attached", "9:18"],
                ["Maya Sandström", "Intro — Maya at Acme (warm intro from Jordan)", "Wed"],
                ["Stripe", "Your invoice from Anthropic for $34.18", "Tue"],
                ["GitHub", "[remgray/inbox-lift] PR #42 ready for review", "Mon"],
              ].map(([who, subj, time], i) => (
                <div
                  key={i}
                  className={
                    "flex items-center gap-3 rounded-md border-b border-zinc-200/60 px-2 py-2 " +
                    (i === 0 ? "bg-white shadow-sm font-medium" : "")
                  }
                >
                  <span className={"w-32 truncate " + (i === 0 ? "text-zinc-900" : "text-zinc-700")}>
                    {who}
                  </span>
                  <span className={"flex-1 truncate " + (i === 0 ? "text-zinc-800" : "")}>
                    {subj}
                  </span>
                  <span className="text-[10px]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating compose window — pushed away from the right side
              so the AI drawer below doesn't overlap it in the showcase. */}
          <div className="absolute right-[360px] bottom-0 w-[420px] overflow-hidden rounded-t-lg border border-zinc-300 bg-white shadow-2xl">
            <header className="flex items-center justify-between bg-[#404040] px-3 py-2 text-white">
              <p className="text-xs font-medium">Re: Q4 planning sync</p>
              <div className="flex items-center gap-1 text-zinc-300">
                <button aria-label="Minimize" className="rounded p-0.5 hover:text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <button aria-label="Expand" className="rounded p-0.5 hover:text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                  </svg>
                </button>
                <button aria-label="Close" className="rounded p-0.5 hover:text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="bg-white px-4 py-3 text-sm text-zinc-700">
              <div className="border-b border-zinc-200 py-1.5">
                <span className="text-xs text-zinc-500">To: </span>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs">
                  anna@acme.co
                </span>
              </div>
              <div className="border-b border-zinc-200 py-1.5">
                <span className="text-xs text-zinc-500">Subject: </span>
                Re: Q4 planning sync
              </div>

              <div className="min-h-32 py-3 text-[13px] leading-relaxed text-zinc-800">
                Thanks for sharing the doc — I have two questions on the
                Vienna pilot before we lock the roadmap…
                <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-rose-500 align-text-bottom" />
              </div>
            </div>

            <footer className="flex items-center justify-between border-t border-zinc-200 bg-white px-3 py-2">
              <button className="rounded-md bg-[#0B57D0] px-4 py-1.5 text-xs font-medium text-white hover:bg-[#0842a0]">
                Send
              </button>
              <div className="flex items-center gap-2 text-zinc-500">
                <button
                  className="inline-flex items-center gap-1 rounded-md border border-rose-300 bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-300/40"
                  aria-label="Draft with InboxLift AI"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 L13.6 9 L21 11 L13.6 13 L12 22 L10.4 13 L3 11 L10.4 9 Z" />
                  </svg>
                  Draft with AI
                </button>
                <button aria-label="Attach" className="rounded p-1 hover:bg-zinc-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </button>
                <button aria-label="More" className="rounded p-1 hover:bg-zinc-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </button>
              </div>
            </footer>
          </div>

          {/* AI drawer (slides in from right) */}
          <aside className="absolute top-0 right-0 h-full w-[340px] overflow-hidden border-l border-zinc-200 bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
            <header className="flex items-center justify-between border-b border-zinc-200 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="block h-2 w-2 rounded-full bg-rose-500" />
                <span className="text-xs font-semibold text-zinc-900">
                  InboxLift · Compose
                </span>
              </div>
              <button aria-label="Close" className="text-zinc-400 hover:text-zinc-700">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </header>

            <div className="border-b border-zinc-100 bg-zinc-50/60 px-4 py-2.5">
              <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                Thread context
              </p>
              <p className="mt-1 line-clamp-2 text-[11px] text-zinc-600">
                Anna shared the Q4 planning doc earlier this week. The Vienna
                pilot section is unclear on…
              </p>
            </div>

            <div className="border-b border-zinc-100 px-4 py-3">
              <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                Tone
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Concise · Direct", "Warm", "Witty", "Formal"].map((t, i) => (
                  <span
                    key={t}
                    className={
                      "rounded-full px-2.5 py-1 text-[10px] font-medium " +
                      (i === 0
                        ? "bg-rose-500 text-white shadow-sm"
                        : "border border-zinc-200 bg-white text-zinc-700")
                    }
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  Draft
                </p>
                <span className="text-[10px] text-rose-600">● 86 tokens</span>
              </div>
              <p className="mt-2 rounded-lg bg-zinc-50 px-3 py-2.5 text-[12px] leading-relaxed text-zinc-800">
                Hi Anna — thanks for the doc. Two clarifications before I sign
                off on the Vienna pilot: 1) the seat ramp from 50 → 200 in Q4
                — is that hard-committed or directional? 2) the retention SLO
                you mentioned in the call — does that include the new
                self-serve tier?
              </p>
            </div>

            <div className="absolute right-3 bottom-3 left-3 grid grid-cols-3 gap-1.5">
              <button className="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-[11px] font-medium text-zinc-700 transition hover:bg-zinc-50">
                Regenerate
              </button>
              <button className="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-[11px] font-medium text-zinc-700 transition hover:bg-zinc-50">
                Copy
              </button>
              <button className="rounded-md bg-rose-500 px-2 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-rose-600">
                Insert
              </button>
            </div>
          </aside>
        </div>
      </div>
    </StateFrame>
  );
}
