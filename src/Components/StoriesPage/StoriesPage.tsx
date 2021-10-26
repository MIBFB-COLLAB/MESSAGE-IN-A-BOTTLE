import './StoriesPage.css';
import StoriesContainer from '../StoriesContainer/StoriesContainer';

const StoriesPage = ({ latitude, longitude }) => {
  return (
    <main className="stories-page">
      <div className="instructions">
        <h4 className="user-instructions">
          Click a story's directions for help navigating to view the message.</h4>
        <h4 className="user-instructions">
          Click to view the story if you are within 1/4 mile of the story's location.
        </h4>
      </div>
      <StoriesContainer latitude={latitude} longitude={longitude} />
    </main>
  );
};

export default StoriesPage;
