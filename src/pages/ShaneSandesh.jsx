import React from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';
import CTAComponent from '../components/CTAComponent';
import YouthEmpowermentDocument from '../components/YouthEmpowermentDocument';

const SandeshContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  margin-top: 4rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-left: 5px solid #2c3e50;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #e74c3c;
    margin: 0.5rem auto;
  }
`;

const Subtitle = styled.h2`
  color: #34495e;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const MessageContent = styled.div`
  line-height: 1.6;
  color: #333;
  text-align: justify;
  
  p {
    margin-bottom: 1rem;
    text-indent: 2rem;
  }
  
  strong {
    color: #2c3e50;
  }
`;

const Signature = styled.div`
  text-align: right;
  margin-top: 2rem;
  font-style: italic;
  color: #7f8c8d;
`;

const ShaneSandesh = () => {
  return (
    <HomePage>
      <YouthEmpowermentDocument/>
    <SandeshContainer>
      <Title>Shane Sandesh</Title>
      <Subtitle>Message from the Shane Hind Forum to Society and Nation</Subtitle>
      
      <MessageContent>
        <p>Dear Citizens,</p>
        
        <p>In these transformative times, the <strong>Shane Hind Forum</strong> extends its heartfelt message to our society and nation. We stand at a crucial juncture where unity, wisdom, and collective action can lead us to greater heights.</p>
        
        <p>Our organization believes in the <strong>power of knowledge, cultural preservation, and social harmony</strong>. As we navigate the challenges of modernity, let us not forget the timeless values that have sustained our civilization for centuries.</p>
        
        <p>We call upon every citizen to:</p>
        
        <ul>
          <li>Embrace education as the foundation of progress</li>
          <li>Respect our diverse traditions while building a shared future</li>
          <li>Participate actively in the democratic process</li>
          <li>Protect our environment for future generations</li>
          <li>Promote peace and understanding in all communities</li>
        </ul>
        
        <p>The Shane Hind Forum remains committed to being a bridge between our rich heritage and the demands of contemporary life. Through dialogue, research, and community engagement, we strive to contribute to national development.</p>
        
        <p>Let us move forward together with <strong>hope, determination, and mutual respect</strong>. The strength of our nation lies in the character of its people, and we have every confidence in our collective ability to build a brighter tomorrow.</p>
      </MessageContent>
      
      <Signature>
        <p>With warm regards,</p>
        <p>The Shane Hind Forum</p>
      </Signature>
    </SandeshContainer>
    <CTAComponent/>
    </HomePage>
  );
};

export default ShaneSandesh;