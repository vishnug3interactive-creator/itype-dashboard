import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { Typography,Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../../features/child/SelectedDateSlice";
import { apiService } from "../../services/apiService";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Calender() {

  const [selectedDateLocal, setSelectedDateLocal] = useState(dayjs());
  const[fetchedDate,setFetchedDate]=useState([])
  const dispatch = useDispatch();

  const handleChangeDate = (newvalue) => {
    setSelectedDateLocal(newvalue);
    dispatch(setSelectedDate(newvalue));
  };

  const selectedId = useSelector((state) => state.selectedStudent.selectedId);

  const getActivityDates = async () => {
    try {
      const formattedDate = dayjs(selectedDateLocal).format("YYYY-MM-DD");
      const result = await apiService.get(
        `get-activity-dates/${selectedId}?date=${formattedDate}`
      );
      
      if (result.success) {
        setFetchedDate(result.data);
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


useEffect(() => {
  if (selectedId) {
    getActivityDates();
  }
}, [selectedDateLocal,selectedId]); 

  const ServerDay = (props) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const formattedDay = day.format("YYYY-MM-DD");
    
    const hasActivity = fetchedDate?.data?.includes(formattedDay);

    return (
      <Badge
        key={day.toString()}
        overlap="circular"
     
        badgeContent={
          hasActivity ? (
            <CheckCircleIcon
              sx={{
                position:'absolute',
                fontSize: 10,
                color: "#4caf50",
                backgroundColor: "white",
                borderRadius: "50%",
                right:'85%',
                bottom:-20
              }}
            />
          ) : undefined
        }
     
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  };

 
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDateLocal}
          onChange={handleChangeDate}
           slots={{
            day: ServerDay,
          }}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#922C88 !important",
              color: "#fff",
            },
          }}
        />
      </LocalizationProvider>

    </div>
  );
}

export default Calender;


