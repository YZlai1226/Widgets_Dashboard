import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import AddModal from './AddModal.js';
export default function ButtonAppBar() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Back2Basics
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
          <AddModal />
  
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          </Typography>
          <Button color="inherit" onClick={() => {navigate("/login")}}>Login</Button>
          <Button color="inherit" onClick={() => {navigate("/")}}>Log Out</Button>
          <Button color="inherit" onClick={() => {navigate("/register")}}>Register</Button>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}