const express = require('express');
const app = express();

// Home page route
app.get('/', (req, res) => {
  res.send('<a href="/98">99 Bottles of milk on the wall</a>');
});

// Route for a specific number of bottles
app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);

  if (numberOfBottles === 0) {
    res.send('No more bottles of milk on the wall. <a href="/">Start over</a>');
  } else {
    const nextNumber = numberOfBottles - 1;
    const message = `${numberOfBottles} Bottles of milk on the wall. <a href="/${nextNumber}">Take one down, pass it around</a>`;
    res.send(message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});