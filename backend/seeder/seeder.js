const connectDB = require('../config/db')
const Coach = require('../models/coachModel')
const dotenv = require('dotenv')


//configuring dotenv
dotenv.config()

//connecting to the database
connectDB()


const coachData = {
    totalSeats : 80 , 
    seatsPerRow : 7,
    seatsLastRow : 3,
    totalRows : 12,
    seatsBooked : 0,
    seatsAvailable : 80,
    seats : new Array(80).fill(false) //creating an array of length 80 and default value is false for every element

}


//inserting a document in a collection in database
const insertInitialData = async (data) => {
    try {
        const createdDocument = await Coach.create(data)
        console.log('Data Inserted Successfully..')
    } catch (error) {
        console.log('Something Went Wrong.. due to: ' + error.message)
    }
}


//seeding the data into the database
insertInitialData(coachData)




