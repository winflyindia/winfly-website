// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3D91] via-[#071f4f] to-[#020617] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-400 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4rem] right-[-4rem] h-80 w-80 rounded-full bg-amber-300 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          {/* Left content */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              DPIIT & MSME Registered • AMFI-backed expertise
            </span>

            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Smarter{" "}
              <span className="text-[#F3C969]">money decisions</span> for
              Indian families.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-slate-100/90">
              WinFly India Services Private Limited builds a technology-driven
              ecosystem that brings{" "}
              <span className="font-semibold">
                investments, loans and insurance
              </span>{" "}
              on one transparent platform — so aapka poora financial life
              ek jagah se plan ho sakta hai.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-[#F3C969] px-6 py-2 text-sm font-semibold text-slate-900 shadow-md hover:bg-[#f7d783]"
              >
                Book Free Financial Clarity Call
              </a>
              <a
                href="https://wa.me/919667205638"
                className="rounded-full border border-white/70 px-6 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-[11px] text-slate-200/90">
              No hard selling. Pehle samjhayenge, fir options dikhaayenge —
              final decision hamesha aapka.
            </p>
          </div>

          {/* Right mockup card */}
          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-2xl bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sample WinFly dashboard
              </p>
              <h2 className="mt-1 text-lg font-semibold">
                Your money, one simple view
              </h2>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Risk Profile</p>
                  <p className="mt-1 text-sm font-semibold text-[#0A3D91]">
                    Balanced
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Goal Coverage</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    82%
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Debt Stress</p>
                  <p className="mt-1 text-sm font-semibold text-amber-600">
                    Medium
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-900">Investments</p>
                    <p className="text-[11px] text-slate-500">
                      SIPs, lump-sum & asset mix
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-emerald-600">
                    On track
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-900">Loans</p>
                    <p className="text-[11px] text-slate-500">
                      EMI load & interest cost
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-amber-600">
                    Review
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-900">Insurance</p>
                    <p className="text-[11px] text-slate-500">
                      Health & term coverage
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-sky-600">
                    Adequate
                  </p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-full bg-[#0A3D91] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0c3273]">
                See how WinFly can structure my finances
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-[11px] md:text-xs">
          <span className="font-semibold text-slate-700">
            Built for Indian middle-class & business families
          </span>
          <div className="flex flex-wrap gap-3 text-slate-500">
            <span>DPIIT Recognised Startup</span>
            <span>Udyam MSME Registered</span>
            <span>AMFI-based mutual fund advisory</span>
          </div>
        </div>
      </section>

      {/* HOW WINFLY HELPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                One platform, three core pillars
              </h2>
              <p className="text-sm text-slate-600">
                Invest smarter, protect better and borrow wisely — all aligned
                to your real-life goals.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Invest Smarter",
                desc: "Goal-based SIPs and mutual funds mapped to education, home and retirement.",
                badge: "Mutual Funds & SIPs",
              },
              {
                title: "Protect Better",
                desc: "Right health and term insurance coverage so family secure rahe in any situation.",
                badge: "Insurance Guidance",
              },
              {
                title: "Borrow Wisely",
                desc: "Loan comparison, EMI planning and prepayment strategy to reduce interest burden.",
                badge: "Loan Advisory",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                  {card.badge}
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {card.desc}
                </p>
                <a
                  href="/services"
                  className="mt-4 w-fit text-xs font-semibold text-[#0A3D91] hover:underline"
                >
                  Explore services →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONA SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            WinFly kis ke liye best hai?
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Agar aap in categories me aate ho, to WinFly aapke liye specially
            design hua hai.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Salaried Individuals
              </h3>
              <p className="mt-2 text-slate-600">
                SIP, emergency fund, tax planning, home loan, car loan — sab ek
                structured plan me.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Business Owners / Self-Employed
              </h3>
              <p className="mt-2 text-slate-600">
                Cashflow planning, business loans, protection cover and
                retirement planning in one view.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Indian Families
              </h3>
              <p className="mt-2 text-slate-600">
                Child education, parents ki health, own retirement — sab
                priorities ko balance karne wala long-term plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR / DPIIT STYLE SECTION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            For DPIIT, incubators & partners
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            WinFly is building an integrated, tech-led financial guidance layer
            for Bharat&apos;s mass affluent and aspiring middle class.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 text-sm">
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Problem
                </h3>
                <p className="mt-1 text-slate-600">
                  Financial advisory market is highly unorganised, product-push
                  driven and offline. Users rely on agents, random YouTube
                  advice and fragmented apps.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  WinFly&apos;s Solution
                </h3>
                <p className="mt-1 text-slate-600">
                  Unified platform combining AI-based profiling, structured
                  advisory journeys and human-assisted decision making across
                  investments, loans and insurance.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Innovation
                </h3>
                <p className="mt-1 text-slate-600">
                  Multi-product advisory + automated workflows + goal-based
                  planning, built specifically around Indian household cashflow
                  patterns and EMI realities.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Scalability
                </h3>
                <p className="mt-1 text-slate-600">
                  Digital-first model, PAN India reach, partner integrations and
                  advisor / affiliate network enable high employment and wealth
                  creation potential.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Revenue Model
                </h3>
                <p className="mt-1 text-slate-600">
                  Commission income from partner products, advisory fees,
                  subscription tools for serious investors and curated
                  cross-sell/upsell journeys.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-slate-50">
                <h3 className="text-sm font-semibold">Collaboration</h3>
                <p className="mt-1 text-xs text-slate-200">
                  Incubators, NBFCs, fintechs and wealth partners can reach a
                  ready Indian audience via structured, compliant journeys.
                  Write to{" "}
                  <span className="font-semibold">
                    support@winflyindia.in
                  </span>{" "}
                  for collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            How WinFly works
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            4 simple, guided steps — from confusion to clarity.
          </p>

          <ol className="mt-6 grid gap-5 text-sm md:grid-cols-4">
            {[
              "You share goals, existing loans and basic details.",
              "Our engine builds your risk/need profile and prioritises issues.",
              "You get a structured plan for investments, protection and loans.",
              "You implement with our support and track periodically.",
            ].map((step, index) => (
              <li
                key={index}
                className="relative rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100"
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

      {/* FINAL CTA + FOOTER */}
      <section className="bg-[#020617] text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Ready to clean up your financial life?
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Chai pe 15–20 minute ki clarity call. Aapke current situation,
                EMIs, goals aur mistakes calmly discuss karte hain — phir ek
                clear, written action plan dete hain.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href="/contact"
                  className="rounded-full bg-[#F3C969] px-6 py-2 font-semibold text-slate-900 hover:bg-[#f7d783]"
                >
                  Book a Free Clarity Call
                </a>
                <a
                  href="https://wa.me/919667205638"
                  className="rounded-full border border-slate-500 px-6 py-2 font-semibold text-slate-100 hover:bg-slate-900/60"
                >
                  Message on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Disclaimer: WinFly kisi bhi return ya profit ki guarantee nahi
                deta. All investments and loans are subject to market and
                regulatory risks. Please read all documents carefully before
                investing or borrowing.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">
                WinFly India Services Private Limited
              </p>
              <p>
                Registered Office: L-45, L Block, Mohan Garden, Near Happy
                Chowk, Uttam Nagar, New Delhi – 110059, India
              </p>
              <p>Corporate Email: support@winflyindia.in</p>
              <p>MSME & DPIIT Recognised Startup • CIN: U66190DL2024PTC429090</p>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
            © 2024 WinFly India Services Private Limited. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
