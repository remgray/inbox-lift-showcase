import Link from "next/link";
import type { StateMeta } from "@/lib/states";

type Props = {
  state: StateMeta;
  children: React.ReactNode;
  /** Use for full-width / wide-content scenes (e.g. Gmail mock, billing). */
  wide?: boolean;
};

export function StateFrame({ state, children, wide = false }: Props) {
  return (
    <main
      className={
        "mx-auto flex min-h-screen flex-col px-6 py-10 " +
        (wide ? "max-w-7xl" : "max-w-6xl")
      }
    >
      <Link
        href="/"
        className="text-xs font-medium tracking-widest text-rose-200/60 uppercase transition hover:text-rose-300"
      >
        ← All scenes
      </Link>

      <header className="mt-8 mb-10">
        <p className="font-mono text-xs tracking-widest text-rose-400/80 uppercase">
          № {state.index} · {state.surface}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-rose-50">
          {state.label}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-rose-200/60">
          {state.blurb}
        </p>
      </header>

      <div className="flex flex-1 items-center justify-center py-4">
        {children}
      </div>
    </main>
  );
}
