import './App.css';
import React, { useState } from 'react';
import StoriesPage from '../StoriesPage/StoriesPage';
import HomePage from '../HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ErrorHandlingPage from '../ErrorHandlingPage/ErrorHandlingPage';


const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const getLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" 
          // component={HomePage} 
          render={() => 
            <HomePage latitude={latitude} longitude={longitude} getLocation={getLocation}/>
          } 
        />
        <Route exact path="/storiesPage" 
          render={() => 
            <StoriesPage latitude={latitude} longitude={longitude}/>
          } 
        />
        <Route
          render={() => 
            <ErrorHandlingPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
