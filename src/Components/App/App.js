import './App.css';
import React from 'react';
import StoriesPage from '../StoriesPage/StoriesPage';
import HomePage from '../HomePage/HomePage';
import { LocationSelection } from '../LocationSelection/LocationSelection';

const App = () => {
  return (
    <div className="App">
      <StoriesPage />
      <HomePage />
      <LocationSelection />
    </div>
  );
};

export default App;
