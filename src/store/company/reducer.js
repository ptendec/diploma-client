import {createSlice} from "@reduxjs/toolkit"


const companySlice = createSlice({
  name: 'company',
  initialState: {
    isAuth: false,
    company: {},

  },
  reducers: {
    setCompany: (state, action) => {
      state.isAuth = true
      state.company = action.payload
    },
    removeCompany: (state, action) => {
      state.isAuth = false
      state.company = {}
    },
  }
})

/*
* Думаю, необходимо в App.js сделать проверку на авторизацию, то есть, проверить на наличие JWT токена в cookie
* Создать компонент под названием AppRouter(название на свое усмотрение)
* и там надо через тернарный оператор проверять на наличие авторизации и перечислить роуты через функцию map, как на скрине в ежедневнике
* А в state redux хранить общедоступные данные пользователя(имя фамилия к примеру)
*/


export const {setCompany, removeCompany} = companySlice.actions
export default companySlice.reducer

