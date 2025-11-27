import TopNav from "../components/TopNav";

const services = [
  {
    title: "Investment & SIP Planning",
    short: "Mutual funds, SIPs and long-term wealth building.",
    points: [
      "Goal-based SIP planning",
      "Risk-profile aligned fund selection",
      "Portfolio review and rebalancing",
    ],
  },
  {
    title: "Insurance Guidance",
    short: "Health, term and protection planning made simple.",
    points: [
      "Right coverage calculation",
      "Comparison of plans via partner platforms",
      "Focus on protection, not just tax-saving",
    ],
  },
  {
    title: "Loan Advisory",
    short: "Better EMI planning and smarter borrowing.",
    points: [
      "Home, personal and business loan comparison",
      "EMI burden and interest cost analysis",
      "Pre-payment and refinance guidance",
    ],
  },
  {
    title: "Comprehensive Financial Planning",
    short: "End-to-end view of your financial life.",
    points: [
      "Emergency fund, goals and retirement mapping",
      "Cashflow and budgeting support",
      "Family-centric planning for Indian households",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-slate-900">
          Our Services
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          WinFly helps you handle investments, loans and insurance in one
          structured journey. Hamara focus sirf product bechna nahi, balki
          aapke liye suitable financial roadmap banana hai.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{s.short}</p>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#0A3D91] px-6 py-5 text-sm text-white">
          <h3 className="text-base font-semibold">
            Not sure where to start?
          </h3>
          <p className="mt-2 text-slate-100/90">
            Book a free discovery call and we will help you prioritise what to
            fix first – loans, protection or investments – based on your current
            situation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="rounded-full bg-[#F3C969] px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-[#f7d783]"
            >
              Message on WhatsApp
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/70 px-5 py-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              Go to Contact Page
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
