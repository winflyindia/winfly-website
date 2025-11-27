// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-slate-900">
          Contact Us
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Financial clarity chahiye? Form fill kijiye ya direct WhatsApp / call
          se connect ho jaaiye.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr,1fr]">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <form className="space-y-4 text-sm">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    placeholder="10 digit mobile"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="helpType"
                  className="block text-xs font-semibold text-slate-700"
                >
                  What do you need help with?
                </label>
                <select
                  id="helpType"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                >
                  <option>Choose an option</option>
                  <option>Loan advisory</option>
                  <option>Mutual funds / SIP planning</option>
                  <option>Insurance guidance</option>
                  <option>Complete financial planning</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Message / Details
                </label>
                <textarea
                  id="message"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-[#0A3D91]"
                  rows={4}
                  placeholder="Briefly describe your current situation..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-[#0A3D91] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c3273]"
              >
                Submit (Coming Soon)
              </button>

              <p className="text-[11px] text-slate-500">
                Form submission integration in progress. For faster response,
                please use WhatsApp button on the right.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-base font-semibold text-slate-900">
                Quick Contact
              </h2>

              <p className="mt-2 text-xs text-slate-600">WhatsApp / Call:</p>
              <p className="text-sm font-semibold text-slate-900">
                +91-9667205638
              </p>

              <p className="mt-3 text-xs text-slate-600">Email:</p>
              <p className="text-sm font-semibold text-slate-900">
                support@winflyindia.in
              </p>

              <a
                href="https://wa.me/919667205638"
                className="mt-4 inline-block rounded-full bg-[#25D366] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1ebe5b]"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-base font-semibold text-slate-900">
                Registered Office
              </h2>
              <p className="mt-2 text-xs text-slate-600">
                L-45, L Block, Mohan Garden,
                <br />
                Near Happy Chowk, Uttam Nagar,
                <br />
                New Delhi – 110059, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
