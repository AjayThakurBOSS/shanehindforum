import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Gal1 from '../../images/img/gal1.jpeg'
import Gal2 from '../../images/img/gal2.jpeg'
import Gal3 from '../../images/img/gal3.jpeg'
import Gal4 from '../../images/img/gal5.jpeg'
import Gal5 from '../../images/img/gal6.jpeg'
import Gal6 from '../../images/img/gal7.jpeg'
import Gal7 from '../../images/img/gal8.jpeg'
import Gal8 from '../../images/img/gal9.jpeg'
import Gal9 from '../../images/img/gal10.jpeg'
import Gal10 from '../../images/img/gal11.jpeg'
import Gal11 from '../../images/img/gal12.jpeg'
import Gal12 from '../../images/img/gal13.jpeg'
import Gal13 from '../../images/img/gal14.jpeg'
import Gal14 from '../../images/img/gal15.jpeg'
import Gal15 from '../../images/img/gal16.jpeg'
import Gal16 from '../../images/img/gal17.jpeg'
import Gal18 from '../../images/img/gal19.jpeg'
import Gal19 from '../../images/img/gal20.jpeg'
import Des1 from '../../images/img/des1.jpeg'
import Des2 from '../../images/img/des2.jpeg'
import Des3 from '../../images/img/des3.jpeg'
import Des4 from '../../images/img/des4.jpeg'
import Des5 from '../../images/img/des5.jpeg'
import Des6 from '../../images/img/des6.jpeg'
import Des7 from '../../images/img/des8.jpeg'
import Des8 from '../../images/img/des9.jpeg'
import Des9 from '../../images/img/des10.webp'
import Des10 from '../../images/img/des18.jpeg'
import Des11 from '../../images/img/des19.jpeg'
import Des12 from '../../images/img/des20.jpeg'
import BG from '../../images/hg.png'


const GallerySlider = ({ items = [] }) => {
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
      image: Gal1
    },
    { 
      id: 2, 
      title: "", 
      content: "",
      image: Gal2
    },
    { 
      id: 3, 
      title: "", 
      content: "",
      image: Gal3
    },
    { 
      id: 4, 
      title: "", 
      content: "",
      image: Gal4
    },
    { 
      id: 5, 
      title: "", 
      content: "",
      image: Gal5
    },
    { 
      id: 6, 
      title: "", 
      content: "",
      image: Gal6
    },
    { 
      id: 7, 
      title: "", 
      content: "",
      image: Gal7
    },
    { 
      id: 8, 
      title: "", 
      content: "",
      image: Gal9
    },
    { 
      id: 9, 
      title: "", 
      content: "",
      image: Gal10
    },
    { 
      id: 10, 
      title: "", 
      content: "",
      image: Gal11
    },
    { 
      id: 11, 
      title: "", 
      content: "",
      image: Gal12
    },
    { 
      id: 12, 
      title: "", 
      content: "",
      image: Gal13
    },
    { 
      id: 13, 
      title: "", 
      content: "",
      image: Gal14
    },
    { 
      id: 14, 
      title: "", 
      content: "",
      image: Gal15
    },
    { 
      id: 15, 
      title: "", 
      content: "",
      image: Gal16
    },
    { 
      id: 16, 
      title: "", 
      content: "",
      image: Gal8
    },
    { 
      id: 17, 
      title: "", 
      content: "",
      image: Gal18
    },
    { 
      id: 18, 
      title: "", 
      content: "",
      image: Gal19
    },
     { 
      id: 19, 
      title: "", 
      content: "",
      image: Des1
    },
      { 
      id: 20, 
      title: "", 
      content: "",
      image: Des2
    },
      { 
      id: 21, 
      title: "", 
      content: "",
      image: Des3
    },
      { 
      id: 22, 
      title: "", 
      content: "",
      image: Des4
    },
      { 
      id: 23, 
      title: "", 
      content: "",
      image: Des5
    },
      { 
      id: 24, 
      title: "", 
      content: "",
      image: Des6
    },
      { 
      id: 25, 
      title: "", 
      content: "",
      image: Des7
    },
      { 
      id: 26, 
      title: "", 
      content: "",
      image: Des8
    },  { 
      id: 27, 
      title: "", 
      content: "",
      image: Des9
    },  { 
      id: 28, 
      title: "", 
      content: "",
      image: Des10
    },  { 
      id: 29, 
      title: "", 
      content: "",
      image: Des11
    }, { 
      id: 30, 
      title: "", 
      content: "",
      image: Des12
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
        <SliderHeader>Gallery </SliderHeader>
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
        <ECLogo></ECLogo>
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

export default GallerySlider;