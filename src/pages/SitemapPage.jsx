import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const SitemapContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const SitemapTitle = styled.h1`
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: #e94560;
  }
`;

const SitemapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SitemapSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  color: #e94560;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #e94560;
  padding-bottom: 0.5rem;
`;

const SitemapList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SitemapItem = styled.li`
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.25rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #e94560;
    font-weight: bold;
  }
`;

const SitemapLink = styled(Link)`
  color: #1a1a2e;
  text-decoration: none;
  transition: color 0.3s, padding-left 0.3s;

  &:hover {
    color: #e94560;
    padding-left: 5px;
  }
`;

const SubItem = styled.li`
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #6c757d;
  }
`;

const SubLink = styled(Link)`
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #e94560;
  }
`;

const SitemapPage = () => {
  return (
    <HomePage>
    <SitemapContainer>
      <SitemapTitle>Website Sitemap</SitemapTitle>
      
      <SitemapGrid>
        {/* Main Navigation */}
        <SitemapSection>
          <SectionTitle>Main Navigation</SectionTitle>
          <SitemapList>
            <SitemapItem>
              <SitemapLink to="/">Home</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/upcoming-events">Upcoming Events</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/shane-sandesh">Shane Sandesh</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/join-shf">Join SHF</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/donate">Donate</SitemapLink>
            </SitemapItem>
          </SitemapList>
        </SitemapSection>

        {/* About Section */}
        <SitemapSection>
          <SectionTitle>About the Forum</SectionTitle>
          <SitemapList>
            <SitemapItem>
              <SitemapLink to="/about-forum">About the Forum</SitemapLink>
              <SitemapList>
                <SubItem>
                  <SubLink to="/our-philosophy">Our Philosophy</SubLink>
                </SubItem>
                <SubItem>
                  <SubLink to="/history">History of Forum</SubLink>
                </SubItem>
                <SubItem>
                  <SubLink to="/constitution">Constitution</SubLink>
                </SubItem>
              </SitemapList>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/about-leadership">About Leadership</SitemapLink>
              <SitemapList>
                <SubItem>
                  <SubLink to="/founder">Founder Dr. Awdhesh Singh</SubLink>
                </SubItem>
              </SitemapList>
            </SitemapItem>
          </SitemapList>
        </SitemapSection>

        {/* Resources Section */}
        <SitemapSection>
          <SectionTitle>Resources</SectionTitle>
          <SitemapList>
            <SitemapItem>
              <SitemapLink to="/documents">Documents & Literature</SitemapLink>
              <SitemapList>
                <SubItem>
                  <SubLink to="/books">Books</SubLink>
                </SubItem>
              </SitemapList>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/media-resources">Media Resources</SitemapLink>
              <SitemapList>
                <SubItem>
                  <SubLink to="/in-media">In Media</SubLink>
                </SubItem>
                <SubItem>
                  <SubLink to="/speeches">Speeches</SubLink>
                </SubItem>
                <SubItem>
                  <SubLink to="/interviews">Interviews</SubLink>
                </SubItem>
                <SubItem>
                  <SubLink to="/photo-gallery">Photo Gallery</SubLink>
                </SubItem>
                <SubItem>
                  <SubLink to="/video-gallery">Video Gallery</SubLink>
                </SubItem>
              </SitemapList>
            </SitemapItem>
          </SitemapList>
        </SitemapSection>

        {/* User Section */}
        <SitemapSection>
          <SectionTitle>User Section</SectionTitle>
          <SitemapList>
            <SitemapItem>
              <SitemapLink to="/login">Login</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/register">Register</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/contact">Contact Us</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/newsletter">Newsletter</SitemapLink>
            </SitemapItem>
          </SitemapList>
        </SitemapSection>

        {/* Legal Pages */}
        <SitemapSection>
          <SectionTitle>Legal Information</SectionTitle>
          <SitemapList>
            <SitemapItem>
              <SitemapLink to="/privacy-policy">Privacy Policy</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/terms-conditions">Terms & Conditions</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/disclaimer">Disclaimer</SitemapLink>
            </SitemapItem>
            <SitemapItem>
              <SitemapLink to="/sitemap">Sitemap</SitemapLink>
            </SitemapItem>
          </SitemapList>
        </SitemapSection>
      </SitemapGrid>
    </SitemapContainer>
    </HomePage>
  );
};

export default SitemapPage;