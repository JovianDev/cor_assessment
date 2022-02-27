import React from 'react';

function Flavor() {
  return (
    <div className="relative flex :flex-col lg:justify-center lg:items-center   px-5 bg-[url(/img/bg-creme-min.png)] bg-cover bg-center w-full min-h-[45vh] lg:min-h-[55vh] overflow-hidden">
      <video
        autoPlay
        muted
        src="video/fruit.mp4"
        className="absolute md:hidden bottom-0 left-0 z-[1] w-screen h-full animate-videoFade object-cover"
      />

      <div className="flex flex-col justify-center w-full pl-20 top-20 lg:items-center lg:text-center lg:pl-0 lg:absolute ">
        <h3 className="mb-4 mr-0 text-5xl font-bebas">FLAVOR RUSH</h3>
        <p className="text-lg font-helvetica w-[60%] ">
          Make a big impression with a pick from the K65 RGB MINI FLAVOR RUSH
          Collection
        </p>
      </div>
      <div className="relative flex justify-center w-full   z-[2] ">
        <img
          src="/img/keyboard-magic-bubblegum-min.png"
          alt="bubblegum keyboard"
          className="absolute -bottom-2 lg:top-7 sm:top-16 object-cover right-[24.5rem] sm:right-[13rem] animate-slideUpMed sm:w-[212.5px] sm:h-[224.5px] "
          width={425 * 0.7}
          height={449 * 0.7}
        />
        <img
          src="/img/keyboard-magic-watermelon-min.png"
          alt="watermelon keyboard"
          className="absolute -bottom-2 lg:bottom-[-22rem] right-[15.5rem] sm:right-[9rem] sm:top-0 animate-slideUpFast sm:w-[220.5px] sm:h-[314px]"
          width={441 * 0.7}
          height={628 * 0.7}
        />

        <img
          src="/img/keyboard-magic-berry-min.png"
          alt="berry keyboard"
          className="absolute -bottom-2 lg:-top-5 sm:top-[2rem] sm:right-16 right-24 animate-slideUpMed sm:w-[220px] sm:h-[260.5px]"
          width={440 * 0.7}
          height={521 * 0.7}
        />

        <img
          src="/img/keyboard-magic-mint-min.png"
          alt="mint keyboard"
          className="absolute right-0 -bottom-5 sm:top-[4rem]  lg:top-24 z-99 animate-slideUpSlow sm:w-[197.5px] sm:h-[219.5px]"
          width={395 * 0.7}
          height={439 * 0.7}
        />
      </div>
    </div>
  );
}

export default Flavor;
