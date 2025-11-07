import React from 'react';
import styled, { keyframes } from 'styled-components';
import HomePage from './HomePage';
import CTAComponent from '../components/CTAComponent';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const EventsPage = () => {
  // Sample event data
  const upcomingEvents = [
    {
      id: 1,
      title: "Neo-Democracy National Convention",
      date: "15 October 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Constitution Club, New Delhi",
      description: "Join thought leaders, constitutional experts, and activists as we discuss implementing the TPTP system to restore true democracy in India. This full-day convention will feature panel discussions, workshops, and strategy sessions.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "5 November 2023",
      time: "10:00 AM - 6:00 PM",
      location: "Bangalore International Center",
      description: "Empowering the next generation of leaders with constitutional values. Interactive sessions on leadership, civic responsibility, and political reform tailored for young change-makers aged 18-30.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastEvents = {
    "2023": [
      {
        id: 101,
        title: "Regional TPTP Awareness Campaign",
        date: "12 August 2023",
        location: "Mumbai",
        impact: "Educated 5,200 citizens about the Two Pass The Post system through street plays, seminars, and door-to-door campaigns",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 102,
        title: "Educators Workshop Series",
        date: "July 2023",
        location: "Hyderabad, Chennai, Kolkata",
        impact: "Trained 240 educators from 60 schools in constitutional values and democratic principles",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      }
    ],
    "2022": [
      {
        id: 201,
        title: "First Neo-Democracy Symposium",
        date: "15 December 2022",
        location: "Delhi",
        impact: "Launched the TPTP movement with 300 attendees including jurists, academics, and civil society leaders",
        image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  return (
    <HomePage>
        <PageContainer>
        <HeroBanner>
            <HeroOverlay />
            <HeroContent>
            <HeroTitle>Shane Hind Forum Events</HeroTitle>
            <HeroSubtitle>Transforming Democracy Through Constitutional Revival</HeroSubtitle>
            <HeroText>
                Our events are revolutionizing Indian democracy by promoting original constitutional values 
                and the innovative TPTP electoral system. Join thousands of citizens in this movement.
            </HeroText>
            </HeroContent>
        </HeroBanner>

        <ImpactSection>
            <Container>
            <SectionHeader>
                <SectionTitle>Our Nationwide Impact</SectionTitle>
                <SectionDescription>
                Through workshops, seminars, and campaigns, we're changing how India understands democracy
                </SectionDescription>
            </SectionHeader>
            
            <ImpactGrid>
                <ImpactCard>
                <ImpactNumber>58</ImpactNumber>
                <ImpactLabel>Events Organized</ImpactLabel>
                </ImpactCard>
                <ImpactCard>
                <ImpactNumber>112,000+</ImpactNumber>
                <ImpactLabel>Citizens Engaged</ImpactLabel>
                </ImpactCard>
                <ImpactCard>
                <ImpactNumber>24</ImpactNumber>
                <ImpactLabel>Cities Reached</ImpactLabel>
                </ImpactCard>
                <ImpactCard>
                <ImpactNumber>600+</ImpactNumber>
                <ImpactLabel>Active Volunteers</ImpactLabel>
                </ImpactCard>
            </ImpactGrid>
            </Container>
        </ImpactSection>

        <UpcomingEvents>
            <Container>
            <SectionHeader>
                <SectionTitle>Upcoming Events</SectionTitle>
                <SectionDescription>
                Join our next initiatives to build a better democratic future
                </SectionDescription>
            </SectionHeader>
            
            <EventCards>
                {upcomingEvents.map(event => (
                <EventCard key={event.id}>
                    <EventImageContainer>
                    <EventImage src={event.image} alt={event.title} />
                    <EventDateBadge>
                        <EventDay>{event.date.split(' ')[0]}</EventDay>
                        <EventMonth>{event.date.split(' ')[1]}</EventMonth>
                    </EventDateBadge>
                    </EventImageContainer>
                    <EventDetails>
                    <EventMeta>
                        <EventTime>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {event.time}
                        </EventTime>
                        <EventLocation>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {event.location}
                        </EventLocation>
                    </EventMeta>
                    <EventTitle>{event.title}</EventTitle>
                    <EventDescription>{event.description}</EventDescription>
                    <EventAction href="#register" className="primary">Register Now</EventAction>
                    </EventDetails>
                </EventCard>
                ))}
            </EventCards>
            </Container>
        </UpcomingEvents>

        <PastEvents>
            <Container>
            <SectionHeader>
                <SectionTitle>Past Events</SectionTitle>
                <SectionDescription>
                See how we've been building the neo-democracy movement
                </SectionDescription>
            </SectionHeader>
            
            {Object.entries(pastEvents).map(([year, events]) => (
                <YearSection key={year}>
                <YearTitle>{year}</YearTitle>
                <PastEventGrid>
                    {events.map(event => (
                    <PastEventCard key={event.id}>
                        <PastEventImage src={event.image} alt={event.title} />
                        <PastEventContent>
                        <PastEventDate>{event.date}</PastEventDate>
                        <PastEventTitle>{event.title}</PastEventTitle>
                        <PastEventLocation>{event.location}</PastEventLocation>
                        <PastEventImpact>
                            <strong>Impact:</strong> {event.impact}
                        </PastEventImpact>
                        <EventAction href={`/events/${event.id}`} className="secondary">
                            View Details
                        </EventAction>
                        </PastEventContent>
                    </PastEventCard>
                    ))}
                </PastEventGrid>
                </YearSection>
            ))}
            </Container>
        </PastEvents>

            <CTAComponent/>
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

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const HeroBanner = styled.section`
  position: relative;
  height: 80vh;
  min-height: 500px;
  max-height: 800px;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.75rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #4299e1;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ImpactSection = styled.section`
  padding: 5rem 0;
  background-color: #f7fafc;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const ImpactCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ImpactNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2b6cb0;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ImpactLabel = styled.div`
  font-size: 1rem;
  color: #4a5568;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const UpcomingEvents = styled.section`
  padding: 5rem 0;
  background: white;
`;

const EventCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EventCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const EventImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 250px;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

const EventDateBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventDay = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b6cb0;
  line-height: 1;
`;

const EventMonth = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a5568;
  text-transform: uppercase;
  margin-top: 2px;
`;

const EventDetails = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #4a5568;
`;

const EventTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
  }
`;

const EventLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
  }
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const EventDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const EventAction = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #4299e1;
    color: white;

    &:hover {
      background: #3182ce;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    border: 2px solid #4299e1;
    color: #4299e1;
    background: transparent;

    &:hover {
      background: #ebf8ff;
      transform: translateY(-2px);
    }
  }
`;

const PastEvents = styled.section`
  padding: 5rem 0;
  background: #f7fafc;
`;

const YearSection = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const YearTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
`;

const PastEventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PastEventCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const PastEventImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 200px;
  }
`;

const PastEventContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PastEventDate = styled.div`
  font-size: 0.875rem;
  color: #4299e1;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PastEventTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const PastEventLocation = styled.div`
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const PastEventImpact = styled.div`
  font-size: 0.9375rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #2b6cb0 0%, #1a365d 100%);
  color: white;
`;

const CTACard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
`;

const CTAContent = styled.div`
  padding: 3rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a365d;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const CTAButton = styled.button`
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.primary ? `
    background: #4299e1;
    color: white;

    &:hover {
      background: #3182ce;
      transform: translateY(-2px);
    }
  ` : `
    background: white;
    color: #4299e1;
    border: 2px solid #4299e1;

    &:hover {
      background: #ebf8ff;
      transform: translateY(-2px);
    }
  `}
`;

export default EventsPage;