// app/components/TopNav.tsx
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard (Demo)" },
];

export default function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
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
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-[#0A3D91] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
