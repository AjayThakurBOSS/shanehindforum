import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  padding: 5rem 0;
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

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4299e1 0%, #38b2ac 100%);
    border-radius: 2px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #4299e1, #38b2ac);
    transition: width 0.3s ease;
  }
  
  &:hover:before {
    width: 8px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 60%;
    background: #4299e1;
    border-radius: 2px;
  }
`;

const CardText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ArrowLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: #2b6cb0;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2c5282;
    transform: translateX(5px);
  }
  
  &:after {
    content: '→';
    margin-left: 0.5rem;
    transition: all 0.3s ease;
  }
  
  &:hover:after {
    margin-left: 0.8rem;
  }
`;

const Decoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(66, 153, 225, 0.1);
  z-index: 1;
  
  &:nth-child(1) {
    top: -100px;
    right: -100px;
  }
  
  &:nth-child(2) {
    bottom: -150px;
    left: -150px;
    width: 400px;
    height: 400px;
    background: rgba(56, 178, 172, 0.1);
  }
`;

export default function WhyVeryUnique() {
  return (
    <Section>
      <Decoration />
      <Decoration />
      <Container>
        <Heading>Why Very Unique</Heading>
        <CardGrid>
          <Card>
            <CardTitle>Future of the Country</CardTitle>
            <CardText>
              It is true that country depend on thought of its leader and its
              many leading political, social, spiritual and scientific
              personalities. Our approach brings together these diverse elements
              to create a unified vision for progress.
            </CardText>
            <ArrowLink to="/future-country">Learn More</ArrowLink>
          </Card>

          <Card>
            <CardTitle>Era of Divide and Rule</CardTitle>
            <CardText>
              Ongoing and impending internal conflict in our country threatens
              our collective future. We analyze the roots of these divisions and
              propose concrete solutions to bridge the gaps in our society.
            </CardText>
            <ArrowLink to="/era-divide-rule">Read More</ArrowLink>
          </Card>

          <Card>
            <CardTitle>Ending the Divide and Rule Policy</CardTitle>
            <CardText>
              The biggest unique feature of this hypothesis is establishment of
              a pro-constitutional model that promotes unity while respecting
              diversity. Discover how we can move beyond outdated strategies.
            </CardText>
            <ArrowLink to="/end-divide-rule">Read More</ArrowLink>
          </Card>
        </CardGrid>
      </Container>
    </Section>
  );
}