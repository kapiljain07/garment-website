import type { FormEvent } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { postContact } from '../lib/api'

export default function PartnerWithUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [businessType, setBusinessType] = useState('Wholesaler / Distributor')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '919999999999'

  function openWhatsAppInquiry() {
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill Name, Phone, and Requirement before sending WhatsApp inquiry.' })
      return
    }
    const text = [
      'Hello Minakshi Creation,',
      '',
      'I would like to enquire about bulk garment manufacturing.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `Business Type: ${businessType}`,
      `Requirement: ${message}`,
    ].join('\n')
    window.open(`https://wa.me/${encodeURIComponent(whatsappNumber)}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      await postContact({ name, email, phone, message: `Business Type: ${businessType}\n${message}` })
      setStatus({ type: 'success', text: 'Request submitted! We will respond within 24 hours with a quote.' })
      setName(''); setEmail(''); setPhone(''); setBusinessType('Wholesaler / Distributor'); setMessage('')
    } catch (err) {
      setStatus({ type: 'error', text: err instanceof Error ? err.message : 'Failed to submit.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Partner With Us | Minakshi Creation</title>
        <meta name="description" content="Start a B2B partnership with Minakshi Creation. Request bulk garment manufacturing quotes for private labeling and custom designs." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Let's Work Together</p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Partner With Us</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            Whether you're a wholesaler, retailer, brand owner, or e-commerce seller — share your requirements
            and we'll respond with production feasibility and a quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3">
              <h2 className="text-xl font-black text-slate-900">Submit Your Requirement</h2>
              <p className="mt-2 text-sm text-slate-500">Fill in the form or use WhatsApp for faster response.</p>

              <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Name *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Phone *</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Email *</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Business Type</label>
                  <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20">
                    <option>Wholesaler / Distributor</option>
                    <option>Retailer / Boutique</option>
                    <option>E-Commerce Seller</option>
                    <option>Export House</option>
                    <option>Individual / Brand</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Your Requirement *</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} placeholder="Describe what you need — categories, quantity, design references, timelines..." className="mt-1 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                </div>

                {status && (
                  <div className={`rounded-xl border p-3 text-sm ${status.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-red-200 bg-red-50 text-red-800'}`}>
                    {status.text}
                  </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2">
                  <button type="button" onClick={openWhatsAppInquiry} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600">
                    <span>💬</span> Send via WhatsApp
                  </button>
                  <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 disabled:opacity-60">
                    {submitting ? 'Submitting...' : 'Submit Form'}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 md:col-span-2">
              <div className="rounded-2xl border bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">What Happens Next</p>
                <div className="mt-4 space-y-4">
                  {[
                    { step: '01', text: 'We review your requirement and assess production feasibility.' },
                    { step: '02', text: 'You receive a detailed quote with pricing and timeline.' },
                    { step: '03', text: 'On approval, we create production samples for sign-off.' },
                    { step: '04', text: 'Bulk manufacturing begins. You get progress updates.' },
                    { step: '05', text: 'QC, packing, and dispatch — your order is delivered.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3 border-b border-slate-200 pb-3">
                      <span className="text-sm font-black text-emerald-600">{item.step}</span>
                      <span className="text-sm text-slate-500">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Visit Us</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>Dyeing Complex, Bahadur-Ke-Road</p>
                  <p>Ludhiana, Punjab, India</p>
                  <p className="mt-3">Mon–Sat: 9 AM – 7 PM</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border">
                <iframe
                  title="Google Maps"
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Dyeing%20Complex%2C%20Bahadur-Ke-Road%2C%20Ludhiana&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
