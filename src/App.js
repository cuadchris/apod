import "./App.css";
import { Picker } from "./components/Picker";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import moment from "moment/moment";
import Spinner from "./components/Spinner";
import Video from "./components/Video";

function App() {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [photoData, setPhotoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState(null);

  const getTodayPhoto = async () => {
    setIsLoading(true);
    // const params = new URLSearchParams({
    //   date: date,
    //   api_key: process.env.REACT_APP_API_KEY,
    // });

    // const URL = process.env.REACT_APP_URL + params;

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`
    );
    const data = await response.json();
    if (data.media_type === "video") {
      setYoutubeUrl(data.url);
      setIsLoading(false);
    } else {
      setYoutubeUrl(null);
      setPhotoData({ ...data });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodayPhoto();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row place-items-center justify-evenly p-5 gap-8">
        <div>
          <Picker
            date={date}
            setDate={setDate}
            setPhotoData={setPhotoData}
            photoData={photoData}
            setIsLoading={setIsLoading}
            setYoutubeUrl={setYoutubeUrl}
          />
        </div>
        <div>
          {isLoading ? (
            <Spinner />
          ) : youtubeUrl ? (
            <Video youtubeUrl={youtubeUrl} />
          ) : (
            <Card photoData={photoData} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
