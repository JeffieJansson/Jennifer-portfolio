// src/components/Card.jsx
export const Card = ({ project }) => {
  return (
    <article className="card">
      {project.image && ( // Only render image if it exists
        <img src={project.image.src} alt={project.image.alt} />
      )}

      <h3>{project.title}</h3>

      {project.tags && (     // Check if tags exist
        <p>
          {project.tags.join(" · ")} {/* join tags with dot separator for now */}
        </p>
      )}

      <p>{project.summary}</p>
      <p>
        <a href={project.live} target="_blank" rel="noreferrer">
          Live demo
        </a>{" "}
        |{" "}
        <a href={project.code} target="_blank" rel="noreferrer">
          View code
        </a>
      </p>
    </article>
  );
};
