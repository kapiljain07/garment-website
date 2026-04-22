// Central content for Vikas Box Factory.
// Keep real-world units: GSM (g/m²), BST (kgf/cm²), ECT (lb/in), mm dimensions.

export const BRAND = {
  name: 'Vikas Box Factory',
  short: 'Vikas',
  sub: 'Box Factory',
  full: 'Vikas Box Factory',
  tagline: 'Durability Meets Precision.',
  email: 'sales@vikasboxfactory.com',
  phone: '+91 80 4000 0000',
  whatsapp: '919999999999',
  address: {
    line1: 'Plot 42, Sector 7, Peenya Industrial Area',
    city: 'Bengaluru 560058',
    country: 'India',
  },
  gst: '29ABCDE1234F1Z5',
  established: 1997,
  yearsExperience: new Date().getFullYear() - 1997,
};

export const PRODUCT_CATEGORIES = [
  {
    slug: 'heavy-duty-shipping',
    name: 'Heavy-Duty Shipping Cartons',
    tag: '01 / Transit',
    short: '5-ply and 7-ply corrugated cartons engineered for international transit and heavy payloads up to 80 kg.',
    description:
      'Triple-wall construction with reinforced glue laps and high-BST kraft liners. Engineered to survive drop, stack and compression tests under ISTA and ASTM D4169 conditions.',
    image:
      'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Load rating up to 80 kg',
      'BST 18–22 kgf/cm²',
      '5-ply / 7-ply double & triple wall',
      'Tested to ISTA 3A transit standards',
    ],
  },
  {
    slug: 'custom-retail',
    name: 'Custom Retail Packaging',
    tag: '02 / Brand',
    short: 'E-flute die-cut boxes with CMYK or Pantone offset print, foil stamping, emboss, and spot UV finishes.',
    description:
      'Built for unboxing-first brands. Premium structural engineering paired with in-house offset and flexo print lines. 8-colour tolerance, Delta-E ≤ 2.',
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1600&q=80',
    features: [
      'E / B / F flute + micro-flute',
      'Offset print up to 8 colours',
      'Foil, emboss, spot UV, matte lam.',
      'Die-cut, auto-lock, magnetic closures',
    ],
  },
  {
    slug: 'master-export',
    name: 'Master & Export Cartons',
    tag: '03 / Export',
    short: 'Regular slotted containers (RSC) with export-grade specifications, compliant to ISPM-15 where required.',
    description:
      'Designed for palletisation and container loading. Moisture-resistant kraft, waxed options for cold chain, and custom stencil marking for export documentation.',
    image:
      'https://images.unsplash.com/photo-1616166330660-a7caeec43c98?auto=format&fit=crop&w=1600&q=80',
    features: [
      'RSC, HSC, FOL styles',
      'Moisture & wax options',
      'Stencil / flexo marking',
      'Pallet-optimised footprints',
    ],
  },
  {
    slug: 'corrugated-raw',
    name: 'Corrugated Rolls & Sheets',
    tag: '04 / Raw',
    short: 'Raw packaging materials: corrugated rolls, kraft sheets, and paper boards in customisable GSM and flute profiles.',
    description:
      'Mill-direct kraft liners, test liners, and medium paper sourced from verified pulp suppliers. Available as slit rolls, sheets, or converted blanks.',
    image:
      'https://images.unsplash.com/photo-1605557626668-fe5b89a33d51?auto=format&fit=crop&w=1600&q=80',
    features: [
      '80–300 GSM kraft liners',
      'A / B / C / E / BC / EB flutes',
      'Roll widths 400–2200 mm',
      'JIT sheeting & slitting',
    ],
  },
  {
    slug: 'eco-kraft',
    name: 'Eco-Friendly Kraft Line',
    tag: '05 / Eco',
    short: 'FSC-certified recycled kraft, soy-based inks, and water-based adhesives. 100% curbside recyclable.',
    description:
      'Our circular line uses 80–100% post-consumer recycled pulp, with water-based coatings and biodegradable tapes. FSC-C-xxxxxx chain-of-custody certified.',
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1600&q=80',
    features: [
      'FSC-certified recycled kraft',
      'Soy-based / water-based inks',
      'Plastic-free adhesives',
      'Certified curbside recyclable',
    ],
  },
  {
    slug: 'pallet-bulk',
    name: 'Industrial Pallet Boxes',
    tag: '06 / Bulk',
    short: 'Octagonal and square bulk bins for automotive, agri, and chemical handling. Stack ratings up to 1.2 T.',
    description:
      'Heavy-gauge triple-wall with internal partitions, moisture barriers, and fork-entry cut-outs. Used by Tier-1 automotive and bonded-warehouse clients.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Stack load up to 1.2 T',
      'Fork-entry cut-outs',
      'Internal partitions & inserts',
      'Moisture barrier coatings',
    ],
  },
];

