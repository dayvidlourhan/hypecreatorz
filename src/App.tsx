import { lazy, Suspense } from 'react'
import Hero from './components/Hero'

// Lazy loaded sections for optimized performance (Core Web Vitals)
const RealityCheck = lazy(() => import('./components/RealityCheck'))
const HypeSolution = lazy(() => import('./components/HypeSolution'))
const HypeShowcase = lazy(() => import('./components/HypeShowcase'))
const HypeCalculator = lazy(() => import('./components/HypeCalculator'))
const HypeRoadmap = lazy(() => import('./components/HypeRoadmap'))
const HypeFAQ = lazy(() => import('./components/HypeFAQ'))
const HypeFooter = lazy(() => import('./components/HypeFooter'))

/**
 * Minimalist Acid Green Loading Spinner
 * Adheres to HYPECREATZ premium industrial aesthetic
 */
const LoadingSpinner = () => (
  <div className="flex h-32 w-full items-center justify-center bg-black">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#CCFF00] border-t-transparent" />
  </div>
)

function App() {
  return (
    <main id="hypecreators-root" className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero must load instantly for LCP optimization */}
      <Hero />

      {/* Everything below the fold is lazy loaded to minimize initial JS execution */}
      <Suspense fallback={<LoadingSpinner />}>
        <RealityCheck />
        <HypeSolution />
        <HypeShowcase />
        <HypeCalculator />
        <HypeRoadmap />
        <HypeFAQ />
        <HypeFooter />
      </Suspense>
    </main>
  )
}

export default App
