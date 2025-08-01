import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: "2020 - 2021",
      title: "GitHub Account",
      // company: "Freelance",
      description: "Made a GitHub Account in 2020 and learned basic Python.",
      tags: ["Python", "Github"]
    },
    {
      date: "2022 - 2024",
      title: "Frontend Developer",
      // company: "Tech Startup",
      description: "Learned basic Java and started making sparse commits to my brother's Minecraft mods. Began learning HTML, CSS, JavaScript, and C++",
      tags: ["Java", "CSS", "HTML", "JavaScript", "C++", "Minecraft Modding"]
    },
    {
      date: "2025 - Present",
      title: "Junior Developer",
      // company: "Digital Agency",
      description: "Began making regular commits to my own projects and learned React.js, Node.js, and React Native. I made my own Minecraft mods and started making my own React Native social media app.",
      tags: ["React.js", "Node.js", "React Native", "Minecraft Modding"]
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
        </motion.div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <p><strong>{exp.company}</strong></p>
                <p>{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 