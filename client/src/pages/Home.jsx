import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import SkillBar from '../components/SkillBar'

const Home = () => {
  const skills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'AWS', percentage: 65 },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ]

  return (
    <div>
      {/* Hero Section */}
                    <section className="section-padding bg-gradient-to-br from-primary-50 to-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-primary-600">Nick</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Full-stack developer passionate about creating innovative web solutions 
                and turning ideas into reality through clean, efficient code.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/projects"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>View My Work</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="/NickResume_NEW.pdf"
                  download
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gray-400 rounded-full flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/300x300?text=Profile+Photo"
                    alt="Nick"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love solving complex problems and creating user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solver</h3>
              <p className="text-gray-600">
                I approach challenges with creativity and analytical thinking to find the best solutions.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Learner</h3>
              <p className="text-gray-600">
                I quickly adapt to new technologies and frameworks to stay current with industry trends.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Player</h3>
              <p className="text-gray-600">
                I collaborate effectively with cross-functional teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I work with a variety of technologies to create robust and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technologies I Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React', 'Node.js', 'Python', 'MongoDB',
                  'PostgreSQL', 'AWS', 'Docker', 'Git',
                  'TypeScript', 'Express.js', 'Django', 'Redis'
                ].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
