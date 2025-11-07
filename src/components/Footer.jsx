import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a2e;
  color: #fff;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

const FooterHeading = styled.h3`
  color: #e94560;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #e94560;
  }

  span{
    color: yellow;
    font-weight: 600;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: #b8b8b8;
    text-decoration: none;
    transition: color 0.3s, padding-left 0.3s;

    &:hover {
      color: #fff;
      padding-left: 5px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #b8b8b8;

  svg {
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    color: #e94560;
    min-width: 20px;
  }
`;

const ContactText = styled.div`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SubscriptionForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubscriptionInput = styled.input`
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #b8b8b8;
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SubscriptionButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #e94560;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d13354;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: #b8b8b8;
    font-size: 1.25rem;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #e94560;
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0;
  }
`;

const Copyright = styled.p`
  color: #b8b8b8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const FooterNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    color: #b8b8b8;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;

    &:hover {
      color: #e94560;
    }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>About <span>Shane Hind Forum</span></FooterHeading>
          <p style={{ color: '#b8b8b8', lineHeight: '1.6' }}>
            The SHF is dedicated to spreading knowledge and wisdom through various initiatives, events, and publications.
          </p>
          <SocialLinks>
            <a href="https://www.facebook.com/shanehindforum.singhak" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/shanehind.india" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/ForumHind" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/@ShaneHindForum" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink><a href="/upcoming-events">Upcoming Events</a></FooterLink>
            <FooterLink><a href="/shane-sandesh">Shane Sandesh</a></FooterLink>
            <FooterLink><a href="/join-shf">Join SHF</a></FooterLink>
            <FooterLink><a href="/donate">Donate</a></FooterLink>
            <FooterLink><a href="/about-forum">About the Forum</a></FooterLink>
            <FooterLink><a href="/neo-democracy">Neo-democracy</a></FooterLink>
            <FooterLink><a href="/founder">Founder</a></FooterLink>
            <FooterLink><a href="/contact-us">Contact Us</a></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactInfo>
            <FaMapMarkerAlt />
            <ContactText>
              123 Wisdom Avenue<br />
              Knowledge City, IN 123456
            </ContactText>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <ContactText>+91 12345 67890</ContactText>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <ContactText>info@shfexample.com</ContactText>
          </ContactInfo> 
        </FooterSection>

        <FooterSection>
          <FooterHeading>Newsletter</FooterHeading>
          <p style={{ color: '#b8b8b8', marginBottom: '1.5rem' }}>
            Subscribe to our newsletter to receive updates on events and publications.
          </p>
          {subscribed ? (
            <div style={{ color: '#4BB543', fontWeight: '500' }}>
              Thank you for subscribing!
            </div>
          ) : (
            <SubscriptionForm onSubmit={handleSubmit}>
              <SubscriptionInput
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscriptionButton type="submit">
                Subscribe
              </SubscriptionButton>
            </SubscriptionForm>
          )}
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterNav>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/sitemap">Sitemap</a>
        </FooterNav>
        <Copyright>
          &copy; {new Date().getFullYear()} SHF. All Rights Reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
