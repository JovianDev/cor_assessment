import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { RGBKeyboardMedia } from './utils/index';
const { rain, watercolor, colorShift, rainbow, visor } = RGBKeyboardMedia;

function SelectRGB({ setKeyboardVideo }) {
  const rainBtn = useRef();
  const watercolorBtn = useRef();
  const colorShiftBtn = useRef();
  const rainbowBtn = useRef();
  const visorBtn = useRef();
  const [active, setActive] = useState(rainBtn);
  console.log(active === rainBtn);
  return (
    <div
      className="w-full z-50 flex justify-center  absolute  top-[-4%]"
      name="RGB selectors"
    >
      <div className="flex flex-col items-center mx-2">
        <button
          className={`p-1 mb-4 ${
            active === rainBtn
              ? 'bg-black border-2 rounded-full border-stone-50'
              : 'bg-none border-2 border-transparent '
          }`}
          ref={rainBtn}
          onClick={() => {
            setActive(rainBtn);
            setKeyboardVideo(rain);
          }}
        >
          <Image
            src="/img/swatch-rain.webp"
            height="65px"
            width="65px"
            alt="rain RGBs"
          />
        </button>

        <p
          className={`text-lg text-stone-50 font-bebas ${
            active === rainBtn ? 'visible' : 'invisible'
          }`}
        >
          RAIN
        </p>
      </div>
      <div className="flex flex-col items-center mx-2">
        <button
          className={`p-1 mb-4 ${
            active === watercolorBtn
              ? 'bg-black border-2 rounded-full border-stone-50'
              : 'bg-none border-2 border-transparent '
          }`}
          ref={watercolorBtn}
          onClick={() => {
            setKeyboardVideo(watercolor);
            setActive(watercolorBtn);
          }}
        >
          <Image
            src="/img/swatch-watercolor.webp"
            height="65px"
            width="65px"
            alt="watercolor RGBs"
          />
        </button>
        <p
          className={`text-lg text-stone-50 font-bebas ${
            active === watercolorBtn ? 'visible' : 'invisible'
          }`}
        >
          WATERCOLOR
        </p>
      </div>
      <div className="flex flex-col items-center mx-2">
        <button
          className={`p-1 mb-4 ${
            active === colorShiftBtn
              ? 'bg-black border-2 rounded-full border-stone-50'
              : 'bg-none border-2 border-transparent '
          }`}
          ref={colorShiftBtn}
          onClick={() => {
            setKeyboardVideo(colorShift);
            setActive(colorShiftBtn);
          }}
        >
          <Image
            src="/img/swatch-color_shift.png"
            height="65px"
            width="65px"
            alt="color shift RGBs"
          />
        </button>
        <p
          className={`text-lg text-stone-50 font-bebas ${
            active === colorShiftBtn ? 'visible' : 'invisible'
          }`}
        >
          COLORSHIFT
        </p>
      </div>
      <div className="flex flex-col items-center mx-2">
        <button
          className={`p-1 mb-4 ${
            active === rainbowBtn
              ? 'bg-black border-2 rounded-full border-stone-50'
              : 'bg-none border-2 border-transparent '
          }`}
          ref={rainbowBtn}
          onClick={() => {
            setKeyboardVideo(rainbow);
            setActive(rainbowBtn);
          }}
        >
          <Image
            src="/img/swatch-rainbow.webp"
            height="65px"
            width="65px"
            alt="rainbow RGBs"
          />
        </button>
        <p
          className={`text-lg text-stone-50 font-bebas ${
            active === rainbowBtn ? 'visible' : 'invisible'
          }`}
        >
          RAINBOW
        </p>
      </div>
      <div className="flex flex-col items-center mx-2">
        <button
          className={`p-1 mb-4 ${
            active === visorBtn
              ? 'bg-black border-2 rounded-full border-stone-50'
              : 'bg-none border-2 border-transparent '
          }`}
          ref={visorBtn}
          onClick={() => {
            setKeyboardVideo(visor);
            setActive(visorBtn);
          }}
        >
          <Image
            src="/img/swatch-visor.png"
            height="65px"
            width="65px"
            alt="visor RGBs"
          />
        </button>
        <p
          className={`text-lg text-stone-50 font-bebas ${
            active === visorBtn ? 'visible' : 'invisible'
          }`}
        >
          VISOR
        </p>
      </div>
    </div>
  );
}

export default SelectRGB;
