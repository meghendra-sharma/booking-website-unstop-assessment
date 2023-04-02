const connectDB = require("./config/db");
const dotenv = require('dotenv')
const express = require('express');
const { errorHandler } = require("./middlewares/errorHandler");
var cors = require('cors')

//configuring dotenv to access environment variables
dotenv.config()

//connecting to the database
connectDB()


//creating express app
const app = express()

//server will parse the json object that comes with the request body
app.use(express.json())


//comment needs to be added
app.use(cors())

//Home route of the application
app.get('/' , (req,res) => {
    res.send('API is up and running..')
})


//adding router
//router - coach
app.use('/api/coach' , require('./routes/coachRoutes'))


//error handler
app.use(errorHandler)


//making server listen to a particular PORT
app.listen(process.env.PORT , () => {
    console.log('Server is running on port: ' + process.env.PORT)
} )

