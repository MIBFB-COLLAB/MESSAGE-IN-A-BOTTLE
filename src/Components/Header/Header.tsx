import './Header.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
                Message in a Bottle
              </Link>
            </Typography>
            <MicroModal
              trigger={(open) => (
                <div onClick={open}>
                  <Button color="inherit">Create Story</Button>
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
