import { Bokor } from 'next/font/google';

// Import the Bokor font with configuration
const bokorrin = Bokor({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bokor',
});

interface DominoCardProps {
  numbers: [number, number]; 
}

export function DominoCard({ numbers }: DominoCardProps) {
  return (
    <div
      className={`${bokorrin.variable} flex flex-col justify-center items-center p-4 text-white font-bold text-3xl rounded-lg shadow-xl transform hover:scale-110 transition-all border-2 border-white`}
      style={{
        backgroundColor: "blue",
        width: '100px',
        height: '150px',
      }}
    >
      <div className="mb-1 bokor-regular">{numbers[0]}</div> {/* Top number */}
      <hr className="my-2 w-full" />
      <div className="mt-3 bokor-regular">{numbers[1]}</div> {/* Bottom number */}
    </div>
  );
}

  
  