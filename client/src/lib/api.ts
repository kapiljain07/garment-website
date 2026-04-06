export type ProductCategory = 'men' | 'women' | 'kids'

export type Product = {
  _id: string
  name: string
  category: ProductCategory
  description: string
  imageUrl: string
}

export type ContactPayload = {
  name: string
  email: string
  phone: string
  message: string
}

const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:5000'

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`)
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Failed to fetch products (${res.status})`)
  }
  return (await res.json()) as Product[]
}

export async function postContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Failed to submit contact (${res.status})`)
  }
}

export type AdminProductPayload = {
  name: string
  category: ProductCategory
  description: string
  imageFile?: File
}

export async function adminFetchProducts(token: string): Promise<Product[]> {
  const res = await fetch(`${API_URL}/admin/products`, {
    headers: { 'x-admin-token': token }
  })
  if (!res.ok) throw new Error(await res.text().catch(() => 'Admin fetch failed'))
  return (await res.json()) as Product[]
}

export async function adminUpsertProduct(token: string, id: string | null, payload: AdminProductPayload) {
  const form = new FormData()
  form.append('name', payload.name)
  form.append('category', payload.category)
  form.append('description', payload.description)
  if (payload.imageFile) form.append('image', payload.imageFile)

  const method = id ? 'PUT' : 'POST'
  const url = id ? `${API_URL}/admin/products/${id}` : `${API_URL}/admin/products`

  const res = await fetch(url, {
    method,
    headers: { 'x-admin-token': token },
    body: form
  })
  if (!res.ok) throw new Error(await res.text().catch(() => 'Admin upsert failed'))
}

export async function adminDeleteProduct(token: string, id: string) {
  const res = await fetch(`${API_URL}/admin/products/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': token }
  })
  if (!res.ok) throw new Error(await res.text().catch(() => 'Admin delete failed'))
}

