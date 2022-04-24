import React, {useEffect, useState} from 'react';
import fetchIntercept from './../../utils/fetchIntercept'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import classes from './Responses.module.css'
import {Stack} from "@mui/material"
import {useSelector} from "react-redux"
import Response from "../../components/Response/Response"

const Responses = () => {
  const jobSeeker = useSelector(state => state.jobSeeker.jobSeeker)
  const [listOfResponses, SetListOfResponses] = useState([])
  useEffect(() => {
    fetchIntercept(`/response/myResponses/${jobSeeker.id}`, {
      method: 'GET',
    }, 'jobSeeker').then(response => {
      SetListOfResponses(response.data)
    })
  }, [])

  return (
    <div className={classes.responses}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item lg={12}>
            <Stack spacing={2} direction={'column'}>
              {listOfResponses.map(response => (
                <Response response={response} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Responses;
