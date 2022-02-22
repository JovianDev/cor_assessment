import React, { useRef, useEffect } from 'react';

function Hero() {
  return (
    <div
      className="relative flex items-center justify-center w-screen  m-0 min-h-[50vh] overflow-hidden"
      name="memory-panel-container"
    >
      <video
        loop
        autoPlay
        muted
        className="absolute min-w-full min-h-full top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] z-[0] xl:scale-none  "
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="  flex flex-col items-center justify-center 
          h-full w-full  z-[1] overflow-hidden"
        name="memory-text-container"
      >
        <p className="mb-6 text-2xl font-semibold tracking-widest text-yellow-300 text-shadow font-helvetica">
          MAKE THE JUMP TO HYPERSPEED
        </p>
        <h1 className="font-bold text-shadow font-bebas text-stone-50 text-8xl">
          CORSAIR MEMORY
        </h1>
        <p className="mt-6 text-2xl font-medium font-helvetica text-stone-50 text-shadow">
          CORSAIR has always led the way in high-performance DRAM.
        </p>
        <p className="text-2xl font-medium text-stone-50 text-shadow font-helvetica">
          Now we&apos;ve made the leap to the next level of performance with
          DDR5.
        </p>
      </div>
    </div>
  );
}

export default Hero;
