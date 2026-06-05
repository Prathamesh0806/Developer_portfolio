import "./Services.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "Shopify Development",
    desc: "Custom Shopify stores, theme development, app integrations, performance optimization, and conversion-focused ecommerce experiences."
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites, WooCommerce stores, theme customization, and scalable business solutions."
  },
  {
    title: "Framer Development",
    desc: "Modern Framer websites with smooth animations, CMS integration, responsive layouts, and premium user experiences."
  },
  {
    title: "Webflow Development",
    desc: "Professional Webflow websites with custom interactions, CMS implementation, and responsive design."
  },
  {
    title: "Wix Development",
    desc: "Business and portfolio websites built on Wix with custom layouts, advanced functionality, and SEO optimization."
  },
  {
    title: "Squarespace Development",
    desc: "Elegant Squarespace websites for brands, businesses, and personal portfolios with modern design and seamless user experience."
  }
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">

        <div className="section-title">
          <h2>My <span>Services</span></h2>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;