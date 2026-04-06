import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = useMemo(() => navItems, [])

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            MC
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Minakshi Creation</div>
            <div className="text-xs text-slate-600">Garment Manufacturer</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              [
                'text-sm font-semibold transition-colors',
                isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              ].join(' ')
            }
          >
            Admin
          </NavLink>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-sm font-bold">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              {links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/admin"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  ].join(' ')
                }
              >
                Admin
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

