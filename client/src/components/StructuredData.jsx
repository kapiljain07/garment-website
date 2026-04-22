import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://vikasboxfactory.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Manufacturer',
  name: 'Vikas Box Factory',
  alternateName: 'Vikas',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    'Premium manufacturer of industrial cartons, corrugated packaging boxes, and raw packaging materials. B2B supplier with 15+ years of manufacturing experience.',
  email: 'sales@vikasboxfactory.com',
  telephone: '+91-80-4000-0000',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Karnataka',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  makesOffer: [
    'Heavy-Duty Shipping Cartons',
    'Custom Retail Packaging',
    'Corrugated Rolls and Sheets',
    'Eco-Friendly Kraft Boxes',
    'Master and Export Cartons',
    'Industrial Pallet Boxes',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vikas Box Factory',
  url: SITE_URL,
  description:
    'Durability meets precision. Industrial cartons, corrugated boxes, and raw packaging materials engineered for B2B performance.',
  publisher: {
    '@type': 'Organization',
    name: 'Vikas Box Factory',
  },
};

const breadcrumbMap = {
  '/': [{ name: 'Home', url: '/' }],
  '/products': [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ],
  '/manufacturing': [
    { name: 'Home', url: '/' },
    { name: 'Manufacturing', url: '/manufacturing' },
  ],
  '/sustainability': [
    { name: 'Home', url: '/' },
    { name: 'Sustainability', url: '/sustainability' },
  ],
  '/deals': [
    { name: 'Home', url: '/' },
    { name: 'Company Deals', url: '/deals' },
  ],
  '/quote': [
    { name: 'Home', url: '/' },
    { name: 'Request a Quote', url: '/quote' },
  ],
  '/contact': [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ],
};

function buildBreadcrumbSchema(pathname) {
  const items = breadcrumbMap[pathname];
  if (!items) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export default function StructuredData() {
  const { pathname } = useLocation();
  const breadcrumb = buildBreadcrumbSchema(pathname);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumb && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      )}
    </Helmet>
  );
}
