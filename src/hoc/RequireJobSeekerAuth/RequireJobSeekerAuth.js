import React from 'react';
import {useLocation, Navigate} from 'react-router-dom'
import {useSelector} from "react-redux"

const RequireJobSeekerAuth = ({children}) => {
  const isJobSeekerAuthenticated = useSelector(state => state.jobSeeker.isAuth)
  const location = useLocation()
  if (!isJobSeekerAuthenticated) return <Navigate to={'/jobSeeker/authorization'} state={{from: location}}/>
  return (
    children
  );
};

export default RequireJobSeekerAuth;
