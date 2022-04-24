import React from 'react';
import {Button, Card, CardActions, CardContent, Paper, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"
import classes from './Vacancies.module.css'
import fetchIntercept from './../../utils/fetchIntercept'
import {useSelector} from "react-redux"

const Vacancies = ({vacancy}) => {
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)
  const createResponse = async (id) => {
    const newResponse = {
      jobSeekerId: jobSeeker.id,
      vacancyId: id
    }
    console.log(newResponse)
    await fetchIntercept('/response/create', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify(newResponse)
    }, 'jobSeeker')
  }

  return (
    <div className={classes.vacancies}>
      <Paper elevation={5}>
        <Card sx={{minWidth: '100%'}}>
          <Link to={'/'}>
            <CardContent>
              <Typography variant="h5" component="div">
                {vacancy.title}
              </Typography>
              <Typography sx={{mb: 1.5}} color="text.secondary">
                {vacancy.salary_min} - {vacancy.salary_max} тг.
              </Typography>
              <Typography variant="body2">
                {vacancy.description}
              </Typography>
            </CardContent>
          </Link>
          <CardActions>
            <Button
              value={vacancy.id}
              size="large"
              onClick={() => {createResponse(vacancy.id)}}
            >Откликнуться</Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

export default Vacancies;
