import React , {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { bookSeats, reset } from '../features/booking/bookingSlice'
import { getCoachDetails } from '../features/coach/coachSlice'
import Message from '../components/Message'
import Spinner from './Spinner'
import BookingSuccessfull from './BookingSuccessfull'

function BookingForm() {

    //local state
    const [noOfSeats , setNoOfSeats] = useState()
    const [isValid , setValid] = useState(true)

    //destructuring global state -- booking
    const {loading , seatNumbers , success , error , message} = useSelector(state => state.booking)

    //initializing dispatch
    const dispatch = useDispatch()

    //updating the local state when the input value changes
    function onChange(event){
        event.preventDefault()
        setNoOfSeats(event.target.value)
    }

    //submitting the form
    function onSubmit(event){
        event.preventDefault()

        dispatch(reset())
        setValid(true)
        if(Number(noOfSeats) >= 1 && Number(noOfSeats) <= 7){
          //setValid(true)
          dispatch(bookSeats(Number(noOfSeats)))
          //dispatch(getCoachDetails())
        }
        else{
          setValid(false)
        }

        
        
    }

  return (
    <div className='bg-white shadow p-2 rounded h-100'>
      <h6 className='text-center fw-bold'>May I help you?</h6>
      <hr className='my-0 w-75 mx-auto' />
      <form className='text-center my-3' onSubmit={onSubmit}>
      <div className="mb-3">
            <label htmlFor="noOfSeats" className="form-label fw-bold"><small>No of Seats?</small></label>
            <input autoComplete='off' onChange={onChange} value={noOfSeats} type="text" className="form-control text-center text-dark bg-secondary bg-opacity-25 rounded-0 opacity-50 fw-bold font-monospace w-75 mx-auto fs-6" id="noOfSeats" placeholder="Maximum 7" required/>
            
    </div>
    <button type='submit' className='btn btn-primary rounded fw-bold w-50'>{loading ? <Spinner/> : <small>Book</small>}</button>
      </form>
      {!isValid && <div className='w-75 mx-auto h-auto'><Message type = 'danger' message='Invalid Input'/></div>}
      {error && <div className='w-75 mx-auto h-auto'> <Message type = 'danger' message={message}/> </div>}
      {success && <div className='w-75 mx-auto h-auto'> <BookingSuccessfull seatNumbers={seatNumbers}/> </div>}


    </div>
  )
}

export default BookingForm
