import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomePage from "../HomePage";
import WhyVeryUnique from "../../components/WhyVeryUnique";

const HeroSection = styled.section`
  background: linear-gradient(135deg, #065f46 0%, #047857 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(to right, #ffffff, #a7f3d0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin-bottom: 3rem;
  color: #d1fae5;
  line-height: 1.6;
  text-align: center;
`;

const ConstitutionPrinciples = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const PrincipleCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #10b981, #059669);
  }
`;

const PrincipleTitle = styled.h3`
  font-size: 1.5rem;
  color: #065f46;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '⚖️';
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const PrincipleText = styled.p`
  color: #334155;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const PrincipleHighlight = styled.span`
  font-weight: 600;
  color: #065f46;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 4px;
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  color: #1e293b;
  margin-top: 2rem;
  text-align: center;
`;

const Conclusion = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #334155;
  margin-bottom: 2rem;
  
  strong {
    color: #065f46;
    font-weight: 700;
  }
`;

const CallToAction = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CtaButton = styled(Link)`
  background: linear-gradient(to right, #059669, #047857);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right, #047857, #065f46);
  }
`;

const DecorativeElement = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
  
  &:nth-child(1) {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #ffffff, transparent 70%);
    top: -100px;
    right: -100px;
  }
  
  &:nth-child(2) {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #a7f3d0, transparent 70%);
    bottom: -300px;
    left: -300px;
  }
`;

const EndOfDevideAndRule = () => {
  return (
    <HomePage>
    <HeroSection>
      <DecorativeElement />
      <DecorativeElement />
      <Container>
        <HeroContent>
          <Title>Ending the Era of Divide and Rule Policy</Title>
          <Subtitle>
            Reclaiming the Constitutional Vision for a United India
          </Subtitle>
          
          <ConstitutionPrinciples>
            <PrincipleCard>
              <PrincipleTitle>Sovereign</PrincipleTitle>
              <PrincipleText>
                The Constitution declares India as <PrincipleHighlight>sovereign</PrincipleHighlight> - where the public is sovereign. Political parties are transitory elements and lack the sovereignty criteria envisioned by our founders.
              </PrincipleText>
            </PrincipleCard>
            
            <PrincipleCard>
              <PrincipleTitle>Democratic</PrincipleTitle>
              <PrincipleText>
                Democracy means <PrincipleHighlight>"by the people, for the people, of the people"</PrincipleHighlight>, not "by the party, for the party, of the party" as it exists today. The current system is fundamentally unconstitutional.
              </PrincipleText>
            </PrincipleCard>
            
            <PrincipleCard>
              <PrincipleTitle>Republic</PrincipleTitle>
              <PrincipleText>
                Our democracy is a <PrincipleHighlight>Republic</PrincipleHighlight> - meaning "Re-public", never intended to be "Re-party". The presence of a multi-party system as it exists today is an unfortunate deviation from this principle.
              </PrincipleText>
            </PrincipleCard>
            
            <PrincipleCard>
              <PrincipleTitle>Secular</PrincipleTitle>
              <PrincipleText>
                "We the people" is inherently secular. When parties claim secularism while practicing <PrincipleHighlight>pseudo-secularism</PrincipleHighlight>, they betray the constitutional ideal.
              </PrincipleText>
            </PrincipleCard>
            
            <PrincipleCard>
              <PrincipleTitle>Socialistic</PrincipleTitle>
              <PrincipleText>
                While every party claims to be socialistic, their <PrincipleHighlight>divide and rule</PrincipleHighlight> policies contradict the social harmony and cohesion required for true socialism.
              </PrincipleText>
            </PrincipleCard>
          </ConstitutionPrinciples>
          
          <ContentCard>
            <Conclusion>
              <strong>As demonstrated above, the multi-party system in its current form is not Pro-Constitutional.</strong> The most significant feature of this initiative is the establishment of a truly Pro-Constitutional model that returns power to where it belongs - with the people.
            </Conclusion>
            
            <Conclusion>
              <strong>Shane Hind Forum</strong> stands unique in its pledge to implement the true soul of the Indian Constitution, ending the era of divisive politics and restoring governance that serves all citizens equally.
            </Conclusion>
          </ContentCard>
          
          <CallToAction>
            <CtaButton to="/join-shf">
              Join the Constitutional Movement
            </CtaButton>
          </CallToAction>
        </HeroContent>
      </Container>
    </HeroSection>
    <WhyVeryUnique/>
    </HomePage>
  );
};

export default EndOfDevideAndRule;