import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'black', color: 'white' }}>
      <Toolbar>
        <Box
          component='img'
          src={logo}
          alt='Asurion Logo'
          height='40'
          sx={{ mr: 2, width: 150 }}
        />
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Phone Insurance Claims
        </Typography>
        {/* <Button component={Link} to='/login' sx={{ color: 'white' }}>
          Login
        </Button> */}
        <Button component={Link} to='/' color='inherit'>
          Home
        </Button>
        <Button component={Link} to='/create' color='inherit'>
          Create Claim
        </Button>
      </Toolbar>
    </AppBar>
  );
}
