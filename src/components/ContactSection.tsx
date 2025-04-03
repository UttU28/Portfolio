import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Youtube, Send } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submitted status after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }, 1500);
  };

  const contactLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin/utsavmaan28',
      url: 'https://linkedin.com/in/utsavmaan28'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/UttU28',
      url: 'https://github.com/UttU28'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@uttu28',
      url: 'https://www.instagram.com/uttu28/'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: 'YouTube',
      value: 'ThatInsaneGuy',
      url: '#'
    }
  ];

  return (
    <motion.div
      id="contact"
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading
        title="Contact & Links"
        description="I'm always excited to discuss new opportunities, collaborations, or even just geek out over tech. 
        If you'd like to get in touch (or see more of my work), you can find me through any of the channels below. 
        Let's connect and maybe we can build something amazing together!"
      />
      
      <div className="max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-5 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 hover:bg-black/40 transition-all duration-300 hover:scale-105 transform-gpu will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
            >
              <div className="mr-5 p-3.5 rounded-full bg-white/10 transition-colors group-hover:bg-white/15">
                {React.cloneElement(link.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <div className="text-sm text-gray-400 font-handwriting mb-1">{link.label}</div>
                <div className="text-white font-medium text-lg font-heading tracking-wide group-hover:text-blue-300 transition-colors duration-200">
                  {link.value}
                  <div className="h-px w-0 bg-blue-400/50 transition-all duration-200 ease-out group-hover:w-full"></div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.p
          className="text-gray-400 text-center mt-16 mb-8 font-handwriting text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Looking forward to connecting with you – whether it's for a project, a freelance gig, 
          or just to swap debugging war stories!
        </motion.p>
        
        {/* Contact Form */}
        <motion.div
          className="mt-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-heading text-center text-white mb-6">Have an idea? Let's discuss!</h3>
          
          <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 md:p-8">
            {submitted ? (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-heading text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400 font-handwriting">Thanks for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-handwriting text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-heading text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-handwriting text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-heading text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-handwriting text-gray-400 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Share your ideas, thoughts, or just say hello!"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-heading text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-heading text-white transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-blue-600/50 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 