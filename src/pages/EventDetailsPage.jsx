import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import HomePage from './HomePage';

const EventDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const EventHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    margin: 1rem auto;
  }
`;

const EventDate = styled.div`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
`;

const EventImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
`;

const SectionContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
`;

const SpeakerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`;

const SpeakerCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SpeakerImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  margin: 0 auto 1rem;
  border: 3px solid #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const SpeakerName = styled.h3`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const SpeakerTitle = styled.p`
  text-align: center;
  color: #7f8c8d;
  font-size: 0.9rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const MediaItem = styled.div`
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const KeyTakeaways = styled.ul`
  list-style-type: none;
  padding-left: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }
  }
`;

const RegisterButton = styled.button`
  background: linear-gradient(90deg, #3498db, #9b59b6);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-top: 2rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

const EventDetailsPage = () => {
  const { eventId } = useParams();
  
  // Sample data - in a real app, this would come from an API
  const event = {
    id: eventId,
    title: "Building a Neo-Democratic Society",
    date: "June 15, 2023 | 10:00 AM - 4:00 PM",
    location: "Shane Hind Forum Convention Center, New Delhi",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    purpose: "This event brings together thought leaders, policymakers, and citizens to discuss the future of democratic governance in our society. We'll explore innovative approaches to civic engagement, digital democracy, and participatory governance models that can strengthen our democratic institutions.",
    speakers: [
      {
        id: 1,
        name: "Dr. Aravind Sharma",
        title: "Political Scientist, Harvard University",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        id: 2,
        name: "Priya Patel",
        title: "Founder, CivicTech India",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        id: 3,
        name: "Rajiv Mehta",
        title: "Former Chief Election Commissioner",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ],
    keyTakeaways: [
      "Understand the principles of neo-democracy and how they differ from traditional models",
      "Learn about successful case studies of participatory governance from around the world",
      "Discover tools and technologies enabling greater civic participation",
      "Network with like-minded individuals committed to democratic innovation",
      "Gain actionable insights to implement in your community"
    ],
    gallery: [
      { type: 'image', url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80" },
      { type: 'image', url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" },
      { type: 'video', url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
    ]
  };

  return (
    <HomePage>
        <EventDetailsContainer>
        <EventHeader>
            <EventTitle>{event.title}</EventTitle>
            <EventDate>{event.date}</EventDate>
            <EventDate>{event.location}</EventDate>
            <EventImage image={event.image} />
        </EventHeader>

        <Section>
            <SectionTitle>About This Event</SectionTitle>
            <SectionContent>
            <p>{event.purpose}</p>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle>Featured Speakers</SectionTitle>
            <SpeakerGrid>
            {event.speakers.map(speaker => (
                <SpeakerCard key={speaker.id}>
                <SpeakerImage image={speaker.image} />
                <SpeakerName>{speaker.name}</SpeakerName>
                <SpeakerTitle>{speaker.title}</SpeakerTitle>
                </SpeakerCard>
            ))}
            </SpeakerGrid>
        </Section>

        <Section>
            <SectionTitle>Key Takeaways</SectionTitle>
            <KeyTakeaways>
            {event.keyTakeaways.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </KeyTakeaways>
        </Section>

        <Section>
            <SectionTitle>Gallery</SectionTitle>
            <Gallery>
            {event.gallery.map((item, index) => (
                <MediaItem key={index}>
                {item.type === 'image' ? (
                    <img src={item.url} alt={`Event ${index + 1}`} />
                ) : (
                    <iframe 
                    src={item.url} 
                    title="Event video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                )}
                </MediaItem>
            ))}
            </Gallery>
        </Section>

        <div style={{ textAlign: 'center' }}>
            <RegisterButton onClick={() => window.location.href = `/register-event/${event.id}`}>
            Register Now
            </RegisterButton>
        </div>
        </EventDetailsContainer>
    </HomePage>
  );
};

export default EventDetailsPage;