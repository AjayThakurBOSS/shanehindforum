import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HomePage from './HomePage';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DonationPage = () => {
  const [donationType, setDonationType] = useState('oneTime');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [language, setLanguage] = useState('english');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    panNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'upi',
    receiptRequired: true
  });

  const content = {
    english: {
      heroTitle: "Invest in India's Democratic Future",
      heroSubtitle: "Your donation fuels the Neo-Democracy movement to restore constitutional values",
      
      // Impact Section
      sectionTitle: "Why Your Donation is Crucial for India's Future",
      neoDemocracyAppeal: "We stand at a historic crossroads. The original vision of our Constitution - of true people's democracy, free from party supremacy - is under threat. Your support today will help restore the democratic framework envisioned by our founding fathers.",
      
      impact1Title: "Constitutional Renaissance",
      impact1Text: "Your contribution funds research, education, and advocacy to restore the original constitutional vision that eliminates party dominance and establishes true people's sovereignty through the TPTP system.",
      
      impact2Title: "Grassroots Democratic Reform",
      impact2Text: "Support our nationwide campaign to educate citizens about the Neo-Democracy model - replacing the current FPTP system with TPTP to ensure majority representation and end divisive politics.",
      
      impact3Title: "Legal & Policy Advocacy",
      impact3Text: "Fund critical legal interventions and policy research to challenge the current multi-party system that has distorted our democracy and promote the two-party TPTP alternative.",
      
      impact4Title: "Youth & Citizen Empowerment",
      impact4Text: "Enable us to conduct workshops, training programs, and create educational materials that empower the next generation with constitutional knowledge and democratic values.",
      
      urgencyTitle: "The Time for Action is Now",
      urgencyText: "Every day of delay means continued erosion of democratic values. Your contribution today can help accelerate the transition to a true people's democracy based on original constitutional principles.",
      
      // Financial Transparency
      transparencyTitle: "Complete Financial Transparency",
      transparencyContent: "We believe in absolute accountability. Every rupee you donate is meticulously tracked and utilized for maximum impact in our mission to restore authentic democracy.",
      
      // Donation Form
      formTitle: "Support the Democratic Renaissance",
      oneTimeDonation: "One-Time Donation",
      monthlySupport: "Monthly Support",
      selectAmount: "Select Amount (INR)*",
      otherAmount: "Other Amount",
      personalInfo: "Personal Information*",
      fullName: "Full Name*",
      email: "Email Address*",
      phone: "Phone Number*",
      addressLabel: "Address for Tax Receipt (if applicable)",
      streetAddress: "Street Address",
      city: "City",
      state: "State",
      pincode: "Pincode",
      panNumber: "PAN Number (for 80G receipt)",
      receiptRequired: "I require a tax exemption receipt under Section 80G",
      
      // Payment Methods
      paymentMethod: "Payment Method*",
      upiPayment: "UPI Payment",
      upiDesc: "Instant payment via any UPI app",
      cardPayment: "Credit/Debit Card",
      cardDesc: "Visa, Mastercard, Rupay, etc.",
      netBanking: "Net Banking",
      netBankingDesc: "Direct bank transfer",
      bankTransfer: "Bank Transfer",
      bankTransferDesc: "NEFT/RTGS/IMPS",
      chequeDD: "Cheque/DD",
      chequeDesc: "Payable in Delhi",
      
      // Bank Details
      bankDetailsTitle: "Bank Account Details",
      accountName: "Account Name",
      bankName: "Bank Name",
      accountNumber: "Account Number",
      accountType: "Account Type",
      ifscCode: "IFSC Code",
      branch: "Branch",
      bankInstructions: "After making the transfer, please email the transaction details to donations@shf.org along with your name and contact information for receipt purposes.",
      
      // Cheque Details
      chequeTitle: "Cheque/DD Instructions",
      chequeInstructions1: "Please make your cheque or demand draft payable to:",
      chequePayable: "Shane Hind Forum for Constitutional Studies",
      chequeInstructions2: "Mail your cheque to:",
      chequeAddress: "Shane Hind Forum, 24, Constitution Avenue, New Delhi - 110001",
      chequeInstructions3: "Please include your name, address, phone number, and email on a separate sheet for receipt purposes.",
      
      // Buttons
      setupMonthly: "Setup Monthly Donation",
      makeDonation: "Make Donation",
      securePayment: "Your payment information is processed securely. We do not store your credit card details.",
      
      // Testimonials
      donorTestimonial: "I donate because I believe in restoring the Constitution's original vision. This is not just charity - it's an investment in India's democratic soul.",
      donorName: "- Dr. Amit Sharma, Constitutional Scholar"
    },
    hindi: {
      heroTitle: "भारत के लोकतांत्रिक भविष्य में निवेश करें",
      heroSubtitle: "आपका दान नव-लोकतंत्र आंदोलन को संवैधानिक मूल्यों को बहाल करने के लिए शक्ति प्रदान करता है",
      
      // Impact Section
      sectionTitle: "भारत के भविष्य के लिए आपका दान क्यों महत्वपूर्ण है",
      neoDemocracyAppeal: "हम एक ऐतिहासिक मोड़ पर खड़े हैं। हमारे संविधान का मूल दृष्टिकोण - वास्तविक जनता के लोकतंत्र का, पार्टी वर्चस्व से मुक्त - खतरे में है। आज आपका समर्थन हमारे संस्थापक पिताओं द्वारा परिकल्पित लोकतांत्रिक ढांचे को बहाल करने में मदद करेगा।",
      
      impact1Title: "संवैधानिक पुनर्जागरण",
      impact1Text: "आपका योगदान शोध, शिक्षा और वकालत को निधि देता है ताकि मूल संवैधानिक दृष्टि को बहाल किया जा सके जो पार्टी प्रभुत्व को समाप्त करती है और टीपीटीपी प्रणाली के माध्यम से वास्तविक जनता की संप्रभुता स्थापित करती है।",
      
      impact2Title: "जमीनी लोकतांत्रिक सुधार",
      impact2Text: "हमारे राष्ट्रव्यापी अभियान का समर्थन करें जो नागरिकों को नव-लोकतंत्र मॉडल के बारे में शिक्षित करता है - वर्तमान एफपीटीपी प्रणाली को टीपीटीपी के साथ बदलकर बहुमत प्रतिनिधित्व सुनिश्चित करना और विभाजनकारी राजनीति को समाप्त करना।",
      
      impact3Title: "कानूनी और नीति वकालत",
      impact3Text: "महत्वपूर्ण कानूनी हस्तक्षेप और नीति अनुसंधान को निधि दें ताकि वर्तमान बहुदलीय प्रणाली को चुनौती दी जा सके जिसने हमारे लोकतंत्र को विकृत किया है और दो-दलीय टीपीटीपी विकल्प को बढ़ावा दिया जा सके।",
      
      impact4Title: "युवा और नागरिक सशक्तिकरण",
      impact4Text: "हमें कार्यशालाएं, प्रशिक्षण कार्यक्रम आयोजित करने और शैक्षिक सामग्री बनाने में सक्षम बनाएं जो अगली पीढ़ी को संवैधानिक ज्ञान और लोकतांत्रिक मूल्यों से सशक्त बनाती है।",
      
      urgencyTitle: "कार्रवाई का समय अब है",
      urgencyText: "देरी का हर दिन लोकतांत्रिक मूल्यों के निरंतर क्षरण को दर्शाता है। आज आपका योगदान मूल संवैधानिक सिद्धांतों पर आधारित वास्तविक जनता के लोकतंत्र में संक्रमण को तेज करने में मदद कर सकता है।",
      
      // Financial Transparency
      transparencyTitle: "पूर्ण वित्तीय पारदर्शिता",
      transparencyContent: "हम पूर्ण जवाबदेही में विश्वास करते हैं। आपके द्वारा दान किया गया हर रुपया वास्तविक लोकतंत्र को बहाल करने के हमारे मिशन में अधिकतम प्रभाव के लिए सावधानीपूर्वक ट्रैक और उपयोग किया जाता है।",
      
      // Donation Form
      formTitle: "लोकतांत्रिक पुनर्जागरण का समर्थन करें",
      oneTimeDonation: "एकमुश्त दान",
      monthlySupport: "मासिक समर्थन",
      selectAmount: "राशि चुनें (INR)*",
      otherAmount: "अन्य राशि",
      personalInfo: "व्यक्तिगत जानकारी*",
      fullName: "पूरा नाम*",
      email: "ईमेल पता*",
      phone: "फोन नंबर*",
      addressLabel: "टैक्स रसीद के लिए पता (यदि लागू हो)",
      streetAddress: "सड़क का पता",
      city: "शहर",
      state: "राज्य",
      pincode: "पिनकोड",
      panNumber: "पैन नंबर (80G रसीद के लिए)",
      receiptRequired: "मुझे धारा 80G के तहत कर छूट रसीद की आवश्यकता है",
      
      // Payment Methods
      paymentMethod: "भुगतान विधि*",
      upiPayment: "यूपीआई भुगतान",
      upiDesc: "किसी भी यूपीआई ऐप के माध्यम से तत्काल भुगतान",
      cardPayment: "क्रेडिट/डेबिट कार्ड",
      cardDesc: "वीज़ा, मास्टरकार्ड, रुपे, आदि।",
      netBanking: "नेट बैंकिंग",
      netBankingDesc: "सीधा बैंक ट्रांसफर",
      bankTransfer: "बैंक ट्रांसफर",
      bankTransferDesc: "NEFT/RTGS/IMPS",
      chequeDD: "चेक/डीडी",
      chequeDesc: "दिल्ली में देय",
      
      // Bank Details
      bankDetailsTitle: "बैंक खाता विवरण",
      accountName: "खाता नाम",
      bankName: "बैंक का नाम",
      accountNumber: "खाता नंबर",
      accountType: "खाता प्रकार",
      ifscCode: "आईएफएससी कोड",
      branch: "शाखा",
      bankInstructions: "ट्रांसफर करने के बाद, कृपया रसीद उद्देश्यों के लिए अपना नाम और संपर्क जानकारी के साथ लेनदेन विवरण donations@shf.org पर ईमेल करें।",
      
      // Cheque Details
      chequeTitle: "चेक/डीडी निर्देश",
      chequeInstructions1: "कृपया अपना चेक या डिमांड ड्राफ्ट देय बनाएं:",
      chequePayable: "शेन हिंद फोरम फॉर कॉन्स्टिट्यूशनल स्टडीज",
      chequeInstructions2: "अपना चेक इस पते पर मेल करें:",
      chequeAddress: "शेन हिंद फोरम, 24, कॉन्स्टिट्यूशन एवेन्यू, नई दिल्ली - 110001",
      chequeInstructions3: "कृपया रसीद उद्देश्यों के लिए एक अलग शीट पर अपना नाम, पता, फोन नंबर और ईमेल शामिल करें।",
      
      // Buttons
      setupMonthly: "मासिक दान सेटअप करें",
      makeDonation: "दान करें",
      securePayment: "आपकी भुगतान जानकारी सुरक्षित रूप से संसाधित की जाती है। हम आपके क्रेडिट कार्ड विवरण संग्रहीत नहीं करते हैं।",
      
      // Testimonials
      donorTestimonial: "मैं दान इसलिए देता हूं क्योंकि मैं संविधान के मूल दृष्टिकोण को बहाल करने में विश्वास करता हूं। यह सिर्फ दान नहीं है - यह भारत की लोकतांत्रिक आत्मा में निवेश है।",
      donorName: "- डॉ. अमित शर्मा, संवैधानिक विद्वान"
    }
  };

  const currentContent = content[language];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process donation
    console.log('Donation submitted:', {
      donationType,
      amount: amount === 'other' ? customAmount : amount,
      ...formData
    });
    // Reset form or show success message
  };

  const presetAmounts = [500, 1000, 2000, 5000, 10000];

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

        <ContentContainer>
          <DonationImpactSection>
            <SectionTitle>{currentContent.sectionTitle}</SectionTitle>
            
            <UrgencySection>
              <UrgencyTitle>{currentContent.urgencyTitle}</UrgencyTitle>
              <UrgencyText>{currentContent.urgencyText}</UrgencyText>
            </UrgencySection>

            <NeoDemocracyAppeal>
              <AppealText>{currentContent.neoDemocracyAppeal}</AppealText>
            </NeoDemocracyAppeal>
            
            <ImpactGrid>
              <ImpactCard>
                <ImpactIcon>📜</ImpactIcon>
                <ImpactContent>
                  <ImpactCardTitle>{currentContent.impact1Title}</ImpactCardTitle>
                  <ImpactCardText>
                    {currentContent.impact1Text}
                  </ImpactCardText>
                </ImpactContent>
              </ImpactCard>

              <ImpactCard>
                <ImpactIcon>🌱</ImpactIcon>
                <ImpactContent>
                  <ImpactCardTitle>{currentContent.impact2Title}</ImpactCardTitle>
                  <ImpactCardText>
                    {currentContent.impact2Text}
                  </ImpactCardText>
                </ImpactContent>
              </ImpactCard>

              <ImpactCard>
                <ImpactIcon>⚖️</ImpactIcon>
                <ImpactContent>
                  <ImpactCardTitle>{currentContent.impact3Title}</ImpactCardTitle>
                  <ImpactCardText>
                    {currentContent.impact3Text}
                  </ImpactCardText>
                </ImpactContent>
              </ImpactCard>

              <ImpactCard>
                <ImpactIcon>👥</ImpactIcon>
                <ImpactContent>
                  <ImpactCardTitle>{currentContent.impact4Title}</ImpactCardTitle>
                  <ImpactCardText>
                    {currentContent.impact4Text}
                  </ImpactCardText>
                </ImpactContent>
              </ImpactCard>
            </ImpactGrid>

            <DonorTestimonial>
              <TestimonialText>"{currentContent.donorTestimonial}"</TestimonialText>
              <TestimonialAuthor>{currentContent.donorName}</TestimonialAuthor>
            </DonorTestimonial>

            <FinancialTransparency>
              <TransparencyTitle>{currentContent.transparencyTitle}</TransparencyTitle>
              <TransparencyContent>
                <p>
                  {currentContent.transparencyContent}
                </p>
                <TransparencyChart>
                  <ChartItem width="65%">{language === 'hindi' ? 'कार्यक्रम और पहल (65%)' : 'Programs & Initiatives (65%)'}</ChartItem>
                  <ChartItem width="20%">{language === 'hindi' ? 'परिचालन लागत (20%)' : 'Operational Costs (20%)'}</ChartItem>
                  <ChartItem width="10%">{language === 'hindi' ? 'फंडरेजिंग (10%)' : 'Fundraising (10%)'}</ChartItem>
                  <ChartItem width="5%">{language === 'hindi' ? 'रिजर्व फंड (5%)' : 'Reserve Fund (5%)'}</ChartItem>
                </TransparencyChart>
                <p>
                  {language === 'hindi' 
                    ? 'शेन हिंद फोरम को सभी दान आयकर अधिनियम की धारा 80G के तहत कर छूट के लिए पात्र हैं। हम आपको आपके दान की रसीद प्रदान करेंगे।'
                    : 'All donations to Shane Hind Forum are eligible for tax exemption under Section 80G of the Income Tax Act. We will provide you with a receipt for your donation.'
                  }
                </p>
              </TransparencyContent>
            </FinancialTransparency>
          </DonationImpactSection>

          <DonationFormContainer>
            <DonationForm onSubmit={handleSubmit}>
              <FormTitle>{currentContent.formTitle}</FormTitle>
              
              <DonationTypeToggle>
                <TypeButton 
                  active={donationType === 'oneTime'} 
                  onClick={() => setDonationType('oneTime')}
                  type="button"
                >
                  {currentContent.oneTimeDonation}
                </TypeButton>
                <TypeButton 
                  active={donationType === 'monthly'} 
                  onClick={() => setDonationType('monthly')}
                  type="button"
                >
                  {currentContent.monthlySupport}
                </TypeButton>
              </DonationTypeToggle>

              <FormGroup>
                <FormLabel>{currentContent.selectAmount}</FormLabel>
                <AmountOptions>
                  {presetAmounts.map(amt => (
                    <AmountButton 
                      key={amt}
                      type="button"
                      active={amount === amt.toString()}
                      onClick={() => {
                        setAmount(amt.toString());
                        setCustomAmount('');
                      }}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </AmountButton>
                  ))}
                  <AmountButton 
                    type="button"
                    active={amount === 'other'}
                    onClick={() => setAmount('other')}
                  >
                    {currentContent.otherAmount}
                  </AmountButton>
                </AmountOptions>
                
                {amount === 'other' && (
                  <CustomAmountInput
                    type="number"
                    placeholder={language === 'hindi' ? "अन्य राशि दर्ज करें" : "Enter custom amount"}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min="100"
                    required
                  />
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>{currentContent.personalInfo}</FormLabel>
                <FormInput 
                  type="text" 
                  name="fullName" 
                  placeholder={currentContent.fullName} 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <FormInput 
                    type="email" 
                    name="email" 
                    placeholder={currentContent.email} 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput 
                    type="tel" 
                    name="phone" 
                    placeholder={currentContent.phone} 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel>{currentContent.addressLabel}</FormLabel>
                <FormInput 
                  type="text" 
                  name="address" 
                  placeholder={currentContent.streetAddress} 
                  value={formData.address} 
                  onChange={handleInputChange} 
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <FormInput 
                    type="text" 
                    name="city" 
                    placeholder={currentContent.city} 
                    value={formData.city} 
                    onChange={handleInputChange} 
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput 
                    type="text" 
                    name="state" 
                    placeholder={currentContent.state} 
                    value={formData.state} 
                    onChange={handleInputChange} 
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput 
                    type="text" 
                    name="pincode" 
                    placeholder={currentContent.pincode} 
                    value={formData.pincode} 
                    onChange={handleInputChange} 
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel>{currentContent.panNumber}</FormLabel>
                <FormInput 
                  type="text" 
                  name="panNumber" 
                  placeholder={language === 'hindi' ? "पैन नंबर" : "PAN Number"} 
                  value={formData.panNumber} 
                  onChange={handleInputChange} 
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  title="Please enter a valid PAN number (e.g., AAAAA9999A)"
                />
              </FormGroup>

              <FormGroup>
                <CheckboxLabel>
                  <input 
                    type="checkbox" 
                    name="receiptRequired" 
                    checked={formData.receiptRequired} 
                    onChange={handleInputChange} 
                  />
                  {currentContent.receiptRequired}
                </CheckboxLabel>
              </FormGroup>

              <PaymentSection>
                <PaymentTitle>{currentContent.paymentMethod}</PaymentTitle>
                <PaymentOptions>
                  <PaymentOption>
                    <input 
                      type="radio" 
                      id="upi" 
                      name="paymentMethod" 
                      value="upi" 
                      checked={formData.paymentMethod === 'upi'} 
                      onChange={handleInputChange} 
                      required 
                    />
                    <PaymentLabel htmlFor="upi">
                      <PaymentIcon>💳</PaymentIcon>
                      <div>
                        <PaymentMethodName>{currentContent.upiPayment}</PaymentMethodName>
                        <PaymentMethodDesc>{currentContent.upiDesc}</PaymentMethodDesc>
                      </div>
                    </PaymentLabel>
                  </PaymentOption>

                  <PaymentOption>
                    <input 
                      type="radio" 
                      id="card" 
                      name="paymentMethod" 
                      value="card" 
                      checked={formData.paymentMethod === 'card'} 
                      onChange={handleInputChange} 
                    />
                    <PaymentLabel htmlFor="card">
                      <PaymentIcon>🏦</PaymentIcon>
                      <div>
                        <PaymentMethodName>{currentContent.cardPayment}</PaymentMethodName>
                        <PaymentMethodDesc>{currentContent.cardDesc}</PaymentMethodDesc>
                      </div>
                    </PaymentLabel>
                  </PaymentOption>

                  <PaymentOption>
                    <input 
                      type="radio" 
                      id="netbanking" 
                      name="paymentMethod" 
                      value="netbanking" 
                      checked={formData.paymentMethod === 'netbanking'} 
                      onChange={handleInputChange} 
                    />
                    <PaymentLabel htmlFor="netbanking">
                      <PaymentIcon>📱</PaymentIcon>
                      <div>
                        <PaymentMethodName>{currentContent.netBanking}</PaymentMethodName>
                        <PaymentMethodDesc>{currentContent.netBankingDesc}</PaymentMethodDesc>
                      </div>
                    </PaymentLabel>
                  </PaymentOption>

                  <PaymentOption>
                    <input 
                      type="radio" 
                      id="bankTransfer" 
                      name="paymentMethod" 
                      value="bankTransfer" 
                      checked={formData.paymentMethod === 'bankTransfer'} 
                      onChange={handleInputChange} 
                    />
                    <PaymentLabel htmlFor="bankTransfer">
                      <PaymentIcon>🏛️</PaymentIcon>
                      <div>
                        <PaymentMethodName>{currentContent.bankTransfer}</PaymentMethodName>
                        <PaymentMethodDesc>{currentContent.bankTransferDesc}</PaymentMethodDesc>
                      </div>
                    </PaymentLabel>
                  </PaymentOption>

                  <PaymentOption>
                    <input 
                      type="radio" 
                      id="cheque" 
                      name="paymentMethod" 
                      value="cheque" 
                      checked={formData.paymentMethod === 'cheque'} 
                      onChange={handleInputChange} 
                    />
                    <PaymentLabel htmlFor="cheque">
                      <PaymentIcon>✉️</PaymentIcon>
                      <div>
                        <PaymentMethodName>{currentContent.chequeDD}</PaymentMethodName>
                        <PaymentMethodDesc>{currentContent.chequeDesc}</PaymentMethodDesc>
                      </div>
                    </PaymentLabel>
                  </PaymentOption>
                </PaymentOptions>
              </PaymentSection>

              {formData.paymentMethod === 'bankTransfer' && (
                <BankDetails>
                  <BankDetailsTitle>{currentContent.bankDetailsTitle}</BankDetailsTitle>
                  <BankDetailsTable>
                    <tbody>
                      <tr>
                        <td>{currentContent.accountName}</td>
                        <td>Shane Hind Forum for Constitutional Studies</td>
                      </tr>
                      <tr>
                        <td>{currentContent.bankName}</td>
                        <td>State Bank of India</td>
                      </tr>
                      <tr>
                        <td>{currentContent.accountNumber}</td>
                        <td>123456789012</td>
                      </tr>
                      <tr>
                        <td>{currentContent.accountType}</td>
                        <td>Current Account</td>
                      </tr>
                      <tr>
                        <td>{currentContent.ifscCode}</td>
                        <td>SBIN0001234</td>
                      </tr>
                      <tr>
                        <td>{currentContent.branch}</td>
                        <td>Connaught Place, New Delhi</td>
                      </tr>
                    </tbody>
                  </BankDetailsTable>
                  <BankInstructions>
                    {currentContent.bankInstructions}
                  </BankInstructions>
                </BankDetails>
              )}

              {formData.paymentMethod === 'cheque' && (
                <ChequeDetails>
                  <ChequeDetailsTitle>{currentContent.chequeTitle}</ChequeDetailsTitle>
                  <ChequeInstructions>
                    <p>
                      {currentContent.chequeInstructions1}<br />
                      <strong>"{currentContent.chequePayable}"</strong>
                    </p>
                    <p>
                      {currentContent.chequeInstructions2}<br />
                      {currentContent.chequeAddress}
                    </p>
                    <p>
                      {currentContent.chequeInstructions3}
                    </p>
                  </ChequeInstructions>
                </ChequeDetails>
              )}

              <SubmitButton type="submit">
                {donationType === 'monthly' ? currentContent.setupMonthly : currentContent.makeDonation}
              </SubmitButton>

              <SecurePaymentNote>
                <LockIcon>🔒</LockIcon> {currentContent.securePayment}
              </SecurePaymentNote>
            </DonationForm>
          </DonationFormContainer>
        </ContentContainer>
      </PageContainer>
    </HomePage>
  );
};

