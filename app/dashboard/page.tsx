// app/dashboard/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WinFly Dashboard (Demo View)",
  description:
    "Sample WinFly financial health dashboard showing how your investments, loans and insurance can be viewed in one place.",
};

export default function DashboardPage() {
  // Abhi ke liye static demo data
  const riskProfile = "Balanced";
  const goalCoverage = 78;
  const debtStress = "Medium";

  const investments = {
    status: "On track",
    note: "SIP running for major goals, minor gap in retirement planning.",
  };

  const loans = {
    status: "Needs review",
    note: "Total EMI is 42% of monthly income. Scope for restructuring / prepayment.",
  };

  const insurance = {
    status: "Adequate",
    note: "Term cover ok, slight shortfall in health + parents medical cover.",
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              WinFly Dashboard <span className="text-xs align-middle text-slate-500">(Demo)</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Ye ek sample view hai jo dikhata hai ki future me WinFly aapke
              investments, loans aur insurance ko ek consolidated dashboard
              me kaise show karega.
            </p>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 md:text-right">
            Demo data – not linked to real client records.  
            Future roadmap: login-based personalised dashboard.
          </p>
        </div>

        {/* Top metrics */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Risk Profile
            </p>
            <p className="mt-2 text-xl font-semibold text-[#0A3D91]">
              {riskProfile}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Based on risk questionnaire &amp; current investments.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Goal Coverage
            </p>
            <p className="mt-2 text-xl font-semibold text-emerald-600">
              {goalCoverage}%
            </p>
            <p className="mt-1 text-xs text-slate-500">
              How much of your key life goals are currently funded.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Debt Stress
            </p>
            <p className="mt-2 text-xl font-semibold text-amber-600">
              {debtStress}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              EMI to income ratio &amp; overall loan structure health.
            </p>
          </div>
        </div>

        {/* Key areas: Investments / Loans / Insurance */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Investments */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Investments
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Status:{" "}
              <span className="text-emerald-600">{investments.status}</span>
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">{investments.note}</p>
            <ul className="mt-3 space-y-1 text-xs text-slate-500">
              <li>• Goal-based SIP mapping</li>
              <li>• Asset allocation vs risk profile</li>
              <li>• Periodic portfolio review</li>
            </ul>
          </div>

          {/* Loans */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Loans &amp; EMIs
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Status:{" "}
              <span className="text-amber-600">{loans.status}</span>
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">{loans.note}</p>
            <ul className="mt-3 space-y-1 text-xs text-slate-500">
              <li>• All EMIs in one view</li>
              <li>• Interest cost &amp; tenure analysis</li>
              <li>• Prepayment &amp; restructuring suggestions</li>
            </ul>
          </div>

          {/* Insurance */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Insurance Protection
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Status:{" "}
              <span className="text-sky-600">{insurance.status}</span>
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">{insurance.note}</p>
            <ul className="mt-3 space-y-1 text-xs text-slate-500">
              <li>• Term cover vs income &amp; liabilities</li>
              <li>• Health cover for family &amp; parents</li>
              <li>• Critical gaps &amp; priority actions</li>
            </ul>
          </div>
        </div>

        {/* Roadmap / CTA */}
        <div className="mt-10 rounded-2xl bg-[#0A3D91] px-6 py-5 text-sm text-slate-50">
          <h2 className="text-base font-semibold">
            Future Roadmap: From Demo to Your Real Dashboard
          </h2>
          <p className="mt-2 text-slate-100/90">
            Next phases me WinFly is demo ko login-based, personalised dashboard
            me convert karega jahan aap apne actual loans, SIPs, insurance aur
            goals ko ek hi jagah track kar sakenge. Execution hamesha partner
            platforms (Wealthy, InvestKraft, Lendingkart, etc.) ke through hi
            rahega – WinFly aapko clarity aur structure provide karega.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-[#F3C969] px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-[#f7d783]"
            >
              Discuss WinFly dashboard roadmap
            </a>
            <a
              href="https://wa.me/919667205638"
              className="rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-50 hover:bg-white/10"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
