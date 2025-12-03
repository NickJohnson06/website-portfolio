import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import TechStack from '../components/TechStack'

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/NickJohnson06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nick-johnson9006/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:johnsonnick9006@gmail.com', label: 'Mail' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 animate-fade-in">
            Hi, I'm <span className="text-primary-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">Nick</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating innovative web solutions
            and turning ideas into reality through clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/projects"
              className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-3 glow-on-hover"
            >
              <span>View My Work</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="/Nick_Johnson_Resume_copy.pdf"
              download
              className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-3"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]"
                aria-label={social.label}
              >
                <social.icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love solving complex problems and creating user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Problem Solver</h3>
              <p className="text-gray-400">
                I approach challenges with creativity and analytical thinking to find the best solutions.
              </p>
            </div>

            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Fast Learner</h3>
              <p className="text-gray-400">
                I quickly adapt to new technologies and frameworks to stay current with industry trends.
              </p>
            </div>

            <div className="card text-center group">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Team Player</h3>
              <p className="text-gray-400">
                I collaborate effectively with cross-functional teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <TechStack />
    </div>
  )
}

export default Home
