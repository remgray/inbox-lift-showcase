import { StateFrame } from "@/components/StateFrame";
import { PopupShell } from "@/components/PopupShell";
import { UsageMeter } from "@/components/UsageMeter";
import { PricingModal } from "@/components/PricingModal";
import { getState } from "@/lib/states";

export default function PaywallPage() {
  const state = getState("paywall")!;

  return (
    <StateFrame state={state} wide>
      <div className="flex flex-wrap items-start justify-center gap-8">
        {/* Left: limit-reached popup */}
        <PopupShell active="drafts" compact>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="space-y-3 border-b border-zinc-200 bg-white px-4 py-3">
              <UsageMeter used={5} limit={5} />
            </div>

            <div className="flex flex-1 items-center justify-center px-4 py-6">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-rose-500"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <p className="mt-3 text-sm font-semibold text-zinc-900">
                  You've used all 5 free drafts
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Upgrade to Pro to keep generating replies — your quota resets
                  on the 1st, but you don't have to wait.
                </p>
              </div>
            </div>

            <div className="border-t border-zinc-200 bg-white px-4 py-3">
              <button className="flex w-full items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-600">
                See Pro plans
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </PopupShell>

        {/* Right: pricing modal */}
        <PricingModal />
      </div>
    </StateFrame>
  );
}
