import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProfileImg from '../images/d2.png'
import ImageContainer from './AimImageSliders/ImageContainer';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

// Styled Components
const TwoColumnLayout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }
`;

const MainContent = styled.div`
  flex: 0 0 60%;
  max-width: 60%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SideContent = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  background: transparent;
  border-radius: 16px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    min-height: 200px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-out;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  position: relative;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem 0;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
  animation: ${pulse} 3s infinite;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const ProfileTitle = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  color: #2c3e50;
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  
  @media (max-width: 600px){
    font-size: 1.5rem;
  }
`;

const Designation = styled.p`
  color: #7f8c8d;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;

@media (max-width: 600px){
    font-size: 1.0rem;
  }
`;

const ExperienceBadge = styled.span`
  display: inline-block;
  background: #e74c3c;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const ProfileContent = styled.div`
  padding: 1rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  color: #3498db;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1rem;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 4px;
    background: #3498db;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 90%;
  font-weight: 600;
`;

const NeoDemocracyTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #8e44ad 0%, #3498db 100%);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DrAwdheshProfile = () => {
  return (
    <TwoColumnLayout>
      <MainContent>
        <ProfileContainer>
          <ProfileHeader>
            <ProfileImage>
              <img 
                src={ProfileImg}
                alt="Dr. Awdhesh Kumar Singh"
              />
            </ProfileImage>
            <ProfileTitle>
              <Name>Dr. Awdhesh Kumar Singh</Name>
              <Designation>MBBS, MD | Consultant Cardiologist</Designation>
              <ExperienceBadge>35+ Years of Experience</ExperienceBadge>
            </ProfileTitle>
          </ProfileHeader>

          <ProfileContent>
            <SectionTitle>Medical Expertise</SectionTitle>
            <Description>
              With over three and a half decades in cardiology, Dr. Singh has pioneered numerous 
              cardiac treatments and mentored hundreds of medical professionals. His patient-centric 
              approach has transformed cardiac care in the region.
            </Description>
          </ProfileContent>

          <div>
            <SectionTitle>Vision for Governance</SectionTitle>
            <Description>
              Beyond medicine, Dr. Singh advocates for political reform through his 
              <Highlight> Neo-Democracy Concept</Highlight>, proposing a streamlined two-party system 
              to enhance governance efficiency and reduce political fragmentation.
            </Description>
            <NeoDemocracyTag>Neo-Democracy Advocate</NeoDemocracyTag>
            
            <Description style={{ marginTop: '1.5rem' }}>
              His vision combines medical precision with political philosophy, aiming to create 
              a healthier democracy just as he has worked to create healthier hearts.
            </Description>
          </div>
        </ProfileContainer>
      </MainContent>
      
      <SideContent>
        <ImageContainer/>
      </SideContent>
    </TwoColumnLayout>
  );
};

export default DrAwdheshProfile;