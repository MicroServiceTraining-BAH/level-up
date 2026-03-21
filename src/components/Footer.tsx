import Link from "next/link";

const companyLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Free Audit" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div
                className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-heading font-black text-brand-bg text-sm"
                style={{ boxShadow: "0 0 16px rgba(0,194,255,0.35)" }}
              >
                L
              </div>
              <span className="font-heading font-bold text-[17px] text-brand-text">
                LevelUp <span className="text-brand-blue">Local</span>
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-[1.8] max-w-xs">
              Helping local service businesses get online and start generating
              customers — fast, simple, and without the tech headache.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-brand-text font-semibold text-xs uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-blue text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-brand-text font-semibold text-xs uppercase tracking-widest mb-5">
              Get Started Today
            </h4>
            <p className="text-brand-muted text-sm leading-[1.8] mb-5">
              Ready to get your business online and start generating customers?
              Book a free 15-minute audit call.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue text-brand-bg font-semibold text-sm hover:bg-brand-blue/90 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
              style={{ boxShadow: "0 0 20px rgba(0,194,255,0.25)" }}
            >
              Book Free Audit →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} LevelUp Local. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Built by Jean Carlo Philipps &amp; Gabriel Cajigas
          </p>
        </div>
      </div>
    </footer>
  );
}
