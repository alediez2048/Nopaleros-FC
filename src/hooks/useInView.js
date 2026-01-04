import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for detecting when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsInView(true)
                    setHasAnimated(true)
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
                ...options,
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [hasAnimated, options.threshold, options.rootMargin])

    return [ref, isInView]
}

/**
 * Custom hook for staggered children animations
 * @param {number} count - Number of children
 * @param {number} delay - Delay between each child (ms)
 * @returns {Object} - Parent ref and animation state
 */
export const useStaggeredInView = (count, delay = 100) => {
    const [ref, isInView] = useInView({ threshold: 0.1 })
    const [visibleItems, setVisibleItems] = useState([])

    useEffect(() => {
        if (isInView) {
            const timers = []
            for (let i = 0; i < count; i++) {
                timers.push(
                    setTimeout(() => {
                        setVisibleItems((prev) => [...prev, i])
                    }, i * delay)
                )
            }
            return () => timers.forEach(clearTimeout)
        }
    }, [isInView, count, delay])

    return { ref, isInView, visibleItems }
}

export default useInView
