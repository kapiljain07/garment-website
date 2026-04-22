import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import { paintServices, testimonials, portfolio } from "../data"

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function HomePage() {
  const [sliderPos, setSliderPos] = useState(50)

  return (
    <>
      {/* ── HERO ── full-screen cinematic */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80"
          alt="Premium auto body paint booth"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 pt-32 lg:px-10 lg:pb-28">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="line-accent mb-6" />
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] text-white md:text-7xl lg:text-8xl">
              Precision<br />
              <span className="text-gradient">Paintwork</span><br />
              <span className="text-brand">Perfected.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-300">
              Australia's premium autobody paint and collision repair specialists.
              Factory-grade finishes. Zero compromise.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="red-glow inline-flex items-center gap-2 bg-brand px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-white transition hover:bg-brand-dark"
              >
                Book a Job
                <span className="text-lg">→</span>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-white transition hover:border-white/50 hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-10 w-5 rounded-full border border-white/20 p-1">
            <div className="h-2 w-full rounded-full bg-brand" />
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-white/5 bg-carbon-light">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {[
            { num: "15+", label: "Years Active" },
            { num: "2,500+", label: "Vehicles Restored" },
            { num: "4.9★", label: "Google Rating" },
            { num: "100%", label: "Colour Match Guarantee" },
          ].map((s, i) => (
            <div key={s.label} className={`px-5 py-8 text-center lg:py-10 ${i < 3 ? "border-r border-white/5" : ""}`}>
              <p className="font-display text-3xl font-bold text-brand lg:text-4xl">{s.num}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEFORE / AFTER ── interactive slider */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              See the <span className="text-brand">Difference</span>
            </h2>
            <p className="mt-3 max-w-lg text-zinc-400">Drag the slider to reveal our precision paintwork results.</p>
          </motion.div>

          <div
            className="relative mt-10 h-[400px] cursor-col-resize select-none overflow-hidden rounded-sm md:h-[500px]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              setSliderPos(((e.clientX - rect.left) / rect.width) * 100)
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const touch = e.touches[0]
              setSliderPos(((touch.clientX - rect.left) / rect.width) * 100)
            }}
          >
            <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80" alt="After repair" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1600&q=80" alt="Before repair" className="h-full w-full object-cover" style={{ width: "100vw", maxWidth: "1400px" }} />
            </div>
            <div className="absolute top-0 h-full w-0.5 bg-brand" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand font-bold text-white shadow-lg">⟷</div>
            </div>
            <span className="absolute top-4 left-4 rounded bg-black/60 px-3 py-1 font-display text-xs uppercase tracking-wider text-white">Before</span>
            <span className="absolute top-4 right-4 rounded bg-brand/80 px-3 py-1 font-display text-xs uppercase tracking-wider text-white">After</span>
          </div>
        </div>
      </section>

      {/* ── PAINT SERVICES PREVIEW ── */}
      <section className="relative bg-carbon-light py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              What We <span className="text-brand">Do</span>
            </h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {paintServices.slice(0, 4).map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center gap-6 border-b border-white/5 py-6 transition-colors hover:border-brand/30"
              >
                <span className="font-display text-4xl font-bold text-zinc-800 transition-colors group-hover:text-brand">0{i + 1}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{s.description}</p>
                </div>
                <Link to="/paint-repair" className="hidden text-sm text-zinc-600 transition-colors group-hover:text-brand md:block">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/paint-repair" className="font-display text-xs uppercase tracking-[0.12em] text-brand hover:text-brand-glow transition">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RECENT WORK PREVIEW ── 3 portfolio cards */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Recent <span className="text-brand">Work</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {portfolio.slice(0, 3).map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden bg-carbon-light"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={job.image} alt={job.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 bg-brand px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-white">{job.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-bold uppercase text-white group-hover:text-brand transition-colors">{job.title}</h3>
                  <p className="mt-2 text-xs text-zinc-500 line-clamp-2">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/portfolio" className="font-display text-xs uppercase tracking-[0.12em] text-brand hover:text-brand-glow transition">
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TAXI BANNER ── */}
      <section className="relative overflow-hidden bg-carbon-light py-20 lg:py-24">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand/5 to-transparent" />
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <motion.div {...fade} className="lg:col-span-3">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-zinc-500">Also Available</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase text-white md:text-4xl">
                Taxi & Transfer <span className="text-brand">Services</span>
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
                Need a ride while your vehicle is with us? We offer airport transfers, local pickups, and corporate
                transport — reliable, on-time, every time.
              </p>
              <Link to="/transfers" className="mt-6 inline-flex border-b border-brand pb-1 font-display text-sm uppercase tracking-[0.1em] text-brand transition hover:text-brand-glow">
                View Transfer Services →
              </Link>
            </motion.div>
            <div className="hidden lg:col-span-2 lg:block">
              <img
                src="https://images.unsplash.com/photo-1449965408869-ebd3fee73f47?auto=format&fit=crop&w=800&q=80"
                alt="Professional taxi service"
                className="h-64 w-full rounded-sm object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/5 bg-carbon py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Client <span className="text-brand">Reviews</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="border-l-2 border-brand bg-carbon-light p-6">
                <p className="text-sm leading-relaxed text-zinc-300 italic">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand">{t.name}</p>
                  <p className="text-xs text-zinc-600">{t.car}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-5 py-12 text-center md:flex-row md:text-left lg:px-10">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-white">Ready to Restore Your Ride?</h2>
            <p className="mt-2 text-red-100">Free assessment. No-obligation quote. Fast turnaround.</p>
          </div>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 border-2 border-white bg-white px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-brand transition hover:bg-transparent hover:text-white"
          >
            Book a Job Now
          </Link>
        </div>
      </section>
    </>
  )
}
