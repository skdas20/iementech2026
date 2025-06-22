import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Enhanced animations for the timeline
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(100, 181, 246, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(100, 181, 246, 0);
  }
`;

const moveBall = keyframes`
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

// Zigzag timeline SVG container
const TimelineSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  
  .zigzag-path {
    fill: none;
    stroke: linear-gradient(45deg, #64b5f6, #42a5f5, #2196f3);
    stroke-width: 4;
    filter: drop-shadow(0 0 8px rgba(100, 181, 246, 0.5));
  }
  
  .moving-dot {
    fill: #64b5f6;
    filter: drop-shadow(0 0 12px rgba(100, 181, 246, 0.8));
    animation: ${pulse} 2s ease-in-out infinite;
    
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    
    &:nth-child(3) {
      animation-delay: 1s;
    }
    
    &:nth-child(4) {
      animation-delay: 1.5s;
    }
    
    &:nth-child(5) {
      animation-delay: 2s;
    }
  }
    @media (max-width: 768px) {
    left: 15px;
    transform: none;
    width: 6px;
    height: auto;
    
    .zigzag-path {
      stroke-width: 3;
    }
    
    .moving-dot {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    left: 10px;
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
  padding: 6rem 0 4rem 0;
  position: relative;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 0 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 1s ease-out;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #64748b;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 6rem;
  opacity: 0;
  
  &.animate-left {
    animation: ${slideInLeft} 0.8s ease-out forwards;
    animation-delay: ${props => props.index * 0.2}s;
  }
  
  &.animate-right {
    animation: ${slideInRight} 0.8s ease-out forwards;
    animation-delay: ${props => props.index * 0.2}s;
  }
    @media (max-width: 768px) {
    margin-left: 50px;
    margin-bottom: 3rem;
    
    &.animate-right {
      animation: ${slideInLeft} 0.8s ease-out forwards;
      animation-delay: ${props => props.index * 0.2}s;
    }
  }
  
  @media (max-width: 480px) {
    margin-left: 40px;
    margin-bottom: 2.5rem;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 181, 246, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(100, 181, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
  
  ${TimelineItem}:nth-child(odd) & {
    margin-left: 0;
  }
  
  ${TimelineItem}:nth-child(even) & {
    margin-left: 55%;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(100, 181, 246, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(100, 181, 246, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    
    ${TimelineItem}:nth-child(odd) & {
      right: -30px;
      border-left-color: rgba(15, 23, 42, 0.8);
    }
    
    ${TimelineItem}:nth-child(even) & {
      left: -30px;
      border-right-color: rgba(15, 23, 42, 0.8);
    }
  }
    @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 0 !important;
    padding: 1.5rem;
    
    &::before {
      left: -15px !important;
      right: auto !important;
      border-right-color: rgba(15, 23, 42, 0.8) !important;
      border-left-color: transparent !important;
      border-width: 10px;
    }
  }
  
  @media (max-width: 480px) {
    width: calc(100% - 50px);
    padding: 1.2rem;
    
    &::before {
      left: -12px !important;
      border-width: 8px;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  border-radius: 50%;
  border: 4px solid rgba(15, 23, 42, 0.9);
  box-shadow: 
    0 0 20px rgba(100, 181, 246, 0.6),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  z-index: 10;
  animation: ${pulse} 2s infinite;
  animation-delay: ${props => props.index * 0.3}s;
  
  @media (max-width: 768px) {
    left: 15px;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border: 3px solid rgba(15, 23, 42, 0.9);
  }
  
  @media (max-width: 480px) {
    left: 10px;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(15, 23, 42, 0.9);
  }
`;

const EventDate = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const EventTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 1rem;
  line-height: 1.4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const EventDescription = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  ${props => props.status === 'upcoming' && `
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(29, 78, 216, 0.8) 100%);
    color: #dbeafe;
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  `}
  
  ${props => props.status === 'deadline' && `
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%);
    color: #fecaca;
    border-color: rgba(239, 68, 68, 0.3);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  `}
  
  ${props => props.status === 'extended' && `
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.8) 100%);
    color: #fef3c7;
    border-color: rgba(245, 158, 11, 0.3);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  `}
`;

const KeyDates = () => {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  const keyDates = [
    {
      date: "November 15, 2025",
      title: "Deadline of Full Paper Submission",
      description: "Final deadline for complete paper submissions including all supporting documents and materials.",
      status: "deadline"
    },
    {
      date: "December 16, 2025",
      title: "Acceptance Notification",
      description: "Authors will be notified about the acceptance or rejection of their papers along with reviewer comments.",
      status: "upcoming"
    },
    {
      date: "January 10, 2026",
      title: "Camera Ready Paper Submission",
      description: "Final version of accepted papers must be submitted incorporating the reviewer suggestions and comments.",
      status: "deadline"
    },
    {
      date: "January 15, 2026",
      title: "Registration Deadline",
      description: "Final deadline for conference registration. All participants must complete their registration by this date.",
      status: "deadline"
    }
  ];

  // Function to calculate the path that follows card borders
  const getTimelinePath = () => {
    if (!timelineRef.current || itemsRef.current.length === 0) return '';
    
    const containerRect = timelineRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const centerX = containerWidth / 2;
    
    let path = `M ${centerX} 0`;
    
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      const itemRect = item.getBoundingClientRect();
      const itemRelativeTop = itemRect.top - containerRect.top + 40; // Dot position
      
      if (index % 2 === 0) {
        // Odd items (left side) - curve to the right edge
        const rightEdge = centerX + (containerWidth * 0.45) / 2;
        path += ` Q ${centerX + 30} ${itemRelativeTop - 20} ${rightEdge} ${itemRelativeTop}`;
        path += ` Q ${centerX + 30} ${itemRelativeTop + 20} ${centerX} ${itemRelativeTop + 60}`;
      } else {
        // Even items (right side) - curve to the left edge  
        const leftEdge = centerX - (containerWidth * 0.45) / 2;
        path += ` Q ${centerX - 30} ${itemRelativeTop - 20} ${leftEdge} ${itemRelativeTop}`;
        path += ` Q ${centerX - 30} ${itemRelativeTop + 20} ${centerX} ${itemRelativeTop + 60}`;
      }
    });
    
    return path;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            const animationClass = index % 2 === 0 ? 'animate-left' : 'animate-right';
            entry.target.classList.add(animationClass);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <PageContainer>
      <Container>
        <PageTitle>Key Dates</PageTitle>
        <PageSubtitle>Important deadlines and milestones for IEMENTech 2026</PageSubtitle>        <TimelineContainer ref={timelineRef}>
          <TimelineSVG>
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64b5f6" stopOpacity="1"/>
                <stop offset="50%" stopColor="#42a5f5" stopOpacity="1"/>
                <stop offset="100%" stopColor="#2196f3" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <path 
              className="zigzag-path"
              d="M450,50 Q400,180 450,310 Q500,440 450,570 Q400,700 450,830 Q500,960 450,1090 Q400,1220 450,1350"
              stroke="url(#zigzagGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8 4"
            />
            {/* Moving dots along the path */}
            <circle className="moving-dot" r="8" cx="450" cy="50">
              <animateMotion 
                dur="12s" 
                repeatCount="indefinite"
                path="M450,50 Q400,180 450,310 Q500,440 450,570 Q400,700 450,830 Q500,960 450,1090 Q400,1220 450,1350"
              />
            </circle>
            <circle className="moving-dot" r="6" cx="450" cy="50">
              <animateMotion 
                dur="12s" 
                repeatCount="indefinite"
                begin="3s"
                path="M450,50 Q400,180 450,310 Q500,440 450,570 Q400,700 450,830 Q500,960 450,1090 Q400,1220 450,1350"
              />
            </circle>
            <circle className="moving-dot" r="7" cx="450" cy="50">
              <animateMotion 
                dur="12s" 
                repeatCount="indefinite"
                begin="6s"
                path="M450,50 Q400,180 450,310 Q500,440 450,570 Q400,700 450,830 Q500,960 450,1090 Q400,1220 450,1350"
              />
            </circle>
            <circle className="moving-dot" r="5" cx="450" cy="50">
              <animateMotion 
                dur="12s" 
                repeatCount="indefinite"
                begin="9s"
                path="M450,50 Q400,180 450,310 Q500,440 450,570 Q400,700 450,830 Q500,960 450,1090 Q400,1220 450,1350"
              />
            </circle>
          </TimelineSVG>
          
          {keyDates.map((item, index) => (
            <TimelineItem 
              key={index} 
              index={index}
              ref={el => itemsRef.current[index] = el}
              data-index={index}
            >
              <TimelineDot index={index} />
              <TimelineContent>
                <EventDate>{item.date}</EventDate>
                <EventTitle>{item.title}</EventTitle>
                <EventDescription>{item.description}</EventDescription>
                <StatusBadge status={item.status}>
                  {item.status === 'upcoming' && 'Upcoming'}
                  {item.status === 'deadline' && 'Deadline'}
                  {item.status === 'extended' && 'Extended'}
                </StatusBadge>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </PageContainer>
  );
};

export default KeyDates;
