import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export const Picker = ({ value, setValue }) => {
  return (
    <>
    
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        disableFuture = {true}
        minDate = "06/16/1995"
        label="Pick a date."
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
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
