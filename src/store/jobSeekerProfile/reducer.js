import {createSlice} from "@reduxjs/toolkit"


const jobSeekerProfileSlice = createSlice({
  name: 'jobSeekerProfile',
  initialState: {
    profile: {},
    profileExists: false
  },
  reducers: {
    setProfile: (state, action) => {
      state.profileExists = true
      state.profile = action.payload
    },
    removeProfile: (state, action) => {
      state.profileExists = false
      state.profile = {}
    },
  }
})

export const {setProfile, removeProfile} = jobSeekerProfileSlice.actions
export default jobSeekerProfileSlice.reducer

