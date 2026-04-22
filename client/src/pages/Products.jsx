import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import SpecTable from '../components/SpecTable';
import { PRODUCT_CATEGORIES, SPEC_SHEETS } from '../data/content';

export default function Products() {
  const { hash } = useLocation();
  const refs = useRef({});

  useEffect(() => {
    if (!hash) return;
    const slug = hash.replace('#', '');
    const el = refs.current[slug];
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
  }, [hash]);

  return (
    <>
      <SEOHead
        title="Product Catalog"
        description="Heavy-duty shipping cartons, custom retail packaging, master/export cartons, corrugated raw materials, FSC eco kraft, and industrial pallet boxes. Full GSM, BST, ECT, and flute specifications."
        keywords="corrugated box catalog, carton specifications, BST GSM flute, heavy-duty shipping carton, die-cut retail box, FSC kraft, export master carton"
        path="/products"
      />

      <PageHeader />
      <CategoryNav />
      <CategorySections refsMap={refs} />
      <CTA />
    </>
  );
}

function PageHeader() {
  return (
    <section className="bg-bone pt-32 md:pt-40 pb-20 border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Catalog · 2026"
            title={
              <>
                Six categories.
                <br />
                <em className="not-italic text-kraft-deep">
                  Engineered for purpose.
                </em>
              </>
            }
            sub="Explore every SKU family with full technical specifications — GSM, flute profile, bursting strength, ECT, and typical load ratings."
          />
        </div>
        <div className="lg:col-span-5 lg:text-right">
          <dl className="grid grid-cols-3 gap-4 text-left">
            <div>
              <dt className="eyebrow text-slate-soft">Categories</dt>
              <dd className="font-display text-[36px] text-ink">06</dd>
            </div>
            <div>
              <dt className="eyebrow text-slate-soft">Flute profiles</dt>
              <dd className="font-display text-[36px] text-ink">07</dd>
            </div>
            <div>
              <dt className="eyebrow text-slate-soft">GSM range</dt>
              <dd className="font-display text-[36px] text-ink">
                80–300
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function CategoryNav() {
  const [active, setActive] = useState(PRODUCT_CATEGORIES[0].slug);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 160;
      let current = PRODUCT_CATEGORIES[0].slug;
      for (const c of PRODUCT_CATEGORIES) {
        const el = document.getElementById(c.slug);
        if (el && el.offsetTop <= y) current = c.slug;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-bone/90 backdrop-blur border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto">
        <div className="flex items-center gap-6 py-3 min-w-max text-[12.5px]">
          {PRODUCT_CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className={`whitespace-nowrap transition-colors ${
                active === c.slug
                  ? 'text-ink font-medium'
                  : 'text-slate-soft hover:text-ink'
              }`}
            >
              <span className="font-mono text-[11px] text-kraft-deep mr-2">
                {c.tag.split(' / ')[0]}
              </span>
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategorySections({ refsMap }) {
  return (
    <section>
      {PRODUCT_CATEGORIES.map((cat, i) => (
        <CategoryBlock key={cat.slug} cat={cat} index={i} refsMap={refsMap} />
      ))}
    </section>
  );
}

function CategoryBlock({ cat, index, refsMap }) {
  const isEven = index % 2 === 0;
  const rows = SPEC_SHEETS[cat.slug];
  return (
    <article
      id={cat.slug}
      ref={(el) => {
        if (refsMap?.current) refsMap.current[cat.slug] = el;
      }}
      className={`${isEven ? 'bg-bone' : 'bg-paper'} border-b border-line`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className={`grid lg:grid-cols-12 gap-12 items-start ${
          isEven ? '' : 'lg:[&>*:first-child]:order-2'
        }`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-[11px] tracking-widest text-kraft-deep mb-4">
              {cat.tag}
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] text-ink leading-[1.02]">
              {cat.name}
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-slate">
              {cat.description}
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {cat.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13.5px] text-slate"
                >
                  <span className="mt-1.5 w-1 h-1 bg-kraft shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              to={`/quote?category=${encodeURIComponent(cat.name)}`}
              className="mt-10 inline-flex items-center gap-2 font-medium text-ink border-b border-ink pb-1"
            >
              Quote this category
              <HiArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute bottom-4 left-4 bg-ink text-bone px-3 py-2 font-mono text-[11px] tracking-wider">
                {cat.tag}
              </div>
            </div>

            {rows && (
              <SpecTable rows={rows} caption={`Spec sheet · ${cat.name}`} />
            )}
          </motion.div>
        </div>
      </div>
    </article>
  );
}

function CTA() {
  return (
    <section className="bg-ink text-bone py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="eyebrow text-kraft mb-3">Can’t find what you need?</div>
          <h3 className="font-display text-[32px] leading-tight max-w-xl">
            Every SKU we ship starts as a brief. Send us yours.
          </h3>
        </div>
        <Link
          to="/quote"
          className="inline-flex items-center gap-3 bg-kraft text-ink px-7 py-4 text-[13.5px] font-medium hover:bg-bone transition-colors"
        >
          Request a custom quote
          <HiArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
