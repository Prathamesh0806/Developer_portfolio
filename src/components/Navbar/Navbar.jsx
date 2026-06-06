import "./Navbar.css";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../assets/images/profile_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="container nav-container">

          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src={logo} alt="Prathamesh Logo" />
          </motion.div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;