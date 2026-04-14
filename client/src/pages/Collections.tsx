import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import type { Product, ProductCategory } from '../lib/api'
import { fetchProducts } from '../lib/api'

const sections: Array<{
  key: ProductCategory
  title: string
  hero: string
  tagline: string
}> = [
  {
    key: 'men',
    title: "Men's Collection",
    hero: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tagline: 'T-shirts, jeans, bermudas, casual shirts, and track pants — bulk-ready with consistent finishing.',
  },
  {
    key: 'women',
    title: "Women's Collection",
    hero: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tagline: 'Trend-focused kurtis, tops, leggings, suits, and casual dresses for wholesale and private labels.',
  },
  {
    key: 'kids',
    title: "Kids' Collection",
    hero: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tagline: 'Soft, safe, and vibrant garments for infants to teenagers with quality finishing.',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="aspect-[4/3] overflow-hidden bg-slate-50">
        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-slate-900">{product.name}</h4>
        <p className="mt-1 text-xs text-slate-500 line-clamp-2">{product.description}</p>
      </div>
    </div>
  )
}

export default function Collections() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<ProductCategory | 'all'>('all')

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchProducts()
      .then((p) => { if (mounted) setProducts(p) })
      .catch((e) => { if (mounted) setError(e instanceof Error ? e.message : String(e)) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [])

  const productsByCategory = useMemo(() => {
    const map: Record<ProductCategory, Product[]> = { men: [], women: [], kids: [] }
    for (const p of products) map[p.category].push(p)
    return map
  }, [products])

  return (
    <div>
      <Helmet>
        <title>Collections | Minakshi Creation</title>
        <meta name="description" content="Browse our men's, women's, and kids' garment collections. B2B bulk manufacturing and private labeling." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">What We Make</p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Our Collections</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            Three focused categories — each built for bulk manufacturing. Browse styles or request a custom design pack.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-[57px] z-30 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
          {[
            { key: 'all' as const, label: 'All Collections' },
            { key: 'men' as const, label: "Men's" },
            { key: 'women' as const, label: "Women's" },
            { key: 'kids' as const, label: "Kids'" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {error && (
        <div className="mx-auto max-w-6xl px-4 pt-8">
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            Could not load products. {error}
          </div>
        </div>
      )}

      {/* Collection sections */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="space-y-14">
          {sections
            .filter((s) => activeTab === 'all' || activeTab === s.key)
            .map((section) => (
              <div key={section.key}>
                {/* Category header */}
                <div className="grid items-center gap-6 rounded-2xl bg-slate-50 p-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                      {section.key}
                    </span>
                    <h2 className="mt-3 text-2xl font-black text-slate-900">{section.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{section.tagline}</p>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={section.hero} alt={section.title} className="h-full w-full object-cover" />
                  </div>
                </div>

                {/* Products grid */}
                <div className="mt-6">
                  {loading ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="animate-pulse rounded-xl border bg-white p-4">
                          <div className="aspect-[4/3] rounded-lg bg-slate-100" />
                          <div className="mt-3 h-3 w-3/4 rounded bg-slate-100" />
                          <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />
                        </div>
                      ))}
                    </div>
                  ) : (productsByCategory[section.key] ?? []).length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {productsByCategory[section.key].map((p) => (
                        <ProductCard key={p._id} product={p} />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed p-8 text-center text-sm text-slate-500">
                      No products in this collection yet. Add them from the Admin panel.
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-black text-slate-900">Need Custom Styles or Private Label?</h2>
            <p className="mt-1 text-sm text-slate-500">Share your design pack or specs. We'll quote within 24 hours.</p>
          </div>
          <Link to="/partner" className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
            Request Custom Quote →
          </Link>
        </div>
      </section>
    </div>
  )
}
