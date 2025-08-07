import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, liveUrl, githubUrl } = project

  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image || 'https://via.placeholder.com/400x250?text=Project+Image'}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2"
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
            className="btn-secondary flex items-center space-x-2"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
