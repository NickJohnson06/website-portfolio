import { useState, useEffect } from 'react'
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

  // Sample projects data - replace with API call
  const sampleProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      image: 'https://via.placeholder.com/400x250?text=E-Commerce+Platform',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250?text=Task+Management+App',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/task-app',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts using multiple weather APIs with interactive charts and maps.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Leaflet'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250?text=Weather+Dashboard',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/weather-app',
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'A mobile fitness tracking application with workout planning, progress tracking, and social features for sharing achievements.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      image: 'https://via.placeholder.com/400x250?text=Fitness+Tracking+App',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/fitness-app',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimal performance.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250?text=Portfolio+Website',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/portfolio',
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'An interactive data visualization tool that allows users to upload CSV files and create custom charts and graphs.',
      technologies: ['Python', 'Django', 'D3.js', 'Pandas'],
      category: 'other',
      image: 'https://via.placeholder.com/400x250?text=Data+Viz+Tool',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/data-viz',
    },
  ]

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch('/api/projects')
        // const data = await response.json()
        
        // For now, use sample data
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

  if (loading) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my journey as a developer.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
