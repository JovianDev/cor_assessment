import React from 'react';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ICUE from '../components/ICUE';
import TechSpecs from '../components/TechSpecs';
import Mouse from '../components/Mouse';
import Keyboard from '../components/Keyboard';
import Flavor from '../components/Flavor';

export default function Home() {
  const { ref: icueComponent, inView: icueInView } = useInView({
    threshold: 0.5,
  });
  const { ref: mouseComponent, inView: mouseInView } = useInView({
    threshold: 0.5,
  });
  const { ref: keyboardComponent, inView: keyboardInView } = useInView({
    threshold: 0.2,
  });
  const { ref: flavorComponent, inView: flavorInView } = useInView({
    threshold: 0.2,
  });
  const { ref: specsComponent, inView: specsInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col h-screen bg-black ">
      <div className="fixed right-0 left-0 z-[999] md:hidden">
        <NavBar
          icueInView={icueInView}
          mouseInView={mouseInView}
          keyboardInView={keyboardInView}
          flavorInView={flavorInView}
          specsInView={specsInView}
        />
      </div>
      {/* <main className="flex flex-col items-center justify-start flex-1 overflow-y-auto"> */}
      <main className="flex flex-col items-center flex-1 pt-24 overflow-y-auto">
        <div className="relative">
          <Hero />
        </div>
        <div id="panel1" className="w-full" ref={icueComponent}>
          <ICUE />
        </div>
        <div id="panel2" className="w-full" ref={mouseComponent}>
          <Mouse />
        </div>
        <div id="panel3" className="w-full" ref={keyboardComponent}>
          <Keyboard />
        </div>
        <div id="panel4" className="w-full min-h-[65vh]" ref={flavorComponent}>
          {flavorInView && <Flavor />}
        </div>
        <div id="panel5" className="w-full" ref={specsComponent}>
          <TechSpecs />
        </div>
      </main>
    </div>
  );
}
