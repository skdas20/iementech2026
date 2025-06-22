import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const flipIn = keyframes`
  0% {
    transform: perspective(400px) rotateY(-90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-20deg);
    opacity: 0.7;
  }
  60% {
    transform: perspective(400px) rotateY(10deg);
    opacity: 0.8;
  }
  80% {
    transform: perspective(400px) rotateY(-5deg);
    opacity: 0.9;
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
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

const TopicsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
  animation: ${fadeInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TopicCard = styled.div`
  position: relative;
  height: 320px;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateY(0);
    animation: ${flipIn} 0.8s ease-out;
    animation-delay: ${props => props.delay || '0s'};
    animation-fill-mode: both;
  }
  
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.7s;
    transform-style: preserve-3d;
    cursor: pointer;
  }
  
  &:hover .card-inner {
    transform: rotateY(180deg);
  }
  
  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.5rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(100, 181, 246, 0.2);
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .card-front {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: #1e293b;
  }
  
  .card-back {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    transform: rotateY(180deg);
  }
  
  &:nth-child(3n+1) .card-back {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  &:nth-child(3n+2) .card-back {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  
  &:nth-child(3n) .card-back {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
  
  &:nth-child(4n) .card-back {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
`;

const TopicIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  .card-front & {
    color: #64b5f6;
  }
  
  .card-back & {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const TopicTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;
  
  .card-front & {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .card-back & {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const TopicDescription = styled.p`
  line-height: 1.5;
  font-size: 0.95rem;
  margin: 0;
  word-wrap: break-word;
  
  .card-front & {
    color: #64748b;
  }
  
  .card-back & {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const TopicFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  text-align: left;
  width: 100%;
  
  li {
    padding: 0.3rem 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    position: relative;
    padding-left: 1.2rem;
    line-height: 1.3;
    word-wrap: break-word;
    
    &::before {
      content: "✦";
      color: white;
      font-weight: 600;
      position: absolute;
      left: 0;
      top: 0.3rem;
      font-size: 0.7rem;
    }
  }
`;

const Topics = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('[data-card]');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('reveal');
            }, index * 150);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <TopicsContainer>
      <Container>
        <Title>Conference Topics</Title>
        <Subtitle>
          Explore cutting-edge research areas in Electronics, Materials Engineering & Nano-Technology
        </Subtitle>
        
        <TopicsGrid ref={containerRef}>
          <TopicCard delay="0.1s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>💾</TopicIcon>
                <TopicTitle>Semiconductor Device Physics</TopicTitle>
                <TopicDescription>
                  Advanced research in semiconductor materials, device modeling, and quantum effects
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>⚡</TopicIcon>
                <TopicTitle>Device Physics</TopicTitle>
                <TopicFeatures>
                  <li>Quantum Transport</li>
                  <li>Band Structure Engineering</li>
                  <li>Device Modeling</li>
                  <li>Material Properties</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.2s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🔬</TopicIcon>
                <TopicTitle>Nano-Materials & Opto-Electronics</TopicTitle>
                <TopicDescription>
                  Nanoscale materials and optical electronic devices for next-generation applications
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>💡</TopicIcon>
                <TopicTitle>Opto-Electronics</TopicTitle>
                <TopicFeatures>
                  <li>Photonic Devices</li>
                  <li>Optical Sensors</li>
                  <li>Laser Technology</li>
                  <li>Quantum Optics</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.3s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🏭</TopicIcon>
                <TopicTitle>Industrial Electronics & Control Systems</TopicTitle>
                <TopicDescription>
                  Automation, control systems, and industrial IoT for smart manufacturing
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>⚙️</TopicIcon>
                <TopicTitle>Control Systems</TopicTitle>
                <TopicFeatures>
                  <li>Process Automation</li>
                  <li>PLC Systems</li>
                  <li>SCADA</li>
                  <li>Industrial IoT</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.4s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🖥️</TopicIcon>
                <TopicTitle>VLSI & Embedded Systems</TopicTitle>
                <TopicDescription>
                  Very Large Scale Integration design and embedded system development
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>💻</TopicIcon>
                <TopicTitle>VLSI Design</TopicTitle>
                <TopicFeatures>
                  <li>Chip Design</li>
                  <li>System on Chip</li>
                  <li>Embedded Programming</li>
                  <li>Real-time Systems</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.5s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🔧</TopicIcon>
                <TopicTitle>Micro-Electronic Device Fabrication</TopicTitle>
                <TopicDescription>
                  Manufacturing processes for microelectronic components and devices
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>🛠️</TopicIcon>
                <TopicTitle>Fabrication</TopicTitle>
                <TopicFeatures>
                  <li>Lithography</li>
                  <li>Etching Processes</li>
                  <li>Thin Film Deposition</li>
                  <li>Process Integration</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.6s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🌱</TopicIcon>
                <TopicTitle>Renewable Energy</TopicTitle>
                <TopicDescription>
                  Sustainable energy solutions and green technology innovations
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>☀️</TopicIcon>
                <TopicTitle>Green Energy</TopicTitle>
                <TopicFeatures>
                  <li>Solar Technology</li>
                  <li>Wind Energy</li>
                  <li>Energy Storage</li>
                  <li>Smart Grids</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.7s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>📡</TopicIcon>
                <TopicTitle>Wireless Communication & Computing</TopicTitle>
                <TopicDescription>
                  Advanced wireless technologies and mobile computing systems
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>📶</TopicIcon>
                <TopicTitle>Wireless Tech</TopicTitle>
                <TopicFeatures>
                  <li>5G/6G Networks</li>
                  <li>IoT Communications</li>
                  <li>Edge Computing</li>
                  <li>Mobile Networks</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.8s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>📊</TopicIcon>
                <TopicTitle>Signal & Image Processing</TopicTitle>
                <TopicDescription>
                  Digital signal processing and computer vision technologies
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>🎯</TopicIcon>
                <TopicTitle>Signal Processing</TopicTitle>
                <TopicFeatures>
                  <li>Digital Filters</li>
                  <li>Computer Vision</li>
                  <li>Pattern Recognition</li>
                  <li>Image Enhancement</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="0.9s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🤖</TopicIcon>
                <TopicTitle>AI, ML & IoT</TopicTitle>
                <TopicDescription>
                  Artificial Intelligence, Machine Learning, and Internet of Things applications
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>🧠</TopicIcon>
                <TopicTitle>AI & ML</TopicTitle>
                <TopicFeatures>
                  <li>Deep Learning</li>
                  <li>Neural Networks</li>
                  <li>IoT Analytics</li>
                  <li>Edge AI</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="1.0s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🔍</TopicIcon>
                <TopicTitle>MEMS & Sensors</TopicTitle>
                <TopicDescription>
                  Micro-Electro-Mechanical Systems and advanced sensor technologies
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>📡</TopicIcon>
                <TopicTitle>MEMS Tech</TopicTitle>
                <TopicFeatures>
                  <li>Microsensors</li>
                  <li>Actuators</li>
                  <li>Bio-MEMS</li>
                  <li>Smart Sensors</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="1.1s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>📻</TopicIcon>
                <TopicTitle>Microwave & Antenna</TopicTitle>
                <TopicDescription>
                  High-frequency electronics and antenna design for communication systems
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>📡</TopicIcon>
                <TopicTitle>RF Engineering</TopicTitle>
                <TopicFeatures>
                  <li>Antenna Design</li>
                  <li>RF Circuits</li>
                  <li>Microwave Systems</li>
                  <li>Radar Technology</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>

          <TopicCard delay="1.2s" data-card>
            <div className="card-inner">
              <div className="card-front">
                <TopicIcon>🦾</TopicIcon>
                <TopicTitle>Robotics & Mechatronics</TopicTitle>
                <TopicDescription>
                  Integrated mechanical, electrical, and software systems for automation
                </TopicDescription>
              </div>
              <div className="card-back">
                <TopicIcon>🔧</TopicIcon>
                <TopicTitle>Mechatronics</TopicTitle>
                <TopicFeatures>
                  <li>Autonomous Systems</li>
                  <li>Robot Control</li>
                  <li>Actuator Systems</li>
                  <li>Human-Robot Interface</li>
                </TopicFeatures>
              </div>
            </div>
          </TopicCard>
        </TopicsGrid>
      </Container>
    </TopicsContainer>
  );
};

export default Topics;
