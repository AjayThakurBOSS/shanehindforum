import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Styled Components
const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 1.5rem;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(90deg, #3498db, #e74c3c);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const SliderContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 900px;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${props => css`
    transform: translateX(-${props.activeIndex * 100}%);
  `}
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  transition: all 0.4s ease;
  
  ${props => props.isActive ? css`
    animation: ${props.direction === 'right' ? slideInFromRight : slideInFromLeft} 0.6s ease-out;
  ` : css`
    opacity: 0;
  `}
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  border-left: 5px solid ${props => props.themeColor};
  transform: ${props => props.isActive ? 'scale(1)' : 'scale(0.95)'};
  opacity: ${props => props.isActive ? '1' : '0.6'};
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const QuoteIcon = styled.div`
  color: ${props => props.themeColor};
  font-size: 4rem;
  line-height: 1;
  opacity: 0.1;
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-family: Georgia, serif;
`;

const TestimonialText = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 1;
  font-weight: 400;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
  border: 3px solid ${props => props.themeColor};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  color: #2c3e50;
  margin: 0 0 0.3rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const AuthorTitle = styled.p`
  color: #7f8c8d;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 300;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #2c3e50;
  }
  
  ${props => props.direction === 'left' ? 'left: -25px;' : 'right: -25px;'}
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${props => props.direction === 'left' ? 'left: -15px;' : 'right: -15px;'}
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.isActive ? '#3498db' : '#e0e0e0'};
  margin: 0 5px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.3);
    background: ${props => props.isActive ? '#3498db' : '#bdbdbd'};
  }
`;

const IndianFlag = styled.div`
  width: 25px;
  height: 25px;
  background: linear-gradient(to bottom, #FF9933, #FFFFFF, #138808);
  border-radius: 3px;
  margin-left: 0.8rem;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  
  &:after {
    content: '🇮🇳';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
`;

const VoiceOfNationSlider = () => {
  const testimonials = [
    {
      quote: "As a small business owner in Surat, I've seen how policy instability hurts growth. Dr. Singh's two-party system will bring the consistency we need to invest with confidence. This is the economic reform India has been waiting for.",
      name: "Rajesh Mehta",
      title: "Textile Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      themeColor: "#3498db"
    },
    {
      quote: "In my 20 years as an ASHA worker in Bihar, I've seen how caste politics blocks development. Shane Hind Forum's focus on governance over identity gives me hope my grandchildren will see a better India.",
      name: "Priya Devi",
      title: "Healthcare Worker",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      themeColor: "#e74c3c"
    },
    {
      quote: "Returning from Germany, I was shocked by our political inefficiency. Dr. Singh's medical approach to democracy - diagnosing problems and prescribing structural solutions - is exactly what our system needs to become functional.",
      name: "Dr. Arvind Krishnan",
      title: "Biotech Researcher",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      themeColor: "#2ecc71"
    },
    {
      quote: "We young Indians are tired of choosing between bad options. The Neo-Democracy movement represents our aspiration for a modern, merit-based system where policies matter more than personalities.",
      name: "Neha Sharma",
      title: "Engineering Student, IIT Delhi",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      themeColor: "#f39c12"
    },
    {
      quote: "As a farmer from Punjab, I want leaders who understand policy, not just politics. Dr. Singh's scientific approach to governance gives me confidence that agriculture will finally get the attention it deserves.",
      name: "Gurpreet Singh",
      title: "Agricultural Producer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      themeColor: "#9b59b6"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setDirection('right');
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, autoPlay]);

  return (
    <TestimonialsContainer>
      <SectionHeader>
        <SectionTitle>
          Voice of the Nation
          <IndianFlag />
        </SectionTitle>
        <SectionSubtitle>
          Citizens across India share why they support the Neo-Democracy Movement
        </SectionSubtitle>
      </SectionHeader>

      <SliderContainer
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <NavButton direction="left" onClick={prevSlide}>
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </NavButton>

        <SliderTrack activeIndex={activeIndex}>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide 
              key={index}
              isActive={index === activeIndex}
              direction={direction}
            >
              <TestimonialCard
                themeColor={testimonial.themeColor}
                isActive={index === activeIndex}
              >
                <QuoteIcon themeColor={testimonial.themeColor}>“</QuoteIcon>
                <TestimonialText>{testimonial.quote}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorImage themeColor={testimonial.themeColor}>
                    {/* <img src={testimonial.image} alt={testimonial.name} /> */}
                  </AuthorImage>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </TestimonialSlide>
          ))}
        </SliderTrack>

        <NavButton direction="right" onClick={nextSlide}>
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </NavButton>
      </SliderContainer>

      <Pagination>
        {testimonials.map((_, index) => (
          <PaginationDot
            key={index}
            isActive={index === activeIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Pagination>
    </TestimonialsContainer>
  );
};

export default VoiceOfNationSlider;