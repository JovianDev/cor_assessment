import React from 'react';
import Image from 'next/image';
import { slides } from './utils/index';
import Carousel from './Carousel';
function ICUE() {
  return (
    <div className="w-full h-full py-[4rem] px-20 md:p-2 m-0 bg-[url('/img/iCUE-panel-bg.jpg')] bg-no-repeat bg-cover flex justify-center items-center md:flex-col md:items-center md:text-center">
      <div
        className="flex flex-col items-start justify-center md:items-center "
        name="cue-info"
      >
        <Image
          className="-m-4 "
          src="/img/Corsair-iCUE-logo.png"
          alt="iCue Logo"
          width={1000 * 0.2}
          height={546 * 0.2}
        />
        <h3 className="my-8 text-5xl font-bold text-stone-50 md:mt-2 font-bebas">
          UNITE YOUR SETUP
        </h3>
        <p className="text-lg text-stone-50 font-helvetica w-[70%] md:w-full md:px-10 md:text-center">
          Take command of your system, inside and out. Fine-tune the settings
          for all of your iCUE-compatible devices, from fan speeds to keyboard
          macros, on a single intuitive interface.
        </p>
        <input
          type="button"
          value="LEARN MORE"
          className="w-48 px-8 py-4 my-10 font-bold md:mb-10 md:w-96 sm:w-[90%] bg-stone-50 font-helvetica hover:cursor-pointer hover:bg-stone-300 active:opacity-40 hover:shadow-md hover:animate-selectUp md:hover:animate-none"
        />
      </div>
      <Carousel slides={slides} />
    </div>
  );
}

export default ICUE;
