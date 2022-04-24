import React from 'react';
import {Button, Card, CardActions, CardContent, Paper, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"
import classes from './Response.module.css'
import fetchIntercept from './../../utils/fetchIntercept'
import {useSelector} from "react-redux"

const Response = ({response}) => {
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)

  return (
    <div className={classes.response}>
      <Paper elevation={5}>
        <Card sx={{minWidth: '100%'}}>
          <CardContent>
            <Typography variant="h5" component="div">
              {response.vacancy.title}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
              {response.vacancy.salary_min} - {response.vacancy.salary_max} тг.
            </Typography>
            <Typography variant="body2">
              {response.vacancy.description}
            </Typography>
            <Typography variant="body2">
              <br/>
              <br/>
              {response.status}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default Response;
