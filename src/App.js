import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux"
import {setCompany} from "./store/company/reducer"
import {useEffect} from "react"
import AppRouter from "./components/AppRouter/AppRouter"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {useNavigate} from "react-router-dom"
import jwt_decode from "jwt-decode";
import {setJobSeeker} from "./store/jobSeeker/reducer"

function App() {
  const history = useNavigate()
  const dispatch = useDispatch()
  if (localStorage.getItem('typeOfAccount') === 'company') {
    const decoded = jwt_decode(localStorage.getItem('access_token'))
    dispatch(setCompany({...decoded}))
  } else if (localStorage.getItem('typeOfAccount') === 'jobSeeker') {
    const decoded = jwt_decode(localStorage.getItem('access_token'))
    dispatch(setJobSeeker({...decoded}))
  }
  console.log(useSelector(state => state.company.isAuth))
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
      <Footer/>
    </div>
  )
}

export default App;
