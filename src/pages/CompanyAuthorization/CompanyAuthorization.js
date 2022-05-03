import React, {useEffect, useState} from 'react';
import classes from './CompanyAuthorization.module.css'
import {Button, Container, Grid, Snackbar, TextField, Typography} from "@material-ui/core"
import {Alert, Stack} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {FormAuth} from "../../components/FormAuth/FormAuth"
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom"
import {API_URL} from "../../utils/consts"
import {setCompany} from "../../store/company/reducer"
import {setJobSeeker} from "../../store/jobSeeker/reducer"

const CompanyAuthorization = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isCredentialsIncorrect, setIsCredentialsIncorrect] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const authorizeCompany = async () => {
    const company = {
      email, password
    }
    await fetch(`${API_URL}/company/authorization`, {
      method: 'POST', credentials: 'include', headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }, body: JSON.stringify(company)
    }).then(async (response) => {
      const data = await response.json()
      if (response.status === 200) {
        dispatch(setCompany(data.company))
        localStorage.setItem('access_token', data.accessToken)
        localStorage.setItem('typeOfAccount', 'company')
      } else {
        console.log(data)
        setIsCredentialsIncorrect(true)
        setErrorMessage(data.message)
      }
    })
  }
  const isCompanyAuthenticated = useSelector(state => state.company.isAuth)
  const fromPage = location.state?.from?.pathname || '/'
  console.log(isCompanyAuthenticated)
  if (isCompanyAuthenticated) return <Navigate to={fromPage}/>

  function handleClose(){
    setIsCredentialsIncorrect(false)
  }

  return (
    <>
      <div className={classes.companyAuthorization}>
        <Snackbar open={isCredentialsIncorrect} autoHideDuration={3000} onClose={handleClose}  anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
        <Container maxWidth={"lg"}>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xl={6} lg={6} md={6}>
              <FormAuth behavior={"Войти как компания"}>
                <Stack direction={"column"} spacing={2}>
                  <TextField value={email}
                             onChange={(event) => setEmail(event.target.value)}
                             type="email" id="outlined-basic" label="Ваш email:" variant="outlined"/>
                  <TextField value={password} onChange={(event) => setPassword(event.target.value)}
                             type="password" id="outlined-basic" label="Ваш пароль:"
                             variant="outlined"/>
                  <Button
                    size={"large"}
                    variant="contained"
                    style={{
                      backgroundColor: '#37474f', color: '#fff', height: '56px'
                    }}
                    onClick={authorizeCompany}
                  >Войти</Button>
                  <Typography style={{marginTop: '20px'}} variant="body1" gutterBottom>
                    Вы еще не создали аккаунт? <Link to={'/company/registration'}>Зарегистрироваться</Link>
                  </Typography>
                  <Typography variant="body1">
                    Вы ищете работу? <Link to={'/jobSeeker/authorization'}>Перейти</Link>
                  </Typography>
                </Stack>
              </FormAuth>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default CompanyAuthorization;
