import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import EventModal from "../modal/modal";
// import dayjs from "dayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import AddIcon from "@mui/icons-material/Add";

const Event = (props) => {
  // const username = useSelector((state) => state.auth.me.username);
  let date = props.date
  let day = props.day
  let month = props.month

  function getMonthLongName(monthNo) {
    const date = new Date();
    date.setMonth(monthNo - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  }

 
  function getDayLongName(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = date.getDay();
 

    return days[day]

    }



  return (
    <>
      <Box
        sx={{
          width: 2 / 5,
          bgcolor: "lightgray",
          justifyContent: "center",
          alignItems: "stretch",
          padding: "5%",
          margin: "2%",
          marginLeft: "1%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="subtitle2">SIGN IN</Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            justifyContent: "flex-start",
            paddingBottom: "5%",
          }}
        >
          <Typography variant="h6">{getDayLongName(date)}</Typography>
          <Typography variant="h5">{getMonthLongName(month)} {day}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "stretch",
            height: "70%",
            paddingBottom: "5%",
          }}
        >
          <Box
            sx={{
              width: "1%",
              borderLeft: 1,
              borderColor: "black",
              paddingRight: "5%",
            }}
          ></Box>
          <Box
            sx={{
              paddingLeft: "5%",
              paddingRight: "5%",
              marginLeft: "5%",
              backgroundColor: "darkgray",
              width: "100%",
            }}
          >
            List of events
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <EventModal></EventModal>
          {/* <AddIcon fontSize="large" onClick={() => setOpenModal(true)}/> */}
        </Box>
      </Box>
    </>
  );
};

export default Event;
