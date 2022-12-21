import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip
      flipSpeedBackToFront={1.5}
      flipSpeedFrontToBack={1.5}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div className="bg-red-400 grid place-items-center drop-shadow-2xl w-[345px] h-[345px]">
        This is the front of the card.
        <button
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          Click to flip
        </button>
      </div>

      <div className="bg-blue-400 grid place-items-center drop-shadow-2xl w-[345px] h-[345px]">
        This is the back of the card.
        <button
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          Click to flip
        </button>
      </div>
    </ReactCardFlip>
  );
};
