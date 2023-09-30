import React, {useState} from "react";
// import { useSelector } from "react-redux";
// import UserBoards from "../features/boards/AllUserBoards";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Calendar = (props) => {
  // const username = useSelector((state) => state.auth.me.username);
  // let year = props.year
  // let month = props.month

  const [month, setMonth] = useState(props.month)
  const [year, setYear] = useState(props.year)

  function getMonthShortName(monthNo) {
    const date = new Date();
    date.setMonth(monthNo - 1);
    return date.toLocaleString('en-US', { month: 'short' });
  }

  function increaseMonth(mo) {
    month == 12 ? setYear(year+1) : console.log("same year")
    setMonth(month+1)
  }

  function decreaseMonth(mo) {
    month == 1 ? setYear(year-1) : console.log("same year")
    setMonth(month-1)
  }

  const CustomCalendarHeader = (props) => {
    return (
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            margin: "2%",
          }}
        >
          <Typography variant="h4">eCalendar</Typography>
          <Typography variant="h5">{year}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
            margin: "2%",
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
          {getMonthShortName((month-1))}
          </Typography>
          <Typography variant="h6">{getMonthShortName(month)}</Typography>
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
          {getMonthShortName((month+1))}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          width: 3 / 5,
          bgcolor: "whitesmoke",
          justifyContent: 'center',
          alignItems: "center",
          padding: "5%",
          margin: "2%",
          marginRight: "1%",
        }}
      >
        <ArrowBackIosNewIcon onClick={decreaseMonth}></ArrowBackIosNewIcon>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={["year", "month", "day"]}
            showDaysOutsideCurrentMonth
            slots={{
              leftArrowIcon: "disable",
              rightArrowIcon: "disable",
              calendarHeader: CustomCalendarHeader,
            }}
            slotProps={{
              calendarHeader: {
                hidden: false,
              },
            }}
          />
          <ArrowForwardIosIcon onClick={increaseMonth}></ArrowForwardIosIcon>
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default Calendar;
