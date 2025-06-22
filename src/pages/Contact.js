import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

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
  }
  50% {
    transform: scale(1.05);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(100, 181, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(100, 181, 246, 0.8);
  }
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
      radial-gradient(circle at 20% 30%, rgba(100, 181, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(66, 165, 245, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0.5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
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
  font-size: 1.3rem;
  color: #64748b;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1rem;
  }
`;

const ChatbotCard = styled.div`
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.95) 0%, rgba(10, 25, 50, 0.95) 50%, rgba(15, 35, 70, 0.95) 100%);
  backdrop-filter: blur(15px);
  padding: 2.5rem;
  border-radius: 25px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(100, 181, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(100, 181, 246, 0.3);
  color: white;
  max-width: 1200px;
  width: 100%;
  height: fit-content;
  max-height: 950px;
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 
      0 35px 70px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(100, 181, 246, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(100, 181, 246, 0.5);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-height: 80vh;
    max-width: 100%;
    margin: 0 0.5rem;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    max-height: 85vh;
    margin: 0 0.25rem;
    border-radius: 15px;
  }
`;

const ChatbotTitle = styled.h2`
  color: #64b5f6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 650px;
  max-height: 700px;
  
  @media (max-width: 768px) {
    min-height: 60vh;
    max-height: 65vh;
  }
  
  @media (max-width: 480px) {
    min-height: 65vh;
    max-height: 70vh;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 1px solid rgba(100, 181, 246, 0.2);
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(100, 181, 246, 0.5);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    border-radius: 12px;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    border-radius: 10px;
    margin-bottom: 0.6rem;
  }
`;

const ChatMessage = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  animation: ${({ isUser }) => isUser ? slideInRight : slideInLeft} 0.3s ease-out;
  transform-origin: ${({ isUser }) => isUser ? 'right' : 'left'};
  
  &.user {
    flex-direction: row-reverse;
    
    .message-bubble {
      background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
      color: white;
      margin-left: 2rem;
      margin-right: 0;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(100, 181, 246, 0.4);
      }
    }
  }
  
  &.bot {
    .message-bubble {
      background: rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      margin-right: 2rem;
      margin-left: 0;
      border: 1px solid rgba(100, 181, 246, 0.2);
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
      }
    }
  }
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    
    &.user .message-bubble {
      margin-left: 1rem;
    }
    
    &.bot .message-bubble {
      margin-right: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.6rem;
    
    &.user .message-bubble {
      margin-left: 0.5rem;
    }
    
    &.bot .message-bubble {
      margin-right: 0.5rem;
    }
  }
`;

const MessageBubble = styled.div`
  padding: 0.8rem 1.2rem;
  border-radius: 18px;
  max-width: 80%;
  word-wrap: break-word;
  font-size: 0.9rem;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    border-radius: 15px;
    max-width: 85%;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    max-width: 90%;
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

const MessageAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  animation: ${bounce} 0.6s ease-out;
  transition: all 0.3s ease;
  
  &.user {
    background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(100, 181, 246, 0.3);
    
    &:hover {
      transform: scale(1.1);
      animation: ${pulse} 1s infinite;
    }
  }
  
  &.bot {
    background: rgba(100, 181, 246, 0.2);
    color: #64b5f6;
    border: 1px solid rgba(100, 181, 246, 0.3);
    box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);
    
    &:hover {
      transform: scale(1.1);
      animation: ${pulse} 1s infinite;
      background: rgba(100, 181, 246, 0.3);
    }
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const CharacterCounter = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
  margin-top: 0.3rem;
  transition: color 0.3s ease;
  
  &.warning {
    color: #ff9800;
  }
  
  &.error {
    color: #f44336;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(100, 181, 246, 0.3);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 50px;
  resize: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }
  
  &:focus {
    outline: none;
    border-color: #64b5f6;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 4px rgba(100, 181, 246, 0.1);
    animation: ${glow} 2s infinite;
  }
  
  &:hover:not(:focus) {
    border-color: rgba(100, 181, 246, 0.5);
    background: rgba(255, 255, 255, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    min-height: 45px;
    
    &::placeholder {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    min-height: 40px;
    border-radius: 20px;
    
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

const ChatSendButton = styled.button`
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.3);
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(100, 181, 246, 0.5);
    animation: ${pulse} 1.5s infinite;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    animation: none;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const QuickSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(100, 181, 246, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(100, 181, 246, 0.1);
  
  @media (max-width: 768px) {
    gap: 0.4rem;
    padding: 0.4rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 0.3rem;
    padding: 0.3rem;
    border-radius: 8px;
  }
`;

const SuggestionChip = styled.button`
  background: rgba(100, 181, 246, 0.2);
  border: 1px solid rgba(100, 181, 246, 0.3);
  color: #64b5f6;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(100, 181, 246, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 181, 246, 0.3);
    border-color: rgba(100, 181, 246, 0.5);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.7rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.65rem;
    border-radius: 10px;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-bottom: 1rem;
  
  .dots {
    display: flex;
    gap: 0.2rem;
    
    span {
      width: 4px;
      height: 4px;
      background: rgba(100, 181, 246, 0.6);
      border-radius: 50%;
      animation: ${pulse} 1.4s infinite ease-in-out;
      
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
`;

const MessageTimestamp = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.2rem;
  display: block;
  text-align: ${({ isUser }) => isUser ? 'right' : 'left'};
`;

const MessageStatus = styled.span`
  font-size: 0.7rem;
  color: rgba(100, 181, 246, 0.7);
  margin-left: 0.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(100, 181, 246, 0.2);
  margin-bottom: 1rem;
`;

const ChatStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(100, 181, 246, 0.8);
  font-size: 0.8rem;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4caf50;
  animation: ${pulse} 2s infinite;
`;

const WelcomeMessage = styled.div`
  background: rgba(100, 181, 246, 0.1);
  border: 1px solid rgba(100, 181, 246, 0.2);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #64b5f6;
  font-size: 0.9rem;
  animation: ${fadeInUp} 0.5s ease-out;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SampleQuestions = styled.div`
  background: rgba(100, 181, 246, 0.08);
  border: 1px solid rgba(100, 181, 246, 0.15);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: none;
  
  h4 {
    color: #64b5f6;
    font-size: 0.85rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    text-align: center;
  }
  
  .questions-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.3rem;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    
    .question-item {
      padding: 0.2rem 0;
      cursor: pointer;
      border-radius: 6px;
      padding: 0.3rem 0.5rem;
      transition: all 0.2s ease;
      
      &:hover {
        background: rgba(100, 181, 246, 0.1);
        color: #64b5f6;
      }
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! 👋 I\'m here to help you with information about IEMENTech 2026. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'end',
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Simulate connection status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(navigator.onLine);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const GEMINI_API_KEY = 'AIzaSyAbSCHasvsdbe0GFh2USyqlxp1Rwsr4wTo';
  const suggestions = [
    "What are the conference dates?",
    "How much are the registration fees?",
    "What topics are covered?",
    "What are the submission deadlines?",
    "Where is the venue?",
    "How to submit papers?"
  ];

  const sampleQuestions = [
    "When is IEMENTech 2026?",
    "What are the registration fees?",
    "What topics can I submit papers on?",
    "Where is the conference venue?",
    "What are submission deadlines?",
    "How do I register?",
    "What's included in registration?",
    "Contact information?",
    "Paper format guidelines?",
    "Early bird discounts?",
    "IEEE member benefits?",
    "Accommodation details?"
  ];

  const callGeminiAPI = async (query) => {
    // Always use local fallback logic first for better reliability
    const lowerQuery = query.toLowerCase();
    
    // Check if it's a common query we can answer locally
    if (lowerQuery.includes('date') || lowerQuery.includes('when') || lowerQuery.includes('schedule')) {
      return "🗓️ **IEMENTech 2026 Conference Dates:**\n\n**Conference:** 6th-7th February, 2026\n📍 **Venue:** IEM Gurukul Campus, Salt Lake, Kolkata\n\n**Key Dates:**\n• Paper Submission: 15th November, 2025\n• Acceptance Notification: 16th December, 2025\n• Camera Ready: 10th January, 2026\n• Registration: 15th January, 2026";
    }
    
    if (lowerQuery.includes('fee') || lowerQuery.includes('registration') || lowerQuery.includes('cost')) {
      return "💰 **Registration Fees (including 18% GST):**\n\n**Students:**\n• Early Bird: ₹9,500\n• Late: ₹10,000\n• IEEE Members: ₹9,000\n\n**Researchers:**\n• Early Bird: ₹10,500\n• Late: ₹11,000\n• IEEE Members: ₹10,000\n\n**Industry:**\n• Early Bird: ₹12,500\n• Late: ₹13,000\n• IEEE Members: ₹12,000\n\n**Foreign Delegates:**\n• Early Bird: $300\n• Late: $350\n• IEEE Members: $250";
    }
    
    if (lowerQuery.includes('topic') || lowerQuery.includes('subject') || lowerQuery.includes('area') || lowerQuery.includes('track')) {
      return "📚 **Conference Topics:**\n\n• **Electronics:** Semiconductor Device Physics, VLSI & Embedded Systems\n• **Materials:** Nano-Materials & Opto-Electronics, Micro-Electronic Device Fabrication\n• **Energy:** Renewable Energy, Industrial Electronics\n• **Communication:** Wireless Communication, Signal & Image Processing\n• **Modern Tech:** AI, ML & IoT, MEMS and Sensors\n• **Engineering:** Microwave & Antenna, Robotics & Mechatronics\n\nAnd many more exciting areas! 🚀";
    }
    
    if (lowerQuery.includes('venue') || lowerQuery.includes('location') || lowerQuery.includes('address') || lowerQuery.includes('where')) {
      return "📍 **Venue Information:**\n\n**Location:** IEM Gurukul Campus\n**Address:** Institute of Engineering & Management\nGurukul, Y-12, Block-EP, Sector-V\nSalt Lake Electronics Complex\nKolkata-700091, India\n\n🌐 **Website:** https://iementech.iem.edu.in/";
    }
    
    if (lowerQuery.includes('submit') || lowerQuery.includes('paper') || lowerQuery.includes('guideline')) {
      return "📝 **Submission Guidelines:**\n\n• **Original unpublished papers** invited\n• **Maximum 6 pages** (including figures and tables)\n• **IEEE format** required\n• **Submit through EDAS**\n\n**Deadline:** 15th November, 2025\n\n📧 For submission queries: iementech.conf@gmail.com";
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('email')) {
      return "📞 **Contact Information:**\n\n**Email:** iementech.conf@gmail.com\n\n**Phone Numbers:**\n• +91-33 2357-2059/2969\n• +91-9830998392\n• +91-9830780778\n\n**Website:** https://iementech.iem.edu.in/\n\nFeel free to reach out for any queries! 😊";
    }
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('help')) {
      return "👋 **Hello! Welcome to IEMENTech 2026!**\n\nI'm here to help you with:\n• Conference dates and venue\n• Registration fees and deadlines\n• Topics and submission guidelines\n• Contact information\n\nWhat would you like to know? 😊";
    }
    
    // Default helpful response for any other query
    return "🤖 **I'm here to help with IEMENTech 2026!**\n\nTry asking about:\n• Conference dates and venue\n• Registration fees\n• Topics and tracks\n• Submission guidelines\n• Contact information\n\nOr reach out directly:\n📧 iementech.conf@gmail.com\n📞 +91-33 2357-2059/2969";
  };
  
  const handleSendMessage = async (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = { 
      type: 'user', 
      content: text, 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay for realism
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    try {
      const botResponse = await callGeminiAPI(text);
      setIsTyping(false);
      const botMessage = { 
        type: 'bot', 
        content: botResponse, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setIsTyping(false);
      const errorMessage = { 
        type: 'bot', 
        content: "I apologize for the technical issue. Please contact us directly:\n\n📧 iementech.conf@gmail.com\n📞 +91-33 2357-2059/2969",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <ContactContainer>
      <Container>
        <Title>Contact Us</Title>
        <Subtitle>
          Chat with our AI assistant for instant answers about IEMENTech 2026
        </Subtitle>
        
        <ContentGrid>
          <ChatbotCard>
            <ChatHeader>
              <ChatbotTitle>🤖 Conference Assistant</ChatbotTitle>
              <ChatStatus>
                <StatusDot style={{ background: isOnline ? '#4caf50' : '#f44336' }} />
                {isOnline ? 'Online' : 'Offline'}
              </ChatStatus>
            </ChatHeader>
              <WelcomeMessage>
              Welcome to IEMENTech 2026! I'm here to help you with conference information. 
              Try asking about dates, registration, topics, or use the suggestions below! 🚀
            </WelcomeMessage>
            
            <SampleQuestions>
              <h4>💡 Ask me anything about:</h4>
              <div className="questions-list">
                {sampleQuestions.map((question, index) => (
                  <div 
                    key={index} 
                    className="question-item"
                    onClick={() => handleSendMessage(question)}
                  >
                    • {question}
                  </div>
                ))}
              </div>
            </SampleQuestions>
            
            <ChatContainer>
              <ChatMessages>
                {messages.map((message, index) => (
                  <ChatMessage key={index} className={message.type} isUser={message.type === 'user'}>
                    <MessageAvatar className={message.type}>
                      {message.type === 'user' ? '👤' : '🤖'}
                    </MessageAvatar>
                    <div>                      <MessageBubble className="message-bubble">
                        {message.content.split('\n').map((line, i) => {
                          // Remove markdown formatting for cleaner display
                          const cleanLine = line
                            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers
                            .replace(/\*(.*?)\*/g, '$1'); // Remove italic markers
                          return (
                            <div key={i}>{cleanLine}</div>
                          );
                        })}
                        <MessageTimestamp isUser={message.type === 'user'}>
                          {message.timestamp ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Now'}
                          {message.type === 'user' && (
                            <MessageStatus>
                              ✓✓ <span style={{ color: '#4caf50' }}>Read</span>
                            </MessageStatus>
                          )}
                        </MessageTimestamp>
                      </MessageBubble>
                    </div>
                  </ChatMessage>
                ))}
                
                {isTyping && (
                  <TypingIndicator>
                    <MessageAvatar className="bot">🤖</MessageAvatar>
                    <div>
                      Assistant is typing
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </TypingIndicator>
                )}
                <div ref={messagesEndRef} />
              </ChatMessages>
              
              <QuickSuggestions>
                {suggestions.map((suggestion, index) => (
                  <SuggestionChip 
                    key={index} 
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </SuggestionChip>
                ))}
              </QuickSuggestions>
              
              <ChatInputContainer>
                <InputWrapper>                  <ChatInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question here... (e.g., 'When is the conference?' or 'What are the fees?')"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    maxLength={500}
                  />
                  <CharacterCounter className={inputValue.length > 400 ? 'warning' : inputValue.length > 450 ? 'error' : ''}>
                    {inputValue.length}/500
                  </CharacterCounter>
                </InputWrapper>
                <ChatSendButton 
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping || inputValue.length > 500}
                  title={inputValue.length > 500 ? 'Message too long' : 'Send message'}
                >
                  ➤
                </ChatSendButton>
              </ChatInputContainer>
            </ChatContainer>
          </ChatbotCard>
        </ContentGrid>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
