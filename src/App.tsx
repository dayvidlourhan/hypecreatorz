import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Obrigado from './components/Obrigado'
import HypeQualifier from './components/HypeQualifier'
import HypeManifestoPage from './components/HypeManifestoPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main id="hypecreators-root" className="min-h-screen bg-black overflow-x-hidden">
        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={<Home onOpenModal={openModal} />} />

          {/* Manifesto Page Route */}
          <Route path="/manifesto" element={<HypeManifestoPage onOpenModal={openModal} />} />

          {/* Thank You Page Route */}
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>

        {/* Global Components */}
        <HypeQualifier isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </BrowserRouter>
  )
}

export default App

