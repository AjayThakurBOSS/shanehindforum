import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import News1 from '../../images/img/news1.jpeg'
import News2 from '../../images/img/news2.jpeg'
import News3 from '../../images/img/news3.jpeg'
import News4 from '../../images/img/news1.jpeg'
import News5 from '../../images/img/news2.jpeg'
import News6 from '../../images/img/news3.jpeg'
import News7 from '../../images/img/news1.jpeg'
import News9 from '../../images/img/news3.jpeg'
import News11 from '../../images/img/news1.jpeg'
import News12 from '../../images/img/news2.jpeg'
import BG from '../../images/hh.png'


const HeadlinesSlider = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);


  // Default items with images
  const defaultItems = [
    { 
      id: 1, 
      title: "", 
      content: "",
      image: News1
    },
    { 
      id: 2, 
      title: "", 
      content: "",
      image: News2
    },
    { 
      id: 3, 
      title: "", 
      content: "",
      image: News3
    },
    { 
      id: 4, 
      title: "", 
      content: "",
      image: News4
    },
    { 
      id: 5, 
      title: "", 
      content: "",
      image: News5
    },
    { 
      id: 6, 
      title: "", 
      content: "",
      image: News6
    },
    { 
      id: 7, 
      title: "", 
      content: "",
      image: News7
    },
    { 
      id: 8, 
      title: "", 
      content: "",
      image: News9
    },
    { 
      id: 9, 
      title: "", 
      content: "",
      image: News11
    },
    { 
      id: 10, 
      title: "", 
      content: "",
      image: News12
    },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;
  const duplicatedItems = [...displayItems, ...displayItems, ...displayItems];

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const scroll = () => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        if (nextIndex >= displayItems.length) {
          // Reset to 0 without animation
          setTimeout(() => {
            setCurrentIndex(0);
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'none';
              sliderRef.current.style.transform = `translateX(0)`;
            }
          }, 0);
          return 0;
        }
        return nextIndex;
      });
    };

    animationRef.current = setInterval(scroll, 3000);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [displayItems.length, isPaused]);

  // Handle image click for zoom
  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);
    setIsPaused(true);
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setIsPaused(false);
  };

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <SliderContainer>
        <SliderHeader>HEADLINES HIGHLIGHTS</SliderHeader>
        <SliderWrapper
          ref={sliderRef}
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            transition: isPaused ? 'none' : 'transform 0.5s ease-in-out',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedItems.map((item, index) => (
            <Slide key={`${item.id}-${index}`}>
              <SlideImage 
                src={item.image} 
                alt={item.title}
                onClick={() => handleImageClick(item.image)}
              />
              <SlideContentWrapper>
                <SlideTitle>{item.title}</SlideTitle>
                <SlideContent>{item.content}</SlideContent>
              </SlideContentWrapper>
            </Slide>
          ))}
        </SliderWrapper>
        <ECLogo>EC</ECLogo>
      </SliderContainer>

      {zoomedImage && (
        <ImageZoomOverlay onClick={closeZoom}>
          <ZoomedImage src={zoomedImage} alt="Zoomed content" />
          <CloseButton onClick={closeZoom}>×</CloseButton>
        </ImageZoomOverlay>
      )}
    </>
  );
};

// Styled components
const SliderContainer = styled.div`
background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const SliderHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 calc(100% / 3);
  padding: 15px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
  cursor: zoom-in;

  &:hover {
    transform: scale(1.03);
  }
`;

const SlideContentWrapper = styled.div`
  padding: 0 8px;
`;

const SlideTitle = styled.h3`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SlideContent = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0;
  line-height: 1.4;
`;

const ECLogo = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const ImageZoomOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: zoom-out;
`;

const ZoomedImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 1001;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export default HeadlinesSlider;