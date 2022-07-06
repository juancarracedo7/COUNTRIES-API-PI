const { Country, Activity } = require("../src/db");

const activityCreator = async (req, res) => {
//   console.log(name, description, difficulty, duration, season, countries);
let {name, description, difficulty, duration, season, countries} = req.body;
console.log('paises',countries)
  let activityCreated = await Activity.create({
    name,
    description,
    difficulty,
    duration,
    season,
  });
  let countriesDb = await Country.findAll({
    where: { name: countries },
  });
  
  activityCreated.addCountry(countriesDb);
  res.send('Activity Created')
};

const getActivity =  async (req, res, next) => {
    try {
        const activities = await Activity.findAll({
            include: Country
        });
        console.log('activities db' ,activities)
        return res.json(activities)
    } catch (error) {
        return next(error);
    }
}

const deleteActivity = async(req,res)=>{
  let {id}=req.params
  await Activity.destroy({
    where: {
     id: id
    }
   }).then(e => {
    if (!e) {
     return res.status(400).send('Not found');
    }
    res.status(200).send('Eliminated');
   });
}



module.exports = {
  activityCreator,
  getActivity,
  deleteActivity
};
