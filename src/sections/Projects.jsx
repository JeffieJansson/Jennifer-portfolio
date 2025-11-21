// src/sections/Projects.jsx
import projects from "../data/projects.json";   
import { Card } from "../components/Card.jsx";  

export const Projects = () => { // Projects component to display list of projects
  return (
    <section id="projects">
      <h2>Featured projects</h2>

      {projects.map((project) => ( //loop through projects data and render each project
        <Card key={project.id} // project id as key prop
         project={project} /> // prop to pass project data to Card component
      ))}
    </section>
  );
};
