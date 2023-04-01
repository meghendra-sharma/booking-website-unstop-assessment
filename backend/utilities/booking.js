

const bookSeats = (noOfSeats , coachDetails) => {

    //trying to book consecutive seats in a row
    var bookedSeatNumbers = bookConsecutiveInRow(noOfSeats , coachDetails)
    if(bookedSeatNumbers){       
        return bookedSeatNumbers
    }

    //now trying to book nearby seats because booking in one row is not possible
    bookedSeatNumbers = bookNearby(noOfSeats , coachDetails)   
    return bookedSeatNumbers
    

}


//checking if the booking can be made in single row
const bookConsecutiveInRow = (noOfSeats , coachDetails) => {

    //checking no. of consecutive seats in last row having 3 seats

    //destructuring
    const {seats , totalSeats , seatsLastRow , totalRows , seatsPerRow} = coachDetails

    //initialization
    var i = totalSeats - seatsLastRow , noOfConsecutive = 0 , startingSeat = -1


    //iterating in the last row to find consecutive available seats
    while(noOfConsecutive < noOfSeats && i < totalSeats){
        if(seats[i] == false){
            if(noOfConsecutive == 0){
                startingSeat = i
            }
            noOfConsecutive++
        }
        else{
            noOfConsecutive = 0
            startingSeat = -1
        }
        i++
    }

    //found consecutive seats in last row
    //returning booked seats numbers
    if(noOfConsecutive == noOfSeats){
        return getBookedSeatsNumbers(startingSeat , noOfSeats)
    }

    //checking consecutive seats available in the remaining rows starting from the first row
    i=0
    var j = 0
    
    for(i=0 ; i < totalRows - 1 ; i++){
        noOfConsecutive = 0
        startingSeat = -1
        for(j=0 ; noOfConsecutive < noOfSeats && j<seatsPerRow ; j++){
            if(seats[7*i + j] == false){
                if(noOfConsecutive == 0){
                    startingSeat = 7*i + j
                }
                noOfConsecutive++
            }
            else{
                noOfConsecutive = 0
                startingSeat = -1
            }
        }

        //found consecutive seats
        if(noOfConsecutive == noOfSeats){
            return getBookedSeatsNumbers(startingSeat , noOfSeats)
        }

    }


    //no row has consecutive seats required
    return null

}

//booking nearby seat numbers 
const bookNearby = (noOfSeats , coachDetails) => {
        //destructuring
        const {seats , totalSeats} = coachDetails

        var k = 0 ,  noOfBookedSeats = 0
        const bookedSeatNumbers = new Array(noOfSeats)
    
        for(i=0 ; noOfBookedSeats < noOfSeats && i < totalSeats ; i++){
            if(seats[i] == false){
                noOfBookedSeats++
                bookedSeatNumbers[k] = i+1
                k++
            }
        }
    
        return bookedSeatNumbers
}

//returning an array of consecutive seat numbers that has been booked
const getBookedSeatsNumbers = (startingSeat , noOfSeats) => {
    
    startingSeat++
    const arr = new Array(noOfSeats)
    for(i=0 ; i < noOfSeats ; i++){
        
        arr[i] = startingSeat
        startingSeat++

    }
    return arr
}






module.exports = { bookSeats }


