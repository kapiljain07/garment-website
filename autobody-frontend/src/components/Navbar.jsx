import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "../data"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-carbon/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-block bg-brand px-2 py-1 font-display text-xl font-bold tracking-wider text-white">
              PW
            </span>
            <span className="hidden font-display text-sm uppercase tracking-[0.2em] text-white sm:block">
              Paintworks
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative font-display text-xs uppercase tracking-[0.15em] transition-colors ${
                    isActive ? "text-brand" : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/book"
              className="hidden rounded-none border border-brand bg-brand/10 px-5 py-2 font-display text-xs uppercase tracking-[0.15em] text-brand transition-all hover:bg-brand hover:text-white sm:inline-flex"
            >
              Book a Job
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1.5 lg:hidden"
              aria-label="Open menu"
            >
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-4 bg-brand" />
              <span className="h-0.5 w-6 bg-white" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-carbon-light"
            >
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-5">
                <span className="font-display text-sm uppercase tracking-[0.2em] text-white">Menu</span>
                <button onClick={() => setOpen(false)} className="text-2xl text-zinc-400 hover:text-white" aria-label="Close menu">✕</button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`rounded px-4 py-3 font-display text-sm uppercase tracking-[0.12em] transition-colors ${
                      location.pathname === link.to
                        ? "bg-brand/10 text-brand"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-white/5 px-5 py-5">
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className="block w-full border border-brand bg-brand px-5 py-3 text-center font-display text-xs uppercase tracking-[0.15em] text-white"
                >
                  Book a Job
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
