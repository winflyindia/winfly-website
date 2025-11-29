// app/loans/page.tsx
"use client";

import { useState, FormEvent } from "react";

function calculateEmi(
  principal: number,
  annualRate: number,
  tenureYears: number
): number {
  if (!principal || !annualRate || !tenureYears) return 0;
  const r = annualRate / 12 / 100; // monthly rate
  const n = tenureYears * 12; // months
  if (r === 0) return principal / n;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
}

export default function LoansPage() {
  // ----- EMI Calculator State -----
  const [calcLoanAmount, setCalcLoanAmount] = useState("1500000");
  const [calcRate, setCalcRate] = useState("9.0");
  const [calcTenure, setCalcTenure] = useState("15");
  const [calcIncome, setCalcIncome] = useState("80000");
  const [calcExistingEmi, setCalcExistingEmi] = useState("25000");

  const principal = Number(calcLoanAmount) || 0;
  const rate = Number(calcRate) || 0;
  const tenure = Number(calcTenure) || 0;
  const income = Number(calcIncome) || 0;
  const existingEmi = Number(calcExistingEmi) || 0;

  const newEmi = calculateEmi(principal, rate, tenure);
  const totalEmi = existingEmi + (newEmi || 0);
  const emiRatio = income > 0 ? totalEmi / income : 0;
  const emiRatioPct = income > 0 ? (emiRatio * 100).toFixed(0) : "—";

  let eligibilityBand: "Comfortable" | "Okay" | "High Stress" = "Comfortable";
  if (!income || !totalEmi) {
    eligibilityBand = "Comfortable";
  } else if (emiRatio <= 0.35) {
    eligibilityBand = "Comfortable";
  } else if (emiRatio <= 0.5) {
    eligibilityBand = "Okay";
  } else {
    eligibilityBand = "High Stress";
  }

  // ----- Loan Enquiry Form State -----
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [loanType, setLoanType] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [existingEmiForm, setExistingEmiForm] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !mobile || !loanType) {
      alert("Please fill Name, Mobile & Loan Type.");
      return;
    }

    const lines = [
      "New Loan Enquiry from WinFly website 👇",
      "",
      `Name: ${fullName}`,
      `Mobile: ${mobile}`,
      city ? `City: ${city}` : "",
      loanType ? `Loan Type: ${loanType}` : "",
      employmentType ? `Employment: ${employmentType}` : "",
      monthlyIncome ? `Monthly Income: ₹${monthlyIncome}` : "",
      existingEmiForm ? `Existing EMIs total: ₹${existingEmiForm}` : "",
      loanAmount ? `Loan Amount Required: ₹${loanAmount}` : "",
      purpose ? `Purpose / Notes: ${purpose}` : "",
      "",
      "Source: WinFly Loan Page",
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
              Smart loan advisory • Not just product selling
            </span>

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Loans jo{" "}
              <span className="text-[#F3C969]">EMI bhi fit karein</span> aur
              future goals bhi.
            </h1>

            <p className="max-w-xl text-sm text-slate-100/90 md:text-[15px]">
              Home loan, personal loan ya business funding – WinFly aapki{" "}
              <span className="font-semibold">
                EMI capacity, interest cost aur goals
              </span>{" "}
              ko saamne rakh kar sahi structure suggest karta hai. No random
              approvals chase, only sensible borrowing.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="#loan-form"
                className="rounded-full bg-[#F3C969] px-6 py-2 font-semibold text-slate-900 shadow-md hover:bg-[#f7d783]"
              >
                Check &amp; apply for loan
              </a>
              <a
                href="https://wa.me/919667205638"
                className="rounded-full border border-white/70 px-6 py-2 font-semibold text-white hover:bg-white/10"
              >
                Share details on WhatsApp
              </a>
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-200/90">
              <span>✓ Multi-bank/NBFC options via partners</span>
              <span>✓ EMI-to-income &amp; debt stress check</span>
              <span>✓ WhatsApp + call support</span>
            </div>
          </div>

          {/* EMI snapshot card */}
          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-2xl bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Quick EMI &amp; eligibility snapshot
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">New EMI (approx)</p>
                  <p className="mt-1 text-sm font-semibold text-[#0A3D91]">
                    ₹{newEmi || 0}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">
                    Total EMIs / Income
                  </p>
                  <p className="mt-1 text-sm font-semibold text-amber-600">
                    {emiRatioPct}%
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Eligibility view</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    {eligibilityBand}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-600">
                Ye sirf ek rough estimate hai. Actual eligibility, interest rate
                aur approval har bank/NBFC ke rules ke hisaab se change ho
                sakta hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EMI CALCULATOR + LOAN TYPES ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.25fr,1fr]">
            {/* EMI Calculator */}
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-sm font-semibold text-slate-900">
                EMI calculator (rough estimate)
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Loan amount, rate aur tenure change karke dekhiye – EMI load
                aapki monthly income ke hisaab se kaisa lag raha hai.
              </p>

              <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Loan amount (₹)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={calcLoanAmount}
                    onChange={(e) => setCalcLoanAmount(e.target.value)}
                    placeholder="1500000"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Interest rate (% p.a.)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={calcRate}
                    onChange={(e) => setCalcRate(e.target.value)}
                    placeholder="9.0"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Tenure (years)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={calcTenure}
                    onChange={(e) => setCalcTenure(e.target.value)}
                    placeholder="15"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Your monthly income (₹)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={calcIncome}
                    onChange={(e) => setCalcIncome(e.target.value)}
                    placeholder="80000"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Existing EMIs (₹)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    value={calcExistingEmi}
                    onChange={(e) => setCalcExistingEmi(e.target.value)}
                    placeholder="25000"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3 text-xs">
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[10px] text-slate-500">Estimated EMI</p>
                  <p className="mt-1 text-lg font-semibold text-[#0A3D91]">
                    ₹{newEmi || 0}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    (new loan ke liye approx)
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[10px] text-slate-500">
                    Total EMI / income
                  </p>
                  <p className="mt-1 text-lg font-semibold text-amber-600">
                    {emiRatioPct}%
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Existing + new EMI mila kar
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[10px] text-slate-500">Eligibility view</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-600">
                    {eligibilityBand}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Detailed check call/WhatsApp par hota hai
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                Ye calculator sirf education purpose ke liye hai. Final loan
                terms bank/NBFC ke policies, credit score aur documentation ke
                hisaab se decide hote hain.
              </p>
            </div>

            {/* Loan type highlights */}
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-sm font-semibold text-slate-900">
                  Kis type ke loans me WinFly help karta hai?
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <li>• Home loan (new, resale, balance transfer, top-up)</li>
                  <li>• Personal loan (clean-up, consolidation, fresh)</li>
                  <li>• Business / MSME and working capital funding</li>
                  <li>• Loan Against Property (secured funding)</li>
                  <li>• Debt restructuring &amp; EMI optimisation plans</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5 text-xs text-slate-100">
                <h3 className="text-sm font-semibold">
                  Why WinFly for loans &amp; EMIs?
                </h3>
                <ul className="mt-2 space-y-1.5">
                  <li>• Product-push nahi, suitability-first approach</li>
                  <li>• Multi-bank/NBFC options via curated partners</li>
                  <li>• EMI, tenure &amp; interest cost ka honest break-up</li>
                  <li>• Pure process WhatsApp + digital docs se chal sakta hai</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loan category cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-3 text-sm">
            {[
              {
                tag: "Home Loan",
                title: "Home purchase & balance transfer",
                desc: "Right tenure, EMI and bank choice – taaki ghar bhi aaye aur cashflow bhi stable rahe.",
              },
              {
                tag: "Personal Loan",
                title: "Personal / clean-up loans",
                desc: "High interest personal loans aur card dues ko systematically clean-up karne ka plan.",
              },
              {
                tag: "Business / MSME",
                title: "Business funding",
                desc: "Working capital, OD/CC aur term loans jo business growth me help karein, stress na create karein.",
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

      {/* ---------------- LOAN ENQUIRY FORM ---------------- */}
      <section id="loan-form" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
            {/* Form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">
                Share your loan details
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Form fill karte hi WhatsApp chat open ho jaayegi jahan hum aapka{" "}
                <span className="font-semibold">
                  loan &amp; EMI structure calmly discuss
                </span>{" "}
                kar sakte hain.
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

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Loan Type*
                    </label>
                    <select
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      value={loanType}
                      onChange={(e) => setLoanType(e.target.value)}
                    >
                      <option value="">Select loan type</option>
                      <option>Home Loan</option>
                      <option>Personal Loan</option>
                      <option>Business / MSME Loan</option>
                      <option>Loan Against Property</option>
                      <option>Balance Transfer / Top-up</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Employment Type
                    </label>
                    <select
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                    >
                      <option value="">Select employment</option>
                      <option>Salaried</option>
                      <option>Self-employed / Professional</option>
                      <option>Business Owner</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Monthly Income (approx)
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="e.g. 80000"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Existing EMIs total (approx)
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="e.g. 30000"
                      value={existingEmiForm}
                      onChange={(e) => setExistingEmiForm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Loan Amount Required (approx)
                  </label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    placeholder="e.g. 1200000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Purpose / Notes
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    rows={4}
                    placeholder="Home purchase, business expansion, consolidation, etc."
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0A3D91] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c3273]"
                >
                  Submit &amp; Open WhatsApp
                </button>

                <p className="mt-3 text-[11px] text-slate-500">
                  WinFly kisi bhi specific approval, interest rate ya sanction
                  ki guarantee nahi deta. Final decision hamesha respective
                  bank/NBFC policies ke hisaab se hota hai.
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
                  <li>• WinFly team basic follow-up questions poochti hai.</li>
                  <li>• 15–20 minute ki clarity call fix hoti hai.</li>
                  <li>• Options explain karke aapko decision support milta hai.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 text-xs">
                <h3 className="text-sm font-semibold text-slate-900">
                  Frequently asked questions
                </h3>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">
                      Kya WinFly khud loan deta hai?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Nahi. WinFly ek{" "}
                      <span className="font-semibold">
                        advisory &amp; facilitation platform
                      </span>{" "}
                      hai. Execution partner banks/NBFCs ke through hota hai.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      EMI kitni honi chahiye meri income ke hisaab se?
                    </p>
                    <p className="mt-1 text-slate-600">
                      General thumb rule 30–40% hai, lekin har family ka budget
                      aur responsibilities alag hoti hain. Isliye hum personalised
                      view dete hain.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Balance transfer kab sensible hai?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Jab interest rate difference + remaining tenure milkar
                      actual saving create kare. Sirf rate dekhenge to galat
                      decision ho sakta hai – hum pura maths karke dikhate hain.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Documents kaise dene honge?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Basic KYC, income proof, bank statements etc. mostly{" "}
                      <span className="font-semibold">digital scan/PDF</span> se
                      hi kaam ho jaata hai. Exact list bank/NBFC ke hisaab se
                      share ki jaati hai.
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
                Confused about multiple EMIs &amp; loans?
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                15–20 minute ki clarity call me hum aapko simple language me
                bata denge ki stay, prepay ya refinance – kaunsa route zyada
                sensible hai.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a
                href="#loan-form"
                className="rounded-full bg-[#F3C969] px-5 py-2 font-semibold text-slate-900 hover:bg-[#f7d783]"
              >
                Fill loan form
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
              Ready to discuss your loan?
            </p>
            <p className="text-[11px] text-slate-500">
              Form ya WhatsApp – jo aapke liye easy ho.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="#loan-form"
              className="rounded-full bg-[#0A3D91] px-4 py-1.5 font-semibold text-white"
            >
              Apply
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
