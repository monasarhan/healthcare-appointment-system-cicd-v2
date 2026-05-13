const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let appointments = [];

app.get("/", (req, res) => {
  res.send("Healthcare CI/CD API is running 🚀");
});

app.post("/appointments", (req, res) => {
  appointments.push(req.body);
  res.json({
    message: "Appointment created",
    data: req.body
  });
});

app.get("/appointments", (req, res) => {
  res.json(appointments);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

