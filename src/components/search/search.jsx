import React from "react";
import Styles from "./searchStyle.js";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const Search = () => {
  // Date and time pickers
  const [value, setValue] = React.useState(dayjs());
  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  // Treatment times
  const [treatmentDuration, setTreatmentDuration] = React.useState("");
  const handleChange = (event) => {
    setTreatmentDuration(event.target.value);
  };

  return (
    <>
      <div style={Styles.generalContainerStyle}>
        <Box sx={Styles.generalStyle}>
          <ButtonGroup
            sx={Styles.buttonStyle}
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button sx={Styles.buttonStyle}>Massage</Button>
            <Button sx={Styles.buttonStyle}>Physio</Button>
            <Button sx={Styles.buttonStyle}>Chiro</Button>
            <Button sx={Styles.buttonStyle}>Dental hygienist</Button>
          </ButtonGroup>
        </Box>
        {/* Treatement time input */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            justifyContent: "center",
            marginBottom: "3.5%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={Styles.buttonStyle}
            id="outlined-basic"
            label="Address, postal code, or clinic..."
            variant="outlined"
          />
          {/* Date and time pickers */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              sx={Styles.generalDatePickerStyle}
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField sx={Styles.generalDatePickerStyle} {...params} />
              )}
            />
            <TimePicker
              sx={Styles.buttonStyle}
              label="Time"
              value={value}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField sx={Styles.generalDatePickerStyle} {...params} />
              )}
            />
          </LocalizationProvider>
          <FormControl sx={{ m: 1, minWidth: 120, display: "flex" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Select Treatment
            </InputLabel>
            <Select
              sx={Styles.generalTreatmentDurationStyle}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={treatmentDuration}
              label="Select Treatment"
              onChange={handleChange}
            >
              {/* When treatmentType == "massage" then display the following options */}
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"45 minutes"}>45 minutes</MenuItem>
              <MenuItem value={"60 minutes"}>60 minutes</MenuItem>
              <MenuItem value={"75 minutes"}>75 minutes</MenuItem>
              <MenuItem value={"90 minutes"}>90 minutes</MenuItem>
              <MenuItem value={"ICBC - 45 minutes"}>ICBC - 45 minutes</MenuItem>
              <MenuItem value={"ICBC - 60 minutes"}>ICBC - 60 minutes</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default Search;
