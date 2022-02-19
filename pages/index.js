import Head from 'next/head';
import NavBar from '../components/NavBar';
import Memory from '../components/Memory';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <NavBar />
      </div>
      <main className="flex-1 overflow-y-auto">
        <Memory />
      </main>
    </div>
  );
}
