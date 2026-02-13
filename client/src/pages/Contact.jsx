import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'johnsonnick9006@gmail.com',
      href: 'mailto:johnsonnick9006@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (404) 285-5444',
      href: 'tel:+14042855444',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Roswell, GA',
      href: '#',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View Profile',
      href: 'https://github.com/NickJohnson06',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/nick-johnson9006/',
    },
    {
      icon: Twitter,
      title: 'Twitter',
      value: 'Follow heavily',
      href: 'https://x.com/nick_johnson06',
    },
  ]

  return (
    <div className="section-padding bg-gray-50 dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Connect With Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and sharing ideas.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              className="card text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="w-16 h-16 bg-primary-500/10 dark:bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30 group-hover:shadow-lg group-hover:shadow-primary-500/40 transition-all duration-300">
                <info.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>

        {/* Favorite Quote Section */}
        <motion.section
          className="pt-8 border-t border-gray-200 dark:border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="border-l-4 border-primary-500 italic pl-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              "When the power of love overcomes the love of power, the world will know peace."
            </blockquote>
            <cite className="block mt-4 text-lg text-gray-500">— Jimi Hendrix</cite>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Contact
