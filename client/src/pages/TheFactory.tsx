import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const floorImages = [
  { src: 'https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Production Floor' },
  { src: 'https://images.pexels.com/photos/3771811/pexels-photo-3771811.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Cutting & Stitching' },
  { src: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Quality Inspection' },
  { src: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Sample Room' },
  { src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200', label: "Men's Wear Samples" },
  { src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200', label: "Women's Wear Samples" },
]

const equipment = [
  'Industrial Single-Needle Machines',
  'Overlock & Flatlock Lines',
  'CAD Pattern Grading System',
  'Automatic Fabric Cutting Tables',
  'Screen Print & DTF Printing Setup',
  'Embroidery Machines (multi-head)',
  'Steam Iron & Finishing Stations',
  'Fabric Testing Lab',
]

const milestones = [
  { year: 'Early Days', text: 'Started as a small family-run tailoring unit in Ludhiana with a handful of machines.' },
  { year: 'Growth', text: 'Expanded production capacity and began serving wholesalers and distributors across North India.' },
  { year: 'B2B Partnerships', text: 'Partnered with brands like Monte Carlo and Octave for private label manufacturing.' },
  { year: 'Scale', text: 'Installed modern machinery, hired skilled technicians, and reached 50K+ units/month capacity.' },
  { year: 'Today', text: '500+ active B2B partners. Multi-category production — men\'s, women\'s, and kids\' wear.' },
]

export default function TheFactory() {
  return (
    <div>
      <Helmet>
        <title>The Factory | Minakshi Creation</title>
        <meta name="description" content="Tour our garment factory — production floor, machinery, quality systems, and the team behind Minakshi Creation." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
        <img
          src="https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Factory floor"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/60" />
        <div className="relative mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Inside Our Facility</p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">The Factory</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            This is where your garments are made — the machines, the people, and the quality systems
            that deliver consistent results at scale.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Who We Are</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Built on Craft. Scaled for Business.</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Minakshi Creation began as a small garment setup in Ludhiana and evolved into a full-scale
                manufacturing operation serving wholesalers, retailers, and private label brands across India.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Our mission is simple: deliver premium-quality garments at factory pricing and help our partners
                scale with confidence. Every garment goes through the same rigorous quality pipeline — from
                fabric sourcing to final dispatch.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl border bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Key Numbers</p>
                <div className="mt-4 space-y-4">
                  {[
                    { num: '15+', label: 'Years of operation' },
                    { num: '500+', label: 'B2B partners' },
                    { num: '50K+', label: 'Units per month' },
                    { num: '3', label: 'Product categories' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 border-b border-slate-200 pb-3">
                      <span className="text-xl font-black text-emerald-700">{item.num}</span>
                      <span className="text-sm text-slate-500">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor gallery */}
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Visual Tour</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Factory Floor & Samples</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {floorImages.map((img) => (
              <div key={img.label} className="group overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-slate-700">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment list */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">What Powers Us</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Equipment & Infrastructure</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item, i) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border bg-slate-50 px-4 py-3">
                <span className="text-sm font-black text-emerald-300">0{i + 1}</span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Our Journey</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">How We Got Here</h2>
          <div className="mt-10 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className={`grid grid-cols-[100px_1fr] items-start gap-4 border-b border-slate-200 py-5 ${i === 0 ? 'border-t' : ''}`}>
                <span className="text-sm font-black text-emerald-700">{m.year}</span>
                <p className="text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black text-white">Want to Visit or Start an Order?</h2>
            <p className="mt-1 text-sm text-white/60">Factory visits welcome for serious buyers. Or get started with a quote.</p>
          </div>
          <Link to="/partner" className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400">
            Partner With Us →
          </Link>
        </div>
      </section>
    </div>
  )
}
