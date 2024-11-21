import { useState } from 'react';
import { DominoContainer } from '../components/domino-container';
import { Bokor } from "next/font/google";


const bokorrin = Bokor({
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bokor", 
});

export default function Home() {
  const originalDominoNumbers: [number, number][] = [
    [1, 2],
    [3, 3],
    [3, 4],
    [3, 4],
    [5, 6],
    [6, 7],
    [7, 6],
    [8, 1],
    [2, 2],
    [3, 6],
  ];

  const [dominoNumbers, setDominoNumbers] = useState<[number, number][]>(originalDominoNumbers);
  const [inputValue, setInputValue] = useState('');  
  const filterRepeatingNumbers = () => {
    const filtered = originalDominoNumbers.filter(
      (domino) => domino[0] === domino[1]
    );
    setDominoNumbers(filtered);
  };

  const sortAscending = () => {
    const sorted = [...originalDominoNumbers].sort(
      (a, b) => a[0] + a[1] - (b[0] + b[1])
    );
    setDominoNumbers(sorted);
  };

  const sortDescending = () => {
    const sorted = [...originalDominoNumbers].sort(
      (a, b) => b[0] + b[1] - (a[0] + a[1])
    );
    setDominoNumbers(sorted);
  };

  const removeIdentical = () => {
    const dominoCount: { [key: string]: number } = {};  
    
    originalDominoNumbers.forEach((domino) => {
      const sortedDomino: [number, number] = domino[0] < domino[1] ? [domino[0], domino[1]] : [domino[1], domino[0]];
      const dominoKey = `${sortedDomino[0]},${sortedDomino[1]}`;
      dominoCount[dominoKey] = (dominoCount[dominoKey] || 0) + 1;
    });
  
    const uniqueDominos: [number, number][] = [];
    originalDominoNumbers.forEach((domino) => {
      const sortedDomino: [number, number] = domino[0] < domino[1] ? [domino[0], domino[1]] : [domino[1], domino[0]];
      const dominoKey = `${sortedDomino[0]},${sortedDomino[1]}`;
      if (dominoCount[dominoKey] === 1) {
        uniqueDominos.push(sortedDomino);
      }
    });
  
    setDominoNumbers(uniqueDominos);
  };

  const flipAllDominos = () => {
    const flipped: [number, number][] = originalDominoNumbers.map(
      ([top, bottom]) => [bottom, top]
    );
    setDominoNumbers(flipped); 
  };

  const resetDominos = () => {
    setDominoNumbers(originalDominoNumbers);
  };

  
  const removeIfSumMatches = () => {
    const sum = parseInt(inputValue);  
    if (isNaN(sum)) return;  
    
    const filteredDominos = originalDominoNumbers.filter(
      (domino) => domino[0] + domino[1] !== sum 
    );

    setDominoNumbers(filteredDominos);  
  };

  return (
    <div
      className={`${bokorrin.variable} flex flex-col justify-center items-center min-h-screen`}
      style={{
        backgroundColor: "blue",
        color: "white",
      }}
    >
 
      <h1 className="text-8xl font-bold mb-4 bokor-regular">
        Domino deez nu-
      </h1>

      <DominoContainer dominoNumbers={dominoNumbers} />

      <div className="flex gap-4 mt-6 justify-center flex-wrap">
        <button
          className="px-4 py-2 text-2xl text-white font-bold rounded-lg bokor-regular transform hover:scale-110 transition-all"
          onClick={filterRepeatingNumbers}
        >
          Repeating Numbers
        </button>
        <button
          className="px-4 py-2 text-2xl text-white font-bold rounded-lg bokor-regular hover:scale-110 transition-all"
          onClick={sortAscending}
        >
          Ascend
        </button>
        <button
          className="px-4 py-2 text-2xl text-white font-bold rounded-lg bokor-regular hover:scale-110 transition-all"
          onClick={sortDescending}
        >
          Descend
        </button>
        <button
          className="px-4 py-2 text-2xl text-white font-bold rounded-lg bokor-regular hover:scale-110 transition-all"
          onClick={removeIdentical}
        >
          No Identical
        </button>
        <button
          className="px-4 py-2 text-2xl text-white font-bold rounded-lg bokor-regular hover:scale-110 transition-all"
          onClick={flipAllDominos}
        >
          Flip
        </button>
        <button
          className="px-4 py-2 text-2xl text-white font-bold rounded-lg bokor-regular hover:scale-110 transition-all"
          onClick={resetDominos}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-8 justify-center items-center flex-wrap">
        <h1 className="text-5xl text-white font-bold bokor-regular">Remove if the sum of the domino is ...</h1>
        <input
          type="text"
          value={inputValue}  
          onChange={(e) => setInputValue(e.target.value)}  
          placeholder="Just type something already ..."
          className="w-1/2 h-10 text-black text-2xl text-center bokor-regular mx-auto"
        />
        <button
          className="px-4 py-2 text-3xl text-white font-bold rounded-lg bokor-regular hover:scale-110 transition-all"
          onClick={removeIfSumMatches}  
        >
          Remove that sh@t
        </button>
      </div>
    </div>
  );
}


