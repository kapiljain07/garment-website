import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000

async function start() {
  const { createServerApp } = await import('./app.js')
  const app = createServerApp()
  app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`)
  })
}

start().catch((err) => {
  console.error('Server failed to start:', err)
  process.exit(1)
})

