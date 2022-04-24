import React, {useEffect, useState} from 'react';
import fetchIntercept from './../../utils/fetchIntercept'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import classes from './MyVacancies.module.css'
import {Stack} from "@mui/material"
import {useSelector} from "react-redux"
import MyVacancy from "../../components/MyVacancy/MyVacancy"

const MyVacancies = () => {
  const company = useSelector(state => state.company.company)
  const [listOfVacancies, SetListOfVacancies] = useState([])
  useEffect(() => {
    fetchIntercept(`/vacancy/getAllCompanies/${company.id}`, {
      header: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      method: 'GET',
    }, 'company').then(response => {
      SetListOfVacancies(response.data)
    })
  }, [])

  return (
    <div className={classes.myVacancies}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item lg={12}>
            <Stack spacing={2} direction={'column'}>
              {listOfVacancies.map(vacancy => (
                <MyVacancy vacancy={vacancy} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MyVacancies;
