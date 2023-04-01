const express = require('express')
const { getCoachDetails, bookSeats, clearCoachBookings } = require('../controllers/coachControllers')

//creating router 
const router = express.Router()

//@DEF - get the coach details
//@ACCESS - PUBLIC
//ROUTE - /api/coach/
router.route('/').get(getCoachDetails)

//@DEF - book the seats in the database
//@ACCESS - PUBLIC
//ROUTE - /api/coach/:id/book
router.route('/:_id/book').put(bookSeats)

//@DEF - clear the coach bookings
//@ACCESS - PUBLIC
//ROUTE - /api/coach/:_id/clear
router.route('/:_id/clear').put(clearCoachBookings)



module.exports = router