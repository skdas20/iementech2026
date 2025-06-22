import React from 'react';
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

const SubmissionsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  margin-bottom: 3rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const GuidelinesContainer = styled.div`
  background: linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(66, 165, 245, 0.05) 100%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(100, 181, 246, 0.3);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const GuidelinesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const GuidelinesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 1rem 0;
    font-size: 1.1rem;
    color: #1e293b;
    position: relative;
    padding-left: 2.5rem;
    line-height: 1.6;
    
    &::before {
      content: "✦";
      color: #64b5f6;
      font-weight: 600;
      position: absolute;
      left: 0;
      top: 1rem;
      font-size: 1rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding-left: 2rem;
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

const Content = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #1e3c72;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #64b5f6;
  padding-left: 1.5rem;
  font-weight: 700;
`;

const Text = styled.p`
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 0.8rem 0;
    padding-left: 2.5rem;
    position: relative;
    color: #1e293b;
    line-height: 1.7;
    font-size: 1rem;
    
    &::before {
      content: "•";
      color: #64b5f6;
      font-weight: bold;
      position: absolute;
      left: 1rem;
      font-size: 1.2rem;
    }
  }
`;

const CTAButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const CTAButton = styled.button`
  background: ${props => props.primary ? '#64b5f6' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#64b5f6'};
  border: 2px solid #64b5f6;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: ${props => props.primary ? '#42a5f5' : '#64b5f6'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(100, 181, 246, 0.4);
  }
`;

const Submissions = () => {
  return (
    <SubmissionsContainer>
      <Container>
        <Title>Paper Submissions</Title>
        <Subtitle>
          Submit your research papers for IEMENTech 2026 - International Conference on Electronics, Materials Engineering & Nano-Technology
        </Subtitle>
        
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
        
        <Content>
          <Section>
            <SectionTitle>Paper Categories</SectionTitle>
            <Text>
              We welcome submissions in the following categories:
            </Text>
            <List>
              <li><strong>Full Papers:</strong> Original research contributions (6 pages maximum)</li>
              <li><strong>Short Papers:</strong> Work-in-progress or preliminary results (4 pages maximum)</li>
              <li><strong>Review Papers:</strong> Comprehensive surveys of current research (6 pages maximum)</li>
              <li><strong>Case Studies:</strong> Industrial applications and real-world implementations</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>Technical Requirements</SectionTitle>
            <List>
              <li>Papers must be written in English and represent original, unpublished work</li>
              <li>Use IEEE conference paper format template (see link above)</li>
              <li>Include abstract (150-250 words) and 4-6 keywords</li>
              <li>All figures, tables, and equations should be clearly labeled and referenced</li>
              <li>References must follow IEEE citation style</li>
              <li>Papers should be submitted as PDF files through EDAS submission system</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>Review Process</SectionTitle>
            <Text>
              All submissions undergo a rigorous double-blind peer review process:
            </Text>
            <List>
              <li>Each paper is reviewed by at least two independent experts in the field</li>
              <li>Authors will receive detailed feedback within 4-6 weeks of submission</li>
              <li>Accepted papers must be presented at the conference by at least one author</li>
              <li>Papers are evaluated based on novelty, technical quality, clarity, and relevance</li>
              <li>Plagiarism detection software is used to ensure originality</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>Publication & Indexing</SectionTitle>
            <Text>
              Accepted and presented papers will be published in the conference proceedings and submitted for inclusion in:
            </Text>
            <List>
              <li>IEEE Xplore Digital Library</li>
              <li>Scopus database</li>
              <li>Web of Science (pending approval)</li>
              <li>Selected high-quality papers will be invited for journal publication</li>
              <li>Best paper awards will be presented during the conference</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>Author Guidelines</SectionTitle>
            <List>
              <li>At least one author must register and attend the conference</li>
              <li>Provide complete author information and institutional affiliations</li>
              <li>Include a brief biography (50-100 words) for all authors</li>
              <li>Declare any conflicts of interest or funding sources</li>
              <li>Ensure all co-authors have approved the submission</li>
              <li>Copyright transfer form must be submitted for accepted papers</li>
            </List>
          </Section>

          <CTAButtonsContainer>
            <CTAButton primary>Submit Your Paper</CTAButton>
            <CTAButton>Download Template</CTAButton>
          </CTAButtonsContainer>
        </Content>
      </Container>
    </SubmissionsContainer>
  );
};

export default Submissions;
