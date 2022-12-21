export const Back = ({ isFlipped, setIsFlipped, photoData }) => {
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className="bg-blue-200 grid place-items-center drop-shadow-2xl w-[345px] h-[400px] rounded-lg cursor-pointer"
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src={photoData.url}
        alt=""
      />
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/60 rounded-lg"></div>
    </div>
  );
};
