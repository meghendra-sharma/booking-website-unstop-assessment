const express = require('express')
const { getCoachDetails } = require('../controllers/coachControllers')

//creating router 
const router = express.Router()

//@DEF - get the coach details
//@ACCESS - PUBLIC
//ROUTE - /api/coach/
router.route('/').get(getCoachDetails)



module.exports = router