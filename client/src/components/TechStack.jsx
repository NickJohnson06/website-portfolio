import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const technologies = [
        { name: 'Java', icon: '☕', color: '#007396' },
        { name: 'Python', icon: '🐍', color: '#3776AB' },
        { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
        { name: 'SQL', icon: '🗄️', color: '#4479A1' },
        { name: 'Flutter/Dart', icon: '🎯', color: '#02569B' },
        { name: 'Node.js', icon: '🟢', color: '#339933' },
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'Express', icon: '🚂', color: '#000000' },
        { name: 'Git', icon: '📦', color: '#F05032' },
        { name: 'REST APIs', icon: '🔌', color: '#009688' },
        { name: 'Linux', icon: '🐧', color: '#FCC624' },
    ]

    return (
        <div className="relative py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    Technologies I Use
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Building modern applications with cutting-edge tools
                </p>
            </div>

            {/* Desktop: Floating/Orbiting Icons */}
            <div className="hidden md:block relative h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                    {technologies.map((tech, index) => {
                        const angle = (index / technologies.length) * 2 * Math.PI
                        const radius = 180
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius

                        return (
                            <motion.div
                                key={tech.name}
                                className="absolute"
                                initial={{ x: 0, y: 0 }}
                                animate={{
                                    x: x,
                                    y: y,
                                    rotate: hoveredIndex === index ? 360 : 0,
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                    rotate: { duration: 0.5 }
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className={`w-20 h-20 rounded-xl bg-dark-800/60 backdrop-blur-sm border border-gray-700 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${hoveredIndex === index
                                        ? 'border-primary-500 shadow-lg shadow-primary-500/50 scale-110'
                                        : 'hover:border-primary-500/50'
                                        }`}
                                >
                                    <span className="text-3xl mb-1">{tech.icon}</span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {tech.name}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}

                    {/* Center circle */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-400">Tech</span>
                    </div>
                </div>
            </div>

            {/* Mobile: Grid View */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:hidden max-w-2xl mx-auto px-4">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="card text-center p-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-3xl mb-2 block">{tech.icon}</span>
                        <span className="text-xs text-gray-400 font-medium">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TechStack
