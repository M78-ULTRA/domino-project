
import { DominoCard } from '../domino-card';

interface DominoContainerProps {
  dominoNumbers: [number, number][]; 
}

export function DominoContainer({ dominoNumbers }: DominoContainerProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {dominoNumbers.map((numbers, index) => (
        <DominoCard key={index} numbers={numbers} />
      ))}
    </div>
  );
}


