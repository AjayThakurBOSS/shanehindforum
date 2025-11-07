import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomePage from "../HomePage";
import WhyVeryUnique from "../../components/WhyVeryUnique";

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
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
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #ffffff, #dbeafe);
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
  color: #e2e8f0;
  line-height: 1.6;
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  color: #1e293b;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #3b82f6, #10b981);
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #334155;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: #1e40af;
    font-weight: 600;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #fcd34d 0%, #f59e0b 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 90%;
  padding: 0.1em 0;
`;

const CallToAction = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CtaButton = styled(Link)`
  background: linear-gradient(to right, #3b82f6, #2563eb);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: linear-gradient(to right, #2563eb, #1d4ed8);
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
    background: radial-gradient(circle, #10b981, transparent 70%);
    bottom: -300px;
    left: -300px;
  }
`;

const FutureOfCountry = () => {
  return (
    <HomePage>
    <HeroSection>
      <DecorativeElement />
      <DecorativeElement />
      <Container>
        <HeroContent>
          <Title>The Future of Our Country</Title>
          <Subtitle>
            Shaping India's destiny through unity, leadership, and constitutional values
          </Subtitle>
          
          <ContentCard>
            <Paragraph>
              It is true that the future of our country depends on the thoughts of its leaders and its many leading <strong>political, social, spiritual, educational</strong> and <strong>scientific</strong> personalities in their respective segments. And of course, the young generations of we, the people of India, who are the future destiny of our country.
            </Paragraph>
            
            <Paragraph>
              All these segments of our nation must work as a <Highlight>noble family</Highlight> with respect and regard for each other for the sustenance and growth of the whole nation and humanity. Among all, the political class who leads and serves the masses are at the top helm, as they have been provided unique responsibilities of running, keeping, nurturing, serving, and safeguarding the whole nation by our noble Constitution.
            </Paragraph>
            
            <Paragraph>
              All the above leaders are good and competent, but for getting votes and power at any cost, they sometimes play a very serious game of <Highlight>divide and rule</Highlight> among the public. This erodes public harmony and begins unrest, tension, and riots, affecting the unity and integrity of the nation and polluting the spirit of the whole country. This is the most serious issue.
            </Paragraph>
            
            <Paragraph>
              This policy is not good, and it is the need of our time that all politicians should collectively think about how to end this policy of divide and rule for the future of this country. Moreover, it is true that this great country was under foreign rule for hundreds of years, and every historian says that this was the only reason for the slavery of this country. But very unfortunately, this policy has continued even after independence till the present time, and politicians and their supremos appear bound to follow this for gaining votes for their party and gaining power at any cost.
            </Paragraph>
            
            <Paragraph>
              Therefore, we—the countrymen, youth, and intellectuals—should ponder how to end this. This is a great problem, and every problem has a solution. In our opinion, the solution can be a <Highlight>two-party democracy</Highlight> by the people.
            </Paragraph>
            
            <Paragraph>
              As the above leaders are the contemporary fate of the nation, and this country is in their hands at this time. But for the better fate of this country, it will certainly be a two-party democracy in an organized way, and subsequently, their younger leaders who can lead a movement to the people and make this happen in the country. And this <strong>Shane Hind Forum</strong> is such a movement and forum.
            </Paragraph>
          </ContentCard>
          
          <CallToAction>
            <CtaButton to="/join-shf">
              Join the Movement
            </CtaButton>
          </CallToAction>
        </HeroContent>
      </Container>
    </HeroSection>
    <WhyVeryUnique/>
    </HomePage>
  );
};

export default FutureOfCountry;