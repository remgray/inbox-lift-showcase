import { StateFrame } from "@/components/StateFrame";
import { getState } from "@/lib/states";

const usage = [
  3, 4, 1, 2, 5, 7, 6, 8, 4, 3, 5, 9, 11, 7, 4, 6, 8, 10, 12, 9, 6, 5, 7, 11, 8,
  4, 3, 5, 7, 6,
];

const invoices = [
  { date: "Apr 26, 2026", amount: "$9.00", status: "Paid", id: "INV-2026-04" },
  { date: "Mar 26, 2026", amount: "$9.00", status: "Paid", id: "INV-2026-03" },
  { date: "Feb 26, 2026", amount: "$9.00", status: "Paid", id: "INV-2026-02" },
  { date: "Jan 26, 2026", amount: "$9.00", status: "Paid", id: "INV-2026-01" },
];

export default function BillingPage() {
  const state = getState("billing")!;
  const max = Math.max(...usage);

  return (
    <StateFrame state={state} wide>
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white p-10 text-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <h2 className="text-xl font-semibold">InboxLift · Billing</h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            v 1.2.0
          </span>
        </header>

        {/* Current plan */}
        <section className="mb-8 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-2 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase">
                  Pro
                </span>
                <p className="text-sm font-semibold text-zinc-900">
                  Current plan
                </p>
              </div>
              <p className="mt-1.5 text-2xl font-bold text-zinc-900">
                $9 <span className="text-sm font-medium text-zinc-500">/ month</span>
              </p>
              <p className="mt-0.5 text-xs text-zinc-600">
                Renews May 26, 2026 · Visa •••• 4242
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-800">
                Manage subscription →
              </button>
              <button className="text-right text-[11px] text-zinc-500 underline transition hover:text-rose-600">
                Cancel plan
              </button>
            </div>
          </div>
        </section>

        {/* Usage chart */}
        <section className="mb-8">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h3 className="text-sm font-semibold">Drafts · last 30 days</h3>
              <p className="mt-0.5 text-xs text-zinc-500">
                Total this period: <strong>187</strong>
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-zinc-500">
              <span className="inline-flex items-center gap-1">
                <span className="block h-2 w-2 rounded-full bg-emerald-500" />
                drafts
              </span>
              <span>peak: 12</span>
            </div>
          </div>
          <div className="flex items-end gap-1 rounded-lg border border-zinc-200 bg-zinc-50/40 px-3 py-3">
            {usage.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-emerald-500/80 transition hover:bg-emerald-500"
                style={{ height: `${(v / max) * 80}px` }}
                title={`Day ${i + 1}: ${v} drafts`}
              />
            ))}
          </div>
        </section>

        {/* Invoices */}
        <section>
          <div className="mb-3 flex items-end justify-between">
            <h3 className="text-sm font-semibold">Invoice history</h3>
            <button className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700">
              Download all →
            </button>
          </div>
          <div className="overflow-hidden rounded-lg border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50 text-[11px] tracking-wider text-zinc-500 uppercase">
                <tr>
                  <th className="px-4 py-2.5 text-left font-medium">Date</th>
                  <th className="px-4 py-2.5 text-left font-medium">Invoice</th>
                  <th className="px-4 py-2.5 text-left font-medium">Amount</th>
                  <th className="px-4 py-2.5 text-left font-medium">Status</th>
                  <th className="px-4 py-2.5 text-right font-medium">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-zinc-50/60">
                    <td className="px-4 py-2.5 text-zinc-700">{inv.date}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-zinc-500">
                      {inv.id}
                    </td>
                    <td className="px-4 py-2.5 font-medium text-zinc-900">
                      {inv.amount}
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <button className="text-[11px] font-medium text-emerald-600 hover:text-emerald-700">
                        Download →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-zinc-400">
            Powered by Stripe · receipts hosted at billing.stripe.com
          </p>
        </section>
      </div>
    </StateFrame>
  );
}
