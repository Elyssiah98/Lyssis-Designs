import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    './src/Components/HomePage/Photos/AerialHoop.jpg',
    './src/Components/HomePage/Photos/GreatSouthernRuns.jpg',
    './src/Components/HomePage/Photos/Heartkids.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="carousel-section">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageCarousel;