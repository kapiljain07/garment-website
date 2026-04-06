const WHATSAPP_DEFAULT = '15551234567' // replace in client/.env

export default function WhatsAppButton() {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT
  const message =
    'Hi, I’d like to request a quote for bulk garment manufacturing. Please contact me.'
  const href = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <span className="text-sm font-bold">WA</span>
    </a>
  )
}

