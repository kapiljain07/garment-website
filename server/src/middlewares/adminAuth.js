export function adminAuth(req, res, next) {
  const expected = process.env.ADMIN_TOKEN
  if (!expected) return res.status(500).json({ error: 'ADMIN_TOKEN not configured' })

  let token = req.headers['x-admin-token'] || req.headers['admin-token'] || req.headers['authorization']
  if (typeof token === 'string' && token.toLowerCase().startsWith('bearer ')) {
    token = token.slice(7).trim()
  }

  if (!token || token !== expected) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  next()
}

