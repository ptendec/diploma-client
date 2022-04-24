import React from 'react';
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import {Button, Card, CardContent, CardMedia, Paper, Typography} from "@material-ui/core"
import {API_URL, FILE_URL} from "../../utils/consts"
import {useDispatch, useSelector} from "react-redux"
import fetchIntercept from "../../utils/fetchIntercept"

const ShowCv = () => {
  const dispatch = useDispatch()
  const jobSetter = useSelector(state => state.jobSeeker.jobSeeker)
  const cv = useSelector(state => state.cv.cv)
  const downloadCv = () => {
    fetchIntercept(`/cv/download/${cv.cv_file_path}`, {
      method: 'GET',
    }, 'jobSeeker')
  }
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Paper elevation={3}>
              <Card sx={{maxWidth: 345}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cv.skills}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Button
                      size={"large"}
                      variant="contained"
                      style={{
                        backgroundColor: '#37474f',
                        color: '#fff',
                        height: '56px'
                      }}
                    ><a style={{color: '#fff', textDecoration: 'none'}} href={`${API_URL}/cv/download/${cv.cv_file_path}`}>Скачать резюме</a></Button>
                  </Typography>
                </CardContent>
              </Card>
            </Paper>

          </Grid>
        </Grid>
      </Container>
    </div>);
};

export default ShowCv;
