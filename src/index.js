require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const { add, subtract, multiply, divide} = require("./arithmetica")

app.use(cors());

if (!process.env.PORT) {
  throw new Error("No http port specificied, please specify this in the ENV variables");
}

const port = process.env.PORT;

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
