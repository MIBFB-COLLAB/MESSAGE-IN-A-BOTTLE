import './HomePage.css';
import React from 'react';
import Header from '../Header/Header';
import UserInstructions from '../UserInstructions/UserInstructions';
import { LocationSelection } from '../LocationSelection/LocationSelection';

const HomePage = () => {
  return (
    <section className="home-page">
      <UserInstructions />
      <LocationSelection />
    </section>
  );
};

export default HomePage;
