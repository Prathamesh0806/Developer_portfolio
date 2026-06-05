import "./Skills.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section id="skills" className="skills section">

      <div className="container">

        <div className="section-title">
          <h2>
            My <span>Skills</span>
          </h2>
        </div>

        <div className="skills-wrapper">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >

              <div className="skill-header">
                <h4>{skill.name}</h4>
                <span>{skill.percentage}%</span>
              </div>

              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5
                  }}
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;