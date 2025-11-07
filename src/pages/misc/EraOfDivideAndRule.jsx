import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomePage from "../HomePage";
import WhyVeryUnique from "../../components/WhyVeryUnique";

const HeroSection = styled.section`
  background: linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%);
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
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #fecaca);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #fca5a5;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const QuoteCard = styled.div`
  background: rgba(254, 226, 226, 0.9);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 6px solid #dc2626;
  text-align: left;
  position: relative;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const QuoteText = styled.blockquote`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #7f1d1d;
  font-style: italic;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;

  &:before {
    content: '"';
    position: absolute;
    left: 0;
    top: -0.5rem;
    font-size: 3rem;
    color: rgba(220, 38, 38, 0.2);
    font-family: serif;
  }
`;

const QuoteAuthor = styled.div`
  font-weight: 700;
  color: #991b1b;
  text-align: right;
  font-size: 1.1rem;
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  color: #1e293b;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  text-align: left;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #dc2626, #991b1b);
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
    color: #991b1b;
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

const ExampleBox = styled.div`
  background: #fee2e2;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid #dc2626;
`;

const ExampleTitle = styled.h3`
  font-size: 1.2rem;
  color: #7f1d1d;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '⚠️';
    margin-right: 0.5rem;
  }
`;

const CallToAction = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CtaButton = styled(Link)`
  background: linear-gradient(to right, #dc2626, #991b1b);
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
    background: linear-gradient(to right, #b91c1c, #7f1d1d);
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
    background: radial-gradient(circle, #fca5a5, transparent 70%);
    bottom: -300px;
    left: -300px;
  }
`;

const EraOfDivideAndRule = () => {
  return (
    <HomePage>
    <HeroSection>
      <DecorativeElement />
      <DecorativeElement />
      <Container>
        <HeroContent>
          <Title>The Era of Divide and Rule</Title>
          <Subtitle>Ongoing and Impending Internal Conflict in Our Country</Subtitle>
          
          <QuoteCard>
            <QuoteText>
              In addition to our old enemies in the form of castes and creeds, we are going to have many political parties with diverse and opposing political creeds. Will Indians place the country above their creed or will they place creed above country? I do not know. But this much is certain that if the parties place creed above country, our independence will be put in jeopardy a second time and probably be lost forever. This eventuality we must all resolutely guard against. We must be determined to defend our independence with the last drop of our blood.
            </QuoteText>
            <QuoteAuthor>— Dr. Bhimrao Ambedkar, 26 Nov 1949, Constituent Assembly Speech</QuoteAuthor>
          </QuoteCard>
          
          <ContentCard>
            <Paragraph>
              The above prophetic warning from Dr. Ambedkar forms the foundational basis for the creation of <strong>Shane Hind Forum</strong>, which pledges to fight against this divisive politics until our objective is achieved.
            </Paragraph>
            
            <ExampleBox>
              <ExampleTitle>West Bengal, 2019</ExampleTitle>
              <Paragraph>
                Police detained the CBI team that had reached the residence of Kolkata Police Commissioner Rajeev Kumar. The team was taken to a police station, resulting in a CBI versus Bengal Police confrontation—primarily due to political ego clashes between the Centre and Chief Minister Mamata Banerjee. This is just one of many such unfortunate incidents that have occurred repeatedly across the country.
              </Paragraph>
            </ExampleBox>
            
            <Paragraph>
              Political parties are <Highlight>thrashing the system</Highlight> in ways that, on one hand, undermine the unity and integrity of the country, and on the other hand, create dangerous rifts in constitutional institutions and even within our armed forces. This goes against the spirit of the Indian Constitution, against humanity, against democratic institutions, against public interest, and ultimately against the nation itself.
            </Paragraph>
            
            <Paragraph>
              When we ask common citizens whether our democratic government is truly <em>"by the people, for the people, of the people"</em>, most respond that it has dangerously transformed into <Highlight>"by the party, for the party, of the party"</Highlight>. This is the harsh reality of today's political landscape, where parties prioritize their political creeds above all else.
            </Paragraph>
            
            <Paragraph>
              Although India has hundreds of political parties, their internal culture resembles <strong>princely states</strong> of pre-independence India, with absolute control by their supremos—functioning more like private limited companies than democratic institutions. This fundamentally violates the basic norms of democracy.
            </Paragraph>
            
            <Paragraph>
              <strong>Shane Hind Forum</strong> is committed to ending this destructive era of divide and rule politics. We envision a political system where national interest supersedes partisan politics, where institutions function independently, and where democracy truly serves the people.
            </Paragraph>
          </ContentCard>
          
          <CallToAction>
            <CtaButton to="/join-shf">
              Join the Fight Against Divisive Politics
            </CtaButton>
          </CallToAction>
        </HeroContent>
      </Container>
    </HeroSection>
    <WhyVeryUnique/>
    </HomePage>
  );
};

export default EraOfDivideAndRule;
