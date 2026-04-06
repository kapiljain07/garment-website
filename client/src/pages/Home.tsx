import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const menWearImage =
  'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200'
const womenWearImage =
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200'
const kidsWearImage =
  'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Garment Manufacturing | B2B Private Label</title>
        <meta
          name="description"
          content="15+ years of garment manufacturing for men, women, and kids clothing. B2B bulk manufacturing and private labeling."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.28),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                Trusted by 500+ wholesalers and retailers
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Premium Garment Manufacturer and Wholesale Supplier
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
                Bulk manufacturing of men&apos;s, women&apos;s, and kids&apos; wear with OEM and private label support.
                15+ years of excellence and trusted partnerships with brands like Monte Carlo and Octave.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow hover:bg-emerald-400"
                >
                  Get Bulk Quote
                </Link>
                <Link
                  to="/products"
                  className="inline-flex justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                <div className="text-3xl font-black">15+</div>
                <div className="mt-1 text-xs text-white/75">Years Experience</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                <div className="text-3xl font-black">500+</div>
                <div className="mt-1 text-xs text-white/75">B2B Clients</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                <div className="text-3xl font-black">50K+</div>
                <div className="mt-1 text-xs text-white/75">Units / Month</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                <div className="text-3xl font-black">100%</div>
                <div className="mt-1 text-xs text-white/75">Quality Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Our Product Categories</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Built for Every Market Segment</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={menWearImage} alt="Men wear" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Men&apos;s Wear</h3>
            <p className="mt-2 text-sm text-slate-600">
              T-shirts, jeans, bermudas, casual shirts, and track pants with custom branding options.
            </p>
          </article>
          <article className="rounded-3xl border bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={womenWearImage} alt="Women wear" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Women&apos;s Wear</h3>
            <p className="mt-2 text-sm text-slate-600">
              Trend-focused tops, kurtis, leggings, suits, and casual dresses for wholesale and private labels.
            </p>
          </article>
          <article className="rounded-3xl border bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={kidsWearImage} alt="Kids wear" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Kids&apos; Wear</h3>
            <p className="mt-2 text-sm text-slate-600">
              Soft, durable, and safe garments for infants to teenagers with bright designs and quality finishing.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Reliable Manufacturing Partner for Growing Brands</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900">Quality Manufacturing</h3>
              <p className="mt-2 text-sm text-slate-600">Strict quality checks from fabric selection to final finishing.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900">Competitive Factory Pricing</h3>
              <p className="mt-2 text-sm text-slate-600">Direct manufacturer pricing with strong margins for your business.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900">Custom Designs and OEM</h3>
              <p className="mt-2 text-sm text-slate-600">Your label, your designs, our bulk manufacturing expertise.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900">High Production Capacity</h3>
              <p className="mt-2 text-sm text-slate-600">Scalable output for seasonal launches and year-round supply.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900">Fast Turnaround</h3>
              <p className="mt-2 text-sm text-slate-600">Sample delivery and production scheduling built for speed.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900">Long-Term B2B Partnership</h3>
              <p className="mt-2 text-sm text-slate-600">Reliable communication, repeat-order consistency, and trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-6 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Our Story</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">A Legacy of Garment Manufacturing</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              We began as a small setup and evolved into a full-scale garment manufacturing operation serving
              wholesalers, retailers, and private label brands. Our mission is to deliver premium garments at
              wholesale pricing and help our partners scale with confidence.
            </p>
          </div>
          <div className="rounded-3xl border bg-slate-900 p-6 text-white">
            <h3 className="text-xl font-black">Need a Quote for Bulk Orders?</h3>
            <p className="mt-3 text-sm text-white/80">
              Share your category, quantity, and branding requirements. We will respond quickly.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-emerald-400"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 to-slate-800 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Client Feedback</p>
          <h2 className="mt-2 text-3xl font-black text-white">What B2B Buyers Say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <blockquote className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/85">
              &quot;Consistent quality and reliable delivery for our wholesale network. A trusted long-term partner.&quot;
            </blockquote>
            <blockquote className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/85">
              &quot;Private label execution is excellent. Strong support from sampling to final production.&quot;
            </blockquote>
            <blockquote className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/85">
              &quot;Fast turnaround and production flexibility helped us scale seasonal orders without delays.&quot;
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}

