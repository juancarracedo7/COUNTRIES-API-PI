const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const {getAllDbInfo, getCountries} = require('../../controllers/Country')
// const {activityCreator} = require('../../controllers/Activity')
// const {Country, Activity} = require('../db')

const countriesRouter = require('./countries.js');
const activitiesRouter = require('./activity.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);
router.use('/activity', activitiesRouter);
//  router.get('/countries', async (req, res) => {
//      try{
//         let allCountries = await getAllDbInfo();
//         if(allCountries.length === 0){
//             await getCountries();
//         }
//     const { name } = req.query; // destructuro nombre de req.query
//     allCountries = await getAllDbInfo(); // 
//     if (name) {
//       // si tengo nombre por query
//       let countryName = await allCountries.filter((e) =>
//         e.name.toLowerCase().includes(name.toLowerCase())
//       ); // pongo includes por si algun personaje tiene 2 nombres
//       if (countryName.length) {
//         // si encontro nombre
//         res.status(200).send(countryName); // devuelvo el nombre del pais
//       } else {
//         res.status(404).send("No se encontro el nombre del Pais"); // si no encontro no duelvo
//       }
//     } else {
//       res.status(200).send(allCountries); // si no me lo pasan por query devuelvo todos los paises
//     }} catch (error){
//       console.log(error)
//     }
//  })

//  router.get("/countries/:id", async (req, res) => {
//     //misma logica que arriba
//     const { id } = req.params;
//   //   console.log(req.params)
//     const allCountries = await getAllDbInfo();
    
//     if (id) {
//         try{
//       let countryId = await allCountries.filter((e) => e.id.toLowerCase() == id.toLowerCase());
//       if (countryId.length) {
//         res.status(200).send(countryId);
//       } else {
//         res.status(404).send("No se encontro el id del Pais");
//       }} catch(error){
//           console.log(error)
//       }
//     }
//   });


// router.post('/activity', async (req,res,next) => {
//     try{
//         let {name, description, difficulty, duration, season, countries} = req.body;
//         activityCreator(name, description, difficulty, duration, season, countries);
//         res.send('Actividad created succesfully');
//     } catch (error) {
//         next(error);
//     }
// })

// router.get("/activity", async (req, res, next) => {
//     try {
//         const activities = await Activity.findAll({
//             include: Country
//         });
//         return res.json(activities)
//     } catch (err) {
//         return next(err);
//     }
// });



  

module.exports = router;
