import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import styled, { keyframes } from 'styled-components';
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/slider4.jpeg'

import { Link } from 'react-router-dom';

const slides = [
    {
      title: "A Visionary Leader",
      subtitle: "A two-party system ensures checks and balances, preventing extreme policies from either side.",
      bgColor: "#1a1a2e",
      image: Img1
    },
    {
      title: "A Call for the Nation",
      subtitle: "A two-party system ensures checks and balances, preventing extreme policies from either side.",
      bgColor: "#1a1a2e",
      image: Img2
    },
    {
      title: "Balance Through Choice",
      subtitle: "A two-party system ensures checks and balances, preventing extreme policies from either side.",
      bgColor: "#1a1a2e",
      image: Img3
    },
    {
      title: "Clear Accountability",
      subtitle: "With two major parties, voters know exactly who to hold responsible for government actions.",
      bgColor: "#16213e",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Stability in Governance",
      subtitle: "Two-party systems provide consistent leadership transitions without political chaos.",
      bgColor: "#0f3460",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Moderate Policies Win",
      subtitle: "Centrist approaches emerge when parties must appeal to the broadest electorate.",
      bgColor: "#533483",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Join the Movement",
      subtitle: "Help us promote a balanced, effective two-party system for a stronger democracy.",
      bgColor: "#1f4068",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

// Helper function to dynamically select the animation based on slide index
const getAnimationClass = (index) => {
  // Use Tailwind's arbitrary value syntax for custom animations
  switch (index % slides.length) {
    case 0: return "animate-fade-in";
    // Slide 1: Slice from Top (Vertical Wipe Down)
    case 1: return "animate-[sliceFromTop_1.2s_cubic-bezier(0.25,1,0.5,1)_forwards]";
    // Slide 2: Zoom and Bounce In
    case 2: return "animate-[zoomInScale_1.5s_cubic-bezier(0.68,-0.55,0.265,1.55)_forwards]";
    // Slide 3: Perspective Flip In
    case 3: return "animate-[perspectiveFlipIn_1.2s_ease-out_forwards]";
    // Slide 4: Wipe from Left (Horizontal Wipe Right)
    case 4: return "animate-[wipeInLeft_1.2s_ease-out_forwards]";
    // Slide 5: Blur and Focus In
    case 5: return "animate-[blurIn_1.5s_ease-out_forwards]";
    // Slide 6: Slight Rotate and In
    case 6: return "animate-[rotateIn_1.2s_cubic-bezier(.5,-.5,.5,1.5)_forwards]";
    default: return "animate-fade-in";
  }
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className=" bg-gray-900 font-['Inter'] flex justify-center items-center">
      
      {/* CSS Keyframes and Custom Styles */}
      <style>
        {`
        /* 1. Slide 1 (Slice from Top) 
          Uses clip-path to reveal from 100% top to 0% top.
        */
        @keyframes sliceFromTop {
          from { clip-path: inset(100% 0 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }

        /* 2. Slide 2 (Zoom In Scale) 
          Scales up from 80% with an exaggerated bounce effect (cubic-bezier).
        */
        @keyframes zoomInScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        /* 3. Slide 3 (Perspective Flip) 
          Rotates around the Y-axis from 90 degrees, originating from the left.
        */
        @keyframes perspectiveFlipIn {
          from { transform: rotateY(90deg) scale(0.9); opacity: 0; transform-origin: left; }
          to { transform: rotateY(0deg) scale(1); opacity: 1; transform-origin: left; }
        }

        /* 4. Slide 4 (Wipe from Left) 
          Uses clip-path to reveal from 100% left to 0% left.
        */
        @keyframes wipeInLeft {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }

        /* 5. Slide 5 (Blur In) 
          Fades in while reducing blur.
        */
        @keyframes blurIn {
          from { filter: blur(10px); opacity: 0.5; }
          to { filter: blur(0px); opacity: 1; }
        }
        
        /* 6. Slide 6 (Rotate In) 
          Slight rotation with an overshoot effect (cubic-bezier).
        */
        @keyframes rotateIn {
          from { transform: rotate(5deg) scale(0.95); opacity: 0; }
          to { transform: rotate(0deg) scale(1); opacity: 1; }
        }

        /* 0. Slide 0 (Simple Fade) - Tailwind Default
        */
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* Custom Button Pulse Animation */
        @keyframes pulseEffect {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        .btn-pulse {
            animation: pulseEffect 2s infinite;
        }

        /* Base Slide Styling (for inactive slides) */
        .slide-inactive {
            opacity: 0;
            z-index: 1;
            pointer-events: none;
        }

        /* Apply a slight delay to content to emphasize the slide transition */
        .slide-content > * {
            animation-delay: 0.5s;
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .slide-content {
            padding-left: 0 !important;
            text-align: center;
            align-items: center !important;
            justify-content: flex-end !important;
            padding-bottom: 2rem;
          }
          
          .slide-content h1 {
            font-size: 1.75rem !important;
            margin-bottom: 0.75rem !important;
            text-align: center;
          }
          
          .slide-content p {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
            text-align: center;
          }
          
          .mobile-slider-container {
            height: 80vh !important;
            min-height: 500px;
            max-height: 600px;
          }

          .slide-bg-mobile {
            background-size: cover !important;
            background-position: center center !important;
          }
        }

        /* Fix for very small screens */
        @media (max-width: 400px) {
          .mobile-slider-container {
            height: 70vh !important;
            min-height: 400px;
          }
          
          .slide-content h1 {
            font-size: 1.5rem !important;
          }
          
          .slide-content p {
            font-size: 0.9rem !important;
          }
        }
        `}
      </style>

      {/* Main Container - Fixed for mobile */}
      <div className="w-full h-[80vh] md:h-[100vh] mobile-slider-container relative overflow-hidden rounded-none md:rounded-xl shadow-2xl">
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 
              flex flex-col justify-center items-start 
              p-4 md:p-16 
              text-white transition-opacity duration-500
              bg-cover bg-center bg-no-repeat slide-bg-mobile
              ${currentSlide === index ? getAnimationClass(index) : 'slide-inactive'}
            `}
            style={{
              backgroundImage: `url(${slide.image})`,
              zIndex: currentSlide === index ? 10 : 1,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          >
            {/* Overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0"></div>
            
            <div className="slide-content max-w-3xl pl-0 md:pl-12 relative z-10 w-full flex flex-col items-center md:items-start justify-end md:justify-center h-full">
              {/* Title */}
              <h1 className="text-2xl md:text-6xl font-extrabold mb-3 md:mb-6 text-shadow-md opacity-0 animate-fade-in text-center md:text-left w-full">
                {slide.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-base md:text-2xl font-light mb-4 md:mb-10 text-shadow-sm opacity-0 animate-fade-in text-center md:text-left w-full">
                {slide.subtitle}
              </p>
              
              {/* Buttons */}
              <div className="flex sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-in w-full md:w-auto justify-center md:justify-start" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <Link 
                  to="/join-shf" 
                  className="px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-base font-bold text-white rounded-full transition duration-300 transform hover:scale-105 btn-pulse shadow-lg text-center"
                  style={{ background: 'linear-gradient(45deg, #4e54c8, #8f94fb)' }}
                >
                  Join SHF
                </Link>
                <Link 
                  to="/donate" 
                  className="px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-base font-bold text-white rounded-full transition duration-300 transform hover:scale-105 btn-pulse shadow-lg text-center"
                  style={{ background: 'linear-gradient(45deg, #11998e, #38ef7d)' }}
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons (Prev/Next) - Hidden on very small screens */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/30 hover:bg-white/50 rounded-full transition z-20 text-white backdrop-blur-sm hidden sm:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6"/>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/30 hover:bg-white/50 rounded-full transition z-20 text-white backdrop-blur-sm hidden sm:block"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6"/>
        </button>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 
                ${currentSlide === index ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/70'}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;