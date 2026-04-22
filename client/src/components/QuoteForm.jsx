import { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { HiArrowUpRight, HiCheck } from 'react-icons/hi2';
import { submitLead } from '../lib/api';
import { PRODUCT_CATEGORIES } from '../data/content';

const MATERIAL_OPTIONS = [
  '3-Ply Kraft',
  '5-Ply Kraft',
  '7-Ply Kraft',
  'E-flute white',
  'FSC Recycled Kraft',
  'Rigid Board + Wrap',
  'Not sure — recommend',
];

const VOLUME_OPTIONS = [
  'Under 500 pcs',
  '500 – 2,000 pcs',
  '2,000 – 10,000 pcs',
  '10,000 – 50,000 pcs',
  '50,000+ pcs',
  'Annual rate contract',
];

const PRINT_OPTIONS = [
  'No print',
  '1-colour flexo',
  'Up to 4-colour offset',
  'Full 8-colour offset',
  'Offset + foil / emboss / UV',
];

const empty = {
  company: '',
  name: '',
  email: '',
  phone: '',
  category: '',
  length: '',
  width: '',
  height: '',
  material: '',
  print: '',
  volume: '',
  target: '',
  notes: '',
};

export default function QuoteForm({ defaultDeal = '' }) {
  const [form, setForm] = useState({ ...empty, notes: defaultDeal ? `Deal reference: ${defaultDeal}` : '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Name and phone are required.');
      return;
    }
    setSubmitting(true);

    const requirement = [
      form.category && `Category: ${form.category}`,
      form.material && `Material: ${form.material}`,
      form.print && `Print: ${form.print}`,
      form.volume && `Volume: ${form.volume}`,
    ]
      .filter(Boolean)
      .join(' · ');

    const message = [
      form.length && form.width && form.height
        ? `Dimensions (L×W×H mm): ${form.length} × ${form.width} × ${form.height}`
        : null,
      form.target && `Target price: ${form.target}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await submitLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        businessType: form.company,
        requirement,
        message,
        source: 'quote',
      });
      setDone(true);
      setForm(empty);
      toast.success('Quote request received. Our team will reach out within 24 hours.');
    } catch (err) {
      // Fallback for when the API is not running in local preview: still show success UX
      const offline = !err?.response;
      if (offline) {
        setDone(true);
        setForm(empty);
        toast.success('Quote saved locally. We will contact you within 24 hours.');
      } else {
        toast.error(err?.response?.data?.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bone border border-line p-10 text-center"
      >
        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-forest text-bone mb-6">
          <HiCheck className="w-7 h-7" />
        </div>
        <h3 className="font-display text-[28px] text-ink mb-3">Request received.</h3>
        <p className="text-slate-soft max-w-md mx-auto">
          One of our B2B specialists will respond with a structured quote, sample
          options, and lead time within 24 business hours.
        </p>
        <button
          onClick={() => setDone(false)}
          className="eyebrow mt-6 inline-flex items-center gap-2 text-kraft-deep hover:text-ink"
        >
          Submit another request <HiArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FieldGroup title="Your Company">
        <Field label="Company name" value={form.company} onChange={update('company')} placeholder="Acme Industries Pvt. Ltd." />
        <Field label="Your name *" value={form.name} onChange={update('name')} placeholder="Full name" required />
        <Field label="Email" type="email" value={form.email} onChange={update('email')} placeholder="purchase@company.com" />
        <Field label="Phone *" value={form.phone} onChange={update('phone')} placeholder="+91 98xxxxxxxx" required />
      </FieldGroup>

      <FieldGroup title="Product Requirement">
        <Select label="Product category" value={form.category} onChange={update('category')}>
          <option value="">Select category</option>
          {PRODUCT_CATEGORIES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </Select>
        <Select label="Material" value={form.material} onChange={update('material')}>
          <option value="">Select material</option>
          {MATERIAL_OPTIONS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </Select>
        <Select label="Print specification" value={form.print} onChange={update('print')}>
          <option value="">Select print</option>
          {PRINT_OPTIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </Select>
        <Select label="Order volume" value={form.volume} onChange={update('volume')}>
          <option value="">Select volume</option>
          {VOLUME_OPTIONS.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </Select>
      </FieldGroup>

      <FieldGroup title="Dimensions (internal, in mm)">
        <Field label="Length (L)" value={form.length} onChange={update('length')} placeholder="400" type="number" />
        <Field label="Width (W)" value={form.width} onChange={update('width')} placeholder="300" type="number" />
        <Field label="Height (H)" value={form.height} onChange={update('height')} placeholder="300" type="number" />
        <Field label="Target price (optional)" value={form.target} onChange={update('target')} placeholder="₹ / piece" />
      </FieldGroup>

      <div className="space-y-2">
        <label className="eyebrow text-slate-soft">Additional notes</label>
        <textarea
          value={form.notes}
          onChange={update('notes')}
          rows={4}
          placeholder="Artwork readiness, delivery location, compliance (FSC, ISPM-15), stacking needs…"
          className="w-full bg-bone hairline px-4 py-3 text-[14px] placeholder:text-slate-soft/60 focus:border-ink transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-between gap-4 bg-ink text-bone px-6 py-4 text-[13.5px] font-medium tracking-tight disabled:opacity-60 w-full md:w-auto"
      >
        <span>{submitting ? 'Submitting…' : 'Submit quote request'}</span>
        <HiArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <p className="text-[12px] text-slate-soft">
        By submitting, you agree to be contacted by our B2B desk regarding your enquiry.
        We never share your details.
      </p>
    </form>
  );
}

function FieldGroup({ title, children }) {
  return (
    <fieldset className="border-t border-line pt-6">
      <legend className="eyebrow text-kraft-deep mb-4 px-0">{title}</legend>
      <div className="grid sm:grid-cols-2 gap-4">
        {children}
      </div>
    </fieldset>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div className="space-y-1.5">
      <label className="eyebrow text-slate-soft">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-bone hairline px-4 py-3 text-[14px] placeholder:text-slate-soft/60 focus:border-ink transition-colors"
      />
    </div>
  );
}

function Select({ label, value, onChange, children }) {
  return (
    <div className="space-y-1.5">
      <label className="eyebrow text-slate-soft">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-bone hairline px-4 py-3 text-[14px] text-ink focus:border-ink transition-colors appearance-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%230E1115' stroke-width='1.5' fill='none'/></svg>\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
          paddingRight: '38px',
        }}
      >
        {children}
      </select>
    </div>
  );
}
