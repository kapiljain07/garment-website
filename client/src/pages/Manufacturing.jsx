import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import ParallaxImage from '../components/ParallaxImage';
import {
  BRAND,
  CAPABILITIES,
  MANUFACTURING_PROCESS,
  CERTIFICATIONS,
  INDUSTRIES_SERVED,
} from '../data/content';

export default function Manufacturing() {
  return (
    <>
      <SEOHead
        title="Manufacturing Excellence"
        description="Inside the Vikas Box Factory works: 15+ years of industrial packaging manufacturing, 2.2 m corrugator, multi-colour offset and flexo lines, in-house die-cutting, and 4.2 M+ cartons produced per month."
        keywords="packaging manufacturer India, corrugator 2200mm, offset print packaging, BRCGS ISO 9001 packaging, bulk carton manufacturing"
        path="/manufacturing"
      />

      <Intro />
      <CapabilityGrid />
      <Process />
      <FloorTour />
      <CertsIndustries />
    </>
  );
}

function Intro() {
  return (
    <section className="bg-bone pt-32 md:pt-40 pb-20 border-b border-line kraft-grain">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow={`Since ${BRAND.established}`}
            title={
              <>
                {BRAND.yearsExperience}+ years of
                <br />
                <em className="not-italic text-kraft-deep">manufacturing</em> discipline.
              </>
            }
            sub="Three production floors, one standard. Every carton we ship passes through structural QA, paper QA, print QA, and outbound load audits — in that order."
          />
        </div>
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] text-slate-soft mb-3 tracking-widest uppercase">
            Works · Bengaluru, India
          </div>
          <div className="space-y-2 text-[15px] text-slate leading-relaxed">
            <p>
              {BRAND.full} was founded in {BRAND.established} as a single-line
              corrugator serving local FMCG. Today we run three floors with
              dedicated lines for heavy-duty shipping, retail, and eco kraft.
            </p>
            <p className="text-slate-soft">
              Our standard is plain: your product should arrive the way it left
              your factory. No exceptions, no excuses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityGrid() {
  return (
    <section className="bg-ink text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <SectionHeading
          eyebrow="Capability"
          tone="paper"
          title="Numbers we publish."
          sub="We don’t hide the specs. Here’s exactly what our works can deliver, every single shift."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate/40 border border-slate/40">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-ink p-8 md:p-10"
            >
              <div className="font-display text-[56px] leading-none text-bone">
                {c.value}
              </div>
              <div className="eyebrow mt-4 text-kraft">{c.label}</div>
              <div className="mt-3 text-[14px] text-paper/65 leading-relaxed">
                {c.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="The Works"
          title={
            <>
              A six-step process —
              <br />
              <em className="not-italic text-kraft-deep">no black box.</em>
            </>
          }
          sub="From CAD to despatch, every handoff is documented, checked, and traceable to the SKU."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {MANUFACTURING_PROCESS.map((p, i) => (
            <motion.article
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-bone p-8 md:p-10 relative group"
            >
              <div className="absolute top-6 right-6 font-mono text-[11px] text-kraft-deep">
                {p.step}
              </div>
              <h3 className="font-display text-[24px] text-ink leading-tight max-w-[16ch]">
                {p.title}
              </h3>
              <p className="mt-4 text-[14px] text-slate leading-relaxed">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloorTour() {
  const shots = [
    {
      src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80',
      tag: 'Corrugator line',
      caption: '2.2 m double-facer corrugator. A/B/C/E flutes.',
    },
    {
      src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1400&q=80',
      tag: 'Finishing floor',
      caption: 'Die-cut, folder-gluer & stitching at ±0.5 mm.',
    },
    {
      src: 'https://images.unsplash.com/photo-1616166330660-a7caeec43c98?auto=format&fit=crop&w=1400&q=80',
      tag: 'QA station',
      caption: 'BST, ECT, cobb and drop testing on every lot.',
    },
  ];

  return (
    <section className="bg-paper py-24 md:py-32 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Floor Tour"
            title="On the line."
            sub="Macro captures from our Bengaluru works."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <ParallaxImage
                src={s.src}
                alt={s.caption}
                className="aspect-[4/5]"
                intensity={30}
              >
                <div className="absolute top-4 left-4 bg-bone/90 text-ink font-mono text-[10.5px] tracking-widest uppercase px-2.5 py-1">
                  {s.tag}
                </div>
              </ParallaxImage>
              <figcaption className="mt-4 text-[13px] text-slate-soft">
                {s.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertsIndustries() {
  return (
    <section className="bg-bone py-24 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow text-kraft-deep mb-5">Certifications</div>
          <div className="grid grid-cols-2 gap-3">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c.code}
                className="border border-line p-5 hover:border-ink transition-colors"
              >
                <div className="font-mono text-[13px] text-ink">{c.code}</div>
                <div className="mt-2 text-[12.5px] text-slate-soft">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow text-kraft-deep mb-5">Industries Served</div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES_SERVED.map((i) => (
              <span
                key={i}
                className="px-4 py-2 border border-line text-[13.5px] text-slate hover:border-ink hover:text-ink transition-colors"
              >
                {i}
              </span>
            ))}
          </div>
          <Link
            to="/quote"
            className="mt-10 inline-flex items-center gap-2 font-medium text-ink border-b border-ink pb-1"
          >
            Start an engineered project
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
