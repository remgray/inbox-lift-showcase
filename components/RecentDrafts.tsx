const drafts = [
  {
    initials: "AT",
    subject: "Re: Q4 planning sync",
    preview:
      "Thanks for sharing the doc — I have two questions on the Vienna pilot…",
    when: "12 min ago",
  },
  {
    initials: "PJ",
    subject: "Re: Renewal terms for 2026",
    preview:
      "Appreciate the proposal. We're aligned on seats, but the SLA section needs…",
    when: "1 hr ago",
  },
  {
    initials: "MS",
    subject: "Re: Intro — Maya at Acme",
    preview:
      "Maya, great to meet you. Quick one before we dig in: what's the current…",
    when: "Yesterday",
  },
];

export function RecentDrafts({ limit = drafts.length }: { limit?: number }) {
  return (
    <ul className="space-y-2">
      {drafts.slice(0, limit).map((d) => (
        <li
          key={d.subject}
          className="group cursor-pointer rounded-xl border border-zinc-200/70 bg-white p-3 transition hover:border-rose-300 hover:shadow-sm"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[10px] font-semibold text-rose-700">
              {d.initials}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[13px] font-medium text-zinc-900">
                  {d.subject}
                </p>
                <span className="ml-2 shrink-0 text-[10px] text-zinc-400">
                  {d.when}
                </span>
              </div>
              <p className="mt-0.5 line-clamp-1 text-[11px] text-zinc-500">
                {d.preview}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
