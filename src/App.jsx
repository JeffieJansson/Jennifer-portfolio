// src/App.jsx
import { Hero } from "./sections/Hero.jsx";
import { Tech } from "./sections/Tech.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Journey } from "./sections/Journey.jsx";
import { Contact } from "./sections/Contact.jsx";
import { GlobalStyle } from "./components/GlobalStyles.jsx";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Hero />
        <main>
          <Tech />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </main>
      </div>
    </>
  );
};
