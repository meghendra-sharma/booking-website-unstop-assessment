import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { reset } from '../booking/bookingSlice'


//getting the base url from .env file when this application runs in production
const backendBaseURL = process.env.REACT_APP_BACKEND_BASE_URL ? process.env.REACT_APP_BACKEND_BASE_URL : ''

//initial state -- coach
const initialState = {
  success : false,
  coachDetails : null,
  error : false,
  message : '',
  loading : true

}

//thunk middleware
//createAsyncThunk -- creates a thunk function and return thunk creator function
//dispathes - pending , fulfilled and rejected
export const getCoachDetails =  createAsyncThunk('coach/getDetails' , async (_,thunkAPI) => {

    try {

        //hitting backend API to get the coach details
        const {data} = await axios.get(backendBaseURL + '/api/coach')
        return data
    } catch (error) {

        //getting error from the error 
        const message = error.response ? error.response.data.message : error.request

        //setting action.payload to message when thunk dispatch coach/getDetails/rejected action
        return thunkAPI.rejectWithValue(message)
    }

})



//thunk middleware
//createAsyncThunk -- creates a thunk function and return thunk creator function
//dispathes - pending , fulfilled and rejected
export const clearCoachDetails =  createAsyncThunk('coach/clearDetails' , async (_,thunkAPI) => {

    //getting coach id from the global state
    const _id = thunkAPI.getState().coach.coachDetails._id

    try {

        //hitting backend API to reset the coach data
        const {data} = await axios.put(`${backendBaseURL}/api/coach/${_id}/clear`)

        //dispatching other actions to reset the global state
        thunkAPI.dispatch(getCoachDetails())
        thunkAPI.dispatch(reset())
        return data
    } catch (error) {

        //getting error from the error 
        const message = error.response ? error.response.data.message : error.request

        //setting action.payload to message when thunk dispatch coach/getDetails/rejected action
        return thunkAPI.rejectWithValue(message)
    }

})


//creating slice -- coach
export const coachSlice = createSlice({
  name: 'coach',
  initialState,
  reducers: {},
  extraReducers : (builder) => {
        builder.addCase(getCoachDetails.pending , (state , action) => {
            state.loading = true
        })
        .addCase(getCoachDetails.fulfilled , (state , action) => {
            state.loading = false
            state.success = true
            state.coachDetails = action.payload
        })
        .addCase(getCoachDetails.rejected , (state , action) => {
            state.loading = false
            state.error = true
            state.message = action.payload
        })
  }
})




// Action creators are generated for each case in reducer function
// export const { } = coachSlice.actions

export default coachSlice.reducer