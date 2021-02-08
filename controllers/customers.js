const {Customers,Payments} = require("../models");

//obtner clientes registrados con pagos realizados.
const registerCsutomers = async(req,res) => {
    try{
        const results = await Customers.findAll({
            include:[Payments]
        });
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

//obtner cliente por id
const findCustomer = async(req,res) => {
    try{
        const results = await Customers.findOne({where: {id: req.params.id}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

//Agregar cliente
const addCustomer = async(req,res) => {
    const datos = req.body
    try{
        const results = await Customers.create(datos);
        res.json(results);
    }catch(error){
        console.log(error)
    }
}



module.exports = { 
    registerCsutomers,
    findCustomer,
    addCustomer,
}