// Technical specs used in interactive tables across the site.
export const SPEC_SHEETS = {
  'heavy-duty-shipping': [
    { grade: '5-Ply A', gsm: '150+150+120+150+150', bst: '18 kgf/cm²', ect: '40 lb/in', flute: 'BC', load: '40–55 kg', use: 'Eq heavy parts, appliances' },
    { grade: '5-Ply B', gsm: '180+180+150+180+180', bst: '22 kgf/cm²', ect: '48 lb/in', flute: 'BC', load: '55–70 kg', use: 'Machinery, exports' },
    { grade: '7-Ply', gsm: '200×7 layers', bst: '26 kgf/cm²', ect: '55 lb/in', flute: 'BCB', load: '70–80 kg', use: 'Industrial transit, bulk' },
    { grade: '7-Ply HD', gsm: '230×7 layers', bst: '30+ kgf/cm²', ect: '61 lb/in', flute: 'BCB', load: '80+ kg', use: 'Automotive, heavy cast' },
  ],
  'custom-retail': [
    { grade: 'E-flute White', gsm: '230 top + 150 med.', bst: '6 kgf/cm²', ect: '26 lb/in', flute: 'E', load: '3–5 kg', use: 'D2C unboxing, electronics' },
    { grade: 'F-flute Premium', gsm: '250 top + 140 med.', bst: '5 kgf/cm²', ect: '24 lb/in', flute: 'F', load: '2–3 kg', use: 'Luxury retail, jewellery' },
    { grade: 'B-flute Retail', gsm: '200 top + 150 med.', bst: '8 kgf/cm²', ect: '29 lb/in', flute: 'B', load: '5–8 kg', use: 'Beverage, wine, cosmetics' },
    { grade: 'Rigid + Wrap', gsm: '1500 gsm board + wrap', bst: '—', ect: '—', flute: '—', load: '—', use: 'Mailer, gift, subscription' },
  ],
  'master-export': [
    { grade: 'RSC 3-Ply', gsm: '150+120+150', bst: '10 kgf/cm²', ect: '32 lb/in', flute: 'B', load: '15–25 kg', use: 'Domestic master cartons' },
    { grade: 'RSC 5-Ply', gsm: '180+150+120+150+180', bst: '16 kgf/cm²', ect: '44 lb/in', flute: 'BC', load: '30–45 kg', use: 'Export master cartons' },
    { grade: 'Waxed 5-Ply', gsm: '180+150+120+150+180', bst: '16 kgf/cm²', ect: '44 lb/in', flute: 'BC', load: '30–45 kg', use: 'Cold chain, seafood' },
  ],
  'corrugated-raw': [
    { grade: 'Kraft Liner 120', gsm: '120 GSM', bst: '3.0 kgf/cm²', ect: '—', flute: 'Liner', load: '—', use: 'Inner liners' },
    { grade: 'Kraft Liner 180', gsm: '180 GSM', bst: '4.2 kgf/cm²', ect: '—', flute: 'Liner', load: '—', use: 'Outer liners, retail' },
    { grade: 'Test Liner 230', gsm: '230 GSM', bst: '5.0 kgf/cm²', ect: '—', flute: 'Liner', load: '—', use: 'Heavy-duty liners' },
    { grade: 'Fluting Medium', gsm: '90–140 GSM', bst: '—', ect: '—', flute: 'Medium', load: '—', use: 'Corrugation medium' },
  ],
  'eco-kraft': [
    { grade: 'FSC Recycled 200', gsm: '200 GSM', bst: '4.5 kgf/cm²', ect: '30 lb/in', flute: 'B', load: '5–10 kg', use: 'Sustainable retail' },
    { grade: 'FSC Recycled 250', gsm: '250 GSM', bst: '5.2 kgf/cm²', ect: '36 lb/in', flute: 'BC', load: '10–20 kg', use: 'Eco D2C shipping' },
    { grade: 'FSC Natural Kraft', gsm: '300 GSM', bst: '6.0 kgf/cm²', ect: '42 lb/in', flute: 'BC', load: '15–25 kg', use: 'Premium eco retail' },
  ],
  'pallet-bulk': [
    { grade: 'Bulk Bin 7-Ply', gsm: '300×7 layers', bst: '32 kgf/cm²', ect: '65 lb/in', flute: 'BCB', load: '600–800 kg', use: 'Auto components' },
    { grade: 'Bulk Bin 9-Ply', gsm: '300×9 layers', bst: '42 kgf/cm²', ect: '82 lb/in', flute: 'BCBCB', load: '800–1200 kg', use: 'Castings, engines' },
    { grade: 'Octagonal 7-Ply', gsm: '300×7 layers', bst: '32 kgf/cm²', ect: '65 lb/in', flute: 'BCB', load: '500–700 kg', use: 'Agri, chemical' },
  ],
};

