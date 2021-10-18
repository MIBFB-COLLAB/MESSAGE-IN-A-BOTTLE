import './HomePage.css';
import React from 'react';
import Header from '../Header/Header';
import UserInstructions from '../UserInstructions/UserInstructions';

const HomePage = () => {
  return (
    <section className="Home-page">
      <Header />
      <UserInstructions />
    </section>
  );
};

export default HomePage;
