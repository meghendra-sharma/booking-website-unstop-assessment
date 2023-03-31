import { configureStore } from '@reduxjs/toolkit'
import coachReducer from '../features/coach/coachSlice'


//creating store using redux-toolkit
//combining reducers
export const store = configureStore({
  reducer: {
    coach : coachReducer
  },
})