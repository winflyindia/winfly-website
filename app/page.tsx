// app/page.tsx

import TopNav from "./components/TopNav";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />
      {/* tumhara existing hero + sections yahan se niche waise hi rehne do */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3D91] via-[#102A5C] to-[#0A3D91] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          {/* Left */}
          <div className="flex-1 space-y-6">
            <p className="inline rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wide">
              DPIIT Recognised · MSME Registered · FinTech Advisory
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Smart Financial Decisions,
              <span className="text-[#F3C969]"> Simplified with WinFly.</span>
            </h1>
            <p className="max-w-xl text-sm md:text-base text-slate-100/90">
              AI-powered guidance for investments, loans and insurance — designed for Indian families 
              and supported by human experts. One platform for your financial life.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-[#F3C969] px-6 py-2 text-sm font-semibold text-slate-900 shadow-md hover:bg-[#f7d783]">
                Get Free Financial Checkup
              </button>
              <button className="rounded-full border border-white/60 px-6 py-2 text-sm font-semibold hover:bg-white/10">
                Talk to an Expert on WhatsApp
              </button>
            </div>
            <p className="text-xs text-slate-100/80">
              AMFI-registered advisory · SEBI-compliant products via partnered platforms · 100% paperless onboarding
            </p>
          </div>

          {/* Right – Mockup Card */}
          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                WinFly Financial Snapshot
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                Vaibhav, here&apos;s your overview
              </h2>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Risk Profile</p>
                  <p className="mt-1 text-sm font-semibold text-[#0A3D91]">Balanced</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Goal Match</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">82%</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Plan Status</p>
                  <p className="mt-1 text-sm font-semibold text-amber-600">On Track</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-800">Investments</p>
                    <p className="text-[11px] text-slate-500">SIP, goals & asset mix</p>
                  </div>
                  <p className="text-[11px] font-semibold text-emerald-600">Optimised</p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-800">Loans</p>
                    <p className="text-[11px] text-slate-500">EMI & interest burden</p>
                  </div>
                  <p className="text-[11px] font-semibold text-amber-600">Review</p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-800">Insurance</p>
                    <p className="text-[11px] text-slate-500">Health & life coverage</p>
                  </div>
                  <p className="text-[11px] font-semibold text-sky-600">Adequate</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-full bg-[#0A3D91] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0c3273]">
                View My Full Financial Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-[11px] md:text-xs">
          <span className="font-semibold text-slate-700">
            Trusted, compliant & designed for Indian investors
          </span>
          <div className="flex flex-wrap gap-3 text-slate-500">
            <span>DPIIT Recognised Startup</span>
            <span>MSME Registered</span>
            <span>AMFI-registered advisory</span>
          </div>
        </div>
      </section>

      {/* How WinFly Helps */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                How WinFly helps you
              </h2>
              <p className="text-sm text-slate-600">
                One platform for your investments, protection and borrowing needs.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Invest Smarter",
                desc: "Goal-based SIPs, risk-aware planning and ongoing guidance.",
              },
              {
                title: "Protect Better",
                desc: "Choose the right health and term cover without confusion.",
              },
              {
                title: "Borrow Wisely",
                desc: "Understand and compare loan options before you sign.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{card.desc}</p>
                <button className="mt-4 w-fit text-xs font-semibold text-[#0A3D91] hover:underline">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WinFly */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why families choose WinFly
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            A modern, transparent and technology-driven approach to Indian money management.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {[
              {
                title: "AI + Human Advisory",
                desc: "Smart profiling backed by real advisors for better decisions.",
              },
              {
                title: "Transparent Comparisons",
                desc: "Clear pros and cons, no hidden agendas or confusing jargon.",
              },
              {
                title: "Paperless & Digital",
                desc: "Onboarding, docs and tracking — all handled online.",
              },
              {
                title: "Made for Indians",
                desc: "EMIs, education, retirement and family needs at the centre.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            How it works
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Simple, guided steps from confusion to clarity.
          </p>

          <ol className="mt-6 grid gap-5 md:grid-cols-4 text-sm">
            {[
              "Share your goals and basic financial details.",
              "Get your risk and need profile using our AI engine.",
              "See a clear recommendation for investments, loans and insurance.",
              "Implement the plan with human support and ongoing guidance.",
            ].map((step, index) => (
              <li
                key={index}
                className="relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0A3D91] text-xs font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-xs text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-[2fr,1.4fr]">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Questions you might have
            </h2>
            <div className="mt-5 space-y-3 text-sm">
              {[
                {
                  q: "Is WinFly a broker or a platform?",
                  a: "WinFly acts as an advisory and facilitation platform. Execution of products happens via partnered, compliant platforms.",
                },
                {
                  q: "How do you charge?",
                  a: "We combine commission income from partners with transparent advisory fees and plans. All charges are disclosed before you proceed.",
                },
                {
                  q: "Is my data safe?",
                  a: "We follow strong data privacy practices and only request information that is necessary to plan your finances.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900">
                    <span className="text-[13px] font-semibold">{item.q}</span>
                    <span className="text-xs text-slate-500 group-open:hidden">
                      +
                    </span>
                    <span className="hidden text-xs text-slate-500 group-open:inline">
                      –
                    </span>
                  </summary>
                  <p className="mt-2 text-xs text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Side CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0A3D91] to-[#061c4a] p-6 text-white">
            <h3 className="text-lg font-semibold">
              Ready to get a clear picture of your finances?
            </h3>
            <p className="mt-2 text-sm text-slate-100/90">
              Book a free 15-minute clarity call. No sales pitch, just structured 
              guidance on where you stand and what you can improve.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <button className="w-full rounded-full bg-[#F3C969] px-4 py-2 font-semibold text-slate-900 hover:bg-[#f7d783]">
                Book a Free Call
              </button>
              <button className="w-full rounded-full border border-white/50 px-4 py-2 font-semibold hover:bg-white/10">
                Message on WhatsApp
              </button>
            </div>
            <p className="mt-3 text-[11px] text-slate-200">
              Disclaimer: WinFly does not guarantee returns. All investments and 
              loans are subject to market and regulatory risks. Please read all 
              documents carefully before investing or borrowing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} WinFly India Services Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <span>Registered Office: L-45, Mohan Garden, Uttam Nagar, New Delhi</span>
            <span>MSME & DPIIT Recognised Startup</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
