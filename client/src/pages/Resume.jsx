import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import resumePdf from '../assets/Nick_Johnson_-_.pdf'

const experience = [
  {
    title: 'Sales Associate',
    company: 'Ace Hardware',
    period: 'AUG 2023 - Present',
    description: [
      'Assisted customers with product selection, hardware questions, troubleshooting, and DIY guidance.',
      'Maintained accurate inventory records and operated POS/inventory systems to support daily operations.',
      'Strengthened problem-solving skills through identifying issues and helping customers find practical solutions.',
    ],
  },
  {
    title: 'Sales Associate',
    company: 'Staples',
    period: 'NOV 2022 - MAR 2023',
    description: [
      'Helped customers navigate services, promotions, and product options while maintaining a positive user experience.',
      'Organized store layouts following detailed planograms and ensured product availability through proper stock handling.',
      'Enhanced communication and customer support abilities while resolving in-store issues.',
    ],
  },
  {
    title: 'Prep Manager',
    company: "Del Sur Taqueria & Cantina",
    period: 'MAY 2020 - JUNE 2022',
    description: [
      'Created prep schedules, organized workflows, and ensured consistency in quality and safety standards.',
      'Trained and onboarded new employees, improving team efficiency and maintaining clear documentation of procedures',
      'Managed inventory levels and verified accuracy during deliveries and stocking.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Georgia State University',
    period: '2022 - 2025',
    description: 'Computer science program focused on software engineering, data structures, systems programming, cloud computing, and mobile application development. Developed strong skills in object oriented programming, database design, algorithms, and full stack development through hands on projects and coursework.',
  },
  {
    degree: 'Full-Stack Development Bootcamp',
    school: 'Georgia Institute of Technology',
    period: '2020',
    description: 'Completed an intensive 6 month full-stack software development program covering modern web technologies, building responsive applications using JavaScript, React, Node.js, Express, and SQL/NoSQL databases with hands-on project experience across frontend, backend, and database layers.',
  },
]

const skills = {
  'Frontend': ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Flutter/Dart', 'Vite'],
  'Backend': ['Python', 'Java', 'Node.js', 'Express.js', 'REST APIs'],
  'Database': ['MongoDB', 'MySQL', 'DBeaver', 'PostgreSQL', 'DynamoDB'],
  'DevOps': ['Git', 'AWS', 'Terraform', 'Linux', 'Bash'],
  'IT': ['TCP/IP', 'LAN/WAN', 'Windows', 'Hardware Troubleshooting', 'System Administration', 'Linux'],
  'Tools': ['VS Code', 'Github', 'VMware', 'Android Studio', 'R'],
  'Soft Skills': ['Customer Service', 'Communication', 'Problem Solving', 'Analytical Thinking', 'Adaptability', 'Time Management'],
}

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner (In-Progress)',
    issuer: 'Amazon Web Services',
    year: '2026',
  },
  {
    name: 'Cisco Certified Network Associate (In-Progress)',
    issuer: 'Cisco',
    year: '2026',
  },
  {
    name: 'CompTIA Security+ (Upcoming)',
    issuer: 'CompTIA',
    year: '2026',
  },


]

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-8 transition-colors duration-300">
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-4">Nick Johnson</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">Full-Stack Developer</p>
          <p className="text-md text-gray-600 dark:text-gray-400">johnsonnick9006@gmail.com (404)-285-5444</p>
          <a
            href={resumePdf}
            download="Nick_Johnson_-_.pdf"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="bg-white/5 dark:bg-white/5 backdrop-blur-md border border-gray-200/20 dark:border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200/10 dark:border-white/10 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm rounded-full border border-primary-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
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
