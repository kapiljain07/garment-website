import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="rounded-3xl border bg-white p-8">
        <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Go to Home
        </Link>
      </div>
    </section>
  )
}

