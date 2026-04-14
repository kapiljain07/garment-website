import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const capabilities = [
  {
    title: 'Bulk Manufacturing',
    desc: 'High-volume production with consistent sizing, finishing, and packaging across runs.',
    icon: '🏭',
  },
  {
    title: 'Private Label / OEM',
    desc: 'White-label manufacturing — your tags, trims, labels, and branded packaging.',
    icon: '🏷️',
  },
  {
    title: 'Custom Design Execution',
    desc: 'Bring your sketches or tech packs. We handle sampling through to full production.',
    icon: '✏️',
  },
  {
    title: 'Printing & Embroidery',
    desc: 'Screen print, DTF, digital print, and machine embroidery for branded collections.',
    icon: '🎨',
  },
  {
    title: 'Premium Fabric Sourcing',
    desc: 'Cotton, blends, fleece, lycra — tested for comfort, durability, and market fit.',
    icon: '🧵',
  },
  {
    title: 'Pan-India Logistics',
    desc: 'Reliable dispatch planning and courier partnerships to support growing order volumes.',
    icon: '🚚',
  },
]

const processSteps = [
  { num: '01', title: 'Requirement & Sampling', desc: 'Share your design files, tech pack, or reference images. We create production samples with fabric swatches for your approval.' },
  { num: '02', title: 'Fabric Sourcing & Testing', desc: 'We source and test fabrics against your specs — shrinkage, colourfastness, GSM, and hand-feel checks.' },
  { num: '03', title: 'Pattern Grading & Cutting', desc: 'CAD-based pattern grading for consistent sizing across all SKUs. Precision cutting on industrial tables.' },
  { num: '04', title: 'Stitching & Assembly', desc: 'Trained tailoring lines with specialised machines — overlock, flatlock, bartack, buttonhole, and finishing stations.' },
  { num: '05', title: 'Quality Control', desc: 'Multi-stage QC: inline checks, endline inspection, measurements audit, packaging review. AQL-based sampling.' },
  { num: '06', title: 'Finishing & Dispatch', desc: 'Iron, fold, tag, poly-pack. Dispatch via partner logistics or buyer-nominated freight.' },
]

const moqTiers = [
  { range: '100–499 pcs', label: 'Starter', desc: 'Ideal for test orders, new brand launches, and sampling runs.' },
  { range: '500–1,999 pcs', label: 'Standard Bulk', desc: 'Regular replenishment for wholesalers, retailers, and e-commerce sellers.' },
  { range: '2,000+ pcs', label: 'Enterprise / Export', desc: 'Large-scale production for distributors, exports, and chain retail.' },
]

export default function Manufacturing() {
  return (
    <div>
      <Helmet>
        <title>Manufacturing | Minakshi Creation</title>
        <meta name="description" content="End-to-end garment manufacturing — bulk production, private labeling, custom designs, printing, embroidery." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">How We Build</p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Manufacturing Capabilities</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            From a single sample to 50,000+ units a month — our production floor, quality systems, and sourcing
            network are built to scale with your brand.
          </p>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">What We Offer</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">End-to-End Services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl border p-5 transition-shadow hover:shadow-md">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-3 text-base font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production process — timeline */}
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Step by Step</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Our Production Process</h2>

          <div className="mt-10 space-y-0">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-[60px_1fr] items-start gap-4 border-b border-slate-200 py-6 md:grid-cols-[80px_200px_1fr] ${i === 0 ? 'border-t' : ''}`}
              >
                <span className="text-2xl font-black text-emerald-300 md:text-3xl">{step.num}</span>
                <h3 className="text-sm font-bold text-slate-900 md:text-base">{step.title}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-slate-500 md:col-start-3">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ tiers */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Order Sizing</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Minimum Order Quantity</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {moqTiers.map((tier) => (
              <div key={tier.label} className="rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-6">
                <span className="text-2xl font-black text-slate-900">{tier.range}</span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">{tier.label}</p>
                <p className="mt-3 text-sm text-slate-500">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black text-white">Ready to Start Manufacturing?</h2>
            <p className="mt-1 text-sm text-emerald-50">Share your design pack and quantity. We respond with a quote within 24 hours.</p>
          </div>
          <Link
            to="/partner"
            className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-700 shadow hover:bg-emerald-50"
          >
            Partner With Us →
          </Link>
        </div>
      </section>
    </div>
  )
}
