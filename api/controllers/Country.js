const axios = require('axios')
const {Activity, Country} = require('../src/db')
 
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

const getCountries = async () => {
    try {
        const apiUrl= await axios.get(' https://restcountries.com/v3/all')
        const apiData= await apiUrl.data.map(e => {
            // console.log('info de la api',apiData.data)
            return {
              id: e.cca3,
              name: removeAccents(e.translations.spa.common),
              flags: e.flags[0],
              continents: e.continents[0],
              capital: e.capital ? e.capital[0] : "No capital",
              subregion: e.subregion,
              area: e.area,
              population: e.population,
            };
        })
       await Country.bulkCreate(apiData);
    
    } catch (error) {
        console.log(error)
    }
}

const getAllDbInfo = async () => {
    const dbInfo = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'id'],
            through: {
                attributes: [],
            }
        }
    })
    // console.log('hola',dbInfo);
    return dbInfo;
};






module.exports = { getAllDbInfo, getCountries}