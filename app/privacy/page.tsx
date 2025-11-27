import TopNav from "../components/TopNav";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />
      <section className="mx-auto max-w-4xl px-4 py-12 text-sm">
        <h1 className="text-2xl font-semibold text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-slate-600">
          This Privacy Policy explains how WinFly India Services Private Limited
          (&quot;WinFly&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses
          and protects your information when you use our website and services.
        </p>

        <h2 className="mt-6 text-base font-semibold text-slate-900">
          Information we collect
        </h2>
        <p className="mt-1 text-slate-600">
          We may collect personal details such as your name, contact number,
          email address and limited financial information that you voluntarily
          share with us for the purpose of providing financial guidance.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          How we use your information
        </h2>
        <p className="mt-1 text-slate-600">
          Your information is used only to analyse your financial needs, provide
          recommendations, contact you regarding your queries and improve our
          services. We do not sell your data to third parties.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          Data security
        </h2>
        <p className="mt-1 text-slate-600">
          We follow reasonable technical and organisational measures to protect
          your information. However, online transmission of data can never be
          fully risk-free.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          Updates
        </h2>
        <p className="mt-1 text-slate-600">
          This policy may be updated from time to time. Updated version will be
          available on this page.
        </p>

        <h2 className="mt-4 text-base font-semibold text-slate-900">
          Contact
        </h2>
        <p className="mt-1 text-slate-600">
          For any privacy-related queries, please contact us at{" "}
          <span className="font-semibold">support@winflyindia.in</span>.
        </p>
      </section>
    </main>
  );
}
