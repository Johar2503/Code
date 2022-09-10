import React, { useState, useEffect } from 'react';
import './Header.css';
import { useStateValue } from '../../functions/Utils/StateProvider';
import { actionTypes } from '../../functions/Utils/Reducer';
//import AsyncStorage from '@react-native-community/async-storage';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
//import AsyncStorage from 'react-native';

function Header({ highlight}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <img src='../Asset/img.png' className="Header-Logo"/>
          </Typography>

          {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', marginRight: '30px' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //onClick={handleOpenNavMenu}
              color="inherit"
            >
              <span className="material-icons">Menu</span>
            </IconButton>
            <Menu
              id="menu-appbar"
             // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              //open={Boolean(anchorElNav)}
             // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >*/}
              {/*
                menuItems.map((menuItem,index) => (
                  <MenuItem key={menuItem} onClick={() => {navigate(navroutes[index])}}>
                    <Typography textAlign="center">{menuItem}</Typography>
                  </MenuItem>
                ))
             */ }
            {/*</Menu>*/}
         {/* </Box>*/}

          
        { /* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '30px' }}>*/}
            {
             /* menuItems.map((menuItem,index) => (
                <Button 
                  key={menuItem} 
                  onClick={() => navigate(navroutes[index])}  
                  className="Header-Button"            
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {menuItem}
                </Button>
             ))*/
            }
            
          {/*</Box>*/}
         
     {/* <React.Fragment>*/}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '1400px'  }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
       onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
       
        <Divider />
        
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Orders
        </MenuItem>
        
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
   {/* </React.Fragment>*/}
            
          {/*<Button color="inherit" >Logout</Button>*/}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header