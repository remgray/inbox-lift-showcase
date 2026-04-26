import type { ReactNode } from "react";

type Tab = "drafts" | "templates" | "billing";

type Props = {
  active: Tab;
  pro?: boolean;
  children: ReactNode;
  /** Slightly smaller version for two-panel layouts. */
  compact?: boolean;
};

const tabs: { key: Tab; label: string }[] = [
  { key: "drafts", label: "Drafts" },
  { key: "templates", label: "Templates" },
  { key: "billing", label: "Billing" },
];

export function PopupShell({ active, pro = false, children, compact = false }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
      <div
        className={
          "flex flex-col overflow-hidden rounded-2xl " +
          (compact ? "h-[480px] w-[360px]" : "h-[520px] w-[400px]")
        }
      >
        <header className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="block h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-semibold text-zinc-900">
              InboxLift
            </span>
            {pro && (
              <span className="ml-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-1.5 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">
                Pro
              </span>
            )}
          </div>
          <button
            type="button"
            aria-label="Settings"
            className="rounded-md p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </header>

        <nav className="flex border-b border-zinc-200 px-2">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                className={
                  "relative flex-1 px-3 py-2.5 text-[13px] font-medium transition " +
                  (isActive
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-800")
                }
              >
                {t.label}
                {isActive && (
                  <span className="absolute right-2 bottom-0 left-2 h-0.5 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-1 flex-col overflow-hidden bg-zinc-50/60">
          {children}
        </div>
      </div>
    </div>
  );
}
