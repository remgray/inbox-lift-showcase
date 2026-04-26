import { StateFrame } from "@/components/StateFrame";
import { PopupShell } from "@/components/PopupShell";
import { UsageMeter } from "@/components/UsageMeter";
import { RecentDrafts } from "@/components/RecentDrafts";
import { getState } from "@/lib/states";

export default function FreeTierPage() {
  const state = getState("free-tier")!;

  return (
    <StateFrame state={state}>
      <PopupShell active="drafts">
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="space-y-3 border-b border-zinc-200 bg-white px-4 py-3">
            <UsageMeter used={3} limit={5} />
          </div>

          <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2 text-xs">
            <span className="font-medium text-zinc-500">Recent drafts</span>
            <button className="font-semibold text-emerald-600 hover:text-emerald-700">
              View all →
            </button>
          </div>

          <div className="no-scrollbar flex-1 overflow-y-auto p-3">
            <RecentDrafts limit={3} />
          </div>

          <div className="border-t border-zinc-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[12px] font-semibold text-zinc-900">
                  Unlock unlimited drafts
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-600">
                  Pro · $9 / mo · cancel anytime
                </p>
              </div>
              <button className="rounded-md bg-emerald-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-emerald-600">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </PopupShell>
    </StateFrame>
  );
}
