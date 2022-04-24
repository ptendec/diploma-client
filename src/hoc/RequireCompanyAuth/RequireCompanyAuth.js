import React, {useEffect} from 'react';
import {useLocation, Navigate, useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux"

const RequireCompanyAuth = ({children}) => {
  const isCompanyAuthenticated = useSelector(state => state.company.isAuth)
  const location = useLocation()
  if (!isCompanyAuthenticated) return <Navigate to={'/company/authorization'} state={{from: location}}/>

  return (
    children
  );
};

export default RequireCompanyAuth;
