import { useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { media } from "../data/media.js";
import { useInView } from "../hooks/useInView.js";

const MapboxGlobalStyles = createGlobalStyle`
  .ping-marker {
    width: 14px;
    height: 14px;
    background-color: var(--gold);
    border-radius: 50%;
    position: relative;
  }

  .ping-marker::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: var(--gold);
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    0%       { transform: scale(1); opacity: 0.7; }
    75%, 100% { transform: scale(2.5); opacity: 0; }
  }

  .mapboxgl-ctrl-logo { display: none !important; }

  .mapboxgl-ctrl-group {
    background: rgba(20, 20, 20, 0.9) !important;
    border: 1px solid rgba(201, 169, 110, 0.2) !important;
    border-radius: 8px !important;
  }

  .mapboxgl-ctrl-group button {
    background: transparent !important;
    border: none !important;
    color: var(--cream) !important;
  }

  .mapboxgl-ctrl-group button + button {
    border-top: 1px solid rgba(201, 169, 110, 0.1) !important;
  }
`;

// ---- STYLES ----
const AboutWrapper = styled.section`
  padding: 80px 80px;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: -100px;
    right: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(201, 169, 110, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${media.tablet} {
    padding: 64px 40px;
    gap: 36px;
  }

  @media ${media.mobile} {
    padding: 48px 24px;
    gap: 28px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  color: var(--cream);
  text-align: center;
  margin: 0 auto;
  letter-spacing: 0.05em;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(320px, 520px);
  gap: 60px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;

  @media ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--cream-dim);
  font-size: 17px;
  font-weight: 300;
  line-height: 1.85;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s;

  p { margin: 0; }

  @media ${media.tablet} { font-size: 16px; }
  @media ${media.mobile} { font-size: 15px; line-height: 1.7; }
`;

const MapCard = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 520px;
  background: var(--surface);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(201, 169, 110, 0.18);
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.7s ease-out 0.25s, transform 0.7s ease-out 0.25s;

  header {
    padding: 14px 16px 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    border: 1px solid rgba(201, 169, 110, 0.1);
  }

  h3 {
    margin: 0;
    font-size: 16px;
    color: var(--cream);
    letter-spacing: 0.02em;
  }

  span {
    font-size: 12px;
    color: var(--cream-muted);
    letter-spacing: 0.3px;
  }

  @media ${media.tablet} { max-width: 100%; width: 100%; }
  @media ${media.mobile} { min-width: 100%; }
`;

const MapFrame = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: #1a1a1a;
  height: 300px;

  @media ${media.tablet} { height: 260px; }
  @media ${media.mobile} { height: 220px; }
`;

const MapContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

// ---- COMPONENT ----
export const About = () => {
  const [sectionRef, inView] = useInView();
  const mapContainer = useRef(null);
  const map = useRef(null);

  const TYRESO_COORDS = [18.2285, 59.2415];

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
    if (!mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: TYRESO_COORDS,
      zoom: 9,
      attributionControl: false,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    const ping = document.createElement("div");
    ping.className = "ping-marker";

    new mapboxgl.Marker({ element: ping })
      .setLngLat(TYRESO_COORDS)
      .addTo(map.current);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <AboutWrapper id="about" ref={sectionRef}>
      <MapboxGlobalStyles />
      <SectionTitle $inView={inView}>About</SectionTitle>
      <ContentRow>
        <AboutContent $inView={inView}>
          <p>
            I'm a creative, curious, and data-driven frontend developer in training, drawn to the challenge of making digital experiences feel simple and intuitive.
            My path has been anything but linear — from music and martial arts to logistics, customer service, and digital analytics. But every step taught me about people, focus, persistence, and how people interact with technology.
          </p>
          <p>
            I realized I didn't just want to understand digital experiences, I wanted to build them. That insight pushed me out of my comfort zone and into the world of code.
            Today, I'm growing into a frontend developer who bridges the gap between data and code, with the goal of creating products that feel intuitive and deliver real value for real users.
          </p>
        </AboutContent>
        <MapCard $inView={inView} aria-label="Location map showing Tyresö, Sweden">
          <header>
            <h3>Based in Tyresö</h3>
            <span>Stockholm County, Sweden</span>
          </header>
          <MapFrame>
            <MapContainer ref={mapContainer} />
          </MapFrame>
        </MapCard>
      </ContentRow>
    </AboutWrapper>
  );
};
