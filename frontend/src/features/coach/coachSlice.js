import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
        const {data} = await axios.get('/api/coach')
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