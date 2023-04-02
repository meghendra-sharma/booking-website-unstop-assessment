import { configureStore } from '@reduxjs/toolkit'
import coachReducer from '../features/coach/coachSlice'
import bookingReducer from '../features/booking/bookingSlice'


//creating store using redux-toolkit
//combining reducers
export const store = configureStore({
  reducer: {
    coach : coachReducer,
    booking : bookingReducer
  },
})