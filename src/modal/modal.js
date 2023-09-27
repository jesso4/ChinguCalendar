import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Box, Typography, Modal, TextField, Grid, Button } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import AddIcon from "@mui/icons-material/Add";

const EventModal = ({ theme }) => {
  // const username = useSelector((state) => state.auth.me.username);
  const [openModal, setOpenModal] = useState(false);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  console.log(
    `This is title: ${title}, startDate: ${startDate}, endDate: ${endDate}, startTime: ${startTime}, endTime: ${endTime}, people: ${people}, location: ${location}, and description: ${description}`
  );

  const createEvent = () => {

    setOpenModal(false)
    setTitle("")
    setStartDate("")
    setEndDate("")
    setStartTime("")
    setEndTime("")
    setPeople("")
    setLocation("")
    setDescription("")
  };

  return (
    <>
      <AddIcon fontSize="large" onClick={() => setOpenModal(true)} />
      {openModal ? (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box
            sx={{
              display: "block",
              margin: "5%",
              width: "60%",
              backgroundColor: "white",
              padding: "2%",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={3}>
                <Typography variant="subtitle1">Title:</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Event Title"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Start Date:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <DatePicker
                    label="Start Date"
                    value={null}
                    onChange={(newValue) => {
                      if (newValue) {
                        setStartDate(newValue.$d);
                      } else {
                        setStartDate(null);
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">End Date:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <DatePicker 
                                      label="End Date"
                                      value={null}
                                      onChange={(newValue) => {
                                        if (newValue) {
                                          setEndDate(newValue.$d);
                                        } else {
                                          setEndDate(null);
                                        }
                                      }}/>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Begins:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <TimePicker />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Ends:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <TimePicker />
                </Grid>
              </LocalizationProvider>
              <Grid item xs={3}>
                <Typography variant="subtitle1">People:</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  id="people"
                  onChange={(e) => setPeople(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Location:</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  id="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Description:</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Button variant="contained" onClick={createEvent}>Add Event</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      ) : null}
    </>
  );
};

export default EventModal;
