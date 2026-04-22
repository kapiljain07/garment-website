import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import DealCard from '../components/DealCard';
import { DEALS } from '../data/content';

const FILTERS = [
  { id: 'all', label: 'All deals' },
  { id: 'bulk', label: 'Bulk rate' },
  { id: 'clearance', label: 'Stock clearance' },
  { id: 'eco', label: 'Eco launch' },
  { id: 'contract', label: 'Rate contract' },
];

function matches(deal, filter) {
  if (filter === 'all') return true;
  if (filter === 'bulk') return deal.id.startsWith('bulk');
  if (filter === 'clearance') return deal.id.startsWith('stock');
  if (filter === 'eco') return deal.id.startsWith('eco');
  if (filter === 'contract') return deal.id.startsWith('annual');
  return true;
}

export default function Deals() {
  const [filter, setFilter] = useState('all');
  const filtered = DEALS.filter((d) => matches(d, filter));

  return (
    <>
      <SEOHead
        title="Company Deals"
        description="Active B2B packaging deals — bulk rates, stock clearance, eco kraft launch pricing, and annual rate contracts. Reserve your lot with Vikas Box Factory."
        keywords="bulk carton deals, stock clearance packaging, wholesale corrugated boxes, annual rate contract packaging"
        path="/deals"
      />

      <Header />
      <DealsGrid filter={filter} setFilter={setFilter} filtered={filtered} />
      <Terms />
    </>
  );
}

function Header() {
  return (
    <section className="bg-bone pt-32 md:pt-40 pb-20 border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Deals · Live this quarter"
            title={
              <>
                Bulk rates. Stock lots.
                <br />
                <em className="not-italic text-kraft-deep">Rate contracts.</em>
              </>
            }
            sub="A rotating portal of active offers for verified B2B accounts. Limited lots, transparent pricing."
          />
        </div>
        <div className="lg:col-span-5 lg:text-right">
          <div className="inline-flex border border-line">
            <div className="px-5 py-4 border-r border-line">
              <div className="eyebrow text-slate-soft">Active</div>
              <div className="font-display text-[28px] text-ink leading-none mt-1">
                {DEALS.length}
              </div>
            </div>
            <div className="px-5 py-4 border-r border-line">
              <div className="eyebrow text-slate-soft">Window</div>
              <div className="font-display text-[28px] text-ink leading-none mt-1">
                Q-close
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="eyebrow text-slate-soft">Savings up to</div>
              <div className="font-display text-[28px] text-kraft-deep leading-none mt-1">
                26%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DealsGrid({ filter, setFilter, filtered }) {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-[13px] border transition-colors ${
                filter === f.id
                  ? 'bg-ink text-bone border-ink'
                  : 'bg-bone text-slate border-line hover:border-ink hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((d, i) => (
            <DealCard key={d.id} deal={d} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-slate-soft">
            No deals in this filter right now. Check back next quarter.
          </div>
        )}
      </div>
    </section>
  );
}

function Terms() {
  return (
    <section className="bg-paper py-20 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="How it works"
            title="Transparent B2B terms."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {[
            ['01', 'Reserve via Quote', 'Every deal links into our structured quote form — we confirm lots within 24 hours.'],
            ['02', 'Verified accounts', 'Deals are reserved for registered B2B buyers. GST, company registration, or trade references.'],
            ['03', 'Rolling windows', 'Most deals run quarter-to-quarter. Stock-clearance lots close when inventory runs out.'],
            ['04', 'Custom extensions', 'Not seeing your spec? We routinely negotiate custom rate cards against annual volumes.'],
          ].map(([n, t, b]) => (
            <div key={n} className="bg-bone p-6 border border-line">
              <div className="font-mono text-[11px] text-kraft-deep mb-2">{n}</div>
              <div className="font-display text-[20px] text-ink mb-2 leading-tight">{t}</div>
              <div className="text-[13.5px] text-slate leading-relaxed">{b}</div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-12 flex justify-start lg:justify-end">
          <Link
            to="/quote"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[13.5px] font-medium hover:bg-kraft-dark transition-colors"
          >
            Reserve a lot
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
