// app/dashboard/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WinFly Dashboard (Demo View)",
  description:
    "Sample WinFly financial health dashboard showing how your investments, loans and insurance can be viewed in one place.",
};

// ---------------- Health Score Logic ----------------

type HealthInputs = {
  monthlyIncome: number;           // e.g. 80000
  totalEmi: number;                // e.g. 35000
  goalCoveragePct: number;         // 0–100
  protectionCoveragePct: number;   // 0–100
  emergencyFundMonths: number;     // e.g. 2.5
};

type HealthResult = {
  score: number;         // 0–100
  band: "Excellent" | "Good" | "Needs Attention" | "Critical";
  breakdown: {
    goalScore: number;
    debtScore: number;
    protectionScore: number;
    liquidityScore: number;
  };
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

function calculateHealthScore(inputs: HealthInputs): HealthResult {
  const {
    monthlyIncome,
    totalEmi,
    goalCoveragePct,
    protectionCoveragePct,
    emergencyFundMonths,
  } = inputs;

  // --- Goal score ---
  const goalScore = clamp(goalCoveragePct, 0, 100);

  // --- Debt score ---
  let debtScore = 0;
  if (!monthlyIncome || monthlyIncome <= 0) {
    // if income missing, neutral-ish score
    debtScore = 50;
  } else {
    const emiRatio = totalEmi / monthlyIncome;

    if (emiRatio <= 0.25) debtScore = 95;
    else if (emiRatio <= 0.4) debtScore = 80;
    else if (emiRatio <= 0.6) debtScore = 55;
    else debtScore = 25;
  }

  // --- Protection score ---
  const protectionScore = clamp(protectionCoveragePct, 0, 100);

  // --- Liquidity score ---
  let liquidityScore = 0;
  if (emergencyFundMonths <= 0) liquidityScore = 5;
  else if (emergencyFundMonths < 1) liquidityScore = 20;
  else if (emergencyFundMonths < 3) liquidityScore = 50;
  else if (emergencyFundMonths < 6) liquidityScore = 80;
  else liquidityScore = 100;

  // --- Weighted final score ---
  const rawScore =
    goalScore * 0.35 +
    debtScore * 0.25 +
    protectionScore * 0.25 +
    liquidityScore * 0.15;

  const score = Math.round(rawScore);

  let band: HealthResult["band"];
  if (score >= 80) band = "Excellent";
  else if (score >= 65) band = "Good";
  else if (score >= 50) band = "Needs Attention";
  else band = "Critical";

  return {
    score,
    band,
    breakdown: {
      goalScore,
      debtScore,
      protectionScore,
      liquidityScore,
    },
  };
}

// ---------------- Dashboard Page (Demo) ----------------

export default function DashboardPage() {
  // Abhi ke liye DEMO static inputs (client se aane wale data ka sample)
  const sampleInputs: HealthInputs = {
    monthlyIncome: 80000,          // 80k per month
    totalEmi: 34000,               // total EMIs
    goalCoveragePct: 78,           // goals 78% covered
    protectionCoveragePct: 65,     // protection 65% of required
    emergencyFundMonths: 2.5,      // 2.5 months expenses saved
  };

  const result = calculateHealthScore(sampleInputs);
  const { score, band, breakdown } = result;

  // Risk profile abhi demo ke liye fix rakhte hain
  const riskProfile = "Balanced";
  const debtStressLabel =
    breakdown.debtScore >= 80
      ? "Low"
      : breakdown.debtScore >= 55
      ? "Medium"
      : "High";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              WinFly Dashboard{" "}
              <span className="text-xs align-middle text-slate-500">
                (Demo)
              </span>
            </h1>
            <p className="mt-1 max-w-xl text-sm text-slate-600">
              Ye ek sample view hai jo dikhata hai ki future me WinFly aapke
              investments, loans, insurance aur cashflow ko ek consolidated
              dashboard me kaise show karega – saath me ek simple{" "}
              <span className="font-semibold">WinFly Financial Health Score</span>.
            </p>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 md:text-right">
            Demo data – not linked to real client records.  
            Future roadmap: login-based personalised dashboard.
          </p>
        </div>

        {/* Top Health Score Card */}
        <div className="mt-8 grid gap-4 md:grid-cols-[2fr,1fr]">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              WinFly Financial Health Score
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-3">
              <p className="text-4xl font-semibold text-[#0A3D91]">
                {score}
                <span className="text-lg text-slate-400">/100</span>
              </p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {band}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Ye score 4 pillars par based hai –{" "}
              <span className="font-semibold">
                goals, loans, protection aur emergency fund
              </span>
              . Simple weighted formula se ek overall picture milti hai jisse
              hum samajh sakte hain ki sabse pehle kaha kaam karna hai.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-5 text-slate-50 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Quick Snapshot
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                • Risk Profile:{" "}
                <span className="font-semibold text-white">{riskProfile}</span>
              </li>
              <li>
                • EMI Load:{" "}
                <span className="font-semibold text-white">
                  {(sampleInputs.totalEmi / sampleInputs.monthlyIncome * 100).toFixed(0)}%
                </span>{" "}
                of income ({debtStressLabel} stress)
              </li>
              <li>
                • Goal Coverage:{" "}
                <span className="font-semibold text-white">
                  {sampleInputs.goalCoveragePct}%
                </span>
              </li>
              <li>
                • Protection Coverage:{" "}
                <span className="font-semibold text-white">
                  {sampleInputs.protectionCoveragePct}%
                </span>
              </li>
              <li>
                • Emergency Fund:{" "}
                <span className="font-semibold text-white">
                  {sampleInputs.emergencyFundMonths} months
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-scores cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Goals / Investments
            </p>
            <p className="mt-2 text-xl font-semibold text-emerald-600">
              {breakdown.goalScore}/100
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Goal-based planning &amp; current investments ka coverage.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Loans / Debt
            </p>
            <p className="mt-2 text-xl font-semibold text-amber-600">
              {breakdown.debtScore}/100
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              EMI load, interest cost aur loan structure health.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Protection
            </p>
            <p className="mt-2 text-xl font-semibold text-sky-600">
              {breakdown.protectionScore}/100
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Term, health aur family protection ki strength.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Liquidity
            </p>
            <p className="mt-2 text-xl font-semibold text-purple-600">
              {breakdown.liquidityScore}/100
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Emergency fund &amp; cash buffer for tough times.
            </p>
          </div>
        </div>

        {/* Detail blocks like pehle */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Investments */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Investments
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Status:{" "}
              <span className="text-emerald-600">
                {breakdown.goalScore >= 80
                  ? "On Track"
                  : breakdown.goalScore >= 60
                  ? "Improving"
                  : "Gap Present"}
              </span>
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              SIPs aur long term investments major goals ko{" "}
              {sampleInputs.goalCoveragePct}% tak cover kar rahe hain. Next step –
              gap wali goals par additional SIP ya restructuring plan banana.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-500">
              <li>• Goal-wise SIP mapping</li>
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
              <span className="text-amber-600">
                {debtStressLabel === "Low"
                  ? "Comfortable"
                  : debtStressLabel === "Medium"
                  ? "Needs Optimisation"
                  : "High Stress"}
              </span>
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Current EMI load approx{" "}
              {(sampleInputs.totalEmi / sampleInputs.monthlyIncome * 100).toFixed(0)}
              % hai. Prepayment, refinance ya restructuring options evaluate karne
              se overall health score improve ho sakta hai.
            </p>
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
              <span className="text-sky-600">
                {breakdown.protectionScore >= 80
                  ? "Adequate"
                  : breakdown.protectionScore >= 60
                  ? "Almost There"
                  : "Under Insured"}
              </span>
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Protection coverage currently{" "}
              {sampleInputs.protectionCoveragePct}% estimated need ke aas-paas hai.
              Focus areas – term cover, health cover &amp; parents ke medical
              expenses ka buffer.
            </p>
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
