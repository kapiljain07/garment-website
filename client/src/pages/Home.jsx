import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowUpRight, HiArrowLongRight } from 'react-icons/hi2';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import DealCard from '../components/DealCard';
import SpecTable from '../components/SpecTable';
import ParallaxImage from '../components/ParallaxImage';
import {
  BRAND,
  PRODUCT_CATEGORIES,
  CAPABILITIES,
  DEALS,
  SUSTAINABILITY_PILLARS,
  TESTIMONIALS,
  SPEC_SHEETS,
  INDUSTRIES_SERVED,
} from '../data/content';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Vikas Box Factory — Durability Meets Precision"
        description="Premium B2B manufacturer of industrial cartons, corrugated packaging boxes, and raw packaging materials. 15+ years of engineered packaging for heavy-duty shipping, retail, and eco-friendly applications."
        keywords="industrial carton manufacturer, corrugated box manufacturer India, heavy-duty shipping boxes, custom retail packaging, eco-friendly kraft packaging, B2B packaging supplier"
        path="/"
      />

      <Hero />
      <TrustBar />
      <CatalogPreview />
      <ExcellenceStrip />
      <FeaturedSpec />
      <DealsPortal />
      <Sustainability />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}

// -------------------- HERO --------------------
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] bg-bone kraft-grain overflow-hidden"
    >
      {/* Horizontal reference lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[22%] left-0 right-0 border-t border-line" />
        <div className="absolute bottom-[18%] left-0 right-0 border-t border-line" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-end min-h-[78svh]">
          <motion.div
            style={{ y: textY, opacity: fade }}
            className="lg:col-span-7 pt-6"
          >
            <div className="eyebrow text-kraft-deep mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-kraft" />
              Est. {BRAND.established} · Bengaluru
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="display-xl text-ink text-[clamp(48px,9vw,132px)]"
            >
              Durability
              <br />
              Meets <em className="not-italic text-kraft-deep">Precision.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-[18px] leading-relaxed text-slate"
            >
              Industrial cartons, corrugated boxes, and raw packaging materials
              engineered for manufacturers that cannot afford packaging failure.
              Built to spec. Tested to standard. Shipped on time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center justify-between gap-4 bg-ink text-bone px-7 py-4 text-[14px] tracking-tight font-medium hover:bg-kraft-dark transition-colors"
              >
                <span>Request a B2B quote</span>
                <HiArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-7 py-4 text-[14px] tracking-tight font-medium text-ink border border-ink hover:bg-ink hover:text-bone transition-colors"
              >
                Browse catalog
                <HiArrowLongRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: imgY }}
            className="lg:col-span-5 relative"
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1586380951230-e6703d9f6833?auto=format&fit=crop&w=1400&q=85"
              alt="Stacked corrugated cartons"
              className="aspect-[4/5] w-full"
              intensity={40}
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
            </ParallaxImage>
            <div className="absolute -left-4 -top-4 hidden lg:block bg-bone border border-line p-4 max-w-[220px]">
              <div className="font-mono text-[10.5px] text-slate-soft">SKU-05-BC-22</div>
              <div className="mt-1 font-display text-[18px] text-ink leading-tight">
                5-Ply BC flute
              </div>
              <div className="mt-2 eyebrow text-kraft-deep">
                BST · 22 kgf/cm²
              </div>
            </div>
            <div className="absolute -right-2 bottom-6 hidden lg:block bg-ink text-bone p-4 max-w-[240px]">
              <div className="eyebrow text-kraft opacity-80">Lot 24-117</div>
              <div className="mt-1 font-display text-[18px] leading-tight">
                4.2M cartons / month
              </div>
              <div className="mt-2 text-[12px] text-paper/60">
                Three-shift capacity, Bengaluru works.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom rail: product categories */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-line">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-between items-center">
            <div className="eyebrow text-slate-soft">Catalog</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate font-medium">
              {PRODUCT_CATEGORIES.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  to="/products"
                  className="hover:text-ink transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- TRUST BAR --------------------
function TrustBar() {
  return (
    <section className="bg-ink text-bone border-y border-slate/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 overflow-hidden">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <span className="eyebrow text-kraft">Trusted across</span>
          <div className="flex items-center gap-x-10 gap-y-3 flex-wrap">
            {INDUSTRIES_SERVED.map((i) => (
              <span key={i} className="text-[13px] text-paper/70">
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- CATALOG PREVIEW --------------------
function CatalogPreview() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Product Catalog"
            title="Six categories. Thousands of SKUs."
            sub="From heavy-duty triple-wall shippers to die-cut luxury retail, every category is engineered in-house and tested to spec."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-medium text-ink border-b border-ink pb-1 self-start lg:self-end"
          >
            View full catalog
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- EXCELLENCE STRIP --------------------
function ExcellenceStrip() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      <div className="absolute inset-0 corrugation opacity-60 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Manufacturing Excellence"
              tone="paper"
              title={
                <>
                  {BRAND.yearsExperience}+ years of
                  <br />
                  <em className="not-italic text-kraft">engineered</em> packaging.
                </>
              }
              sub="A family of three production floors, a 2.2 m corrugator, in-house offset and die lines — with QA checks at every handoff."
            >
              <Link
                to="/manufacturing"
                className="inline-flex items-center gap-2 mt-4 border-b border-kraft text-kraft pb-1 font-medium"
              >
                Tour our works
                <HiArrowUpRight className="w-4 h-4" />
              </Link>
            </SectionHeading>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-slate/40 border border-slate/40">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-ink p-6 md:p-8 flex flex-col gap-2"
              >
                <div className="font-display text-[44px] leading-none text-bone">
                  {c.value}
                </div>
                <div className="eyebrow text-kraft">{c.label}</div>
                <div className="text-[13px] text-paper/60 leading-relaxed">
                  {c.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- FEATURED SPEC TABLE --------------------
function FeaturedSpec() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Technical Specification"
              title="Real specs. Not PDF downloads."
              sub="B2B buyers don’t want brochures. They want GSM, flute, BST, ECT, and typical load — interactive and filterable."
            />
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-medium text-ink border-b border-ink pb-1"
            >
              All spec sheets
              <HiArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <SpecTable
          rows={SPEC_SHEETS['heavy-duty-shipping']}
          caption="Heavy-Duty Shipping Cartons · Corrugated grades"
        />
      </div>
    </section>
  );
}

// -------------------- DEALS PORTAL --------------------
function DealsPortal() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Company Deals"
            title={
              <>
                Bulk rates &amp; stock clearance.
                <br />
                <em className="not-italic text-kraft-deep">Live this quarter.</em>
              </>
            }
            sub="Volume pricing, stock-lot clearance, and annual rate contracts for verified B2B accounts."
          />
          <Link
            to="/deals"
            className="inline-flex items-center gap-2 font-medium text-ink border-b border-ink pb-1 self-start lg:self-end"
          >
            All active deals
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEALS.map((d, i) => (
            <DealCard key={d.id} deal={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- SUSTAINABILITY --------------------
function Sustainability() {
  return (
    <section className="bg-forest text-bone py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 kraft-grain opacity-30 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Sustainability"
              tone="paper"
              title={
                <>
                  Packaging is paper.
                  <br />
                  <em className="not-italic text-kraft">Nothing more.</em>
                </>
              }
              sub="FSC-certified recycled fibre, water-based adhesives, and soy-based inks. 100% curbside recyclable output, certified zero liquid discharge since 2023."
            >
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 mt-4 border-b border-kraft text-kraft pb-1 font-medium"
              >
                Read the commitment
                <HiArrowUpRight className="w-4 h-4" />
              </Link>
            </SectionHeading>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {SUSTAINABILITY_PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="border border-bone/15 p-6 bg-forest-2/40"
              >
                <div className="font-display text-[48px] leading-none">{p.kpi}</div>
                <div className="eyebrow mt-3 text-kraft">{p.label}</div>
                <div className="mt-2 text-[13px] text-paper/75 leading-relaxed">
                  {p.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- TESTIMONIALS --------------------
function Testimonials() {
  return (
    <section className="bg-bone py-24 md:py-32 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Field Reports"
          title="Quiet packaging. Loud results."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-line">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-bone p-8 md:p-10"
            >
              <div className="font-display text-[28px] text-kraft-deep mb-4 leading-none">
                &ldquo;
              </div>
              <blockquote className="font-display text-[20px] leading-snug text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line">
                <div className="font-medium text-ink text-[14px]">{t.author}</div>
                <div className="text-[12px] text-slate-soft mt-0.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- CLOSING CTA --------------------
function ClosingCTA() {
  return (
    <section className="bg-ink text-bone py-24 md:py-32 relative overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1605557626668-fe5b89a33d51?auto=format&fit=crop&w=1800&q=80"
        alt="Kraft paper roll"
        className="absolute inset-0 opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <SectionHeading
          tone="paper"
          align="center"
          eyebrow="Start a project"
          title={
            <>
              Tell us what you ship.
              <br />
              <em className="not-italic text-kraft">We’ll engineer the rest.</em>
            </>
          }
          sub="Most projects receive a structured quote within 24 hours. Custom structural samples ship in 48."
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/quote"
            className="group inline-flex items-center justify-center gap-3 bg-kraft text-ink px-8 py-4 text-[14px] font-medium tracking-tight hover:bg-bone transition-colors"
          >
            Request a quote
            <HiArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 border border-paper/30 text-bone px-8 py-4 text-[14px] font-medium tracking-tight hover:bg-paper/10"
          >
            Speak to a specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
