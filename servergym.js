const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(morgan("dev"));

app.get('/', (req,res) => {
    res.send("Hola mundo");
});

app.listen(PORT,() => {
    console.log("Corriendo en el puerto",PORT)
});