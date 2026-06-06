import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Present",
    role: "Expert Web Developer",
    company: "Freelance",
    description:
      "Leading end-to-end development of Shopify, Framer, Webflow, WordPress, and React projects for clients worldwide, with a focus on performance, scalability, and conversion optimization."
  },
  {
    year: "2023 - 2025",
    role: "Senior Frontend Developer",
    company: "Freelance",
    description:
      "Built responsive websites and ecommerce experiences, transformed Figma designs into production-ready interfaces, and delivered custom solutions for businesses across various industries."
  },
  {
    year: "2021 - 2023",
    role: "Junior Shopify Developer",
    company: "Freelance",
    description:
      "Developed and customized Shopify stores, created custom sections, optimized storefronts, and enhanced user experiences using Liquid, HTML, CSS, and JavaScript."
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