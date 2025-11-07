
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaBook, FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

const LeadersSlider = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [bioRef, bioInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [educationRef, educationInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [booksRef, booksInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    document.title = "About Dr. Awadhesh Kumar Singh | SHF";
    
    // Auto-scrolling slider with pause functionality
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    let animationId;
    
    const scrollSlider = () => {
      if (slider && !isPaused) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft = scrollAmount;
        }
      }
      animationId = requestAnimationFrame(scrollSlider);
    };
    
    animationId = requestAnimationFrame(scrollSlider);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Mobile touch events
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <DirectorPage>
      {/* Previous sections remain the same... */}

      <TeamSection ref={teamRef} $inview={teamInView ? 1 : 0}>
        <SectionHeader>
          <FaBriefcase className="icon" />
          <h2>Leadership Team</h2>
        </SectionHeader>
        <TeamSlider 
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <TeamMemberCard key={member}>
              <MemberImage style={{ backgroundImage: `url(https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member}.jpg)` }} />
              <MemberInfo>
                <h3>Team Member {member}</h3>
                <p>Designation {member}</p>
                <p>Brief description about team member's role and contributions...</p>
                <MemberLink href="#">View Profile →</MemberLink>
              </MemberInfo>
            </TeamMemberCard>
          ))}
          {/* Duplicate for infinite scroll */}
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <TeamMemberCard key={`dup-${member}`}>
              <MemberImage style={{ backgroundImage: `url(https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member}.jpg)` }} />
              <MemberInfo>
                <h3>Team Member {member}</h3>
                <p>Designation {member}</p>
                <p>Brief description about team member's role and contributions...</p>
                <MemberLink href="#">View Profile →</MemberLink>
              </MemberInfo>
            </TeamMemberCard>
          ))}
        </TeamSlider>
        <SliderControls>
          <button onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? '▶ Play' : '⏸ Pause'}
          </button>
        </SliderControls>
      </TeamSection>
    </DirectorPage>
  );
};

// Updated Slider Styles

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
    color:rgb(255, 255, 255);
    margin: 0;
    font-weight: 600;
  }
`;



const MemberImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    margin-top: 0;
    color:rgb(255, 255, 255);
  }
  
  p {
    color: #636e72;
    margin-bottom: 1rem;
  }
`;

const MemberLink = styled.a`
  color: #0984e3;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TeamSection = styled.section`
background-color:rgb(42, 177, 136);
  margin-bottom: 4rem;
  padding: 10px;    
  opacity: ${props => props.$inview ? 1 : 0};
  animation: ${props => props.$inview ? css`${fadeIn} 0.8s ease-out 0.6s forwards` : 'none'};
`;

const DirectorPage = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.8;

`;


const TeamSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 2rem;
  padding: 1rem 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  
  button {
    background: #0984e3;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: #0768b2;
    }
  }
`;

// Mobile-specific styles
const TeamMemberCard = styled.div`
  min-width: 300px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  scroll-snap-align: start;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    min-width: 85vw;
    margin-right: 1rem;
  }
`;

export default LeadersSlider
// Rest of the styled components remain the same...