import { StateFrame } from "@/components/StateFrame";
import { PopupShell } from "@/components/PopupShell";
import { RecentDrafts } from "@/components/RecentDrafts";
import { getState } from "@/lib/states";

const tonePresets = [
  {
    name: "Concise · Direct",
    desc: "Get to the point in two sentences.",
    badge: "default",
  },
  {
    name: "Warm · Professional",
    desc: "Friendly opener, structured body.",
  },
  {
    name: "Diplomatic · Formal",
    desc: "Hedge claims, soft asks, signed off properly.",
  },
  {
    name: "Witty · Conversational",
    desc: "One-liner opener, casual close.",
  },
];

const templates = [
  {
    title: "Investor follow-up",
    preview: "Thanks for the call. To recap the three asks…",
    used: 14,
  },
  {
    title: "Customer churn save",
    preview: "I saw the cancellation — before you go, would you be open to…",
    used: 9,
  },
  {
    title: "Hiring rejection (warm)",
    preview: "We loved meeting you, but moving forward with someone whose…",
    used: 6,
  },
];

export default function ProTierPage() {
  const state = getState("pro-tier")!;

  return (
    <StateFrame state={state} wide>
      <div className="flex flex-wrap items-start justify-center gap-8">
        {/* Left: Pro popup */}
        <PopupShell active="drafts" pro>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-200 bg-gradient-to-r from-rose-50/70 to-pink-50/40 px-4 py-3">
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-rose-700/80 uppercase">
                  This month
                </p>
                <p className="mt-0.5 text-2xl font-bold text-zinc-900">
                  47 <span className="text-sm font-medium text-zinc-400">drafts</span>
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-2.5 py-1 text-[10px] font-semibold text-white">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Unlimited
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2 text-xs">
              <span className="font-medium text-zinc-500">Recent drafts</span>
              <button className="font-semibold text-rose-600 hover:text-rose-700">
                View all →
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto p-3">
              <RecentDrafts limit={3} />
            </div>

            <div className="border-t border-zinc-200 bg-white px-4 py-2 text-[11px] text-zinc-500">
              Pro · renews May 26 · cancel anytime
            </div>
          </div>
        </PopupShell>

        {/* Right: Templates / Tone presets popup */}
        <PopupShell active="templates" pro compact>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="border-b border-zinc-200 bg-white px-4 py-3">
              <p className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
                Tone presets · 04 of 08
              </p>
              <ul className="mt-2 space-y-1.5">
                {tonePresets.map((t, i) => (
                  <li
                    key={t.name}
                    className={
                      "rounded-lg border px-3 py-2 transition " +
                      (i === 0
                        ? "border-rose-300 bg-rose-50/40"
                        : "border-zinc-200 bg-white hover:border-rose-200")
                    }
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-semibold text-zinc-900">
                        {t.name}
                      </p>
                      {t.badge && (
                        <span className="rounded-full bg-rose-100 px-1.5 py-0.5 text-[9px] font-semibold text-rose-700 uppercase">
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[10px] text-zinc-500">{t.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between bg-white px-4 py-2 text-[11px]">
              <span className="font-medium text-zinc-500">Custom templates</span>
              <button className="font-semibold text-rose-600 hover:text-rose-700">
                + New
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto px-3 pb-3 space-y-1.5">
              {templates.map((t) => (
                <div
                  key={t.title}
                  className="cursor-pointer rounded-lg border border-zinc-200 bg-white p-2.5 transition hover:border-rose-300"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-semibold text-zinc-900">
                      {t.title}
                    </p>
                    <span className="text-[10px] text-zinc-400">
                      Used {t.used}×
                    </span>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-[10px] text-zinc-500">
                    {t.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PopupShell>
      </div>
    </StateFrame>
  );
}
