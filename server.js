const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Hello FreeCodeCamp!");
});

// Timestamp API
app.get("/api/:date?", (req, res) => {
  let dateString = req.params.date;
  let date;

  // If no date is provided, use current date
  if (!dateString) {
    date = new Date();
  } else {
    // If the string is purely digits, treat it as a timestamp
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // Handle invalid date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Respond with unix and utc format
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
