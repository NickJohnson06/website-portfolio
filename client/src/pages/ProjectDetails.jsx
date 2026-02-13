import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { Github, ExternalLink } from 'lucide-react'

const ProjectDetails = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
                    Project Details
                </h1>

                <div className="space-y-8">
                    {projects.map((project, index) => (
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

                            <ul className="space-y-3 mb-6">
                                {project.details.map((detail, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                                        <span className="text-primary-500 mr-2 mt-1.5 text-xs">●</span>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>

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
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        <ExternalLink size={20} className="mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectDetails
