// src/sections/Journey.jsx
import techData from "../data/tech.json";

export const Tech = () => {
  const techLine = techData.tech.join(", ");

  return (
    <section id="tech">
      <h2>Tech</h2>
      <p>{techLine}</p>
    </section>
  );
};