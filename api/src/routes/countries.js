const { Router } = require('express');
const {getAllDbInfo, getCountries} = require('../../controllers/Country')
const {Country, Activity} = require('../db')


const router = Router();

router.get('/', async (req, res,) => {
    try{
       let allCountries = await getAllDbInfo();
       if(allCountries.length === 0){   //si no tengo nada en db ejecutame la info de la api
           await getCountries();
       }
   const { name } = req.query; // destructuro nombre de req.query
   allCountries = await getAllDbInfo(); // 
   if (name) {
     // si tengo nombre por query

     let countryName = await allCountries.filter((e) =>
       e.name.toLowerCase().includes(name.toLowerCase())
     ); 
     if (countryName.length) {
       // si encontro nombre
       res.status(200).send(countryName); // devuelvo el nombre del pais
     } else {
       res.status(404).send("No se encontro el nombre del Pais"); // si no encontro no duelvo
     }
   } else {
     res.status(200).send(allCountries); // si no me lo pasan por query devuelvo todos los paises
   }} catch (error){
     console.log(error)
   }
})

router.get("/:id", async (req, res) => {
   //misma logica que arriba
   const { id } = req.params;
 //   console.log(req.params)
   const allCountries = await getAllDbInfo();
   
   if (id) {
       try{
     let countryId = await allCountries.filter((e) => e.id.toLowerCase() == id.toLowerCase());
     if (countryId.length) {
       res.status(200).send(countryId);
     } else {
       res.status(404).send("No se encontro el id del Pais");
     }} catch(error){
         console.log(error)
     }
   }
 });

module.exports = router;