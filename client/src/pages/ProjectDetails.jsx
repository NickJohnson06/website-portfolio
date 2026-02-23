import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { projects } from '../data/projects'
import { Github, PlayCircle } from 'lucide-react'
import VideoModal from '../components/VideoModal'

const ProjectDetails = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedVideo, setSelectedVideo] = useState(null)

    const handleOpenDemo = (project) => {
        setSelectedVideo({
            url: project.demoUrl,
            title: project.title
        })
    }

    const handleCloseDemo = () => {
        setSelectedVideo(null)
    }

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'mobile', name: 'Mobile App' },
        { id: 'cloud', name: 'Cloud' },
    ]

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory))
        }
    }, [selectedCategory])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <Helmet>
                <title>Project Details</title>
            </Helmet>
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                    Project Details
                </h1>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white dark:text-dark-900 shadow-lg shadow-primary-500/30'
                                : 'bg-white/50 dark:bg-dark-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-dark-700/70 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="space-y-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            id={`project-${project.id}`}
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/80 dark:bg-dark-800/50 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h2>
                                <span className="text-gray-500 dark:text-gray-400 italic">
                                    {project.date}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-sm rounded-full border border-primary-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.header && (
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-medium leading-relaxed">
                                    {project.header}
                                </p>
                            )}

                            <ul className="space-y-3 mb-6">
                                {project.details.map((detail, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                                        <span className="text-primary-500 mr-2 mt-1.5 text-xs">●</span>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {project.contributors && (
                                <div className="mb-6 pt-4 border-t border-gray-100 dark:border-gray-800/30">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold text-gray-700 dark:text-gray-300">Contributors:</span> {project.contributors.join(', ')}
                                    </p>
                                </div>
                            )}

                            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        <Github size={20} className="mr-2" />
                                        View Code
                                    </a>
                                )}

                                {project.demoUrl ? (
                                    <button
                                        onClick={() => handleOpenDemo(project)}
                                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        <PlayCircle size={20} className="mr-2" />
                                        Watch Demo
                                    </button>
                                ) : (
                                    <button
                                        disabled
                                        className="flex items-center text-gray-400 dark:text-gray-600 cursor-not-allowed"
                                    >
                                        <PlayCircle size={20} className="mr-2" />
                                        Watch Demo
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </motion.div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={handleCloseDemo}
                videoUrl={selectedVideo?.url}
                title={selectedVideo?.title}
            />
        </div>
    )
}

export default ProjectDetails
