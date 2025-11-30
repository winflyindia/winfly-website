"use client";

import { FormEvent, useState } from "react";

export default function InsurancePage() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [occupationType, setOccupationType] = useState("");
  const [incomeRange, setIncomeRange] = useState("");

  const [focusType, setFocusType] = useState("");
  const [adultsCount, setAdultsCount] = useState("");
  const [kidsCount, setKidsCount] = useState("");

  const [employerHealthCover, setEmployerHealthCover] = useState("");
  const [personalHealthCover, setPersonalHealthCover] = useState("");
  const [parentsCover, setParentsCover] = useState("");
  const [termCover, setTermCover] = useState("");

  const [premiumBudget, setPremiumBudget] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !mobile) {
      alert("Please fill at least Name & Mobile.");
      return;
    }

    const lines = [
      "New Insurance / Protection enquiry from WinFly website 👇",
      "",
      `Name: ${fullName}`,
      `Mobile: ${mobile}`,
      email ? `Email: ${email}` : "",
      city ? `City: ${city}` : "",
      age ? `Age: ${age}` : "",
      maritalStatus ? `Marital status: ${maritalStatus}` : "",
      occupationType ? `Occupation: ${occupationType}` : "",
      incomeRange ? `Approx annual income: ${incomeRange}` : "",
      "",
      focusType ? `Main protection focus: ${focusType}` : "",
      adultsCount || kidsCount
        ? `Family to cover: ${adultsCount || "0"} adults + ${
            kidsCount || "0"
          } kids`
        : "",
      premiumBudget ? `Premium budget (monthly / yearly): ${premiumBudget}` : "",
      "",
      employerHealthCover ? `Employer health cover: ${employerHealthCover}` : "",
      personalHealthCover
        ? `Personal health policy: ${personalHealthCover}`
        : "",
      parentsCover ? `Parents / seniors cover: ${parentsCover}` : "",
      termCover ? `Term insurance status: ${termCover}` : "",
      "",
      medicalHistory ? `Medical history / conditions: ${medicalHistory}` : "",
      notes ? `Other notes / concerns: ${notes}` : "",
      "",
      "Source: WinFly Insurance Page",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/919667205638?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-14 md:pb-0">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3D91] via-[#071f4f] to-[#020617] text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-sky-400 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4rem] right-[-4rem] h-80 w-80 rounded-full bg-amber-300 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 md:flex-row md:items-center md:py-18">
          {/* Left */}
          <div className="flex-1 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Protection-first approach • Health + Term + Emergency buffer
            </span>

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Pehle{" "}
              <span className="text-[#F3C969]">family ko secure</span>, phir
              returns ke bare me sochen.
            </h1>

            <p className="max-w-xl text-sm text-slate-100/90 md:text-[15px]">
              WinFly aapke{" "}
              <span className="font-semibold">
                health insurance, term cover, personal accident aur emergency
                buffer
              </span>{" "}
              ko ek hi framework me plan karta hai — taaki koi bhi badi medical
              ya life event aapke finances ko completely derail na kar sake.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="#insurance-form"
                className="rounded-full bg-[#F3C969] px-6 py-2 font-semibold text-slate-900 shadow-md hover:bg-[#f7d783]"
              >
                Start / review your insurance plan
              </a>
              <a
                href="https://wa.me/919667205638"
                className="rounded-full border border-white/70 px-6 py-2 font-semibold text-white hover:bg-white/10"
              >
                Discuss on WhatsApp
              </a>
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-200/90">
              <span>✓ Health insurance planning</span>
              <span>✓ Term &amp; income replacement cover</span>
              <span>✓ Parents &amp; critical cover gaps</span>
            </div>

            <p className="mt-2 text-[10px] text-slate-300">
              WinFly khud koi insurer nahi hai. Hum{" "}
              <span className="font-semibold">advisory &amp; facilitation</span>{" "}
              provide karte hain through curated partner platforms. Insurance
              products are subject to terms, conditions &amp; underwriting.
            </p>
          </div>

          {/* Right summary card */}
          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-2xl bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Sample protection snapshot
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Term cover</p>
                  <p className="mt-1 text-sm font-semibold text-[#0A3D91]">
                    10–15x income
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Health cover</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    Family floater
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-500">Parents cover</p>
                  <p className="mt-1 text-sm font-semibold text-amber-600">
                    Separate plan
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-900">Health</p>
                    <p className="text-[11px] text-slate-500">
                      Hospitalisation, daycare, major illnesses
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-emerald-600">
                    First priority
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-900">Life</p>
                    <p className="text-[11px] text-slate-500">
                      Pure term for income replacement
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-sky-600">
                    Essential
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="font-semibold text-slate-900">Emergency</p>
                    <p className="text-[11px] text-slate-500">
                      3–6 months expenses buffer
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-amber-600">
                    Build alongside
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-600">
                Ye snapshot sirf ek{" "}
                <span className="font-semibold">framework example</span> hai.
                Real planning me age, income, city, dependents, existing covers
                &amp; medical history consider hota hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PROTECTION FIRST */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] text-sm">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Insurance ko “expense” nahi,{" "}
                <span className="text-[#0A3D91]">risk shield</span> ki tarah
                treat karo.
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Ek major hospital bill, accident ya income loss event pura{" "}
                <span className="font-semibold">
                  savings &amp; investments ko wipe-out
                </span>{" "}
                kar sakta hai. Isiliye WinFly ka framework hamesha{" "}
                <span className="font-semibold">“Protection-first”</span> hota
                hai — phir investing &amp; growth.
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2 text-xs">
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Health Insurance
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    Cashflow ko bachata hai
                  </p>
                  <p className="mt-1 text-slate-600">
                    Planned premium ke badle unpredictable hospital bills ko
                    manage karta hai – specially big city / private hospital
                    costs ke time.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Term Insurance
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    Family ke liye income shield
                  </p>
                  <p className="mt-1 text-slate-600">
                    Agar earning member ko kuch ho jaye, to family ke goals
                    (education, home, lifestyle) ko protect karta hai.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  WinFly ka protection approach
                </p>
                <ul className="mt-2 space-y-1.5 text-slate-600">
                  <li>• Pehle health + term ka gap samjhte hain</li>
                  <li>• Employer cover vs personal cover analyse karte hain</li>
                  <li>
                    • Parents &amp; high-risk family members ke liye special
                    plan
                  </li>
                  <li>
                    • Premium budget ko overall cashflow se match karte hain
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-slate-100">
                <p className="text-sm font-semibold">
                  Confused ki kitna cover chahiye?
                </p>
                <p className="mt-1 text-[11px] text-slate-200">
                  15 minute ki WhatsApp / call par hum aapki{" "}
                  <span className="font-semibold">
                    age, income, city, dependents &amp; existing policies
                  </span>{" "}
                  dekh kar ek practical coverage range suggest karte hain.
                </p>
              </div>
            </div>
          </div>

          {/* TYPES CARDS */}
          <div className="mt-8 grid gap-5 md:grid-cols-4 text-sm">
            {[
              {
                badge: "Health Insurance",
                title: "Family floater & individual plans",
                desc: "City, age & hospital preference ke hisaab se sum insured, room rent type aur add-ons ko structure karte hain.",
              },
              {
                badge: "Term Insurance",
                title: "Income replacement planning",
                desc: "10–15x annual income, outstanding loans & future goals ko dekh ke term cover range nikalte hain.",
              },
              {
                badge: "Parents & Seniors",
                title: "Special care planning",
                desc: "Parents / seniors ke liye realistic options & combination strategies — premium vs benefits ko balance karte hue.",
              },
              {
                badge: "Other Covers",
                title: "PA, CI & top-ups",
                desc: "Personal accident, critical illness, super top-up jaise add-ons ko overall protection mix me align karte hain.",
              },
            ].map((card) => (
              <div
                key={card.badge}
                className="flex flex-col rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                  {card.badge}
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

      {/* FORM + FAQ */}
      <section id="insurance-form" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
            {/* FORM */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">
                Share your protection details
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Neeche basic details fill kijiye –{" "}
                <span className="font-semibold">
                  submit karte hi WhatsApp chat open
                </span>{" "}
                ho jaayegi jahan hum calmly aapka health &amp; term planning
                discuss kar sakte hain.
              </p>

              <form className="mt-6 space-y-6 text-sm" onSubmit={handleSubmit}>
                {/* Section 1: Basic Details */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Step 1 · Basic details
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
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
                  </div>

                  <div className="mt-3 grid gap-4 md:grid-cols-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Age
                      </label>
                      <input
                        type="number"
                        min={18}
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. 32"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-3 grid gap-4 md:grid-cols-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Marital status
                      </label>
                      <select
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option>Single</option>
                        <option>Married (no kids)</option>
                        <option>Married with kids</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Occupation
                      </label>
                      <select
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        value={occupationType}
                        onChange={(e) => setOccupationType(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option>Salaried</option>
                        <option>Self-employed / Business</option>
                        <option>Professional / Consultant</option>
                        <option>Homemaker</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Approx annual income
                      </label>
                      <select
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        value={incomeRange}
                        onChange={(e) => setIncomeRange(e.target.value)}
                      >
                        <option value="">Select range</option>
                        <option>Below ₹5 lakh</option>
                        <option>₹5–10 lakh</option>
                        <option>₹10–20 lakh</option>
                        <option>₹20–35 lakh</option>
                        <option>Above ₹35 lakh</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Protection focus & family */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Step 2 · Protection focus & family
                  </p>

                  <div className="mt-3">
                    <label className="text-xs font-semibold text-slate-700">
                      Main protection focus
                    </label>
                    <div className="mt-2 grid gap-2 text-[11px] md:grid-cols-3">
                      {[
                        "Health insurance (self / family)",
                        "Term insurance planning",
                        "Parents / senior citizen cover",
                        "Existing policy review",
                        "Overall protection planning",
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFocusType(opt)}
                          className={`rounded-full border px-3 py-1 text-left ${
                            focusType === opt
                              ? "border-[#0A3D91] bg-[#0A3D91]/5 text-[#0A3D91] font-semibold"
                              : "border-slate-200 bg-slate-50 text-slate-700"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Adults to cover
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. 2 (self + spouse)"
                        value={adultsCount}
                        onChange={(e) => setAdultsCount(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Kids to cover (if any)
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. 1–2 kids"
                        value={kidsCount}
                        onChange={(e) => setKidsCount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-semibold text-slate-700">
                      Premium budget (monthly / yearly)
                    </label>
                    <input
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      placeholder="e.g. ₹2,000–₹3,000 per month"
                      value={premiumBudget}
                      onChange={(e) => setPremiumBudget(e.target.value)}
                    />
                  </div>
                </div>

                {/* Section 3: Existing cover snapshot */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Step 3 · Existing insurance snapshot
                  </p>

                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Employer health cover (if any)
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. ₹5 lakh for family / self only / none"
                        value={employerHealthCover}
                        onChange={(e) => setEmployerHealthCover(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Personal health policy
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. ₹10 lakh family floater with X company / none"
                        value={personalHealthCover}
                        onChange={(e) => setPersonalHealthCover(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Parents / senior citizen cover
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. ₹5–10 lakh parents policy / no cover"
                        value={parentsCover}
                        onChange={(e) => setParentsCover(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">
                        Term insurance status
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                        placeholder="e.g. ₹1 Cr cover with X insurer / no term plan"
                        value={termCover}
                        onChange={(e) => setTermCover(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Health & notes */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Step 4 · Health & other notes
                  </p>

                  <div className="mt-3">
                    <label className="text-xs font-semibold text-slate-700">
                      Medical history / conditions (if any)
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      rows={3}
                      placeholder="e.g. diabetes, BP, recent surgery, ongoing treatment, etc."
                      value={medicalHistory}
                      onChange={(e) => setMedicalHistory(e.target.value)}
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-xs font-semibold text-slate-700">
                      Other notes / concerns
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                      rows={3}
                      placeholder="e.g. parents ke liye alag cover chahiye, maternity planning, premium constraint, etc."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0A3D91] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c3273]"
                >
                  Submit &amp; Open WhatsApp
                </button>

                <p className="mt-2 text-[11px] text-slate-500">
                  WinFly India Services Pvt. Ltd.{" "}
                  <span className="font-semibold">insurer nahi</span> hai. Hum
                  partner platforms ke through policies ka{" "}
                  <span className="font-semibold">
                    evaluation, planning &amp; facilitation
                  </span>{" "}
                  karte hain. All insurance products are subject to terms,
                  conditions, exclusions &amp; underwriting decision of the
                  respective insurer.
                </p>
              </form>
            </div>

            {/* FAQ / Info */}
            <div className="space-y-4 text-xs">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  What happens after you submit?
                </h3>
                <ul className="mt-2 space-y-1.5 text-slate-600">
                  <li>• Details WhatsApp par share ho jaate hain.</li>
                  <li>
                    • WinFly team aapse existing covers &amp; concerns ke bare
                    me poochti hai.
                  </li>
                  <li>
                    • 15–20 min ki clarity call schedule hoti hai (phone /
                    video).
                  </li>
                  <li>
                    • Health + term + emergency buffer ka ek practical plan
                      discuss hota hai.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Frequently asked questions
                </h3>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">
                      Employer health cover kafi hai kya?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Mostly nahi. Job change, sum insured limit, room rent
                      caps aur family size ko dekh kar{" "}
                      <span className="font-semibold">
                        personal health policy
                      </span>{" "}
                      bhi chahiye hoti hai.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Term plan ka ideal cover kitna?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Rough rule:{" "}
                      <span className="font-semibold">
                        10–15x annual income
                      </span>{" "}
                      + outstanding loans + major goals. Exact number aapke
                      case me customise hota hai.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Parents ke liye kya karein?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Parents ke case me premium high hota hai, isliye{" "}
                      <span className="font-semibold">
                        realistic sum insured + emergency fund combo
                      </span>{" "}
                      plan karna zaroori hai.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Execution kahan se hota hai?
                    </p>
                    <p className="mt-1 text-slate-600">
                      Policies ka execution hamare{" "}
                      <span className="font-semibold">
                        curated partner platforms
                      </span>{" "}
                      ke through hota hai – jahan documentation &amp; servicing
                      track ho sakti hai.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (Desktop) */}
      <section className="hidden bg-slate-900 text-slate-50 md:block">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex items-center justify-between gap-4 text-sm">
            <div>
              <p className="text-[13px] font-semibold">
                Want to fix protection before chasing returns?
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Health, term, parents cover &amp; emergency fund ko ek framework
                me align karenge – taaki koi bhi emergency aapke poore financial
                plan ko bigaade nahi.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a
                href="#insurance-form"
                className="rounded-full bg-[#F3C969] px-5 py-2 font-semibold text-slate-900 hover:bg-[#f7d783]"
              >
                Fill insurance planning form
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

      {/* STICKY CTA (Mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-2 shadow-sm md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 text-xs">
          <div className="flex-1">
            <p className="font-semibold text-slate-900">
              Ready to sort your insurance?
            </p>
            <p className="text-[11px] text-slate-500">
              Form ya WhatsApp – jo easy lage.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="#insurance-form"
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
