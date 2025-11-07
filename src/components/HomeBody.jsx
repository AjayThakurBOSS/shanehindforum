import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Hero from './Hero';
import DrAwdheshProfile from './DrAwdheshProfile ';
import ShaneHindForum from './ShaneHindForum';
import JoinShaneHindForum from './JoinShaneHindForum ';
import VoiceOfNation from './VoiceOfNationSlider';
import NeoDemocracyConcept from './NeoDemocracyConcept';
import CTAComponent from './CTAComponent';
import DebateImg  from '../images/g5.png'
import CongreeImg  from '../images/g4.png'
import WhyVeryUnique from './WhyVeryUnique';
import HeadlinesSlider from './AimImageSliders/HeadlinesSlider';
import GallerySlider from './AimImageSliders/gallerySlider';
import { FaRegHandPointRight } from "react-icons/fa";
import WhyWeAreUniqueDocument from './WhyWeAreUniqueDocument';



// Sample notice data
const notices = [
  "Voter registration deadline extended until Friday",
  "Town hall meeting scheduled for March 15th at 6 PM",
  "New campaign finance reform bill introduced in Senate",
  "Primary elections moved to June 10th",
  "Debate watch party at community center tonight",
  "Poll workers needed for upcoming election",
  "Early voting locations now open",
  "Candidate forum for local elections next Tuesday"
];

const twoParySystem =[
  "गांधी और कार्ल मार्क्स के लिए सम्मिश्रण",
  "मानवता की बेहतरी।",
  "चुनाव के बाद",
  "पार्टी लाइन-कम-अभी तक",
  "लोकतांत्रिक गणराज्य के अनुरूप जनता द्वारा दो पार्टी",
  "जहां पहले रैंकर्स-विजेता-हाउस में सत्तारूढ़ पार्टी के रूप में",
  "विरोधी पार्टी के रूप में घर में धावक दूसरे रैंकर्स",
  "राष्ट्रीय बहस द्वारा प्रधानमंत्री या मुख्यमंत्री का चुनाव दोनों"
]

// Sample images for the content
const politicalImages = [
  DebateImg,
  CongreeImg
];

