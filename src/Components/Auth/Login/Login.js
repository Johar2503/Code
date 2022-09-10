import React,{useState} from 'react';
import './Login.css';
import { useStateValue } from "../../../functions/Utils/StateProvider";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { validateUser } from '../../../functions/Auth/Login';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from "../../../functions/Utils/Reducer";




function Login() {
  
  return (
    <div className='Login-Container'>
        <div className='Login-Wrapper'>
            <div className='Login-Left'>
                <img className='Login-Image'/>
            </div>

            <div className="Login-Right">
            <h2 className="Login-Header">Login</h2>

            <div className="bloc-tabs">
              <ButtonGroup className='user-change-btn'>
                    <Button
                        //className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        id="userTab"
                       // onClick={() => toggleTab(1)}
                      >
                      USER
                      </Button>
                      <Button
                       // className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        id="adminTab"
                       //onClick={() => toggleTab(2)}
                      >
                      ADMIN
                      </Button>
                      </ButtonGroup>
                    </div>
                    
          
            <FormControl className="Login-Input" variant="standard">
            <TextField id="email" htmlFor="email" label="UserName" variant='standard'
            required
               endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    //aria-label="toggle password visibility"
                   // onClick={handleClickShowPassword}
                   // onMouseDown={(e) => {e.preventDefault()}}
                  >
                    {/*values.showPassword ? <span className="material-icons">visibility_off</span> : <span className="material-icons">visibility</span>*/}
                  </IconButton>
                </InputAdornment>
              }
            />
              
              <TextField id="password" htmlFor="password" label="Password" variant='standard'
              required
              type="password"
               endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    //aria-label="toggle password visibility"
                   // onClick={handleClickShowPassword}
                   // onMouseDown={(e) => {e.preventDefault()}}
                  >
                    {/*values.showPassword ? <span className="material-icons">visibility_off</span> : <span className="material-icons">visibility</span>*/}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
         <p> <Button id="loginButton" variant="contained" className="Login-Button" onClick={()=>alert("Login Successfully")}>Login</Button></p>
          <p className="Login-Text">Don't have an account? <a id="signupLink" href="/user/signup" className="Login-Link">Signup</a></p>
        
        </div>
        </div>
    </div>
  )
}

export default Login;