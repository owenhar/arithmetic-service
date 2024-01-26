const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Arithmetic service -- Hello World');
});

app.get('/add/:n/:m', (req,res) => { // Fills request from any path /add/n/m where n and m are numbers
  res.json(Number(req.params.n) + Number(req.params.m)); // Adds n and m as numbers and returns them as json.
})

app.listen(port);
