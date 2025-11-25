// src/styles/GlobalStyle.jsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Resets / basgrejer */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: #ffffff;
    color: #000000;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
