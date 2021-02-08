const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const {Lessons,schedule} =  require("./models");
const PORT = process.env.PORT;
app.use(morgan("dev"));

//importaciond de las rutas.
//endPoints de clientes.
const Customers = require("./routes/customers");
const Payments =  require("./routes/payments");
const Memberships =  require("./routes/membership");

app.get('/', (req,res) => {
    res.send("Hola mundo");
});

//funcionando mis tablas cons sus respectivas peticones

//endpoints de Clinetes.
app.use(express.json());
app.use(Customers);
app.use(Payments);
app.use(Memberships);

app.get("/lessons/schedule", async(req,res) => {
    const results = await Lessons.findAll({
        include: [schedule]
    });

    res.json(results)
});

app.listen(PORT,() => {
    console.log("Corriendo en el puerto",PORT)
});