import express from 'express'
import { supabase } from '../utils/supabaseClient.js'

export const productsRouter = express.Router()

productsRouter.get('/', async (_req, res, next) => {
  try {
    // Seed default products if table is empty
    const { data: existing, error: countErr } = await supabase
      .from('products')
      .select('id')
      .limit(1)

    if (countErr) {
      throw countErr
    }

    if (!existing || existing.length === 0) {
      const seedProducts = [
        {
          name: 'Men Solid Polo',
          category: 'men',
          description: 'B2B bulk manufacturing with consistent stitching and finishing.',
          image_url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          name: 'Men Checked Shirt',
          category: 'men',
          description: 'Private label-ready styles for partner collections.',
          image_url: 'https://images.pexels.com/photos/9558774/pexels-photo-9558774.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          name: 'Women Formal Top',
          category: 'women',
          description: 'Designed for private labeling and bulk runs.',
          image_url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          name: 'Women Soft Blouse',
          category: 'women',
          description: 'Comfort-first garment manufacturing with reliable quality checks.',
          image_url: 'https://images.pexels.com/photos/6311613/pexels-photo-6311613.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          name: 'Kids T-Shirt',
          category: 'kids',
          description: 'Durable and comfortable kidswear for bulk production.',
          image_url: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          name: 'Kids Hoodie',
          category: 'kids',
          description: 'Private label friendly with finishing built for repeat orders.',
          image_url: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
      ]

      const { error: seedErr } = await supabase.from('products').insert(seedProducts)
      if (seedErr) throw seedErr
    }

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

