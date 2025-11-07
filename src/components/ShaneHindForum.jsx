import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components
const ForumContainer = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out;
`;

const ForumTitle = styled.h1`
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const PresidentTag = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  margin-top: 1rem;
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${slideIn} 0.8s ease-out;
  animation-fill-mode: both;
  border-left: 5px solid ${props => props.accentColor || '#3498db'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
    border-left-color: #e74c3c;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
    border-left-color: #2ecc71;
  }

  @media (max-width: 768px) {
    padding: 1.8rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.bgColor || '#e3f2fd'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  flex-shrink: 0;

  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.iconColor || '#3498db'};
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionContent = styled.div`
  color: #34495e;
  line-height: 1.7;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ValuesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0;
  list-style: none;
  margin-top: 2rem;
`;

const ValueItem = styled.li`
  background: ${props => props.bgColor || '#f8f9fa'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueTitle = styled.h4`
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: #e74c3c;
    margin-right: 0.5rem;
  }
`;

const ValueDescription = styled.p`
  color: #7f8c8d;
  margin: 0;
  font-size: 0.95rem;
`;

// Icons (simplified for example)
const VisionIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
  </svg>
);

const MissionIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
  </svg>
);

const ValuesIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const ShaneHindForum = () => {
  const coreValues = [
    {
      title: "Integrity First",
      description: "We uphold the highest standards of moral and ethical conduct in all our actions."
    },
    {
      title: "Progressive Governance",
      description: "Advocating for evidence-based policies and innovative political structures."
    },
    {
      title: "National Unity",
      description: "Promoting harmony across all sections of society for a stronger nation."
    },
    {
      title: "Grassroots Empowerment",
      description: "Decentralizing power to enable local communities to shape their future."
    },
    {
      title: "Sustainable Development",
      description: "Balancing economic growth with environmental stewardship."
    },
    {
      title: "Transparent Democracy",
      description: "Ensuring accountability at all levels of governance."
    }
  ];

  return (
    <ForumContainer>
      <Header>
        <ForumTitle>Shane Hind Forum</ForumTitle>
        <PresidentTag>Under Leadership of Dr. Awdhesh Kumar Singh</PresidentTag>
      </Header>

      <Section>
        <SectionHeader>
          <IconWrapper bgColor="#e3f2fd" iconColor="#3498db">
            <VisionIcon />
          </IconWrapper>
          <SectionTitle>Our Vision</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <p>To transform the political landscape through <strong>Neo-Democracy</strong>, establishing an efficient two-party system that fosters stable governance, reduces polarization, and enables rapid national progress while preserving democratic values.</p>
          <p>We envision an India where policy-making is driven by expertise rather than populism, where citizens are active stakeholders in governance, and where political structures are designed for optimal national development.</p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <IconWrapper bgColor="#ffebee" iconColor="#e74c3c">
            <MissionIcon />
          </IconWrapper>
          <SectionTitle>Our Mission</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <p>To educate citizens about the benefits of a streamlined political system and mobilize support for constitutional reforms that will:</p>
          <ul>
            <li>Establish a stable two-party framework</li>
            <li>Enhance political accountability</li>
            <li>Reduce election-related expenditures</li>
            <li>Minimize policy fluctuations between administrations</li>
            <li>Create space for substantive policy debates</li>
          </ul>
          <p>Through research, advocacy, and grassroots mobilization, we aim to build consensus around this political transformation.</p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <IconWrapper bgColor="#e8f5e9" iconColor="#2ecc71">
            <ValuesIcon />
          </IconWrapper>
          <SectionTitle>Core Values</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <p>The foundational principles guiding all Shane Hind Forum initiatives:</p>
          <ValuesList>
            {coreValues.map((value, index) => (
              <ValueItem key={index} bgColor={index % 2 === 0 ? '#f8f9fa' : '#ffffff'}>
                <ValueTitle>
                  <CheckIcon />
                  {value.title}
                </ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueItem>
            ))}
          </ValuesList>
        </SectionContent>
      </Section>
    </ForumContainer>
  );
};

export default ShaneHindForum;