import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #161515;
    --surface: #181818;
    --surface-raised: #181818;
    --gold: #C9A96E;
    --gold-light: #DFC08A;
    --gold-dim: rgba(201, 169, 110, 0.12);
    --gold-border: rgba(201, 169, 110, 0.22);
    --cream: #F0EBE3;
    --cream-dim: #C4BDB5;
    --cream-muted: #8A8278;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }

  *, *::before, *::after { box-sizing: border-box; }

  html, body { margin: 0; padding: 0; width: 100%; max-width: 100%; }

  html {
    scroll-behavior: smooth;
    overflow-x: clip;
  }

  body {
    min-height: 100vh;
    font-family: 'Poppins', system-ui, -apple-system, sans-serif;
    background: var(--bg);
    color: var(--cream);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: clip;
  }

  #root { min-height: 100vh; overflow-x: clip; }

  img { max-width: 100%; height: auto; display: block; }

  a { color: inherit; text-decoration: none; }
  a:hover { text-decoration: none; }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 4px;
  }

  ul, ol { margin: 0; padding: 0; list-style: none; }

  button { font-family: inherit; border: none; background: none; cursor: pointer; }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  h1 {
    font-size: clamp(3.5rem, 7vw, 5.5rem);
    font-weight: 500;
    line-height: 1.05;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
  }

  h3 {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    font-weight: 500;
  }

  p { margin: 0; }
`;
