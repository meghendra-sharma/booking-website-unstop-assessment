import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getCoachDetails } from '../../features/coach/coachSlice'


//getting the base url from .env file when this application runs in production
const backendBaseURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_BASE_URL : ''
  

//initial state -- coach
const initialState = {
  success : false,
  seatNumbers : null,
  error : false,
  message : '',
  loading : false

}

//thunk middleware
//createAsyncThunk -- creates a thunk function and return thunk creator function
//dispathes - pending , fulfilled and rejected
export const bookSeats =  createAsyncThunk('booking/bookSeats' , async (noOfSeats,thunkAPI) => {

    //getting coach id from the global state
    const _id = thunkAPI.getState().coach.coachDetails._id
    

    try {
        //noOfSeats = Number(noOfSeats)
        //hitting backend API to book seats
        const {data} = await axios.put(`${backendBaseURL}/api/coach/${_id}/book` , {noOfSeats : noOfSeats})
        thunkAPI.dispatch(getCoachDetails())
        return data.seatNumbers
    } catch (error) {

        //getting error from the error 
        const message = error.response ? error.response.data.message : error.request

        //setting action.payload to message when thunk dispatch coach/getDetails/rejected action
        return thunkAPI.rejectWithValue(message)
    }

})


//creating slice -- booking
export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    reset : (state,action) => {
        state.success = false
        state.seatNumbers = null
        state.error = false
        state.message = ''
        state.loading = false
    }
  },
  extraReducers : (builder) => {
        builder.addCase(bookSeats.pending , (state , action) => {
            state.loading = true
        })
        .addCase(bookSeats.fulfilled , (state , action) => {
            state.loading = false
            state.success = true
            state.seatNumbers = action.payload
        })
        .addCase(bookSeats.rejected , (state , action) => {
            state.loading = false
            state.error = true
            state.message = action.payload
        })
  }
})




// Action creators are generated for each case in reducer function
export const { reset } = bookingSlice.actions

export default bookingSlice.reducer