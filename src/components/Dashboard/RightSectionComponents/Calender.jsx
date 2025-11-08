import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Calender() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar  sx={{
          "& .Mui-selected": {
              backgroundColor: "#922C88 !important",
              color: "#fff",
            }

        }}/>
      </LocalizationProvider>
    </div>
  );
}

export default Calender;
