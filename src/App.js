import "./App.css";
import { Picker } from "./components/Picker";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import moment from "moment/moment";

function App() {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [photoData, setPhotoData] = useState({});

  const getTodayPhoto = async () => {
    const params = new URLSearchParams({
      date: date,
      api_key: process.env.REACT_APP_API_KEY,
    });

    const URL = process.env.REACT_APP_URL + params;

    const response = await fetch(`${URL}`);
    const data = await response.json();
    setPhotoData({ ...data });
  };

  useEffect(() => {
    getTodayPhoto();
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
          />
        </div>
        <div>
          <Card photoData={photoData} />
        </div>
      </div>
    </>
  );
}

export default App;
