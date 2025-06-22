import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const techGrid = keyframes`
  0% { transform: translateX(0px); }
  100% { transform: translateX(-50px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const titleGlow = keyframes`
  0% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 200, 255, 0.5); }
  50% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(100, 200, 255, 0.8), 0 0 40px rgba(100, 200, 255, 0.6); }
  100% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 200, 255, 0.5); }
`;

const heroTextReveal = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
    filter: blur(8px);
  }
  60% {
    opacity: 0.8;
    transform: scale(0.95) translateY(5px);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0px);
  }
`;

const networkPulse = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.02); }
  100% { opacity: 0.3; transform: scale(1); }
`;

const dataFlow = keyframes`
  0% { transform: translateX(-100px) translateY(-50px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100vw) translateY(50px); opacity: 0; }
`;

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  background: 
    linear-gradient(135deg, rgba(5, 15, 35, 0.75) 0%, rgba(10, 25, 50, 0.75) 50%, rgba(15, 35, 70, 0.75) 100%),
    url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
    clip-path: polygon(0 50%, 100% 100%, 0 100%);
    z-index: 2;
  }
`;

const TechGraphicOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(100, 200, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 100, 150, 0.1) 0%, transparent 50%),
    linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.02) 49%, rgba(255, 255, 255, 0.02) 51%, transparent 52%);
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: 
      conic-gradient(from 0deg, 
        rgba(100, 200, 255, 0.1) 0deg, 
        transparent 60deg, 
        rgba(255, 150, 100, 0.1) 120deg, 
        transparent 180deg,
        rgba(150, 255, 100, 0.1) 240deg,
        transparent 300deg,
        rgba(100, 200, 255, 0.1) 360deg);
    border-radius: 50%;
    animation: ${pulse} 4s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    left: 8%;
    width: 200px;
    height: 200px;
    background: 
      linear-gradient(45deg, 
        rgba(255, 255, 255, 0.05) 0%, 
        transparent 50%, 
        rgba(100, 200, 255, 0.05) 100%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const TechBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${techGrid} 20s linear infinite;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  
  &::before {
    content: '⚡';
    position: absolute;
    top: 20%;
    left: 10%;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.3);
    animation: ${float} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '🔬';
    position: absolute;
    top: 60%;
    right: 15%;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.3);
    animation: ${float} 4s ease-in-out infinite reverse;
  }
`;

const TechIcon = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.2);
  font-size: 1.5rem;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 15%;
    right: 20%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 70%;
    left: 20%;
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    top: 40%;
    left: 5%;
    animation-delay: 1s;
  }
  
  &:nth-child(4) {
    top: 25%;
    right: 5%;
    animation-delay: 1.5s;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const MainTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  background: linear-gradient(
    45deg,
    #ffffff 0%,
    #64b5f6 25%,
    #42a5f5 50%,
    #2196f3 75%,
    #ffffff 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${heroTextReveal} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), ${shimmer} 3s ease-in-out infinite 1.5s, ${titleGlow} 2s ease-in-out infinite 1.5s;
  letter-spacing: -2px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 2s ease-in-out infinite 1.5s;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;

const SubTitle = styled.h2`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: ${heroTextReveal} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
  line-height: 1.4;
`;

const ConferenceDetails = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const DateLocation = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const DetailItem = styled.div`
  text-align: center;
  color: white;
  
  .label {
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
  }
  
  .value {
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
  }
`;

const OrganizedBy = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  
  .highlight {
    font-weight: 600;
    color: white;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  animation: ${fadeInUp} 1s ease-out 0.6s both;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NetworkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(64, 181, 246, 0.4) 2px, transparent 2px),
      radial-gradient(circle at 80% 70%, rgba(64, 181, 246, 0.4) 2px, transparent 2px),
      radial-gradient(circle at 60% 20%, rgba(64, 181, 246, 0.4) 2px, transparent 2px),
      radial-gradient(circle at 30% 80%, rgba(64, 181, 246, 0.4) 2px, transparent 2px),
      radial-gradient(circle at 90% 40%, rgba(64, 181, 246, 0.4) 2px, transparent 2px),
      linear-gradient(20deg, transparent 40%, rgba(64, 181, 246, 0.3) 41%, rgba(64, 181, 246, 0.3) 43%, transparent 44%),
      linear-gradient(70deg, transparent 40%, rgba(33, 150, 243, 0.3) 41%, rgba(33, 150, 243, 0.3) 43%, transparent 44%),
      linear-gradient(120deg, transparent 40%, rgba(100, 200, 255, 0.3) 41%, rgba(100, 200, 255, 0.3) 43%, transparent 44%);
    background-size: 
      200px 200px,
      250px 250px,
      180px 180px,
      220px 220px,
      160px 160px,
      400px 400px,
      350px 350px,
      300px 300px;
    animation: ${networkPulse} 4s ease-in-out infinite;
  }
`;

const DataFlowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
`;

const DataFlowLine = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, rgba(64, 181, 246, 0.9), rgba(33, 150, 243, 0.9));
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(64, 181, 246, 0.8), 0 0 30px rgba(33, 150, 243, 0.5);
  animation: ${dataFlow} 8s linear infinite;
  
  &:nth-child(1) {
    top: 20%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 35%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    top: 50%;
    animation-delay: 4s;
  }
  
  &:nth-child(4) {
    top: 65%;
    animation-delay: 6s;
  }
  
  &:nth-child(5) {
    top: 80%;
    animation-delay: 1s;
  }
`;

const SpaceParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  
  &::before {
    top: 15%;
    left: 85%;
    animation: ${float} 6s ease-in-out infinite;
  }
  
  &::after {
    top: 75%;
    left: 10%;
    animation: ${float} 8s ease-in-out infinite reverse;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <TechBackground />
      <TechGraphicOverlay />
      <FloatingElements />
      <NetworkOverlay />
      <DataFlowContainer>
        <DataFlowLine />
        <DataFlowLine />
        <DataFlowLine />
        <DataFlowLine />
        <DataFlowLine />
      </DataFlowContainer>
      <SpaceParticles />
      
      <TechIcon>🔬</TechIcon>
      <TechIcon>⚡</TechIcon>
      <TechIcon>🧬</TechIcon>
      <TechIcon>⚙️</TechIcon>
      
      <ContentWrapper>
        <MainTitle>IEMENTech 2026</MainTitle>
        <SubTitle>
          9th International Conference on Electronics, Materials Engineering and Nano-Technology
        </SubTitle>
        
        <ConferenceDetails>
          <DateLocation>
            <DetailItem>
              <div className="label">Date</div>
              <div className="value">6th - 7th February 2026</div>
            </DetailItem>
            <DetailItem>
              <div className="label">Location</div>
              <div className="value">Saltlake, Kolkata, India</div>
            </DetailItem>
            <DetailItem>
              <div className="label">Venue</div>
              <div className="value">IEM Gurukul Campus</div>
            </DetailItem>
          </DateLocation>
          
          <OrganizedBy>
            Organized by <span className="highlight">Dept. of ECE, Institute of Engineering & Management, Kolkata</span>
            <br />
            with Technical Co-Sponsorship of <span className="highlight">IEEE Kolkata Section</span>
          </OrganizedBy>
        </ConferenceDetails>
        
        <CTAButton>
          Register Now
        </CTAButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
