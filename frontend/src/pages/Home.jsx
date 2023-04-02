import React , {useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { getCoachDetails } from '../features/coach/coachSlice'
import CoachInfo from '../components/CoachInfo'
import BookingForm from '../components/BookingForm'
import Message from '../components/Message'
import ClearAll from '../components/ClearAll'


function Home() {
    

    //initializing dispatch
    const dispatch = useDispatch()

    //getting data from the global state -- coach
    
    const {loading , message ,  error , coachDetails} = useSelector(state => state.coach)
    
    //fetching data on page load
    useEffect(() => {

      //dispatching thunk
      dispatch(getCoachDetails())
    },[dispatch])


  return (
    <div className='container'>
      {loading ? <Loader/>  : error ?  <Message type = 'danger' message = {message}/> : <div className='row gy-3'>
        <div className='col-12 col-md-8'>
                <CoachInfo coachDetails={coachDetails}/>
        </div>
        <div className='col-12 col-md-4'>
                <BookingForm/>
        </div>
        <ClearAll/>
      </div>
      
      }
      
    </div>
  )
}

export default Home
