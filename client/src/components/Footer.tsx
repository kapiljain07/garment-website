import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Minakshi Creation" className="h-10 w-10 rounded-xl object-cover" />
              <div className="text-sm font-semibold">Minakshi Creation</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium garment manufacturer — men's, women's, and kids' wear. Trusted by 500+ B2B partners across India.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Navigate</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <Link to="/" className="transition-colors hover:text-white">Home</Link>
              <Link to="/collections" className="transition-colors hover:text-white">Collections</Link>
              <Link to="/manufacturing" className="transition-colors hover:text-white">Manufacturing</Link>
              <Link to="/factory" className="transition-colors hover:text-white">The Factory</Link>
              <Link to="/partner" className="transition-colors hover:text-white">Partner With Us</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Capabilities</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <span>Bulk Manufacturing</span>
              <span>Private Label / OEM</span>
              <span>Custom Design Execution</span>
              <span>Printing & Embroidery</span>
              <span>Pan-India Logistics</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Get In Touch</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <span>Dyeing Complex, Bahadur-Ke-Road</span>
              <span>Ludhiana, Punjab, India</span>
              <span className="mt-2">Mon–Sat: 9 AM – 7 PM</span>
            </div>
            <Link
              to="/partner"
              className="mt-5 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              Request Bulk Quote →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {year} Minakshi Creation. All rights reserved. | Garment Manufacturer • Men / Women / Kids • OEM & Private Label
      </div>
    </footer>
  )
}
