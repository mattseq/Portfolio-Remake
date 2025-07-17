import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      link: "matthewsequeir@gmail.com",
      href: "mailto:matthewsequeir@gmail.com",
      note: "Best for project inquiries and collaborations"
    },
    {
      icon: "🐙",
      title: "GitHub",
      link: "github.com/mattseq",
      href: "https://github.com/mattseq",
      note: "Check out my open source projects"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      link: "linkedin.com/in/matthewsequeira",
      href: "#",
      note: "Professional networking and opportunities"
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </motion.p>
          
          <motion.div
            className="contact-methods"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="contact-method"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.2 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="contact-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {method.icon}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.2 + 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  {method.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.2 + 0.2 
                  }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={method.href}
                    target={method.href.startsWith('http') ? "_blank" : undefined}
                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {method.link}
                  </motion.a>
                </motion.p>
                
                <motion.span
                  className="contact-note"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.2 + 0.3 
                  }}
                  viewport={{ once: true }}
                >
                  {method.note}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              Ready to work together?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Let's discuss your project and see how we can bring your ideas to life!
            </motion.p>
            
            <motion.a
              href="mailto:matthewsequeir@gmail.com"
              className="contact-btn"
              whileHover={{ 
                scale: 1.05,
                y: -4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 