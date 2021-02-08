const express = require("express");
const router =  express.Router();
//importamos los controllers necesarios para cada endpoint
const {registerCsutomers,findCustomer,addCustomer} = require("../controllers/customers")

//peticiones de mis endpoint
router.get("/customers",registerCsutomers);
router.get("/customers/:id",findCustomer);
router.post("/customer",addCustomer);

//para poder exportar mis rutas.
module.exports = router;