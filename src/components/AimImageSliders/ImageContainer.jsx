import React from 'react';
import SliderComponent from './SliderComponent';
import Img1 from '../../images/aimImage/1.jpeg'
import Img2 from '../../images/aimImage/2.jpeg'
//import Img3 from '../../images/aimImage/3.jpeg'
import Img4 from '../../images/aimImage/4.jpeg'
import Img5 from '../../images/aimImage/5.jpeg'
import Img6 from '../../images/aimImage/6.jpeg'
import Img7 from '../../images/aimImage/7.jpeg'
import Img8 from '../../images/aimImage/8.jpeg'

const ImageContainer = () => {
  const images = [
    Img1,Img2, Img4, Img5, Img6, Img7, Img8
  ];

  return (
    <div className="App">
      <h1>OUR AIM</h1>
      <SliderComponent images={images} />
    </div>
  );
};

export default ImageContainer;