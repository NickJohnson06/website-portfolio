import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NickJohnson06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nick-johnson9006/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:johnsonnick9006@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-900/90 backdrop-blur-lg text-gray-100 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Nick Johnson</h3>
            <p className="text-gray-400 mb-4">
              Aspiring developer with a passion for cloud engineering and architecure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Projects
                </a>
              </li>
              <li>
                <a href="/resume" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Resume
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Nick Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
