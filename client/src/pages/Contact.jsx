import { motion } from 'framer-motion';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { BRAND } from '../data/content';

const channels = [
  {
    icon: HiOutlineEnvelope,
    label: 'B2B desk',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
  },
  {
    icon: HiOutlineMapPin,
    label: 'Works',
    value: `${BRAND.address.line1} · ${BRAND.address.city}`,
    href: null,
  },
  {
    icon: HiOutlineClock,
    label: 'Operations',
    value: 'Mon – Sat, 09:00 – 19:00 IST · 24/7 production',
    href: null,
  },
];

const offices = [
  { city: 'Bengaluru · HQ', line: 'Peenya Industrial Area — HQ + Works', phone: '+91 80 4000 0000' },
  { city: 'Pune · Sales', line: 'Viman Nagar, Pune — Regional sales', phone: '+91 20 6677 8800' },
  { city: 'Gurugram · Sales', line: 'Cyber Hub, Gurugram — North desk', phone: '+91 124 4000 111' },
];

export default function Contact() {
  const wa = import.meta.env.VITE_WHATSAPP_NUMBER || BRAND.whatsapp;

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contact Vikas Box Factory — B2B sales desk, works address, phone, and sales offices across Bengaluru, Pune, and Gurugram."
        keywords="packaging manufacturer contact, corrugated box supplier India, Bengaluru packaging, carton B2B contact"
        path="/contact"
      />

      <section className="bg-bone pt-32 md:pt-40 pb-20 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Talk to our
                  <br />
                  <em className="not-italic text-kraft-deep">B2B desk.</em>
                </>
              }
              sub="Bulk enquiries, custom engineering, existing supply questions — we route every request to the right specialist within one business hour."
            />
          </div>
          <div className="lg:col-span-5">
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent('Hi Vikas Box Factory — I have a packaging enquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-5 bg-forest text-bone px-6 py-5 w-full md:w-auto hover:bg-forest-2 transition-colors"
            >
              <div>
                <div className="eyebrow text-kraft opacity-90">Fastest route</div>
                <div className="font-display text-[20px] leading-tight mt-1">Chat on WhatsApp</div>
              </div>
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-line border border-line self-start">
            {channels.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-bone p-6"
              >
                <div className="w-9 h-9 border border-ink flex items-center justify-center mb-4">
                  <c.icon className="w-4 h-4 text-ink" />
                </div>
                <div className="eyebrow text-slate-soft">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="mt-2 block text-[15px] text-ink underline underline-offset-4 decoration-line">
                    {c.value}
                  </a>
                ) : (
                  <div className="mt-2 text-[15px] text-ink leading-snug">{c.value}</div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-6 border border-line overflow-hidden h-[420px]">
            <iframe
              title="Vikas Box Factory works location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.5!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b0bfc8b9%3A0x1!2sPeenya%20Industrial%20Area%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="eyebrow text-kraft-deep mb-6">Offices</div>
          <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-paper p-6"
              >
                <div className="font-display text-[22px] text-ink leading-tight">
                  {o.city}
                </div>
                <div className="mt-3 text-[14px] text-slate leading-relaxed">
                  {o.line}
                </div>
                <div className="mt-4 font-mono text-[13px] text-kraft-deep">
                  {o.phone}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
