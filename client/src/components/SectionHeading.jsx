import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
  tone = 'ink',
  children,
}) {
  const isCenter = align === 'center';
  const toneMap = {
    ink: { eyebrow: 'text-kraft-deep', title: 'text-ink', sub: 'text-slate-soft' },
    paper: { eyebrow: 'text-kraft', title: 'text-bone', sub: 'text-paper/70' },
  };
  const t = toneMap[tone];

  return (
    <div
      className={`max-w-4xl ${isCenter ? 'mx-auto text-center' : ''} ${
        isCenter ? 'items-center' : ''
      }`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={`eyebrow mb-5 ${t.eyebrow} inline-flex items-center gap-3 ${
            isCenter ? 'justify-center w-full' : ''
          }`}
        >
          <span className="w-6 h-px bg-current opacity-60" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className={`display-xl text-[clamp(32px,5.2vw,60px)] ${t.title}`}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-6 text-[17px] leading-relaxed max-w-2xl ${t.sub} ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {sub}
        </motion.p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
