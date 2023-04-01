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
export const getCoachDetails =  createAsyncThunk('coach/getDetails' , async () => {

    try {

        //hitting backend API to get the coach details
        const {data} = await axios.get('/api/coach')
        return data
    } catch (error) {
        throw error
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