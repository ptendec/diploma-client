import React, {useEffect, useState} from 'react';
import fetchIntercept from './../../utils/fetchIntercept'
import Vacancies from "../../components/Vacancies/Vacancies"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import classes from './Vacancy.module.css'
import {Stack} from "@mui/material"

const Vacancy = () => {
  const [listOfVacancies, SetListOfVacancies] = useState([])
  useEffect(() => {
    fetchIntercept('/vacancy/', {
      method: 'GET',
    }, 'jobSeeker').then(response => {
      SetListOfVacancies(response.data)
    })
  }, [])

  return (
    <div className={classes.vacancy}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item lg={12}>
            <Stack spacing={2} direction={'column'}>
              {listOfVacancies.map(vacancy => (
                <Vacancies vacancy={vacancy} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Vacancy;
