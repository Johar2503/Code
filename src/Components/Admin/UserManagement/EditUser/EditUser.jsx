import React, { useState, useEffect } from 'react'
import './EditUser.css'
import Header from '../../../Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function EditUser() {



  const breadcrumbs = [
    <Typography key="1" color="inherit">
      Admin
    </Typography>,
    <Link
      key="2" 
      color="inherit"
      underline="hover"
      href="/admin/editUsers"
    >
      Users
    </Link>,
    <Typography key="3" color="text.primary">
      Edit User
    </Typography>
  ];



  return (
    <div>
        <Header highlight="Users"/>
        <div className="EditUser-Nav">
          <Avatar sx={{width: 30, height: 30, marginRight: '8px'}}/>
      
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className="EditUser-Form">
          <TextField
          required
          // error = {values.showError}
            type={"email"}
            className="EditUser-Input"
            label="Email"
          //  value={values.email}
          //  onChange={handleChange('email')}
            variant="standard"
          />
          <TextField
          required
          // error = {values.showError}
            type={"text"}
            className="EditUser-Input"
            label="Username"
           // value={values.username}
           // onChange={handleChange('username')}
            variant="standard"
          />
          <TextField
          required
           // error = {values.showError}
            id="address"
            type={"text"}
            className="EditUser-Input"
            label="Address"
           // value={values.username}
           // onChange={handleChange('username')}
            variant="standard"
          />
          <TextField
          required
          // error = {values.showError}
            type={"text"}
            className="EditUser-Input"
            label="Mobile Number"
           // value={values.mobileNumber}
           // onChange={handleChange('mobileNumber')}
            variant="standard"
          />
          <div className="EditUser-ButtonWrapper">
            <Button variant="contained" className="EditUser-Button" onClick={() => console.log('Updated')}>Update</Button>
          </div>
        </div>
    </div>
  )
}

export default EditUser