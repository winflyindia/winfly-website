import TopNav from "../components/TopNav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-slate-900">
          About WinFly India Services Private Limited
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          WinFly India Services Private Limited is a technology-driven financial
          services startup focused on simplifying investments, loans, insurance
          and wealth planning for Indian households.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              To help Indian families make smarter financial decisions with
              clarity, transparency and confidence. We combine AI-based
              assessment with human expertise to deliver structured financial
              guidance that is simple to understand and easy to act on.
            </p>

            <h2 className="mt-6 text-lg font-semibold text-slate-900">
              Our Vision
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              To become India&apos;s most trusted digital wealth and financial
              guidance ecosystem – a single, reliable partner for investments,
              protection and borrowing decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">
              What makes WinFly different?
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Unified view of investments, loans and insurance</li>
              <li>• AI-driven profiling plus human advisory support</li>
              <li>• Transparent comparisons and unbiased guidance</li>
              <li>• Paperless onboarding and digital-first processes</li>
              <li>• Designed specially for Indian middle-class families</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase">
              Recognition
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              DPIIT & MSME Registered
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Recognised as a startup under Startup India and Udyam MSME
              registration.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Indian Households
            </p>
            <p className="mt-1 text-xs text-slate-600">
              EMI, education, health security and retirement planning ke aas-paas
              focused solutions.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase">
              Approach
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Tech + Human
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Automated financial journeys, lekin final decisions ke liye human
              support and clarity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
