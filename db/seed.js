const db = require("./db");
const Event = require("./models/events");

const seed = async () => {
  await db.sync({ force: true });

  const breakfast = await Event.create({
    title: "Breakfast Date",
    startDate: "2023-09-28",
    endDate: "2023-09-28",
    startTime: "09:00:00",
    endTime: "10:00:00",
    people: "Kevin, Eric",
    location: "Suburban Diner",
    description: "meeting up with the cousins",
  });
  const interview = await Event.create({
    title: "Interview XYZ Corp",
    startDate: "2023-09-29",
    endDate: "2023-09-29",
    startTime: "11:00:00",
    endTime: "12:00:00",
    people: "Ms. Jane Smith - hiring manager",
    location: "virtual",
  });
  const doctor = await Event.create({
    title: "Check-up",
    startDate: "2023-09-30",
    endDate: "2023-09-30",
    startTime: "13:00:00",
    endTime: "14:00:00",
    people: "Dr. Kelly Brown",
    location: "Optum Health",
  });

  db.close();
  console.log(`

    Seeding successful!

  `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
