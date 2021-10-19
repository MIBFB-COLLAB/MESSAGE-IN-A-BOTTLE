import './App.css';
import React from 'react';
import StoriesPage from '../StoriesPage/StoriesPage';
import HomePage from '../HomePage/HomePage';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <StoriesPage />
    </div>
  );
};

export default App;
