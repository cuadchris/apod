
export const Back = ({isFlipped, setIsFlipped}) => {
  return (
    <div
    onClick={() => {
      setIsFlipped(!isFlipped);
    }}
    className="bg-blue-400 grid place-items-center drop-shadow-2xl w-[345px] h-[400px]"
  >
    This is the back of the card.
  </div>
  )
}
