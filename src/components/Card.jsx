import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Back } from "./Back";
import { Front } from "./Front";

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip
      flipSpeedBackToFront={1.5}
      flipSpeedFrontToBack={1.5}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <Front isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

      <Back isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
    </ReactCardFlip>
  );
};
