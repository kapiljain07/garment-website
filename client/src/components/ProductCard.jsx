import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index = 0, to = '/products' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group relative bg-bone border border-line hover:border-kraft transition-colors"
    >
      <Link to={`${to}#${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <span className="font-mono text-[11px] tracking-wider bg-bone/90 text-ink px-2.5 py-1">
              {product.tag}
            </span>
            <span className="w-9 h-9 flex items-center justify-center bg-ink text-bone translate-y-0 group-hover:-translate-y-1 transition-transform">
              <HiArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="p-6 md:p-7 space-y-3">
          <h3 className="font-display text-[22px] leading-tight text-ink">
            {product.name}
          </h3>
          <p className="text-slate-soft text-[14px] leading-relaxed">
            {product.short}
          </p>
          <div className="pt-3 rule flex flex-wrap gap-x-5 gap-y-1.5 pt-4 text-[12px] font-mono text-kraft-deep">
            {product.features.slice(0, 2).map((f) => (
              <span key={f}>· {f}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
