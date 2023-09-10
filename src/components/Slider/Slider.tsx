import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
 
  setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className="relative h-full md:h-[85vh] overflow-hidden w-full">
      <div className="flex w-full h-auto" style={slideStyle}>
        {data.map((image, index) => (
          <img
            key={index}
            src={image}
            className="min-w-full h-full object-cover"
            // className="w-full h-full object-center  object-cover"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <span className="absolute bottom-10 gap-3 left-0 right-0 flex justify-center">
        <div
          onClick={prevSlide}
          className="w-8 h-8 md:w-12 md:h-12 invert border-2 border-black items-center flex justify-center"
        >
          <BsArrowLeft />
        </div>
        <div
          onClick={nextSlide}
          className="w-8 h-8 md:w-12 md:h-12 invert border-2 border-black items-center flex justify-center"
        >
          <BsArrowRight />
        </div>
      </span>
    </div>
  );
};

export default Slider;
