import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.95) 0%, rgba(10, 25, 50, 0.95) 50%, rgba(15, 35, 70, 0.95) 100%),
    url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 3rem 0 1rem 0;
  margin-top: 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #64b5f6;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  p, li {
    color: #e8eaed;
    line-height: 1.6;
    margin-bottom: 0.8rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: #e8eaed;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        
        &:hover {
          color: #64b5f6;
          transform: translateX(5px);
          text-shadow: 0 2px 4px rgba(100, 181, 246, 0.5);
        }
      }
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  .icon {
    color: #64b5f6;
    font-size: 1.1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #e8eaed;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  &:hover {
    color: #64b5f6;
    transform: translateY(-3px);
    text-shadow: 0 4px 8px rgba(100, 181, 246, 0.5);
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  text-align: center;
  color: #d1d5db;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  a {
    color: #64b5f6;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ffffff;
      text-decoration: underline;
      text-shadow: 0 2px 4px rgba(100, 181, 246, 0.5);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>IEMENTech 2026</h3>
            <p>
              9th International Conference on Electronics, Materials Engineering & Nano-Technology
            </p>
            <p>
              Organized by Dept. of ECE, Institute of Engineering & Management, Kolkata
            </p>
            <p>
              <strong>Date:</strong> 6th - 7th February, 2026<br/>
              <strong>Venue:</strong> IEM Gurukul Campus, Salt Lake, Kolkata
            </p>
          </FooterSection>
            <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/submissions">Call for Papers</Link></li>
              <li><Link to="/key-dates">Key Dates</Link></li>
              <li><Link to="/submissions">Submission Guidelines</Link></li>
              <li><Link to="/topics">Conference Topics</Link></li>
              <li><Link to="/committee/organizing">Committee</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Information</h3>
            <ContactItem>
              <FaMapMarkerAlt className="icon" />
              <div>
                IEM Gurukul Campus,<br/>
                Salt Lake, Sec V,<br/>
                Kolkata, India
              </div>
            </ContactItem>
            <ContactItem>
              <FaPhone className="icon" />
              <div>+91-33-2357-0000</div>
            </ContactItem>
            <ContactItem>
              <FaEnvelope className="icon" />
              <div>info@iementech2026.org</div>
            </ContactItem>
          </FooterSection>
          
          <FooterSection>
            <h3>Follow Us</h3>
            <p>Stay connected for updates and announcements</p>
            <SocialLinks>
              <SocialIcon href="#" target="_blank">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <FaInstagram />
              </SocialIcon>
            </SocialLinks>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
              <strong>Technical Co-Sponsor:</strong><br/>
              IEEE Kolkata Section
            </p>
          </FooterSection>
        </FooterContent>
          <Copyright>
          <p>© 2026 IEMENTech. All rights reserved. | Designed for Institute of Engineering & Management, Kolkata</p>
          <p style={{ marginTop: '0.5rem' }}>
            Site made by <a href="https://www.linkedin.com/in/sumitkumardas-ai/" target="_blank" rel="noopener noreferrer">Sumit Kumar Das</a>
          </p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
