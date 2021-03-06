import React, {useEffect, useState} from 'react';
import classes from './CompanyRegistration.module.css'
import {Button, InputLabel, MenuItem, Select, Snackbar, TextField, Typography} from "@material-ui/core"
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
  const [isCredentialsIncorrect, setIsCredentialsIncorrect] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const history = useNavigate()

  function handleClose() {
    setIsCredentialsIncorrect(false)
  }

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
    }).then(async (response) => {
      const data = await response.json()
      console.log(response.status)
      console.log(data)
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

  return (
    <>
      <Snackbar open={isCredentialsIncorrect} autoHideDuration={3000} onClose={handleClose}  anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <div className={classes.companyRegistration}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={2} sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Grid item xl={6}>
              <FormAuth behavior={"???????????????????????????????????? ?????? ????????????????"}>
                <Stack direction={"column"} spacing={2}>
                  <TextField value={email} onChange={(event) => setEmail(event.target.value)}
                             type="text" id="outlined-basic" label="?????? email:"
                             variant="outlined"/>
                  <TextField value={company_name} onChange={(event) => setCompany_name(event.target.value)}
                             type="text" id="outlined-basic" label="???????????????? ????????????????:"
                             variant="outlined"/>
                  <TextField value={firstName} onChange={(event) => setFirstName(event.target.value)}
                             type="text" id="outlined-basic" label="???????? ??????:"
                             variant="outlined"/>
                  <TextField value={lastName} onChange={(event) => setLastName(event.target.value)}
                             type="text" id="outlined-basic" label="???????? ??????????????:"
                             variant="outlined"/>
                  <TextField value={BIN} onChange={(event) => setBIN(event.target.value)}
                             type="number"
                             id="outlined-basic" label="?????? ??????:" variant="outlined"/>
                  <InputLabel id="demo-simple-select-label">?????? ??????????</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="?????? ??????????"
                    onChange={(event) => {
                      setLocation(event.target.value)
                    }}
                  >
                    <MenuItem value={"????????????"}>????????????</MenuItem>
                    <MenuItem value={"????????????"}>????????????</MenuItem>
                    <MenuItem value={"??????????????"}>??????????????</MenuItem>
                  </Select>
                  <TextField value={description} onChange={(event) => setDescription(event.target.value)}
                             type="text"
                             id="outlined-basic" label="???????????????? ????????????????:" variant="outlined"/>
                  <TextField value={roleInCompany} onChange={(event) => setRoleInCompany(event.target.value)}
                             type="text"
                             id="outlined-basic" label="???????? ?????????????????? ?? ????????????????:" variant="outlined"/>
                  <TextField value={password} onChange={(event) => setPassword(event.target.value)}
                             type="password" id="outlined-basic" label="???????????????????? ????????????:"
                             variant="outlined"/>
                  <TextField value={confirmPassword}
                             onChange={(event) => setConfirmPassword(event.target.value)}
                             type="password"
                             id="outlined-basic" label="?????????????????????? ????????????:" variant="outlined"/>
                  <Button onClick={registerCompany}
                          variant="contained" size={"large"}
                          style={{
                            backgroundColor: '#37474f',
                            color: '#fff',
                            height: '56px'
                          }}
                  >????????????????????????????????????</Button>
                </Stack>
                <Typography style={{marginTop: '20px'}} variant="body1">
                  ?? ?????? ?????? ???????? ??????????????? <Link to={'/company/authorization'}>??????????</Link>
                </Typography>
              </FormAuth>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default CompanyRegistration;
