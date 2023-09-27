import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import EventModal from "../modal/modal";
// import dayjs from "dayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import AddIcon from "@mui/icons-material/Add";

const Event = ({ theme }) => {
  // const username = useSelector((state) => state.auth.me.username);

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
          <Typography variant="h6">Day of Week</Typography>
          <Typography variant="h5">Date</Typography>
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
