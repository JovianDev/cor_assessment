import React, { useState, useRef, useEffect } from 'react';
import SelectRGB from './SelectRGB';
import { RGBKeyboardMedia } from './utils/index';
function Keyboard() {
  const [keyboardVideo, setKeyboardVideo] = useState(RGBKeyboardMedia.rain);
  const RGBVideo = useRef();

  console.log('KEYBOARDVID', keyboardVideo);
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      name="keyboardPanelContainer"
    >
      <h3 className="mt-10 mb-6 text-5xl text-stone-50 font-bebas">
        THE CENTERPIECE OF YOUR SETUP
      </h3>
      <p className="w-[40%] mb-20 text-stone-50 text-md font-helvetica text-center">
        The K100 RGB&apos;s refined design features a durable aluminum frame and
        dynamic pre-key RGB backlighting accented by a 44-zone three-sided RGB
        LightEdge.
      </p>
      <div className="relative flex flex-col items-center">
        <SelectRGB
          keyboardVideo={keyboardVideo}
          setKeyboardVideo={setKeyboardVideo}
        />
        <video
          autoPlay
          src={`/video/${keyboardVideo.url}`}
          muted
          loop
          poster="/img/keyboard-poster.png"
          ref={RGBVideo}
        >
          {/* <source
            src={`/video/${keyboardVideo.url}`}
            type={`video/${keyboardVideo.type}`}
          /> */}
        </video>
      </div>
    </div>
  );
}

export default Keyboard;
