export const Front = ({ isFlipped, setIsFlipped, photoData }) => {
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className="flex flex-col drop-shadow-2xl w-[345px] h-[400px] md:w-[600px] md:h-[600px] rounded-lg cursor-pointer"
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src={photoData.url}
        alt=""
      />
    </div>
  );
};
