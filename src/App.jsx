// src/App.jsx
import { GlobalStyle } from "./components/GlobalStyles";
import { Hero } from "./sections/Hero";
import { Tech } from "./sections/Tech";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Journey } from "./sections/Journey";
import { Contact } from "./sections/Contact";
import styled from "styled-components";

const SkipLink = styled.a`
  position: absolute;
  left: -999px;
  top: 16px;
  padding: 8px 16px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  z-index: 1000;

  &:focus-visible {
    left: 16px;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <div className="app">
        <Hero />
        <main id="main-content">
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
