const Coach = require('../models/coachModel')
const isValid = require('../utilities/isValid')
const {bookSeats : bookSeatsUtility}  = require('../utilities/booking')


//@CONTROLLER
//@DEF - get the details of the coach from the database
const getCoachDetails = async (req,res , next) => {
    

    try {

        //searching in the database
        const data = await Coach.find()
        const coach = data[0]

        //setting the status of resposne
        res.status(200)

        //sending json data in response that we got from the database
        res.json(coach)

        

        
    } catch (error) {

        //setting the status of resposne
        res.status(401)


        //calling error handler
        next(error)
    }
}


//@CONTROLLER
//@DEF - accepts a number and book seats in the database
const bookSeats = async(req,res,next) => {

    //getting data from the request body
    const {noOfSeats} = req.body


    

    //getting data from the request URL
    //getting the id of the coach
    const {_id} = req.params 

    try {
        const coachDetails = await Coach.findById(_id)
        //const coachDetails = data[0]

        //validating the input
        if(isValid(noOfSeats , coachDetails).isValid){

            //booking seats and getting seat numbers
            const bookedSeats = bookSeatsUtility(Number(noOfSeats) , coachDetails)

            bookedSeats.map((item) => {
                coachDetails.seats[item-1] = true
            })

            //updating in the database
            const updatedCoachData = await Coach.findByIdAndUpdate(_id , 
                {
                seats : coachDetails.seats,
                seatsBooked : coachDetails.seatsBooked + (Number(noOfSeats)),
                seatsAvailable : coachDetails.seatsAvailable - (Number(noOfSeats)),
                
            } )

            //sending booked seat numbers in response
            res.status(201)
            res.json({message : 'Success' , seatNumbers : bookedSeats})
        } 
        else{
            const message = isValid(noOfSeats , coachDetails).message
            throw Error(message)
        }

    } catch (error) {
        res.status(401)
        next(error)
    }
    
    
}


//@CONTROLLER
//@DEF - reset the coach data in the database
const clearCoachBookings = async(req,res,next) => {

    //getting data from the request URL
    const {_id} = req.params

    //initial data of the coach
    const coachData = {
        totalSeats : 80 , 
        seatsPerRow : 7,
        seatsLastRow : 3,
        totalRows : 12,
        seatsBooked : 0,
        seatsAvailable : 80,
        seats : new Array(80).fill(false) //creating an array of length 80 and default value is false for every element
    
    }

    try {
        await Coach.findByIdAndUpdate(_id , coachData)
        res.status(201)
        res.json({message : 'Success'})
    } catch (error) {
        res.status(500)
        next(error)
    }

}


module.exports = {getCoachDetails , bookSeats , clearCoachBookings}