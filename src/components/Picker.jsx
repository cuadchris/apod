import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export const Picker = ({ value, setValue }) => {
  return (
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
  );
};
