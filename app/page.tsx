import Link from "next/link";

const capabilities = [
  "Classify transactions against chart-of-accounts policy",
  "Surface anomalies before they become controller escalations",
  "Flag missing receipts against close policy",
  "Estimate tax readiness from reconciliation and documentation gaps",
  "Track reconciliation status across operating accounts",
  "Generate CFO briefs for monthly close sign-off",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Finance operations control room
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Accounting operations clarity for teams that cannot afford a messy close.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-zinc-400 sm:text-lg">
            See what is missing, unreconciled, risky, or delaying the monthly
            close before finance cleanup becomes a fire drill. The simulator is
            rules-based demo data — not CPA advice and not a live ledger.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400"
            >
              Run monthly close simulator
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-950"
            >
              Open finance operations dashboard
            </Link>
          </div>
          <ul className="mt-12 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2"
              >
                <span className="text-emerald-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 ring-1 ring-emerald-500/10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Monthly close simulator
          </p>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-zinc-500">Inputs</dt>
              <dd className="text-zinc-200">
                Transactions, receipts, vendors, reconciliation status, and tax profile.
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Outputs</dt>
              <dd className="text-zinc-200">
                Categorized ledger, anomaly feed, receipt alerts, tax readiness, CFO brief, and reconciliation timeline.
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Audience</dt>
              <dd className="text-zinc-200">
                Startup finance teams, controllers, and operators managing close under pressure.
              </dd>
            </div>
          </dl>
          <Link href="/demo" className="mt-6 inline-block text-sm font-medium text-emerald-300 hover:text-emerald-200">
            Launch simulator →
          </Link>
        </aside>
      </div>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "What you load",
            body: "A sample month of transactions, receipts, vendors, and reconciliation status — demo data, not your live books.",
          },
          {
            title: "What the rules flag",
            body: "Missing documentation, unreconciled accounts, and anomaly notes a controller would want before sign-off.",
          },
          {
            title: "What you take to close",
            body: "A CFO brief and timeline you can walk in a room. Not CPA advice and not a filed return.",
          },
        ].map((step) => (
          <article key={step.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
            <h2 className="text-sm font-semibold text-zinc-100">{step.title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
