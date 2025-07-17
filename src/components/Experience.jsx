import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Full Stack Developer",
      company: "Freelance",
      description: "Building modern web applications using React, Node.js, and various cloud services. Specializing in responsive design and user experience optimization.",
      tags: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      date: "2022 - 2023",
      title: "Frontend Developer",
      company: "Tech Startup",
      description: "Developed responsive user interfaces and implemented modern design patterns. Collaborated with design and backend teams to deliver high-quality products.",
      tags: ["JavaScript", "CSS3", "HTML5", "Git"]
    },
    {
      date: "2021 - 2022",
      title: "Junior Developer",
      company: "Digital Agency",
      description: "Started my journey in web development, learning modern frameworks and best practices. Contributed to various client projects and internal tools.",
      tags: ["HTML", "CSS", "JavaScript", "WordPress"]
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