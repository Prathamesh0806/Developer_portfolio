import "./About.css";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile_image.png"

const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "30+",
    label: "Happy Clients",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

const About = () => {
  return (
    <section id="about" className="about section">

      <div className="container">

        <div className="section-title">
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-wrapper">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-card">
              <img
                src={profileImage}
                alt="developer"
              />
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3>
              Senior Web Developer &
              Shopify Expert
            </h3>

            <p>
              I specialize in building
              high-converting websites,
              Shopify stores, Framer websites,
              Webflow projects and custom React applications.
            </p>

            <p>
              My focus is creating fast,
              modern, visually appealing,
              and conversion-focused experiences
              that help businesses grow online.
            </p>

            <div className="about-info">

              <div>
                <span>Name:</span>
                <p>Prathamesh Yamgarne</p>
              </div>

              <div>
                <span>Email:</span>
                <p>prathmesh.webdev@gmail.com</p>
              </div>

              <div>
                <span>Location:</span>
                <p>Maharashtra, India</p>
              </div>

              <div>
                <span>Role:</span>
                <p>Senior Web Developer</p>
              </div>

            </div>

          </motion.div>

        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default About;