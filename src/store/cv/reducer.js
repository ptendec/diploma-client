import {createSlice} from "@reduxjs/toolkit"


const cvSlice = createSlice({
  name: 'cv',
  initialState: {
    cv: {},
    cvExists: false
  },
  reducers: {
    setCv: (state, action) => {
      state.cvExists = true
      state.cv = action.payload
    },
    removeCv: (state, action) => {
      state.cvExists = false
      state.cv = {}
    },
  }
})

export const {setCv, removeCv} = cvSlice.actions
export default cvSlice.reducer

