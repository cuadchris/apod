import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export const Picker = ({ date, setDate }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          disableFuture={true}
          minDate="06/16/1995"
          label="Pick a date."
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              sx={{ input: { color: "black", background: "white" } }}
              {...params}
              helperText={params?.inputProps?.placeholder}
            />
          )}
        />
      </LocalizationProvider>
      <div className="flex justify-between p-1">
        <button className="bg-blue-500 rounded-md p-1.5">Search</button>
        <button className="bg-red-500 rounded-md p-1.5">Clear</button>
      </div>
    </>
  );
};
