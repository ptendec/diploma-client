import React, {useEffect, useState} from 'react';
import classes from './CompanyRegistration.module.css'
import {Button, InputLabel, MenuItem, Select, TextField, Typography} from "@material-ui/core"
import {FormAuth} from "../../components/FormAuth/FormAuth"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import {Alert, Stack} from "@mui/material"
import {Link, Navigate, useNavigate} from "react-router-dom"
import {API_URL} from "../../utils/consts"
import {setCompany} from "../../store/company/reducer"
import {useDispatch, useSelector} from "react-redux"

const CompanyRegistration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [BIN, setBIN] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [roleInCompany, setRoleInCompany] = useState('')
  const [email, setEmail] = useState('')
  const [company_name, setCompany_name] = useState('')

  const dispatch = useDispatch()
  const history = useNavigate()
  const registerCompany = async () => {
    const company = {
      email,
      firstName,
      lastName,
      BIN,
      role_in_hire_process: roleInCompany,
      description,
      password,
      location,
      company_name
    }
    await fetch(API_URL + `/company/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      credentials: 'include',
      body: JSON.stringify(company)
    }).then(response => {
      response.json()
    }).then(data => {
      if (data) {
        console.log(data)
        dispatch(setCompany(data.company))
        localStorage.setItem('access_token', data.accessToken)
        localStorage.setItem('typeOfAccount', 'company')
      }
      })
  }
  const isCompanyAuthenticated = useSelector(state => state.company.isAuth)
  const fromPage = location.state?.from?.pathname || '/'
  console.log(isCompanyAuthenticated)
  if (isCompanyAuthenticated) return <Navigate to={fromPage}/>

  return (
    <div className={classes.companyRegistration}>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} sx={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Grid item xl={6}>
            <FormAuth behavior={"Зарегистрироваться как компания"}>
              <Stack direction={"column"} spacing={2}>
                <TextField value={email} onChange={(event) => setEmail(event.target.value)}
                           type="text" id="outlined-basic" label="Ваш email:"
                           variant="outlined"/>
                <TextField value={company_name} onChange={(event) => setCompany_name(event.target.value)}
                           type="text" id="outlined-basic" label="Название компании:"
                           variant="outlined"/>
                <TextField value={firstName} onChange={(event) => setFirstName(event.target.value)}
                           type="text" id="outlined-basic" label="Ваше имя:"
                           variant="outlined"/>
                <TextField value={lastName} onChange={(event) => setLastName(event.target.value)}
                           type="text" id="outlined-basic" label="Ваша фамилия:"
                           variant="outlined"/>
                <TextField value={BIN} onChange={(event) => setBIN(event.target.value)}
                           type="number"
                           id="outlined-basic" label="Ваш БИН:" variant="outlined"/>
                <InputLabel id="demo-simple-select-label">Ваш город</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Ваш город"
                  onChange={(event) => {
                    setLocation(event.target.value)
                  }}
                >
                  <MenuItem value={"Астана"}>Астана</MenuItem>
                  <MenuItem value={"Алматы"}>Алматы</MenuItem>
                  <MenuItem value={"Шымкент"}>Шымкент</MenuItem>
                </Select>
                <TextField value={description} onChange={(event) => setDescription(event.target.value)}
                           type="text"
                           id="outlined-basic" label="Описание компании:" variant="outlined"/>
                <TextField value={roleInCompany} onChange={(event) => setRoleInCompany(event.target.value)}
                           type="number"
                           id="outlined-basic" label="Ваша должность в компании:" variant="outlined"/>
                <TextField value={password} onChange={(event) => setPassword(event.target.value)}
                           type="password" id="outlined-basic" label="Придумайте пароль:"
                           variant="outlined"/>
                <TextField value={confirmPassword}
                           onChange={(event) => setConfirmPassword(event.target.value)}
                           type="password"
                           id="outlined-basic" label="Подтвердите пароль:" variant="outlined"/>
                <Button onClick={registerCompany}
                        variant="contained" size={"large"}
                        style={{
                          backgroundColor: '#37474f',
                          color: '#fff',
                          height: '56px'
                        }}
                >Зарегистрироваться</Button>
              </Stack>
              <Typography style={{marginTop: '20px'}} variant="body1">
                У вас уже есть аккаунт? <Link to={'/company/authorization'}>Войти</Link>
              </Typography>
            </FormAuth>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CompanyRegistration;