const HomeBody = () => {
  const noticeBoardRef = useRef(null);

  useEffect(() => {
    // Auto-scrolling effect for notices
    const noticeBoard = noticeBoardRef.current;
    let scrollPosition = 0;
    
    const scrollInterval = setInterval(() => {
      if (noticeBoard) {
        scrollPosition += 0.9;
        if (scrollPosition >= noticeBoard.scrollHeight / 2) {
          scrollPosition = 0;
        }
        noticeBoard.scrollTop = scrollPosition;
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
     <Hero />
       <PageContainer>
      <LeftSection>
        <NoticeBoardTitle >New Dawn for the Nation</NoticeBoardTitle>
{/*     <NoticeBoard ref={noticeBoardRef}>
          {[...notices, ...notices].map((notice, index) => (
            <NoticeItem key={index}>{notice}</NoticeItem>
          ))}
        </NoticeBoard> */}
        <ProcessFlow>
          <FlowItem>ONE NATION</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>ONE ELECTION</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>AFTER ELECTION (TWO PARTY)</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>पक्ष पार्टी (प्रथम विजयी प्रत्यासी) एवं प्रतिपक्ष पार्टी (द्वितीय विजयी प्रत्यासी)</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>जनता द्वारा</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>रास्ट्रीय बहस</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>केंद्रीय सरकार (P.M का चयन) / राज्य सरकारे federal Government (C.M का चयन)</FlowItem>
          <FlowArrow>→</FlowArrow>
          <FlowItem>कैबिनेट या मंत्रिमंडल</FlowItem>
        </ProcessFlow>
        <ContentText>
          The two-party system is a political framework where two major political parties dominate voting in nearly all elections at every level of government. In countries like the United States, these are the Democratic and Republican parties.
        </ContentText>
        
        <SubTitle>Benefits to Society:</SubTitle>
        <BenefitsList>
          <BenefitItem> <FaRegHandPointRight style={{marginRight:"5px", color: "#ff0000"}}/> Provides clear choices for voters</BenefitItem>
          <BenefitItem> <FaRegHandPointRight style={{marginRight:"5px", color: "#ff0000"}}/>Promotes political stability and gradual change</BenefitItem>
          <BenefitItem> <FaRegHandPointRight style={{marginRight:"5px", color: "#ff0000"}}/>Simplifies the decision-making process for voters</BenefitItem>
          <BenefitItem> <FaRegHandPointRight style={{marginRight:"5px", color: "#ff0000"}}/>Encourages broad-based, centrist policies</BenefitItem>
          <BenefitItem> <FaRegHandPointRight style={{marginRight:"5px", color: "#ff0000"}}/>Creates accountability through clear opposition</BenefitItem>
        </BenefitsList>
          <NoticeBoard ref={noticeBoardRef}>
          {twoParySystem.map((notice, index) => (
            <NoticeItem key={index}>{notice}</NoticeItem>
          ))}
        </NoticeBoard>
          

      </LeftSection>

      <RightSection>
        <ContentTitle>शाने हिंद फ़ोरम में आपका स्वागत है । </ContentTitle>
        <ContentText style={{fontWeight:'600', fontSize:'1.3rem', color:'#004AAD'}}>
          शाने हिंद फ़ोरम ऑफ इंडिया भारत के हर नागरिक की राजनीतिक पार्टी है। every citizen of India. यह लोकतांत्रिक गणराज्य की सही भावना के लिए उन्मुख है और भारत के सीऑनस्टीवेशनमें प्रतिष्ठापित है।
          </ContentText>
          <ContentText style={{fontWeight:'600', fontSize:'1rem', lineHeight:'1.8' }}>
          यह ध्यान रखना महत्वपूर्ण है कि हमारे देश में आंतरिक संघर्ष फैल रहा है, सीएयूसे, प्रभाव और स्पष्टीकरण उनके मास्टर माइंड द्वारा गुमराह कर रहे हैं, जिसमें विभिन्न संप्रदायों के लोग महसूस करते हैं और अपनी विचारधाराओं के लिए लड़ते हैं, लोग कहते हैं कि हिंदू धर्म खतरे में है, इस्लाम खतरे में है, बौद्ध धर्म खतरे में है, बौद्ध धर्म खतरे में है, ईसाई धर्म खतरे में है लेकिन उनमें से कोई भी कहता है कि मानवता खतरे में है हमारा समाज जाति, धर्म, धार्मिक, जातीय और भाषाई विविधता में विभाजित है कि राजनीतिक दलों के लिए उत्तरदायी हैं हम ऐसा इस आधार पर कह सकते हैं कि हर दल के पास विभाजन और शासन की नीति है जिसके परिणामस्वरूप देश की स्वतंत्रता और एकता और अखंडता के लिए खतरा पैदा होता है, वर्तमान लोकतांत्रिक प्रणाली में हमारे राजनीतिक नेताओं द्वारा विभाजन और शासन को अपनाया जा रहा है ताकि किसी भी तरह सीट जीत सके और सत्ता और लाभ और किसी भी तरह बने रहें। यह कुछ लोगों को गरीबी, अशिक्षा, बेरोजगारी, भूख, अन्य उभरती सामाजिक आर्थिक समस्या और राष्ट्र एकता और अखंडता के लिए उभरते खतरे के खिलाफ सामूहिक रूप से लड़ने के बजाय एक दूसरे के खिलाफ लड़ने के लिए धक्का देता है, पीओलिटिक्स मास्टर कुंजी है जो किसी भी ताला को खोल सकती है फिर सवाल उठता है कि इस देश और उसकी भावी पीढ़ी को कैसे बचाया जाए? उत्तर केवल 'एनईओ- डेमोक्रेसी'"द्वारा है. "Neo-लोकतंत्र सद्भाव के सही माहौल में मानवता के लिए नई सुबह होगा लोगों और समाज के भीतर शांति के लिए आवश्यक है और इस आदर्श राज्य केवल Neoo-लोकतंत्र की एक प्रणाली में महसूस किया जा सकता है या न केवल की तरह है कि नए लोकतंत्र स्वास्थ्य, धन और गिनतीआरiesके लिए सुरक्षा बीमा कर सकते हैं o। यहies छद्म लोकतंत्र के स्थान पर नए प्रतिमान में दो भाग है ।
          </ContentText>
        <ContentImage src={politicalImages[0]} alt="Political debate" />
        
          <ContentText>
          शेन हिंद पार्टी ऑफ इंडिया सामाजिक न्याय के लिए दृढ़ता से लड़ेगी । लोकतांत्रिक मानदंडों और मूल्यों के प्रति कड़े संघर्ष और दृढ़ प्रतिबद्धता के बिना इस लक्ष्य को हासिल नहीं किया जा सकता । भारत के एकएफटीआर स्वतंत्रता लोगों ने संविधान बनाया जो भारत को संप्रभु, समाजवादी, धर्मनिरपेक्ष, लोकतांत्रिक गणराज्य के रूप में घोषित करता है, और लोगों के लिए नहीं, और पार्टी के लिए "भारत का संविधान संवैधानिक सर्वोच्चता प्रदान करता है न कि संसदीय वर्चस्व के रूप में, क्योंकि यह एक संविधान सभा द्वारा बनाया गया है और संविधान की प्रस्तावना में घोषणा के साथ अपने लोगों द्वारा अपनाया जाता है, संसद संविधान को ओवरराइड नहीं कर सकती । लोगों और समाज के भीतर शांति के लिए सद्भाव का सही माहौल जरूरी है और इस आदर्श राज्य को केवल नव-लोकतंत्र की व्यवस्था में ही महसूस किया जा सकता है ।
        </ContentText>
        

        <ContentImage src={politicalImages[1]} alt="Congress in session" />
        <ContentText>
          While often criticized, the two-party system has proven remarkably durable because it forces parties to accommodate a wide range of interests within each party's coalition, rather than relying on many smaller parties to form fragile alliances.
        </ContentText>
      </RightSection>
    </PageContainer>
          <WhyWeAreUniqueDocument/>
    <DrAwdheshProfile/>
    <WhyVeryUnique/>
    <ShaneHindForum/>
    <GallerySlider/>
    <JoinShaneHindForum/>
    <CTAComponent/>
    <NeoDemocracyConcept/>
   <HeadlinesSlider/> 
    <VoiceOfNation/>
    <CTAComponent/>
    
    </>
  );
};

// Styled components

const Container = styled.div``

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.section`
  width: 33.33%;
  padding: 2rem;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
height: auto;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

const RightSection = styled.section`
  width: 66.66%;
  padding: 2rem;
  background-color: #fafafa;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NoticeBoardTitle = styled.h2`
  color: #8b1700ff;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
  font-size:1.7rem;
  font-weight: 700;
  text-align:center;
`;

const NoticeBoard = styled.div`
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
`;

const NoticeItem = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #e8f4fc;
  border-left: 4px solid #3498db;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const ContentTitle = styled.h1`
  color: #ff6600;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size:3rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: #ff0000;
  margin: .5rem 0rem;
  font-size: 1.5rem;
  font-weight:600;
`;

const ContentText = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #1500ffff;
  font-weight:600;

`;

const ContentImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BenefitsList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  color: #1500ffff;
  font-weight:600;

`;

const ProcessFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
`;

const FlowItem = styled.div`
  padding: 8px 16px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-weight: 500;
  text-align: center;
  backdrop-filter: blur(10px);
`;

const FlowArrow = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 0 5px;
  color: white;
`;

export default HomeBody;
