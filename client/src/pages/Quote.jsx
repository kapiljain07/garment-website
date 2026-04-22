import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineClock, HiOutlineBeaker, HiOutlineCubeTransparent } from 'react-icons/hi2';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import QuoteForm from '../components/QuoteForm';
import { BRAND } from '../data/content';

export default function Quote() {
  const [params] = useSearchParams();
  const deal = params.get('deal') || params.get('category') || '';

  return (
    <>
      <SEOHead
        title="Request a Quote"
        description="Submit a B2B quote request for industrial cartons, custom retail packaging, master cartons, corrugated raw materials, or eco kraft. Structured quote within 24 hours."
        keywords="B2B packaging quote, carton quote India, bulk corrugated box pricing, custom carton quotation, packaging RFQ"
        path="/quote"
      />

      <section className="bg-bone pt-32 md:pt-40 pb-20 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start"
          >
            <SectionHeading
              eyebrow="B2B Quote Engine"
              title={
                <>
                  Tell us what
                  <br />
                  you ship.
                </>
              }
              sub="Dimensions, material, print, and volume are enough. Our B2B desk returns a structured quote, lead time, and prototype options within 24 hours."
            />

            <div className="mt-10 space-y-5">
              <Highlight
                icon={HiOutlineClock}
                title="24-hour structured response"
                body="Every quote returns with lead time, MOQ, freight estimate, and sample options."
              />
              <Highlight
                icon={HiOutlineCubeTransparent}
                title="Free structural sample"
                body="Most projects ship a white sample inside 48 hours, courier included, on India-wide basis."
              />
              <Highlight
                icon={HiOutlineBeaker}
                title="Spec-first engineering"
                body="We optimise GSM, flute, and structure against your real load — not nearest off-the-shelf."
              />
            </div>

            <div className="mt-10 border-t border-line pt-6 text-[13.5px] text-slate-soft leading-relaxed">
              For urgent RFQs, email{' '}
              <a href={`mailto:${BRAND.email}`} className="text-ink underline underline-offset-2">
                {BRAND.email}
              </a>{' '}
              or call{' '}
              <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="text-ink underline underline-offset-2">
                {BRAND.phone}
              </a>.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-paper border border-line p-8 md:p-10">
              <QuoteForm defaultDeal={deal} />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Highlight({ icon: Icon, title, body }) {
  return (
    <div className="flex items-start gap-4 border-t border-line pt-5">
      <div className="w-10 h-10 border border-ink flex items-center justify-center bg-bone shrink-0">
        <Icon className="w-5 h-5 text-ink" />
      </div>
      <div>
        <div className="font-medium text-[15px] text-ink">{title}</div>
        <div className="mt-1 text-[13.5px] text-slate-soft leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
}
