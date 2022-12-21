export const Front = ({isFlipped, setIsFlipped}) => {
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className="bg-red-400 grid place-items-center drop-shadow-2xl w-[345px] h-[400px] cursor-pointer rounded-lg "
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src="https://starwalk.space/gallery/images/mars-the-ultimate-guide/1140x641.jpg"
        alt=""
      />
    </div>
  );
};
