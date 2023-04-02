import React from 'react'

function BookingSuccessfull({seatNumbers}) {
  return (
    <div className={'alert alert-success text-center p-1 rounded-0'} role="alert">
        <p className='my-0 font-monospace fw-bold'>Booking SuccessFull</p>
        <hr className='w-75 my-0 mx-auto' />
        <p className='fw-bold'><small>Ticket Numbers: {seatNumbers.map((item) => {
            return <span>{item} </span>
        })}</small></p>
    </div>
  )
}

export default BookingSuccessfull
