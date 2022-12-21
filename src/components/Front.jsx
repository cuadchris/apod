export const Front = ({ isFlipped, setIsFlipped, photoData }) => {
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className="grid place-items-center drop-shadow-2xl w-[345px] h-[400px] md:w-[600px] md:h-[600px] cursor-pointer rounded-lg "
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src={photoData.url}
        alt=""
      />
    </div>
  );
};
