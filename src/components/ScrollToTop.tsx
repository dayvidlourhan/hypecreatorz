import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Global memory to store scroll positions across routes
const scrollMemory: Record<string, number> = {};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    // 1. INSTANT SCROLL CONTROL (BEFORE PAINT)
    useLayoutEffect(() => {
        // Force browser to let us handle scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        /**
         * NEOBRUTALIST SCROLL LOGIC:
         * - Manifesto: ALWAYS starts at 0 (New entry feeling).
         * - Home Page: RESTORES exactly where you were (Don't lose context).
         */
        const isManifesto = pathname === '/manifesto';
        const savedPosition = isManifesto ? 0 : (scrollMemory[pathname] || 0);

        // Instant Cut (No smooth animation to avoid "buggy" feel)
        window.scrollTo({ top: savedPosition, left: 0, behavior: 'instant' });

        // Handle Height Shifts (Lazy Loading protection for Home)
        if (pathname === '/' && savedPosition > 0) {
            const timer = setTimeout(() => {
                window.scrollTo({ top: savedPosition, left: 0, behavior: 'instant' });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    // 2. REAL-TIME POSITION TRACKING (HOME ONLY)
    useEffect(() => {
        const handleScroll = () => {
            if (window.location.pathname === '/') {
                scrollMemory['/'] = window.scrollY;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
