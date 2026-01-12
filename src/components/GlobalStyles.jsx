// src/styles/GlobalStyle.jsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

 *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: #ffffff;
    color: #2D2D2D;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
  
  a:focus-visible,
  button:focus-visible {
    outline: 3px solid #D4A5A5; 
    outline-offset: 4px;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  h1 {
    font-size: clamp(3rem, 6vw, 4.5rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.3rem, 2.4vw, 1.8rem);
  }

  p {
    margin: 0;
  }

`;
