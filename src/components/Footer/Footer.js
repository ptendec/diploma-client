import React from 'react';
import classes from './Footer.module.css'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import {Link} from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container justifyContent={'space-between'}>
          <Grid item xl={4} lg={4}>
            <Link style={{color: "#fff", textDecoration: "none", textTransform: 'uppercase', fontSize: '28px'}}
                  to={'/'}>GoIntern </Link>
            <h1 className={classes.title}>GoIntern - сервис по поиску работников и работодателей</h1>
          </Grid>
          <Grid item xl={2} lg={2}>
            <p style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '25px', display: 'inline-block'}}>Меню</p><br/>
            <Link style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '20px', marginTop: '15px', display: 'inline-block'}}
                  to={'/'}>Вакансии </Link><br/>
            <Link style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '20px', marginTop: '15px', display: 'inline-block'}}
                  to={'/'}>Компании </Link><br/>
            <Link style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '20px', marginTop: '15px', display: 'inline-block'}}
                  to={'/'}>Контакты </Link>
          </Grid>
          <Grid item xl={2} lg={2}>
            <p style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '25px', display: 'inline-block'}}>Меню</p><br/>
            <Link style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '20px', marginTop: '15px', display: 'inline-block'}}
                  to={'/'}>Вакансии </Link><br/>
            <Link style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '20px', marginTop: '15px', display: 'inline-block'}}
                  to={'/'}>Компании </Link><br/>
            <Link style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '20px', marginTop: '15px', display: 'inline-block'}}
                  to={'/'}>Контакты </Link>
          </Grid>
          <Grid item xl={4} lg={4}>
            <p style={{color: "#fff", textDecoration: "none", fontWeight: '400', fontSize: '25px', display: 'inline-block'}}>Соц. сети</p><br/><br/>
            <a href="" style={{color: '#fff'}}><FacebookIcon fontSize={'large'} style={{fontSize: '50px'}} /></a>
            <a href="" style={{color: '#fff'}}><InstagramIcon fontSize={'large'} style={{fontSize: '50px'}} /></a>
            <a href="" style={{color: '#fff'}}><TwitterIcon fontSize={'large'} style={{fontSize: '50px'}} /></a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
