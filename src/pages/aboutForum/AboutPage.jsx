import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import HomePage from '../HomePage';
import FImage from '../../images/d2.png'
import CTAComponent from '../../components/CTAComponent';

const AboutPage = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [directorRef, directorInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [bioRef, bioInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    document.title = "About SHF - Visionary Founder";
  }, []);

  return (
    <HomePage>
      <Container>
        <Header ref={headerRef} $inview={headerInView ? 1 : 0}>
          Introduction to SHF - by the visionary founder
        </Header>
        
        <ContentSection>
          <DirectorInfo ref={directorRef} $inview={directorInView ? 1 : 0}>
            <DirectorImageContainer>
              <DirectorImage 
                src={FImage} 
                alt="Dr. Awadhesh Kumar Singh" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300";
                }}
              />
              <ImageOverlay>Dr. Awadhesh Kumar Singh</ImageOverlay>
            </DirectorImageContainer>
            <DirectorDetails>
              <h3>DR. AWADHESH KUMAR SINGH</h3>
              <Title>National President & Chief Founder</Title>
              <p>Senior Consultant Physician & Cardiologist</p>
              <FullDetailsLink href="#">
                <span>See full details</span>
                <ArrowIcon>→</ArrowIcon>
              </FullDetailsLink>
            </DirectorDetails>
          </DirectorInfo>

          <Article ref={contentRef} $inview={contentInView ? 1 : 0}>
            {[
            "Being a doctor, I regularly go to villages for the rural health checkup. It was for detection and awareness of Diabetes, High BP, Heart and counseling regarding cleanliness and Smoking Problems. This program was done under the Awareness and Education mission of International Society for Self- Improvement, Meditation and Complete Health in eastern UP. After examining the BP, Blood glucose, BMI and taking personal history regarding tobacco, gutka chewing and smoking, it was now time for public interaction regarding the various aspects of the daily living which seems to be affecting the people. One of the issues shared was the issue of balanced diet for healthy living. As a professional, we were talking about the importance of consuming green leafy vegetables and fresh fruits. I was asked many questions and we answered them convincingly. A middle-aged poor guy stood up and said, Can you tell me a way how I can get balanced diet/fruits.? At times we eat less and starve too. He further told us, Doctor, we are family of old father, mother, me and my wife along with seven children. I have no land, only me and my wife working as laborers. My children go to school for mid- day meal and I don't recall when I consumed fruits last time. Fruits are a rare luxury for us at occasions. When I asked what the occasion was, he answered –only at the times elections when we got money to eat meat and bring fruits to my children. I always wait and wish the time when elections would come and we would be given some money and would go to rallies to backup and show strength in favor of the person fighting election. When we asked, is it really true, the guy told that it is reality that a person fighting Gram- Pradhan election expends 10-25 lacks rupees which is being distributed among us…the voters. We know that of course, these rupees are recovered after the election from Crores of the public money allotted to our village.",
              "We listened  and ultimately returned  thinking immense flaw of the present working system or present democratic system that  boasts of  justice ,equality, liberty and fraternity to all its citizen but incapable of delivering the same. This issue is very complex and extremely complicated subject which should be research subject of many universities and institutions, learned people from civil society, advocates, professors, experienced bureaucrats and professionals, learned media   and management personalities etc. And this encouraged me to contemplate and movement of – Neo- Democracy through SHANE HIND FORUM and its various organization.",
              "For this end, the aim to attain a balanced political system is must. The movement emphasizes upon the need for truly democratic establishment- the one that is based on justice, equality, freedom, social security and fraternity and of course, unity and integrity of India, the principles enshrined in the preamble  of Constitution of India. Even the issue related to health and basic needs of people cannot be carried out in absence of the above-mentioned ideals. The concept of Neo-Democracy seems to remind us the ancient Greek saying: Vox Populi Vox Dei—voice of people is the voice of God.  Truly speaking, the most ideal form of democracy is the one where all the planning originates from the common man and ends into… with him too. The messages given here over Neo-democracy are the convincing proposition.  The basic concept seems to be conducive to the idea of an ideal state of health and wellbeing of citizens and society.",
              "It appears that the concept of Neo- Democracy burgeons from the respect of the masses. It is not governed by whims of select few. Its straights lies on the democratization of the system on one hand and acceptance of the individual as the most important unit at  the functional level on the other hand.it is organic in character and must be considered  to be the greatest element that gives stability at the structural level in politics. Its quintessence consists in will to serve the Demos…the people. All the negative and fissiparous tendencies grow fast and overpower everything when unconscionable politicians and the crafty-vile and the demagogues take over the governance of the country. Citizens concern about the abject existence of the common man and fear of apathetic political system and its all dangers has been voiced with utmost clarity in this movement. In fact, politics affect everything and a prime key to all function. In this context, Mahatma Gandhi and Carl Marx advocated two widely different philosophies of life and yet there was similarity too in their approach. Both of them showed a tremendous concern for the betterment of the exploited class. This movement seems to suggest here that Neo- Democracy can be fine blend of Gandhi and Marx… the Rightist and the Leftist making together a real plinth for the growth of Neo- Democracy. Thus, we can believe that it can bring health and happiness to all the members of the society. It seems to be an urgent need in the present-day India and Indian subcontinent, even whole democratic world societies."
            ].map((paragraph, index) => (
              <AnimatedParagraph key={index} $delay={index * 0.2}>
                {paragraph}
              </AnimatedParagraph>
            ))}
          </Article>

          <DirectorBio ref={bioRef} $inview={bioInView ? 1 : 0}>
            <BioHeader>About Dr. Awadhesh Kumar Singh</BioHeader>
            {[
              "Dr. Awadhesh Kumar Singh is National President & Chief founder and National Convener of Shane Hind Forum. He is a senior consultant physician and cardiologist.  He is the chief founder of the international society for self-improvement, Meditation and Complete Health (ISICH) and National Diabetes, High BP, Heart and Stress care foundation. Also, he is life member of association of physician of India, Research society of diabetes in India, Indian medical association and American college of physicians. He has widely travelled round the word sharing the views with citizen of many cultures, religious and nationally regarding comprehensive human welfare religious harmony and word peace.",
              "Dr. Awadhesh Kumar Singh has always kept before him a human outlook. For him all issues concerning humanity is mission: A sacred one too… He has written two books- a book on ISICH LIFESTYLE- TO EXPLORE AND ACHIEVE THE BEST- A Novel life style, blending modern science with trans-Age Spiritual Wisdom. And a book of NEO- DEMOCRACY which is the sources of -Shane Hind Forum -Socio-political movement in the Country:  A New dawn for the system. It is a unique creation as in it the author has envisioned the possibilities of a unification of two democratically apposite political philosophies -the right and left – Gandhi and Marx for the betterment of humanity at large. It is Dr.Singh 's conviction that perfect atmosphere of harmony is essential for peace within people and society and this ideal state can only be realized in a system of neo democracy or like.",
              "He is an Alumni of Maharani Laxami Medical College Jhansi. He had done MBBS, and Post graduated in Internal Medicine (MD. MEDICINE) He was senior resident at Saint Stiffens Hospital Delhi. Soon, he joined -provincial medical services but left the job and came to practice as Consultant Buddha hospital and medical research Centre at Deoria.Since beginning, he was associated to social work, served as Secretary and President of Citizen Welfare Association, Deoria UP."
            ].map((paragraph, index) => (
              <BioParagraph key={index}>{paragraph}</BioParagraph>
            ))}
          </DirectorBio>
        </ContentSection>

        <CTAComponent/>
      </Container>
    </HomePage>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2d3436;
  line-height: 1.8;

  @media (max-width: 768px) {
    padding: 1rem;
    
  }
