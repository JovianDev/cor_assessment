import React, { useState, useEffect, useRef } from 'react';

const frameCount = 60;
const images = [];
const currentFrame = (index) =>
  `/img/mouse_sequence/${index.toString().padStart(5, '0')}.webp`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
};

preloadImages();
console.log('IMAGES', images);
function MouseAnimation() {
  const [frame, setFrame] = useState(1);
  const canvasRef = useRef(null);

  const handleScroll = () => {
    const scrollingElement = document.scrollingElement;
    const scrollTop = scrollingElement.scrollTop;
    const maxScrollTop = scrollingElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 2,
      Math.ceil(scrollFraction * frameCount)
    );

    setFrame(frameIndex + 1);
  };

  useEffect(() => {
    const img = new Image();
    img.src = currentFrame(frame);

    const canvas = canvasRef.current;
    canvas.width = 582;
    canvas.height = 650;
    img.onload = function () {
      canvas.getContext('2d').drawImage(img, 0, 0);
    };
  }, [frame]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div>{images[27].src}</div>
      <canvas id="canvas" ref={canvasRef} />;
    </div>
  );
}

export default MouseAnimation;
