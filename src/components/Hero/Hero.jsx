import "./Hero.css";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/images/profile_image.png";


import {
  FaLinkedin,
  FaGithub,
  FaArrowDown
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="container hero-content">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="hello">
            👋 Hello, I'm
          </p>

          <h1>
            Prathamesh
            <span> Yamgarne.</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Senior Web Developer",
                "Shopify Expert",
                "WordPress Developer",
                "Framer Expert",
                "Webflow Developer",
                "Wix Developer",
                "Squarepress Developer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p className="hero-desc">
            I build modern, high-converting websites
            using Shopify, Wordpress, Framer, Webflow
            Wix and Squarepress with premium user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/prathamesh-yamgarne-069a58223/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Prathamesh0806?"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

          </div>

        </motion.div>

        <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <div className="terminal-card">

    <div className="terminal-header">
      <div className="terminal-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p>prathmesh@portfolio ~ zsh</p>
    </div>

    <div className="terminal-body">

      <div className="line">
        <span className="command">whoami →</span>
        <span className="value"> Prathamesh Yamgarne</span>
      </div>

      <div className="line">
        <span className="command">role →</span>
        <span className="value">
          Senior Web Developer & Shopify Expert
        </span>
      </div>

      <div className="line">
        <span className="command">experience →</span>
        <span className="value">
          3+ Years | 45+ Stores | 50 Devs Led
        </span>
      </div>

      <div className="line">
        <span className="command">status →</span>
        <span className="green">
          ● Actively Looking for Opportunities
        </span>
      </div>

      {/* <div className="line">
        <span className="command">awards →</span>
        <span className="yellow">
          🏆 Best Team Leader
        </span>
      </div> */}

      <div className="line">
        <span className="command">achievement →</span>
        <span className="yellow">
          🚀 Delivered 45+ Shopify Stores
        </span>
      </div>

    </div>

    <div className="badge top-badge">
      Shopify Plus Certified
    </div>

    <div className="badge bottom-badge">
      Immediate Joiner
    </div>

  </div>
</motion.div>

      </div>

      <div className="scroll-indicator">
        <FaArrowDown />
      </div>

    </section>
  );
};

export default Hero;