import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
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

  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NickJohnson06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nick-johnson9006/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/nick_johnson06', label: 'Twitter' },
  ]

  return (
    <div className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Connect With Me
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and sharing ideas.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-100 mb-8">Contact Information</h2>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                    <info.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">
                      {info.title}
                    </h3>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800/50 rounded-lg flex items-center justify-center hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 hover:text-primary-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
        {/* Favorite Quote Section */}
        <section className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="border-l-4 border-primary-500 italic pl-6 text-xl md:text-2xl text-gray-300 animate-fade-in">
              "When the power of love overcomes the love of power, the world will know peace."
            </blockquote>
            <cite className="block mt-4 text-lg text-gray-500">— Jimi Hendrix</cite>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
