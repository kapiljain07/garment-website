import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  intensity = 60,
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-paper-2 ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 w-full h-[118%] object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      {children}
    </div>
  );
}
