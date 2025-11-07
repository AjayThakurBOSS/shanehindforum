import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HomePage from './HomePage';
import CTAComponent from '../components/CTAComponent';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const JoinPage = () => {
  const [activeTab, setActiveTab] = useState('whyJoin');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    profession: '',
    interests: [],
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      // Submit final form
      console.log('Form submitted:', formData);
      setFormStep(1);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        profession: '',
        interests: [],
        paymentMethod: ''
      });
    }
  };

  return (
    <HomePage>
        <PageContainer>
        <HeroSection>
            <HeroOverlay />
            <HeroContent>
            <HeroTitle>Join the Neo-Democracy Movement</HeroTitle>
            <HeroSubtitle>Be Part of India's Constitutional Renaissance</HeroSubtitle>
            </HeroContent>
        </HeroSection>

        <NavigationTabs>
            <TabButton 
            active={activeTab === 'whyJoin'} 
            onClick={() => setActiveTab('whyJoin')}
            >
            Why Join?
            </TabButton>
            <TabButton 
            active={activeTab === 'member'} 
            onClick={() => setActiveTab('member')}
            >
            Become a Member
            </TabButton>
            <TabButton 
            active={activeTab === 'volunteer'} 
            onClick={() => setActiveTab('volunteer')}
            >
            Volunteer
            </TabButton>
        </NavigationTabs>

        <ContentContainer>
            {activeTab === 'whyJoin' && (
              <>
            <WhyJoinSection>
                <SectionTitle>The Shane Hind Forum Difference</SectionTitle>
                
                <BenefitCard>
                <BenefitIcon>🌱</BenefitIcon>
                <BenefitContent>
                    <BenefitTitle>Personal Transformation</BenefitTitle>
                    <BenefitDescription>
                    Joining Shane Hind Forum isn't just about political change - it's about your personal evolution. 
                    You'll gain profound understanding of constitutional values that will reshape how you see citizenship, 
                    community, and your role in society. Our members report feeling empowered, purposeful, and 
                    connected to something greater than themselves.
                    </BenefitDescription>
                </BenefitContent>
                </BenefitCard>

                <BenefitCard>
                <BenefitIcon>🧠</BenefitIcon>
                <BenefitContent>
                    <BenefitTitle>Intellectual Enlightenment</BenefitTitle>
                    <BenefitDescription>
                    Engage with India's brightest constitutional minds through our exclusive seminars, study circles, 
                    and discussion forums. You'll develop critical thinking skills and political awareness that 
                    sets you apart. Our educational programs are designed to create informed citizens who can 
                    participate meaningfully in democratic processes.
                    </BenefitDescription>
                </BenefitContent>
                </BenefitCard>

                <BenefitCard>
                <BenefitIcon>🤝</BenefitIcon>
                <BenefitContent>
                    <BenefitTitle>Powerful Network</BenefitTitle>
                    <BenefitDescription>
                    Connect with like-minded individuals who share your passion for authentic democracy. Our 
                    community includes jurists, academics, activists, and concerned citizens from across India. 
                    These relationships often lead to professional opportunities, lifelong friendships, and 
                    collaborative projects that create real change.
                    </BenefitDescription>
                </BenefitContent>
                </BenefitCard>

                <ImpactSection>
                <ImpactTitle>Your Membership Creates Ripple Effects</ImpactTitle>
                <ImpactGrid>
                    <ImpactItem>
                    <ImpactNumber>10x</ImpactNumber>
                    <ImpactText>Increase in civic engagement among our members</ImpactText>
                    </ImpactItem>
                    <ImpactItem>
                    <ImpactNumber>85%</ImpactNumber>
                    <ImpactText>Of members report improved understanding of democracy</ImpactText>
                    </ImpactItem>
                    <ImpactItem>
                    <ImpactNumber>200+</ImpactNumber>
                    <ImpactText>Community projects initiated by our members annually</ImpactText>
                    </ImpactItem>
                </ImpactGrid>
                </ImpactSection>

                <TestimonialSection>
                <TestimonialTitle>Voices of Our Members</TestimonialTitle>
                <Testimonials>
                    <TestimonialCard>
                    <TestimonialText>
                        "Joining SHF transformed me from a passive voter to an active citizen. I now understand 
                        my constitutional rights and duties in ways I never imagined."
                    </TestimonialText>
                    <TestimonialAuthor>- Priya K., Mumbai</TestimonialAuthor>
                    </TestimonialCard>
                    <TestimonialCard>
                    <TestimonialText>
                        "The intellectual stimulation I've received through Forum events has been life-changing. 
                        I've met Supreme Court justices, renowned academics, and grassroots activists."
                    </TestimonialText>
                    <TestimonialAuthor>- Rohan S., Delhi</TestimonialAuthor>
                    </TestimonialCard>
                </Testimonials>
                </TestimonialSection>
               
            </WhyJoinSection>
            <CTAComponent/>
            </>
            )}

            {activeTab === 'member' && (
            <FormContainer>
                <FormProgress>
                <ProgressStep active={formStep >= 1}>1. Your Details</ProgressStep>
                <ProgressStep active={formStep >= 2}>2. Payment</ProgressStep>
                <ProgressStep active={formStep >= 3}>3. Confirmation</ProgressStep>
                </FormProgress>

                <JoinForm onSubmit={handleSubmit}>
                {formStep === 1 && (
                    <FormStep>
                    <FormTitle>Become a Member</FormTitle>
                    <FormDescription>
                        Join thousands of citizens working to restore true democracy in India. Membership includes 
                        access to all events, publications, and our exclusive member network.
                    </FormDescription>
                    
                    <FormGroup>
                        <FormLabel>Full Name*</FormLabel>
                        <FormInput 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        required 
                        />
                    </FormGroup>

                    <FormRow>
                        <FormGroup>
                        <FormLabel>Email*</FormLabel>
                        <FormInput 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required 
                        />
                        </FormGroup>
                        <FormGroup>
                        <FormLabel>Phone*</FormLabel>
                        <FormInput 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            required 
                        />
                        </FormGroup>
                    </FormRow>

                    <FormGroup>
                        <FormLabel>Address*</FormLabel>
                        <FormInput 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        required 
                        />
                    </FormGroup>

                    <FormRow>
                        <FormGroup>
                        <FormLabel>City*</FormLabel>
                        <FormInput 
                            type="text" 
                            name="city" 
                            value={formData.city} 
                            onChange={handleInputChange} 
                            required 
                        />
                        </FormGroup>
                        <FormGroup>
                        <FormLabel>State*</FormLabel>
                        <FormInput 
                            type="text" 
                            name="state" 
                            value={formData.state} 
                            onChange={handleInputChange} 
                            required 
                        />
                        </FormGroup>
                        <FormGroup>
                        <FormLabel>Pincode*</FormLabel>
                        <FormInput 
                            type="text" 
                            name="pincode" 
                            value={formData.pincode} 
                            onChange={handleInputChange} 
                            required 
                        />
                        </FormGroup>
                    </FormRow>

                    <FormGroup>
                        <FormLabel>Profession</FormLabel>
                        <FormInput 
                        type="text" 
                        name="profession" 
                        value={formData.profession} 
                        onChange={handleInputChange} 
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Areas of Interest (Select all that apply)</FormLabel>
                        <CheckboxGroup>
                        <CheckboxLabel>
                            <input 
                            type="checkbox" 
                            name="interests" 
                            value="constitutional_studies" 
                            checked={formData.interests.includes('constitutional_studies')}
                            onChange={handleInputChange}
                            />
                            Constitutional Studies
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input 
                            type="checkbox" 
                            name="interests" 
                            value="political_reform" 
                            checked={formData.interests.includes('political_reform')}
                            onChange={handleInputChange}
                            />
                            Political Reform
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input 
                            type="checkbox" 
                            name="interests" 
                            value="community_outreach" 
                            checked={formData.interests.includes('community_outreach')}
                            onChange={handleInputChange}
                            />
                            Community Outreach
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input 
                            type="checkbox" 
                            name="interests" 
                            value="youth_engagement" 
                            checked={formData.interests.includes('youth_engagement')}
                            onChange={handleInputChange}
                            />
                            Youth Engagement
                        </CheckboxLabel>
                        </CheckboxGroup>
                    </FormGroup>

                    <FormActions>
                        <NextButton type="submit">Continue to Payment</NextButton>
                    </FormActions>
                    </FormStep>
                )}

                {formStep === 2 && (
                    <FormStep>
                    <FormTitle>Membership Payment</FormTitle>
                    <FormDescription>
                        Choose your membership plan and payment method to complete your registration.
                    </FormDescription>

                    <MembershipPlans>
                        <PlanCard>
                        <PlanName>Standard Member</PlanName>
                        <PlanPrice>₹1,000/year</PlanPrice>
                        <PlanFeatures>
                            <li>Access to all events</li>
                            <li>Monthly newsletter</li>
                            <li>Member network access</li>
                        </PlanFeatures>
                        <PlanRadio 
                            type="radio" 
                            name="membershipType" 
                            value="standard" 
                            checked 
                            onChange={() => {}}
                        />
                        </PlanCard>

                        <PlanCard highlighted>
                        <PlanBadge>Most Popular</PlanBadge>
                        <PlanName>Sustaining Member</PlanName>
                        <PlanPrice>₹2,500/year</PlanPrice>
                        <PlanFeatures>
                            <li>All Standard benefits</li>
                            <li>Exclusive webinars</li>
                            <li>Printed publications</li>
                            <li>VIP event access</li>
                        </PlanFeatures>
                        <PlanRadio 
                            type="radio" 
                            name="membershipType" 
                            value="sustaining" 
                            onChange={() => {}}
                        />
                        </PlanCard>

                        <PlanCard>
                        <PlanName>Lifetime Member</PlanName>
                        <PlanPrice>₹10,000</PlanPrice>
                        <PlanFeatures>
                            <li>All Sustaining benefits</li>
                            <li>Lifetime membership</li>
                            <li>Founder recognition</li>
                            <li>Special invitations</li>
                        </PlanFeatures>
                        <PlanRadio 
                            type="radio" 
                            name="membershipType" 
                            value="lifetime" 
                            onChange={() => {}}
                        />
                        </PlanCard>
                    </MembershipPlans>

                    <PaymentMethods>
                        <PaymentTitle>Payment Method</PaymentTitle>
                        <PaymentOptions>
                        <PaymentOption>
                            <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="upi" 
                            checked={formData.paymentMethod === 'upi'}
                            onChange={handleInputChange}
                            required
                            />
                            <PaymentLabel>
                            <PaymentIcon>💳</PaymentIcon>
                            UPI Payment
                            </PaymentLabel>
                        </PaymentOption>
                        <PaymentOption>
                            <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="card" 
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            />
                            <PaymentLabel>
                            <PaymentIcon>🏦</PaymentIcon>
                            Credit/Debit Card
                            </PaymentLabel>
                        </PaymentOption>
                        <PaymentOption>
                            <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="netbanking" 
                            checked={formData.paymentMethod === 'netbanking'}
                            onChange={handleInputChange}
                            />
                            <PaymentLabel>
                            <PaymentIcon>📱</PaymentIcon>
                            Net Banking
                            </PaymentLabel>
                        </PaymentOption>
                        </PaymentOptions>
                    </PaymentMethods>

                    <FormActions>
                        <BackButton type="button" onClick={() => setFormStep(1)}>
                        Back
                        </BackButton>
                        <NextButton type="submit">Complete Payment</NextButton>
                    </FormActions>
                    </FormStep>
                )}

                {formStep === 3 && (
                    <FormStep>
                    <SuccessIcon>✓</SuccessIcon>
                    <FormTitle>Welcome to Shane Hind Forum!</FormTitle>
                    <SuccessMessage>
                        Thank you for joining the neo-democracy movement. Your membership has been confirmed and 
                        payment receipt has been sent to {formData.email}.
                    </SuccessMessage>
                    
                    <NextSteps>
                        <NextStepTitle>What's Next?</NextStepTitle>
                        <NextStepItem>
                        <strong>1.</strong> You'll receive a welcome email with member resources
                        </NextStepItem>
                        <NextStepItem>
                        <strong>2.</strong> Our local coordinator will contact you within 3 days
                        </NextStepItem>
                        <NextStepItem>
                        <strong>3.</strong> Check your inbox for upcoming event invitations
                        </NextStepItem>
                    </NextSteps>

                    <MemberResources>
                        <ResourceLink href="#">
                        Download Member Handbook
                        </ResourceLink>
                        <ResourceLink href="#">
                        Join Our WhatsApp Community
                        </ResourceLink>
                        <ResourceLink href="#">
                        Explore Upcoming Events
                        </ResourceLink>
                    </MemberResources>
                    </FormStep>
                )}
                </JoinForm>
            </FormContainer>
            )}

            {activeTab === 'volunteer' && (
            <FormContainer>
                <FormTitle>Volunteer Application</FormTitle>
                <FormDescription>
                Join our team of passionate volunteers working to transform Indian democracy. 
                Tell us about yourself and how you'd like to contribute.
                </FormDescription>

                <VolunteerForm>
                <FormGroup>
                    <FormLabel>Full Name*</FormLabel>
                    <FormInput type="text" required />
                </FormGroup>

                <FormRow>
                    <FormGroup>
                    <FormLabel>Email*</FormLabel>
                    <FormInput type="email" required />
                    </FormGroup>
                    <FormGroup>
                    <FormLabel>Phone*</FormLabel>
                    <FormInput type="tel" required />
                    </FormGroup>
                </FormRow>

                <FormGroup>
                    <FormLabel>City*</FormLabel>
                    <FormInput type="text" required />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Why do you want to volunteer with Shane Hind Forum?*</FormLabel>
                    <FormTextarea rows="4" required></FormTextarea>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Areas of Interest*</FormLabel>
                    <FormSelect required>
                    <option value="">Select your interests</option>
                    <option value="events">Event Organization</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="research">Policy Research</option>
                    <option value="media">Social Media</option>
                    <option value="fundraising">Fundraising</option>
                    </FormSelect>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Time Commitment*</FormLabel>
                    <FormSelect required>
                    <option value="">Select availability</option>
                    <option value="5-10">5-10 hours/month</option>
                    <option value="10-20">10-20 hours/month</option>
                    <option value="20+">20+ hours/month</option>
                    </FormSelect>
                </FormGroup>

                <FormActions>
                    <SubmitButton type="submit">Apply to Volunteer</SubmitButton>
                </FormActions>
                </VolunteerForm>
            </FormContainer>
            )}
        </ContentContainer>
        </PageContainer>
    </HomePage>
  );
};


