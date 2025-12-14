import { ExternalLink, Github, PlayCircle } from 'lucide-react'

const ProjectCard = ({ project, onOpenDemo }) => {
  const { title, description, technologies, image, liveUrl, githubUrl, demoUrl } = project

  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden rounded-lg mb-4 flex-shrink-0">
        <img
          src={image || 'https://via.placeholder.com/400x250?text=Project+Image'}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

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
          ) : liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 flex-1"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 flex-1"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
