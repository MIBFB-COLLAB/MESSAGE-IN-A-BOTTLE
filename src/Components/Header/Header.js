import './Header.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import MicroModal from 'react-micro-modal';
import { Link } from 'react-router-dom';
import { NewStoryForm } from '../NewStoryForm/NewStoryForm';

const Header = () => {
  return (
    <header className="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="header-text">
                Welcome to Message in a Bottle
              </Link>
            </Typography>
            <MicroModal
              backdrop="static"
              trigger={(open) => (
                <div onClick={open}>
                  <button className="story-submit">Submit a story</button>
                </div>
              )}
            >
              {(close) => {
                return (
                  <article>
                    <h3>Create Your Message</h3>
                    <NewStoryForm />
                  </article>
                );
              }}
            </MicroModal>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
