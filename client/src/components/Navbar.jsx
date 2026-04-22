import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowUpRight } from 'react-icons/hi2';
import { BRAND, NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-bone/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[18px] tracking-tight text-ink">
              {BRAND.short.toUpperCase()}
            </span>
            <span className="eyebrow text-[9px] text-kraft-deep">
              {BRAND.sub} · Est. {BRAND.established || 1997}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[13px] font-medium tracking-tight transition-colors ${
                  isActive
                    ? 'text-ink'
                    : 'text-slate-soft hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-kraft"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/quote"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-bone px-5 py-2.5 text-[13px] font-medium tracking-tight hover:bg-kraft-dark transition-colors"
          >
            Request a Quote
            <HiArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
            aria-label="Toggle menu"
          >
            {open ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-line bg-bone"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `py-3 text-base border-b border-line/60 flex items-center justify-between ${
                      isActive ? 'text-ink font-medium' : 'text-slate-soft'
                    }`
                  }
                >
                  {link.label}
                  <HiArrowUpRight className="w-4 h-4 opacity-60" />
                </NavLink>
              ))}
              <Link
                to="/quote"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-ink text-bone px-5 py-3 text-sm font-medium"
              >
                Request a Quote <HiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="shrink-0">
      <rect width="32" height="32" rx="2" fill="#0E1115" />
      <path d="M6 10 L16 6 L26 10 L16 14 Z" fill="#B08968" />
      <path d="M6 10 V22 L16 26 V14 Z" fill="#8B6F4E" />
      <path d="M26 10 V22 L16 26 V14 Z" fill="#6A5033" />
    </svg>
  );
}
