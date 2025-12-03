import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-white/60 dark:bg-dark-800/60 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            aria-label="Toggle theme"
        >
            <motion.div
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg flex items-center justify-center"
                animate={{
                    x: theme === 'dark' ? 0 : 32
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
                {theme === 'dark' ? (
                    <Moon size={14} className="text-dark-900" />
                ) : (
                    <Sun size={14} className="text-dark-900" />
                )}
            </motion.div>
        </button>
    )
}

export default ThemeToggle
