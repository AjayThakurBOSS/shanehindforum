import React, { useState } from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';
import CTAComponent from '../components/CTAComponent';

// Styled Components
const ContactContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const HeroBanner = styled.div`
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 768px) {
    height: 400px;
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const ContactFormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #3498db, #9b59b6);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LocationTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const TabButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #7f8c8d;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;

  &.active {
    color: #2c3e50;
    border-bottom-color: #3498db;
  }

  &:hover {
    color: #2c3e50;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const LocationContent = styled.div`
  flex: 1;
`;

const MapContainer = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #3498db;
  font-size: 1.2rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
`;

const ContactText = styled.div`
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.4;

  strong {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactHeading = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  transition: all 0.3s ease;

  &:hover {
    background: #3498db;
    color: white;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

// Contact Us Component
const ContactUsPage = () => {
  const [activeLocation, setActiveLocation] = useState('delhi');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const locations = {
    delhi: {
      name: 'Delhi Headquarters',
      address: '123 Democracy Street, Connaught Place, New Delhi - 110001',
      phone: ['+91 11 2345 6789', '+91 98765 43210'],
      email: 'delhi@shanehindforum.org',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.715454038555!2d77.20637231508318!3d28.62890098241798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5a8a6a0a3d%3A0x6a8c0a9a3a0a0a0a!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    deoria: {
      name: 'Deoria Center',
      address: '456 Freedom Lane, Near Gandhi Chowk, Deoria - 274001',
      phone: ['+91 55 1234 5678', '+91 98765 12345'],
      email: 'deoria@shanehindforum.org',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.715454038555!2d83.20637231508318!3d26.62890098241798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b7d1a0a0a0a%3A0x6a8c0a9a3a0a0a0a!2sDeoria%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    patna: {
      name: 'Patna Center',
      address: '789 Liberty Road, Near Gandhi Maidan, Patna - 800001',
      phone: ['+91 61 2345 6789', '+91 98765 67890'],
      email: 'patna@shanehindforum.org',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.715454038555!2d85.20637231508318!3d25.62890098241798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a0a0a0a0a0a%3A0x6a8c0a9a3a0a0a0a!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    lakhnaw: {
      name: 'Lucknow Center',
      address: '321 Unity Avenue, Hazratganj, Lucknow - 226001',
      phone: ['+91 52 2345 6789', '+91 98765 98765'],
      email: 'lucknow@shanehindforum.org',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.715454038555!2d80.20637231508318!3d26.82890098241798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a0a0a0a0a0a%3A0x6a8c0a9a3a0a0a0a!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const currentLocation = locations[activeLocation];

  return (
    <HomePage>
      <ContactContainer>
        <HeroBanner>
          <HeroTitle>Connect With Us</HeroTitle>
          <HeroSubtitle>
            Reach out to our team across India for inquiries, collaborations, or to learn more about our initiatives.
          </HeroSubtitle>
        </HeroBanner>

        <ContentWrapper>
          <ContactFormWrapper>
            <FormTitle>Send Us a Message</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Your Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </form>
          </ContactFormWrapper>

          <ContactInfoWrapper>
            <LocationTabs>
              <TabButton
                className={activeLocation === 'delhi' ? 'active' : ''}
                onClick={() => setActiveLocation('delhi')}
              >
                Delhi
              </TabButton>
              <TabButton
                className={activeLocation === 'deoria' ? 'active' : ''}
                onClick={() => setActiveLocation('deoria')}
              >
                Deoria
              </TabButton>
              <TabButton
                className={activeLocation === 'patna' ? 'active' : ''}
                onClick={() => setActiveLocation('patna')}
              >
                Patna
              </TabButton>
              <TabButton
                className={activeLocation === 'lakhnaw' ? 'active' : ''}
                onClick={() => setActiveLocation('lakhnaw')}
              >
                Lucknow
              </TabButton>
            </LocationTabs>

            <LocationContent>
              <ContactHeading>{currentLocation.name}</ContactHeading>
              
              <MapContainer>
                <iframe
                  title={`${currentLocation.name} Map`}
                  src={currentLocation.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </MapContainer>

              <ContactDetails>
                <ContactItem>
                  <IconWrapper>
                    <i className="fas fa-map-marker-alt"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>Address:</strong> {currentLocation.address}
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <i className="fas fa-phone"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>Phone:</strong> {currentLocation.phone.join(' / ')}
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <i className="fas fa-envelope"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>Email:</strong> {currentLocation.email}
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <i className="fab fa-whatsapp"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>WhatsApp:</strong> {currentLocation.phone[1]}
                  </ContactText>
                </ContactItem>
              </ContactDetails>

              <ContactHeading>Connect With Us</ContactHeading>
              <SocialLinks>
                <SocialLink href={`https://wa.me/${currentLocation.phone[1].replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </SocialLink>
                <SocialLink href={`mailto:${currentLocation.email}`} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i>
                </SocialLink>
                <SocialLink href="https://facebook.com/shanehindforum" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </SocialLink>
                <SocialLink href="https://twitter.com/shanehindforum" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </SocialLink>
                <SocialLink href="https://linkedin.com/company/shanehindforum" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </SocialLink>
              </SocialLinks>
            </LocationContent>
          </ContactInfoWrapper>
        </ContentWrapper>
      </ContactContainer>

      <CTAComponent/>
    </HomePage>
  );
};

export default ContactUsPage;