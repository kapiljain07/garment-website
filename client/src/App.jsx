import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import StructuredData from './components/StructuredData';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Manufacturing = lazy(() => import('./pages/Manufacturing'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Deals = lazy(() => import('./pages/Deals'));
const Quote = lazy(() => import('./pages/Quote'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <StructuredData />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0E1115',
              color: '#F5EFE4',
              border: '1px solid rgba(176,137,104,0.35)',
              borderRadius: 0,
              fontSize: '13px',
            },
            success: { iconTheme: { primary: '#2F5D3B', secondary: '#F5EFE4' } },
            error: { iconTheme: { primary: '#B45309', secondary: '#F5EFE4' } },
          }}
        />
        <div className="min-h-screen bg-bone text-ink">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
          </Suspense>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
