import React, {useState} from 'react';
import classes from './JobSeekerRegistration.module.css'
import {Button, Snackbar, TextField, Typography} from "@material-ui/core"
import {FormAuth} from "../../components/FormAuth/FormAuth"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import {Alert, Stack} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import {API_URL} from "../../utils/consts"
import {setCompany} from "../../store/company/reducer"
import {useDispatch} from "react-redux"
import {setJobSeeker} from "../../store/jobSeeker/reducer"

const JobSeekerRegistration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isCredentialsIncorrect, setIsCredentialsIncorrect] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleClose() {
    setIsCredentialsIncorrect(false)
  }

  const registerJobSeeker = async () => {
    const company = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    }
    await fetch(API_URL + `/jobSeeker/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      credentials: 'include',
      body: JSON.stringify(company)
    }).then(async (response) => {
      const data = await response.json()
      if (response.status === 200) {
        dispatch(setCompany(data.company))
        localStorage.setItem('access_token', data.accessToken)
        localStorage.setItem('typeOfAccount', 'jobSeeker')
      } else {
        console.log(data)
        setIsCredentialsIncorrect(true)
        setErrorMessage(data.message)
      }
    })
  }


  return (
    <>
      <Snackbar open={isCredentialsIncorrect} autoHideDuration={3000} onClose={handleClose}  anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <div className={classes.jobSeekerRegistration}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={2} sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Grid item xl={6}>
              <FormAuth behavior={"???????????????????????????????????? ?????? ????????????????"}>
                <Stack direction={"column"} spacing={2}>
                  <TextField value={firstName} onChange={(event) => setFirstName(event.target.value)}
                             type="text" id="outlined-basic" label="???????? ??????:"
                             variant="outlined"/>
                  <TextField value={lastName} onChange={(event) => setLastName(event.target.value)}
                             type="text" id="outlined-basic" label="???????? ??????????????:"
                             variant="outlined"/>
                  <TextField value={email} onChange={(event) => setEmail(event.target.value)}
                             type="text" id="outlined-basic" label="?????? email:"
                             variant="outlined"/>
                  <TextField value={phoneNumber}
                             onChange={(event) => setPhoneNumber(event.target.value)}
                             type="number" id="outlined-basic" label="?????? ?????????? ????????????????:"
                             variant="outlined"/>
                  <TextField value={password} onChange={(event) => setPassword(event.target.value)}
                             type="password" id="outlined-basic" label="???????????????????? ????????????:"
                             variant="outlined"/>
                  <TextField value={confirmPassword}
                             onChange={(event) => setConfirmPassword(event.target.value)}
                             type="password"
                             id="outlined-basic" label="?????????????????????? ????????????:" variant="outlined"/>
                  <Button onClick={registerJobSeeker}
                          variant="contained" size={"large"}
                          style={{
                            backgroundColor: '#37474f',
                            color: '#fff',
                            height: '56px'
                          }}
                  >????????????????????????????????????</Button>
                </Stack>
                <Typography style={{marginTop: '20px'}} variant="body1">
                  ?? ?????? ?????? ???????? ??????????????? <Link to={'/jobSeeker/authorization'}>??????????</Link>
                </Typography>
                <Typography variant="body1">
                  ???? ?????????? ??????????????????????? <Link to={'/company/authorization'}>??????????????</Link>
                </Typography>
              </FormAuth>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default JobSeekerRegistration;
