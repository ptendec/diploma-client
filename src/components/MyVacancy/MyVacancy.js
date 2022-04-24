import React from 'react';
import {Button, Card, CardActions, CardContent, Paper, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"
import classes from './MyVacancy.module.css'
import fetchIntercept from './../../utils/fetchIntercept'
import {useSelector} from "react-redux"

const MyVacancy = ({vacancy}) => {
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)

  return (
    <div className={classes.myVacancy}>
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
            ><Link to={`/company/vacancyResponses/${vacancy.id}`}>Посмотреть отклики</Link></Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

export default MyVacancy;
