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

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
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

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #64748b;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(250, 169, 47, 0.1);
  transition: all 0.3s ease;
  animation: ${slideInLeft} 0.8s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
    border-color: rgba(250, 169, 47, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #faa92f;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #faa92f 0%, #e8941a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CardContent = styled.div`
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
`;

const PriceTable = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(250, 169, 47, 0.1);
  margin-bottom: 3rem;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
    overflow-x: auto;
  }
`;

const TableTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #faa92f 0%, #e8941a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  min-width: 600px;
  
  @media (max-width: 768px) {
    min-width: 500px;
    font-size: 0.9rem;
  }
`;

const TableHeader = styled.th`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  
  &:first-child {
    border-top-left-radius: 8px;
  }
  
  &:last-child {
    border-top-right-radius: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8fafc;
  }
  
  &:hover {
    background: rgba(250, 169, 47, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #334155;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
  }
`;

const ImportantNote = styled.div`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 1px solid #f59e0b;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 8px;
  }
`;

const NoteTitle = styled.h4`
  color: #92400e;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NoteContent = styled.p`
  color: #92400e;
  margin: 0;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(250, 169, 47, 0.1);
  text-align: center;
  animation: ${fadeInUp} 1s ease-out 0.8s both;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #faa92f 0%, #e8941a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContactDetails = styled.div`
  color: #64748b;
  line-height: 1.8;
  font-size: 1.1rem;
  
  strong {
    color: #1e293b;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -1rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
  }
`;

const Registration = () => {
  return (
    <PageContainer>
      <Container>
        <PageTitle>Registration</PageTitle>
        <PageSubtitle>Join IEMENTech 2026 - Register for the Premier Conference</PageSubtitle>
        
        <ContentGrid>
          <InfoCard delay="0.1s">
            <CardIcon>📝</CardIcon>
            <CardTitle>Registration Categories</CardTitle>
            <CardContent>
              <strong>Student Registration:</strong> For undergraduate and postgraduate students with valid student ID<br/><br/>
              <strong>Faculty Registration:</strong> For academic faculty members and researchers<br/><br/>
              <strong>Industry Registration:</strong> For industry professionals and corporate participants<br/><br/>
              <strong>International Registration:</strong> For participants from outside India
            </CardContent>
          </InfoCard>
          
          <InfoCard delay="0.2s">
            <CardIcon>✅</CardIcon>
            <CardTitle>Registration Benefits</CardTitle>
            <CardContent>
              • Access to all keynote sessions and presentations<br/>
              • Conference kit with proceedings and materials<br/>
              • Networking opportunities with industry experts<br/>
              • Certificate of participation<br/>
              • Refreshments and lunch during conference days<br/>
              • Access to exhibition and poster sessions
            </CardContent>
          </InfoCard>
          
          <InfoCard delay="0.3s">
            <CardIcon>📋</CardIcon>
            <CardTitle>Required Documents</CardTitle>
            <CardContent>
              <strong>For Students:</strong><br/>
              • Valid student ID card<br/>
              • Institution verification letter<br/><br/>
              <strong>For Faculty/Industry:</strong><br/>
              • Professional ID or business card<br/>
              • Institutional affiliation proof<br/><br/>
              <strong>For International Participants:</strong><br/>
              • Passport copy<br/>
              • Visa documentation (if required)
            </CardContent>
          </InfoCard>
        </ContentGrid>          <PriceTable>
          <TableTitle>Registration Fees</TableTitle>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Category</TableHeader>
                  <TableHeader>Early Bird Registration</TableHeader>
                  <TableHeader>Late Registration</TableHeader>
                  <TableHeader>IEEE Members</TableHeader>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell><strong>Students</strong></TableCell>
                  <TableCell>₹9,500</TableCell>
                  <TableCell>₹10,000</TableCell>
                  <TableCell>₹9,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Researchers</strong></TableCell>
                  <TableCell>₹10,500</TableCell>
                  <TableCell>₹11,000</TableCell>
                  <TableCell>₹10,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Industry</strong></TableCell>
                  <TableCell>₹12,500</TableCell>
                  <TableCell>₹13,000</TableCell>
                  <TableCell>₹12,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Foreign Delegates</strong></TableCell>
                  <TableCell>$300</TableCell>
                  <TableCell>$350</TableCell>
                  <TableCell>$250</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </TableWrapper>
          <div style={{ marginTop: '1rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
            * 18% GST included in all Indian registration fees
          </div>
        </PriceTable>
        
        <ImportantNote>
          <NoteTitle>
            ⚠️ Important Registration Information
          </NoteTitle>
          <NoteContent>
            Registration will open soon! Stay tuned for the official registration portal launch. 
            Early bird discounts are available until January 25, 2026. All registrations include 
            conference materials, meals, and certificate of participation. Payment can be made 
            online through secure payment gateway or bank transfer.
          </NoteContent>
        </ImportantNote>
        
        <ContactInfo>
          <ContactTitle>Registration Queries</ContactTitle>
          <ContactDetails>
            For any registration-related queries, please contact:<br/><br/>
            <strong>Email:</strong> registration@iementech2026.org<br/>
            <strong>Phone:</strong> +91-33-2357-0000<br/>
            <strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
          </ContactDetails>
        </ContactInfo>
      </Container>
    </PageContainer>
  );
};

export default Registration;
