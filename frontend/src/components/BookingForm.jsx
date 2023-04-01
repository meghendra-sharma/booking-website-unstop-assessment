import React , {useState} from 'react'

function BookingForm() {

    //local state
    const [noOfSeats , setNoOfSeats] = useState()

    //updating the local state when the input value changes
    function onChange(event){
        event.preventDefault()
        setNoOfSeats(event.target.value)
    }

    //submitting the form
    function onSubmit(event){
        event.preventDefault()
        console.log('book button clicked')
    }

  return (
    <div className='bg-white shadow p-2 rounded h-100'>
      <h6 className='text-center fw-bold'>May I help you?</h6>
      <hr className='my-0 w-75 mx-auto' />
      <form className='text-center my-3' onSubmit={onSubmit}>
      <div class="mb-3">
            <label for="noOfSeats" class="form-label fw-bold"><small>No of Seats?</small></label>
            <input onChange={onChange} value={noOfSeats} type="text" class="form-control text-center text-dark bg-secondary bg-opacity-25 rounded-0 opacity-50 fw-bold font-monospace w-75 mx-auto fs-6" id="noOfSeats" placeholder="Maximum 7"/>
            
    </div>
    <button type='submit' className='btn btn-primary rounded fw-bold w-50'><small>Book</small></button>
      </form>
    </div>
  )
}

export default BookingForm
