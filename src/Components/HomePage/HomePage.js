import './HomePage.css';
import React from 'react';
import Header from '../Header/Header';
import UserInstructions from '../UserInstructions/UserInstructions';
import { LocationSelection } from '../LocationSelection/LocationSelection';

const HomePage = ({latitude, longitude, getLocation}) => {
  return (
    <section className="home-page">
      <Header />
      <UserInstructions />
      <LocationSelection latitude={latitude} longitude={longitude} getLocation={getLocation}/>
    </section>
  );
};

export default HomePage;
