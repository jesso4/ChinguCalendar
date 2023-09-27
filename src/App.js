import React from "react";
// import { useSelector } from "react-redux";
import Calendar from "./calendar/calendar";
import Event from "./event/event";
import { Box } from "@mui/material";

const App = ({ theme }) => {
  // const username = useSelector((state) => state.auth.me.username);
  console.log(`I'm gonna figure it out:`);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          alignItems: "stretch",
        }}
      >
        <Calendar></Calendar>
        <Event></Event>
      </Box>
    </>
  );
};

export default App;
