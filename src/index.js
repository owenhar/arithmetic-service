const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const { add, subtract, multiply, divide} = require("./arithmetica")

app.use(cors());

app.get('/', (req, res) => {
  res.send('Arithmetic service -- Hello World');
});

app.get('/add/:n/:m', (req,res) => { // Fills request from any path /add/n/m where n and m are numbers
  res.json(add(Number(req.params.n), Number(req.params.m))) // Adds n and m as numbers and returns them as json
})

app.get('/subtract/:n/:m', (req,res) => {
  res.json(subtract(Number(req.params.n), Number(req.params.m)));
})

app.get('/multiply/:n/:m', (req,res) => {
  res.json(multiply(Number(req.params.n), Number(req.params.m)));
})

app.get('/divide/:n/:m', (req,res) => {
  res.json(divide(Number(req.params.n), Number(req.params.m)));
})

app.listen(port);
