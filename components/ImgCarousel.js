import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImgCarousel({ slideImg }) {
  const carousel = useRef();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    centerMode: true,
    lazyLoad: true,
    variableWidth: true,
    centerPadding: '100px',
    customPaging: function (i) {
      return (
        <a>
          <img
            src={images[i].src}
            height="100%"
            width="100%"
            alt={images[i].alt}
          />
        </a>
      );
    },
  };
  return (
    <div className="">
      <div name="sliderContainer" className="relative top-32">
        <div name="sliderButtons" className="absolute -top-20 left-28">
          <button
            onClick={() => carousel.current.slickPrev()}
            className="my-6 mr-2 font-bold text-stone-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </button>
          <button
            onClick={() => carousel.current.slickNext()}
            className="ml-2 font-bold text-stone-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                // fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>
        </div>
        <Slider {...settings} ref={carousel} className="h-full">
          {slideImg.map((img) => (
            <div
              key={img}
              className="flex items-center justify-center h-full mx-32"
            >
              <Image
                src={img}
                alt="carousel image"
                height={446 * 0.8}
                width={792 * 0.8}
                className="rounded-md"
              />
            </div>
          ))}
        </Slider>
        <div>slider</div>
      </div>
    </div>
  );
}
export default ImgCarousel;
