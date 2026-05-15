const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// بيانات مؤقتة (in-memory database)
let appointments = [];

// Test route
app.get("/", (req, res) => {
  res.send("Healthcare Appointment System API is running 🚀");
});

// Create appointment
app.post("/appointments", (req, res) => {
  const appointment = req.body;

  if (!appointment) {
    return res.status(400).json({ message: "Invalid data" });
  }

  appointments.push(appointment);

  res.json({
    message: "Appointment created successfully",
    data: appointment
  });
});

// Get all appointments
app.get("/appointments", (req, res) => {
  res.json({
    count: appointments.length,
    data: appointments
  });
});

// Delete all appointments (optional for testing)
app.delete("/appointments", (req, res) => {
  appointments = [];
  res.json({ message: "All appointments deleted" });
});

// Server port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("CI/CD demo triggered");
