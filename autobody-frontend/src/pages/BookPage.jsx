import { useState } from "react"
import { motion } from "framer-motion"

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

const serviceOptions = [
  "Full Body Repaint",
  "Scratch & Dent Repair",
  "Colour Matching",
  "Panel Work",
  "Insurance Job",
  "Airport Transfer",
  "Local Ride",
  "Corporate Transport",
  "Other",
]

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  const inputClass =
    "w-full border-b border-zinc-700 bg-transparent px-0 py-3 text-zinc-100 outline-none transition-colors focus:border-brand placeholder:text-zinc-600"

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-end overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=2000&q=80"
          alt="Book a job"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/75 to-carbon/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="line-accent mb-4" />
            <h1 className="font-display text-5xl font-bold uppercase text-white md:text-7xl">
              Book a <span className="text-brand">Job</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-zinc-300">
              Tell us what you need. We'll get back with a quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking form + sidebar */}
      <section className="bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <motion.div {...fade} className="lg:col-span-3">
              {submitted ? (
                <div className="border-l-2 border-brand bg-carbon-light p-8">
                  <p className="font-display text-2xl font-bold text-white">Booking Received ✓</p>
                  <p className="mt-3 text-zinc-400">
                    We'll review your request and get back within 24 hours with a quote or confirmation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 font-display text-xs uppercase tracking-[0.12em] text-brand hover:text-brand-glow"
                  >
                    Submit Another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.2em] text-brand">Your Details</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <input required placeholder="Full Name" className={inputClass} />
                    <input required type="tel" placeholder="Phone Number" className={inputClass} />
                    <input required type="email" placeholder="Email Address" className={inputClass} />
                    <select required className={`${inputClass} appearance-none`} defaultValue="">
                      <option value="" disabled>What do you need?</option>
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="mt-4 font-display text-xs uppercase tracking-[0.2em] text-brand">Vehicle Info</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <input placeholder="Make (e.g. Toyota)" className={inputClass} />
                    <input placeholder="Model (e.g. Camry)" className={inputClass} />
                    <input placeholder="Year (e.g. 2021)" className={inputClass} />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Describe the job — damage, desired outcome, any photos you can share later..."
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    className="red-glow bg-brand px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-white transition hover:bg-brand-dark"
                  >
                    Submit Booking Request →
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div {...fade} className="space-y-8 lg:col-span-2">
              <div className="bg-carbon-light p-6">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-zinc-500">What Happens Next</p>
                <div className="mt-5 space-y-5">
                  {[
                    { step: "01", text: "We review your request and assess the scope." },
                    { step: "02", text: "You receive a detailed quote within 24 hrs." },
                    { step: "03", text: "Approve and drop off — or we arrange pickup." },
                    { step: "04", text: "Work begins. You get progress updates." },
                    { step: "05", text: "Final QC, handover, and you're back on the road." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 border-b border-white/5 pb-4">
                      <span className="font-display text-lg font-bold text-brand">{item.step}</span>
                      <span className="text-sm text-zinc-400">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-display text-xs uppercase tracking-[0.2em] text-zinc-500">Prefer to Call?</p>
                <a href="tel:+61412345678" className="mt-2 block font-display text-3xl font-bold text-white hover:text-brand transition">
                  +61 4 1234 5678
                </a>
                <p className="mt-2 text-sm text-zinc-500">Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
