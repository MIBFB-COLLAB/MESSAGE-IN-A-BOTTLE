import {useState} from 'react'
import './Header.css';
import Modal from '../FormModal/FormModal'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MicroModal from 'react-micro-modal';
import { Link } from 'react-router-dom';

const Header = () => {

  const [show, setShow] = useState(false);
  // const Toggle = () => setShow(!show);
  
  return (
    <header className="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="header-text">
                Message in a Bottle
              </Link>
            </Typography>
            <Button color='inherit' onClick={() => setShow(!show)}>Create Story</Button>
            <Modal show={show} setter={setShow}>
            </Modal>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
