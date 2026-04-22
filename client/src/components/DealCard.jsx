import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const TONE = {
  kraft: {
    bg: 'bg-kraft',
    text: 'text-bone',
    muted: 'text-paper/75',
    ribbon: 'bg-ink text-bone',
    btn: 'bg-ink text-bone hover:bg-kraft-dark',
    border: 'border-kraft-deep',
  },
  amber: {
    bg: 'bg-amber',
    text: 'text-bone',
    muted: 'text-paper/80',
    ribbon: 'bg-ink text-amber',
    btn: 'bg-ink text-bone hover:bg-amber-2',
    border: 'border-amber-2',
  },
  forest: {
    bg: 'bg-forest',
    text: 'text-bone',
    muted: 'text-paper/75',
    ribbon: 'bg-bone text-forest',
    btn: 'bg-bone text-forest hover:bg-paper',
    border: 'border-forest-2',
  },
  slate: {
    bg: 'bg-ink',
    text: 'text-bone',
    muted: 'text-paper/60',
    ribbon: 'bg-kraft text-ink',
    btn: 'bg-kraft text-ink hover:bg-bone',
    border: 'border-slate',
  },
};

export default function DealCard({ deal, index = 0 }) {
  const t = TONE[deal.tone] || TONE.slate;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`relative ${t.bg} ${t.text} border ${t.border} overflow-hidden`}
    >
      <span
        className={`absolute top-0 right-0 z-10 ${t.ribbon} px-3 py-1.5 font-mono text-[10.5px] tracking-widest uppercase`}
      >
        {deal.ribbon}
      </span>

      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className="eyebrow opacity-70 mb-6">Deal · {String(index + 1).padStart(2, '0')}</div>
        <h3 className="font-display text-[28px] leading-tight mb-6 max-w-xs">
          {deal.title}
        </h3>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="font-display text-[38px] leading-none">{deal.price}</span>
          {deal.was && (
            <span className={`font-mono text-[13px] line-through ${t.muted}`}>
              {deal.was}
            </span>
          )}
        </div>

        <dl className={`grid grid-cols-2 gap-x-4 gap-y-4 text-[13px] ${t.muted} mb-8`}>
          <div>
            <dt className="eyebrow text-[9.5px] opacity-80 mb-1">MOQ</dt>
            <dd className="font-mono">{deal.moq}</dd>
          </div>
          <div>
            <dt className="eyebrow text-[9.5px] opacity-80 mb-1">Window</dt>
            <dd>{deal.window}</dd>
          </div>
          <div className="col-span-2">
            <dt className="eyebrow text-[9.5px] opacity-80 mb-1">Spec</dt>
            <dd className="font-mono text-[12.5px] leading-snug">{deal.spec}</dd>
          </div>
        </dl>

        <Link
          to={`/quote?deal=${deal.id}`}
          className={`mt-auto inline-flex items-center justify-between gap-2 ${t.btn} px-5 py-3.5 text-[13px] font-medium tracking-tight transition-colors`}
        >
          {deal.cta}
          <HiArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
