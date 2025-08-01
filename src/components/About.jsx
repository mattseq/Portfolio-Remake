import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const stats = [
    { number: "8+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "5+", label: "Technologies" },
    { number: "∞", label: "Learning" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p
              className="about-intro"
              variants={itemVariants}
            >
              Hey there! I'm Matt, a software developer who's passionate about turning ideas into reality through code. My journey started with a fascination for how games work, which led me to create Minecraft mods that thousands of players use daily. From there, I've expanded into web development, AI/ML projects, and everything in between - always driven by the thrill of building something that makes a real impact.
            </motion.p>
            
            <motion.div className="about-details" variants={itemVariants}>
              <motion.div
                className="about-item"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3><i className="fa-solid fa-bullseye"></i> My Mission</h3>
                <p>To bridge the gap between imagination and reality through code. I love turning complex ideas into elegant solutions, whether that's building neural networks from scratch or creating immersive Minecraft experiences that bring communities together.</p>
              </motion.div>
              
              <motion.div
                className="about-item"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3><i className="fa-solid fa-rocket"></i> What I Do</h3>
                <p>I'm a full-stack developer who thrives on diverse challenges. From crafting responsive web applications to developing AI systems and creating popular Minecraft mods that enhance gameplay, I enjoy pushing the boundaries of what's possible with code.</p>
              </motion.div>
              
              <motion.div
                className="about-item"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3><i className="fa-solid fa-lightbulb"></i> My Approach</h3>
                <p>I believe the best code comes from understanding both the technical requirements and the human experience. Every project is a chance to learn, innovate, and create something that makes a difference - whether it's helping players coordinate better in games or building AI that can recognize handwritten digits.</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="about-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 