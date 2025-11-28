import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WinFly India Services Private Limited",
  description:
    "WinFly India Services Private Limited is a DPIIT & MSME registered startup simplifying investments, loans and insurance for Indian families.",
};
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12 text-sm">
        <h1 className="text-2xl font-semibold text-slate-900">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-slate-600">
          By using the WinFly India Services Private Limited website or
          interacting with our advisory services, you agree to the following
          terms and conditions.
        </p>

        <h2 className="mt-6 text-base font-semibold text-slate-900">
          Nature of service
        </h2>
        <p className="mt-1 text-slate-600">
          WinFly provides financial guidance, analysis and facilitation services
          through a technology-driven platform. Execution of financial products
          such as mutual funds, loans and insurance is done via partnered,
          regulated entities.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          No guaranteed returns
        </h2>
        <p className="mt-1 text-slate-600">
          Investments and loans are subject to market and regulatory risks. We
          do not guarantee any specific return, performance or outcome. Users
          should read all scheme and product documents carefully before
          investing or borrowing.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          Responsibility
        </h2>
        <p className="mt-1 text-slate-600">
          While we try to provide accurate and updated information, final
          decisions rest with the user. WinFly shall not be liable for any loss
          arising from use of the information, tools or recommendations provided
          through the platform.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          Changes to terms
        </h2>
        <p className="mt-1 text-slate-600">
          These terms may be modified at any time. Updated terms will be posted
          on this page and continued use of the website will be considered as
          acceptance of the updated terms.
        </p>
      </section>
    </main>
  );
}
