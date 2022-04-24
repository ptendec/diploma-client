import React, {useEffect, useState} from 'react';
import classes from './Header.module.css'
import MobileNavbar from './../MobileNavbar/MobileNavbar'
import DesktopNavbar from './../DesktopNavbar/DesktopNavbar'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  AppBar,
  Avatar,
  Box, Button,
  Container, Divider, Drawer,
  Grid,
  IconButton, List, ListItem, ListItemIcon, ListItemText,
  Menu,
  MenuItem, SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core"
import {Link} from "react-router-dom"
import {Stack} from "@mui/material"
import {useSelector} from "react-redux"


const settingsForCompany = [
  {
    name: 'Создать вакансию',
    path: '/company/createVacancy'
  },
  {
    name: 'Мои вакансии',
    path: '/company/myVacancies'
  },
  {
    name: 'Выйти',
    path: '/logOut'
  }
]

const settingsForJobSeeker = [
  {
    name: 'Профиль',
    path: '/jobSeeker/profile'
  },
  {
    name: 'Резюме',
    path: '/jobSeeker/cv'
  },
  {
    name: 'Отклики',
    path: '/jobSeeker/MyResponses'
  },
  {
    name: 'Выйти',
    path: '/logOut'
  }
]


const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawer, setDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer({...drawer, [anchor]: open});
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isCompany = localStorage.getItem('typeOfAccount') === 'company'
  const isAuthJobSeeker = useSelector(state => state.jobSeeker.isAuth)
  const isAuthCompany = useSelector(state => state.company.isAuth)
  const company = useSelector(state => state.company.company)
  const jobSeeker = useSelector(state => state.jobSeeker.company)
  console.log(isCompany)
  const [mobileView, setMobileView] = useState(false);
  const setResponsiveness = () => {
    return window.innerWidth < 768 ? setMobileView(true) : setMobileView(false);
  };

  useEffect(() => {
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  function showSettings() {
    if (mobileView) {
      return (
        <Button style={{color: '#fff', borderColor: '#fff'}} variant="text"
                onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
      )
    }
    if (isAuthCompany && isCompany) {
      return (
        <Box sx={{flexGrow: 0}}>
          <Tooltip title={company.firstName ?? 'Empty'}>
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt="" src={''}/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: '45px'}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settingsForCompany.map((setting) => (
              <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                <Typography><Link to={setting.path}>{setting.name}</Link></Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )
    } else if (isAuthJobSeeker && !isCompany) {
      return (
        <Box sx={{flexGrow: 0}}>
          <Tooltip title="Open settings2">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: '45px'}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settingsForJobSeeker.map((setting) => (
              <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                <Typography><Link to={setting.path}>{setting.name}</Link></Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )
    } else {
      return (
        <Link style={{textDecoration: 'none'}} to="/jobSeeker/authorization"><Button
          style={{color: '#fff', borderColor: '#fff'}} variant="outlined">Найти работу</Button></Link>
      )
    }
  }

  const list = (anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: 'Вакансии',
            path: '/vacancies'
          },
          {
            name: 'Компании',
            path: '/'
          },
          {
            name: 'Контакты',
            path: '/'
          },].map((path, index) => (
          <ListItem button key={path.name}>
            <ListItemText primary={path.name}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {isAuthCompany || isAuthJobSeeker ?
          isCompany && isAuthCompany ?
            settingsForCompany.map((settingsForCompany, index) => (
              <Link to={settingsForCompany.path}>
                <ListItem button key={settingsForCompany.name}>
                  <ListItemText primary={settingsForCompany.name}/>
                </ListItem>
              </Link>
            ))
            :
            settingsForJobSeeker.map((settingForJobSeeker, index) => (
              <Link to={settingForJobSeeker.path}>
                <ListItem button key={settingForJobSeeker.name}>
                  <ListItemText primary={settingForJobSeeker.name}/>
                </ListItem>
              </Link>
            ))
          :
          [
            {
              name: 'Найти работника',
              path: '/company/authorization'
            },
            {
              name: 'Найти работу',
              path: '/jobSeeker/authorization'

            }
          ].map((path, index) => (
            <Link to={path.path}>
              <ListItem button key={path.name}>
                <ListItemText primary={path.name}/>
              </ListItem>
            </Link>
          ))}

      </List>
    </Box>
  );

  return (
    <div className={classes.header}>
      <Drawer
        anchor={'left'}
        open={drawer['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </Drawer>
      <AppBar style={{backgroundColor: '#37474f'}}>
        <Container maxWidth={"lg"}>
          <Grid justifyContent={'space-between'} container>
            <Grid item lg={2}>
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                >
                  <Link style={{color: "#fff", textDecoration: "none", textTransform: 'uppercase'}}
                        to={'/'}>GoIntern </Link>
                </Typography>
              </Toolbar>
            </Grid>
            <Grid item lg={7} sm={1}>
              {!mobileView ? <DesktopNavbar/> : ''}
            </Grid>
            <Grid item lg={2}>
              {showSettings()}
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
