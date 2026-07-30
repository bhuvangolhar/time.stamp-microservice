const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS so freeCodeCamp tests can access your API
app.use(cors({ optionsSuccessStatus: 200 }));

// Basic landing route
app.get('/', (req, res) => {
  res.send('Timestamp Microservice is running!');
});

// Endpoint 1: Empty date parameter returns current time
app.get('/api', (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});

// Endpoint 2: Date parameter provided
app.get('/api/:date', (req, res) => {
  const { date } = req.params;

  let dateObject;

  // Check if input is a pure numeric string (UNIX timestamp in milliseconds)
  if (/^\d+$/.test(date)) {
    dateObject = new Date(parseInt(date, 10));
  } else {
    // Otherwise, treat it as a standard date string
    dateObject = new Date(date);
  }

  // Handle invalid dates
  if (isNaN(dateObject.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  // Return valid response
  res.json({
    unix: dateObject.getTime(),
    utc: dateObject.toUTCString()
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});