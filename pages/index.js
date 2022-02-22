import { useState } from 'react';
import useInView from 'react-cool-inview';
import NavBar from '../components/NavBar';
import Memory from '../components/Memory';
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
      <div className="fixed right-0 left-0 z-[999]">
        <NavBar />
      </div>
      {/* <main className="flex flex-col items-center justify-start flex-1 overflow-y-auto"> */}
      <main className="flex flex-col items-center flex-1 pt-24 overflow-y-auto">
        <div className="relative">
          <Memory id="panel1" name="panel1" />
        </div>
        <ICUE />
        <Mouse />
        <Keyboard />
        <Flavor/>
        <div ref={observe}>
          <TechSpecs id="panel5" />
        </div>
      </main>
    </div>
  );
}
