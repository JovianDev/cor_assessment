import Image from 'next/image';
import React from 'react';

function Flavor() {
  return (
    <div className="relative flex  px-5 bg-[url(/img/bg-creme-min.png)] bg-cover bg-center w-full min-h-[65vh] overflow-hidden">
      <div className="absolute md:hidden bottom-0 left-0 z-[1] animate-videoFade min-w-screen min-h-full max-w-[none] max-h-[none]">
        <video
          autoPlay
          muted
          src="video/fruit.mp4"
          className="max-w-[none] max-h-[none]"
        />
      </div>
      <div className="flex flex-col justify-center pl-20">
        <h3 className="mb-4 mr-0 text-5xl font-bebas">FLAVOR RUSH</h3>
        <p className="text-lg font-helvetica w-[80%]">
          Make a big impression with a pick from the K65 RGB MINI FLAVOR RUSH
          Collection
        </p>
      </div>
      <div className="relative flex w-full overflow-hidden z-[2]">
        <div className="absolute -bottom-2 right-[35rem] animate-slideUpMed ">
          <Image
            responsive
            src="/img/keyboard-magic-bubblegum-min.png"
            alt="bubblegum keyboard"
            height="449px"
            width="425px"
          />
        </div>
        <div className="absolute -bottom-2 right-[22.5rem] animate-slideUpFast">
          <Image
            src="/img/keyboard-magic-watermelon-min.png"
            alt="watermelon keyboard"
            height="628px"
            width="441px"
          />
        </div>
        <div className="absolute -bottom-2 right-36 animate-slideUpMed">
          <Image
            src="/img/keyboard-magic-berry-min.png"
            alt="berry keyboard"
            height="521px"
            width="440px"
          />
        </div>
        <div className="absolute right-0 -bottom-5 z-99 animate-slideUpSlow">
          <Image
            src="/img/keyboard-magic-mint-min.png"
            alt="mint keyboard"
            height="439px"
            width="395px"
          />
        </div>
      </div>
    </div>
  );
}

export default Flavor;
