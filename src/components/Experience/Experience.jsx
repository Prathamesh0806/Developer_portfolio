import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Present",
    role: "Senior Web Developer",
    company: "Freelance",
    description:
      "Building Shopify, Framer, Webflow and React websites for clients worldwide."
  },
  {
    year: "2023 - 2025",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Developed responsive websites and custom ecommerce experiences."
  },
  {
    year: "2021 - 2023",
    role: "Shopify Developer",
    company: "Ecommerce Agency",
    description:
      "Worked on theme customization, custom sections and store optimization."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">

        <div className="section-title">
          <h2>
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="timeline">

          {experiences.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>{item.year}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="achievement-card">
            <h3>50+</h3>
            <p>Clients Worldwide</p>
          </div>

          <div className="achievement-card">
            <h3>6+</h3>
            <p>Years Experience</p>
          </div>

          <div className="achievement-card">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;