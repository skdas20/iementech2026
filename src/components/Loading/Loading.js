import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const logoScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(20px);
    filter: blur(10px);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.8) translateY(10px);
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0px);
  }
`;

const logoGlow = keyframes`
  0% { 
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.5), 0 0 40px rgba(100, 200, 255, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(100, 200, 255, 0.8), 0 0 80px rgba(100, 200, 255, 0.5);
  }
  100% { 
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.5), 0 0 40px rgba(100, 200, 255, 0.3);
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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

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

const loadingDots = keyframes`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const circleRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.95) 0%, rgba(10, 25, 50, 0.95) 50%, rgba(15, 35, 70, 0.95) 100%),
    url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(100, 181, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(64, 181, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(30, 60, 114, 0.3) 0%, transparent 70%),
      rgba(0, 0, 0, 0.4);
    pointer-events: none;
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const NetworkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 1;
  animation: ${networkPulse} 4s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: #64b5f6;
    box-shadow: 
      50px 100px 0 #42a5f5,
      150px 50px 0 #2196f3,
      250px 150px 0 #64b5f6,
      350px 80px 0 #42a5f5,
      450px 200px 0 #2196f3,
      80px 250px 0 #64b5f6,
      180px 300px 0 #42a5f5,
      280px 220px 0 #2196f3,
      380px 350px 0 #64b5f6,
      480px 120px 0 #42a5f5;
    animation: ${networkPulse} 3s ease-in-out infinite;
  }
`;

const DataFlowLine = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #64b5f6, transparent);
  animation: ${dataFlow} 3s linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  
  &:nth-child(2) {
    top: 30%;
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    top: 60%;
    animation-delay: 1s;
  }
  
  &:nth-child(4) {
    top: 20%;
    animation-delay: 1.5s;
  }
  
  &:nth-child(5) {
    top: 80%;
    animation-delay: 2s;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  animation: ${logoScale} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border: 2px solid rgba(100, 181, 246, 0.3);
  animation: ${logoGlow} 2s ease-in-out infinite 2s;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const LoadingTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  animation: ${fadeInUp} 1s ease-out 1s both, ${shimmer} 3s ease-in-out infinite 2s;
`;

const LoadingSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: ${fadeInUp} 1s ease-out 1.5s both;
`;

const LoadingDotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const LoadingDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #64b5f6;
  animation: ${loadingDots} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const LoadingCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid rgba(100, 181, 246, 0.3);
  border-top: 3px solid #64b5f6;
  border-radius: 50%;
  animation: ${circleRotate} 1s linear infinite, ${fadeInUp} 1s ease-out 2s both;
`;

const ProgressText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: ${fadeInUp} 1s ease-out 2.5s both;
`;

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Loading resources...' },
      { progress: 40, text: 'Connecting to servers...' },
      { progress: 60, text: 'Preparing interface...' },
      { progress: 80, text: 'Finalizing setup...' },
      { progress: 100, text: 'Welcome to IEMENTech 2026!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <LoadingContainer>
      <NetworkOverlay />
      <DataFlowLine />
      <DataFlowLine />
      <DataFlowLine />
      <DataFlowLine />
      <DataFlowLine />
      
      <LogoContainer>
        <Logo src="/assets/LOGO.png" alt="IEMENTech 2026" />
      </LogoContainer>
      
      <LoadingTitle>IEMENTech 2026</LoadingTitle>
      <LoadingSubtitle>9th International Conference</LoadingSubtitle>
      
      <LoadingDotsContainer>
        <LoadingDot delay="0s" />
        <LoadingDot delay="0.2s" />
        <LoadingDot delay="0.4s" />
      </LoadingDotsContainer>
      
      <LoadingCircle />
      
      <ProgressText>{loadingText}</ProgressText>
    </LoadingContainer>
  );
};

export default Loading;
