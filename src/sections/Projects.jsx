// src/sections/Projects.jsx
import projects from "../data/projects.json";
import Button from "../components/Button";
import { TagsRow, Tag } from "../components/Card";
import { LiveIcon, CodeIcon } from "../components/Icons";

export const Projects = () => { // Projects component to display featured projects
  return (
    <section id="projects">
      <h2>Featured projects</h2>

      {projects.map((project) => (
        <article key={project.id}>
          {/* thumb-img */}
          {project.image && (  // render image if it exists in JSON
            <img
              src={project.image.src}
              alt={project.image.alt}
            />
          )}

          {/* Tags (HTML, CSS, API...) */}
          {Array.isArray(project.tags) && project.tags.length > 0 && ( // render tags if they exist in JSON
            <TagsRow>
              {project.tags.map((tag) => (   // map over tags array
                <Tag key={tag}>{tag}</Tag>  // render each tag
              ))}
            </TagsRow>
          )}

          <h3>{project.title}</h3>
          {project.summary && <p>{project.summary}</p>}

          {/*   LiveIcon button and CodeIcon button */}
          <div>
            {project.live && (  // render live demo button if link exists in JSON
              <Button
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiveIcon aria-hidden="true" />
                <span>Live demo</span>
              </Button>
            )}

            {project.code && ( // render code button if link exists in JSON
              <Button
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeIcon aria-hidden="true" />
                <span>View code</span>
              </Button>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};
