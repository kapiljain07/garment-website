import type { FormEvent } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { postContact } from '../lib/api'

export default function Contact() {
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
      setStatus({
        type: 'error',
        text: 'Please fill Name, Phone, and Requirement before sending WhatsApp inquiry.'
      })
      return
    }

    const text = [
      'Hello Minakshi Creation,',
      '',
      'I would like to enquire for bulk garment manufacturing.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `Business Type: ${businessType}`,
      `Requirement: ${message}`
    ].join('\n')

    const href = `https://wa.me/${encodeURIComponent(whatsappNumber)}?text=${encodeURIComponent(text)}`
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const finalMessage = `Business Type: ${businessType}\n${message}`
      await postContact({ name, email, phone, message: finalMessage })
      setStatus({
        type: 'success',
        text: 'Thanks! Your request has been submitted. We will get back to you soon.'
      })
      setName('')
      setEmail('')
      setPhone('')
      setBusinessType('Wholesaler / Distributor')
      setMessage('')
    } catch (err) {
      setStatus({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to submit contact request.'
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Contact | Garment Manufacturing</title>
        <meta name="description" content="Request a quote for bulk garment manufacturing and private labeling." />
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
            <p className="mt-3 text-sm text-slate-600">
              WhatsApp-first enquiry for faster response. You can also submit the form directly.
            </p>

            <form className="mt-8 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="text-sm font-medium text-slate-900">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900">Business Type</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>Wholesaler / Distributor</option>
                  <option>Retailer / Boutique</option>
                  <option>E-Commerce Seller</option>
                  <option>Export House</option>
                  <option>Individual / Brand</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900">Your Requirement</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="mt-1 w-full resize-none rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {status ? (
                <div
                  className={[
                    'rounded-xl border p-3 text-sm',
                    status.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                      : 'border-red-200 bg-red-50 text-red-800'
                  ].join(' ')}
                >
                  {status.text}
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={openWhatsAppInquiry}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
                >
                  Send via WhatsApp
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 disabled:opacity-60"
                >
                  {submitting ? 'Submitting...' : 'Submit Form'}
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-3xl border bg-white p-3 md:p-4">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                title="Google Maps"
                className="h-72 w-full md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Dyeing%20Complex%2C%20Bahadur-Ke-Road%2C%20Ludhiana&output=embed"
              />
            </div>
            <div className="mt-4 px-2 pb-2 text-xs text-slate-500">
              Factory: Dyeing Complex, Bahadur-Ke-Road, Ludhiana.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

