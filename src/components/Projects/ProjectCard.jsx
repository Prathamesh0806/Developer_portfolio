import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.15}
    >
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.03 }}
      >

        <div className="project-image">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className="project-content">

          <span className="project-category">
            {project.category}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-tech">
            {project.technologies.map((tech,index)=>(
              <span key={index}>{tech}</span>
            ))}
          </div>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Project
          </a>

        </div>

      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;