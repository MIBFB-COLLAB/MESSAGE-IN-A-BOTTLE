import './App.css';
import StoriesPage from '../StoriesPage/StoriesPage';
import HomePage from '../HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ErrorHandlingPage from '../ErrorHandlingPage/ErrorHandlingPage';
import FullStoryPage from '../FullStoryPage/FullStoryPage';
import Directions from '../Directions/Directions';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/storiesPage/:latitude/:longitude"
          render={({ match }) => (
            <StoriesPage
              latitude={match.params.latitude}
              longitude={match.params.longitude}
            />
          )}
        />
        <Route
          exact
          path="/fullStoryPage/:id/:latitude/:longitude"
          render={({ match }) => (
            <FullStoryPage
              id={match.params.id}
              latitude={match.params.latitude}
              longitude={match.params.longitude}
            />
          )}
        />
        <Route
          exact
          path="/directionsPage/:id/:latitude/:longitude"
          render={({ match }) => (
            <Directions
              id={match.params.id}
              latitude={match.params.latitude}
              longitude={match.params.longitude}
            />
          )}
        />
        <Route render={() => <ErrorHandlingPage />} />
      </Switch>
    </div>
  );
};

export default App;
