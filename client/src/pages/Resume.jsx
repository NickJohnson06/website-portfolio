import { Download } from 'lucide-react'

const Resume = () => {
  const experience = [
    {
      title: 'Retail Associate',
      company: 'Ace Hardware',
      period: 'AUG 2023 - Present',
      description: [
        'Led development of multiple web applications using React, Node.js, and MongoDB',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and improved deployment processes',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
    },
    {
      title: 'Retail Assocaite',
      company: 'Staples',
      period: 'NOV 2022 - MAR 2023',
      description: [
        'Developed and maintained e-commerce platforms',
        'Integrated third-party APIs and payment gateways',
        'Optimized application performance and user experience',
        'Worked with agile methodologies and version control systems',
      ],
    },
    {
      title: 'Line Cook',
      company: "Marlow's Tavern",
      period: 'JULY 2022 - SEPT 2022',
      description: [
        'Built responsive user interfaces using React and modern CSS',
        'Collaborated with designers to implement pixel-perfect designs',
        'Participated in code reviews and team meetings',
        'Contributed to open-source projects and documentation',
      ],
    },
    {
      title: 'Prep Manager',
      company: "Del Sur Taqueria & Cantina",
      period: 'MAY 2020 - JUNE 2022',
      description: [
        'Built responsive user interfaces using React and modern CSS',
        'Collaborated with designers to implement pixel-perfect designs',
        'Participated in code reviews and team meetings',
        'Contributed to open-source projects and documentation',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Georgia State University',
      period: '2022 - 2025',
      description: 'Graduated with honors. Focused on software engineering and web development.',
    },
    {
      degree: 'Full-Stack Development Bootcamp',
      school: 'Georgia Institute of Technology',
      period: '2020',
      description: 'Intensive 6-month program covering full-stack development technologies.',
    },
  ]

  const skills = {
    'Frontend': ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    'Backend': ['Python', 'Java', 'Node.js', 'Express.js', 'REST APIs'],
    'Database': ['MongoDB', 'MySQL', 'DBeaver'],
    'DevOps': ['Git', 'AWS', 'CI/CD', 'Linux'],
    'Tools': ['VS Code', "VMware", "R"],
  }

  const certifications = [
    {
      name: 'AWS Certified Developer (Associate)',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'AWS Certified Solutions Architect (Associate)',
      issuer: 'Amazon Web Services',
      year: '2025',
    },
    {
      name: 'AWS Certified Cloud Practitioner (Associate)',
      issuer: 'Amazon Web Services',
      year: '2025',
    },
  ]

  return (
    <div className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            My professional journey, skills, and achievements
          </p>
          <a
            href="/Nick_Johnson_Resume_copy.pdf"
            download
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{job.title}</h3>
                    <p className="text-primary-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-400 font-medium mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {job.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-100">{edu.degree}</h3>
                  <span className="text-gray-400 font-medium">{edu.period}</span>
                </div>
                <p className="text-primary-400 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="card">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full border border-primary-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{cert.name}</h3>
                <p className="text-primary-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
