import Head from 'next/head';
import NavBar from '../components/NavBar';
import Memory from '../components/Memory';
import ICUE from '../components/ICUE';
import TechSpecs from '../components/TechSpecs';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black padd">
      <div className="fixed right-0 left-0 z-[999]">
        <NavBar />
      </div>
      {/* <main className="flex flex-col items-center justify-start flex-1 overflow-y-auto"> */}
      <main className="flex flex-col items-center flex-1 pt-24 overflow-y-auto">
        <div className="relative">
          <Memory />
        </div>
        <ICUE />
        <TechSpecs />
      </main>
    </div>
  );
}
