import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import HomePage from "./pages/HomePage"
import PaintRepairPage from "./pages/PaintRepairPage"
import TransfersPage from "./pages/TransfersPage"
import PortfolioPage from "./pages/PortfolioPage"
import WorkshopPage from "./pages/WorkshopPage"
import BookPage from "./pages/BookPage"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paint-repair" element={<PaintRepairPage />} />
          <Route path="/transfers" element={<TransfersPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
