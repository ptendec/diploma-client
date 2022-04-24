import React, {useState} from 'react';
import classes from './CreateProfile.module.css'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import {Stack} from "@mui/material"
import {Button, Slider, TextField, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import fetchIntercept from "../../utils/fetchIntercept"
import {setProfile} from "../../store/jobSeekerProfile/reducer"

const CreateProfile = () => {
  const dispatch = useDispatch()
  const [bio, setBio] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [quote, setQuote] = useState('')
  const [goals, setGoals] = useState('')
  const [frustration, setFrustration] = useState('')
  const [file, setFile] = useState('')
  const [introvert, setIntrovert] = useState(2)
  const [analytical, setAnalytical] = useState(2)
  const [busy, setBusy] = useState(2)
  const [messy, setMessy] = useState(2)
  const [independent, setIndependent] = useState(2)
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)

  const createProfile = () => {
    const profile = new FormData
    profile.append('age', age)
    profile.append('bio', bio)
    profile.append('quote', quote)
    profile.append('frustration', frustration)
    profile.append('location', location)
    profile.append('goals', goals)
    profile.append('jobSeekerId', jobSeeker.id)
    profile.append('introvert', introvert)
    profile.append('analytical', analytical)
    profile.append('busy', busy)
    profile.append('messy', messy)
    profile.append('independent', independent)
    profile.append('avatar', file)
    console.log(profile)
    fetchIntercept('/jobSeekerBio/create', {
      headers: {
      },
      method: "POST",
      body: profile
    }, 'jobSeeker').then(({response, data}) => {
      dispatch(setProfile(data.jobSeekerBio))
    })
  }

  return (
    <div className={classes.createProfile}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xl={12} lg={12}>
            <Stack direction={'column'} spacing={2}>
              <TextField
                value={age}
                onChange={(event) => setAge(event.target.value)}
                style={{width: '100%'}} id="outlined-basic"
                label="Ваш возраст" variant="outlined"/>
              <TextField
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                style={{width: '100%'}} id="outlined-basic"
                label="Ваш город" variant="outlined"/>
              <TextField
                value={quote}
                onChange={(event) => setQuote(event.target.value)}
                id="outlined-multiline-static"
                label="Цитата"
                multiline
                rows={4}
                variant="outlined"/>
              <TextField
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                id="outlined-multiline-static"
                label="Био"
                multiline
                rows={4}
                variant="outlined"/>
              <TextField
                value={goals}
                onChange={(event) => setGoals(event.target.value)}
                id="outlined-multiline-static"
                label="Цели"
                multiline
                rows={4}
                variant="outlined"/>
              <TextField
                value={frustration}
                onChange={(event) => setFrustration(event.target.value)}
                id="outlined-multiline-static"
                label="Страхи"
                multiline
                rows={4}
                variant="outlined"/>
              <Typography gutterBottom>Introvert - Extrovert</Typography>
              <Slider
                defaultValue={2}
                value={introvert}
                onChange={(event, value) => {
                  setIntrovert(value)
                  console.log(introvert)
                }}
                valueLabelDisplay="auto"
                aria-label="custom thumb label"
                max={10}
                min={0}
              />
              <Typography gutterBottom>Analytical - Creative</Typography>
              <Slider
                defaultValue={2}
                value={analytical}
                onChange={(event, value) => {
                  setAnalytical(value)
                  console.log(analytical)
                }}
                valueLabelDisplay="auto"
                aria-label="custom thumb label"
                max={10}
                min={0}
              />
              <Typography gutterBottom>Busy - Time rich</Typography>
              <Slider
                defaultValue={2}
                value={busy}
                onChange={(event, value) => {
                  setBusy(value)
                  console.log(busy)
                }}
                valueLabelDisplay="auto"
                components={{}}
                aria-label="custom thumb label"
                max={10}
                min={0}
              />
              <Typography gutterBottom>Messy - Organized</Typography>
              <Slider
                defaultValue={2}
                value={messy}
                onChange={(event, value) => {
                  setMessy(value)
                  console.log(messy)
                }}
                valueLabelDisplay="auto"
                components={{}}
                aria-label="custom thumb label"
                max={10}
                min={0}
              />
              <Typography gutterBottom>Independent - Team player</Typography>
              <Slider
                defaultValue={2}
                value={independent}
                onChange={(event, value) => {
                  setIndependent(value)
                  console.log(independent)
                }}
                valueLabelDisplay="auto"
                components={{}}
                aria-label="custom thumb label"
                max={10}
                min={0}
              />
              <Button
                variant="contained"
                component="label"
              >
                Upload avatar
                <input
                  type="file"
                  hidden
                  onChange={(event) => {
                    setFile(event.target.files[0])
                    console.log(event.target.files[0])
                  }}
                />
              </Button>
              <Button
                size={"large"}
                variant="contained"
                style={{
                  backgroundColor: '#37474f',
                  color: '#fff',
                  height: '56px'
                }}
                onClick={createProfile}
              >Создать профиль</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateProfile;
