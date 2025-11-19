// src/components/Card.jsx
export const Card = ({ project }) => {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </article>
  );
};
