import React from 'react';

function SliderButtons({ carousel }) {
  return (
    <div
      name="sliderButtons"
      className="absolute left-0 top-5 md:relative md:left-0 "
    >
      <button
        onClick={() => carousel.current.slickPrev()}
        className="mr-2 font-bold -bottom-12 left-4 text-stone-50 md:absolute "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="md:h-14 md:w-14"
        >
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </button>
      <button
        onClick={() => carousel.current.slickNext()}
        className="ml-2 font-bold -bottom-12 right-4 text-stone-50 md:absolute "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="md:h-14 md:w-14"
        >
          <path
            // fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SliderButtons;
