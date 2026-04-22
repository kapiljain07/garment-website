import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolio } from "../data"
import { Link } from "react-router-dom"

export default function PortfolioPage() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=2000&q=80"
          alt="Portfolio of completed work"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/75 to-carbon/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="line-accent mb-4" />
            <h1 className="font-display text-5xl font-bold uppercase text-white md:text-7xl">
              Our <span className="text-brand">Portfolio</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-zinc-300">
              Real jobs. Real results. Click any project to see the full story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((job, idx) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                onClick={() => setSelected(job)}
                className="group cursor-pointer overflow-hidden bg-carbon-light transition-all hover:ring-1 hover:ring-brand/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-light to-transparent" />
                  <span className="absolute top-3 left-3 bg-brand px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-white">
                    {job.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-brand transition-colors">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{job.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-zinc-600">⏱ {job.duration}</span>
                    <span className="font-display text-xs uppercase tracking-wider text-brand opacity-0 transition group-hover:opacity-100">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Case study detail overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-carbon-light"
            >
              <img src={selected.image} alt={selected.title} className="h-64 w-full object-cover md:h-80" />
              <div className="p-6 md:p-8">
                <span className="bg-brand px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-white">
                  {selected.category}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold uppercase text-white">{selected.title}</h2>
                <p className="mt-4 leading-relaxed text-zinc-300">{selected.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-brand pl-4">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Duration</p>
                    <p className="mt-1 font-display text-lg font-bold text-white">{selected.duration}</p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Type</p>
                    <p className="mt-1 font-display text-lg font-bold text-white">{selected.category}</p>
                  </div>
                </div>
                <Link
                  to="/book"
                  onClick={() => setSelected(null)}
                  className="mt-6 inline-flex bg-brand px-6 py-3 font-display text-xs uppercase tracking-[0.12em] text-white hover:bg-brand-dark transition"
                >
                  Book Similar Job →
                </Link>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center bg-brand text-sm font-bold text-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
