import React from 'react'

function Stats({coachDetails}) {
  return (
    <div className='d-flex flex-column flex-sm-row justify-content-around'>
        <h6 className='fw-bold'>Total: <span className="badge bg-warning">{coachDetails.totalSeats}</span></h6>
        <h6 className='fw-bold'>Booked: <span className="badge bg-danger">{coachDetails.seatsBooked}</span></h6>
        <h6 className='fw-bold'>Available: <span className="badge bg-success">{coachDetails.seatsAvailable}</span></h6>
      </div>
  )
}

export default Stats
