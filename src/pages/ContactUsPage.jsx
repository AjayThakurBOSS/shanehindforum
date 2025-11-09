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
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.9), rgba(155, 89, 182, 0.9)), 
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
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #f8f9fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.95;

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
  gap: 3rem;
  padding: 4rem 2rem;
  width: 100%;
  box-sizing: border-box;
  background: #f8f9fa;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    gap: 1.5rem;
  }
`;

const ContactFormWrapper = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #3498db;
    background: white;
    outline: none;
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 160px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;

  &:focus {
    border-color: #3498db;
    background: white;
    outline: none;
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3498db, #9b59b6);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(52, 152, 219, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LocationTabs = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid #e9ecef;
  overflow-x: auto;
  padding-bottom: 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  background: white;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0.3rem;
  }
`;

const TabButton = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.active ? 'linear-gradient(135deg, #3498db, #9b59b6)' : 'transparent'};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.active ? 'white' : '#7f8c8d'};
  font-weight: ${props => props.active ? '600' : '500'};
  white-space: nowrap;
  flex-shrink: 0;
  margin: 0 0.2rem;
  box-shadow: ${props => props.active ? '0 4px 15px rgba(52, 152, 219, 0.3)' : 'none'};

  &:hover {
    color: ${props => props.active ? 'white' : '#2c3e50'};
    background: ${props => props.active ? 'linear-gradient(135deg, #3498db, #9b59b6)' : '#f8f9fa'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const LocationContent = styled.div`
  flex: 1;
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const MapContainer = styled.div`
  height: 320px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: #f8f9fa;

  &:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
    padding: 0.8rem;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
  color: white;
  font-size: 1.3rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
    margin-right: 1rem;
  }
`;

const ContactText = styled.div`
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;

  strong {
    font-weight: 600;
    color: #2c3e50;
    display: block;
    margin-bottom: 0.3rem;
  }

  span {
    color: #6c757d;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContactHeading = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
  animation: slideIn 0.5s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const SuccessText = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = {
    delhi: {
      name: 'Delhi Headquarters',
      address: 'Flat No. 503, Saral CGHS Limited, Plot- 15 Dwarka, Sector 10, New Delhi-110075',
      phone: ['+91 8858800666', '+91 8185099777'],
      email: 'shanehindforum@gmail.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.788758422673!2d77.05821731508214!3d28.57923878244657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7f7c7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sDwarka%20Sector%2010%2C%20New%20Delhi%2C%20Delhi%20110075!5e0!3m2!1sen!2sin!4v1620000000000'
    },
    deoria: {
      name: 'Deoria Center',
      address: 'Buddha Hospital & Heart Care Center, Kailashpuri, Deoria, Uttar Pradesh 274001',
      phone: ['+91 8858800666', '+91 8185099777'],
      email: 'shanehindforum@gmail.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789012!2d83.46150731508214!3d26.50467898244657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b7d1a0a0a0a%3A0x6a8c0a9a3a0a0a0a!2sDeoria%2C%20Uttar%20Pradesh%20274001!5e0!3m2!1sen!2sin!4v1620000000000'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const currentLocation = locations[activeLocation];

  return (
    <HomePage>
      <ContactContainer>
        <HeroBanner>
          <HeroTitle>Get In Touch With Us</HeroTitle>
          <HeroSubtitle>
            We're here to help and answer any questions you might have. 
            Reach out to our team across India for inquiries, collaborations, 
            or to learn more about our initiatives.
          </HeroSubtitle>
        </HeroBanner>

        <ContentWrapper>
          <ContactFormWrapper>
            <FormTitle>Send Us a Message</FormTitle>
            
            {showSuccess && (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>Thank You!</SuccessTitle>
                <SuccessText>
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </SuccessText>
              </SuccessMessage>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email address"
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
                  placeholder="Enter your phone number"
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
                  placeholder="What is this regarding?"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Your Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </form>
          </ContactFormWrapper>

          <ContactInfoWrapper>
            <LocationTabs>
              {Object.keys(locations).map(locationKey => (
                <TabButton
                  key={locationKey}
                  active={activeLocation === locationKey}
                  onClick={() => setActiveLocation(locationKey)}
                >
                  {locations[locationKey].name.split(' ')[0]}
                </TabButton>
              ))}
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
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </MapContainer>

              <ContactDetails>
                <ContactItem>
                  <IconWrapper>
                    <i className="fas fa-map-marker-alt"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>Address</strong>
                    <span>{currentLocation.address}</span>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <i className="fas fa-phone"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>Phone</strong>
                    <span>{currentLocation.phone.join(' / ')}</span>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <i className="fas fa-envelope"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>Email</strong>
                    <span>{currentLocation.email}</span>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <i className="fab fa-whatsapp"></i>
                  </IconWrapper>
                  <ContactText>
                    <strong>WhatsApp</strong>
                    <span>{currentLocation.phone[1]}</span>
                  </ContactText>
                </ContactItem>
              </ContactDetails>

              <ContactHeading>Follow Us</ContactHeading>
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