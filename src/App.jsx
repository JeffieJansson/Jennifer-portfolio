import { Hero } from "./sections/Hero.jsx";
import { Tech } from "./sections/Tech.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Journey } from "./sections/Journey.jsx";
import { Contact } from "./sections/Contact.jsx";

export const App = () => {
  return (
    <div className="app">
      <Hero />
      <main>
        <Tech />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
};