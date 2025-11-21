// src/sections/Contact.jsx
import styled from "styled-components";import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "../components/Icons.jsx";

const SocialRow = styled.div`
display: flex;
align-items: flex-end;
gap: 32px;
 a {
    color: inherit; 
    text-decoration: none;
  }
  svg { width: 32px; height: 32px; }
`;

export const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        <h2 id="contact-heading" className="contact-title">
          Let’s Talk
        </h2>
        <img
          src="/"
          alt="Portrait of Jennifer Jansson"
          className="contact-avatar"
        />

        <div className="contact-info">
          <p className="contact-name">Jennifer Jansson</p>
          <p>
            <a href="tel:+46763141262">+46 76 314 12 62</a>
          </p>
          <p>
            <a href="mailto:jenniferjansson92@gmail.com">
              jenniferjansson92@gmail.com
            </a>
          </p>
        </div>

        <SocialRow 
            className="contact-socials"  
            aria-label="Social media links"> 
          <a
            href="https://www.linkedin.com/in/jennifer-jansson"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/jeffiejansson"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://stackoverflow.com/jenniferjansson"
            target="_blank"
            rel="noreferrer"
            aria-label="Stack Overflow"
          >
            <StackOverflowIcon />
          </a>

          <a
            href="https://www.instagram.com/_jenniferjansson_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </SocialRow>
      </div>
    </section>
  );
};
