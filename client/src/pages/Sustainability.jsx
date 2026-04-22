import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import ParallaxImage from '../components/ParallaxImage';
import { SUSTAINABILITY_PILLARS, CERTIFICATIONS } from '../data/content';

const PRACTICES = [
  {
    title: 'Fibre',
    body: '100% paper-based structures. Virgin kraft from FSC-certified pulp mills; recycled fibre from post-consumer streams. Zero PE-liner laminations.',
  },
  {
    title: 'Inks',
    body: 'Soy-based inks on offset and flexo lines. Water-based coatings for gloss and barrier; no solvent-based inks on the floor since 2022.',
  },
  {
    title: 'Adhesives',
    body: 'Starch-based corrugation adhesive. EVA-free hotmelt alternatives for closures. Everything your carton contains can be re-pulped.',
  },
  {
    title: 'Energy',
    body: '1.4 MW rooftop solar covers ~42% of our daytime load. Heat-recovery on the corrugator pre-heater cuts gas use by a further 17%.',
  },
  {
    title: 'Water',
    body: 'Closed-loop water system with on-site effluent treatment. Zero liquid discharge certified by state pollution board since 2023.',
  },
  {
    title: 'Waste',
    body: 'Edge trim, off-cuts, and rejected lots are re-pulped in-house via a 12 TPD pulper. Our operational waste-to-landfill is under 0.4%.',
  },
];

export default function Sustainability() {
  return (
    <>
      <SEOHead
        title="Sustainability"
        description="Vikas Box Factory sustainability: FSC-certified recycled kraft, soy-based inks, water-based adhesives, 1.4 MW rooftop solar, zero liquid discharge, and 100% curbside recyclable output."
        keywords="FSC packaging India, eco-friendly corrugated, recyclable packaging, soy ink packaging, zero liquid discharge, sustainable B2B packaging"
        path="/sustainability"
      />

      <Intro />
      <Pillars />
      <Practices />
      <Commitment />
    </>
  );
}

function Intro() {
  return (
    <section className="relative bg-forest text-bone pt-32 md:pt-40 pb-24 overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1800&q=80"
        alt="Kraft paper macro"
        className="absolute inset-0 opacity-25"
        intensity={80}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/90 to-forest/70" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Sustainability"
          tone="paper"
          title={
            <>
              Packaging made of paper.
              <br />
              <em className="not-italic text-kraft">Nothing more.</em>
            </>
          }
          sub="Our sustainability position is simple: every gram that leaves our floor should be compostable, re-pulpable, or curbside recyclable. We publish our numbers because circular packaging has to be measurable."
        />
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {SUSTAINABILITY_PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-bone p-8 md:p-10"
            >
              <div className="font-display text-[64px] leading-none text-forest">
                {p.kpi}
              </div>
              <div className="eyebrow mt-4 text-kraft-deep">{p.label}</div>
              <div className="mt-3 text-[13.5px] text-slate leading-relaxed">
                {p.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practices() {
  return (
    <section className="bg-paper py-24 md:py-32 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Practice"
          title={
            <>
              Six operational commitments —
              <br />
              <em className="not-italic text-kraft-deep">audited quarterly.</em>
            </>
          }
          sub="Not a glossy claim. Every line below is checked against floor data and third-party audits."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {PRACTICES.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-paper p-8 md:p-10"
            >
              <div className="font-mono text-[11px] tracking-widest text-kraft-deep mb-3">
                0{i + 1}
              </div>
              <h3 className="font-display text-[24px] text-ink leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-[14px] text-slate leading-relaxed">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.code}
              className="border border-ink/15 bg-bone px-4 py-3"
            >
              <div className="font-mono text-[12.5px] text-ink">{c.code}</div>
              <div className="text-[11px] text-slate-soft">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="bg-ink text-bone py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="Roadmap to 2030"
            tone="paper"
            title={
              <>
                Carbon-neutral works by
                <br />
                <em className="not-italic text-kraft">FY 2029–30.</em>
              </>
            }
            sub="We have committed to Science-Based Targets (SBTi scope 1 + 2) alignment, with public annual disclosures starting this fiscal."
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 font-medium text-kraft border-b border-kraft pb-1"
          >
            Request our ESG brief
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-px bg-slate/40 border border-slate/40">
          {[
            ['2024', 'Baseline scope 1+2 disclosure'],
            ['2025', '50% fibre from recycled streams'],
            ['2027', '75% grid energy from renewables'],
            ['2030', 'Net-zero scope 1+2 target'],
          ].map(([year, label]) => (
            <div key={year} className="bg-ink p-6">
              <div className="font-mono text-[12px] text-kraft">{year}</div>
              <div className="mt-2 font-display text-[18px] text-bone leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
