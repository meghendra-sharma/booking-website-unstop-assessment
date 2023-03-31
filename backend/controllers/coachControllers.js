const Coach = require('../models/coachModel')

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


module.exports = {getCoachDetails}