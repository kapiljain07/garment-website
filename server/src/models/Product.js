import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, enum: ['men', 'women', 'kids'] },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true }
  },
  { timestamps: true }
)

export const Product = mongoose.model('Product', ProductSchema)

