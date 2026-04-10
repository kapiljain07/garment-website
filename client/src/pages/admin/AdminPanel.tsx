import type { FormEvent } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import type { Product, ProductCategory } from '../../lib/api'
import { adminDeleteProduct, adminFetchProducts, adminUpsertProduct } from '../../lib/api'

const categories: Array<{ value: ProductCategory; label: string }> = [
  { value: 'men', label: 'Men Wear' },
  { value: 'women', label: 'Women Wear' },
  { value: 'kids', label: 'Kids Wear' }
]

function ProductRow({
  product,
  onEdit,
  onDelete
}: {
  product: Product
  onEdit: () => void
  onDelete: () => void
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-xl bg-slate-50">
          <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{product.name}</div>
          <div className="text-xs text-slate-600">{product.category}</div>
          <div className="mt-1 text-xs text-slate-500">{product.description}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="rounded-xl border px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default function AdminPanel() {
  const [token, setToken] = useState('')
  const [tokenApplied, setTokenApplied] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)

  const [editingId, setEditingId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState<ProductCategory>('men')
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [formError, setFormError] = useState<string | null>(null)

  const canUpload = useMemo(() => Boolean(imageFile), [imageFile])

  useEffect(() => {
    localStorage.removeItem('admin_token')
  }, [])

  useEffect(() => {
    if (!tokenApplied) return
    setLoading(true)
    setError(null)
    adminFetchProducts(tokenApplied)
      .then((p) => setProducts(p))
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false))
  }, [tokenApplied])

  function startEdit(p: Product) {
    setEditingId(p._id)
    setName(p.name)
    setCategory(p.category)
    setDescription(p.description)
    setImageFile(null)
    setFormError(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetForm() {
    setEditingId(null)
    setName('')
    setCategory('men')
    setDescription('')
    setImageFile(null)
    setFormError(null)
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (!tokenApplied) return
    setFormError(null)

    if (!name.trim()) return setFormError('Name is required.')
    if (!description.trim()) return setFormError('Description is required.')
    if (!editingId && !imageFile) return setFormError('Image is required for new products.')

    setLoading(true)
    try {
      await adminUpsertProduct(tokenApplied, editingId, {
        name: name.trim(),
        category,
        description: description.trim(),
        imageFile: canUpload ? imageFile ?? undefined : undefined
      })
      const refreshed = await adminFetchProducts(tokenApplied)
      setProducts(refreshed)
      resetForm()
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to save product.')
    } finally {
      setLoading(false)
    }
  }

  async function del(id: string) {
    if (!tokenApplied) return
    if (!window.confirm('Delete this product?')) return
    setLoading(true)
    setError(null)
    try {
      await adminDeleteProduct(tokenApplied, id)
      const refreshed = await adminFetchProducts(tokenApplied)
      setProducts(refreshed)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete product.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Admin | Garment Manufacturing</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Panel</h1>
            <p className="mt-2 text-sm text-slate-600">
              Add/edit products for men, women, and kids categories. Protected by an admin token.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border bg-white p-6">
          {!tokenApplied ? (
            <div>
              <div className="text-sm font-semibold text-slate-900">Enter Admin Token</div>
              <p className="mt-2 text-sm text-slate-600">
                You can find this in `server/.env` as <span className="font-mono">ADMIN_TOKEN</span>.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Paste token"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!token.trim()) return
                    setTokenApplied(token.trim())
                  }}
                  className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Unlock
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-sm font-semibold text-slate-900">Manage Products</div>
                <button
                  type="button"
                  className="w-fit rounded-xl border px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    localStorage.removeItem('admin_token')
                    setTokenApplied(null)
                    setProducts([])
                    resetForm()
                    setError(null)
                  }}
                >
                  Lock
                </button>
              </div>

              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>
              ) : null}

              <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-slate-900">
                    {editingId ? 'Edit Product' : 'Add New Product'}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ProductCategory)}
                    className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {categories.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-900">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    required
                    className="mt-1 w-full resize-none rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-900">
                    Image {editingId ? '(optional to update)' : '(required)'}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                    className="mt-2 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none"
                  />
                </div>

                {formError ? (
                  <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                    {formError}
                  </div>
                ) : null}

                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 disabled:opacity-60 sm:w-auto"
                  >
                    {loading ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-60 sm:w-auto"
                  >
                    Reset
                  </button>
                </div>
              </form>

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">Existing Products</div>
                  {loading ? <div className="text-xs text-slate-500">Updating...</div> : null}
                </div>
                <div className="mt-4 space-y-4">
                  {products.length === 0 ? (
                    <div className="rounded-2xl border-dashed bg-slate-50 p-6 text-center text-sm text-slate-600">
                      No products yet. Add your first product above.
                    </div>
                  ) : (
                    products.map((p) => (
                      <ProductRow
                        key={p._id}
                        product={p}
                        onEdit={() => startEdit(p)}
                        onDelete={() => del(p._id)}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

