// app/investments/page.tsx
"use client";

import { useState, FormEvent } from "react";

// Simple SIP future value calculator
function calculateSipFutureValue(
  monthlySip: number,
  annualRate: number,
  years: number
): number {
  if (!monthlySip || !annualRate || !years) return 0;
  const r = annualRate / 12 / 100; // monthly rate
  const n = years * 12; // total months
  if (r === 0) return monthlySip * n;
  const fv = monthlySip * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  return Math.round(fv);
}

export default function InvestmentsPage() {
  // ----- SIP Calculator State -----
  const [sipAmount, setSipAmount] = useState("10000");
  const [sipRate, setSipRate] = useState("12");
  const [sipYears, setSipYears] = useState("15");

  const sip = Number(sipAmount) || 0;
  const rate = Number(sipRate) || 0;
  const years = Number(sipYears) || 0;

  const futureValue = calculateSipFutureValue(sip, rate, years);
  const totalInvested = sip * (years * 12);
  const gains = futureValue - totalInvested;

  let horizonLabel = "Long-term growth";
  if (years < 3) horizonLabel = "Very short-term";
  else if (years < 7) horizonLabel = "Medium-term goals";
  else if (years < 12) horizonLabel = "Long-term goals";
  else horizonLabel = "Wealth creation horizon";

  // Risk-ish tag (just educational)
  let riskProfile: "Conservative" | "Balanced" | "Aggressive" = "Balanced";
  if (rate <= 9) riskProfile = "Conservative";
  else if (rate <= 12) riskProfile = "Balanced";
  else riskProfile = "Aggressive";

  // ----- Investment Enquiry Form State -----
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [focusType, setFocusType] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [existingInvestments, setExistingInvestments] = useState("");
  const [goalSummary, setGoalSummary] = useState("");
  const [timeHorizon, setTimeHorizon] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !mobile) {
      alert("Please fill at least Name & Mobile.");
      return;
    }

    const lines = [
      "New Investment / SIP Enquiry from WinFly website 👇",
      "",
      `Name: ${fullName}`,
      `Mobile: ${mobile}`,
      city ? `City: ${city}` : "",
      focusType ? `Investment focus: ${focusType}` : "",
      monthlyBudget ? `Monthly SIP budget: ₹${monthlyBudget}` : "",
      existingInvestments
        ? `Existing MF/investments approx: ₹${existingInvestments}`
        : "",
      goalSummary ? `Goals summary: ${goalSummary}` : "",
      timeHorizon ? `Approx time horizon: ${timeHorizon}` : "",
      "",
      "Source: WinFly Investments Page",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/919667205638?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-14 md:pb-0">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3D91] via-[#071f4f] to-[#020617] text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-sky-400 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4rem] right-[-4rem] h-80 w-80 rounded-full bg-amber-300 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 md:flex-row md:items-center md:py-18">
          <div className="flex-1 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AMFI-backed mutual fund advisory • Goal-based SIP planning
            </span>

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              SIPs jo{" "}
              <span className="text-[#F3C969]">
                sirf returns nahi, goals fund karein.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-100/90 md:text-[15px]">
              WinFly aapke{" "}
              <span className="font-semibold">
                education, retirement, home aur business
              </span>{" "}
              jaise real goals ke around SIP planning karta hai – random hot
              tips ya “best fund” chasing nahi.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="#invest-form"
                className="rounded-full bg-[#F3C969] px-6 py-2 font-semibold text-slate-900 shadow-md hover:bg-[#f7d783]"
              >
                Start / review your SIP plan
              </a>
              <a
                href="https://wa.me/919667205638"
                className="rounded-full border border-white/70 px-6 py-2 font-semibold text-white hover:bg-white/10"
              >
                Discuss on WhatsApp
              </a>
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-200/90">
              <span>✓ Goal-wise SIP mapping</span>
              <span>✓ Portfolio clean-up &amp; review</span>
              <span>✓ Risk-profile based advice</span>
            </div>

            <p className="mt-2 text-[10px] text-slate-300">
              Mutual fund investments are subject to market risks. Please read
              all scheme related documents carefully before investing.
            </p>
          </div>

          {/* SIP snapshot card */}
          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-2xl bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Sample SIP projection snapshot
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Monthly SIP</p>
                  <p className="mt-1 text-sm font-semibold text-[#0A3D91]">
                    ₹{sip || 0}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">
                    Time horizon (yrs)
                  </p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    {years || 0}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">
                    Risk orientation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-amber-600">
                    {riskProfile}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Total invested</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    ₹{totalInvested.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Projected value*</p>
                  <p className="mt-1 text-sm font-semibold text-[#0A3D91]">
                    ₹{futureValue.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Growth (approx)</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    ₹{gains > 0 ? gains.toLocaleString("en-IN") : 0}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-600">
                Ye calculator sirf illustration hai – actual returns market
                behavior, fund choice &amp; asset allocation par depend karte
                hain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SIP CALCULATOR & GOAL CARDS ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            {/* SIP Calculator */}
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-sm font-semibold text-slate-900">
                Play with your SIP numbers
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Monthly SIP, expected return aur time horizon change karke
                dekhiye – aapke goals ke liye kis range ka SIP practical lagta
                hai, idea mil jaayega.
              </p>

              <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Monthly SIP (₹)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(e.target.value)}
                    placeholder="10000"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Expected return (% p.a.)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={sipRate}
                    onChange={(e) => setSipRate(e.target.value)}
                    placeholder="12"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Time horizon (years)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={sipYears}
                    onChange={(e) => setSipYears(e.target.value)}
                    placeholder="15"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-4 text-xs md:grid-cols-3">
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[10px] text-slate-500">Total invested</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    ₹{totalInvested.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[10px] text-slate-500">
                    Projected value (approx)
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0A3D91]">
                    ₹{futureValue.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[10px] text-slate-500">
                    Horizon &amp; risk hint
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-emerald-600">
                    {horizonLabel}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    {riskProfile} style expectation
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                Ye tool aapko sirf ek{" "}
                <span className="font-semibold">directional feel</span> deta
                hai. Real planning me tax, inflation, goal timeline aur asset
                mix bhi count hota hai – jo WinFly ke saath call me discuss
                hota hai.
              </p>
            </div>

            {/* Goal highlights */}
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-sm font-semibold text-slate-900">
                  Kis type ke goals ke liye SIP plan karte hain?
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <li>• Child education &amp; higher studies</li>
                  <li>• Retirement &amp; financial independence</li>
                  <li>• House down payment / upgrade</li>
                  <li>• Business expansion &amp; corpus building</li>
                  <li>• “Just in case” long-term wealth corpus</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5 text-xs text-slate-100">
                <h3 className="text-sm font-semibold">
                  How WinFly works for investments
                </h3>
                <ul className="mt-2 space-y-1.5">
                  <li>• First step – financial health &amp; risk profiling</li>
                  <li>• Phir goal-wise SIP &amp; lumpsum structure</li>
                  <li>• Partner platforms ke through execution &amp; tracking</li>
                  <li>• Regular review &amp; portfolio clean-up suggestions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Goal based cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-3 text-sm">
            {[
              {
                tag: "Children's Education",
                title: "Future-ready education fund",
                desc: "School + college + higher education tak ka goal-wise planning – abroad options ko bhi dhyan me rakh kar.",
              },
              {
                tag: "Retirement",
                title: "Peaceful, independent retirement",
                desc: "EMIs khatam hone ke baad bhi lifestyle sustain ho sake – aisa corpus build karne ka roadmap.",
              },
              {
                tag: "Wealth Creation",
                title: "Long-term wealth compounding",
                desc: "Discipline based SIPs jo 10–20 saal me seriously meaningful corpus create karein.",
              },
            ].map((card) => (
              <div
                key={card.tag}
                className="flex flex-col rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                  {card.tag}
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INVESTMENT ENQUIRY FORM ---------------- */}
      <section id="invest-form" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
            {/* Form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">
                Share your investment / SIP details
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Neeche basic details fill kijiye –{" "}
                <span className="font-semibold">
                  submit karte hi WhatsApp chat open
                </span>{" "}
                ho jaayegi jahan hum aapka plan calmly structure kar sakte hain.
              </p>

              <form className="mt-6 space-y-4 text-sm" onSubmit={handleSubmit}>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Full Name*
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="10 digit mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      City
                    </label>
                    <input
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="City / Location"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Investment focus
                  </label>
                  <select
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={focusType}
                    onChange={(e) => setFocusType(e.target.value)}
                  >
                    <option value="">Select focus area</option>
                    <option>SIP for long-term goals</option>
                    <option>Child education planning</option>
                    <option>Retirement planning</option>
                    <option>Portfolio clean-up / review</option>
                    <option>Lumpsum investment decision</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Monthly SIP budget (approx)
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="e.g. 15000"
                      value={monthlyBudget}
                      onChange={(e) => setMonthlyBudget(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Existing investments approx
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="e.g. 500000"
                      value={existingInvestments}
                      onChange={(e) =>
                        setExistingInvestments(e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Your main goals / notes
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    rows={4}
                    placeholder="E.g. child education at age 18, own retirement at 55, house down payment in 7 years, etc."
                    value={goalSummary}
                    onChange={(e) => setGoalSummary(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Approx time horizon
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    placeholder="e.g. 10–15 years overall, 5 years for home, etc."
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0A3D91] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c3273]"
                >
                  Submit &amp; Open WhatsApp
                </button>

                <p className="mt-3 text-[11px] text-slate-500">
                  WinFly mutual funds/products ka{" "}
                  <span className="font-semibold">issuer nahi</span> hai. Hum
                  sirf advisory, planning &amp; facilitation provide karte hain.
                  All investments are subject to market risks.
                </p>
              </form>
            </div>

            {/* Info + FAQ */}
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-base font-semibold text-slate-900">
                  What happens after you submit?
                </h3>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                  <li>• Details WhatsApp par share ho jaate hain.</li>
                  <li>• WinFly team aapse goals &amp; risk ke bare me poochti hai.</li>
                  <li>• 15–20 minute ki clarity call schedule hoti hai.</li>
                  <li>• Goal-wise SIP structure aur action plan share hota hai.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 text-xs">
                <h3 className="text-sm font-semibold text-slate-900">
                  Frequently asked questions
                </h3>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">
                      Kya WinFly fund recommendations deta hai?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Haan, lekin sirf goal, risk profile aur existing portfolio
                      samajhne ke baad. Random “top 10 funds” wali list nahi.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Minimum SIP kitna hona chahiye?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Technical minimum to ₹500–₹1000 se bhi start ho sakta hai,
                      lekin hum aapke goals &amp; income ke hisaab se practical
                      range suggest karte hain.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Review kitni baar karte hain?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Normally{" "}
                      <span className="font-semibold">yearly review</span>,
                      lekin major life events (job change, loan, new goal) par
                      bhi portfolio ko adjust karna padta hai.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Execution kahan se hota hai?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Execution hamare{" "}
                      <span className="font-semibold">
                        curated partner platforms
                      </span>{" "}
                      ke through hota hai jaha pe aapke investments track &amp;
                      report ho sakte hain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA (DESKTOP) ---------------- */}
      <section className="hidden bg-slate-900 text-slate-50 md:block">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex items-center justify-between gap-4 text-sm">
            <div>
              <p className="text-[13px] font-semibold">
                Want to clean up &amp; structure your investments?
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Random scattered SIPs ko goals se map karke dekhenge – kya hold
                karein, kya shift karein, kya stop karein – sab clear ho
                jaayega.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a
                href="#invest-form"
                className="rounded-full bg-[#F3C969] px-5 py-2 font-semibold text-slate-900 hover:bg-[#f7d783]"
              >
                Fill SIP planning form
              </a>
              <a
                href="https://wa.me/919667205638"
                className="rounded-full border border-slate-500 px-5 py-2 font-semibold text-slate-50 hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STICKY CTA (MOBILE) ---------------- */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-2 shadow-sm md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 text-xs">
          <div className="flex-1">
            <p className="font-semibold text-slate-900">
              Ready to plan your SIPs?
            </p>
            <p className="text-[11px] text-slate-500">
              Form ya WhatsApp – jo easy lage.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="#invest-form"
              className="rounded-full bg-[#0A3D91] px-4 py-1.5 font-semibold text-white"
            >
              Start
            </a>
            <a
              href="https://wa.me/919667205638"
              className="rounded-full border border-slate-300 px-4 py-1.5 font-semibold text-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
