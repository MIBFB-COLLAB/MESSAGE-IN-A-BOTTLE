import './App.css';
import React from 'react';
import StoriesPage from '../StoriesPage/StoriesPage';
import HomePage from '../HomePage/HomePage';
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/storiesPage' render={() => <StoriesPage /> } />
    </div>
  );
};

export default App;
