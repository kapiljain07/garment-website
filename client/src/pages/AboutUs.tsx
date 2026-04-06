import { Helmet } from 'react-helmet-async'

export default function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us | Garment Manufacturing</title>
        <meta
          name="description"
          content="Learn about our company, our 15+ years of experience, and our manufacturing capabilities for men, women, and kids."
        />
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border bg-white p-6 md:p-10">
          <h1 className="text-3xl font-bold text-slate-900">About Us</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            We are a garment manufacturer with 15+ years of experience delivering reliable B2B production for
            partner brands. Our focus is bulk manufacturing, private labeling, and custom design execution.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">15+ Years</div>
              <div className="mt-2 text-sm text-slate-600">Experience building quality at scale.</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">Partner Brands</div>
              <div className="mt-2 text-sm text-slate-600">Monte Carlo, Octave, and more.</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">B2B Focus</div>
              <div className="mt-2 text-sm text-slate-600">Bulk manufacturing and private label readiness.</div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Manufacturing Capabilities</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Men, Women, Kids clothing categories
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Pattern to production support for bulk runs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Consistent finishing, stitching, and quality checks
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden bg-slate-100">
              <img
                src="https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Factory / manufacturing"
                className="h-72 w-full object-cover md:h-full"
              />
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-emerald-50 p-6">
            <div className="text-sm font-semibold text-emerald-900">Built for Private Label</div>
            <p className="mt-2 text-sm text-emerald-900/90">
              We help brands prepare product packs and translate design intent into bulk manufacturing with
              dependable results.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

