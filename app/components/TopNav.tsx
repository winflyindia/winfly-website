// app/components/TopNav.tsx
import Link from "next/link";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard (Demo)" },
];

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/investments", label: "Investments & SIPs" },
  { href: "/loans", label: "Loans & EMI Planning" },
  { href: "/insurance", label: "Insurance & Protection" },

  // future:
  // { href: "/investments", label: "Investments & SIPs" },
  // { href: "/insurance", label: "Insurance Planning" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A3D91] text-xs font-bold text-white">
            W
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              WinFly India
            </p>
            <p className="text-[11px] text-slate-500">
              Services Pvt. Ltd.
            </p>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-4 text-xs md:text-sm">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-600 hover:text-[#0A3D91]"
            >
              {item.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-slate-600 hover:text-[#0A3D91]"
            >
              Services
              <span className="text-[9px]">▼</span>
            </button>

            <div className="invisible absolute right-0 z-20 mt-2 w-44 rounded-xl bg-white py-2 text-xs shadow-lg ring-1 ring-slate-200 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-[#0A3D91]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
