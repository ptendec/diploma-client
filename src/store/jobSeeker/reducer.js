import {createSlice} from "@reduxjs/toolkit"


const jobSeekerSlice = createSlice({
  name: 'jobSeeker',
  initialState: {
    isAuth: false,
    jobSeeker: {},

  },
  reducers: {
    setJobSeeker: (state, action) => {
      state.isAuth = true
      state.jobSeeker = action.payload
    },
    removeJobSeeker: (state, action) => {
      state.isAuth = false
      state.jobSeeker = {}
    },
  }
})

/*
* Думаю, необходимо в App.js сделать проверку на авторизацию, то есть, проверить на наличие JWT токена в cookie
* Создать компонент под названием AppRouter(название на свое усмотрение)
* и там надо через тернарный оператор проверять на наличие авторизации и перечислить роуты через функцию map, как на скрине в ежедневнике
* А в state redux хранить общедоступные данные пользователя(имя фамилия к примеру)
*/


export const {setJobSeeker, removeJobSeeker} = jobSeekerSlice.actions
export default jobSeekerSlice.reducer

