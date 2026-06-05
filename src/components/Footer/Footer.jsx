import "./Footer.css";

import {
  FaLinkedin,
  FaGithub,
  FaArrowUp
} from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <h2>
          Prathamesh Yamgarne
        </h2>

        <p>
          Senior Web Developer
        </p>

        <div className="footer-socials">

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

        <button
          className="top-btn"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

        <div className="copyright">
          © 2026 All Rights Reserved
        </div>

      </div>

    </footer>
  );
};

export default Footer;