//video src for RGB keyboards
export const RGBKeyboardMedia = {
  rain: { url: 'tnk-rain.webm', type: 'webm' },
  watercolor: { url: 'tnk-watercolorb.webm', type: 'webm' },
  colorShift: { url: 'tnk-colorshift.webm', type: 'webm' },
  rainbow: { url: 'tnk-rainbowwaveup.mp4', type: 'mp4' },
  visor: { url: 'tnk-visor.mp4', type: 'mp4' },
};
//image deck for iCUE slider

export const slides = [
  { src: '/img/iCUE-carousel_slide01.webp' },
  { src: '/img/iCUE-carousel_slide02.jpeg' },
  { src: '/img/iCUE-carousel_slide03.webp' },
  { src: '/img/iCUE-carousel_slide04.webp' },
  { src: '/img/iCUE-carousel_slide05.webp' },
  { src: '/img/iCUE-carousel_slide06.webp' },
];
//FXN to get mouse animation frames
export const getFrames = (frameCount) => {
  let frames = [];
  for (let i = 0; i < frameCount; i++) {
    frames.push({
      src: `/img/mouse_sequence/${i.toString().padStart(5, '0')}.webp`,
    });
  }
  return frames;
};
// FXN to update progress bar on icue image slider
export const updateProgress = (current, setProgressBar) => {
  switch (current) {
    case 0:
      setProgressBar('bg-[length:16.6666667%_100%]');
      break;
    case 1:
      setProgressBar('bg-[length:33.3333333%_100%]');
      break;
    case 2:
      setProgressBar('bg-[length:50%_100%]');
      break;
    case 3:
      setProgressBar('bg-[length:66.6666667%_100%]');
      break;
    case 4:
      setProgressBar('bg-[length:83.3333333%_100%]');
      break;
    case 5:
      setProgressBar('bg-[length:100%_100%]');
      break;
    default:
      setProgressBar('bg-[length:16.6666667%_100%]');
      break;
  }
};
