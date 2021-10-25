import './StoriesPage.css';
import React, { useEffect } from 'react';
import StoriesContainer from '../StoriesContainer/StoriesContainer';
import Header from '../Header/Header';
import UserInstructions from '../UserInstructions/UserInstructions';

const StoriesPage = ({ latitude, longitude }) => {
  return (
    <main className="stories-page">
      <UserInstructions />
      <StoriesContainer latitude={latitude} longitude={longitude} />
    </main>
  );
};

export default StoriesPage;
