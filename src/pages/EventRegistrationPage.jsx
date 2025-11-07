import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import HomePage from './HomePage';

const RegistrationContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  font-family: 'Poppins', sans-serif;
`;

const RegistrationHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const RegistrationTitle = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const EventName = styled.h2`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  
  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.75rem;
`;

const DonationSection = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  border: 1px solid #eee;
`;

const DonationAmounts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const DonationButton = styled.button`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #3498db;
    color: #3498db;
  }
  
  &.active {
    background: #3498db;
    color: white;
    border-color: #3498db;
  }
`;

const CustomAmountInput = styled(Input)`
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    dietaryRequirements: '',
    contribute: false,
    donationAmount: '',
    customAmount: ''
  });

  const donationAmounts = [500, 1000, 2000, 5000];

  // Sample event data - in a real app, this would come from an API
  const event = {
    id: eventId,
    title: "Building a Neo-Democratic Society"
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDonationSelect = (amount) => {
    setFormData(prev => ({
      ...prev,
      donationAmount: amount,
      customAmount: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Registration successful!');
  };

  return (
    <HomePage>
        <RegistrationContainer>
        <RegistrationHeader>
            <RegistrationTitle>Event Registration</RegistrationTitle>
            <EventName>{event.title}</EventName>
        </RegistrationHeader>

        <form onSubmit={handleSubmit}>
            <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
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
            <Label htmlFor="organization">Organization</Label>
            <Input 
                type="text" 
                id="organization" 
                name="organization" 
                value={formData.organization}
                onChange={handleChange}
            />
            </FormGroup>

            <FormGroup>
            <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
            <Select 
                id="dietaryRequirements" 
                name="dietaryRequirements"
                value={formData.dietaryRequirements}
                onChange={handleChange}
            >
                <option value="">None</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten Free</option>
                <option value="other">Other (please specify)</option>
            </Select>
            </FormGroup>

            <DonationSection>
            <CheckboxContainer>
                <Checkbox 
                type="checkbox" 
                id="contribute" 
                name="contribute"
                checked={formData.contribute}
                onChange={handleChange}
                />
                <Label htmlFor="contribute">I would like to make a financial contribution</Label>
            </CheckboxContainer>

            {formData.contribute && (
                <>
                <Label>Donation Amount (INR)</Label>
                <DonationAmounts>
                    {donationAmounts.map(amount => (
                    <DonationButton
                        key={amount}
                        type="button"
                        className={formData.donationAmount === amount ? 'active' : ''}
                        onClick={() => handleDonationSelect(amount)}
                    >
                        ₹{amount}
                    </DonationButton>
                    ))}
                </DonationAmounts>

                <Label htmlFor="customAmount">Or enter custom amount:</Label>
                <CustomAmountInput
                    type="number"
                    id="customAmount"
                    name="customAmount"
                    placeholder="Enter amount in INR"
                    value={formData.customAmount}
                    onChange={handleChange}
                    min="100"
                    onFocus={() => setFormData(prev => ({ ...prev, donationAmount: '' }))}
                />
                </>
            )}
            </DonationSection>

            <SubmitButton type="submit">Complete Registration</SubmitButton>
        </form>
        </RegistrationContainer>
    </HomePage>
  );
};

export default EventRegistrationPage;