// Styled Components


const PageContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2d3748;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 0 2rem;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavigationTabs = styled.div`
  display: flex;
  justify-content: center;
  background: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
`;

const TabButton = styled.button`
  padding: 1.2rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? '#2b6cb0' : '#4a5568'};
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#2b6cb0' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #2b6cb0;
    background: rgba(66, 153, 225, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const WhyJoinSection = styled.section``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #4299e1;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const BenefitIcon = styled.div`
  font-size: 3rem;
  margin-right: 2rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const BenefitContent = styled.div``;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b6cb0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const BenefitDescription = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImpactSection = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 3rem;
  margin: 4rem 0;
  text-align: center;
`;

const ImpactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImpactItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ImpactNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2b6cb0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ImpactText = styled.p`
  font-size: 1.1rem;
  color: #4a5568;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialSection = styled.div`
  margin-top: 4rem;
`;

const TestimonialTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a365d;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Testimonials = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.7;

  &:before {
    content: '"';
    font-size: 3rem;
    line-height: 0;
    color: #4299e1;
    opacity: 0.3;
    vertical-align: -1.5rem;
  }
`;

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: #2b6cb0;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const FormProgress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: #e2e8f0;
    z-index: 1;
  }
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  &:before {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.active ? '#4299e1' : '#e2e8f0'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  &:nth-child(1):before {
    content: '1';
  }
  &:nth-child(2):before {
    content: '2';
  }
  &:nth-child(3):before {
    content: '3';
  }
`;

const JoinForm = styled.form``;

const FormStep = styled.div``;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FormDescription = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  color: #4a5568;
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const NextButton = styled.button`
  background: #4299e1;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3182ce;
    transform: translateY(-2px);
  }
