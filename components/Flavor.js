import React from 'react';

function Flavor() {
  return (
    <div className="relative flex xl:flex-col xl:justify-center xl:items-center   px-5 bg-[url(/img/bg-creme-min.png)] bg-cover bg-center w-full min-h-[65vh] xl:min-h-[none] overflow-hidden">
      <video
        autoPlay
        muted
        src="video/fruit.mp4"
        className="absolute md:hidden bottom-0 left-0 z-[1] w-screen h-full animate-videoFade object-cover"
      />

      <div className="flex flex-col justify-center pl-20 top-20 xl:items-center xl:text-center xl:pl-0 xl:absolute">
        <h3 className="mb-4 mr-0 text-5xl font-bebas">FLAVOR RUSH</h3>
        <p className="text-lg font-helvetica w-[80%] md:w-[60%]">
          Make a big impression with a pick from the K65 RGB MINI FLAVOR RUSH
          Collection
        </p>
      </div>
      <div className="relative flex w-full   z-[2] ">
        <img
          src="/img/keyboard-magic-bubblegum-min.png"
          alt="bubblegum keyboard"
          className="absolute -bottom-2 xl:top-0 xl:bottom-0 max-w-[100%] object-cover right-[35rem] animate-slideUpMed "
        />
        <img
          src="/img/keyboard-magic-watermelon-min.png"
          alt="watermelon keyboard"
          className="absolute -bottom-2 xl:-top-52 right-[22.5rem] animate-slideUpFast"
        />

        <img
          src="/img/keyboard-magic-berry-min.png"
          alt="berry keyboard"
          className="absolute -bottom-2 xl:-top-24 right-36 animate-slideUpMed"
        />

        <img
          src="/img/keyboard-magic-mint-min.png"
          alt="mint keyboard"
          className="absolute right-0 -bottom-5 xl:top-5 z-99 animate-slideUpSlow"
        />
      </div>
    </div>
  );
}

export default Flavor;
