import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {removeCompany} from "../../store/company/reducer"
import {Navigate} from "react-router-dom"
import {removeJobSeeker} from "../../store/jobSeeker/reducer"
import {removeCv} from "../../store/cv/reducer"
import {removeProfile} from "../../store/jobSeekerProfile/reducer"

const Quit = () => {
  const dispatch = useDispatch()
  const isCompanyAuthenticated = useSelector(state => state.company.isAuth)
  const isJobSeekerAuthenticated = useSelector(state => state.jobSeeker.isAuth)
  localStorage.removeItem('access_token')
  localStorage.removeItem('typeOfAccount')
  if (isCompanyAuthenticated) {
    dispatch(removeCompany())
  }
  else if(isJobSeekerAuthenticated) {
    dispatch(removeJobSeeker())
    dispatch(removeCv())
    dispatch(removeProfile())
  }
  return (
    <Navigate to={'/'} />
  );
};

export default Quit;
