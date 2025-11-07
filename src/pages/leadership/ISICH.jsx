import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaLeaf, FaHandsHelping, FaGlobe, FaHeart, FaBalanceScale, FaLink } from 'react-icons/fa';
import HomePage from '../HomePage';
import CTAComponent from '../../components/CTAComponent';
import LeadersSlider from './LeadersSlider';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const ISICH = () => {
  return (
    <HomePage>
      <SpiritualContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <AnimatedTitle $delay={0.2}>THE SPIRITUAL SOURCE</AnimatedTitle>
            <AnimatedSubtitle $delay={0.4}>
              International Society for Self-Improvement, Meditation and Complete Health
            </AnimatedSubtitle>
            <Logo>ISICH</Logo>
          </HeroContent>
        </HeroSection>

        {/* Main Content */}
        <ContentWrapper>
          {/* Foundation Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaLeaf className="icon" />
              <h2>The Spiritual Foundation</h2>
            </SectionHeader>
            <FoundationContent>
              <p>
                ISICH serves as the spiritual bedrock of Shane Hind Forum, founded by Dr. Awadhesh Kumar Singh 
                who is also a principal founder of the Forum. This unique synthesis of spirituality and social 
                activism creates a powerful force for positive change.
              </p>
              <p>
                The acronym ISICH represents the <strong>International Society for Self-Improvement, Meditation 
                and Complete Health</strong> - an organization dedicated to harmonizing scientific rationality with 
                spiritual wisdom for holistic human development.
              </p>
            </FoundationContent>
          </Section>

          {/* Core Teachings Section */}
          <Section $inview={1}>
            <SectionHeader>
              <FaHandsHelping className="icon" />
              <h2>Core Teachings & Practices</h2>
            </SectionHeader>
            <TeachingsGrid>
              <TeachingCard $delay={0.2}>
                <div className="icon-container">
                  <FaLeaf className="icon" />
                </div>
                <h3>Healthy Lifestyle</h3>
                <p>Science-based approaches to daily living that promote complete wellbeing</p>
              </TeachingCard>
              <TeachingCard $delay={0.4}>
                <div className="icon-container">
                  <FaBalanceScale className="icon" />
                </div>
                <h3>Yoga & Meditation</h3>
                <p>Ancient practices adapted for modern life to achieve mind-body balance</p>
              </TeachingCard>
              <TeachingCard $delay={0.6}>
                <div className="icon-container">
                  <FaHeart className="icon" />
                </div>
                <h3>Holistic Wellbeing</h3>
                <p>Integration of physical, mental, emotional, social and spiritual health</p>
              </TeachingCard>
            </TeachingsGrid>
          </Section>

          {/* Philosophical Vision Section */}
          <Section $inview={1} >
            <SectionHeader>
              <FaGlobe className="icon" />
              <h2>Philosophical Vision</h2>
            </SectionHeader>
            <VisionContent>
              <VisionPoint $delay={0.2}>
                <h3>Scientific Spirituality</h3>
                <p>
                  Blending empirical rationality with transcendental wisdom to create 
                  practical tools for personal and social transformation
                </p>
              </VisionPoint>
              <VisionPoint $delay={0.4}>
                <h3>Universal Compassion</h3>
                <p>
                  Cultivating love for humanity, devotion to nation, and care for the 
                  entire biosphere as interconnected aspects of spiritual growth
                </p>
              </VisionPoint>
              <VisionPoint $delay={0.6}>
                <h3>Inclusive Harmony</h3>
                <p>
                  Welcoming all authentic yoga and meditation traditions that promote 
                  peace and social welfare as outlined in Shane Hind Forum's constitution
                </p>
              </VisionPoint>
            </VisionContent>
          </Section>

          {/* SHF Connection Section */}
          <Section $inview={1} >
         
            <SectionHeader>
              <FaLink className="icon" />
              <h2>Connection to Shane Hind Forum</h2>
            </SectionHeader>
            <ConnectionContent>
              <p>
                ISICH provides the spiritual foundation and ethical framework for Shane Hind Forum's 
                socio-political activities. This unique integration ensures that the Forum's efforts 
                in democracy reform and social justice remain grounded in universal human values and 
                spiritual principles.
              </p>
              <p>
                The teachings of ISICH help cultivate the balanced, compassionate leadership that 
                Shane Hind Forum seeks to promote at all levels of society and governance.
              </p>
            </ConnectionContent>
         
          </Section>
          {/* Learn More Section */}
          <LearnMoreSection>
            <div className="icon-container">
              <FaGlobe className="icon" />
            </div>
            <h3>Explore More About ISICH</h3>
            <p>
              Discover the complete vision and practices of this spiritual foundation
            </p>
            <LearnMoreLink href="https://isich.org" target="_blank">
              Visit ISICH Official Website <FaLink className="link-icon" />
            </LearnMoreLink>
          </LearnMoreSection>

          <LeadersSlider/>

        <CTAComponent/>


        </ContentWrapper>
      </SpiritualContainer>
    </HomePage>
  );
};

// Styled Components
const SpiritualContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.8;
`;

const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AnimatedSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #2ecc71;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out 0.6s forwards, ${float} 4s ease-in-out infinite;
  text-shadow: 0 0 10px rgba(46, 204, 113, 0.5);

  @media (max-width: 768px) {
    font-size: 3rem;
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

const FoundationContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    
    strong {
      color: #2ecc71;
    }
  }
`;

const TeachingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TeachingCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon-container {
    width: 80px;
    height: 80px;
    background: rgba(46, 204, 113, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    .icon {
      font-size: 2.5rem;
      color: #2ecc71;
    }
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #2ecc71;
  }
  
  p {
    color: #636e72;
    margin-bottom: 0;
  }
`;

const VisionContent = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
`;

const VisionPoint = styled.div`
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  h3 {
    color: #2ecc71;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin: 0;
  }
`;

const ConnectionSection = styled(Section)`
  //background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e9 100%);
  padding: 3rem;
  border-radius: 10px;
  display: block;
`;

const ConnectionContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const LearnMoreSection = styled.div`
 margin-bottom: 3rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #2ecc71, #3498db);
  color: white;
  border-radius: 10px;
  margin-top: 4rem;
  
  .icon-container {
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    .icon {
      font-size: 3rem;
    }
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    max-width: 600px;
    margin: 0 auto 1.5rem;
    font-size: 1.1rem;
  }
`;

const LearnMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 2rem;
  background: white;
  color: #2ecc71;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
 
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .link-icon {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

export default ISICH;
