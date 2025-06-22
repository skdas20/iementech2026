import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from '../components/Hero/Hero';

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

const cardHover = keyframes`
  0% { transform: perspective(400px) rotateY(0deg); }
  100% { transform: perspective(400px) rotateY(10deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const revealUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// About Section with scroll reveal animations
const AboutSection = styled.section`
  background: white;
  padding: 4rem 0;
  margin-top: -60px; // Reduce the gap from hero curved bottom
  position: relative;
  z-index: 2;
  overflow: hidden;
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  background-clip: text;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
  animation: ${revealUp} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 768px) {
    transform: translateY(30px);
    
    &.reveal {
      transform: translateY(0);
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 2rem;
`;

const Highlight = styled.div`
  background: linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(66, 165, 245, 0.2) 100%);
  border-left: 4px solid #64b5f6;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 181, 246, 0.2);
`;

const HighlightText = styled.p`
  color: #1565c0;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease-out 0.2s;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 768px) {
    transform: scale(0.8);
    
    &.reveal {
      transform: scale(1);
    }
  }
`;

const CollegeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 4rem 0;
  margin-top: 2rem;
  overflow: hidden;
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(250, 169, 47, 0.1);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &.reveal {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInUp} 1s ease-out;
    animation-delay: ${props => props.delay || '0s'};
    animation-fill-mode: both;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #64b5f6;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(100, 181, 246, 0.5);
`;

const StatLabel = styled.p`
  color: #64748b;
  font-weight: 500;
  margin: 0;
`;

// Conference Highlights Section
const HighlightsSection = styled.section`
  background: white;
  padding: 5rem 0;
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HighlightsTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  perspective: 1000px;
  
  /* First 3 cards in first row - each spans 2 columns */
  & > div:nth-child(1) {
    grid-row: 1;
    grid-column: 1 / 3;
  }
  
  & > div:nth-child(2) {
    grid-row: 1;
    grid-column: 3 / 5;
  }
  
  & > div:nth-child(3) {
    grid-row: 1;
    grid-column: 5 / 7;
  }
  
  /* Last 2 cards in second row - each spans 2 columns, centered */
  & > div:nth-child(4) {
    grid-row: 2;
    grid-column: 2 / 4;
  }
  
  & > div:nth-child(5) {
    grid-row: 2;
    grid-column: 4 / 6;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
    
    & > div:nth-child(1), 
    & > div:nth-child(2) {
      grid-row: 1;
      grid-column: auto;
    }
    
    & > div:nth-child(3), 
    & > div:nth-child(4) {
      grid-row: 2;
      grid-column: auto;
    }
    
    & > div:nth-child(5) {
      grid-row: 3;
      grid-column: 1 / 3;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    /* Reset all grid positioning for mobile */
    & > div {
      grid-row: auto !important;
      grid-column: auto !important;
    }
  }
`;

const HighlightCard = styled.div`
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
    padding: 1.5rem 1.2rem;
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: rotateY(180deg);
  }
  
  &:nth-child(even) .card-back {
    background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  }
  
  &:nth-child(3n) .card-back {
    background: linear-gradient(135deg, #4facfe 0%, #2196f3 100%);
  }
  
  &:nth-child(4n) .card-back {
    background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  }
  
  &:nth-child(5n) .card-back {
    background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
  }
`;

const HighlightIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  .card-front & {
    color: #64b5f6;
  }
  
  .card-back & {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const HighlightTitle = styled.h3`
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

const HighlightDescription = styled.p`
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  
  .card-front & {
    color: #64748b;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  
  .card-back & {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const HighlightFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  text-align: left;
  width: 100%;
  overflow: hidden;
  
  li {
    padding: 0.25rem 0;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    position: relative;
    padding-left: 1rem;
    line-height: 1.2;
    word-wrap: break-word;
    
    &::before {
      content: "✦";
      color: white;
      font-weight: 600;
      position: absolute;
      left: 0;
      top: 0.25rem;
      font-size: 0.6rem;
    }
  }
`;

// Call for Papers Section
const CallPapersSection = styled.section`
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.95) 0%, rgba(10, 25, 50, 0.95) 50%, rgba(15, 35, 70, 0.95) 100%),
    url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(100, 181, 246, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(64, 181, 246, 0.1) 0%, transparent 50%),
      rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const CallPapersContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CallPapersTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #ffffff 0%, #64b5f6 50%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CallPapersText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  color: #e8eaed;
`;

const GuidelinesContainer = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(100, 181, 246, 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  margin: 2rem auto 3rem auto;
  max-width: 900px;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1.5rem auto 2rem auto;
  }
`;

const GuidelinesTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #64b5f6;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GuidelinesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.8rem 0;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    position: relative;
    padding-left: 2rem;
    line-height: 1.6;
    
    &::before {
      content: "✦";
      color: #64b5f6;
      font-weight: 600;
      position: absolute;
      left: 0;
      top: 0.8rem;
      font-size: 1rem;
      text-shadow: 0 0 10px rgba(100, 181, 246, 0.5);
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding-left: 1.5rem;
    }
  }
`;

const IEEELink = styled.a`
  color: #64b5f6;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(100, 181, 246, 0.3);
  
  &:hover {
    color: #42a5f5;
    border-bottom-color: #42a5f5;
    text-shadow: 0 0 10px rgba(100, 181, 246, 0.8);
  }
