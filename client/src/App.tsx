import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Manufacturing from './pages/Manufacturing'
import TheFactory from './pages/TheFactory'
import PartnerWithUs from './pages/PartnerWithUs'
import AdminPanel from './pages/admin/AdminPanel'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/factory" element={<TheFactory />} />
        <Route path="/partner" element={<PartnerWithUs />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* Redirects from old routes */}
        <Route path="/products" element={<Navigate to="/collections" replace />} />
        <Route path="/services" element={<Navigate to="/manufacturing" replace />} />
        <Route path="/about" element={<Navigate to="/factory" replace />} />
        <Route path="/gallery" element={<Navigate to="/factory" replace />} />
        <Route path="/contact" element={<Navigate to="/partner" replace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
