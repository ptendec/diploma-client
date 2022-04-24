import React, {useState} from 'react';
import classes from './CreateCV.module.css'
import Grid from "@mui/material/Grid"
import {Stack} from "@mui/material"
import {Button, Slider, TextField, Typography} from "@material-ui/core"
import Container from "@mui/material/Container"
import fetchIntercept from "../../utils/fetchIntercept"
import {setProfile} from "../../store/jobSeekerProfile/reducer"
import {useDispatch, useSelector} from "react-redux"
import {setCv} from "../../store/cv/reducer"

const CreateCv = () => {
  const dispatch = useDispatch()
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)
  const [skills, setSkills] = useState()
  const [file, setFile] = useState()
  const createCv = () => {
    const cv = new FormData
    cv.append('cv', file)
    cv.append('skills', skills)
    cv.append('jobSeekerId', jobSeeker.id)
    console.log(cv)
    fetchIntercept('/cv/create', {
      headers: {
      },
      method: "POST",
      body: cv
    }, 'jobSeeker').then(({response, data}) => {
      dispatch(setCv(data.cv))
    })
  }
  return (
    <div className={classes.createCv}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xl={12} lg={12}>
            <Stack direction={'column'} spacing={2}>
              <TextField
                value={skills}
                onChange={(event) =>  setSkills(event.target.value)}
                id="outlined-multiline-static"
                label="Навыки"
                variant="outlined"/>
              <Button
                variant="contained"
                component="label"
              >
                Upload CV
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
                onClick={createCv}
              >Создать профиль</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateCv;
