// src/sections/Contact.jsx
import styled from "styled-components";
import { media } from "../data/media.js";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "../components/Icons.jsx";
import footerImage from "/footer.png";

// ---- STYLES ----
const ContactSection = styled.section`
  background: linear-gradient(135deg, #2d2d2d 0%, #4a3d4a 50%, #3d4a4a 100%);
  display: flex;
  padding: 128px 80px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
    padding: 96px 40px;
  }

  @media ${media.mobile} {
    padding: 64px 24px;
  }
`;

const ContactTitle = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(135deg, #ffffff 0%, #e8c4dd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: 2;
  margin-bottom: 16px;

  @media ${media.tablet} {
    font-size: 56px;
  }

  @media ${media.mobile} {
    font-size: 40px;
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
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  display: block;      
  margin: 0 auto;
  border: 5px solid rgba(232, 196, 221, 0.3);
  box-shadow: 0 20px 50px rgba(232, 196, 221, 0.15);
  z-index: 2;

  @media ${media.mobile} {
    width: 140px;
    height: 140px;
    border: 4px solid rgba(232, 196, 221, 0.3);
  }
`;

const Info = styled.div`
  text-align: center;
  margin-top: 24px;
  z-index: 2;

  p {
    color: #f5f5f5;
    font-size: 28px;
    margin: 12px 0;
    font-weight: 400;
    
    &:first-child {
      font-size: 32px;
      font-weight: 600;
      background: linear-gradient(135deg, #ffffff 0%, #e8c4dd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  a {
    text-decoration: none;
    color: #f5f5f5;
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
      font-size: 24px;
      
      &:first-child {
        font-size: 28px;
      }
    }
  }

  @media ${media.mobile} {
    p {
      font-size: 18px;
      margin: 10px 0;
      
      &:first-child {
        font-size: 24px;
      }
    }
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 32px;
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
      <p>Jennifer Jansson</p>
      <p>
        <a href="tel:+46763141262">+46 76 314 12 62</a>
      </p>
      <p>
        <a href="mailto:jenniferjansson92@gmail.com">
          jenniferjansson92@gmail.com
        </a>
      </p>
    </Info>

    <SocialRow aria-label="Social media links">
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
        href="https://stackoverflow.com/users/31403265/jennifer-jansson"
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
  </ContactSection>
);
