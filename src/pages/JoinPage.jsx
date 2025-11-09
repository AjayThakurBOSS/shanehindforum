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
  const [language, setLanguage] = useState('english');
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

  const content = {
    english: {
      heroTitle: "Join the Neo-Democracy Movement",
      heroSubtitle: "Be Part of India's Constitutional Renaissance",
      whyJoin: "Why Join?",
      becomeMember: "Become a Member",
      volunteer: "Volunteer",
      
      // Why Join Section
      sectionTitle: "The Shane Hind Forum Difference",
      
      benefit1Title: "Personal Transformation",
      benefit1Desc: "Joining Shane Hind Forum isn't just about political change - it's about your personal evolution. You'll gain profound understanding of constitutional values that will reshape how you see citizenship, community, and your role in society. Our members report feeling empowered, purposeful, and connected to something greater than themselves.",
      
      benefit2Title: "Intellectual Enlightenment",
      benefit2Desc: "Engage with India's brightest constitutional minds through our exclusive seminars, study circles, and discussion forums. You'll develop critical thinking skills and political awareness that sets you apart. Our educational programs are designed to create informed citizens who can participate meaningfully in democratic processes.",
      
      benefit3Title: "Powerful Network",
      benefit3Desc: "Connect with like-minded individuals who share your passion for authentic democracy. Our community includes jurists, academics, activists, and concerned citizens from across India. These relationships often lead to professional opportunities, lifelong friendships, and collaborative projects that create real change.",
      
      impactTitle: "Your Membership Creates Ripple Effects",
      impact1: "Increase in civic engagement among our members",
      impact2: "Of members report improved understanding of democracy",
      impact3: "Community projects initiated by our members annually",
      
      testimonialTitle: "Voices of Our Members",
      testimonial1: "Joining SHF transformed me from a passive voter to an active citizen. I now understand my constitutional rights and duties in ways I never imagined.",
      testimonial2: "The intellectual stimulation I've received through Forum events has been life-changing. I've met Supreme Court justices, renowned academics, and grassroots activists.",
      
      // Membership Form
      formTitle: "Become a Member",
      formDesc: "Join thousands of citizens working to restore true democracy in India. Membership includes access to all events, publications, and our exclusive member network.",
      fullName: "Full Name*",
      email: "Email*",
      phone: "Phone*",
      address: "Address*",
      city: "City*",
      state: "State*",
      pincode: "Pincode*",
      profession: "Profession",
      interests: "Areas of Interest (Select all that apply)",
      interest1: "Constitutional Studies",
      interest2: "Political Reform", 
      interest3: "Community Outreach",
      interest4: "Youth Engagement",
      continuePayment: "Continue to Payment",
      
      // Payment Section
      paymentTitle: "Membership Payment",
      paymentDesc: "Choose your membership plan and payment method to complete your registration.",
      standardPlan: "Standard Member",
      sustainingPlan: "Sustaining Member",
      lifetimePlan: "Lifetime Member",
      popular: "Most Popular",
      planFeatures: {
        standard: ["Access to all events", "Monthly newsletter", "Member network access"],
        sustaining: ["All Standard benefits", "Exclusive webinars", "Printed publications", "VIP event access"],
        lifetime: ["All Sustaining benefits", "Lifetime membership", "Founder recognition", "Special invitations"]
      },
      paymentMethod: "Payment Method",
      upi: "UPI Payment",
      card: "Credit/Debit Card",
      netbanking: "Net Banking",
      completePayment: "Complete Payment",
      back: "Back",
      
      // Success Section
      welcome: "Welcome to Shane Hind Forum!",
      successMessage: "Thank you for joining the neo-democracy movement. Your membership has been confirmed and payment receipt has been sent to",
      whatsNext: "What's Next?",
      nextStep1: "You'll receive a welcome email with member resources",
      nextStep2: "Our local coordinator will contact you within 3 days", 
      nextStep3: "Check your inbox for upcoming event invitations",
      handbook: "Download Member Handbook",
      whatsapp: "Join Our WhatsApp Community",
      events: "Explore Upcoming Events",
      
      // Volunteer Section
      volunteerTitle: "Volunteer Application",
      volunteerDesc: "Join our team of passionate volunteers working to transform Indian democracy. Tell us about yourself and how you'd like to contribute.",
      whyVolunteer: "Why do you want to volunteer with Shane Hind Forum?*",
      volunteerInterests: "Areas of Interest*",
      timeCommitment: "Time Commitment*",
      applyVolunteer: "Apply to Volunteer",
      
      // Neo-Democracy Content
      neoDemocracyIntro: "Our movement champions the Neo-Democracy concept - a return to the original constitutional vision that eliminates party supremacy and establishes true people's democracy through the TPTP (Two Pass The Post) system.",
      constitutionalVision: "We work to restore the constitutional balance envisioned by our founding fathers, where no single entity is supreme and people's will prevails through proper checks and balances."
    },
    hindi: {
      heroTitle: "नव-लोकतंत्र आंदोलन में शामिल हों",
      heroSubtitle: "भारत के संवैधानिक पुनर्जागरण का हिस्सा बनें",
      whyJoin: "क्यों शामिल हों?",
      becomeMember: "सदस्य बनें",
      volunteer: "स्वयंसेवक",
      
      // Why Join Section
      sectionTitle: "शाने हिंद फोरम की विशेषता",
      
      benefit1Title: "व्यक्तिगत परिवर्तन",
      benefit1Desc: "शाने हिंद फोरम में शामिल होना केवल राजनीतिक परिवर्तन के बारे में नहीं है - यह आपके व्यक्तिगत विकास के बारे में है। आप संवैधानिक मूल्यों की गहन समझ हासिल करेंगे जो नागरिकता, समुदाय और समाज में आपकी भूमिका को फिर से परिभाषित करेगी। हमारे सदस्य सशक्त, उद्देश्यपूर्ण और स्वयं से बड़े कुछ से जुड़ा हुआ महसूस करते हैं।",
      
      benefit2Title: "बौद्धिक ज्ञान",
      benefit2Desc: "हमारे विशेष सेमिनार, अध्ययन चक्र और चर्चा मंचों के माध्यम से भारत के प्रतिभाशाली संवैधानिक विद्वानों के साथ जुड़ें। आप महत्वपूर्ण सोच कौशल और राजनीतिक जागरूकता विकसित करेंगे जो आपको अलग खड़ा करती है। हमारे शैक्षिक कार्यक्रम सूचित नागरिकों को बनाने के लिए डिज़ाइन किए गए हैं जो लोकतांत्रिक प्रक्रियाओं में सार्थक रूप से भाग ले सकते हैं।",
      
      benefit3Title: "शक्तिशाली नेटवर्क",
      benefit3Desc: "समान विचारधारा वाले व्यक्तियों से जुड़ें जो वास्तविक लोकतंत्र के लिए आपके जुनून को साझा करते हैं। हमारे समुदाय में पूरे भारत से न्यायविद, शिक्षाविद, कार्यकर्ता और चिंतित नागरिक शामिल हैं। ये संबंध अक्सर पेशेवर अवसरों, आजीवन दोस्ती और वास्तविक परिवर्तन लाने वाली सहयोगी परियोजनाओं की ओर ले जाते हैं।",
      
      impactTitle: "आपकी सदस्यता दूरगामी प्रभाव पैदा करती है",
      impact1: "हमारे सदस्यों के बीच नागरिक सहभागिता में वृद्धि",
      impact2: "सदस्य लोकतंत्र की बेहतर समझ की रिपोर्ट करते हैं",
      impact3: "हमारे सदस्यों द्वारा शुरू किए गए सामुदायिक प्रोजेक्ट सालाना",
      
      testimonialTitle: "हमारे सदस्यों की आवाज़ें",
      testimonial1: "एसएचएफ में शामिल होने ने मुझे एक निष्क्रिय मतदाता से एक सक्रिय नागरिक में बदल दिया। अब मैं अपने संवैधानिक अधिकारों और कर्तव्यों को ऐसे तरीकों से समझता हूं जिनकी मैंने कभी कल्पना नहीं की थी।",
      testimonial2: "फोरम कार्यक्रमों के माध्यम से मुझे जो बौद्धिक उत्तेजना मिली है वह जीवन बदलने वाली रही है। मैं सुप्रीम कोर्ट के न्यायाधीशों, प्रसिद्ध शिक्षाविदों और जमीनी स्तर के कार्यकर्ताओं से मिला हूं।",
      
      // Membership Form
      formTitle: "सदस्य बनें",
      formDesc: "भारत में वास्तविक लोकतंत्र को बहाल करने के लिए काम कर रहे हजारों नागरिकों में शामिल हों। सदस्यता में सभी कार्यक्रमों, प्रकाशनों और हमारे विशेष सदस्य नेटवर्क तक पहुंच शामिल है।",
      fullName: "पूरा नाम*",
      email: "ईमेल*",
      phone: "फोन*",
      address: "पता*",
      city: "शहर*",
      state: "राज्य*",
      pincode: "पिनकोड*",
      profession: "पेशा",
      interests: "रुचि के क्षेत्र (सभी लागू विकल्प चुनें)",
      interest1: "संवैधानिक अध्ययन",
      interest2: "राजनीतिक सुधार",
      interest3: "सामुदायिक आउटरीच",
      interest4: "युवा जुड़ाव",
      continuePayment: "भुगतान के लिए जारी रखें",
      
      // Payment Section
      paymentTitle: "सदस्यता भुगतान",
      paymentDesc: "अपना सदस्यता प्लान और भुगतान विधि चुनकर अपना पंजीकरण पूरा करें।",
      standardPlan: "मानक सदस्य",
      sustainingPlan: "निरंतर सदस्य",
      lifetimePlan: "आजीवन सदस्य",
      popular: "सबसे लोकप्रिय",
      planFeatures: {
        standard: ["सभी कार्यक्रमों तक पहुंच", "मासिक न्यूज़लेटर", "सदस्य नेटवर्क पहुंच"],
        sustaining: ["सभी मानक लाभ", "विशेष वेबिनार", "मुद्रित प्रकाशन", "वीआईपी कार्यक्रम पहुंच"],
        lifetime: ["सभी निरंतर लाभ", "आजीवन सदस्यता", "संस्थापक मान्यता", "विशेष आमंत्रण"]
      },
      paymentMethod: "भुगतान विधि",
      upi: "यूपीआई भुगतान",
      card: "क्रेडिट/डेबिट कार्ड",
      netbanking: "नेट बैंकिंग",
      completePayment: "भुगतान पूरा करें",
      back: "पीछे",
      
      // Success Section
      welcome: "शाने हिंद फोरम में आपका स्वागत है!",
      successMessage: "नव-लोकतंत्र आंदोलन में शामिल होने के लिए धन्यवाद। आपकी सदस्यता की पुष्टि हो गई है और भुगतान रसीद भेज दी गई है",
      whatsNext: "आगे क्या?",
      nextStep1: "आपको सदस्य संसाधनों के साथ एक स्वागत ईमेल प्राप्त होगा",
      nextStep2: "हमारा स्थानीय समन्वयक 3 दिनों के भीतर आपसे संपर्क करेगा",
      nextStep3: "आने वाले कार्यक्रमों के निमंत्रण के लिए अपने इनबॉक्स की जांच करें",
      handbook: "सदस्य हैंडबुक डाउनलोड करें",
      whatsapp: "हमारे व्हाट्सएप समुदाय में शामिल हों",
      events: "आगामी कार्यक्रमों का अन्वेषण करें",
      
      // Volunteer Section
      volunteerTitle: "स्वयंसेवक आवेदन",
      volunteerDesc: "भारतीय लोकतंत्र को बदलने के लिए काम कर रहे हमारे उत्साही स्वयंसेवकों की टीम में शामिल हों। हमें अपने बारे में बताएं और आप कैसे योगदान देना चाहेंगे।",
      whyVolunteer: "आप शाने हिंद फोरम के साथ स्वयंसेवा क्यों करना चाहते हैं?*",
      volunteerInterests: "रुचि के क्षेत्र*",
      timeCommitment: "समय प्रतिबद्धता*",
      applyVolunteer: "स्वयंसेवक के लिए आवेदन करें",
      
      // Neo-Democracy Content
      neoDemocracyIntro: "हमारा आंदोलन नव-लोकतंत्र अवधारणा का समर्थन करता है - मूल संवैधानिक दृष्टि की वापसी जो पार्टी वर्चस्व को समाप्त करती है और टीपीटीपी (टू पास द पोस्ट) प्रणाली के माध्यम से वास्तविक जनता के लोकतंत्र की स्थापना करती है।",
      constitutionalVision: "हम अपने संस्थापक पिताओं द्वारा परिकल्पित संवैधानिक संतुलन को बहाल करने के लिए काम करते हैं, जहां कोई एक इकाई सर्वोच्च नहीं है और उचित जांच और संतुलन के माध्यम से लोगों की इच्छा प्रबल होती है।"
    }
  };

  const currentContent = content[language];

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
      <LanguageSwitcher>
        <LanguageButton 
          active={language === 'hindi'} 
          onClick={() => setLanguage('hindi')}
        >
          हिंदी
        </LanguageButton>
        <LanguageButton 
          active={language === 'english'} 
          onClick={() => setLanguage('english')}
        >
          English
        </LanguageButton>
      </LanguageSwitcher>

      <PageContainer>
        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <HeroTitle>{currentContent.heroTitle}</HeroTitle>
            <HeroSubtitle>{currentContent.heroSubtitle}</HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <NavigationTabs>
          <TabButton 
            active={activeTab === 'whyJoin'} 
            onClick={() => setActiveTab('whyJoin')}
          >
            {currentContent.whyJoin}
          </TabButton>
          <TabButton 
            active={activeTab === 'member'} 
            onClick={() => setActiveTab('member')}
          >
            {currentContent.becomeMember}
          </TabButton>
          <TabButton 
            active={activeTab === 'volunteer'} 
            onClick={() => setActiveTab('volunteer')}
          >
            {currentContent.volunteer}
          </TabButton>
        </NavigationTabs>

        <ContentContainer>
          {activeTab === 'whyJoin' && (
            <>
              <WhyJoinSection>
                <SectionTitle>{currentContent.sectionTitle}</SectionTitle>
                
                <NeoDemocracyInfo>
                  <NeoDemocracyTitle>नव-लोकतंत्र का समर्थन | Support Neo-Democracy</NeoDemocracyTitle>
                  <NeoDemocracyText>
                    {currentContent.neoDemocracyIntro}
                  </NeoDemocracyText>
                  <NeoDemocracyText>
                    {currentContent.constitutionalVision}
                  </NeoDemocracyText>
                </NeoDemocracyInfo>
                
                <BenefitCard>
                  <BenefitIcon>🌱</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>{currentContent.benefit1Title}</BenefitTitle>
                    <BenefitDescription>
                      {currentContent.benefit1Desc}
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitCard>

                <BenefitCard>
                  <BenefitIcon>🧠</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>{currentContent.benefit2Title}</BenefitTitle>
                    <BenefitDescription>
                      {currentContent.benefit2Desc}
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitCard>

                <BenefitCard>
                  <BenefitIcon>🤝</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>{currentContent.benefit3Title}</BenefitTitle>
                    <BenefitDescription>
                      {currentContent.benefit3Desc}
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitCard>

                <ImpactSection>
                  <ImpactTitle>{currentContent.impactTitle}</ImpactTitle>
                  <ImpactGrid>
                    <ImpactItem>
                      <ImpactNumber>10x</ImpactNumber>
                      <ImpactText>{currentContent.impact1}</ImpactText>
                    </ImpactItem>
                    <ImpactItem>
                      <ImpactNumber>85%</ImpactNumber>
                      <ImpactText>{currentContent.impact2}</ImpactText>
                    </ImpactItem>
                    <ImpactItem>
                      <ImpactNumber>200+</ImpactNumber>
                      <ImpactText>{currentContent.impact3}</ImpactText>
                    </ImpactItem>
                  </ImpactGrid>
                </ImpactSection>

                <TestimonialSection>
                  <TestimonialTitle>{currentContent.testimonialTitle}</TestimonialTitle>
                  <Testimonials>
                    <TestimonialCard>
                      <TestimonialText>
                        {currentContent.testimonial1}
                      </TestimonialText>
                      <TestimonialAuthor>- {language === 'hindi' ? 'प्रिया के., मुंबई' : 'Priya K., Mumbai'}</TestimonialAuthor>
                    </TestimonialCard>
                    <TestimonialCard>
                      <TestimonialText>
                        {currentContent.testimonial2}
                      </TestimonialText>
                      <TestimonialAuthor>- {language === 'hindi' ? 'रोहन एस., दिल्ली' : 'Rohan S., Delhi'}</TestimonialAuthor>
                    </TestimonialCard>
                  </Testimonials>
                </TestimonialSection>
              </WhyJoinSection>
              <CTAComponent language={language} />
            </>
          )}

          {activeTab === 'member' && (
            <FormContainer>
              <FormProgress>
                <ProgressStep active={formStep >= 1}>1. {language === 'hindi' ? 'आपका विवरण' : 'Your Details'}</ProgressStep>
                <ProgressStep active={formStep >= 2}>2. {language === 'hindi' ? 'भुगतान' : 'Payment'}</ProgressStep>
                <ProgressStep active={formStep >= 3}>3. {language === 'hindi' ? 'पुष्टिकरण' : 'Confirmation'}</ProgressStep>
              </FormProgress>

              <JoinForm onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <FormStep>
                    <FormTitle>{currentContent.formTitle}</FormTitle>
                    <FormDescription>
                      {currentContent.formDesc}
                    </FormDescription>
                    
                    <FormGroup>
                      <FormLabel>{currentContent.fullName}</FormLabel>
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
                        <FormLabel>{currentContent.email}</FormLabel>
                        <FormInput 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel>{currentContent.phone}</FormLabel>
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
                      <FormLabel>{currentContent.address}</FormLabel>
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
                        <FormLabel>{currentContent.city}</FormLabel>
                        <FormInput 
                          type="text" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel>{currentContent.state}</FormLabel>
                        <FormInput 
                          type="text" 
                          name="state" 
                          value={formData.state} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel>{currentContent.pincode}</FormLabel>
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
                      <FormLabel>{currentContent.profession}</FormLabel>
                      <FormInput 
                        type="text" 
                        name="profession" 
                        value={formData.profession} 
                        onChange={handleInputChange} 
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel>{currentContent.interests}</FormLabel>
                      <CheckboxGroup>
                        <CheckboxLabel>
                          <input 
                            type="checkbox" 
                            name="interests" 
                            value="constitutional_studies" 
                            checked={formData.interests.includes('constitutional_studies')}
                            onChange={handleInputChange}
                          />
                          {currentContent.interest1}
                        </CheckboxLabel>
                        <CheckboxLabel>
                          <input 
                            type="checkbox" 
                            name="interests" 
                            value="political_reform" 
                            checked={formData.interests.includes('political_reform')}
                            onChange={handleInputChange}
                          />
                          {currentContent.interest2}
                        </CheckboxLabel>
                        <CheckboxLabel>
                          <input 
                            type="checkbox" 
                            name="interests" 
                            value="community_outreach" 
                            checked={formData.interests.includes('community_outreach')}
                            onChange={handleInputChange}
                          />
                          {currentContent.interest3}
                        </CheckboxLabel>
                        <CheckboxLabel>
                          <input 
                            type="checkbox" 
                            name="interests" 
                            value="youth_engagement" 
                            checked={formData.interests.includes('youth_engagement')}
                            onChange={handleInputChange}
                          />
                          {currentContent.interest4}
                        </CheckboxLabel>
                      </CheckboxGroup>
                    </FormGroup>

                    <FormActions>
                      <NextButton type="submit">{currentContent.continuePayment}</NextButton>
                    </FormActions>
                  </FormStep>
                )}

                {formStep === 2 && (
                  <FormStep>
                    <FormTitle>{currentContent.paymentTitle}</FormTitle>
                    <FormDescription>
                      {currentContent.paymentDesc}
                    </FormDescription>

                    <MembershipPlans>
                      <PlanCard>
                        <PlanName>{currentContent.standardPlan}</PlanName>
                        <PlanPrice>{language === 'hindi' ? '₹1,000/वर्ष' : '₹1,000/year'}</PlanPrice>
                        <PlanFeatures>
                          {currentContent.planFeatures.standard.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
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
                        <PlanBadge>{currentContent.popular}</PlanBadge>
                        <PlanName>{currentContent.sustainingPlan}</PlanName>
                        <PlanPrice>{language === 'hindi' ? '₹2,500/वर्ष' : '₹2,500/year'}</PlanPrice>
                        <PlanFeatures>
                          {currentContent.planFeatures.sustaining.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </PlanFeatures>
                        <PlanRadio 
                          type="radio" 
                          name="membershipType" 
                          value="sustaining" 
                          onChange={() => {}}
                        />
                      </PlanCard>

                      <PlanCard>
                        <PlanName>{currentContent.lifetimePlan}</PlanName>
                        <PlanPrice>{language === 'hindi' ? '₹10,000' : '₹10,000'}</PlanPrice>
                        <PlanFeatures>
                          {currentContent.planFeatures.lifetime.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
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
                      <PaymentTitle>{currentContent.paymentMethod}</PaymentTitle>
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
                            {currentContent.upi}
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
                            {currentContent.card}
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
                            {currentContent.netbanking}
                          </PaymentLabel>
                        </PaymentOption>
                      </PaymentOptions>
                    </PaymentMethods>

                    <FormActions>
                      <BackButton type="button" onClick={() => setFormStep(1)}>
                        {currentContent.back}
                      </BackButton>
                      <NextButton type="submit">{currentContent.completePayment}</NextButton>
                    </FormActions>
                  </FormStep>
                )}

                {formStep === 3 && (
                  <FormStep>
                    <SuccessIcon>✓</SuccessIcon>
                    <FormTitle>{currentContent.welcome}</FormTitle>
                    <SuccessMessage>
                      {currentContent.successMessage} {formData.email}.
                    </SuccessMessage>
                    
                    <NextSteps>
                      <NextStepTitle>{currentContent.whatsNext}</NextStepTitle>
                      <NextStepItem>
                        <strong>1.</strong> {currentContent.nextStep1}
                      </NextStepItem>
                      <NextStepItem>
                        <strong>2.</strong> {currentContent.nextStep2}
                      </NextStepItem>
                      <NextStepItem>
                        <strong>3.</strong> {currentContent.nextStep3}
                      </NextStepItem>
                    </NextSteps>

                    <MemberResources>
                      <ResourceLink href="#">
                        {currentContent.handbook}
                      </ResourceLink>
                      <ResourceLink href="#">
                        {currentContent.whatsapp}
                      </ResourceLink>
                      <ResourceLink href="#">
                        {currentContent.events}
                      </ResourceLink>
                    </MemberResources>
                  </FormStep>
                )}
              </JoinForm>
            </FormContainer>
          )}

          {activeTab === 'volunteer' && (
            <FormContainer>
              <FormTitle>{currentContent.volunteerTitle}</FormTitle>
              <FormDescription>
                {currentContent.volunteerDesc}
              </FormDescription>

              <VolunteerForm>
                <FormGroup>
                  <FormLabel>{currentContent.fullName}</FormLabel>
                  <FormInput type="text" required />
                </FormGroup>

                <FormRow>
                  <FormGroup>
                    <FormLabel>{currentContent.email}</FormLabel>
                    <FormInput type="email" required />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>{currentContent.phone}</FormLabel>
                    <FormInput type="tel" required />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <FormLabel>{currentContent.city}</FormLabel>
                  <FormInput type="text" required />
                </FormGroup>

                <FormGroup>
                  <FormLabel>{currentContent.whyVolunteer}</FormLabel>
                  <FormTextarea rows="4" required></FormTextarea>
                </FormGroup>

                <FormGroup>
                  <FormLabel>{currentContent.volunteerInterests}</FormLabel>
                  <FormSelect required>
                    <option value="">{language === 'hindi' ? 'अपनी रुचियाँ चुनें' : 'Select your interests'}</option>
                    <option value="events">{language === 'hindi' ? 'कार्यक्रम आयोजन' : 'Event Organization'}</option>
                    <option value="outreach">{language === 'hindi' ? 'सामुदायिक आउटरीच' : 'Community Outreach'}</option>
                    <option value="research">{language === 'hindi' ? 'नीति अनुसंधान' : 'Policy Research'}</option>
                    <option value="media">{language === 'hindi' ? 'सोशल मीडिया' : 'Social Media'}</option>
                    <option value="fundraising">{language === 'hindi' ? 'फंडरेजिंग' : 'Fundraising'}</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel>{currentContent.timeCommitment}</FormLabel>
                  <FormSelect required>
                    <option value="">{language === 'hindi' ? 'उपलब्धता चुनें' : 'Select availability'}</option>
                    <option value="5-10">{language === 'hindi' ? '5-10 घंटे/माह' : '5-10 hours/month'}</option>
                    <option value="10-20">{language === 'hindi' ? '10-20 घंटे/माह' : '10-20 hours/month'}</option>
                    <option value="20+">{language === 'hindi' ? '20+ घंटे/माह' : '20+ hours/month'}</option>
                  </FormSelect>
                </FormGroup>

                <FormActions>
                  <SubmitButton type="submit">{currentContent.applyVolunteer}</SubmitButton>
                </FormActions>
              </VolunteerForm>
            </FormContainer>
          )}
        </ContentContainer>
      </PageContainer>
    </HomePage>
  );
};

// New Styled Components for Language Switcher and Neo-Democracy Info
const LanguageSwitcher = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
  position: absolute;
  top: 25%;
  right: 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 1rem auto;
  }
`;

const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid #4a6fa5;
  background-color: ${props => props.active ? '#4a6fa5' : 'white'};
  color: ${props => props.active ? 'white' : '#4a6fa5'};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a6fa5;
    color: white;
  }
`;

const NeoDemocracyInfo = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
`;

const NeoDemocracyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const NeoDemocracyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

// Rest of the styled components remain the same...
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