// src/sections/Projects.jsx
import projects from "../data/projects.json";   // import of data
import { Card } from "../components/Card.jsx";  // import of component

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured projects</h2>

      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </section>
  );
};
