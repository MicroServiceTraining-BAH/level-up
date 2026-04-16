"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 4px 30px rgba(0,0,0,0.5)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="LevelUp Local"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-brand-blue focus-visible:text-brand-blue focus-visible:outline-none ${
                pathname === link.href ? "text-brand-blue" : "text-brand-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="px-5 py-2.5 rounded-lg bg-brand-blue text-brand-bg font-semibold text-sm hover:bg-brand-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg active:scale-95 transition-all duration-200"
            style={{
              boxShadow:
                "0 0 20px rgba(0,194,255,0.3), 0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            Book Free Audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-lg hover:bg-brand-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue active:scale-95 transition-all"
        >
          <span
            className={`block mx-auto w-5 h-[2px] bg-brand-text rounded-full transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block mx-auto w-5 h-[2px] bg-brand-text rounded-full transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block mx-auto w-5 h-[2px] bg-brand-text rounded-full transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-brand-surface border-t border-brand-border px-6 pt-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 px-3 rounded-lg text-brand-muted hover:text-brand-blue hover:bg-brand-elevated font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="mt-3 px-5 py-3 rounded-lg bg-brand-blue text-brand-bg font-semibold text-center hover:bg-brand-blue/90 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Book Free Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
