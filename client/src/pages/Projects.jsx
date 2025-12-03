import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'other', name: 'Other' },
  ]

  // Sample projects data
  const sampleProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      image: 'https://via.placeholder.com/400x250?text=E-Commerce+Platform',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250?text=Task+Management+App',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/task-app',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard with current conditions and forecasts.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Leaflet'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250?text=Weather+Dashboard',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/weather-app',
    },
  ]

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjects(sampleProjects)
        setFilteredProjects(sampleProjects)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory, projects])

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-dark-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing various technologies and skills
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-dark-900 shadow-lg shadow-primary-500/30'
                  : 'bg-dark-800/50 text-gray-300 hover:bg-dark-700/70 border border-gray-700 hover:border-primary-500/50'
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
