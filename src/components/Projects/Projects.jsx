import "./Projects.css";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const filters = [
  "All",
  "Shopify",
  "WordPress",
  "Framer",
  "Webflow",
  "Wix",
  "Squarespace"
];

const Projects = () => {

  const [projects,setProjects] = useState([]);
  const [active,setActive] = useState("All");

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter(
          item => item.category === active
        );

  return (
    <section id="projects" className="projects section">

      <div className="container">

        <div className="section-title">
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="project-filters">

          {filters.map((item,index)=>(
            <button
              key={index}
              className={
                active === item
                ? "active-filter"
                : ""
              }
              onClick={()=>setActive(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="projects-grid">

          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;