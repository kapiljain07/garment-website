import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/manufacturing', label: 'Manufacturing' },
  { to: '/factory', label: 'The Factory' },
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Minakshi Creation" className="h-10 w-10 rounded-xl object-cover" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Minakshi Creation</div>
            <div className="text-xs text-slate-500">Garment Manufacturer</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/partner"
            className="hidden rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 sm:inline-flex"
          >
            Partner With Us
          </Link>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-sm font-bold">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/partner"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
