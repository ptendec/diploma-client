import {configureStore} from "@reduxjs/toolkit"
import companyReducer from './company/reducer'
import jobSeekerReducer from './jobSeeker/reducer'
import jobSeekerProfileReducer from './jobSeekerProfile/reducer'
import cvReducer from './cv/reducer'

export const store = configureStore({
    reducer: {
        company: companyReducer,
        jobSeeker: jobSeekerReducer,
        jobSeekerProfile: jobSeekerProfileReducer,
        cv: cvReducer
    }
})

