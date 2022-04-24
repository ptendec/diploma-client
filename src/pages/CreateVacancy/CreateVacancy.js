import React, {useState} from 'react';
import classes from './CreateVacancy.module.css'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import {Button, TextField} from "@material-ui/core"
import {useSelector} from "react-redux"
import {Stack} from "@mui/material"
import fetchIntercept from './../../utils/fetchIntercept'


const CreateVacancy = () => {
  const [title, setTitle] = useState('')
  const [skills, setSkills] = useState([])
  const [salaryMin, setSalaryMin] = useState('')
  const [salaryMax, setSalaryMax] = useState('')
  const [description, setDescription] = useState('')
  const company = useSelector(state => state.company.company)

  const createVacancy = async () => {
    const vacancy = {
      title,
      skills,
      salary_min: salaryMin,
      salary_max: salaryMax,
      description,
      companyId: company.id
    }
    console.log(vacancy)
    const {data, response} = await fetchIntercept('/vacancy/create', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify(vacancy)
    }, 'company')
    console.log(data, response)
  }

  return (
    <div className={classes.createVacancy}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Stack direction={'column'} spacing={2}>
              <TextField
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                style={{width: '100%'}} id="outlined-basic"
                label="Заголовок вакансии" variant="outlined"/>
              <TextField
                value={salaryMin}
                onChange={(event) => setSalaryMin(event.target.value)}
                style={{width: '100%'}} id="outlined-basic"
                label="Минимальная зарплата" variant="outlined"/>
              <TextField
                value={salaryMax}
                onChange={(event) => setSalaryMax(event.target.value)}
                style={{width: '100%'}} id="outlined-basic"
                label="Максимальная зарплата" variant="outlined"/>
              <TextField
                value={skills}
                onChange={(event) => setSkills(event.target.value)}
                style={{width: '100%'}} id="outlined-basic"
                label="Навыки (пишите через запятую)" variant="outlined"/>
              <TextField
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                id="outlined-multiline-static"
                label="Описание вакансии"
                multiline
                rows={4}
                variant="outlined"/>
              <Button
                size={"large"}
                variant="contained"
                style={{
                  backgroundColor: '#37474f',
                  color: '#fff',
                  height: '56px'
                }}
                onClick={createVacancy}
              >Создать вакансию</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateVacancy;
