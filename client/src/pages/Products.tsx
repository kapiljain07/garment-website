import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import type { Product, ProductCategory } from '../lib/api'
import { fetchProducts } from '../lib/api'

const categories: Array<{
  key: ProductCategory
  title: string
  image: string
  blurb: string
}> = [
  {
    key: 'men',
    title: 'Men Wear',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb: 'Bulk-ready styles with consistent finishing.'
  },
  {
    key: 'women',
    title: 'Women Wear',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb: 'Private labeling for fashion-forward collections.'
  },
  {
    key: 'kids',
    title: 'Kids Wear',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb: 'Comfort-first garment manufacturing for kids.'
  }
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-3">
        <div className="text-sm font-semibold text-slate-900">{product.name}</div>
        <div className="mt-1 text-xs text-slate-600">{product.description}</div>
      </div>
    </div>
  )
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchProducts()
      .then((p) => {
        if (!mounted) return
        setProducts(p)
      })
      .catch((e) => {
        if (!mounted) return
        setError(e instanceof Error ? e.message : String(e))
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  const productsByCategory = useMemo(() => {
    const map: Record<ProductCategory, Product[]> = { men: [], women: [], kids: [] }
    for (const p of products) map[p.category].push(p)
    return map
  }, [products])

  return (
    <div>
      <Helmet>
        <title>Products | Garment Manufacturing</title>
        <meta
          name="description"
          content="Explore our men, women, and kids clothing categories. B2B bulk manufacturing and private labeling."
        />
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Products</h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              Categories built for bulk manufacturing. For private labeling and custom design packs, request a
              quote through our contact form.
            </p>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            Could not load products from the API. {error}
          </div>
        )}

        <div className="mt-10 grid gap-8">
          {categories.map((cat) => (
            <div key={cat.key} className="rounded-3xl border bg-white p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{cat.blurb}</p>
                </div>
                <div className="w-full md:w-[320px]">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">Available styles</div>
                  {loading ? <div className="text-xs text-slate-500">Loading...</div> : null}
                </div>

                {loading ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="animate-pulse rounded-2xl border bg-slate-50 p-4">
                        <div className="h-36 rounded-xl bg-slate-100" />
                        <div className="mt-3 h-3 w-3/4 rounded bg-slate-100" />
                        <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {(productsByCategory[cat.key] ?? []).length > 0 ? (
                      productsByCategory[cat.key].map((p) => <ProductCard key={p._id} product={p} />)
                    ) : (
                      <div className="col-span-full rounded-2xl border border-dashed p-6 text-center text-sm text-slate-600">
                        No products found for this category. Add them from the Admin panel.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

