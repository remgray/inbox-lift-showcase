type Plan = {
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  features: { label: string; included: boolean }[];
  cta: string;
  ctaStyle: "outline" | "primary";
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      { label: "5 AI drafts per month", included: true },
      { label: "Standard model", included: true },
      { label: "Tone presets", included: false },
      { label: "Custom templates", included: false },
      { label: "Multilingual drafts", included: false },
      { label: "Priority routing", included: false },
    ],
    cta: "Current plan",
    ctaStyle: "outline",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    highlight: true,
    badge: "Most popular",
    features: [
      { label: "Unlimited AI drafts", included: true },
      { label: "Latest Claude model", included: true },
      { label: "Tone presets · 8 styles", included: true },
      { label: "Custom templates", included: true },
      { label: "Multilingual drafts (12 languages)", included: true },
      { label: "Priority routing · 2× faster", included: true },
    ],
    cta: "Continue to Stripe",
    ctaStyle: "primary",
  },
];

export function PricingModal() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-6 text-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
      <div className="w-[520px]">
        <header className="mb-5 text-center">
          <p className="font-mono text-[10px] tracking-widest text-emerald-600 uppercase">
            Plans
          </p>
          <h2 className="mt-1 text-xl font-semibold text-zinc-900">
            Unlock unlimited drafts
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Cancel anytime · 14-day money-back guarantee
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "relative rounded-xl border p-4 " +
                (p.highlight
                  ? "border-emerald-300 bg-emerald-50/40 shadow-sm"
                  : "border-zinc-200 bg-white")
              }
            >
              {p.badge && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase">
                  {p.badge}
                </span>
              )}
              <p className="text-sm font-semibold text-zinc-900">{p.name}</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-zinc-900">
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-[11px] text-zinc-500">{p.period}</span>
                )}
              </div>

              <ul className="mt-3 space-y-1.5">
                {p.features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-start gap-1.5 text-[11px]"
                  >
                    {f.included ? (
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-zinc-300"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span
                      className={
                        f.included ? "text-zinc-700" : "text-zinc-400"
                      }
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={
                  "mt-4 w-full rounded-md px-3 py-2 text-xs font-semibold transition " +
                  (p.ctaStyle === "primary"
                    ? "bg-emerald-500 text-white shadow-sm hover:bg-emerald-600"
                    : "border border-zinc-200 text-zinc-500")
                }
                disabled={p.ctaStyle === "outline"}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[10px] text-zinc-400">
          Secure checkout powered by Stripe · No card stored on this device
        </p>
      </div>
    </div>
  );
}
