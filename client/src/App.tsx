import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import AdminPanel from './pages/admin/AdminPanel'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

