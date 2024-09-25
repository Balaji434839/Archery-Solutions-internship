// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Carousel  () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '../src/assets/product1.jpg',
    '../src/assets/product2.jpg',
     '../src/assets/product3.jpg',
    '../src/assets/product4.jpg',
    '../src/assets/product5.jpg',
    '../src/assets/product6.jpg',
    '../src/assets/product7.jpg',
    '../src/assets/product8.jpg',
    '../src/assets/product9.jpg',
    ];    


  // Auto slide every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };


  return (
    <div id="default-carousel" className="" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="items-center w-auto h-screen mx-auto rounded-3xl contain-content ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item={index === currentSlide}
          >
            <img
              src={slide}
              className="block object-fill w-full h-full "
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators
      <div className="relative z-30 bottom-10 space-x-2 ml-[600px]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div> */}

      {/* Slider controls */}
      <div className='mx-auto'>
      <button
        type="button"
        className="absolute left-0 z-30 flex items-center px-4 cursor-pointer bottom-2 group focus:outline-none"
        onClick={prevSlide}
      >
        {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span> */}
      </button>
      <button
        type="button"
        className="absolute right-0 z-30 flex items-center px-4 cursor-pointer group focus:outline-none bottom-2"
        onClick={nextSlide}
      >
        {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white"> */}
          {/* <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 9l4-4-4-4" />
          </svg> */}
          {/* <span className="sr-only">Next</span>
        </span> */}
      </button>
      </div>
    </div>
  );
};

export default Carousel;
