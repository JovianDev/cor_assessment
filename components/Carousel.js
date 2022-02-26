import React, { useState, useEffect } from 'react';
import CarouselButtons from './CarouselButtons';
import { updateProgress } from './utils';
function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState('bg-[length:16.6666667%_100%]');

  console.log(currentSlide);
  let length = slides.length;
  const prevClick = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : (currentSlide -= 1));
  };
  const nextClick = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : (currentSlide += 1));
  };
  useEffect(() => {
    updateProgress(currentSlide, setProgress);
    console.log('UE CURRENT', currentSlide);
  }, [currentSlide]);
  return (
    <div className="relative flex-col items-center justify-center xl:w-full xl:min-w-[700px] min-w-[60%] max-w-none md:p-14">
      <div>
        <CarouselButtons prev={prevClick} next={nextClick} />
      </div>
      <div className="flex justify-center p-6 mb-4">
        {slides.map(
          (slide, i) =>
            currentSlide === i && (
              <img
                src={slide.src}
                alt="carousel image"
                className="rounded-lg animate-carouselTrans"
                key={slide.src}
                height={446}
                width={792}
              />
            )
        )}
      </div>
      <div className="flex items-center justify-between w-full ">
        <p className="pr-10 text-4xl font-bebas text-stone-50">01</p>
        <div
          className={`w-full h-[8px] my-10 rounded-md  bg-stone-600 bg-gradient-to-r from-stone-50 to-stone-50 bg-no-repeat ${progress}`}
        />
        <p className="pl-10 text-4xl font-bebas text-stone-50">06</p>
      </div>
    </div>
  );
}

export default Carousel;
