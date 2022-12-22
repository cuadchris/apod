export const Back = ({ isFlipped, setIsFlipped, photoData }) => {
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
      {/* overlay */}
      <div className="flex flex-col justify-evenly p-1 place-items-center absolute top-0 left-0 w-full h-full bg-black/80 rounded-lg text-white">
        <h1 className="text-lg">{photoData.title}</h1>
        <p>{photoData.copyright}</p>
        <p>{photoData.date}</p>
      </div>
    </div>
  );
};
