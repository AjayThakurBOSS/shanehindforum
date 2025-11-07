import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CTAComponent = () => {
  return (
    <div>
      <CTASection>
            <Container>
            <CTACard>
                <CTAContent>
                <CTATitle>Ready to join the movement?</CTATitle>
                <CTAText>
                    Whether you want to attend an event, volunteer, or organize one in your city, 
                    we welcome your participation in building neo-democracy.
                </CTAText>
                <CTAButtons>
                    <CTAButton primary> <Link to='/join-shf' >Become a Volunteer</Link> </CTAButton>
                    <CTAButton primary><Link to='/join-shf' >Become a Member</Link></CTAButton>
                    <CTAButton> <a href="tel:8858800666">Call to Query</a>  </CTAButton>
                </CTAButtons>
                </CTAContent>
            </CTACard>
            </Container>
        </CTASection>
    </div>
  )
}

export default CTAComponent

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #2b6cb0 0%, #1a365d 100%);
  color: white;
`;

const CTACard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
`;

const CTAContent = styled.div`
  padding: 3rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a365d;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const CTAButton = styled.button`
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.primary ? `
    background: #4299e1;
    color: white;

    &:hover {
      background: #3182ce;
      transform: translateY(-2px);
    }
  ` : `
    background: white;
    color: #4299e1;
    border: 2px solid #4299e1;

    &:hover {
      background: #ebf8ff;
      transform: translateY(-2px);
    }
  `}
`;
