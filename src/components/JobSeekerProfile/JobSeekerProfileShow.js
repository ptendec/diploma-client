import React from 'react';
import classes from './JobSeekerProfileShow.module.css'
import {useSelector} from "react-redux"
import {Grid, Stack} from "@mui/material"
import Container from "@mui/material/Container"
import {Card, CardActions, CardContent, CardMedia, Paper, Slider, TextField, Typography} from "@material-ui/core"
import {FILE_URL} from "../../utils/consts"

const JobSeekerProfileShow = () => {
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)
  const profile = useSelector(state => state.jobSeekerProfile.profile)
  console.log(profile)
  return (
    <div className={classes.jobSeekerProfile}>
      {
        <Container>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <Paper elevation={3}>
                <Card sx={{maxWidth: 345}}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={`${FILE_URL}/avatarOfJobSeeker/${profile.avatar}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {jobSeeker.firstName + " " + jobSeeker.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Город: {profile.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Возраст: {profile.age}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <Stack direction={'column'} spacing={2}>
                <Paper elevation={3}>
                  <Card sx={{minWidth: 275}}>
                    <CardContent>
                      <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Био
                      </Typography>
                      <Typography variant="h5" component="div">
                      </Typography>
                      <Typography sx={{mb: 1.5}} color="text.secondary">
                      </Typography>
                      <Typography variant="body2">
                        {profile.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
                <Paper elevation={3}>
                  <Card sx={{minWidth: 275}}>
                    <CardContent>
                      <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Цитата
                      </Typography>
                      <Typography variant="h5" component="div">
                      </Typography>
                      <Typography sx={{mb: 1.5}} color="text.secondary">
                      </Typography>
                      <Typography variant="body2">
                        {profile.quote}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Paper style={{padding: '20px'}} elevation={3}>
                <Typography gutterBottom>Introvert - Extrovert</Typography>
                <Slider
                  value={profile.introvert}
                  disabled
                  valueLabelDisplay="auto"
                  components={{}}
                  aria-label="custom thumb label"
                  max={10}
                  min={0}
                />
                <Typography gutterBottom>Analytical - Creative</Typography>
                <Slider
                  value={profile.analytical}
                  disabled
                  valueLabelDisplay="auto"
                  components={{}}
                  aria-label="custom thumb label"
                  max={10}
                  min={0}
                />
                <Typography gutterBottom>Busy - Time rich</Typography>
                <Slider
                  value={profile.busy}
                  disabled
                  valueLabelDisplay="auto"
                  components={{}}
                  aria-label="custom thumb label"
                  max={10}
                  min={0}
                />
                <Typography gutterBottom>Messy - Organized</Typography>
                <Slider
                  value={profile.messy}
                  disabled
                  valueLabelDisplay="auto"
                  components={{}}
                  aria-label="custom thumb label"
                  max={10}
                  min={0}
                />
                <Typography gutterBottom>Independent - Team player</Typography>
                <Slider
                  valueLabelDisplay="auto"
                  value={profile.independent}
                  disabled
                  components={{}}
                  aria-label="custom thumb label"
                  max={10}
                  min={0}
                />
              </Paper>
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Paper elevation={3}>
                <Card sx={{minWidth: 275}}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      Цели
                    </Typography>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                    </Typography>
                    <Typography variant="body2">
                      {profile.goals}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Paper elevation={3}>
                <Card sx={{minWidth: 275}}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      Страхи
                    </Typography>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                    </Typography>
                    <Typography variant="body2">
                      {profile.frustration}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      }
    </div>
  );
};

export default JobSeekerProfileShow;
