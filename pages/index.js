import { useState } from 'react';
import useInView from 'react-cool-inview';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ICUE from '../components/ICUE';
import TechSpecs from '../components/TechSpecs';
import Mouse from '../components/Mouse';
import Keyboard from '../components/Keyboard';
import Flavor from '../components/Flavor';

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: () => {
      console.log('OBSERVE', observe.id);
    },
  });
  console.log(inView);
  return (
    <div className="flex flex-col h-screen bg-black padd">
      <div className="fixed right-0 left-0 z-[999] md:hidden">
        <NavBar />
      </div>
      {/* <main className="flex flex-col items-center justify-start flex-1 overflow-y-auto"> */}
      <main className="flex flex-col items-center flex-1 pt-24 overflow-y-auto">
        <div className="relative">
          <Hero />
        </div>
        <div id="panel1" className="w-full">
          <ICUE />
        </div>
        <div id="panel2" className="w-full">
          <Mouse />
        </div>
        <div id="panel3" className="w-full">
          <Keyboard />
        </div>
        <div id="panel4" className="w-full">
          <Flavor />
        </div>
        <div id="panel5" className="w-full" ref={observe}>
          <TechSpecs />
        </div>
      </main>
    </div>
  );
}
