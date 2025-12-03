import { useState, useEffect } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [trail, setTrail] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only show on non-touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouchDevice) return

        setIsVisible(true)

        const updatePosition = (e) => {
            const newPos = { x: e.clientX, y: e.clientY, id: Date.now() }
            setPosition(newPos)

            // Add to trail and keep only last 8 positions
            setTrail(prev => [...prev, newPos].slice(-8))
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener('mousemove', updatePosition)
        document.addEventListener('mouseenter', handleMouseEnter)
        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            window.removeEventListener('mousemove', updatePosition)
            document.removeEventListener('mouseenter', handleMouseEnter)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            {/* Trail dots */}
            {trail.map((pos, index) => (
                <div
                    key={pos.id}
                    className="absolute w-2 h-2 rounded-full bg-primary-400 transition-opacity duration-300"
                    style={{
                        left: pos.x - 4,
                        top: pos.y - 4,
                        opacity: (index + 1) / trail.length * 0.5,
                        transform: `scale(${(index + 1) / trail.length})`,
                    }}
                />
            ))}

            {/* Main cursor */}
            <div
                className="absolute w-3 h-3 rounded-full bg-primary-400 shadow-[0_0_15px_rgba(234,179,8,0.8)]"
                style={{
                    left: position.x - 6,
                    top: position.y - 6,
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Outer ring */}
            <div
                className="absolute w-8 h-8 rounded-full border-2 border-primary-400/50"
                style={{
                    left: position.x - 16,
                    top: position.y - 16,
                    transition: 'all 0.15s ease-out',
                }}
            />
        </div>
    )
}

export default CustomCursor
