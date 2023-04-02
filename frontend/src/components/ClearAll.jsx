import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCoachDetails } from '../features/coach/coachSlice'



function ClearAll() {

    //initializing dispatch
    const dispatch = useDispatch()

    //resetting all the data in the database
    function onClick(){
        dispatch(clearCoachDetails())
    }
  return (
    <div className='text-center my-3'>
      <button onClick={onClick} className='btn btn-warning btn-lg text-white fw-bold'>Clear All Bookings</button>
    </div>
  )
}

export default ClearAll
