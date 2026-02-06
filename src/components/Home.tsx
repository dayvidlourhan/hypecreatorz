import { lazy, Suspense } from 'react'
import Hero from './Hero'

// Lazy loaded sections for optimized performance
const RealityCheck = lazy(() => import('./RealityCheck'))
const HypeSolution = lazy(() => import('./HypeSolution'))
const HypeShowcase = lazy(() => import('./HypeShowcase'))
const HypeCalculator = lazy(() => import('./HypeCalculator'))
const HypeRoadmap = lazy(() => import('./HypeRoadmap'))
const HypeFAQ = lazy(() => import('./HypeFAQ'))
const HypeFooter = lazy(() => import('./HypeFooter'))

const LoadingSpinner = () => (
    <div className="flex h-32 w-full items-center justify-center bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#CCFF00] border-t-transparent" />
    </div>
)

interface HomeProps {
    onOpenModal: () => void;
}

export default function Home({ onOpenModal }: HomeProps) {
    return (
        <>
            <Hero onOpenModal={onOpenModal} />
            <Suspense fallback={<LoadingSpinner />}>
                <RealityCheck onOpenModal={onOpenModal} />
                <HypeSolution />
                <HypeShowcase />
                <HypeCalculator onOpenModal={onOpenModal} />
                <HypeRoadmap />
                <HypeFAQ onOpenModal={onOpenModal} />
                <HypeFooter onOpenModal={onOpenModal} />
            </Suspense>
        </>
    )
}
