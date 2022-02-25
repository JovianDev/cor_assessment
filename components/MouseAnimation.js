// import React, { useState, useRef } from 'react';
// function MouseAnimation() {
//   const [scrollTop, setScrollTop] = useState(null);
//   const [maxScrollTop, setMaxScrollTop] = useState(null);
//   const [scrollFraction, setScrollFraction] = useState(null);
//   const [frameIndex, setFrameIndex] = useState(null);
//   const [img, setImg] = useState(null);
//   const mouseCanvas = useRef();
//   const currentFrame = (index) => {
//     return `/img/mouse_sequence/${index.toString().padStart(5, '0')}.webp`;
//   };
//   if (process.browser) {
//     const canvas = document.querySelector('canvas');
//   }
//   //   const ctx = canvas.getContext('2d')
//   const frameCount = 60;
//   const preloadImages = () => {
//     for (let i = i; i < frameCount; i++) {
//       setImg = new Image();
//       img.src = currentFrame(i);
//     }
//     'PRELOAD', preloadImages();
//   };
//   if (process.browser) {
//     window.addEventListener('scroll', () => {
//       setScrollTop(html.scrollTop);
//       setMaxScrollTop(html.scrollHeight - window.innerHeight);
//       setScrollFraction(scrollTop / maxScrollTop);
//       setFrameIndex(
//         Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))
//       );
//       console.log('FRAME INDEX', frameIndex);
//     });
//   }
//   console.log('CURR', currentFrame);

//   const updateImage = (index) => {
//     setImg({ src: currentFrame(index) });
//     // canvas?.drawImage(img, 0, 0);
//   };
//   if (process.browser) {
//     requestAnimationFrame(() => updateImage(frameIndex + 1));
//   }

//   return (
//     // <div className="fixed left-[50%] top-[50%] max-h-full max-w-full translate-x-[-50%] translate-y-[-50%]">
//     <div>
//       <canvas ref={mouseCanvas} />
//     </div>
//   );
// }

// export default MouseAnimation;
