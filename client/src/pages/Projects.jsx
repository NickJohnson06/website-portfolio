import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import VideoModal from '../components/VideoModal'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'aws', name: 'AWS' },
  ]

  // Sample projects data
  const sampleProjects = [
    {
      id: 1,
      title: 'CloudSentry',
      description: 'An AWS serverless application that tracks expenses and provides insights into your AWS usage.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'aws',
      image: 'https://via.placeholder.com/400x250?text=CloudSentry',
      liveUrl: 'https://cloudsentry-nickjohnson06.vercel.app/',
      githubUrl: 'https://github.com/NickJohnson06/cloudsentry',
      demoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder video
    },
    {
      id: 2,
      title: 'Social Fitness App',
      description: 'A social fitness app to connect with friends and share your fitness journey.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      image: 'https://via.placeholder.com/400x250?text=Social+Fitness+App',
      liveUrl: 'https://social-fitness-nickjohnson06.vercel.app/',
      githubUrl: 'https://github.com/rishitaido/MAD_Project2',
    },
    {
      id: 3,
      title: 'RoamLog',
      description: 'A travel journal web app that lets you create and manage your travel plans with AI-powered itinerary recommendations.',
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Meta AI'],
      category: 'fullstack',
      image: 'images/RoamLog-Thumbnail.png',
      liveUrl: 'https://travel-journal-nickjohnson06.vercel.app/',
      demoUrl: 'https://www.youtube.com/watch?v=Tq8FWYFWnmI',
      githubUrl: 'https://github.com/NickJohnson06/travel-journal',
    },
    {
      id: 4,
      title: 'Pokedex App',
      description: 'A personal pokedex app that lets you catch and manage your favorite pokemon.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      image: 'https://via.placeholder.com/400x250?text=Pokedex+App',
      liveUrl: 'https://pokedex-nickjohnson06.vercel.app/',
      githubUrl: 'https://github.com/NickJohnson06/pokedex',
    },
    {
      id: 5,
      title: 'Vehicle Maintenance Tracker App',
      description: 'A maintenance tracker app to help keep your vehicle maintenance records in one place and up to date.',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      category: 'mobile',
      image: 'https://via.placeholder.com/400x250?text=Vehicle+Maintenance+Tracker+App',
      liveUrl: 'https://vehicle-maintenance-tracker-nickjohnson06.vercel.app/',
      githubUrl: 'https://github.com/rishitaido/VehicleTrackerMAD',
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

  const handleOpenDemo = (project) => {
    setSelectedVideo({
      url: project.demoUrl,
      title: project.title
    })
  }

  const handleCloseDemo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white dark:text-dark-900 shadow-lg shadow-primary-500/30'
                : 'bg-white/50 dark:bg-dark-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-dark-700/70 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50'
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
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="h-full"
              >
                <ProjectCard project={project} onOpenDemo={handleOpenDemo} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleCloseDemo}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
      />
    </div>
  )
}

export default Projects
