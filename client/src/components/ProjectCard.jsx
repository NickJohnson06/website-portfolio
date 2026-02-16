import { Github, PlayCircle, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project, onOpenDemo }) => {
  const { id, title, description, technologies, githubUrl, demoUrl } = project

  return (
    <div className="card group h-full flex flex-col">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-lg mb-4 flex-shrink-0 h-48 bg-dark-900 dark:bg-dark-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border-4 border-primary-500 cursor-pointer block"
      >
        <div className="bg-white rounded-full p-4 shadow-lg">
          <Github size={40} className="text-primary-600 dark:text-primary-600" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </a>

      <div className="flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-sm rounded-full border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {demoUrl ? (
            <button
              onClick={() => onOpenDemo(project)}
              className="btn-primary flex items-center justify-center space-x-2 flex-1"
            >
              <PlayCircle size={16} />
              <span>Watch Demo</span>
            </button>
          ) : (
            <button
              disabled
              className="btn-primary flex items-center justify-center space-x-2 flex-1 opacity-50 cursor-not-allowed"
            >
              <PlayCircle size={16} />
              <span>Watch Demo</span>
            </button>
          )}

          <Link
            to={`/project-details#project-${id}`}
            className="btn-secondary flex items-center justify-center space-x-2 flex-1"
          >
            <Info size={16} />
            <span>Details</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default ProjectCard
