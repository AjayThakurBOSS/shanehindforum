import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// Styled Components
const JoinContainer = styled.div`
  max-width: 1250px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const UrgencyBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(231, 76, 60, 0.3);
  margin: 1rem 0;
  animation: ${pulse} 2s infinite;
`;

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const ReasonCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid ${props => props.borderColor || '#3498db'};
  animation: ${fadeInUp} 0.8s ease-out;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  &:nth-child(1) {
    animation-delay: 0.2s;
    border-top-color: #3498db;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
    border-top-color: #e74c3c;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
    border-top-color: #2ecc71;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
    border-top-color: #f39c12;
  }
`;

const ReasonNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.bgColor || '#e3f2fd'};
  color: ${props => props.color || '#3498db'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ReasonTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ReasonContent = styled.p`
  color: #34495e;
  line-height: 1.7;
`;

const ImpactSection = styled.div`
  background: linear-gradient(135deg, #2c3e50, #3498db);
  border-radius: 16px;
  padding: 3rem;
  margin: 4rem 0;
  color: white;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 1s;
  animation-fill-mode: both;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ImpactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ImpactList = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

const ImpactItem = styled.li`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  position: relative;
  font-size: 1.1rem;
  line-height: 1.7;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e74c3c;
  }
`;

const CtaSection = styled.div`
  text-align: center;
  margin: 4rem 0;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 1.2s;
  animation-fill-mode: both;
`;

const CtaButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(231, 76, 60, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(231, 76, 60, 0.4);
  }
`;

const JoinShaneHindForum = () => {
  const reasonsToJoin = [
    {
      number: 1,
      title: "Fix Our Broken Political System",
      content: "The current multi-party chaos creates policy paralysis, unstable governments, and wasted resources. Our two-party Neo-Democracy model brings stability, accountability, and clear governance alternatives.",
      color: "#3498db",
      bgColor: "#e3f2fd"
    },
    {
      number: 2,
      title: "End Divisive Politics",
      content: "The fragmentation of votes along caste, religion and regional lines is tearing our social fabric. We're building a movement that unites citizens around national development rather than identity politics.",
      color: "#e74c3c",
      bgColor: "#ffebee"
    },
    {
      number: 3,
      title: "Create Policy-First Governance",
      content: "Under Dr. Singh's leadership, we bring evidence-based policymaking to politics. Just as medicine requires expertise, so does governance - we'll replace populism with professional administration.",
      color: "#2ecc71",
      bgColor: "#e8f5e9"
    },
    {
      number: 4,
      title: "Your Voice Matters",
      content: "This isn't about personalities - it's about structural reform. Every member shapes our agenda through democratic processes within the Forum. This is your chance to redesign democracy itself.",
      color: "#f39c12",
      bgColor: "#fff8e1"
    }
  ];

  const societalImpacts = [
    "Reduction in election-related violence and expenditures by streamlining the political process",
    "Stable governments that can implement long-term development plans without mid-term collapses",
    "Accountable leadership with clear performance metrics - just like Dr. Singh's medical approach to governance",
    "End to policy flip-flops as both parties will compete on implementation efficiency rather than ideological extremes",
    "Professionalization of politics - attracting talent from medicine, engineering, academia rather than just career politicians",
    "Grassroots empowerment through local councils that feed into national policymaking",
    "Evidence-based legislation replacing populist measures that damage long-term national interests"
  ];

  return (
    <JoinContainer>
      <HeroSection>
        <MainHeading>The Political Revolution India Desperately Needs</MainHeading>
        <SubHeading>
          Join the only movement fundamentally redesigning our democracy for the 21st century - 
          combining medical precision with constitutional reform for a healthier nation
        </SubHeading>
        <UrgencyBadge>This is our last chance to fix democracy before it's too late</UrgencyBadge>
      </HeroSection>

      <ReasonsGrid>
        {reasonsToJoin.map((reason, index) => (
          <ReasonCard key={index} borderColor={reason.color}>
            <ReasonNumber bgColor={reason.bgColor} color={reason.color}>
              {reason.number}
            </ReasonNumber>
            <ReasonTitle>{reason.title}</ReasonTitle>
            <ReasonContent>{reason.content}</ReasonContent>
          </ReasonCard>
        ))}
      </ReasonsGrid>

      <ImpactSection>
        <ImpactTitle>How Shane Hind Forum Will Transform India:</ImpactTitle>
        <ImpactList>
          {societalImpacts.map((impact, index) => (
            <ImpactItem key={index}>{impact}</ImpactItem>
          ))}
        </ImpactList>
      </ImpactSection>

      <CtaSection>
        <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
          The Time for Passive Observation is Over
        </h2>
        <p style={{ color: '#7f8c8d', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
          History will judge this generation by whether we fixed our failing democracy or let it collapse under its own inefficiencies. 
          Under Dr. Awdhesh Kumar Singh's visionary leadership, we have both the medical approach to systemic health 
          and the political blueprint for transformation.
        </p>
        <CtaButton ><Link to='/join-shf'>Join the Movement Today</Link> </CtaButton>
      </CtaSection>
    </JoinContainer>
  );
};

export default JoinShaneHindForum;