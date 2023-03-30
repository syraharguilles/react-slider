import React, { useState } from 'react';

const Slider = () => {
  const slides = [
    { image: 'slide1.jpg', text: 'Slide 1' },
    { image: 'slide2.jpg', text: 'Slide 2' },
    { image: 'slide3.jpg', text: 'Slide 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Prev</button>
      <div className="slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].text} />
        <p>{slides[currentIndex].text}</p>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;