import React, { useState } from "react";
// import { useSelector } from "react-redux";
import Calendar from "./calendar/calendar";
import Agenda from "./Agenda/agenda";
import { Box } from "@mui/material";

const App = ({ theme }) => {
  // const username = useSelector((state) => state.auth.me.username);

  const todaysDate = new Date();
  const [date, setDate] = useState(todaysDate);
  const [day, setDay] = useState(todaysDate.getDate());
  const [month, setMonth] = useState(todaysDate.getMonth() + 1);
  const [year, setYear] = useState(todaysDate.getFullYear());

  // let day = todaysDate.getDate();
  // let month = todaysDate.getMonth() + 1;
  // let year = todaysDate.getFullYear();
  console.log(`day ${day} month ${month} year ${year}`);

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
        <Calendar day={day} month={month} year={year}></Calendar>
        <Agenda date={date} day={day} month={month}></Agenda>
      </Box>
    </>
  );
};

export default App;
