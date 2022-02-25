import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderButtons from './SliderButtons';

function ImgCarousel({ slideImg }) {
  const carousel = useRef();
  const [prog, setProg] = useState('20%');
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    centerMode: false,
    lazyLoad: true,
    variableWidth: false,
    centerPadding: '0px',
  };
  return (
    <div
      name="sliderContainer"
      className="relative  w-[60%] md:w-full max-w-full max-h-full min-h-[none] min-w-[none] pt-20  md:p-6"
    >
      <div className="md:hidden">
        <SliderButtons carousel={carousel} prog={prog} setProg={setProg} />
      </div>
      <Slider {...settings} ref={carousel}>
        {slideImg.map((img) => (
          <img
            key={img}
            src={img}
            alt="carousel image"
            height={446}
            width={792}
            className="rounded-lg"
          />
        ))}
      </Slider>
      <div className="md:visible">
        <SliderButtons carousel={carousel} />
      </div>
      <div className="flex items-center justify-between w-full md:mb-16">
        <p className="pr-10 text-4xl font-bebas text-stone-50">01</p>
        <div
          className={`w-full h-[8px] my-10 rounded-md  bg-stone-500 bg-gradient-to-r from-stone-50 to-stone-50 bg-no-repeat bg-[length:${20}%_100%]`}
        />
        <p className="pl-10 text-4xl font-bebas text-stone-50">06</p>
      </div>
    </div>
  );
}
export default ImgCarousel;
