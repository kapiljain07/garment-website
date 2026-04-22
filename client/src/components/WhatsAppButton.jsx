import { FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../data/content';

export default function WhatsAppButton() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || BRAND.whatsapp;
  const text = encodeURIComponent(
    'Hi Vikas Box Factory — I would like a quote for industrial packaging.',
  );
  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-12 h-12 md:w-14 md:h-14 bg-forest text-bone flex items-center justify-center shadow-[0_12px_30px_rgba(47,93,59,0.35)] hover:bg-forest-2 transition-colors"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
