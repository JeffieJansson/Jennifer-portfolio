// src/sections/Skills.jsx
import skillsData from "../data/skills.json";

export const Skills = () => {
  const { code, toolbox, upcoming, more } = skillsData; //create variables for each skill category

  return (
    <section id="skills">
      <h2>Skills</h2>

      <h3>Code</h3>
      <p>{code.join(", ")}</p>

      <h3>Toolbox</h3>
      <p>{toolbox.join(", ")}</p>

      <h3>Upcoming</h3>
      <p>{upcoming.join(", ")}</p>

      <h3>More</h3>
      <p>{more.join(", ")}</p>
    </section>
  );
};
