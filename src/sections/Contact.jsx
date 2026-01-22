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

// ---- STYLES ----
const ContactSection = styled.section`
  background: linear-gradient(135deg, #2d2d2d 0%, #4a3d4a 50%, #3d4a4a 100%);
  display: flex;
  padding: 96px 60px 60px 60px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(232, 196, 221, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -120px;
    right: -120px;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(196, 216, 236, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${media.tablet} {
    padding: 72px 40px 48px 40px;
  }

  @media ${media.mobile} {
    padding: 48px 24px 40px 24px;
  }
`;

const ContactTitle = styled.h2`
  color: #e8c4dd;
  text-align: center;
  font-size: 56px;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(135deg, #ffffff 0%, #e8c4dd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: 2;
  margin-bottom: 12px;

  @media ${media.tablet} {
    font-size: 44px;
  }

  @media ${media.mobile} {
    font-size: 32px;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #e8c4dd 0%, #c4d8ec 100%);
  border-radius: 2px;
  margin: 8px 0 32px 0;
  z-index: 2;

  @media ${media.mobile} {
    width: 60px;
    margin: 8px 0 24px 0;
  }
`;

const Avatar = styled.img.attrs({ loading: "lazy" })`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  display: block;      
  margin: 0 auto;
  border: 4px solid rgba(232, 196, 221, 0.3);
  box-shadow: 0 20px 50px rgba(232, 196, 221, 0.15);
  z-index: 2;

  @media ${media.mobile} {
    width: 110px;
    height: 110px;
    border: 3px solid rgba(232, 196, 221, 0.3);
  }
`;

const Info = styled.div`
  text-align: center;
  margin-top: 16px;
  z-index: 2;

  p {
    color: #f5f5f5;
    font-size: 18px;
    margin: 6px 0;
    font-weight: 400;
    opacity: 0.9;
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    background: linear-gradient(135deg, #ffffff 0%, #e8c4dd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 4px;
    opacity: 1;
  }

  .role {
    font-size: 16px;
    letter-spacing: 0.2px;
    opacity: 0.85;
  }

  a {
    text-decoration: none;
    color: #e8c4dd;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, #e8c4dd 0%, #c4d8ec 100%);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: #e8c4dd;
    }
  }

  @media ${media.tablet} {
    p {
      font-size: 17px;
    }

    .name {
      font-size: 24px;
    }
  }

  @media ${media.mobile} {
    p {
      font-size: 15px;
      margin: 5px 0;
    }

    .name {
      font-size: 20px;
    }
  }
`;

const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #f5f5f5;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-top: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #8ef0b2;
    box-shadow: 0 0 0 6px rgba(142, 240, 178, 0.12);
  }

  @media ${media.mobile} {
    margin-top: 8px;
  }
`;


const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 24px;
  z-index: 2;

  a {
    color: #f5f5f5;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, rgba(232, 196, 221, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      transition: transform 0.3s ease;
      z-index: -1;
    }

    &:hover {
      color: #e8c4dd;
      transform: translateY(-3px);
      
      &::before {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    svg {
      transition: all 0.3s ease;
    }
  }

  @media ${media.mobile} {
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 24px;
  }
`;

// ---- COMPONENT ----
export const Contact = () => (
  <ContactSection id="contact" aria-labelledby="contact-heading">
    <ContactTitle id="contact-heading">Let’s Talk</ContactTitle>    <Divider />
    <Avatar src={footerImage} alt="Portrait of Jennifer Jansson" />
    <Info>
      <p className="name">Jennifer Jansson</p>
      <p className="role">Frontend Developer & Digital Analytics Specialist</p>
    </Info>
    <Availability>
      <span className="dot" aria-hidden="true"></span>
      Available for work
    </Availability>

    <SocialRow aria-label="Social media links">
      <a
        href="https://www.linkedin.com/in/jennifer-jansson"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        onClick={() => window.dataLayer?.push({ event: 'click_linkedin' })}
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://github.com/jeffiejansson"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        onClick={() => window.dataLayer?.push({ event: 'click_github' })}
      >
        <GitHubIcon />
      </a>

      <a
        href="mailto:jenniferjansson92@gmail.com"
        aria-label="Email Jennifer"
        onClick={() => window.dataLayer?.push({ event: 'click_email' })}
      >
        <MailIcon />
      </a>

      <a
        href="/tech-resume-jennifer.pdf"
        download
        aria-label="Download CV"
        onClick={() => window.dataLayer?.push({ event: 'download_cv' })}
      >
        <DownloadIcon />
      </a>
    </SocialRow>
  </ContactSection>
);
