import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import moment from "moment/moment";
import { TextField } from "@mui/material";

export const Picker = ({ date, setDate, setPhotoData, setIsLoading }) => {
  const searchPhoto = async () => {
    setIsLoading(true);
    const params = new URLSearchParams({
      date: date,
      api_key: process.env.REACT_APP_API_KEY,
    });

    const URL = process.env.REACT_APP_URL + params;

    const response = await fetch(`${URL}`);
    const data = await response.json();
    setPhotoData({ ...data });
    setIsLoading(false);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          disableFuture={true}
          minDate="06/16/1995"
          value={date}
          onChange={(newValue) => {
            setDate(moment(newValue).format("YYYY-MM-DD"));
          }}
          renderInput={(params) => (
            <TextField
              sx={{ input: { color: "black", background: "white" } }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
      <div className="flex justify-center p-1">
        <button onClick={searchPhoto} className="bg-blue-500 rounded-md p-2">
          Find Photo
        </button>
      </div>
    </>
  );
};
