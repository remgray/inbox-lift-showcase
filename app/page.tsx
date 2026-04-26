import Link from "next/link";
import { states } from "@/lib/states";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-14">
        <p className="font-mono text-xs tracking-widest text-emerald-400/80 uppercase">
          UI showcase · 05 scenes · 12+ states
        </p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-emerald-50">
          InboxLift.
        </h1>
        <p className="mt-2 text-3xl text-emerald-200/60">
          Gmail AI drafts with a Pro tier that actually has plumbing.
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-emerald-200/60">
          A walkthrough of the five user-facing scenes of an AI draft helper
          for Gmail with Free / Pro tiers, Stripe Checkout, and a Customer
          Portal handoff. Each scene shows real Chrome-extension surfaces a
          buyer can expect: a free popup with a usage meter, a pricing
          paywall, the in-Gmail compose drawer, the unlocked Pro experience,
          and a full billing dashboard. Manifest V3, zero backend besides
          Stripe webhooks.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {states.map((s) => (
          <Link
            key={s.slug}
            href={`/states/${s.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-emerald-400/80 uppercase">
                № {s.index} · {s.surface}
              </span>
              <span className="text-emerald-200/50 transition group-hover:text-emerald-300">
                →
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-emerald-50">
              {s.label}
            </h2>
            <p className="mt-2 text-sm leading-snug text-emerald-200/60">
              {s.blurb}
            </p>
          </Link>
        ))}
      </section>

      <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-emerald-200/50">
        <p>
          Reference UI for buyers commissioning a paid-tier Chrome extension.
          The pattern here — free popup → paywall → Stripe Checkout → Pro
          unlock → billing dashboard — is the same plumbing I implement when
          a client asks me to ship an extension as a Micro-SaaS.
        </p>
      </footer>
    </main>
  );
}
