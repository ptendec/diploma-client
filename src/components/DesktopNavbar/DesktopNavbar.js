import React from 'react';
import {Box, Button, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"
import classes from './DesktopNavbar.module.css'
import {Stack} from "@mui/material"

const DesktopNavbar = () => {
  return (
    <div className={classes.desktopNavbar}>
        <Stack direction={'row'} spacing={6}>
          <Link to={'/jobSeeker/vacancies'}>Вакансии </Link>
          <Link to={'/'}>Компании </Link>
          <Link to={'/'}>Контакты </Link>
        </Stack>
    </div>
  );
};

export default DesktopNavbar;
