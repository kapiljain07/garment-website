import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Product } from '../lib/api'
import { fetchProducts } from '../lib/api'

const heroImage =
  'https://images.pexels.com/photos/3771811/pexels-photo-3771811.jpeg?auto=compress&cs=tinysrgb&w=1600'

const categories = [
  {
    title: "Men's Wear",
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'T-shirts, jeans, bermudas, casual shirts, track pants',
  },
  {
    title: "Women's Wear",
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Kurtis, tops, leggings, suits, casual dresses',
  },
  {
    title: "Kids' Wear",
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Soft, safe, vibrant garments for infants to teens',
  },
]

const processSteps = [
  { num: '01', title: 'Design & Sampling', desc: 'Translate your sketches or tech packs into production-ready samples.' },
  { num: '02', title: 'Fabric Sourcing', desc: 'Cotton, blends, fleece — sourced and tested for quality and durability.' },
  { num: '03', title: 'Cutting & Stitching', desc: 'Precision cutting floors and trained tailors for consistent sizing.' },
  { num: '04', title: 'QC & Dispatch', desc: 'Strict quality checks, ironing, packing, and logistics coordination.' },
]

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then((p) => setFeatured(p.slice(0, 4)))
      .catch(() => {})
  }, [])

  return (
    <div>
      <Helmet>
        <title>Minakshi Creation | Premium Garment Manufacturer</title>
        <meta
          name="description"
          content="15+ years of garment manufacturing. B2B bulk production, private labeling, and custom designs for men's, women's, and kids' wear."
        />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950">
        <img src={heroImage} alt="Garment factory floor" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              15+ Years • 500+ B2B Partners
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Where Your <span className="text-emerald-400">Label</span> Meets Our <span className="text-emerald-400">Craft</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              From design sampling to bulk dispatch — we manufacture men's, women's, and kids' wear
              for brands, wholesalers, and retailers across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/partner"
                className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-emerald-400"
              >
                Get Bulk Quote
              </Link>
              <Link
                to="/collections"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Browse Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '500+', label: 'B2B Clients' },
            { num: '50K+', label: 'Units / Month' },
            { num: '100%', label: 'Quality Focused' },
          ].map((s) => (
            <div key={s.label} className="px-4 py-6 text-center md:py-8">
              <p className="text-2xl font-black text-emerald-700 md:text-3xl">{s.num}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLECTIONS PREVIEW ── */}
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">What We Make</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Our Collections</h2>
            </div>
            <Link to="/collections" className="hidden text-sm font-semibold text-emerald-700 hover:underline sm:block">
              View All →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.title} to="/collections" className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{cat.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{cat.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── process strip */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">From Sample to Shipment</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">How We Work</h2>
            </div>
            <Link to="/manufacturing" className="hidden text-sm font-semibold text-emerald-700 hover:underline sm:block">
              Full Process →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.num} className="rounded-2xl border bg-slate-50 p-5">
                <span className="text-3xl font-black text-emerald-200">{step.num}</span>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── from API */}
      {featured.length > 0 && (
        <section className="border-t bg-slate-50 py-14 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">From the Floor</p>
                <h2 className="mt-2 text-3xl font-black text-slate-900">Latest Additions</h2>
              </div>
              <Link to="/collections" className="text-sm font-semibold text-emerald-700 hover:underline">
                See All →
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <div key={p._id} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                    <img src={p.imageUrl} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-slate-900">{p.name}</h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FACTORY TEASER ── */}
      <section className="bg-slate-950 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Inside Our Factory</p>
              <h2 className="mt-3 text-3xl font-black text-white">See Where Your <span className="text-emerald-400">Garments</span> Are Made</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Walk through our production floor — cutting tables, stitching lines, QC stations,
                and modern finishing bays. Quality isn't a promise; it's built into every step.
              </p>
              <Link
                to="/factory"
                className="mt-6 inline-flex rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Tour the Factory →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Factory floor"
                  className="h-40 w-full object-cover md:h-48"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Quality checks"
                  className="h-40 w-full object-cover md:h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Partner Feedback</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">What B2B Buyers Say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { text: 'Consistent quality and reliable delivery for our wholesale network. A trusted long-term partner.', name: 'Wholesale Distributor' },
              { text: 'Private label execution is excellent. Strong support from sampling to final production.', name: 'Retail Brand Owner' },
              { text: 'Fast turnaround and production flexibility helped us scale seasonal orders without delays.', name: 'E-Commerce Seller' },
            ].map((t) => (
              <blockquote key={t.name} className="rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-5">
                <p className="text-sm leading-relaxed text-slate-600 italic">"{t.text}"</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-emerald-700">— {t.name}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-emerald-600 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black text-white">Ready to Manufacture Your Next Collection?</h2>
            <p className="mt-1 text-sm text-emerald-50">Share your design pack. Get a quote within 24 hours.</p>
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
