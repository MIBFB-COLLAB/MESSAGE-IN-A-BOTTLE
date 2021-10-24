import './Header.css';
import React from 'react';
import MicroModal from 'react-micro-modal';
import { Link } from 'react-router-dom'
import { NewStoryForm } from '../NewStoryForm/NewStoryForm';
import { Button, Navbar, Container, Row, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Stack direction="horizontal" gap={3}>
          <div><Navbar.Brand id="brand-name" href='/'> Welcome to Message in a Bottle</Navbar.Brand></div>
          <div><MicroModal
            backdrop='static'
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
                  <NewStoryForm/>
                </article>
              );
            }}
          </MicroModal></div>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
