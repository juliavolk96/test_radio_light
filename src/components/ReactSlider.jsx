import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css/ReactSlider.css'

const images = [
  './images/header01.png',
  './images/header02.png',
];

const ReactSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img className="slider-image" src={image} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default ReactSlider;
