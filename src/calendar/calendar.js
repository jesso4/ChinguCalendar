import React from "react";
// import { useSelector } from "react-redux";
// import UserBoards from "../features/boards/AllUserBoards";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Calendar = ({ theme }) => {
  // const username = useSelector((state) => state.auth.me.username);

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
          <Typography variant="h5">Year</Typography>
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
            MON
          </Typography>
          <Typography variant="h6">MON</Typography>
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
            MON
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
        <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
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
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default Calendar;
