

import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaHandsHelping, FaGraduationCap, FaMapMarkedAlt, FaUsers, FaClinicMedical } from 'react-icons/fa';
import HomePage from '../HomePage';
import LeadersSlider from './LeadersSlider';
import CTAComponent from '../../components/CTAComponent';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DrShailendraSingh = () => {
  return (
    <HomePage>
      <ProfileContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <AnimatedTitle $delay={0.2}>SHAILENDRA KUMAR SINGH</AnimatedTitle>
            <AnimatedSubtitle $delay={0.4}>
              Chief Active Leader & Social Worker | Shane Hind Forum
            </AnimatedSubtitle>
          </HeroContent>
        </HeroSection>

        {/* Main Content */}
        <ContentWrapper>
          {/* Overview Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaHandsHelping className="icon" />
              <h2>Social Leadership</h2>
            </SectionHeader>
            <SectionContent>
              <ProfileImage src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Shailendra Kumar Singh" />
              <BioText>
                <p>
                  Shailendra Kumar Singh is a chief active leader and social worker who has been instrumental 
                  in materializing the concept of Shane Hind Forum. His tireless efforts in rural India have 
                  significantly improved welfare services for common citizens through numerous health camps 
                  and social initiatives.
                </p>
                <p>
                  With a background in medical sciences and a passion for social work, Shailendra has bridged 
                  the gap between healthcare access and rural communities, particularly in Eastern UP and 
                  Dwarka area of New Delhi.
                </p>
              </BioText>
            </SectionContent>
          </Section>

          {/* Education & Background Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaGraduationCap className="icon" />
              <h2>Education & Professional Background</h2>
            </SectionHeader>
            <GridContainer>
              <InfoCard $delay={0.2}>
                <h3>Medical Graduate</h3>
                <p>MRMC Medical College, Gulbarga, Karnataka</p>
              </InfoCard>
              <InfoCard $delay={0.4}>
                <h3>Specialized Degrees</h3>
                <p>Bachelor in Pathology, Biochemistry & Microbiology</p>
              </InfoCard>
              <InfoCard $delay={0.6}>
                <h3>Social Work Focus</h3>
                <p>Rural health and community service initiatives</p>
              </InfoCard>
            </GridContainer>
          </Section>

          {/* Geographic Reach Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaMapMarkedAlt className="icon" />
              <h2>Areas of Impact</h2>
            </SectionHeader>
            <MapContainer>
              <Location $delay={0.2}>
                <PinIcon />
                <div>
                  <h3>Eastern UP</h3>
                  <p>Extensive rural health camps and social welfare programs</p>
                </div>
              </Location>
              <Location $delay={0.4}>
                <PinIcon />
                <div>
                  <h3>Dwarka, New Delhi</h3>
                  <p>Urban social work and community development</p>
                </div>
              </Location>
            </MapContainer>
          </Section>

          {/* Organizational Roles Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaUsers className="icon" />
              <h2>Organizational Leadership</h2>
            </SectionHeader>
            <RoleGrid>
              <RoleCard $delay={0.2}>
                <h3>Treasure of ISICH</h3>
                <p>International Society of Self-Improvement and Complete Health</p>
              </RoleCard>
              <RoleCard $delay={0.4}>
                <h3>Conference Organizer</h3>
                <p>Instrumental in organizing three national conferences across India</p>
              </RoleCard>
            </RoleGrid>
            <ConferenceList>
              <ConferenceItem $delay={0.6}>
                <h4>Conference Locations:</h4>
                <ul>
                  <li>Arbon area of India</li>
                  <li>New Delhi</li>
                  <li>Deoria, Eastern UP</li>
                </ul>
              </ConferenceItem>
            </ConferenceList>
          </Section>

          {/* Health Camp Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaClinicMedical className="icon" />
              <h2>Health & Service Initiatives</h2>
            </SectionHeader>
            <InitiativesGrid>
              <InitiativeCard $delay={0.2}>
                <h3>Rural Health Camps</h3>
                <p>Organized numerous medical camps providing free healthcare services</p>
              </InitiativeCard>
              <InitiativeCard $delay={0.4}>
                <h3>Community Development</h3>
                <p>Implemented welfare programs for underserved populations</p>
              </InitiativeCard>
              <InitiativeCard $delay={0.6}>
                <h3>SHF Foundation</h3>
                <p>Key contributor to Shane Hind Forum's materialization and growth</p>
              </InitiativeCard>
            </InitiativesGrid>
          </Section>

          {/* Vision Statement */}
          <VisionSection>
            <FaHandsHelping className="icon" />
            <h3>Grassroots Change Maker</h3>
            <p>
              Shailendra Kumar Singh embodies the spirit of servant leadership, bringing medical 
              knowledge and social work together to create tangible improvements in rural and urban 
              communities alike. His work with Shane Hind Forum continues to inspire new generations 
              of social activists.
            </p>
          </VisionSection>

          <LeadersSlider/>

          <CTAComponent/>
        </ContentWrapper>
      </ProfileContainer>
    </HomePage>
  );
};

// Styled Components
const ProfileContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.8;
`;

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 2;
`;

const AnimatedTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AnimatedSubtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 400;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 5rem;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out forwards` : 'none'};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    color: #2ecc71;
  }
  
  h2 {
    font-size: 2rem;
    color: #2d3436;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

const SectionContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: 5px solid white;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const BioText = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  border-left: 4px solid #2ecc71;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-top: 0;
    color: #2ecc71;
  }
  
  p {
    color: #636e72;
  }
`;

const MapContainer = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
`;

const Location = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  h3 {
    margin: 0 0 0.5rem 0;
    color: #2ecc71;
  }
  
  p {
    margin: 0;
    color: #636e72;
  }
`;

const PinIcon = styled.div`
  min-width: 24px;
  height: 24px;
  background: #e74c3c;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  position: relative;
  top: 5px;
  
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 6px;
    left: 6px;
  }
`;

const RoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const RoleCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  border-top: 4px solid #2ecc71;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-top: 0;
    color: #2ecc71;
  }
  
  p {
    color: #636e72;
  }
`;

const ConferenceList = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
`;

const ConferenceItem = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  h4 {
    margin-top: 0;
    color: #2d3436;
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 0;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const InitiativeCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  border-bottom: 4px solid #2ecc71;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-top: 0;
    color: #2ecc71;
  }
  
  p {
    color: #636e72;
  }
`;

const VisionSection = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #2ecc71, #3498db);
  color: white;
  border-radius: 10px;
  margin-top: 4rem;
   margin-bottom: 4rem;
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

export default DrShailendraSingh;
