import express from 'express'
import multer from 'multer'
import path from 'path'
import { adminAuth } from '../middlewares/adminAuth.js'
import { supabase } from '../utils/supabaseClient.js'

export const adminProductsRouter = express.Router()

// Protect all admin routes
adminProductsRouter.use(adminAuth)

// Use memory storage for Supabase upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    const ok = file.mimetype.startsWith('image/')
    cb(ok ? null : new Error('Only image files are allowed'), ok)
  }
})

const STORAGE_BUCKET = 'products'

async function uploadToSupabase(file) {
  const ext = path.extname(file.originalname).toLowerCase() || '.jpg'
  const parsed = path.parse(file.originalname)
  const safeBase = parsed.name.replace(/[^a-zA-Z0-9._-]/g, '')
  const filename = `${Date.now()}-${safeBase}${ext}`

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(filename, file.buffer, {
      contentType: file.mimetype,
      upsert: false
    })

  if (error) throw error

  const { data: urlData } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filename)

  return urlData.publicUrl
}

adminProductsRouter.get('/', async (_req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    const mapped = (data ?? []).map((row) => ({
      _id: row.id,
      name: row.name,
      category: row.category,
      description: row.description,
      imageUrl: row.image_url
    }))
    res.json(mapped)
  } catch (err) {
    next(err)
  }
})

adminProductsRouter.post('/', upload.single('image'), async (req, res, next) => {
  try {
    const { name, category, description } = req.body
    if (!name || !description || !category) {
      return res.status(400).json({ error: 'name, category, description are required' })
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' })
    }

    if (!['men', 'women', 'kids'].includes(category)) {
      return res.status(400).json({ error: 'Invalid category' })
    }

    const imageUrl = await uploadToSupabase(req.file)

    const payload = {
      name: String(name).trim(),
      category: String(category),
      description: String(description).trim(),
      image_url: imageUrl
    }

    const { data, error } = await supabase.from('products').insert(payload).select('*').single()
    if (error) throw error

    const mapped = {
      _id: data.id,
      name: data.name,
      category: data.category,
      description: data.description,
      imageUrl: data.image_url
    }

    res.status(201).json(mapped)
  } catch (err) {
    next(err)
  }
})

adminProductsRouter.put('/:id', upload.single('image'), async (req, res, next) => {
  try {
    const { name, category, description } = req.body
    const { id } = req.params

    if (category && !['men', 'women', 'kids'].includes(category)) {
      return res.status(400).json({ error: 'Invalid category' })
    }

    if (!name || !description || !category) {
      return res.status(400).json({ error: 'name, category, description are required' })
    }

    const update = {
      name: String(name).trim(),
      category: String(category),
      description: String(description).trim()
    }

    if (req.file) {
      update.image_url = await uploadToSupabase(req.file)
    }

    const { data, error } = await supabase
      .from('products')
      .update(update)
      .eq('id', id)
      .select('*')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // row not found
        return res.status(404).json({ error: 'Product not found' })
      }
      throw error
    }

    const mapped = {
      _id: data.id,
      name: data.name,
      category: data.category,
      description: data.description,
      imageUrl: data.image_url
    }

    res.json(mapped)
  } catch (err) {
    next(err)
  }
})

adminProductsRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { error, count } = await supabase
      .from('products')
      .delete({ count: 'exact' })
      .eq('id', id)

    if (error) throw error
    if (!count) return res.status(404).json({ error: 'Product not found' })
    res.json({ ok: true })
  } catch (err) {
    next(err)
  }
})

