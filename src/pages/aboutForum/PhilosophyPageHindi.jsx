import React from 'react';
import styled from 'styled-components';
import HomePage from '../HomePage';


// Styled Components
const PageContainer = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #2b5876, #4e4376);
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
  color: #2b5876;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
`;

const HighlightText = styled.span`
  color: #4e4376;
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

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #2b5876, #4e4376);
    border-radius: 2px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0.3rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #4e4376;
    border: 2px solid white;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  color: #2b5876;
  margin-bottom: 0.5rem;
`;

const TimelineContent = styled.p`
  color: #4a5568;
`;

const QuoteBox = styled.blockquote`
  background: #edf2f7;
  border-left: 4px solid #4e4376;
  padding: 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 1.5rem 0;
  font-style: italic;
`;

const PhilosophyPageHindi = () => {
  return (
    <HomePage>
    <PageContainer className="font-sans text-gray-800">
      <Header>
        <Title>राजनीतिक दल: संक्षिप्त इतिहास और सर्वहितकारी विचारों की संभावनाएं</Title>
        <Subtitle>
          राजनीतिक दल एक संगठित समूह होता है, इनका मुख्य उद्देश्य चुनाव लड़कर सत्ता प्राप्त करना और शासन करना होता है लेकिन उसके साथ-साथ जनहित, मानव हित और राष्ट्रहित के लिए कदम-कदम पर स्पष्ट सोच के साथ चलना होता है।
        </Subtitle>
      </Header>

      <Section>
        <SectionTitle>राजनीतिक दलों की भूमिका और वर्तमान चुनौतियाँ</SectionTitle>
        <p className="mb-4">
          राजनीतिक दल जनता और सरकार के बीच सेतु का कार्य करते हैं। वे जनमत को नीति में बदलते हैं और लोकतांत्रिक प्रणाली में प्रतिनिधित्व सुनिश्चित करते हैं।
        </p>
        
        <QuoteBox>
          "समय की मांग है कि राजनीतिक दल केवल चुनाव लड़ने और सत्ता भोगने के साधन नहीं, बल्कि शिक्षा, नीति निर्माण, नेतृत्व विकास, और जनता की आवाज़ एवं राष्ट्र निर्माण के मुख्य माध्यम होने चाहिए।"
        </QuoteBox>

        <h3 className="font-bold text-lg mb-2 text-gray-700">वर्तमान समस्याएँ:</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">सामाजिक विभाजन</h3>
            <p>वर्णाधारित राजनीति, जातिवाद, धार्मिक आधार पर ध्रुवीकरण</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">भ्रष्टाचार</h3>
            <p>धनबल और बाहुबल का प्रचलन, अपराध में वृद्धि</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">जनहित की उपेक्षा</h3>
            <p>मूलभूत सिद्धांतों का स्वार्थ के आगे गौण होना</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">प्रतिनिधित्व संकट</h3>
            <p>युवाओं और अल्पसंख्यकों का अपर्याप्त प्रतिनिधित्व</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>राजनीतिक दलों का ऐतिहासिक विकास</SectionTitle>
        
        <TimelineContainer>
          <TimelineItem>
            <TimelineTitle>प्राचीन काल</TimelineTitle>
            <TimelineContent>
              यूनान में एथेन्स की लोकतांत्रिक सभाओं में अलग-अलग विचारधाराओं वाले गुट (लोकप्रियवादी और अभिजात वर्ग समर्थक)। रोम साम्राज्य में Optimates और Populares जैसे गुट।
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>17वीं-18वीं शताब्दी</TimelineTitle>
            <TimelineContent>
              ब्रिटेन में व्हिग्स (Whigs) और टोरीज़ (Tories) का उदय। अमेरिका में फेडरलिस्ट, डेमोक्रेटिक-रिपब्लिकन पार्टियों का गठन। फ्रांसीसी क्रांति के बाद जैकोबिन्स का उभार।
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>19वीं शताब्दी</TimelineTitle>
            <TimelineContent>
              औद्योगिक क्रांति के बाद मार्क्सवाद, समाजवाद, राष्ट्रवाद आधारित पार्टियों का गठन। यूरोप, अमेरिका, एशिया में बहुदलीय प्रणाली का विकास।
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>20वीं शताब्दी</TimelineTitle>
            <TimelineContent>
              उपनिवेशवाद के बाद का दौर (1940-1970)। भारत, घाना, इंडोनेशिया आदि में स्वतंत्रता आंदोलन और नए राजनीतिक दलों का गठन। भारतीय राष्ट्रीय कांग्रेस, अफ्रीकन नेशनल कांग्रेस जैसे दलों का उदय।
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </Section>

      <Section>
        <SectionTitle>20वीं शताब्दी की प्रमुख विचारधाराएँ</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-700 mb-2">उदारवाद और रूढ़िवाद</h3>
            <p>पश्चिमी लोकतंत्रों में प्रभावशाली। अमेरिका की Democratic Party और ब्रिटेन की Conservative Party इसके उदाहरण।</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-red-700 mb-2">समाजवाद और साम्यवाद</h3>
            <p>सोवियत संघ की कम्युनिस्ट पार्टी (CPSU) और चीन की कम्युनिस्ट पार्टी (CPC) का उदय।</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">राष्ट्रवाद और लोकलुभावनवाद</h3>
            <p>संस्कृतिक पहचान, देशभक्ति, और एलीट विरोध पर आधारित राजनीति।</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>उपनिवेशवाद के बाद की चुनौतियाँ</SectionTitle>
        
        <FeatureList>
          <FeatureItem>
            <HighlightText>एक-दलीय प्रभुत्व:</HighlightText> भारत में कांग्रेस का लंबे समय तक शासन, चीन में कम्युनिस्ट पार्टी का एकाधिकार।
          </FeatureItem>
          <FeatureItem>
            <HighlightText>सैन्य-समर्थित शासन:</HighlightText> कई देशों में सत्ता पर सेना या तानाशाही प्रवृत्तियों का कब्जा।
          </FeatureItem>
          <FeatureItem>
            <HighlightText>आंतरिक लोकतंत्र का अभाव:</HighlightText> दलों के भीतर तानाशाही प्रवृत्तियाँ, विघटन और टूट-फूट।
          </FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>वर्तमान संकट और आलोचनाएँ</SectionTitle>
        
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-700 mb-2">लोकलुभावन और व्यक्तिवादी राजनीति</h3>
          <p>नेताओं ने दलों को अपने व्यक्तित्व-केन्द्रित मंच में बदल दिया है। पार्टी की पहचान अब सामूहिक विचारधारा पर नहीं, बल्कि व्यक्ति विशेष पर आधारित हो गई है।</p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-red-700 mb-2">धनबल की राजनीति</h3>
          <p>चुनाव लड़ने और पार्टी में ऊँचा स्थान पाने के लिए धनबल एक आवश्यक शर्त बनता जा रहा है, जिससे प्रतिभा और जनप्रतिनिधित्व का रास्ता अवरुद्ध होता है।</p>
        </div>

        <p className="mb-4">
          जनता में यह भावना गहराई है कि राजनीतिक दल भ्रष्ट हैं, अभिजात वर्ग केंद्रित हैं, और जन सरोकारों से कटे हुए हैं। युवा मतदाता और नागरिक समाज अब वैकल्पिक मंचों और आंदोलनों की ओर झुकाव दिखा रहे हैं।
        </p>
      </Section>

      <Section>
        <SectionTitle>सुधार के लिए सुझाव</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">आंतरिक लोकतंत्र</h3>
            <p>दलों में पारदर्शिता और आंतरिक चुनावों को मजबूत करना। समाज में सेवा करने वाले निर्दलीयों को बढ़ावा देना।</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">विविधता और समावेशन</h3>
            <p>नेतृत्व स्तर पर महिलाओं, युवाओं, अल्पसंख्यकों और वंचित वर्गों को प्रतिनिधित्व देना।</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-700 mb-2">चुनावी सुधार</h3>
            <p>सार्वजनिक धन से चुनावों का वित्त पोषण। "टू-पास-द-पोस्ट" जैसी नई चुनावी प्रणालियों पर विचार।</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-700 mb-2">जन-केंद्रित नवाचार</h3>
            <p>जमीनी आंदोलनों और नागरिक भागीदारी से जुड़कर कार्य करना। विचार-विमर्श आधारित मंचों को बढ़ावा देना।</p>
          </div>
        </div>

        <QuoteBox>
          "इस किताब का मुख्य उद्देश्य राष्ट्र को छद्म लोकतंत्र से दूर - संप्रभु, गणतांत्रिक, एवं सच्चा जनतंत्र की राह पर लाना है।"
        </QuoteBox>
      </Section>
    </PageContainer>
    </HomePage>
  );
};

export default PhilosophyPageHindi;