`;

const Header = styled.h1`
  margin-top: 2rem;
  text-align: center;
  color: #0984e3;
  margin-bottom: 3rem;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 1.5rem;
  line-height: 1.2;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out forwards` : 'none'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #0984e3, #00cec9);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
`;

const ContentSection = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const DirectorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #dfe6e9;
  gap: 3rem;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out 0.3s forwards` : 'none'};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
`;

const DirectorImageContainer = styled.div`
  position: relative;
  min-width: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    min-width: 200px;
    width: 100%;
    height: 100%;
  }
`;

const DirectorImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;

  ${DirectorImageContainer}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 600px){

  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
`;

const DirectorDetails = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    color: #2d3436;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;

  }
  
  p {
    margin: 0.5rem 0;
    color: #636e72;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const Title = styled.p`
  color: #0984e3 !important;
  font-weight: 600;
  font-size: 1.1rem !important;
  margin-bottom: 1rem !important;
`;

const FullDetailsLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 1.5rem;
  color: #0984e3;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2px solid #0984e3;
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0984e3;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(9, 132, 227, 0.3);
  }

  span {
    margin-right: 0.5rem;
  }
`;

const ArrowIcon = styled.span`
  transition: transform 0.3s ease;
  
  ${FullDetailsLink}:hover & {
    transform: translateX(3px);
  }
`;

const Article = styled.article`
  margin-bottom: 3rem;
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${scaleIn} 0.6s ease-out forwards` : 'none'};
`;

const AnimatedParagraph = styled.p`
  margin-bottom: 1.8rem;
  text-align: justify;
  font-size: 1.1rem;
  opacity: 0;
  animation: ${props => css`${fadeIn} 0.6s ease-out ${props.$delay}s forwards`};

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const DirectorBio = styled.div`
  background: linear-gradient(135deg, #f6f9fc 0%, #e3f2fd 100%);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.03);
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out forwards` : 'none'};
  border-left: 5px solid #0984e3;

  @media (max-width: 768px) {
    padding: .6rem;
    margin: 0 -1.5rem;
  }
`;

const BioHeader = styled.h3`
  color: #2d3436;
  font-size: 1.8rem;
  margin-top: 0;
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
    background: #0984e3;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BioParagraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default AboutPage;