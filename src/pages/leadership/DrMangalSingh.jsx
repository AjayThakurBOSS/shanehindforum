import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaUserMd, FaGraduationCap, FaGlobe, FaBook, FaUsers, FaHospital, FaHandsHelping } from 'react-icons/fa';
import HomePage from '../HomePage';
import LeadersSlider from './LeadersSlider';
import CTAComponent from '../../components/CTAComponent';
import Mangal from '../../images/mangalPanday.jpg'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DrMangalSingh = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [refs] = useState({
    overview: useRef(null),
    education: useRef(null),
    international: useRef(null),
    publications: useRef(null),
    administrative: useRef(null),
    surgical: useRef(null)
  });

  useEffect(() => {
    document.title = "Dr. Mangal Singh | ENT Specialist Profile";
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomePage>
      <ProfileContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <AnimatedTitle $delay={0.2}>DR. MANGAL SINGH</AnimatedTitle>
            <AnimatedSubtitle $delay={0.4}>
              MS(ENT), DLO, JIPMER | Former Professor & Head, MLN Medical College
            </AnimatedSubtitle>
            <NavTabs>
              {[
                { id: 'overview', label: 'Overview', icon: <FaUserMd /> },
                { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
                { id: 'international', label: 'International', icon: <FaGlobe /> },
                { id: 'publications', label: 'Publications', icon: <FaBook /> },
                { id: 'administrative', label: 'Administrative', icon: <FaUsers /> },
                { id: 'surgical', label: 'Surgical Legacy', icon: <FaHospital /> }
              ].map((tab) => (
                <NavTab 
                  key={tab.id}
                  $active={activeTab === tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(refs[tab.id]);
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </NavTab>
              ))}
            </NavTabs>
          </HeroContent>
        </HeroSection>

        {/* Main Content */}
        <ContentWrapper>
          {/* Overview Section */}
          <Section ref={refs.overview} $inview={1}>
            <SectionHeader>
              <FaUserMd className="icon" />
              <h2>Professional Overview</h2>
            </SectionHeader>
            <SectionContent>
              <ProfileImage src={Mangal} alt="Dr. Mangal Singh" />
              <BioText>
                <p>
                  Dr. Mangal Singh was born and brought up in Jainagar, Barhaj, Deoria in June 1955. 
                  After excelling in his early education with first division honors, he entered medical 
                  college Jhansi in 1974 through CPMT. Following his MBBS, he was selected at JIPMER 
                  Pondicherry where he completed his MS ENT and DLO.
                </p>
                <p>
                  With over 40 years of distinguished service, Dr. Singh has performed more than 30,000 
                  surgeries addressing complex ear, nose, throat, thyroid, and head/neck cancer cases. 
                  He pioneered a groundbreaking treatment protocol for Oral Submucous Fibrosis, published 
                  in the prestigious Indian Journal of Medical Research.
                </p>
                <p>
                  Currently in private practice post-retirement, Dr. Singh continues his humanitarian 
                  work by providing free consultations to BPL card holders at his clinic.
                </p>
              </BioText>
            </SectionContent>
          </Section>

          {/* Education & Career Section */}
          <Section ref={refs.education} $inview={1}>
            <SectionHeader>
              <FaGraduationCap className="icon" />
              <h2>Education & Career Journey</h2>
            </SectionHeader>
            <Timeline>
              <TimelineItem $delay={0.2}>
                <Year>1955</Year>
                <Content>
                  <h3>Born in Jainagar, Barhaj, Deoria</h3>
                  <p>Early education in hometown with first division honors</p>
                </Content>
              </TimelineItem>
              <TimelineItem $delay={0.4}>
                <Year>1974</Year>
                <Content>
                  <h3>Entered Medical College Jhansi</h3>
                  <p>Selected through CPMT examination</p>
                </Content>
              </TimelineItem>
              <TimelineItem $delay={0.6}>
                <Year>1986</Year>
                <Content>
                  <h3>Joined MLN Medical College Allahabad</h3>
                  <p>Began as Lecturer in ENT Department</p>
                </Content>
              </TimelineItem>
              <TimelineItem $delay={0.8}>
                <Year>2006-2017</Year>
                <Content>
                  <h3>Professor & Head of ENT Department</h3>
                  <p>Elevated to Professor on 28.12.2006 | Headed department from 2008 until retirement</p>
                </Content>
              </TimelineItem>
            </Timeline>
          </Section>

          {/* International Experience Section */}
          <Section ref={refs.international} $inview={1}>
            <SectionHeader>
              <FaGlobe className="icon" />
              <h2>International Experience</h2>
            </SectionHeader>
            <GridContainer>
              <ExperienceCard $delay={0.2}>
                <h3>Saudi Arabia (1995-96)</h3>
                <p>Senior ENT Specialist at Ministry of Health Hospital, TAIF</p>
              </ExperienceCard>
              <ExperienceCard $delay={0.4}>
                <h3>London Fellowship</h3>
                <p>Observer at Royal ENT Hospital and Charring Cross Hospital</p>
              </ExperienceCard>
              <ExperienceCard $delay={0.6}>
                <h3>International Conferences</h3>
                <p>Panelist at IFOS World Congress in Brazil | Invited faculty in Seoul, Korea</p>
              </ExperienceCard>
              <ExperienceCard $delay={0.8}>
                <h3>Global Orations</h3>
                <p>Guest faculty in Paris Temporal Bone courses | Lectures in Brazil on Angiofibroma</p>
              </ExperienceCard>
            </GridContainer>
          </Section>

          {/* Publications & Research Section */}
          <Section ref={refs.publications} $inview={1}>
            <SectionHeader>
              <FaBook className="icon" />
              <h2>Publications & Academic Contributions</h2>
            </SectionHeader>
            <StatsGrid>
              <StatItem>
                <div className="number">60+</div>
                <div className="label">Publications in peer-reviewed journals</div>
              </StatItem>
              <StatItem>
                <div className="number">34</div>
                <div className="label">Chief-guided PG Theses</div>
              </StatItem>
              <StatItem>
                <div className="number">31</div>
                <div className="label">Co-guided PG Theses</div>
              </StatItem>
              <StatItem>
                <div className="number">70+</div>
                <div className="label">ENT PG students trained</div>
              </StatItem>
            </StatsGrid>
          </Section>

          {/* Administrative Roles Section */}
          <Section ref={refs.administrative} $inview={1}>
            <SectionHeader>
              <FaUsers className="icon" />
              <h2>Administrative Leadership</h2>
            </SectionHeader>
            <RoleList>
              <RoleItem $delay={0.2}>
                <h3>Head of ENT Department</h3>
                <p>MLN Medical College Allahabad (2008-2017)</p>
              </RoleItem>
              <RoleItem $delay={0.4}>
                <h3>Superintendent-in-Chief</h3>
                <p>SRN Hospital & SN Children Hospital (2014-2015)</p>
              </RoleItem>
              <RoleItem $delay={0.6}>
                <h3>Chief Warden</h3>
                <p>PG Hostel for several years</p>
              </RoleItem>
              <RoleItem $delay={0.8}>
                <h3>Conference Organizer</h3>
                <p>64th AOICON Allahabad (inaugurated by Vice President of India)</p>
              </RoleItem>
            </RoleList>
          </Section>

          {/* Surgical Legacy Section */}
          <Section ref={refs.surgical} $inview={1}>
            <SectionHeader>
              <FaHospital className="icon" />
              <h2>Surgical Legacy & Innovations</h2>
            </SectionHeader>
            <LegacyContent>
              <p>
                <strong>30,000+ surgeries</strong> performed across ENT, thyroid, and head/neck oncology cases
              </p>
              <p>
                <strong>Pioneering research</strong> on Oral Submucous Fibrosis treatment protocols, 
                published in Indian Journal of Medical Research (ICMR)
              </p>
              <p>
                <strong>Rationalized drug dosage schedules</strong> for precancerous conditions caused by 
                pan masala and tobacco consumption
              </p>
              <p>
                <strong>Current practice:</strong> Continues to serve patients with free consultations 
                for BPL card holders
              </p>
            </LegacyContent>
          </Section>

          {/* SHF Involvement Section */}
          <SHFSection>
            <FaHandsHelping className="icon" />
            <h3>Inspired by Neo-Democracy</h3>
            <p>
              Dr. Singh joined Shan-E-Hind Forum as National General Secretary, motivated by 
              Dr. A.K. Singh's vision. This commitment led him to take voluntary retirement 
              from his prestigious position at MLN Medical College to dedicate himself to 
              this socio-political movement.
            </p>
          </SHFSection>
         {/*  <LeadersSlider/> */}

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
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
  line-height: 1.2;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.0rem;
  }
`;

const AnimatedSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 400;
  opacity: 0;
  line-height: 1.2;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const NavTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const NavTab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.$active ? '#0984e3' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: ${props => props.$active ? '#0768b2' : 'rgba(255, 255, 255, 0.2)'};
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
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
    color: #0984e3;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #0984e3;
    border-radius: 2px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.3rem;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 4px solid #0984e3;
  }
`;

const Year = styled.div`
  font-weight: 700;
  color: #0984e3;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Content = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    margin-top: 0;
    color: #2d3436;
  }
  
  p {
    color: #636e72;
    margin-bottom: 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-top: 0;
    color: #0984e3;
  }
  
  p {
    color: #636e72;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0984e3;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1rem;
    color: #636e72;
    line-height: 1.5;
  }
`;

const RoleList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const RoleItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out ${props => props.$delay}s forwards;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-top: 0;
    color: #0984e3;
  }
  
  p {
    color: #636e72;
  }
`;

const LegacyContent = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    
    strong {
      color: #0984e3;
    }
  }
`;

const SHFSection = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #0984e3, #00cec9);
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

export default DrMangalSingh;