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
    <PageContainer>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Support Constitutional Renaissance</HeroTitle>
          <HeroSubtitle>Your donation fuels the movement for authentic democracy</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentContainer>
        <DonationImpactSection>
          <SectionTitle>Why Your Donation Matters</SectionTitle>
          
          <ImpactGrid>
            <ImpactCard>
              <ImpactIcon>📚</ImpactIcon>
              <ImpactContent>
                <ImpactCardTitle>Constitutional Education</ImpactCardTitle>
                <ImpactCardText>
                  Your support helps us conduct workshops, seminars, and create educational materials that empower
                  citizens with knowledge about their constitutional rights and duties.
                </ImpactCardText>
              </ImpactContent>
            </ImpactCard>

            <ImpactCard>
              <ImpactIcon>⚖️</ImpactIcon>
              <ImpactContent>
                <ImpactCardTitle>Legal Advocacy</ImpactCardTitle>
                <ImpactCardText>
                  Funds enable us to support important public interest litigations and legal research that uphold
                  constitutional values and protect civil liberties.
                </ImpactCardText>
              </ImpactContent>
            </ImpactCard>

            <ImpactCard>
              <ImpactIcon>🌐</ImpactIcon>
              <ImpactContent>
                <ImpactCardTitle>Grassroots Outreach</ImpactCardTitle>
                <ImpactCardText>
                  Donations help us establish local chapters, conduct community programs, and reach marginalized
                  communities with democratic education.
                </ImpactCardText>
              </ImpactContent>
            </ImpactCard>
          </ImpactGrid>

          <FinancialTransparency>
            <TransparencyTitle>Financial Transparency</TransparencyTitle>
            <TransparencyContent>
              <p>
                We are committed to complete transparency in how we use your donations. Here's how we allocated funds last year:
              </p>
              <TransparencyChart>
                <ChartItem width="60%">Programs & Initiatives (60%)</ChartItem>
                <ChartItem width="25%">Operational Costs (25%)</ChartItem>
                <ChartItem width="10%">Fundraising (10%)</ChartItem>
                <ChartItem width="5%">Reserve Fund (5%)</ChartItem>
              </TransparencyChart>
              <p>
                All donations to Shane Hind Forum are eligible for tax exemption under Section 80G of the Income Tax Act.
                We will provide you with a receipt for your donation.
              </p>
            </TransparencyContent>
          </FinancialTransparency>
        </DonationImpactSection>

        <DonationFormContainer>
          <DonationForm onSubmit={handleSubmit}>
            <FormTitle>Make a Donation</FormTitle>
            
            <DonationTypeToggle>
              <TypeButton 
                active={donationType === 'oneTime'} 
                onClick={() => setDonationType('oneTime')}
                type="button"
              >
                One-Time Donation
              </TypeButton>
              <TypeButton 
                active={donationType === 'monthly'} 
                onClick={() => setDonationType('monthly')}
                type="button"
              >
                Monthly Support
              </TypeButton>
            </DonationTypeToggle>

            <FormGroup>
              <FormLabel>Select Amount (INR)*</FormLabel>
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
                  Other Amount
                </AmountButton>
              </AmountOptions>
              
              {amount === 'other' && (
                <CustomAmountInput
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  min="100"
                  required
                />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel>Personal Information*</FormLabel>
              <FormInput 
                type="text" 
                name="fullName" 
                placeholder="Full Name" 
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
                  placeholder="Email Address" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormInput 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>Address for Tax Receipt (if applicable)</FormLabel>
              <FormInput 
                type="text" 
                name="address" 
                placeholder="Street Address" 
                value={formData.address} 
                onChange={handleInputChange} 
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <FormInput 
                  type="text" 
                  name="city" 
                  placeholder="City" 
                  value={formData.city} 
                  onChange={handleInputChange} 
                />
              </FormGroup>
              <FormGroup>
                <FormInput 
                  type="text" 
                  name="state" 
                  placeholder="State" 
                  value={formData.state} 
                  onChange={handleInputChange} 
                />
              </FormGroup>
              <FormGroup>
                <FormInput 
                  type="text" 
                  name="pincode" 
                  placeholder="Pincode" 
                  value={formData.pincode} 
                  onChange={handleInputChange} 
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>PAN Number (for 80G receipt)</FormLabel>
              <FormInput 
                type="text" 
                name="panNumber" 
                placeholder="PAN Number" 
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
                I require a tax exemption receipt under Section 80G
              </CheckboxLabel>
            </FormGroup>

            <PaymentSection>
              <PaymentTitle>Payment Method*</PaymentTitle>
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
                      <PaymentMethodName>UPI Payment</PaymentMethodName>
                      <PaymentMethodDesc>Instant payment via any UPI app</PaymentMethodDesc>
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
                      <PaymentMethodName>Credit/Debit Card</PaymentMethodName>
                      <PaymentMethodDesc>Visa, Mastercard, Rupay, etc.</PaymentMethodDesc>
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
                      <PaymentMethodName>Net Banking</PaymentMethodName>
                      <PaymentMethodDesc>Direct bank transfer</PaymentMethodDesc>
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
                      <PaymentMethodName>Bank Transfer</PaymentMethodName>
                      <PaymentMethodDesc>NEFT/RTGS/IMPS</PaymentMethodDesc>
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
                      <PaymentMethodName>Cheque/DD</PaymentMethodName>
                      <PaymentMethodDesc>Payable in Delhi</PaymentMethodDesc>
                    </div>
                  </PaymentLabel>
                </PaymentOption>
              </PaymentOptions>
            </PaymentSection>

            {formData.paymentMethod === 'bankTransfer' && (
              <BankDetails>
                <BankDetailsTitle>Bank Account Details</BankDetailsTitle>
                <BankDetailsTable>
                  <tbody>
                    <tr>
                      <td>Account Name</td>
                      <td>Shane Hind Forum for Constitutional Studies</td>
                    </tr>
                    <tr>
                      <td>Bank Name</td>
                      <td>State Bank of India</td>
                    </tr>
                    <tr>
                      <td>Account Number</td>
                      <td>123456789012</td>
                    </tr>
                    <tr>
                      <td>Account Type</td>
                      <td>Current Account</td>
                    </tr>
                    <tr>
                      <td>IFSC Code</td>
                      <td>SBIN0001234</td>
                    </tr>
                    <tr>
                      <td>Branch</td>
                      <td>Connaught Place, New Delhi</td>
                    </tr>
                  </tbody>
                </BankDetailsTable>
                <BankInstructions>
                  After making the transfer, please email the transaction details to donations@shf.org
                  along with your name and contact information for receipt purposes.
                </BankInstructions>
              </BankDetails>
            )}

            {formData.paymentMethod === 'cheque' && (
              <ChequeDetails>
                <ChequeDetailsTitle>Cheque/DD Instructions</ChequeDetailsTitle>
                <ChequeInstructions>
                  <p>
                    Please make your cheque or demand draft payable to:<br />
                    <strong>"Shane Hind Forum for Constitutional Studies"</strong>
                  </p>
                  <p>
                    Mail your cheque to:<br />
                    Shane Hind Forum,<br />
                    24, Constitution Avenue,<br />
                    New Delhi - 110001
                  </p>
                  <p>
                    Please include your name, address, phone number, and email on a separate sheet
                    for receipt purposes.
                  </p>
                </ChequeInstructions>
              </ChequeDetails>
            )}

            <SubmitButton type="submit">
              {donationType === 'monthly' ? 'Setup Monthly Donation' : 'Make Donation'}
            </SubmitButton>

            <SecurePaymentNote>
              <LockIcon>🔒</LockIcon> Your payment information is processed securely. 
              We do not store your credit card details.
            </SecurePaymentNote>
          </DonationForm>
        </DonationFormContainer>
      </ContentContainer>
    </PageContainer>
    </HomePage>
  );
};

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
    props.width === '60%' ? '#4299e1' :
    props.width === '25%' ? '#3182ce' :
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