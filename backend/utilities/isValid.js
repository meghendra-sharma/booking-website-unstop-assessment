

//validating
//return false - if no of seats to be booked is 0 or greater than the available seats
const isValid = (noOfSeats , coachDetails) => {
    // if(noOfSeats === 0 || noOfSeats > 7){
    //     return {isValid : false , message : 'Invalid Input'}
    // }
    if(!(Number(noOfSeats) >= 1 && Number(noOfSeats) <= 7)){
        return {isValid : false , message : 'Invalid Input'}
    }
    else if(Number(noOfSeats) > coachDetails.seatsAvailable){
        return {isValid : false , message : 'Seats are not available'}
    }
    return {isValid : true}
}



module.exports = isValid