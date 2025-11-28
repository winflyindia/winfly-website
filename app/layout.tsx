// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import TopNav from "./components/TopNav";

export const metadata: Metadata = {
  title: "WinFly India Services Private Limited",
  description:
    "Technology-driven financial services ecosystem for Indian families – investments, loans and insurance in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
