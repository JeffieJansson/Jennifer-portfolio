import { useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { media } from "../data/media.js";

// Global styles for Mapbox
const MapboxGlobalStyles = createGlobalStyle`
  .ping-marker {
    width: 16px;
    height: 16px;
    background-color: #22c55e;
    border-radius: 50%;
    position: relative;
  }
  
  .ping-marker::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: #22c55e;
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    75%, 100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  
  .mapboxgl-ctrl-logo {
    display: none !important;
  }
  
  .mapboxgl-ctrl-group {
    background: rgba(255, 255, 255, 0.9) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 12px !important;
  }
  
  .mapboxgl-ctrl-group button {
    background: transparent !important;
    border: none !important;
  }
  
  .mapboxgl-ctrl-group button + button {
    border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  }
`;

// ---- STYLES ----
const AboutWrapper = styled.section`
  padding: 120px 80px;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: -100px;
    right: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 165, 165, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${media.tablet} {
    padding: 80px 40px;
    gap: 40px;
  }

  @media ${media.mobile} {
    padding: 60px 24px;
    gap: 32px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(38px, 4vw, 54px);
  color: #2D2D2D;
  text-align: center;
  margin: 0 auto;
  letter-spacing: -0.02em;
  animation: fadeInUp 0.8s ease-out 0.05s backwards;
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
  color: #5A5A5A;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease-out 0.15s backwards;

  p {
    margin: 0;
  }

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 1.7;
  }

  @media ${media.mobile} {
    font-size: 15px;
    line-height: 1.6;
  }
`;

const MapCard = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 520px;
  background: #00000096;
  border-radius: 24px;
  box-shadow: 0 20px 55px -24px rgba(18, 14, 14, 0.55);
  border: 1px solid #e7dfd9;
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;

  header {
    padding: 16px 18px 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: linear-gradient(135deg, #f8f5f9 0%, #fdfbfb 100%);
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 10px 30px -18px rgba(18, 14, 14, 0.35);
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: #2d2d2d;
    letter-spacing: -0.02em;
  }

  span {
    font-size: 14px;
    color: #6b6b6b;
  }

  @media ${media.tablet} {
    max-width: 100%;
    width: 100%;
  }

  @media ${media.mobile} {
    min-width: 100%;
  }
`;

const MapFrame = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: #ede7e1;
  box-shadow: 0 14px 38px -24px rgba(18, 14, 14, 0.45);
  border: 1px solid rgba(0, 0, 0, 0.04);
  height: 320px;

  @media ${media.tablet} {
    height: 280px;
  }

  @media ${media.mobile} {
    height: 240px;
  }
`;

const MapContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: saturate(0.8);
`;

const WarmOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(251, 191, 36, 0.04);
  pointer-events: none;
`;


// ---- COMPONENT ----
export const About = () => {
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
      style: "mapbox://styles/mapbox/streets-v12",
      center: TYRESO_COORDS,
      zoom: 9,
      attributionControl: false,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    // Create ping marker element
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
    <AboutWrapper id="about">
      <MapboxGlobalStyles />
      <SectionTitle>About</SectionTitle>
      <ContentRow>
        <AboutContent>
          <p>
          I’m a creative, curious, and data-driven frontend developer in training, drawn to the challenge of making digital experiences feel simple and intuitive.
          My path has been anything but linear... from music and martial arts to logistics, customer service, and digital analytics. But every step taught me about people, focus, persistence, and how people interact with technology.
          <br />
          I realized I didn’t just want to understand digital experiences, I wanted to build them. That insight pushed me out of my comfort zone and into the world of code.
          Today, I’m growing into a frontend developer who bridges the gap between data and code, with the goal of creating products that feel intuitive and deliver real value for real users.
          </p>
        </AboutContent>
        <MapCard aria-label="Location map showing Tyresö, Sweden">
          <header>
            <h3>Based in Tyresö</h3>
            <span>Stockholm County, Sweden</span>
          </header>
          <MapFrame>
            <MapContainer ref={mapContainer} />
            <WarmOverlay />
          </MapFrame>
        </MapCard>
      </ContentRow>
    </AboutWrapper>
  );
};
