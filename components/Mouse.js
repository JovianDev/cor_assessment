import React, { useRef } from 'react';
import Image from 'next/image';
import MouseAnimation from './MouseAnimation';

function Mouse() {
  return (
    <div className="flex  p-10 items-center bg-[url('/img/bg-TriHexBackground3.png')] md:flex-col bg-cover bg-center w-full min-h-[50vh]">
      <div
        name="mouse-info"
        className="flex flex-col items-start justify-center flex-1 p-10 md:items-center md:text-center"
      >
        <h3 className="text-5xl font-bold font-bebas text-stone-50">
          PERFECT BALANCE
        </h3>
        <p className="text-lg text-stone-50 font-helvetica max-w-[80%]">
          A custom 18,000 DPI optical sensor optimized for wireless mice, and
          hyper-polling technology up to 2,000Hz.
        </p>
      </div>
      <div
        className="flex items-center justify-center flex-1 my-20 "
        name="mouse-scroll-animation"
      >
        <Image
          src="/img/mouse_sequence/00020.webp"
          height="650px"
          width="582px"
          alt="gaming mouse"
        />
        {/* <MouseAnimation /> */}
      </div>
    </div>
  );
}

export default Mouse;
