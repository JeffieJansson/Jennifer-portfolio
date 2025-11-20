// src/sections/Journey.jsx
import techData from "../data/tech.json";

export const Tech = () => { // Tech component to display technologies
  const techLine = techData.tech.join(", "); // transform array into comma-separated string

  return (
    <section id="tech">
      <h2>Tech</h2>
      <p>{techLine}</p>
    </section>
  );
};