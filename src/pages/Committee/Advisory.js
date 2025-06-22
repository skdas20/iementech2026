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
  max-width: 1400px;
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

const TableContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(250, 169, 47, 0.1);
  animation: ${slideInLeft} 1s ease-out 0.3s both;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.th`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1.2rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
  
  &:first-child {
    border-top-left-radius: 8px;
    width: 40%;
  }
  
  &:last-child {
    border-top-right-radius: 8px;
    width: 60%;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8fafc;
  }
  
  &:hover {
    background: rgba(250, 169, 47, 0.08);
    transform: translateX(2px);
    transition: all 0.2s ease;
  }
`;

const TableCell = styled.td`
  padding: 1.2rem;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
`;

const MemberName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: #1e293b;
  margin-bottom: 0.3rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MemberAffiliation = styled.div`
  color: #64748b;
  line-height: 1.5;
  font-size: 1rem;
`;

const Advisory = () => {
  const advisoryMembers = [
    {
      name: "Banani Chakrabarti",
      affiliation: "President, IEM and UEM Group, Kolkata"
    },
    {
      name: "Satyajit Chakrabarti",
      affiliation: "Director, Institute of Engineering & Management, Kolkata"
    },
    {
      name: "Suparna Kar Chowdhury",
      affiliation: "Chair, IEEE Kolkata Section"
    },
    {
      name: "Achintya Singha",
      affiliation: "Professor, Bose Institute"
    },
    {
      name: "Deepak Mathur",
      affiliation: "2024 IEEE MGA Vice-President, Ombudsman – India Council"
    },
    {
      name: "Masahiro Fujita",
      affiliation: "Professor, The University of Tokyo, Japan"
    },
    {
      name: "P K Giri",
      affiliation: "Professor, IIT Guwahati"
    },
    {
      name: "Mahuya Hom Choudhury",
      affiliation: "Senior Scientist, Nodal Officer, Patent Information Centre, Technology Development and Adaptation Centre"
    },
    {
      name: "Angshuman Sarkar",
      affiliation: "Professor, Kalyani Govt. Engg. College, India"
    },
    {
      name: "Amiya Basu",
      affiliation: "Professor, Syracuse University, USA"
    },
    {
      name: "Goutam Saha",
      affiliation: "Professor, IIT Kharagpur"
    },
    {
      name: "Dwarkaprasad Dayama",
      affiliation: "Samsung R&D Institute, India"
    },
    {
      name: "S. Geetha",
      affiliation: "Ex Programme Director, Space Transportation System, Vikram Sarabhai Space Centre, Thiruvananthapuram"
    },
    {
      name: "Terumi Umematsu",
      affiliation: "Biometrics Research Laboratories, NEC Corporation, Japan"
    },
    {
      name: "Preet Yadav",
      affiliation: "Head India Innovation Ecosystem at NXP Semiconductors"
    },
    {
      name: "Lokesh C. Tribedi",
      affiliation: "Professor, TIFR, Mumbai"
    },
    {
      name: "Preetam Ghosh",
      affiliation: "Interim Chair and Professor, Department of Computer Science, Virginia Commonwealth University"
    },
    {
      name: "Riri Fitri Sari",
      affiliation: "Professor of Computer Engineering, University of Indonesia"
    },
    {
      name: "Sudipto Chakraborty",
      affiliation: "Research Staff Member, IBM Watson Research Centre"
    },
    {
      name: "Mayank Shrivastava",
      affiliation: "Associate Professor, DESE, IISc Bangalore"
    },
    {
      name: "Sudeep Chakraverty",
      affiliation: "Deputy Director (Technical) The Institution of Engineers (India)"
    }
  ];

  return (
    <PageContainer>
      <Container>
        <PageTitle>Advisory Committee</PageTitle>
        <PageSubtitle>Distinguished experts guiding IEMENTech 2026</PageSubtitle>
        
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>Name</TableHeader>
                <TableHeader>Affiliation</TableHeader>
              </tr>
            </thead>
            <tbody>
              {advisoryMembers.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <MemberName>{member.name}</MemberName>
                  </TableCell>
                  <TableCell>
                    <MemberAffiliation>{member.affiliation}</MemberAffiliation>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    </PageContainer>
  );
};

export default Advisory;