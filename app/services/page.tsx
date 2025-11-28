// app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | WinFly India Services Private Limited",
  description:
    "WinFly India Services Private Limited provides goal-based investment planning, loan advisory and insurance protection through a hybrid human + digital advisory model.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Our Services
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            Smart financial decisions for real Indian families
          </h1>
          <p className="mt-3 text-sm text-slate-600 md:text-[15px]">
            WinFly helps you organise your{" "}
            <span className="font-semibold">investments, loans and insurance</span>{" "}
            in one advisory framework. We do not push random products – instead we
            align everything to your goals, cashflows and risk profile.
          </p>
        </header>

        {/* Three core service pillars */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Investments */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 text-sm font-semibold">
              MF
            </div>
            <h2 className="mt-3 text-sm font-semibold text-slate-900">
              Investments &amp; Wealth Creation
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Goal-based mutual fund &amp; investment planning for long-term wealth
              creation, children&apos;s education, retirement and other life goals.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
              <li>• Goal-wise SIP planning &amp; top-up suggestions</li>
              <li>• Asset allocation as per your risk profile</li>
              <li>• Portfolio clean-up &amp; duplicate schemes removal</li>
              <li>• Review &amp; rebalancing at regular intervals</li>
            </ul>
          </div>

          {/* Loans */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 text-sm font-semibold">
              Loan
            </div>
            <h2 className="mt-3 text-sm font-semibold text-slate-900">
              Loans &amp; Debt Management
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Right loan structure, EMI planning and refinancing suggestions so
              that aapke liabilities manageable rahein and growth continue rahe.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
              <li>• Home, personal, business &amp; LAP advisory</li>
              <li>• EMI-to-income analysis &amp; debt stress check</li>
              <li>• Consolidation &amp; balance transfer strategies</li>
              <li>• Prepayment vs investment comparison</li>
            </ul>
          </div>

          {/* Insurance */}
          <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 text-sm font-semibold">
              Ins
            </div>
            <h2 className="mt-3 text-sm font-semibold text-slate-900">
              Insurance &amp; Protection
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Term plan, health cover and other protection tools ko structure
              karke family ki financial security ko priority pe rakhna.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
              <li>• Term insurance gap analysis</li>
              <li>• Health insurance planning for family &amp; parents</li>
              <li>• Existing policies ki review &amp; clean-up</li>
              <li>• Protection-first framework before investing</li>
            </ul>
          </div>
        </div>

        {/* How WinFly works */}
        <section className="mt-10 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 md:p-6">
          <h2 className="text-sm font-semibold text-slate-900">
            How WinFly works with you
          </h2>
          <p className="mt-2 text-xs text-slate-600 md:text-[13px]">
            WinFly follows a <span className="font-semibold">hybrid advisory model</span>{" "}
            – structured digital process + human guidance. Execution hamare
            partner platforms ke through hota hai, but planning &amp; clarity
            WinFly provide karta hai.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4 text-[11px] text-slate-700">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Step 1
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Financial health check
              </p>
              <p className="mt-1.5">
                Income, EMIs, goals, insurance aur emergency fund ko map karke
                ek{" "}
                <span className="font-semibold">
                  WinFly Financial Health Score
                </span>{" "}
                banaya jata hai.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-[11px] text-slate-700">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Step 2
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Action plan &amp; structure
              </p>
              <p className="mt-1.5">
                Goals, loans &amp; protection ko priority-wise arrange karke
                ek practical roadmap banaya jata hai jo real-life cashflow se
                match kare.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-[11px] text-slate-700">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Step 3
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Execution via partners
              </p>
              <p className="mt-1.5">
                Investments, loans aur insurance ka execution hamare partner
                platforms ke through hota hai – saari documentation &amp; process
                me WinFly aapke saath rehta hai.
              </p>
            </div>
          </div>
        </section>

        {/* Partnered companies */}
        <section className="mt-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Partnered Platforms &amp; Alliances
              </h2>
              <p className="mt-1 text-xs text-slate-600 max-w-xl">
                WinFly khud product issuer nahi hai. Hum{" "}
                <span className="font-semibold">
                  curated, compliant partner platforms
                </span>{" "}
                ke saath milkar aapko execution options dete hain – taaki aapko
                saari services ek hi advisory framework me mil sakein.
              </p>
            </div>
            <p className="mt-1 text-[10px] text-slate-500">
              *Logos belong to respective companies. WinFly acts as an
              intermediary / distribution partner as per applicable guidelines.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {/* Wealthy */}
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-24">
                  <Image
                    src="/partners/wealthy.png"
                    alt="Wealthy.in"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700">
                  Investments &amp; Insurance
                </span>
              </div>
              <p className="mt-2 text-[11px] text-slate-600">
                Through Wealthy platform, WinFly helps clients execute{" "}
                <span className="font-semibold">
                  mutual funds, market-linked products and select insurance
                  solutions
                </span>{" "}
                with proper tracking and reporting.
              </p>
              <ul className="mt-2 space-y-1 text-[10px] text-slate-500">
                <li>• Goal-based SIP execution</li>
                <li>• Portfolio tracking dashboard</li>
                <li>• Digital documentation &amp; KYC</li>
              </ul>
            </div>

            {/* InvestKraft */}
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-28">
                  <Image
                    src="/partners/investkraft.png"
                    alt="InvestKraft"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-700">
                  Loans
                </span>
              </div>
              <p className="mt-2 text-[11px] text-slate-600">
                InvestKraft network ke through WinFly{" "}
                <span className="font-semibold">
                  home loan, personal loan, balance transfer
                </span>{" "}
                jaise options evaluate karne me help karta hai – with focus on
                overall EMI suitability.
              </p>
              <ul className="mt-2 space-y-1 text-[10px] text-slate-500">
                <li>• Multi-bank loan options</li>
                <li>• EMI impact assessment</li>
                <li>• Documentation guidance</li>
              </ul>
            </div>

            {/* Lendingkart */}
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-32">
                  <Image
                    src="/partners/lendingkart.png"
                    alt="Lendingkart"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-medium text-indigo-700">
                  Business Loans
                </span>
              </div>
              <p className="mt-2 text-[11px] text-slate-600">
                Business owners ke liye WinFly, Lendingkart ecosystem ke saath
                milkar{" "}
                <span className="font-semibold">
                  working capital &amp; business loan
                </span>{" "}
                requirements ka structure analyse karta hai.
              </p>
              <ul className="mt-2 space-y-1 text-[10px] text-slate-500">
                <li>• MSME focused funding options</li>
                <li>• Cashflow-based assessment</li>
                <li>• Growth-focused loan structuring</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-5 py-4 text-sm text-slate-50">
            <div className="max-w-xl">
              <p className="text-[13px] font-semibold">
                Confused where to start? Let&apos;s map your current situation
                first.
              </p>
              <p className="mt-1 text-[11px] text-slate-200">
                WhatsApp / call par ek{" "}
                <span className="font-semibold">15–20 min discovery call</span>{" "}
                se hum aapke loans, investments &amp; insurance ka high-level
                health check kar sakte hain.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a
                href="https://wa.me/919667205638"
                className="rounded-full bg-[#25D366] px-4 py-1.5 font-semibold text-slate-900 hover:bg-[#1ebe5b]"
              >
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                className="rounded-full border border-slate-400 px-4 py-1.5 font-semibold text-slate-50 hover:bg-white/10"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
