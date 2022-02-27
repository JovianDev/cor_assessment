// import { handle } from 'express/lib/application';
// import React, { useState, useRef, useEffect } from 'react';
// import { getFrames } from './utils/index';
// console.log('FRAMES', getFrames(60));

// function MouseAnimation() {
//   //   const [scrollTop, setScrollTop] = useState(null);
//   const [maxScrollTop, setMaxScrollTop] = useState(null);
//   const [scrollFraction, setScrollFraction] = useState(null);
//   const [frameIndex, setFrameIndex] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const [img, setImg] = useState(null);
//   const mouseCanvas = useRef();
//   const frameCount = 60;
//   const frames = getFrames(frameCount);
//   const currentFrame = (index) => {
//     return frames[index].src;
//   };
//   //   const canvas = document.querySelector('canvas');

//   //   const ctx = canvas.getContext('2d')
//   //   if (typeof window) {
//   //     const handleScroll = () => {
//   //       setScrollTop(html.scrollTop);
//   //       console.log(scrollTop);
//   //       setMaxScrollTop(html.scrollHeight - window.innerHeight);
//   //       setScrollFraction(scrollTop / maxScrollTop);
//   //       setFrameIndex(
//   //         Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))
//   //       );
//   //     };
//   //     console.log('FRAME INDEX', frameIndex);
//   //   }
//   //   console.log('CURR', currentFrame);
//   //   if (typeof window) {
//   //     window.addEventListener('scroll', () => {
//   //       setScrollTop(html.scrollTop);
//   //       setMaxScrollTop(html.scrollHeight - window.innerHeight);
//   //       setScrollFraction(scrollTop / maxScrollTop);
//   //       setFrameIndex(
//   //         Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))
//   //       );
//   //     });
//   //   }

//   //   const scrollHandler = (event) => {
//   //     console.log('IN SCROLL');
//   //     if (typeof window) {
//   //       const containerHeight = event.currentTarget.clientHeight;
//   //       const scrollHeight = event.currentTarget.scrollHeight;

//   //       const scrollTop = event.currentTarget.scrollTop;
//   //       setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
//   //       console.log('PROGRESS', scrollHeight, progress);
//   //     }
//   //   };
//   const handleScroll = () => {
//     console.log('im scrolling');
//   };

//   //   const updateImage = (index) => {
//   //     setImg({ src: currentFrame(index) });
//   // canvas?.drawImage(img, 0, 0);
//   //   };
//   //   if (process.browser) {
//   //     requestAnimationFrame(() => updateImage(frameIndex + 1));
//   //   }
//   return (
//     // <div className="fixed left-[50%] top-[50%] max-h-full max-w-full translate-x-[-50%] translate-y-[-50%]">
//     <div ref={mouseCanvas}>{/* <canvas ref={mouseCanvas} /> */}</div>
//   );
// }

// export default MouseAnimation;