// New Styled Components
const LanguageSwitcher = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
  position: absolute;
  top:25%;
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

const UrgencySection = styled.div`
  background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
`;

const UrgencyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const UrgencyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const NeoDemocracyAppeal = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
`;

const AppealText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 500;
`;

const DonorTestimonial = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  border-left: 4px solid #4299e1;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;

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

// Reuse styled components from JoinPage where applicable
const PageContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2d3748;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
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

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const DonationImpactSection = styled.section`
  margin-bottom: 4rem;
`;

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

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ImpactCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ImpactIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const ImpactContent = styled.div``;

const ImpactCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b6cb0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ImpactCardText = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FinancialTransparency = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
`;

const TransparencyTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TransparencyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  p {
    font-size: 1.1rem;
    color: #4a5568;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const TransparencyChart = styled.div`
  display: flex;
  height: 40px;
  margin: 2rem 0;
  border-radius: 6px;
  overflow: hidden;
`;

const ChartItem = styled.div`
  background: ${props => 
    props.width === '65%' ? '#4299e1' :
    props.width === '20%' ? '#3182ce' :
    props.width === '10%' ? '#2b6cb0' : '#1a365d'};
  width: ${props => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0 0.5rem;
`;

const DonationFormContainer = styled.div`
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

const DonationForm = styled.form``;

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

const DonationTypeToggle = styled.div`
  display: flex;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`;

const TypeButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: ${props => props.active ? '#4299e1' : 'white'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#3182ce' : '#ebf8ff'};
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

const AmountOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AmountButton = styled.button`
  padding: 0.75rem;
  background: ${props => props.active ? '#4299e1' : 'white'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  border: 1px solid ${props => props.active ? '#4299e1' : '#e2e8f0'};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4299e1;
    background: ${props => props.active ? '#3182ce' : '#ebf8ff'};
  }
`;

const CustomAmountInput = styled.input`
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

const PaymentSection = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  gap: 1rem;
`;

const PaymentIcon = styled.span`
  font-size: 1.5rem;
`;

const PaymentMethodName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const PaymentMethodDesc = styled.div`
  font-size: 0.8rem;
  color: #718096;
`;

const BankDetails = styled.div`
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const BankDetailsTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
`;

const BankDetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  td {
    padding: 0.5rem;
    border-bottom: 1px solid #e2e8f0;
    font-size: 0.9rem;

    &:first-child {
      font-weight: 600;
      width: 30%;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const BankInstructions = styled.p`
  font-size: 0.9rem;
  color: #4a5568;
  margin-top: 1rem;
`;

const ChequeDetails = styled.div`
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const ChequeDetailsTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
`;

const ChequeInstructions = styled.div`
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #4299e1;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #3182ce;
    transform: translateY(-2px);
  }
`;

const SecurePaymentNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #718096;
  margin-top: 1rem;
`;

const LockIcon = styled.span``;

export default DonationPage;