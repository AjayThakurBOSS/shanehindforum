import React from 'react';
import styled from 'styled-components';

const NeoDemocracyConcept = () => {
  return (
    <ConceptContainer>
      <Header>
        <Title>Neo-Democracy Concept</Title>
        <Subtitle>Concept "Neo-Democracy" in coherent to original Indian Constitution</Subtitle>
      </Header>

      <ContentSection>
        <Paragraph>
          The above pious goal can be achieved in the light of original Indian Constitution which incorporates every element of noble democracy along with its noble directions to achieve scientific socialism. The architects of Indian constitution were so learned, liberal and intelligent as they incorporated best principles of democracy from the constitution of so many marvelous democratic nations i.e. Britain, USA, Canada, Oreland, Germany, Australia.
        </Paragraph>

        <Paragraph>
          They have prepared such a draft which can be useful to guide us towards the principle of equality, liberty, sovereignty, secularism, federalism, people's fundamental right and judicial independence along with socialism without use of any unjustified force. The original Indian constitution did not mention the concept of party politics. The Constitution also consisted of check and balance of power among the three arms that are - Llegislative, Eexecutive and Judicial systems.
        </Paragraph>

        <HighlightBox>
          <HighlightText>
            Nobody is supreme, yet the most important factor in democracy appears to be will of the people -which vest in the Parliament and Assembly throughout the country.
          </HighlightText>
        </HighlightBox>

        <SectionTitle>The Current Political Landscape</SectionTitle>
        <Paragraph>
          One of the most important things to be noted is that the architects of our constitution never endorsed so many political parties and didn't even mention the political parties of that time. In fact, Mahatma Gandhi was in favor to abolish Indian National Congress. The reason might have been as Indian National Congress before the independence was a strong movement representing the whole nation. It was not the political party.
        </Paragraph>

        <Paragraph>
          Contemporarily, other national and innumerable regional parties took the advantage and became in power but again also in them, the same character of political culture and dominance by leadership is carried forward and even few parties is having their Supremo/CEO as like a head of private limited company merely in the name of their vote banks and their sole existence is based on the same divide and rule formulae of caste, religion, state, language and other factors of diversity.
        </Paragraph>

        <SectionTitle>The Neo-Democracy Proposal</SectionTitle>
        <Paragraph>
          Here, we-SHANE HIND FORUM present and propose and pledge to strive this Pro- Constitutional Model to people of India and struggle for this model as a Socio-Political Forum-Shane Hind Forum. As per Constitution and Democratic norm, Will of people of India is represented in our noble Parliament or State Assemblies -which further , at root level is determined by each parliamentary or assembly constituency – that is Mini -India.
        </Paragraph>

        <TwoColumnSection>
          <Column>
            <ColumnTitle>Current System (FPTP)</ColumnTitle>
            <ul>
              <li>First candidate elected even without majority</li>
              <li>Often wins with just 30-40% of polled votes</li>
              <li>Doesn't represent majority will</li>
              <li>Leads to minority rule</li>
            </ul>
          </Column>
          <Column>
            <ColumnTitle>Proposed System (TPTP)</ColumnTitle>
            <ul>
              <li>First and second candidates elected</li>
              <li>First represents ruling party (पक्ष Paksh)</li>
              <li>Second represents opposition (प्रतिपक्ष Pratipaksh)</li>
              <li>Combined represents majority will more than 50%</li>
            </ul>
          </Column>
        </TwoColumnSection>

        <CallToAction>
          <ActionTitle>Our Pledge</ActionTitle>
          <ActionText>
            "So- for applying this model to uplift and make country very strong- we- the people, the people of India -should elect two candidates (TPTP) in place of one (FPTP)- that is- first and second ranker in each constituency and send them to Parliament/State Assemblies. First one-winner- should represent ruling party and second one -runner- the opposition party".
          </ActionText>
        </CallToAction>

        <FinalThought>
          Thus, from the whole nation -all winner ups should collectively represent the PAKCHHA पक्ष and the runner ups represent the PRATI -PAKCHHA प्रतिपक्ष in Parliament. Ruling and opposition-- party members irrespective of original party line- from all over the India should elect their leader as Prime minister and leader of opposition respectively under the strict supervision and guidance of present Constitutional body – Election commission of India UNDER THE GUIDELINES AND SUGGESTION OF SUPREME COURT OF INDIA.
        </FinalThought>
      </ContentSection>
    </ConceptContainer>
  );
};

// Styled Components
const ConceptContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;

  @media (max-width: 600px){
    padding: 0;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #4a6fa5;
  line-height: 1.2;
  font-weight: 600;
  
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  color: #4a6fa5;
  font-size: 1.5rem;
  font-weight: 400;
`;

const ContentSection = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const HighlightBox = styled.div`
  background-color: #e8f4fc;
  border-left: 4px solid #4a6fa5;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 4px 4px 0;
`;

const HighlightText = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 0;
`;

const SectionTitle = styled.h3`
  color: #4a6fa5;
  font-size: 1.8rem;
  margin: 2.5rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const TwoColumnSection = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  background-color: white;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ColumnTitle = styled.h4`
  color: #4a6fa5;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const CallToAction = styled.div`
  background-color: #4a6fa5;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 3rem 0;
`;

const ActionTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ActionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
`;

const FinalThought = styled.div`
  font-size: 1.1rem;
  background-color: #f0f7ff;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid #4a6fa5;
`;

export default NeoDemocracyConcept;