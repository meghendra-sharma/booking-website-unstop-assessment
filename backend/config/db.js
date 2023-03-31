const mongoose = require('mongoose')



const connectDB = async () => {
    try {
        //connecting to the database..
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connection Succesfull at: ' + conn.connection.host)
    } catch (error) {
        console.log('Connection Unsuccessfull due to: ' + error.message)
    }
}

module.exports = connectDB