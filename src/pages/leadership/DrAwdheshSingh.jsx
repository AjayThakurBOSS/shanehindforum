
import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaBook, FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';
import HomePage from '../HomePage';
import LeadersSlider from './LeadersSlider';
import CTAComponent from '../../components/CTAComponent';
import DrBannerImg from '../../images/DrAwadheshBanner.png';
import ISIChBook from '../../images/isich_book_cover.jpeg';
import ShaneBook from '../../images/shanehind_book_cover.jpeg'

const DrAwdheshSingh = () => {
  const sliderRef = useRef(null);
  const [bioRef, bioInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [educationRef, educationInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [booksRef, booksInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    document.title = "About Dr. Awadhesh Kumar Singh | SHF";
    
    // Auto-scrolling slider
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    
    const scrollSlider = () => {
      if (slider) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollSlider);
    };
    
    const animationId = requestAnimationFrame(scrollSlider);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <HomePage>
      <DirectorPage>
        <HeroSection>
          <HeroImage />
          <HeroContent>
            <AnimatedTitle $delay={0.2}>DR. AWADHESH KUMAR SINGH</AnimatedTitle>
            <AnimatedSubtitle $delay={0.4}>National President & Chief Founder</AnimatedSubtitle>
            <SocialLinks $delay={0.6}>
              <SocialLink href="#" target="_blank"><FaLinkedin /></SocialLink>
              <SocialLink href="#" target="_blank"><FaTwitter /></SocialLink>
              <SocialLink href="#" target="_blank"><FaFacebook /></SocialLink>
              <SocialLink href="#" target="_blank"><FaInstagram /></SocialLink>
            </SocialLinks>
          </HeroContent>
        </HeroSection>

        <ContentWrapper>
          <BioSection ref={bioRef} $inview={bioInView ? 1 : 0}>
            <SectionHeader>
              <FaUsers className="icon" />
              <h2>Biography</h2>
            </SectionHeader>
            <BioContent>
              <p>Dr. Awadhesh Kumar Singh is National President & Chief founder and National Convener of Shane Hind Forum. He is a senior consultant physician and cardiologist. He is the chief founder of the international society for self-improvement, Meditation and Complete Health (ISICH) and National Diabetes, High BP, Heart and Stress care foundation. Also, he is life member of association of physician of India, Research society of diabetes in India, Indian medical association and American college of physicians. He has widely travelled round the word sharing the views with citizen of many cultures, religious and nationally regarding comprehensive human welfare religious harmony and word peace.</p>
              <p>Dr. Awadhesh Kumar Singh has always kept before him a human outlook. For him all issues concerning humanity is mission: A sacred one too…</p>
            </BioContent>
          </BioSection>
          <img src={DrBannerImg} alt='doctor Img' />

          <EducationSection ref={educationRef} $inview={educationInView ? 1 : 0}>
            <SectionHeader>
              <FaGraduationCap className="icon" />
              <h2>Education & Career</h2>
            </SectionHeader>
            <EducationContent>
              <p>He is an Alumni of Maharani Laxmi Medical College, Jhansi. He had done MBBS, and Post graduated in Internal Medicine (MD. MEDICINE) He was senior resident at Saint Stiffens Hospital Delhi. Soon, he joined -provincial medical services but left the job and came to practice as Consultant Buddha hospital and medical research centre at Deoria. Since beginning, he was associated to social work, served as Secretary and President of Citizen Welfare Association, Deioria, UP.</p>
              <Achievements>
                <AchievementItem>
                  <div className="number">30+</div>
                  <div className="label">Years of Experience</div>
                </AchievementItem>
                <AchievementItem>
                  <div className="number">50+</div>
                  <div className="label">Research Papers</div>
                </AchievementItem>
                <AchievementItem>
                  <div className="number">100+</div>
                  <div className="label">International Conferences</div>
                </AchievementItem>
              </Achievements>
            </EducationContent>
          </EducationSection>

          <BooksSection ref={booksRef} $inview={booksInView ? 1 : 0}>
            <SectionHeader>
              <FaBook className="icon" />
              <h2>Published Works</h2>
            </SectionHeader>
            <BooksGrid>
              <BookCard>
                <img src={ISIChBook} alt="isich-book" style={{ backgroundImage: `url(${ISIChBook})` }} />
                <BookInfo>
                  <h3>ISICH LIFESTYLE</h3>
                  <p>TO EXPLORE AND ACHIEVE THE BEST - A Novel life style, blending modern science with trans-Age Spiritual Wisdom</p>
                  <BookLink href="#">View Details →</BookLink>
                </BookInfo>
              </BookCard>
              <BookCard>
                <img src={ShaneBook} alt='shanehind_book' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80)' }} />
                <BookInfo>
                  <h3>NEO DEMOCRACY</h3>
                  <p>The source of Shane Hind Forum - Socio-political movement in the Country: A New dawn for the system. It is a unique creation as in it the author has envisioned the possibilities of a unification of two democratically apposite political philosophies -the right and left </p>
                  <BookLink href="#">View Details →</BookLink>
                </BookInfo>
              </BookCard>
            </BooksGrid>
          </BooksSection>
         
         {/*  <LeadersSlider/> */}
          <CTAComponent/>
        </ContentWrapper>
      </DirectorPage>
      
    </HomePage>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const DirectorPage = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.8;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
  text-align: center;

  @media (max-width: 600px){
    height: auto;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                   url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
  z-index: 1;
`;

const AnimatedTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  opacity: 0;
  animation: ${props => css`${fadeIn} 0.8s ease-out ${props.$delay}s forwards`};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.2;

  }
`;

const AnimatedSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  opacity: 0;
  animation: ${props => css`${fadeIn} 0.8s ease-out ${props.$delay}s forwards`};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.0rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  opacity: 0;
  animation: ${props => css`${fadeIn} 0.8s ease-out ${props.$delay}s forwards`};
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00cec9;
    transform: translateY(-5px);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    color: #0984e3;
  }
  
  h2 {
    font-size: 2rem;
    color: #2d3436;
    margin: 0;
  }
`;

const BioSection = styled.section`
  margin-bottom: 4rem;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out forwards` : 'none'};
`;

const BioContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const EducationSection = styled.section`
  margin-bottom: 4rem;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out 0.2s forwards` : 'none'};
`;

const EducationContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const Achievements = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AchievementItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0984e3;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1rem;
    color: #636e72;
  }
`;

const BooksSection = styled.section`
  margin-bottom: 4rem;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out 0.4s forwards` : 'none'};
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BookCover = styled.img`
  height: auto;
  background-size: cover;
  background-position: center;
  
`;

const BookInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    margin-top: 0;
    color: #2d3436;
  }
  
  p {
    color: #636e72;
    margin-bottom: 1.5rem;
  }
`;

const BookLink = styled.a`
  color: #0984e3;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;


// Intersection Observer Hook
function useInView(options) {
  const [ref, inView] = React.useState(false);
  const [element, setElement] = React.useState(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        inView(true);
        observer.unobserve(entry.target);
      }
    }, options);
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, options]);
  
  return [setElement, inView];
}

export default DrAwdheshSingh;
