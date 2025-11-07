

import React from 'react';
import styled from 'styled-components';
import HomePage from '../HomePage';

// Styled Components
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 800px;
  line-height: 1.6;
`;

const Section = styled.section`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
`;

const HighlightText = styled.span`
  color: #7c3aed;
  font-weight: 600;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Conclusion = styled.div`
  background: #eef2ff;
  border-left: 4px solid #4f46e5;
  padding: 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin-top: 2rem;
`;

const ReadingList = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
`;

const ReadingItem = styled.p`
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const PhilosophyPage = () => {
  return (
    <HomePage>
    <PageContainer className="font-sans text-gray-800">
      <Header>
        <Title>History of Democracy in Ancient India</Title>
        <Subtitle>
          Democracy, often associated with ancient Greece, has deep roots in India as well. Long before the Athenian model, India had developed sophisticated systems of collective governance, participatory decision-making, and republics.
        </Subtitle>
      </Header>

      <Section>
        <SectionTitle>1. Democratic Traditions in the Vedic Period (1500–600 BCE)</SectionTitle>
        <p className="mb-4">
          The earliest references to democratic practices in India appear in the <HighlightText>Rigveda</HighlightText> and <HighlightText>Atharvaveda</HighlightText>, where two key institutions are mentioned:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-700 mb-2">Sabha</h3>
            <p>A council of elders and learned individuals who advised the king.</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-700 mb-2">Samiti</h3>
            <p>A broader assembly that included representatives from different sections of society, functioning as a deliberative body.</p>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-indigo-600">Key Features:</h3>
        <FeatureList>
          <FeatureItem>
            <HighlightText>Election of Leaders:</HighlightText> The position of the Rajan (king) was not absolute; he could be removed by the Sabha or Samiti if he failed in his duties.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Collective Decision-Making:</HighlightText> Hymns in the Rigveda emphasize unity in deliberation ("Samgachchaddhvam, Samvadaddhvam" – "Come together, speak together").
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Bicameral Structure:</HighlightText> The Sabha and Samiti functioned similarly to modern legislative bodies, suggesting an early form of bicameral governance.
          </FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>2. Republics (Gana-Sanghas) in the Buddhist Era (600–300 BCE)</SectionTitle>
        <p className="mb-4">
          The <HighlightText>Mahajanapada</HighlightText> period (6th–4th century BCE) saw the rise of <HighlightText>republican states (Gana-Sanghas)</HighlightText> alongside monarchies. Notable examples include:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-700 mb-2">Vajji Confederacy (Licchavis of Vaishali)</h3>
            <p>A powerful republic where leaders were elected, and decisions were made through assemblies.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-700 mb-2">Sakyas (Kapilavastu)</h3>
            <p>The clan of the Buddha practiced a form of democracy where leaders were chosen by consensus.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-700 mb-2">Mallas (Kushinagar & Pava)</h3>
            <p>Another republican state with collective leadership.</p>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-purple-600">Key Features:</h3>
        <FeatureList>
          <FeatureItem>
            <HighlightText>Elected Leadership:</HighlightText> Positions like Rajan (chief), Uparajan (deputy), Senapati (general), and Bhandagarika (treasurer) were filled through elections.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Consensus-Based Governance:</HighlightText> Major decisions required approval from the assembly (Sangha), ensuring participatory rule.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Accountability:</HighlightText> Leaders could be removed if they acted against the collective interest.
          </FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>3. Democratic Institutions in the Mauryan and Post-Mauryan Period (300 BCE–300 CE)</SectionTitle>
        <p className="mb-4">
          While the Mauryan Empire (322–185 BCE) was centralized, local self-governance persisted:
        </p>
        
        <div className="mb-6">
          <h3 className="font-bold text-indigo-700 mb-2">Village Panchayats</h3>
          <p>Autonomous councils managed local administration, justice, and resource distribution.</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-700 mb-2">Uttiramerur Inscription (Chola Era, 10th century CE)</h3>
          <p>Describes a structured electoral process where representatives were chosen via a lottery system (Kudavolai) with fixed tenures and eligibility rules.</p>
        </div>

        <h3 className="font-bold text-lg mb-2 text-blue-600">Key Features:</h3>
        <FeatureList>
          <FeatureItem>
            <HighlightText>Term Limits:</HighlightText> Officials served fixed terms (e.g., one year) and were barred from immediate re-election.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Transparent Elections:</HighlightText> Names of candidates were written on palm leaves and drawn randomly to prevent bias.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Decentralized Governance:</HighlightText> Village assemblies managed irrigation, temples, and dispute resolution independently.
          </FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>4. Decline of Republics and Transition to Monarchies</SectionTitle>
        <p className="mb-4">
          By the <HighlightText>Gupta period (4th–6th century CE)</HighlightText>, many republics had weakened due to:
        </p>
        <FeatureList>
          <FeatureItem>Internal Conflicts: Disputes among ganas led to instability.</FeatureItem>
          <FeatureItem>Rise of Centralized Empires: The Mauryas and Guptas absorbed smaller republics.</FeatureItem>
          <FeatureItem>Shift to Hereditary Rule: Some republics transformed into oligarchies or monarchies.</FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>5. Legacy and Modern Relevance</SectionTitle>
        <p className="mb-4">
          Ancient India's democratic traditions influenced later systems:
        </p>
        <FeatureList>
          <FeatureItem>
            <HighlightText>Panchayati Raj:</HighlightText> The modern Indian village governance system draws from ancient Panchayats.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Constitutional Principles:</HighlightText> The Rigvedic emphasis on consensus and accountability resonates in India's parliamentary democracy.
          </FeatureItem>
          <FeatureItem>
            <HighlightText>Global Comparisons:</HighlightText> Greek historians like Diodorus Siculus noted India's democratic cities during Alexander's invasion (326 BCE).
          </FeatureItem>
        </FeatureList>

        <Conclusion>
          <h3 className="font-bold text-xl mb-2 text-indigo-800">Conclusion</h3>
          <p>
            India's democratic heritage predates Western models, with institutions like the Sabha-Samiti, Gana-Sanghas, and Panchayats showcasing early forms of collective governance. While monarchies later dominated, these traditions laid the foundation for India's modern democratic ethos.
          </p>
        </Conclusion>

        <ReadingList>
          <h3 className="font-bold text-lg mb-2 text-gray-700">Further Reading:</h3>
          <ReadingItem>"Republics in Ancient India" by J.P. Sharma</ReadingItem>
          <ReadingItem>"India: The Mother of Democracy" (ICHR)</ReadingItem>
          <ReadingItem>"Buddhist India" by T.W. Rhys Davids</ReadingItem>
        </ReadingList>
      </Section>
    </PageContainer>
    </HomePage>
  );
};

export default PhilosophyPage;