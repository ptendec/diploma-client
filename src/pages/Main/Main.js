import React, {useEffect, useState} from 'react';
import classes from './Main.module.css'
import promo from './../../assets/images/image_2022-04-11_19-41-03.png'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import fetchIntercept from "../../utils/fetchIntercept"
import {Button, CardActions, CardContent, Paper, TextField, Typography} from "@material-ui/core"
import {Link, Navigate, useNavigate} from "react-router-dom"
import SendIcon from '@mui/icons-material/Send';
import {useSelector} from "react-redux"
import image1 from '../../assets/images/photo_2022-04-24_23-34-33.jpg'
import image2 from '../../assets/images/photo_2022-04-24_23-34-42.jpg'
import image3 from '../../assets/images/photo_2022-04-24_23-34-33 (2).jpg'


const Main = () => {
  const [vacancies, setVacancies] = useState([])
  const [search, setSearch] = useState('')
  const [clients, setClient] = useState([])
  const isJobSeekerAuthenticated = useSelector(state => state.jobSeeker.isAuth)
  const history = useNavigate()

  useEffect(() => {
    fetchIntercept(`/vacancy`, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json'
      }
    }).then(({response, data}) => {
      console.log(data)
      setVacancies(data)
    })
  }, [])


  const eventClickSearchHandler = () => {
    if (!isJobSeekerAuthenticated) {
      history('/jobSeeker/Authorization')
    }
    fetchIntercept(`/vacancy/search/`, {
      method: 'GET'
    })
  }

  return (
    <div>

      <section style={{backgroundImage: `url(${promo})`}} className={classes.promo}>
        <Container>
          <Grid container>
            <Grid item xl={12}>
              <h1 className={classes.mainTitle}>GoIntern - сервис по поиску работников и работодателей</h1>
              <p className={classes.mainP}>Наш сервис позволяет искать работников и работодателей, успешная, динамично
                развивающаяся компания.
                GoIntern - сайт, где находят хорошую работу и предоставляются лучшие сервисы для работы HR-менеджеров.
                Только на сайте GoIntern ежедневно свыше 19 000 тысяч актуальных вакансий в различных городах
                Казахстана.</p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.search}>
        <Container>
          <Paper elevation={3} style={{padding: '20px 0'}}>
            <Grid container justifyContent={'space-evenly'}>
              <Grid item xl={11} lg={11}>
                <p style={{paddingBottom: '20px'}}>Поиск вакансии</p>
              </Grid>
              <Grid item xl={8} lg={8}>
                <TextField onChange={(event) => {
                  setSearch(event.target.value)
                }} id="outlined-basic" style={{width: '100%'}} label="Поиск" variant="outlined"/>
              </Grid>
              <Grid item xl={2} lg={2}>
                <Button style={{height: '55px', width: '100%'}} variant="contained" color={'primary'}
                        onClick={eventClickSearchHandler}>
                  Искать
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </section>
      <section className={classes.vacancies}>
        <Container>
          <Paper elevation={3} style={{padding: '40px 0'}}>
            <Grid spacing={2} container justifyContent={'center'}>
              <Grid item xl={5} lg={5}>
                <Paper elevation={3}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div">
                      {vacancies[0]?.title}
                    </Typography>
                    <Typography variant="body2">
                      <br/>
                      {vacancies[0]?.salary_min} тг. - {vacancies[0]?.salary_max} тг.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link to={'/jobSeeker/vacancies'}>Подробнее</Link></Button>
                  </CardActions>
                </Paper>
              </Grid>
              <Grid item xl={5} lg={5}>
                <Paper elevation={3}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div">
                      {vacancies[1]?.title}
                    </Typography>
                    <Typography variant="body2">
                      <br/>
                      {vacancies[1]?.salary_min} тг. - {vacancies[1]?.salary_max} тг.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link to={'/jobSeeker/vacancies'}>Подробнее</Link></Button>
                  </CardActions>
                </Paper>
              </Grid>
              <Grid item xl={5} lg={5}>
                <Paper elevation={3}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div">
                      {vacancies[2]?.title}
                    </Typography>
                    <Typography variant="body2">
                      <br/>
                      {vacancies[2]?.salary_min} тг. - {vacancies[2]?.salary_max} тг.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link to={'/jobSeeker/vacancies'}>Подробнее</Link></Button>
                  </CardActions>
                </Paper>
              </Grid>
              <Grid item xl={5} lg={5}>
                <Paper elevation={3}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div">
                      {vacancies[3]?.title}
                    </Typography>
                    <Typography variant="body2">
                      <br/>
                      {vacancies[3]?.salary_min} тг. - {vacancies[3]?.salary_max} тг.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link to={'/jobSeeker/vacancies'}>Подробнее</Link></Button>
                  </CardActions>
                </Paper>
              </Grid>
              <Grid item xl={10} lg={10}>
                <Button
                  size={"large"}
                  variant="contained"
                  className={classes.moreBtn}
                  style={{
                    backgroundColor: '#37474f',
                    color: '#fff',
                    height: '56px',
                    width: '100%'
                  }}
                ><Link to={'/jobSeeker/vacancies'}>Больше</Link></Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </section>
      <section className={classes.clients}>
          <Container >
          <Paper elevation={3} style={{padding: '40px 20px'}}>
            <Typography sx={{fontSize: 18}} color="text.secondary" style={{marginBottom: '20px'}}>
              Наши клиенты
            </Typography>
            <Grid container spacing={3}>

              <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                <img src={image1} style={{width: '100%'}} alt=""/>
                <p>Татьяна Смирнова</p>
              </Grid>
              <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                <img src={image2} style={{width: '100%'}} alt=""/>
                <p>Елена Кужукеева</p>
              </Grid>
              <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                <img src={image3} style={{width: '100%'}} alt=""/>
                <p>Ирина Верещук</p>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </section>
    </div>
  );
};

export default Main;
