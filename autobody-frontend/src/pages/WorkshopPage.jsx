import { motion } from "framer-motion"
import { equipment } from "../data"

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

const milestones = [
  { year: "2009", text: "Founded in Melbourne — a two-bay startup with big ambitions." },
  { year: "2013", text: "Expanded to full autobody paint and panel repair services." },
  { year: "2017", text: "Installed downdraft spray booths and digital colour matching." },
  { year: "2020", text: "Added corporate taxi and transfer services to the business." },
  { year: "2024", text: "Crossed 2,500 vehicles restored. 4.9★ average rating." },
]

export default function WorkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=2000&q=80"
          alt="Inside the Paintworks workshop"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/75 to-carbon/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="line-accent mb-4" />
            <h1 className="font-display text-5xl font-bold uppercase text-white md:text-7xl">
              The <span className="text-brand">Workshop</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-zinc-300">
              Our facility, our equipment, our people. This is where quality happens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story — wide text */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <motion.div {...fade} className="lg:col-span-3">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-brand">Who We Are</p>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase text-white md:text-5xl">
                Built on Craft.<br />Backed by Results.
              </h2>
              <p className="mt-6 leading-relaxed text-zinc-300">
                Paintworks Auto Body Shop was founded with a clear mission: deliver factory-grade paint finishes
                with transparent service and real craftsmanship. Every vehicle that enters our workshop receives
                the same attention — from surface prep through to final clear coat inspection.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Based in Melbourne, we serve car owners, dealerships, fleet managers, and insurance providers
                across Victoria and beyond. Our team combines decades of hands-on experience with modern booth
                technology and digital colour systems to deliver results that last.
              </p>
            </motion.div>

            <motion.div {...fade} className="lg:col-span-2">
              <div className="bg-carbon-light p-6">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-zinc-500">Key Numbers</p>
                <div className="mt-5 space-y-5">
                  {[
                    { num: "15+", label: "Years of operation" },
                    { num: "2,500+", label: "Vehicles restored" },
                    { num: "4.9★", label: "Average customer rating" },
                    { num: "6", label: "Specialist technicians" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <span className="font-display text-2xl font-bold text-brand">{item.num}</span>
                      <span className="text-sm text-zinc-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="border-t border-white/5 bg-carbon-light py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-3xl font-bold uppercase text-white">
              Equipment & <span className="text-brand">Facility</span>
            </h2>
            <p className="mt-3 max-w-xl text-zinc-400">
              Our workshop runs on professional-grade systems — not shortcuts.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 border-l-2 border-brand/30 bg-carbon py-4 pl-5 pr-4 transition-colors hover:border-brand"
              >
                <span className="font-display text-xs font-bold text-carbon-mid">0{i + 1}</span>
                <span className="text-sm text-zinc-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-3xl font-bold uppercase text-white">
              Our <span className="text-brand">Timeline</span>
            </h2>
          </motion.div>

          <div className="mt-14 space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-[80px_1fr] items-start border-b border-white/5 py-6 md:grid-cols-[120px_1fr]"
              >
                <span className="font-display text-2xl font-bold text-brand md:text-3xl">{m.year}</span>
                <p className="text-zinc-400">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
