const mongoose = require('mongoose')

//creating Schema
const coachSchema = mongoose.Schema({
    totalSeats : {
        type : Number,
        default : 80,
        required : true
    } , 
    seatsPerRow : {
        type : Number,
        default : 7,
        required : true
    },
    seatsLastRow : {
        type : Number,
        default : 3,
        required : true
    },
    totalRows : {
        type : Number,
        default : 12,
        required : true
    },
    seatsBooked : {
        type : Number,
        default : 0,
        required : true
    },
    seatsAvailable : {
        type : Number,
        default : 80,
        required : true
    },
    seats : [{type : Boolean}]

})




//creating model
//model - Coach
//collection -- coaches
const Coach =  mongoose.model('Coach' , coachSchema)


//exporting model
module.exports = Coach