`;

const BackButton = styled.button`
  background: white;
  color: #4299e1;
  border: 1px solid #4299e1;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ebf8ff;
    transform: translateY(-2px);
  }
`;

const MembershipPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const PlanCard = styled.div`
  border: 1px solid ${props => props.highlighted ? '#4299e1' : '#e2e8f0'};
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;

  ${props => props.highlighted && `
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    transform: translateY(-5px);
  `}
`;

const PlanBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  background: #4299e1;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`;

const PlanName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2b6cb0;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;

  li {
    padding: 0.25rem 0;
    font-size: 0.9375rem;
    color: #4a5568;
    position: relative;
    padding-left: 1.5rem;

    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #48bb78;
    }
  }
`;

const PlanRadio = styled.input`
  margin-top: 0.5rem;
`;

const PaymentMethods = styled.div`
  margin: 2rem 0;
`;

const PaymentTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const PaymentOption = styled.div`
  input {
    position: absolute;
    opacity: 0;
  }

  input:checked + label {
    border-color: #4299e1;
    background: #ebf8ff;
  }
`;

const PaymentLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const PaymentIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.75rem;
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  color: #48bb78;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`;

const NextSteps = styled.div`
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const NextStepTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
`;

const NextStepItem = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4299e1;
  }
`;

const MemberResources = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const ResourceLink = styled.a`
  display: block;
  text-align: center;
  padding: 0.75rem;
  background: #4299e1;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #3182ce;
    transform: translateY(-2px);
  }
`;

const VolunteerForm = styled.form`
  margin-top: 2rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: #4299e1;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3182ce;
    transform: translateY(-2px);
  }
`;

export default JoinPage;