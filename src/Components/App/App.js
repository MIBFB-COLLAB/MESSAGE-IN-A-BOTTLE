import './App.css';
import React from 'react';
import StoriesPage from '../StoriesPage/StoriesPage';
import HomePage from '../HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/storiesPage" render={() => <StoriesPage />} />
        <Route
          render={() => (
            <ErrorHandlingCard errorMessage="Whoops, something went wrong!" />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
