import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
            <Helmet>
                <title>404 - Page Not Found</title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-center mb-6">
                    <AlertTriangle className="w-24 h-24 text-primary-500" />
                </div>

                <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>

                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 btn-primary"
                >
                    <Home size={20} />
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    )
}

export default NotFound
