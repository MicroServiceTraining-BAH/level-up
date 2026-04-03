import Link from "next/link";

const companyLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Free Audit" },
];

const locationLinks = [
  { href: "/locations/stafford-va", label: "Stafford, VA" },
  { href: "/locations/fredericksburg-va", label: "Fredericksburg, VA" },
  { href: "/locations/woodbridge-va", label: "Woodbridge, VA" },
  { href: "/locations/manassas-va", label: "Manassas, VA" },
  { href: "/locations/arlington-va", label: "Arlington, VA" },
  { href: "/locations/alexandria-va", label: "Alexandria, VA" },
  { href: "/locations/fairfax-va", label: "Fairfax, VA" },
];

const blogLinks = [
  { href: "/blog/how-to-rank-cleaning-business", label: "Rank Your Cleaning Business" },
  { href: "/blog/why-youre-not-showing-on-google-maps", label: "Google Maps Visibility" },
  { href: "/blog/seo-vs-ads-local-business", label: "SEO vs. Paid Ads" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-3">
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
            <p className="text-brand-muted text-sm leading-[1.8] max-w-xs mb-4">
              Local SEO and web design for small businesses across Northern Virginia.
            </p>
            <p className="text-brand-muted text-xs leading-[1.8]">
              Serving Stafford · Fredericksburg · Woodbridge · Manassas · Arlington · Alexandria · Fairfax
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
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

          {/* Locations */}
          <div className="md:col-span-3">
            <h4 className="text-brand-text font-semibold text-xs uppercase tracking-widest mb-5">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
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

          {/* Blog + CTA */}
          <div className="md:col-span-4">
            <h4 className="text-brand-text font-semibold text-xs uppercase tracking-widest mb-5">
              SEO Resources
            </h4>
            <ul className="space-y-3 mb-8">
              {blogLinks.map((link) => (
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
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue text-brand-bg font-semibold text-sm hover:bg-brand-blue/90 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
              style={{ boxShadow: "0 0 20px rgba(0,194,255,0.25)" }}
            >
              Book Free SEO Audit →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} LevelUp Local. All rights reserved. · Northern Virginia Local SEO &amp; Web Design
          </p>
          <p className="text-brand-muted text-xs">
            Built by Jean Carlo Philipps &amp; Gabriel Cajigas
          </p>
        </div>
      </div>
    </footer>
  );
}
