import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import Obrigado from './components/Obrigado'
import HypeQualifier from './components/HypeQualifier'
import HypeManifestoPage from './components/HypeManifestoPage'

// Memory to store scroll positions for different routes
const scrollMemory: Record<string, number> = {};

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration to prevent jumps
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // List of routes that should ALWAYS start from top
    const alwaysResetRoutes = ['/manifesto'];
    const shouldReset = alwaysResetRoutes.includes(pathname);

    // Restore saved position or go to top for new pages
    const savedPosition = shouldReset ? 0 : (scrollMemory[pathname] || 0);

    // Use a small timeout to ensure DOM is ready (especially with lazy loading)
    const timer = setTimeout(() => {
      window.scrollTo({
        top: savedPosition,
        behavior: 'instant'
      });
    }, 10);

    // Cleanup: save the current scroll position before the path changes
    return () => {
      scrollMemory[pathname] = window.scrollY;
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollManager />
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

