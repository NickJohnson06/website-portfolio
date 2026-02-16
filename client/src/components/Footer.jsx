import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NickJohnson06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nick-johnson9006/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:johnsonnick9006@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Nick Johnson</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-Stack Developer with a drive to learn and grow through connections and experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Nick Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
