import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import IndustriesPage from './pages/IndustriesPage'
import GlobalScale from './pages/GlobalScale'
import Insights from './pages/Insights'
import Career from './pages/Career'
import useReveal from './hooks/useReveal.js'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  useReveal()

  return (
    <div className="bg-surface font-body-md text-on-surface">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/global-scale" element={<GlobalScale />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