export const CAPABILITIES = [
  {
    value: '15+',
    label: 'Years in manufacturing',
    detail: 'Established 1997, family-run industrial legacy.',
  },
  {
    value: '4.2 M',
    label: 'Cartons per month',
    detail: 'Combined output across three production floors.',
  },
  {
    value: '2,200 mm',
    label: 'Max sheet width',
    detail: 'Large-format corrugator with auto sheet-cutter.',
  },
  {
    value: '±0.5 mm',
    label: 'Die-cut tolerance',
    detail: 'Precision rotary & flatbed die-cutting lines.',
  },
  {
    value: 'Δe ≤ 2',
    label: 'Offset print accuracy',
    detail: 'In-line spectro-densitometry on every SKU.',
  },
  {
    value: '24 / 7',
    label: 'Continuous production',
    detail: 'Three-shift operations with scheduled maintenance.',
  },
];

export const MANUFACTURING_PROCESS = [
  {
    step: '01',
    title: 'Brief & Structural Design',
    body: 'CAD-engineered blanks, FEFCO-coded structures, and rapid white-sample prototyping within 48 hours.',
  },
  {
    step: '02',
    title: 'Material Selection',
    body: 'Virgin kraft, test liner, FSC recycled — matched to load, climate, and compliance requirements.',
  },
  {
    step: '03',
    title: 'Corrugation',
    body: '2.2 m single & double-facer corrugators producing A/B/C/E/BC/EB flute board to tight caliper tolerances.',
  },
  {
    step: '04',
    title: 'Print & Finish',
    body: 'Multi-colour offset, flexo, digital, plus foil, emboss, spot UV and laminations — in-house.',
  },
  {
    step: '05',
    title: 'Die-Cut & Convert',
    body: 'Flatbed and rotary die-cutting, auto-folder-gluers, and stitching lines at ±0.5 mm tolerance.',
  },
  {
    step: '06',
    title: 'QA & Despatch',
    body: 'Sample BST, ECT, cobb, and drop testing. Palletised, shrink-wrapped and load-verified at exit.',
  },
];

