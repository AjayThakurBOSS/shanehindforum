import React, { useState } from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';

const NeoDemocracyPage = () => {
  const [language, setLanguage] = useState('english');

  const content = {
    english: {
      title: "Neo-Democracy Concept",
      subtitle: "Concept \"Neo-Democracy\" in coherent to original Indian Constitution",
      content: `The above pious goal can be achieved in the light of original Indian Constitution which incorporates every element of noble democracy along with its noble directions to achieve scientific socialism. The architects of Indian constitution were so learned, liberal and intelligent as they incorporated best principles of democracy from the constitution of so many marvelous democratic nations i.e. Britain, USA, Canada, Oreland, Germany, Australia. They have prepared such a draft which can be useful to guide us towards the principle of equality, liberty, sovereignty, secularism, federalism, people's fundamental right and judicial independence along with socialism without use of any unjustified force. The original Indian constitution did not mention the concept of party politics. The Constitution also consisted of check and balance of power among the three arms that are - Llegislative, Eexecutive and Judicial systems. Nobody is supreme, yet the most important factor in democracy appears to be will of the people -which vest in the Parliament and Assembly throughout the country. So as per meaning of democracy , the will of people of India being represented in Parliament and state Assemblies which is really supreme but nevertheless it is not Almighty as it is to be checked and balanced by the principles of equality, liberty, secularism, social justice, federalism and peoples fundamental right , all of them being so important principles of democracy, to be interpreted, safeguarded and established by Hon'ble Supreme Court and High Courts so as to avoid encroachment and eroding of democracy.`,
      
      section1Title: "Original Constitutional Vision vs Current Reality",
      section1Content: `One of the most important things to be noted is that the architects of our constitution never endorsed so many political parties and didn't even mention the political parties of that time. In fact, Mahatma Gandhi was in favor to abolish Indian National Congress. The reason might have been as Indian National Congress before the independence was a strong movement representing the whole nation. It was not the political party. All the great personality in the history of independence movement of India had been its member and whole country represented this. But with advance of time in post –independent India, Indian National Congress - a glorious-movement liberating the country-became the party, enjoying power for many decades and slowly and slowly, the dirty game of politics for remaining in power all the time- polluted the sacred heart of such glorious movement- Indian National congress. It became weak and gradually, it lost the love, respect and confidence of people of India as people thought that it has departed from its original character of being close to people - at time it applied the political card of divide and rule formulae so the people dissatisfied, the result- it is striving for its existence. Contemporarily, other national and innumerable regional parties took the advantage and became in power but again also in them, the same character of political culture and dominance by leadership is carried forward and even few parties is having their Supremo/CEO as like a head of private limited company merely in the name of their vote banks and their sole existence is based on the same divide and rule formulae of caste, religion, state, language and other factors of diversity. So, the society and masses are dissatisfied and aspire some sort of change in polity which can present nobility, genuinely employ the instrument of Constitution and science in the politics. In fact, the great constitutional makers were foresighted in above respect and hence not mentioned the political parties in the original Indian Constitution Draft and left this job for the coming generations. They never assumed and thought that in future, time might come when the political parties would make mockery of democracy by playing the cards of caste, religion, ethnicity, language, or even using money and tainted people with mafia mindset and criminals etc- no matter how much it harmed and hampered the principle of socialism, secularism, justice, liberty and equality, the very principles of democracy and also the unity, cohesion and integrity of the society and country.`,

      highlightText: `Only few top persons, being at the helm of party- rules the parties. They say that they have democratic character but in fact but only party Supremo are all in all in deciding candidature of the person as candidates fighting for MLA OR MP. There is no real internal democratic process in the election of candidate from lower to up. And even if -every one of them show such process in existence in their party on paper but in reality, all is by supremo-order and selection. The candidates preferred or selected by party Supremo are imposed to their workers and thus to the people.`,

      section2Content: `The political parties claim that they are not subject to right to information law as they are not public authority. It is ridiculous that they expend billions of public money when they are in government but not ready at all for being included under RTI law and penal procedures, as they are supreme and they pass the laws in Parliament exempting their own scrutiny and transparency for their affairs. Moreover, most of the political parties choose possible winner candidates on the formulae of combination of equations based on caste, creed, religion, money and even mafia powers with so many possible factors for winning elections which could be unethical, immoral and against the unity and integrity of country. In fact, political parties and most modern politicians see the utility of above factors in political mobilization for their own good and power gain. The various dynamic and ever changing selfish formula of power game are being structured and applied. These formulas lack any substantial ideology and morality. At times this causes tension and violence in society and thereby resultant distortion of our unity in diversity. Actually, they never assume that their consequent results could be detrimental to the public cohesion and Constitution of nation, resulting into a real internal threat to the country. In addition to this, a real social and political worker of their own party in most of the constituencies cannot get a ticket in the electoral process and another person with above mentioned unethical multi- factorial considerations who has not worked even for a single day in his constituency gets the ticket, showing the great fallacies depicting present democracy as of the party, by the party, for the party in place of democracy being of the people, by the people and for the people.`,

      section3Title: "The Neo-Democracy Solution",
      section3Content1: `After considering the above, the need of the hour is that thinkers, philosophers, social and political scientists should think about the system of governance which utilizes the noble and wonderful qualities of Indian Constitution which promotes and direct the peaceful co-existence and non-supremo dominance and refrain politics of divide and rule of people among Indian people for the benefit of humanity. And of course that can be the future best form of government on this planet which can be called as Neo-democracy- a democracy incorporating good features of democracy i.e. civil liberties, equality before law, freedom of expression and speech, peaceful Assembly and freedom to practice respective religions without disturbing social order and mutual sentiments and Neo-Communism--scientific socialism along with careof weaker and poor segment of society. How can the above be achieved?`,

      section3Content2: `Our country is Sovereign, Socialistic, Secular, Federal Democratic Republic and this is the soul of our Constitution.
      To obtain the Sovereignty, our democracy must be by the people, of the people and for the people- in place of current scenario of democracy by the party. Here the flow of democracy should metamorphose from down to up in place of from up to down in present system. In present time, all political parties say and claim that they represent the people of the country but reality is something very different. Supremos took every decision, no inner real democracy is maintained even in any parties. All is based on the Supremo real interest for the getting anyhow power. Their all interest is how they becomes heads of government, be CMs or PM. So morally, ethically and even politically, the present multiparty concept should gradually be altered to two party system. In fact, original Constitution draft adopted by Constituent Assembly does not mention the multiparty system. So, this multi-parties system which has emerged in the present form in last 70 years of post-independence era is- a Pseudo-democracy. It is anti-Constitutional and against the principle of Democracy itself.`,

      currentSystemTitle: "Current FPTP System",
      currentSystemContent1: `In the present system, First Pass The Post (FPTP System) is applied in our country. In this system, the first candidates is elected even though he never gets (majority) more than 50% of polled vote. Rather he gets 30-40% of polled vote or 20-25 of the all vote.`,
      currentSystemContent2: `In Present System (FPTP), only minority mandate goes to parliament. Therefore- how it can be said as Democracy which is the soul and base of our noble Constitution.`,

      proposedSystemTitle: "Proposed TPTP System",
      proposedSystemContent: `So- in place of FPTP system, we propose Two Pass The Post system (TPTP). Here first and second ranker is elected --first repreent Ruling party (पक्ष Paksh-) and second (Pratipaksh प्रतिपक्ष -) Balancing party. So, we should replace FPTP (first pass the post) to TPTP (two pass the post) system. The total of both will be more than 50 percent-will fulfil criteria of democracy.`,

      actionTitle: "The Neo-Democracy Model",
      actionContent: `"So- for applying this model to uplift and make country very strong- we- the people, the people of India -should elect two candidates (TPTP) in place of one (FPTP)- that is- first and second ranker in each constituency and send them to Parliament/State Assemblies. First one-winner- should represent ruling party and second one -runner- the opposition party". We understand that India consist of Parliamentary constituency/ state Assemblies which is mini-India as ealiar described. Thus- people in each constituency have right to have ruling and opposition – as PAKCHHA पक्ष and PRATI PAKCHHA प्रतिपक्ष- same like Parliament or State Assemblies. So, people- should elect winner and runner ups, representing the majority -more than 50% of polled votes- as ruling winner up PAKCHHA and 2nd ranker as runner ups PRATI PAKCHHA party respectively- at national and state level.`,

      finalContent1: `Thus, from the whole nation -all winner ups should collectively represent the PAKCHHA पक्ष and the runner ups represent the PRATI -PAKCHHA प्रतिपक्ष in Parliament. Ruling and opposition-- party members irrespective of original party line- from all over the India should elect their leader as Prime minister and leader of opposition respectively under the strict supervision and guidance of present Constitutional body – Election commission of India UNDER THE GUIDELINES AND SUGGESTION OF SUPREME COURT OF INDIA. Prime minister – thus elected should choose councils of ministers on merit and on Constitutional provisions of social, religious, regional balances and their performance in their life along with reservation norms -enshrined in Constitution of India to avoid social misunderstanding and conflict.`,

      finalContent2: `In this System, although all parties can fight in election process but after winning or losing, they will be regarded as one among two-either in Ruling First ranker PAKS-पक्ष H -party or if runner प्रतिपक्ष ,will go to opposing party irrespective of their conventional original party line. So, this system will be rejecting the concept of present multiparty politics where parties represent and work more for party in place common people who not voted them and blackmail each other. The present existing System does not represent majority of the people and blackmailing business is non-ending process in power game, many times against national interest and enjoy many concessions through corruptions in power game. At the time of election, the whole national scene is overwhelmed by blame game of political parties polluting National Spirit and dividing the people of India.`
    },
    hindi: {
      title: "नव-लोकतंत्र अवधारणा",
      subtitle: "मूल भारतीय संविधान के अनुरूप \"नव-लोकतंत्र\" अवधारणा",
      content: `उपरोक्त पवित्र लक्ष्य मूल भारतीय संविधान के प्रकाश में प्राप्त किया जा सकता है जिसमें वैज्ञानिक समाजवाद को प्राप्त करने के लिए उसके उत्कृष्ट निर्देशों के साथ-साथ उत्कृष्ट लोकतंत्र के प्रत्येक तत्व को शामिल किया गया है। भारतीय संविधान के वास्तुकार इतने विद्वान, उदार और बुद्धिमान थे कि उन्होंने ब्रिटेन, यूएसए, कनाडा, आयरलैंड, जर्मनी, ऑस्ट्रेलिया जैसे कई अद्भुत लोकतांत्रिक राष्ट्रों के संविधान से लोकतंत्र के सर्वोत्तम सिद्धांतों को शामिल किया। उन्होंने ऐसा मसौदा तैयार किया है जो बिना किसी अनुचित बल के समाजवाद के साथ-साथ समानता, स्वतंत्रता, संप्रभुता, धर्मनिरपेक्षता, संघवाद, लोगों के मौलिक अधिकार और न्यायिक स्वतंत्रता के सिद्धांत की ओर मार्गदर्शन करने में उपयोगी हो सकता है। मूल भारतीय संविधान में पार्टी राजनीति की अवधारणा का उल्लेख नहीं किया गया था। संविधान में तीन अंगों - विधायी, कार्यपालिका और न्यायिक प्रणालियों के बीच शक्ति के नियंत्रण और संतुलन का भी प्रावधान था। कोई भी सर्वोच्च नहीं है, फिर भी लोकतंत्र में सबसे महत्वपूर्ण कारक लोगों की इच्छा प्रतीत होती है - जो पूरे देश में संसद और विधानसभा में निहित है। इसलिए लोकतंत्र के अर्थ के अनुसार, भारत के लोगों की इच्छा संसद और राज्य विधानसभाओं में प्रतिनिधित्व करती है जो वास्तव में सर्वोच्च है लेकिन फिर भी यह सर्वशक्तिमान नहीं है क्योंकि इसे समानता, स्वतंत्रता, धर्मनिरपेक्षता, सामाजिक न्याय, संघवाद और लोगों के मौलिक अधिकार के सिद्धांतों द्वारा जांचा और संतुलित किया जाना है, जिनमें से सभी लोकतंत्र के इतने महत्वपूर्ण सिद्धांत हैं, जिनकी व्याख्या, सुरक्षा और स्थापना माननीय सर्वोच्च न्यायालय और उच्च न्यायालयों द्वारा लोकतंत्र के अतिक्रमण और क्षरण से बचने के लिए की जानी चाहिए।`,
      
      section1Title: "मूल संवैधानिक दृष्टि बनाम वर्तमान वास्तविकता",
      section1Content: `सबसे महत्वपूर्ण बात यह है कि हमारे संविधान के वास्तुकारों ने कभी भी इतनी सारी राजनीतिक पार्टियों का समर्थन नहीं किया और उस समय की राजनीतिक पार्टियों का उल्लेख तक नहीं किया। वास्तव में, महात्मा गांधी भारतीय राष्ट्रीय कांग्रेस को समाप्त करने के पक्ष में थे। इसका कारण यह हो सकता है कि स्वतंत्रता से पहले भारतीय राष्ट्रीय कांग्रेस पूरे राष्ट्र का प्रतिनिधित्व करने वाला एक मजबूत आंदोलन था। यह राजनीतिक दल नहीं था। भारत के स्वतंत्रता आंदोलन के इतिहास के सभी महान व्यक्तित्व इसके सदस्य रहे हैं और पूरा देश इसका प्रतिनिधित्व करता था। लेकिन समय बीतने के साथ स्वतंत्रता के बाद के भारत में, भारतीय राष्ट्रीय कांग्रेस - देश को मुक्त कराने वाला एक गौरवशाली आंदोलन - पार्टी बन गया, कई दशकों तक सत्ता का आनंद लिया और धीरे-धीरे, हर समय सत्ता में बने रहने की राजनीति का गंदा खेल ने ऐसे गौरवशाली आंदोलन के पवित्र हृदय को प्रदूषित कर दिया। यह कमजोर हो गया और धीरे-धीरे, इसने भारत के लोगों का प्यार, सम्मान और विश्वास खो दिया क्योंकि लोगों ने सोचा कि यह लोगों के करीब होने के अपने मूल चरित्र से दूर हो गया है - कभी-कभी इसने फूट डालो और राज करो के फॉर्मूले की राजनीतिक चाल चली जिससे लोग असंतुष्ट हुए, परिणाम- यह अपने अस्तित्व के लिए संघर्ष कर रहा है। समकालीन रूप से, अन्य राष्ट्रीय और असंख्य क्षेत्रीय दलों ने लाभ उठाया और सत्ता में आ गए लेकिन फिर से उनमें भी, नेतृत्व द्वारा राजनीतिक संस्कृति और वर्चस्व का वही चरित्र आगे बढ़ाया गया और यहां तक कि कुछ पार्टियों के पास उनके वोट बैंक के नाम पर एक निजी लिमिटेड कंपनी के प्रमुख की तरह उनके सुप्रीमो/सीईओ हैं और उनका एकमात्र अस्तित्व जाति, धर्म, राज्य, भाषा और विविधता के अन्य कारकों के उसी फूट डालो और राज करो के फॉर्मूले पर आधारित है। इसलिए, समाज और जनता असंतुष्ट हैं और राजनीति में किसी प्रकार के परिवर्तन की आकांक्षा रखते हैं जो नobility प्रस्तुत कर सके, वास्तव में राजनीति में संविधान और विज्ञान के साधनों को नियोजित कर सके। वास्तव में, महान संवैधानिक निर्माता उपरोक्त संबंध में दूरदर्शी थे और इसलिए मूल भारतीय संविधान मसौदे में राजनीतिक दलों का उल्लेख नहीं किया और इस काम को आने वाली पीढ़ियों के लिए छोड़ दिया। उन्होंने कभी नहीं सोचा और सोचा था कि भविष्य में, ऐसा समय आ सकता है जब राजनीतिक दल जाति, धर्म, जातीयता, भाषा का कार्ड खेलकर या यहां तक कि पैसे और माफिया मानसिकता और अपराधियों वाले दागी लोगों का उपयोग करके लोकतंत्र का मजाक उड़ाएंगे - इससे कोई फर्क नहीं पड़ता कि इसने समाजवाद, धर्मनिरपेक्षता, न्याय, स्वतंत्रता और समानता के सिद्धांत को कितना नुकसान पहुंचाया और बाधित किया, लोकतंत्र के मूल सिद्धांत और समाज और देश की एकता, सामंजस्य और अखंडता।`,

      highlightText: `केवल कुछ शीर्ष व्यक्ति, पार्टी की कमान में होते हैं, पार्टियों पर शासन करते हैं। वे कहते हैं कि उनमें लोकतांत्रिक चरित्र है लेकिन वास्तव में केवल पार्टी सुप्रीमो एमएलए या एमपी के लिए लड़ने वाले उम्मीदवारों के रूप में व्यक्ति की उम्मीदवारी तय करने में सर्वशक्तिमान हैं। नीचे से ऊपर तक उम्मीदवार के चुनाव में कोई वास्तविक आंतरिक लोकतांत्रिक प्रक्रिया नहीं है। और भले ही - उनमें से हर एक कागज पर अपनी पार्टी में ऐसी प्रक्रिया का अस्तित्व दिखाता है लेकिन वास्तव में, सब कुछ सुप्रीमो-आदेश और चयन द्वारा है। पार्टी सुप्रीमो द्वारा पसंद किए गए या चुने गए उम्मीदवारों को उनके कार्यकर्ताओं और इस प्रकार लोगों पर थोपा जाता है।`,

      section2Content: `राजनीतिक दल दावा करते हैं कि वे सूचना के अधिकार कानून के अधीन नहीं हैं क्योंकि वे सार्वजनिक प्राधिकरण नहीं हैं। यह हास्यास्पद है कि वे सार्वजनिक धन के अरबों खर्च करते हैं जब वे सरकार में होते हैं लेकिन आरटीआई कानून और दंडात्मक प्रक्रियाओं के तहत शामिल होने के लिए बिल्कुल तैयार नहीं हैं, क्योंकि वे सर्वोच्च हैं और वे संसद में कानून पारित करते हैं जो अपने मामलों के लिए अपनी जांच और पारदर्शिता से छूट देते हैं। इसके अलावा, अधिकांश राजनीतिक दल जाति, पंथ, धर्म, पैसे और यहां तक कि माफिया शक्तियों के समीकरणों के संयोजन के फॉर्मूले पर संभावित विजेता उम्मीदवारों को चुनते हैं, जिनमें चुनाव जीतने के लिए कई संभावित कारक हो सकते हैं जो अनैतिक, अनैतिक और देश की एकता और अखंडता के खिलाफ हो सकते हैं। वास्तव में, राजनीतिक दल और अधिकांश आधुनिक राजनेता अपने स्वयं के हित और शक्ति लाभ के लिए राजनीतिक जुटान में उपरोक्त कारकों की उपयोगिता देखते हैं। सत्ता के खेल के विभिन्न गतिशील और ever changing स्वार्थी फॉर्मूले संरचित और लागू किए जा रहे हैं। इन फॉर्मूलों में कोई substantial विचारधारा और नैतिकता का अभाव है। कई बार यह समाज में तनाव और हिंसा का कारण बनता है और इसके परिणामस्वरूप विविधता में हमारी एकता का विरूपण होता है। वास्तव में, वे कभी नहीं मानते कि उनके परिणामस्वरूप जनता के सामंजस्य और राष्ट्र के संविधान के लिए हानिकारक हो सकता है, जिसके परिणामस्वरूप देश को एक वास्तविक आंतरिक खतरा हो सकता है। इसके अलावा, अधिकांश निर्वाचन क्षेत्रों में उनकी अपनी पार्टी का एक वास्तविक सामाजिक और राजनीतिक कार्यकर्ता चुनावी प्रक्रिया में टिकट नहीं प्राप्त कर सकता है और उपरोक्त अनैतिक बहु-कारक विचारों वाला दूसरा व्यक्ति जिसने अपने निर्वाचन क्षेत्र में एक दिन भी काम नहीं किया है, टिकट प्राप्त कर लेता है, जो वर्तमान लोकतंत्र को दल का, दल के द्वारा, दल के लिए के रूप में दर्शाता है, जबकि लोकतंत्र जनता का, जनता के द्वारा, जनता के लिए होना चाहिए।`,

      section3Title: "नव-लोकतंत्र समाधान",
      section3Content1: `उपरोक्त पर विचार करने के बाद, समय की मांग है कि विचारक, दार्शनिक, सामाजिक और राजनीतिक वैज्ञानिक शासन की उस प्रणाली के बारे में सोचें जो भारतीय संविधान के उत्कृष्ट और अद्भुत गुणों का उपयोग करती है जो शांतिपूर्ण सह-अस्तित्व और गैर-सुप्रीमो वर्चस्व को बढ़ावा देती है और निर्देशित करती है और मानवता के लाभ के लिए भारतीय लोगों के बीच लोगों के फूट डालो और राज करो की राजनीति से परहेज करती है। और निश्चित रूप से वह इस ग्रह पर सरकार का भविष्य का सर्वोत्तम रूप हो सकता है जिसे नव-लोकतंत्र कहा जा सकता है- एक लोकतंत्र जिसमें लोकतंत्र के अच्छे features शामिल हैं यानी नागरिक स्वतंत्रता, कानून के समक्ष समानता, अभिव्यक्ति और भाषण की स्वतंत्रता, शांतिपूर्ण सभा और सामाजिक व्यवस्था और पारस्परिक भावनाओं को परेशान किए बिना संबंधित धर्मों का अभ्यास करने की स्वतंत्रता और नव-साम्यवाद - वैज्ञानिक समाजवाद के साथ-साथ समाज के कमजोर और गरीब वर्ग की देखभाल। उपरोक्त कैसे प्राप्त किया जा सकता है?`,

      section3Content2: `हमारा देश संप्रभु, समाजवादी, धर्मनिरपेक्ष, संघीय लोकतांत्रिक गणराज्य है और यह हमारे संविधान की आत्मा है।
      संप्रभुता प्राप्त करने के लिए, हमारा लोकतंत्र जनता का, जनता के द्वारा और जनता के लिए होना चाहिए- वर्तमान परिदृश्य में दल के द्वारा लोकतंत्र के स्थान पर। यहां लोकतंत्र का प्रवाह वर्तमान प्रणाली में ऊपर से नीचे के स्थान पर नीचे से ऊपर की ओर रूपांतरित होना चाहिए। वर्तमान समय में, सभी राजनीतिक दल कहते हैं और दावा करते हैं कि वे देश के लोगों का प्रतिनिधित्व करते हैं लेकिन वास्तविकता कुछ बहुत अलग है। सुप्रीमो ने हर फैसला लिया, किसी भी पार्टी में आंतरिक वास्तविक लोकतंत्र बनाए नहीं रखा गया है। सब कुछ सुप्रीमो की वास्तविक रुचि पर आधारित है कि किसी भी तरह सत्ता प्राप्त की जाए। उनकी सारी रुचि यह है कि वे सरकार के प्रमुख कैसे बनें, मुख्यमंत्री या प्रधानमंत्री बनें। इसलिए नैतिक रूप से, नैतिक रूप से और यहां तक कि राजनीतिक रूप से, वर्तमान बहुदलीय अवधारणा को धीरे-धीरे दो दलीय प्रणाली में बदल दिया जाना चाहिए। वास्तव में, संविधान सभा द्वारा अपनाए गए मूल संविधान मसौदे में बहुदलीय प्रणाली का उल्लेख नहीं है। इसलिए, यह बहुदलीय प्रणाली जो स्वतंत्रता के बाद के 70 वर्षों में वर्तमान रूप में उभरी है- एक छद्म लोकतंत्र है। यह संवैधानिक विरोधी और लोकतंत्र के सिद्धांत के खिलाफ है।`,

      currentSystemTitle: "वर्तमान FPTP प्रणाली",
      currentSystemContent1: `वर्तमान प्रणाली में, हमारे देश में फर्स्ट पास द पोस्ट (FPTP सिस्टम) लागू है। इस प्रणाली में, पहला उम्मीदवार चुना जाता है भले ही उसे कभी भी (बहुमत) 50% से अधिक मत नहीं मिलता है। बल्कि उसे 30-40% मतदान वोट या सभी वोट का 20-25 मिलता है।`,
      currentSystemContent2: `वर्तमान प्रणाली (FPTP) में, केवल अल्पसंख्यक जनादेश संसद में जाता है। इसलिए- इसे लोकतंत्र कैसे कहा जा सकता है जो हमारे उत्कृष्ट संविधान की आत्मा और आधार है।`,

      proposedSystemTitle: "प्रस्तावित TPTP प्रणाली",
      proposedSystemContent: `इसलिए- FPTP सिस्टम के स्थान पर, हम Two Pass The Post system (TPTP) का प्रस्ताव करते हैं। यहां पहले और दूसरे रैंक वाले को चुना जाता है -- पहला शासक दल (पक्ष) का प्रतिनिधित्व करता है और दूसरा (प्रतिपक्ष) संतुलन दल। इसलिए, हमें FPTP (फर्स्ट पास द पोस्ट) को TPTP (टू पास द पोस्ट) सिस्टम से बदलना चाहिए। दोनों का कुल 50 प्रतिशत से अधिक होगा- लोकतंत्र के मानदंडों को पूरा करेगा।`,

      actionTitle: "नव-लोकतंत्र मॉडल",
      actionContent: `"इसलिए- इस मॉडल को लागू करने के लिए देश को उन्नत और बहुत मजबूत बनाने के लिए- हम- जनता, भारत के लोग - दो उम्मीदवार (TPTP) को एक (FPTP) के स्थान पर चुनें- यानी प्रत्येक निर्वाचन क्षेत्र में पहले और दूसरे रैंक वाले को और उन्हें संसद/राज्य विधानसभाओं में भेजें। पहला-विजेता- शासक दल का प्रतिनिधित्व करेगा और दूसरा -रनर- विपक्षी दल"। हम समझते हैं कि भारत में संसदीय निर्वाचन क्षेत्र/राज्य विधानसभाएं हैं जो मिनी-इंडिया हैं जैसा कि पहले बताया गया है। इस प्रकार- प्रत्येक निर्वाचन क्षेत्र के लोगों को शासक और विपक्ष - पक्ष और प्रतिपक्ष - का अधिकार है- ठीक संसद या राज्य विधानसभाओं की तरह। इसलिए, लोगों को विजेता और रनर अप को चुनना चाहिए, जो बहुमत का प्रतिनिधित्व करते हैं - 50% से अधिक मतदान वोट- क्रमशः शासक विजेता पक्ष और दूसरे रैंक वाले रनर अप प्रतिपक्ष दल के रूप में- राष्ट्रीय और राज्य स्तर पर।`,

      finalContent1: `इस प्रकार, पूरे राष्ट्र से - सभी विजेता सामूहिक रूप से संसद में पक्ष का प्रतिनिधित्व करेंगे और रनर अप प्रति-पक्ष का प्रतिनिधित्व करेंगे। शासक और विपक्ष- दल के सदस्य अपनी मूल पार्टी लाइन की परवाह किए बिना- पूरे भारत से क्रमशः प्रधानमंत्री और विपक्ष के नेता के रूप में अपने नेता का चुनाव करेंगे वर्तमान संवैधानिक निकाय - भारत के चुनाव आयोग की सख्त निगरानी और मार्गदर्शन में भारत के सर्वोच्च न्यायालय के दिशानिर्देश और सुझाव के तहत। प्रधानमंत्री - इस प्रकार चुने गए- योग्यता और सामाजिक, धार्मिक, क्षेत्रीय संतुलन और उनके जीवन में उनके प्रदर्शन के साथ-साथ आरक्षण मानदंडों पर मंत्रिपरिषद का चयन करेंगे - भारत के संविधान में निहित सामाजिक गलतफहमी और संघर्ष से बचने के लिए।`,

      finalContent2: `इस प्रणाली में, हालांकि सभी दल चुनाव प्रक्रिया में लड़ सकते हैं लेकिन जीतने या हारने के बाद, उन्हें दो में से एक माना जाएगा- या तो शासक पहले रैंक वाले पक्ष-पार्टी में या यदि रनर प्रतिपक्ष, तो उनकी पारंपरिक मूल पार्टी लाइन की परवाह किए बिना विपक्षी दल में चले जाएंगे। इसलिए, यह प्रणाली वर्तमान बहुदलीय राजनीति की अवधारणा को अस्वीकार कर देगी जहां दल आम लोगों के स्थान पर पार्टी के लिए अधिक प्रतिनिधित्व और काम करते हैं जिन्होंने उन्हें वोट नहीं दिया और एक-दूसरे को ब्लैकमेल करते हैं। वर्तमान मौजूदा प्रणाली अधिकांश लोगों का प्रतिनिधित्व नहीं करती है और ब्लैकमेलिंग का व्यवसाय सत्ता के खेल में non-ending प्रक्रिया है, कई बार राष्ट्रीय हित के खिलाफ और सत्ता के खेल में भ्रष्टाचार के माध्यम से कई रियायतों का आनंद लेती है। चुनाव के समय, पूरा राष्ट्रीय परिदृश्य राजनीतिक दलों के दोषारोपण के खेल से अभिभूत हो जाता है जो राष्ट्रीय भावना को प्रदूषित करता है और भारत के लोगों को विभाजित करता है।`
    }
  };

  const currentContent = content[language];

  return (
    <HomePage>
      <LanguageSwitcher>
        <LanguageButton 
          active={language === 'hindi'} 
          onClick={() => setLanguage('hindi')}
        >
          हिंदी
        </LanguageButton>
        <LanguageButton 
          active={language === 'english'} 
          onClick={() => setLanguage('english')}
        >
          English
        </LanguageButton>
      </LanguageSwitcher>
      
      <ConceptContainer>
        <Header>
          <Title>{currentContent.title}</Title>
          <Subtitle>{currentContent.subtitle}</Subtitle>
        </Header>

        <ContentSection>
          <Paragraph>
            {currentContent.content}
          </Paragraph>

          <SectionTitle>{currentContent.section1Title}</SectionTitle>
          <Paragraph>
            {currentContent.section1Content}
          </Paragraph>

          <HighlightBox>
            <HighlightText>
              {currentContent.highlightText}
            </HighlightText>
          </HighlightBox>

          <Paragraph>
            {currentContent.section2Content}
          </Paragraph>

          <SectionTitle>{currentContent.section3Title}</SectionTitle>
          <Paragraph>
            {currentContent.section3Content1}
          </Paragraph>

          <Paragraph>
            {currentContent.section3Content2}
          </Paragraph>

          <TwoColumnSection>
            <Column>
              <ColumnTitle>{currentContent.currentSystemTitle}</ColumnTitle>
              <Paragraph>
                {currentContent.currentSystemContent1}
              </Paragraph>
              <Paragraph>
                {currentContent.currentSystemContent2}
              </Paragraph>
            </Column>
            <Column>
              <ColumnTitle>{currentContent.proposedSystemTitle}</ColumnTitle>
              <Paragraph>
                {currentContent.proposedSystemContent}
              </Paragraph>
            </Column>
          </TwoColumnSection>

          <CallToAction>
            <ActionTitle>{currentContent.actionTitle}</ActionTitle>
            <Paragraph>
              {currentContent.actionContent}
            </Paragraph>
          </CallToAction>

          <FinalThought>
            <Paragraph>
              {currentContent.finalContent1}
            </Paragraph>
            <Paragraph>
              {currentContent.finalContent2}
            </Paragraph>
          </FinalThought>
        </ContentSection>
      </ConceptContainer>
    </HomePage>
  );
};

// Styled Components
const LanguageSwitcher = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const LanguageButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid #4a6fa5;
  background-color: ${props => props.active ? '#4a6fa5' : 'white'};
  color: ${props => props.active ? 'white' : '#4a6fa5'};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a6fa5;
    color: white;
  }
`;

const ConceptContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
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
  font-weight: 600;
  line-height: 1.2;
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

const FinalThought = styled.div`
  font-size: 1.1rem;
  background-color: #f0f7ff;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid #4a6fa5;
`;

export default NeoDemocracyPage;