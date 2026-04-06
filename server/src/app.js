import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'

import { productsRouter } from './routes/products.js'
import { contactRouter } from './routes/contact.js'
import { adminProductsRouter } from './routes/adminProducts.js'
import { errorHandler } from './middlewares/errorHandler.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function createServerApp() {
  const app = express()

  app.use(helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' }
  }))
  app.use(morgan('dev'))
  app.use(express.json({ limit: '1mb' }))

  const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
  app.use(
    cors({
      origin: clientOrigin,
      credentials: true
    })
  )

  // Serve uploaded admin images
  const uploadsDir = path.join(__dirname, '..', 'uploads')
  app.use('/uploads', express.static(uploadsDir, {
    setHeaders: (res) => {
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    }
  }))

  app.get('/health', (_req, res) => res.json({ ok: true }))

  app.use('/products', productsRouter)
  app.use('/contact', contactRouter)
  app.use('/admin/products', adminProductsRouter)

  app.use(errorHandler)

  return app
}

