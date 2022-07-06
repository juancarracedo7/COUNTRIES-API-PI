const { Router } = require('express');
const {activityCreator, getActivity, deleteActivity} = require('../../controllers/Activity')



const router = Router();


router.post('/', activityCreator)

router.get("/", getActivity);

router.delete('/:id', deleteActivity)



module.exports = router;