import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-carbon">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/5 py-10 md:flex-row md:items-center">
          <div>
            <span className="inline-block bg-brand px-2 py-1 font-display text-xl font-bold tracking-wider text-white">
              PW
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              Paintworks Auto Body Shop — Premium collision repair, autobody paint, and reliable transfer services across Australia.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 text-zinc-400 transition hover:border-brand hover:text-brand">
              <FaFacebookF size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 text-zinc-400 transition hover:border-brand hover:text-brand">
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 text-zinc-400 transition hover:border-brand hover:text-brand">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-zinc-400">Navigate</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/paint-repair" className="hover:text-white transition-colors">Paint & Repair</Link>
              <Link to="/transfers" className="hover:text-white transition-colors">Transfers</Link>
              <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              <Link to="/workshop" className="hover:text-white transition-colors">The Workshop</Link>
              <Link to="/book" className="hover:text-white transition-colors">Book a Job</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-zinc-400">Services</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500">
              <span>Full Body Repaint</span>
              <span>Scratch & Dent Repair</span>
              <span>Colour Matching</span>
              <span>Panel Work</span>
              <span>Insurance Claims</span>
              <span>Airport Transfers</span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-zinc-400">Contact</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500">
              <span>+61 4 1234 5678</span>
              <span>hello@paintworksautobody.au</span>
              <span>Melbourne, Victoria, Australia</span>
              <span>Mon–Fri 8AM–6PM · Sat 9AM–3PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Paintworks Auto Body Shop. All rights reserved.
      </div>
    </footer>
  )
}
