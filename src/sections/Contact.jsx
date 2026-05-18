// src/sections/Contact.jsx
import styled from "styled-components";
import { media } from "../data/media.js";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
} from "../components/Icons.jsx";
import footerImage from "/foot.png";
import { useInView } from "../hooks/useInView.js";

// ---- STYLES ----
const ContactSection = styled.section`
  background: var(--surface);
  border-top: 1px solid rgba(201, 169, 110, 0.12);
  display: flex;
  padding: 72px 60px 56px 60px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(201, 169, 110, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  @media ${media.tablet} { padding: 56px 40px 44px 40px; }
  @media ${media.mobile} { padding: 44px 24px 36px 24px; }
`;


const ContactTitle = styled.h2`
  text-align: center;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--gold-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: 2;
  margin-bottom: 4px;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const GoldDivider = styled.div`
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 8px 0 24px 0;
  z-index: 2;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transition: opacity 0.8s ease-out 0.1s;
`;

const Avatar = styled.img.attrs({ loading: "lazy" })`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border: 1px solid rgba(201, 169, 110, 0.3);
  box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.06), 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 2;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(16px)")};
  transition: opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s;

  @media ${media.mobile} {
    width: 96px;
    height: 96px;
  }
`;

const Info = styled.div`
  text-align: center;
  margin-top: 12px;
  z-index: 2;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(16px)")};
  transition: opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s;

  p {
    color: var(--cream-dim);
    font-size: 15px;
    margin: 4px 0;
    font-weight: 300;
  }

  .name {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 22px;
    font-weight: 500;
    background: linear-gradient(135deg, var(--cream) 0%, var(--gold-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2px;
  }

  .role {
    font-size: 12px;
    letter-spacing: 0.5px;
    color: var(--cream-muted);
    text-transform: uppercase;
  }

  a {
    color: var(--gold);
    transition: opacity 0.2s ease;
    font-size: 13px;

    &:hover { opacity: 0.7; }
  }

  @media ${media.mobile} {
    p { font-size: 14px; }
    .name { font-size: 20px; }
  }
`;

const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(201, 169, 110, 0.2);
  color: var(--cream-dim);
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 8px;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transition: opacity 0.7s ease-out 0.25s;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6DBF8D;
    box-shadow: 0 0 0 4px rgba(109, 191, 141, 0.15);
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 20px;
  z-index: 2;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(16px)")};
  transition: opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s;

  a {
    color: var(--cream-muted);
    text-decoration: none;
    transition: color 0.25s ease, transform 0.25s ease;

    &:hover {
      color: var(--gold);
      transform: translateY(-3px);
    }

    svg { width: 24px; height: 24px; }
  }

  @media ${media.mobile} {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CopyrightLine = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: var(--cream-muted);
  letter-spacing: 0.5px;
  margin-top: 24px;
  opacity: ${({ $inView }) => ($inView ? 0.5 : 0)};
  transition: opacity 0.7s ease-out 0.4s;
`;

// ---- COMPONENT ----
export const Contact = () => {
  const [ref, inView] = useInView(0.1);
  return (
    <ContactSection id="contact" ref={ref} aria-labelledby="contact-heading">
      <ContactTitle id="contact-heading" $inView={inView}>
        Let's Talk
      </ContactTitle>
      <GoldDivider $inView={inView} />
      <Avatar src={footerImage} alt="Portrait of Jennifer Jansson" $inView={inView} />
      <Info $inView={inView}>
        <p className="name">Jennifer Jansson</p>
        <p className="role">Frontend Developer & Digital Analytics Specialist</p>
        <p>
          <a
            href="mailto:jenniferjansson92@gmail.com"
            onClick={() => window.dataLayer?.push({ event: "click_email" })}
          >
            jenniferjansson92@gmail.com
          </a>
        </p>
      </Info>
      <Availability $inView={inView}>
        <span className="dot" aria-hidden="true"></span>
        Available for work
      </Availability>
      <SocialRow $inView={inView} aria-label="Social media links">
        <a
          href="https://www.linkedin.com/in/jennifer-jansson"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          onClick={() => window.dataLayer?.push({ event: "click_linkedin" })}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/jeffiejansson"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          onClick={() => window.dataLayer?.push({ event: "click_github" })}
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:jenniferjansson92@gmail.com"
          aria-label="Email Jennifer"
          title="Email"
        >
          <MailIcon />
        </a>
        <a
          href="/tech-resume-jennifer.pdf"
          download
          aria-label="Download CV"
          title="Download CV"
          onClick={() => window.dataLayer?.push({ event: "download_cv" })}
        >
          <DownloadIcon />
        </a>
      </SocialRow>
      <CopyrightLine $inView={inView}>
        © 2025 Jennifer Jansson
      </CopyrightLine>
    </ContactSection>
  );
};
