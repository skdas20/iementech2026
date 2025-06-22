import React from 'react';
import styled from 'styled-components';

const OrganizingContainer = styled.div`
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
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
`;

const Content = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: #1e3c72;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
`;

const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const MemberCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid #6366f1;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberName = styled.h3`
  color: #1e3c72;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MemberTitle = styled.p`
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const MemberAffiliation = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Organizing = () => {
  return (
    <OrganizingContainer>
      <Container>
        <Title>Organizing Committee</Title>
        
        <Content>
          <Section>
            <SectionTitle>Chief Patron</SectionTitle>
            <MemberGrid>
              <MemberCard>
                <MemberName>Dr. Satyajit Chakrabarti</MemberName>
                <MemberTitle>Chief Patron</MemberTitle>
                <MemberAffiliation>
                  Vice Chancellor, Institute of Engineering & Management, Kolkata
                </MemberAffiliation>
              </MemberCard>
            </MemberGrid>
          </Section>

          <Section>
            <SectionTitle>Conference Chair</SectionTitle>
            <MemberGrid>
              <MemberCard>
                <MemberName>Prof. Dr. Biswajit Sarkar</MemberName>
                <MemberTitle>Conference Chair</MemberTitle>
                <MemberAffiliation>
                  Director, Institute of Engineering & Management, Kolkata
                </MemberAffiliation>
              </MemberCard>
            </MemberGrid>
          </Section>

          <Section>
            <SectionTitle>Program Chairs</SectionTitle>
            <MemberGrid>
              <MemberCard>
                <MemberName>Prof. Dr. Rajesh Kumar</MemberName>
                <MemberTitle>Program Chair</MemberTitle>
                <MemberAffiliation>
                  Head, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
              <MemberCard>
                <MemberName>Dr. Priyanka Sharma</MemberName>
                <MemberTitle>Program Co-Chair</MemberTitle>
                <MemberAffiliation>
                  Associate Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
            </MemberGrid>
          </Section>

          <Section>
            <SectionTitle>Technical Program Committee</SectionTitle>
            <MemberGrid>
              <MemberCard>
                <MemberName>Dr. Amit Singh</MemberName>
                <MemberTitle>TPC Chair</MemberTitle>
                <MemberAffiliation>
                  Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
              <MemberCard>
                <MemberName>Dr. Sneha Gupta</MemberName>
                <MemberTitle>TPC Co-Chair</MemberTitle>
                <MemberAffiliation>
                  Assistant Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
              <MemberCard>
                <MemberName>Dr. Vikash Kumar</MemberName>
                <MemberTitle>TPC Member</MemberTitle>
                <MemberAffiliation>
                  Associate Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
            </MemberGrid>
          </Section>

          <Section>
            <SectionTitle>Local Organizing Committee</SectionTitle>
            <MemberGrid>
              <MemberCard>
                <MemberName>Prof. Anita Das</MemberName>
                <MemberTitle>Local Chair</MemberTitle>
                <MemberAffiliation>
                  Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
              <MemberCard>
                <MemberName>Dr. Rahul Banerjee</MemberName>
                <MemberTitle>Registration Chair</MemberTitle>
                <MemberAffiliation>
                  Assistant Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
              <MemberCard>
                <MemberName>Ms. Shruti Agarwal</MemberName>
                <MemberTitle>Publication Chair</MemberTitle>
                <MemberAffiliation>
                  Assistant Professor, Department of ECE, IEM Kolkata
                </MemberAffiliation>
              </MemberCard>
            </MemberGrid>
          </Section>
        </Content>
      </Container>
    </OrganizingContainer>
  );
};

export default Organizing;
