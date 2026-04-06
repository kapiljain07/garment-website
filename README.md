Garment Manufacturing Full-Stack Website

Tech stack:
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express + MongoDB (Mongoose)

## Project layout
- `client/` React app (Netlify-ready)
- `server/` Express API (Render-ready)

## Prerequisites
- Node.js 18+ recommended
- Supabase project (URL + service role key)

## Local development

### 1) Backend (API, Supabase)
1. Go to `server/`
2. Create environment file:
   - Copy `server/.env.example` to `server/.env`
3. Install and run:
   - `npm install`
   - `npm run dev`

The backend listens on `PORT` (default `5000`) and connects to Supabase using `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

### 2) Frontend (Website)
1. Go to `client/`
2. Create environment file:
   - Copy `client/.env.example` to `client/.env`
3. Install and run:
   - `npm install`
   - `npm run dev`

The frontend will use `VITE_API_URL` to call the backend.

### 3) Admin panel (bonus)
- Open the frontend route `/admin`
- Add your `ADMIN_TOKEN` from `server/.env`
- You can add/edit products and upload images

## Deploy

### Netlify (frontend)
- Build command: `npm run build`
- Publish directory: `dist`
- Set build env var: `VITE_API_URL` to your Render backend URL (e.g. `https://your-backend.onrender.com`)

### Render (backend)
- Set `MONGODB_URI`, `PORT`, `CLIENT_ORIGIN`, and `ADMIN_TOKEN`
- Start command: `npm run start`

## Notes
- Product images:
  - Seed data uses static images from the frontend at paths like `/images/men.jpg`.
  - Admin image uploads are stored under `server/uploads/` and served via `/uploads/...`.

