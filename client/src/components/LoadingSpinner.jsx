import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-bone flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-5"
      >
        <div className="relative w-10 h-10">
          <motion.span
            className="absolute inset-0 border border-line"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          />
          <motion.span
            className="absolute inset-2 border border-kraft"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        </div>
        <span className="eyebrow text-slate-soft">Loading</span>
      </motion.div>
    </div>
  );
}
