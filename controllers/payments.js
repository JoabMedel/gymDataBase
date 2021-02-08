const {Payments,Membership,Customers} =  require("../models");

//obtener lista de todos los pagos.
const allPayments = async(req,res) => {
    try{
        const results = await Payments.findAll({
            include: [Membership,Customers]
        });
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

const addPayment = async(req,res) => {
    datos = req.body
    try{
        const results = await Payments.create(datos);
        res.json(results);
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    allPayments,
    addPayment
}