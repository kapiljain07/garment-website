import { Link } from 'react-router-dom';
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import { BRAND, NAV_LINKS, CERTIFICATIONS } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="corrugation">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <svg width="36" height="36" viewBox="0 0 32 32">
                  <rect width="32" height="32" rx="2" fill="#F5EFE4" />
                  <path d="M6 10 L16 6 L26 10 L16 14 Z" fill="#B08968" />
                  <path d="M6 10 V22 L16 26 V14 Z" fill="#8B6F4E" />
                  <path d="M26 10 V22 L16 26 V14 Z" fill="#6A5033" />
                </svg>
                <div>
                  <div className="font-display text-[22px] tracking-tight">
                    {BRAND.short.toUpperCase()}
                  </div>
                  <div className="eyebrow text-[9px] text-kraft">
                    {BRAND.sub} · Bengaluru
                  </div>
                </div>
              </div>

              <p className="text-paper/70 text-[15px] leading-relaxed max-w-md">
                Since 1997, engineering industrial cartons and corrugated systems
                for manufacturers that cannot afford packaging failure.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {CERTIFICATIONS.map((c) => (
                  <span
                    key={c.code}
                    className="inline-flex items-center gap-2 border border-paper/15 px-3 py-1.5 text-[11px] tracking-tight"
                  >
                    <span className="font-mono text-kraft">{c.code}</span>
                    <span className="text-paper/60">· {c.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="eyebrow text-kraft mb-4">Navigate</div>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center justify-between text-paper/80 hover:text-bone transition-colors"
                    >
                      <span>{link.label}</span>
                      <HiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/quote"
                    className="group flex items-center justify-between text-kraft hover:text-paper transition-colors"
                  >
                    <span>Request a Quote</span>
                    <HiArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="eyebrow text-kraft mb-4">Works</div>
              <ul className="space-y-4 text-[15px]">
                <li className="flex items-start gap-3 text-paper/80">
                  <HiOutlineMapPin className="w-4 h-4 mt-1 text-kraft shrink-0" />
                  <span>
                    {BRAND.address.line1}
                    <br />
                    {BRAND.address.city}, {BRAND.address.country}
                  </span>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 text-paper/80 hover:text-bone"
                  >
                    <HiOutlineEnvelope className="w-4 h-4 text-kraft" />
                    {BRAND.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-paper/80 hover:text-bone"
                  >
                    <HiOutlinePhone className="w-4 h-4 text-kraft" />
                    {BRAND.phone}
                  </a>
                </li>
                <li className="font-mono text-[11px] text-paper/40 pt-2">
                  GSTIN · {BRAND.gst}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-paper/50">
            <div>
              © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Made with virgin and recycled kraft in Bengaluru.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
