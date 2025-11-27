// app/components/TopNav.tsx
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-[#0A3D91]">
            <Image
              src="/winfly-logo.png"
              alt="WinFly India Logo"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              WinFly India
            </p>
            <p className="text-[11px] text-slate-500">
              Financial Services Pvt. Ltd.
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