export const CERTIFICATIONS = [
  { code: 'ISO 9001', label: 'Quality Management' },
  { code: 'FSC® C-CoC', label: 'Chain of Custody' },
  { code: 'ISO 14001', label: 'Environmental Systems' },
  { code: 'BRCGS', label: 'Packaging Safety' },
  { code: 'ISPM-15', label: 'Export Compliance' },
];

export const INDUSTRIES_SERVED = [
  'E-commerce & D2C',
  'Pharmaceutical',
  'Automotive Tier-1',
  'FMCG & Beverage',
  'Electronics',
  'Cold Chain & Seafood',
  'Textile & Apparel',
  'Agri-export',
];

// Company Deals / Bulk-order portal
export const DEALS = [
  {
    id: 'bulk-rsc-5000',
    title: 'Bulk RSC Master Cartons',
    ribbon: 'Save 18%',
    price: '₹ 22 / pc',
    was: '₹ 27 / pc',
    moq: '5,000 pcs',
    window: 'Valid till next quarter-close',
    spec: '5-Ply BC flute · 18 kgf/cm² BST · 400×300×300 mm',
    tone: 'kraft',
    cta: 'Reserve lot',
  },
  {
    id: 'stock-3ply-12x10x8',
    title: 'Stock Clearance — 3-Ply Shippers',
    ribbon: 'Stock clearance',
    price: '₹ 14 / pc',
    was: '₹ 19 / pc',
    moq: '500 pcs',
    window: 'While stock lasts · 12,400 units available',
    spec: '3-Ply B flute · 10 kgf/cm² BST · 305×254×203 mm',
    tone: 'amber',
    cta: 'Grab stock',
  },
  {
    id: 'eco-launch',
    title: 'Eco Kraft Line Launch',
    ribbon: '12% off first order',
    price: 'From ₹ 18 / pc',
    was: null,
    moq: '2,000 pcs',
    window: 'For first 25 B2B accounts',
    spec: 'FSC recycled 250 GSM · soy ink · water-based adhesive',
    tone: 'forest',
    cta: 'Claim launch rate',
  },
  {
    id: 'annual-contract',
    title: 'Annual Rate Contract',
    ribbon: 'Lock-in pricing',
    price: 'Custom',
    was: null,
    moq: '1 lakh pcs / year',
    window: 'Rolling 12-month contract',
    spec: 'Any SKU · priority production · rate protection',
    tone: 'slate',
    cta: 'Request ARC',
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    kpi: '100%',
    label: 'Recyclable output',
    body: 'Every carton leaving our floor is curbside recyclable — no plastic films, wax-polymer blends or PFAS coatings.',
  },
  {
    kpi: '82%',
    label: 'Recycled fibre use',
    body: 'Post-consumer recycled pulp makes up the majority of our liners, verified via FSC chain-of-custody audits.',
  },
  {
    kpi: '-34%',
    label: 'Grid energy vs. 2019',
    body: '1.4 MW rooftop solar and a heat-recovery corrugator cut our grid energy use by more than a third.',
  },
  {
    kpi: 'Zero',
    label: 'Liquid discharge',
    body: 'Closed-loop water system with on-site ETP — zero liquid discharge certified since 2023.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Vikas redesigned our export master cartons and cut our damage rate from 1.8% to 0.3% in one quarter. The structural engineering is on another level.',
    author: 'A. Deshpande',
    role: 'Head of Supply Chain, Auto Tier-1',
  },
  {
    quote:
      'The print consistency across our 180k-unit retail drop was extraordinary. Not a single batch rejection in colour QA.',
    author: 'P. Iyer',
    role: 'Packaging Director, D2C Beauty Brand',
  },
  {
    quote:
      'Their eco kraft line let us move our entire shipper range to FSC-certified material without a price shock. Rare combination.',
    author: 'S. Mehrotra',
    role: 'COO, E-commerce Logistics',
  },
];

export const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Deals', href: '/deals' },
  { label: 'Contact', href: '/contact' },
];
