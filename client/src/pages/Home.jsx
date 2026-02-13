import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import TechStack from '../components/TechStack'
import resumePdf from '../assets/Nick_Johnson_-_.pdf'

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/NickJohnson06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nick-johnson9006/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:johnsonnick9006@gmail.com', label: 'Mail' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gradient-to-br dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-8 animate-fade-in">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">Nick</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer who's passionate about creating innovative web solutions
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
              href={resumePdf}
              download="Nick_Johnson_-_.pdf"
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
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]"
                aria-label={social.label}
              >
                <social.icon size={32} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Me
            </h2>
            <div className="space-y-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <p>
                Computer Science graduate (Dec 2025) with hands-on experience in software development, IT support, networking fundamentals, and cloud-based projects. Skilled in TCP/IP, LAN/WAN, Windows environments, troubleshooting, and system administration basics. Experience building full-stack and cloud applications using AWS, REST APIs, Git/GitHub, Node.js, React, and SQL databases.
              </p>
              <p>
                Experienced in PC repair, hardware diagnostics, and technical support from lab-based projects and coursework, with strong problem-solving, documentation, and customer service skills. Comfortable supporting end users, debugging applications, and working across infrastructure and application layers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <TechStack />
    </div>
  )
}

export default Home
