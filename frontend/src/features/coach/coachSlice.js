import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  success : false,
  coachDetails : null,
  error : false,
  message : '',
  loading : true

}

export const coachSlice = createSlice({
  name: 'coach',
  initialState,
  reducers: {},
})

// Action creators are generated for each case in reducer function
// export const { } = coachSlice.actions

export default coachSlice.reducer