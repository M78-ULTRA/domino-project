import Link from 'next/link';
import { Bokor } from "next/font/google";

const bokorrin = Bokor({
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bokor", 
});

export default function Home() {
  return (
    <div
      className={`${bokorrin.variable} flex flex-col justify-center items-center min-h-screen`}
      style={{
        backgroundColor: "blue",
        color: "white",
      }}
    >
      <h1 
      className="text-8xl font-bold bokor-regular">
        Project Domino</h1>

      <p 
      className="text-4xl font-bold bokor-regular mb-4">
        A ULTRA-M78 Project</p>


      <Link href="/domino-page">
      <button 
      className="px-8 py-3 text-blue-800 bg-white font-bold bokor-regular text-3xl rounded shadow-xl transform hover:scale-110 transition-all">
        Play</button>
      </Link>
    </div>
  );
}

