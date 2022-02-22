import React from 'react';
import Image from 'next/image';
import ImgCarousel from './ImgCarousel';

function ICUE() {
  const slideImg = [
    '/img/iCUE-carousel_slide01.webp',
    '/img/iCUE-carousel_slide02.jpeg',
    '/img/iCUE-carousel_slide03.webp',
    '/img/iCUE-carousel_slide04.webp',
    '/img/iCUE-carousel_slide05.webp',
    '/img/iCUE-carousel_slide06.webp',
  ];
  return (
    <div className="w-full h-full py-[4rem] px-20 m-0 bg-[url('/img/iCUE-panel-bg.jpg')] bg-no-repeat bg-cover flex justify-center">
      <div
        className="flex flex-col items-start justify-center w-[30]"
        name="cue-info"
      >
        <div className="ml-0 -pl-4 " name="icueImgContainer">
          <Image
            className="-pl-4"
            src="/img/Corsair-iCUE-logo.png"
            alt="iCue Logo"
            width={1000 * 0.2}
            height={546 * 0.2}
          />
        </div>
        <h3 className="my-8 text-4xl font-bold text-stone-50 font-bebas">
          UNITE YOUR SETUP
        </h3>
        <p className="text-lg text-stone-50 font-helvetica">
          Take command of your system, inside and out. Fine-tune the settings
          for all of your iCUE-compatible devices, from fan speeds to keyboard
          macros, on a single intuitive interface.
        </p>
        <input
          type="button"
          value="LEARN MORE"
          className="w-48 px-8 py-4 my-10 font-bold bg-stone-50 font-helvetica hover:cursor-pointer hover:bg-stone-300 hover:shadow-md hover:animate-selectUp"
        />
      </div>
      <div className="w-[50%] h-full  " name="icue-carousel">
        <ImgCarousel slideImg={slideImg} />
      </div>
    </div>
  );
}

export default ICUE;
