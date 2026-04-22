# Arsh NetSolutions - Digital Solutions Expert Website

A modern, premium, high-converting website for a Digital Solutions Expert built with React, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB.

## Tech Stack

| Layer      | Technology                                  |
|------------|---------------------------------------------|
| Frontend   | React (Vite), Tailwind CSS v4, Framer Motion |
| Backend    | Node.js, Express                            |
| Database   | MongoDB                                     |
| Deployment | Netlify (frontend), Render (backend)        |

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages
│   │   ├── data/         # Static content data
│   │   └── lib/          # API utilities
│   └── ...
├── server/          # Express backend
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── middleware/   # Auth middleware
│   └── utils/       # Email utility
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd server
cp .env.example .env    # Edit with your values
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
cp .env.example .env    # Edit with your values
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies API requests to `http://localhost:5000`.

## API Endpoints

| Method | Endpoint          | Description         | Auth     |
|--------|-------------------|---------------------|----------|
| POST   | /api/leads        | Submit a new lead   | Public   |
| GET    | /api/leads        | Get all leads       | Admin    |
| GET    | /api/leads/export | Export leads as CSV  | Admin    |
| DELETE | /api/leads/:id    | Delete a lead       | Admin    |
| POST   | /api/auth/login   | Admin login         | Public   |
| GET    | /api/auth/verify  | Verify JWT token    | Admin    |
| GET    | /api/health       | Health check        | Public   |

## Pages

- **/** - Homepage (high-conversion landing page)
- **/services** - Services with problem/solution/benefits
- **/industries** - Industry-specific solutions
- **/case-studies** - Portfolio with before/after
- **/consultation** - Lead capture form
- **/contact** - Contact details + form
- **/admin** - Admin panel (login required)

## Environment Variables

### Backend (`server/.env`)

| Variable      | Description                    |
|---------------|--------------------------------|
| PORT          | Server port (default: 5000)    |
| MONGODB_URI   | MongoDB connection string      |
| JWT_SECRET    | Secret key for JWT tokens      |
| ADMIN_EMAIL   | Admin login email              |
| ADMIN_PASSWORD| Admin login password           |
| SMTP_HOST     | Email SMTP host                |
| SMTP_PORT     | Email SMTP port                |
| SMTP_USER     | Email sender address           |
| SMTP_PASS     | Email app password             |
| NOTIFY_EMAIL  | Email to receive notifications |

### Frontend (`client/.env`)

| Variable             | Description                |
|----------------------|----------------------------|
| VITE_API_URL         | Backend API base URL       |
| VITE_WHATSAPP_NUMBER | WhatsApp number (no +)     |

## Deployment

### Frontend (Netlify)

1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `client/dist`
4. Set base directory: `client`
5. Add environment variables in Netlify dashboard

### Backend (Render)

1. Create a new Web Service on Render
2. Set root directory: `server`
3. Set build command: `npm install`
4. Set start command: `node index.js`
5. Add environment variables in Render dashboard
6. Update `VITE_API_URL` in Netlify to point to your Render URL

## Admin Access

Navigate to `/admin` and login with the credentials set in your backend `.env` file.

Default development credentials:
- Email: `admin@digitalsolutions.com`
- Password: `admin123`

## Features

- Responsive mobile-first design
- Smooth page transitions with Framer Motion
- Lazy-loaded routes for performance
- Floating WhatsApp button
- Lead capture forms with validation
- Toast notifications
- SEO with React Helmet
- Admin dashboard with search, filter, and CSV export
- Email notifications for new leads
- JWT authentication for admin
- Rate limiting on API routes
