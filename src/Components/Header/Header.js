import './Header.css';
import React from 'react';
import MicroModal from 'react-micro-modal';
import { Link } from 'react-router-dom'
import { NewStoryForm } from '../NewStoryForm/NewStoryForm';

const Header = () => {
  return (
    <header className="Header">
      <Link to='/' className='header-text'> 
        Welcome to Message in a Bottle 
      </Link>
      <MicroModal
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
      </MicroModal>
        
    </header>
  );
};

export default Header;
