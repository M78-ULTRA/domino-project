import React from 'react';
import DominoCard from "../domino-card"; 

interface DominoContainerProps {
  dominoNumbers: [number, number][]; 
}

const DominoContainer: React.FC<DominoContainerProps> = ({ dominoNumbers }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {dominoNumbers.map((numbers, index) => (
        <DominoCard key={index} numbers={numbers} />
      ))}
    </div>
  );
}

export default DominoContainer;



