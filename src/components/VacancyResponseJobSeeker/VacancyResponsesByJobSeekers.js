import React, {useEffect, useState} from 'react';
import Container from "@mui/material/Container"
import {Grid, Stack} from "@mui/material"
import {Button, Card, CardActions, CardContent, CardMedia, Paper, Slider, Typography} from "@material-ui/core"
import {API_URL, FILE_URL} from "../../utils/consts"
import {useParams} from "react-router-dom"
import classes from './VacancyResponsesByJobSeekers.module.css'
import fetchIntercept from "../../utils/fetchIntercept"

const VacancyResponsesByJobSeekers = () => {
  const params = useParams();
  const [responses, setResponses] = useState([])
  const vacancyId = params.vacancyId

  useEffect(() => {
    fetchIntercept(`/response/getInfoAboutVacancy/${vacancyId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
    }, 'jobSeeker').then(({response, data}) => {
      setResponses(data)
    })
  }, [])

  const eventChangeStatusResponseClickHandler = (id, newStatus) => {
    fetchIntercept(`/response/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({id, newStatus})
    })

  }

  return (
    <div className={classes.vacancyResponsesByJobSeekers}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xl={12}>
            {responses.map(response => (
              <>
                <Card sx={{minWidth: 275}}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {response.job_seeker.firstName} {response.job_seeker.lastName}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                      Возраст: {response.job_seeker?.job_seeker_bio?.age}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Цитата:</strong>
                      <br/>
                      {response.job_seeker?.job_seeker_bio?.quote}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Цели:</strong>
                      <br/>
                      {response.job_seeker?.job_seeker_bio?.goals}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Био:</strong>
                      <br/>
                      {response.job_seeker?.job_seeker_bio?.bio}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Слабости:</strong>
                      <br/>
                      {response.job_seeker?.job_seeker_bio?.frustration}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Контакты:</strong>
                      <br/>
                      {response.job_seeker?.email}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Аналитические способности: {response.job_seeker?.job_seeker_bio?.analytical}</strong><br/>
                      <strong>Экстравертность: {response.job_seeker?.job_seeker_bio?.introvert}</strong><br/>
                      <strong>Занятость: {response.job_seeker?.job_seeker_bio?.busy}</strong><br/>
                      <strong>Организованность: {response.job_seeker?.job_seeker_bio?.organized}</strong><br/>
                      <strong>Навык работать в команде: {response.job_seeker?.job_seeker_bio?.independent}</strong><br/>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size={"large"}
                    ><a style={{textDecoration: 'none'}}
                        href={`${API_URL}/cv/download/${response.job_seeker?.cv?.cv_file_path}`}>Скачать
                      резюме</a></Button>
                    <Button value={response.id} size="large"
                            onClick={(event) => eventChangeStatusResponseClickHandler(response.id, 'Одобрен')}>Одобрить</Button>
                    <Button value={response.id} size="large"
                            onClick={(event) => eventChangeStatusResponseClickHandler(response.id, 'Отказан')}>Отказать</Button>
                  </CardActions>
                </Card>
                <br/>
                <br/>
              </>

            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VacancyResponsesByJobSeekers;
