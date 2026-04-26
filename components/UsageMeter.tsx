type Props = {
  used: number;
  limit: number;
  /** Show as nudge / warning / hard-limit depending on ratio. */
};

export function UsageMeter({ used, limit }: Props) {
  const pct = Math.min(100, Math.round((used / limit) * 100));
  const isFull = used >= limit;
  const isWarning = !isFull && used / limit >= 0.6;

  const trackColor = isFull
    ? "bg-rose-500"
    : isWarning
      ? "bg-amber-500"
      : "bg-rose-300";

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          Drafts this month
        </p>
        <p className="font-semibold text-zinc-900">
          <span className={isFull ? "text-rose-600" : ""}>{used}</span>
          <span className="text-zinc-400"> / {limit}</span>
        </p>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
        <div
          className={"h-full rounded-full transition " + trackColor}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p
        className={
          "mt-2 text-[11px] " +
          (isFull
            ? "text-rose-600 font-medium"
            : isWarning
              ? "text-amber-700"
              : "text-zinc-500")
        }
      >
        {isFull
          ? "Limit reached. Upgrade to keep drafting."
          : isWarning
            ? `Only ${limit - used} drafts left this month.`
            : "Resets on the 1st of next month."}
      </p>
    </div>
  );
}
