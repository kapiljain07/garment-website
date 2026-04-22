import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { taxiServices } from "../data"

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function TransfersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1449965408869-ebd3fee73f47?auto=format&fit=crop&w=2000&q=80"
          alt="Professional taxi service"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/75 to-carbon/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="line-accent mb-4" />
            <p className="font-display text-xs uppercase tracking-[0.2em] text-zinc-400">Secondary Service</p>
            <h1 className="mt-2 font-display text-5xl font-bold uppercase text-white md:text-7xl">
              Taxi & <span className="text-brand">Transfers</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-zinc-300">
              Need a ride while your car's in the shop? Or just need reliable transport? We've got you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — expanded cards */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="space-y-6">
            {taxiServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid gap-6 border-l-2 border-brand bg-carbon-light p-6 md:grid-cols-3 md:p-8"
              >
                <div>
                  <span className="font-display text-4xl font-bold text-carbon-mid">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase text-white">{s.title}</h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-zinc-400">{s.description}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-zinc-500">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="border-t border-white/5 bg-carbon-light py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <motion.div {...fade}>
            <div className="line-accent mb-4" />
            <h2 className="font-display text-3xl font-bold uppercase text-white">How to <span className="text-brand">Book</span></h2>
          </motion.div>

          <div className="mt-10 grid gap-px bg-white/5 md:grid-cols-3">
            {[
              { step: "Call or Message", desc: "Reach out via phone, email, or the booking form with your pickup details." },
              { step: "Confirm & Schedule", desc: "We'll confirm availability, vehicle type, and pricing within the hour." },
              { step: "Ride", desc: "Your driver arrives on time. Track via SMS updates. Pay on completion." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-carbon-light p-8"
              >
                <span className="font-display text-4xl font-bold text-brand">{`0${i + 1}`}</span>
                <h3 className="mt-3 font-display text-lg font-semibold uppercase text-white">{item.step}</h3>
                <p className="mt-2 text-sm text-zinc-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/book"
              className="red-glow inline-flex bg-brand px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-white transition hover:bg-brand-dark"
            >
              Book a Transfer →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
