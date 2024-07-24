import React, { useState, useEffect } from 'react';
import '../App.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Time interval (1000ms = 1 second)

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img className="profile" src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p className="price">${slide.price}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;