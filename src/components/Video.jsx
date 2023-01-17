const Video = ({ youtubeUrl }) => {
  return (
    <iframe
      allowFullScreen
      src={youtubeUrl}
      title="video"
      className="w-[345px] h-[400px] md:w-[600px] md:h-[600px]"
    />
  );
};
export default Video;
