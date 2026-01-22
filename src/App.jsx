// src/App.jsx
import { GlobalStyle } from "./components/GlobalStyles";
import { Navigation } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Divider } from "./components/Divider";
import { Tech } from "./sections/Tech";
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
      <Navigation />
      <Hero />
      <Divider />
      <main id="main-content">
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Tech />
        <Divider />
        <Contact />
      </main>
    </>
  );
};
