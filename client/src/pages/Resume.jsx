import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: 'AUG 2023 - Present',
    description: [
      'Led development of multiple web applications using React, Node.js, and MongoDB',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines and improved deployment processes',
      'Collaborated with cross-functional teams to deliver high-quality products',
    ],
  },
  {
    title: 'Retail Associate',
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
]

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-4">John Doe</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">Full-Stack Developer</p>
          <p className="text-md text-gray-600 dark:text-gray-400">john.doe@example.com | (123) 456-7890 | LinkedIn | GitHub</p>
          <a
            href="/path/to/your/resume.pdf"
            download="John_Doe_Resume.pdf"
            className="mt-6 inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 w-fit mx-auto"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </a>
        </motion.header>

        {/* Experience Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{job.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-4 w-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-500/20 text-primary-600 dark:text-primary-400 text-sm rounded-full border border-primary-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{cert.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
