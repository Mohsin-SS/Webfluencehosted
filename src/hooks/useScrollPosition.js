import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for tracking scroll position with throttling.
 * @param {number} threshold - Y offset to trigger "scrolled" state
 * @param {number} throttleMs - Throttle interval in ms (default 100)
 * @returns {boolean} Whether the page has scrolled past the threshold
 */
const useScrollPosition = (threshold = 50, throttleMs = 100) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                setTimeout(() => {
                    handleScroll();
                    ticking = false;
                }, throttleMs);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll, throttleMs]);

    return scrolled;
};

export default useScrollPosition;
