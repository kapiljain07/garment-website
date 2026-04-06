import { Helmet } from 'react-helmet-async'

function ServiceCard({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <div className="text-lg font-bold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  )
}

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Services | Garment Manufacturing</title>
        <meta name="description" content="Bulk manufacturing, private labeling, and custom design support for men, women, and kids clothing." />
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Services</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            End-to-end garment manufacturing solutions for wholesalers, retailers, and private label brands.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Bulk Manufacturing"
            description="High-volume production with consistent quality and scalable capacity."
          />
          <ServiceCard
            title="Private Labeling"
            description="White-label manufacturing with your tags, trims, labels, and packaging."
          />
          <ServiceCard
            title="Custom Designs"
            description="Bring your design files or sketches and get sample-to-bulk execution."
          />
          <ServiceCard
            title="Premium Fabric Options"
            description="Cotton, blends, fleece, and more sourced for comfort, durability, and market fit."
          />
          <ServiceCard
            title="Printing & Embroidery"
            description="Screen print, DTF, digital print, and embroidery support for branded collections."
          />
          <ServiceCard
            title="Pan-India Delivery"
            description="Reliable logistics and dispatch planning to support growing order volumes."
          />
        </div>

        <div className="mt-10 rounded-3xl border bg-white p-6 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Minimum Order Quantity (MOQ)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-lg font-black text-slate-900">100-499 pcs</div>
              <div className="mt-1 text-sm text-slate-600">Starter Orders</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-lg font-black text-slate-900">500-1999 pcs</div>
              <div className="mt-1 text-sm text-slate-600">Standard Bulk</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-lg font-black text-slate-900">2000+ pcs</div>
              <div className="mt-1 text-sm text-slate-600">Enterprise / Export</div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-6 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold text-emerald-300">Ready to manufacture your next collection?</div>
              <div className="mt-3 text-2xl font-bold">Request a quote and share your design pack.</div>
              <p className="mt-3 text-sm text-white/80">
                We respond with production feasibility and next steps for bulk manufacturing and private labeling.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex w-full justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold shadow hover:bg-emerald-700 md:w-auto"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

