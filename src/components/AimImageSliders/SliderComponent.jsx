import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const SliderComponent = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Duplicate images to create infinite loop effect
  const duplicatedImages = [...images, ...images, ...images];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Handle manual navigation
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
  };

  // Calculate visible images
  const getVisibleImages = () => {
    const startIndex = currentIndex;
    return duplicatedImages.slice(startIndex, startIndex + 3);
  };

  const handleImageClick = (image) => {
    setZoomImage(image);
  };

  const closeZoom = () => {
    setZoomImage(null);
  };

  return (
    <SliderContainer>
      <SliderWindow ref={sliderRef}>
        <SliderTrack style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {duplicatedImages.map((image, index) => (
            <Slide key={`${image}-${index}`}>
              <Image 
                src={image} 
                alt={`Slide ${index}`} 
                onClick={() => handleImageClick(image)}
              />
            </Slide>
          ))}
        </SliderTrack>
      </SliderWindow>

      <Navigation>
        <NavButton onClick={goToPrev}>&lt;</NavButton>
        <NavButton onClick={goToNext}>&gt;</NavButton>
      </Navigation>

      {zoomImage && (
        <ZoomOverlay onClick={closeZoom}>
          <ZoomImage src={zoomImage} />
        </ZoomOverlay>
      )}
    </SliderContainer>
  );
};

// Styled components
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
`;

const SliderWindow = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 300%; // 3 images at a time
`;

const Slide = styled.div`
  flex: 0 0 33.333%;
  padding: 0 10px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const NavButton = styled.button`
  padding: 10px 20px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.8); }
  to { transform: scale(1); }
`;

const ZoomOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease;
`;

const ZoomImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  animation: ${zoomIn} 0.3s ease;
  border-radius: 8px;
`;

export default SliderComponent;