`;

const CTAButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const CTAButton = styled.button`
  background: ${props => props.primary ? '#64b5f6' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'white'};
  border: 2px solid #64b5f6;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  &:hover {
    background: ${props => props.primary ? '#42a5f5' : '#64b5f6'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(100, 181, 246, 0.4);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

const shimmerEffect = keyframes`
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(400%) skewX(-15deg);
  }
`;

const BrochureButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, 
    rgba(5, 15, 35, 0.95) 0%, 
    rgba(10, 25, 50, 0.95) 25%, 
    rgba(15, 35, 70, 0.95) 50%, 
    rgba(20, 45, 90, 0.95) 75%, 
    rgba(25, 55, 110, 0.95) 100%
  );
  color: #f8fafc;
  padding: 1.2rem 2.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(100, 181, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(100, 181, 246, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  transform: skewX(-8deg);
  
  /* Silvery shine effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3) 20%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.3) 80%,
      transparent
    );
    animation: ${shimmerEffect} 5s infinite;
    z-index: 1;
  }
  
  /* Inner content */
  & > * {
    position: relative;
    z-index: 2;
    transform: skewX(8deg); /* Counter the parent skew */
  }
  
  &:hover {
    transform: skewX(-8deg) translateY(-3px) scale(1.02);
    box-shadow: 
      0 12px 35px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(100, 181, 246, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(100, 181, 246, 0.5);
    color: #64b5f6;
    
    &::before {
      animation-duration: 2s;
    }
  }
  
  &:active {
    transform: skewX(-8deg) translateY(-1px) scale(0.98);
  }
  
  .icon {
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }
  
  &:hover .icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    transform: skewX(-6deg);
    
    &:hover {
      transform: skewX(-6deg) translateY(-2px) scale(1.01);
    }
    
    & > * {      transform: skewX(6deg);    }  }
`;

const TopicsSection = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s ease-out;
  
  &.reveal {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TopicsTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
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
    transition: transform 0.6s;
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
    padding: 2rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(100, 181, 246, 0.2);
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
    &:nth-child(even) .card-back {
    background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  }
  
  &:nth-child(3n) .card-back {
    background: linear-gradient(135deg, #4facfe 0%, #2196f3 100%);
  }
  
  &:nth-child(4n) .card-back {
    background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  }
  
  &:nth-child(5n) .card-back {
    background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
  }
`;

const TopicTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  
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

const TopicIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  .card-front & {
    color: #64b5f6;
  }
  
  .card-back & {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const TopicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  
  li {
    padding: 0.5rem 0;
    font-size: 0.95rem;
    position: relative;
    
    .card-front & {
      color: #64748b;
      
      &::before {
        content: "•";
        color: #64b5f6;
        font-weight: 600;
        margin-right: 0.5rem;
      }
    }
    
    .card-back & {
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      
      &::before {
        content: "✦";
        color: white;
        font-weight: 600;
        margin-right: 0.5rem;
      }
    }
  }
`;

const Home = () => {  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const highlightsRef = useRef(null);
  const callPapersContentRef = useRef(null);
  const topicsRef = useRef(null);
  const textContentRef = useRef(null);
  const imageContentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          
          // Also reveal child cards with staggered delay
          const cards = entry.target.querySelectorAll('[data-card]');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('reveal');
            }, index * 150);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);    // Observe all sections
    const elements = [
      aboutRef.current,
      statsRef.current,
      highlightsRef.current,
      callPapersContentRef.current,
      topicsRef.current,
      textContentRef.current,
      imageContentRef.current
    ].filter(Boolean);

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <HomeContainer>
      <Hero />
        <AboutSection ref={aboutRef}>
        <Container>
          <SectionTitle>Overview</SectionTitle>
          
          <ContentGrid>            <TextContent ref={textContentRef}>
              <Description>
                9th International Conference on Electronics, Materials Engineering and Nano-Technology  
                (IEMENTech 2026) will be organized by Dept. of ECE, Institute of Engineering & Management, 
                Kolkata with Technical Co-Sponsorship of IEEE Kolkata Section at IEM Gurukul Campus, 
                Saltlake, Kolkata, India during 6th February to 7th February, 2026.
              </Description>
              
              <Highlight>
                <HighlightText>
                  The scientific deliberations in the form of invited talks and contributory papers 
                  will cover diversified topics on Electronics, Materials Engineering, Nano Science 
                  and Technology.
                </HighlightText>
              </Highlight>
              
              <BrochureButton 
                href="https://drive.google.com/file/d/1sj4-OZY7GPiKCiG41MLfFW70yv5fMrCv/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">📄</span>
                Download Conference Brochure
              </BrochureButton>
            </TextContent>
            
            <ImageContainer ref={imageContentRef}>
              <CollegeImage 
                src="/assets/guru.png" 
                alt="IEM Gurukul Campus" 
              />
            </ImageContainer>
          </ContentGrid>
        </Container>      </AboutSection>
      
      <StatsSection ref={statsRef}>
        <Container>
          <StatsGrid>            <StatCard delay="0.1s" data-card>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years of Excellence</StatLabel>
            </StatCard>
            
            <StatCard delay="0.2s" data-card>
              <StatNumber>5000+</StatNumber>
              <StatLabel>Students</StatLabel>
            </StatCard>
            
            <StatCard delay="0.3s" data-card>
              <StatNumber>200+</StatNumber>
              <StatLabel>Faculty Members</StatLabel>
            </StatCard>
            
            <StatCard delay="0.4s" data-card>
              <StatNumber>50+</StatNumber>
              <StatLabel>Research Projects</StatLabel>
            </StatCard>          </StatsGrid>
        </Container>
      </StatsSection>
      
      <HighlightsSection ref={highlightsRef}>
        <Container>
          <HighlightsTitle>Conference Highlights</HighlightsTitle>          <HighlightsGrid>
            <HighlightCard delay="0.1s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <HighlightIcon>🎤</HighlightIcon>
                  <HighlightTitle>Invited Talks</HighlightTitle>
                  <HighlightDescription>
                    Eminent Scientists, Professors & Industrialists sharing their expertise and research insights.
                  </HighlightDescription>
                </div>
                <div className="card-back">
                  <HighlightIcon>🌟</HighlightIcon>
                  <HighlightTitle>Expert Speakers</HighlightTitle>
                  <HighlightFeatures>
                    <li>Renowned Scientists</li>
                    <li>Industry Leaders</li>
                    <li>Academic Pioneers</li>
                    <li>Research Innovators</li>
                  </HighlightFeatures>
                </div>
              </div>
            </HighlightCard>
            
            <HighlightCard delay="0.2s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <HighlightIcon>🏆</HighlightIcon>
                  <HighlightTitle>Best Paper Award</HighlightTitle>
                  <HighlightDescription>
                    Outstanding research papers will be recognized and awarded for their innovation and quality.
                  </HighlightDescription>
                </div>
                <div className="card-back">
                  <HighlightIcon>🎖️</HighlightIcon>
                  <HighlightTitle>Recognition Program</HighlightTitle>
                  <HighlightFeatures>
                    <li>Research Excellence</li>
                    <li>Innovation Awards</li>
                    <li>Quality Assessment</li>
                    <li>Publication Opportunities</li>
                  </HighlightFeatures>
                </div>
              </div>
            </HighlightCard>
            
            <HighlightCard delay="0.3s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <HighlightIcon>👩‍💼</HighlightIcon>
                  <HighlightTitle>IEEE WIE Session</HighlightTitle>
                  <HighlightDescription>
                    IEEE Women in Engineering sponsored session promoting gender diversity in technology.
                  </HighlightDescription>
                </div>
                <div className="card-back">
                  <HighlightIcon>🚀</HighlightIcon>
                  <HighlightTitle>Women in Engineering</HighlightTitle>
                  <HighlightFeatures>
                    <li>Gender Diversity</li>
                    <li>Women Leadership</li>
                    <li>Career Development</li>
                    <li>Networking Platform</li>
                  </HighlightFeatures>
                </div>
              </div>
            </HighlightCard>
            
            <HighlightCard delay="0.4s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <HighlightIcon>📋</HighlightIcon>
                  <HighlightTitle>Poster Session</HighlightTitle>
                  <HighlightDescription>
                    Interactive poster presentations showcasing latest research findings and innovations.
                  </HighlightDescription>
                </div>
                <div className="card-back">
                  <HighlightIcon>🔬</HighlightIcon>
                  <HighlightTitle>Research Display</HighlightTitle>
                  <HighlightFeatures>
                    <li>Visual Presentations</li>
                    <li>Interactive Sessions</li>
                    <li>Research Showcase</li>
                    <li>Academic Discussion</li>
                  </HighlightFeatures>
                </div>
              </div>
            </HighlightCard>
            
            <HighlightCard delay="0.5s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <HighlightIcon>🏭</HighlightIcon>
                  <HighlightTitle>Industry Session</HighlightTitle>
                  <HighlightDescription>
                    Industry professionals sharing real-world applications and market trends in technology.
                  </HighlightDescription>
                </div>
                <div className="card-back">
                  <HighlightIcon>💼</HighlightIcon>
                  <HighlightTitle>Industry Insights</HighlightTitle>
                  <HighlightFeatures>
                    <li>Market Trends</li>
                    <li>Practical Applications</li>
                    <li>Technology Transfer</li>
                    <li>Career Opportunities</li>
                  </HighlightFeatures>
                </div>
              </div>
            </HighlightCard>
          </HighlightsGrid>
        </Container>
      </HighlightsSection>
        <CallPapersSection>
        <Container>          <CallPapersContent ref={callPapersContentRef}>
            <CallPapersTitle>Call for Papers</CallPapersTitle>
            <CallPapersText>
              Submit your research papers and be part of the premier international conference on Electronics, 
              Materials Engineering & Nano-Technology. Join researchers and industry experts from around the globe.
            </CallPapersText>
            
            <GuidelinesContainer>
              <GuidelinesTitle>SUBMISSION GUIDELINES</GuidelinesTitle>
              <GuidelinesList>
                <li>Original unpublished papers are invited as per the following guideline</li>
                <li>
                  Full paper, not exceeding 6 pages (including figures and tables), should be submitted in{' '}
                  <IEEELink 
                    href="https://www.ieee.org/conferences/publishing/templates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    IEEE format
                  </IEEELink>{' '}
                  through EDAS on or before the deadline
                </li>
              </GuidelinesList>
            </GuidelinesContainer>
            
            <CTAButtonsContainer>
              <CTAButton primary>Submit Paper</CTAButton>
              <CTAButton>View Guidelines</CTAButton>
            </CTAButtonsContainer>
          </CallPapersContent>
        </Container>
      </CallPapersSection>
        <TopicsSection ref={topicsRef}>
        <Container>
          <TopicsTitle>Featured Conference Topics</TopicsTitle>
          <TopicsGrid>
            <TopicCard delay="0.1s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <TopicIcon>📡</TopicIcon>
                  <TopicTitle>Electronics & Communication</TopicTitle>
                  <TopicList>
                    <li>VLSI Design & Technology</li>
                    <li>Signal Processing</li>
                    <li>Wireless Communication</li>
                  </TopicList>
                </div>
                <div className="card-back">
                  <TopicIcon>⚡</TopicIcon>
                  <TopicTitle>Advanced Topics</TopicTitle>
                  <TopicList>
                    <li>IoT & Embedded Systems</li>
                    <li>Microwave Engineering</li>
                    <li>5G Technologies</li>
                    <li>Digital Signal Processing</li>
                  </TopicList>
                </div>
              </div>
            </TopicCard>
            
            <TopicCard delay="0.2s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <TopicIcon>🔬</TopicIcon>
                  <TopicTitle>Materials Engineering</TopicTitle>
                  <TopicList>
                    <li>Advanced Materials</li>
                    <li>Composite Materials</li>
                    <li>Smart Materials</li>
                  </TopicList>
                </div>
                <div className="card-back">
                  <TopicIcon>⚗️</TopicIcon>
                  <TopicTitle>Specialized Materials</TopicTitle>
                  <TopicList>
                    <li>Biomaterials</li>
                    <li>Material Characterization</li>
                    <li>Polymer Science</li>
                    <li>Metallurgy</li>
                  </TopicList>
                </div>
              </div>
            </TopicCard>
            
            <TopicCard delay="0.3s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <TopicIcon>🧬</TopicIcon>
                  <TopicTitle>Nano-Technology</TopicTitle>
                  <TopicList>
                    <li>Nanomaterials</li>
                    <li>Nanoelectronics</li>
                    <li>Nano-fabrication</li>
                  </TopicList>
                </div>
                <div className="card-back">
                  <TopicIcon>🔬</TopicIcon>
                  <TopicTitle>Nano Applications</TopicTitle>
                  <TopicList>
                    <li>Nano-sensors</li>
                    <li>Nano-medicine</li>
                    <li>Quantum Dots</li>
                    <li>Carbon Nanotubes</li>
                  </TopicList>
                </div>
              </div>
            </TopicCard>
            
            <TopicCard delay="0.4s" data-card>
              <div className="card-inner">
                <div className="card-front">
                  <TopicIcon>🤖</TopicIcon>
                  <TopicTitle>Emerging Technologies</TopicTitle>
                  <TopicList>
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Quantum Computing</li>
                  </TopicList>
                </div>
                <div className="card-back">
                  <TopicIcon>🚀</TopicIcon>
                  <TopicTitle>Future Tech</TopicTitle>
                  <TopicList>
                    <li>Renewable Energy</li>
                    <li>Industry 4.0</li>
                    <li>Blockchain</li>
                    <li>Edge Computing</li>
                  </TopicList>
                </div>
              </div>
            </TopicCard>
          </TopicsGrid>
        </Container>
      </TopicsSection>
    </HomeContainer>
  );
};

export default Home;
