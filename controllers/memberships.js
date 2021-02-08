const {Membership} =  require("../models");

//todas las membresias existentes
const allMemberships =  async (req,res) => {
    try{
        const results = await Membership.findAll();
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

//membresias en especifico por id
const findMembership = async(req,res) => {
    try{
        const results =  await Membership.findOne({where: {id: req.params.id}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

//agregar membresia.
const addMembership = async(req,res) => {
    const datos = req.body;
    try{
        const results = await Membership.create(datos);
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    allMemberships,
    findMembership,
    addMembership
}