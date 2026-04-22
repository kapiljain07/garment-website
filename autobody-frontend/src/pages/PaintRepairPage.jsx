import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { paintServices } from "../data"

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function PaintRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=2000&q=80"
          alt="Inside the paint booth"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/75 to-carbon/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="line-accent mb-4" />
            <h1 className="font-display text-5xl font-bold uppercase text-white md:text-7xl">
              Paint & <span className="text-brand">Repair</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-zinc-300">
              From minor scuffs to full resprays — every job follows our 5-stage quality process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works — horizontal process */}
      <section className="border-b border-white/5 bg-carbon-light py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-brand">How It Works</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-white">Our 5-Stage Process</h2>
          </motion.div>

          <div className="mt-10 grid gap-px bg-white/5 md:grid-cols-5">
            {["Assess", "Prep & Prime", "Paint", "Cure & Clear", "Polish & QC"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-carbon-light p-6 text-center"
              >
                <span className="font-display text-4xl font-bold text-carbon-mid">{`0${i + 1}`}</span>
                <p className="mt-3 font-display text-sm uppercase tracking-wider text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services deep-dive */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="space-y-20">
            {paintServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="font-display text-5xl font-bold text-carbon-mid">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-bold uppercase text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{s.description}</p>
                  <div className="mt-5 border-l-2 border-brand/30 pl-4">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Workflow</p>
                    <p className="mt-1 text-sm text-zinc-300">{s.process}</p>
                  </div>
                  <Link
                    to="/book"
                    className="mt-6 inline-flex border-b border-brand pb-1 font-display text-xs uppercase tracking-[0.12em] text-brand hover:text-brand-glow transition"
                  >
                    Book This Service →
                  </Link>
                </div>

                <div className={`relative h-72 overflow-hidden bg-carbon-light ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent" />
                  <div className="flex h-full items-center justify-center">
                    <span className="text-8xl opacity-10">{s.icon}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded bg-black/50 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-zinc-400">
                    {s.process.split(" → ").length} steps
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-5 py-12 text-center md:flex-row md:text-left lg:px-10">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-white">Need Paintwork Done?</h2>
            <p className="mt-1 text-red-100">Free assessment. No-obligation quote. Fast turnaround.</p>
          </div>
          <Link
            to="/book"
            className="border-2 border-white bg-white px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-brand transition hover:bg-transparent hover:text-white"
          >
            Book a Job →
          </Link>
        </div>
      </section>
    </>
  )
}
