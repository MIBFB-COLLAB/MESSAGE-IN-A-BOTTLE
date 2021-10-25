import './StoriesPage.css';
import StoriesContainer from '../StoriesContainer/StoriesContainer';

const StoriesPage = ({ latitude, longitude }) => {
  return (
    <main className="stories-page">
      <p className="instructions">
        Click a story's directions for help navigating to view the message. 
        Click to view the story if you are within 1/4 mile of the story's location.
      </p>
      <StoriesContainer latitude={latitude} longitude={longitude} />
    </main>
  );
};

export default StoriesPage;
