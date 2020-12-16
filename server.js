const express = require('express');
const path = require('path');

const app = express();

// 
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (_req , res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});