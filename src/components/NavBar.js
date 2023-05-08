import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='success'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Blog Dashboard
          </Typography>
        <Button variant='contained' color='inherit'><Link to={'/'}>Home</Link></Button>
        <Box flexGrow={0.08} />
        <Button color='inherit' variant='contained'><Link to={'/add'}>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
