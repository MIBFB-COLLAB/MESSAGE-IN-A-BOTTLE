import './UserInstructions.css';
import React from 'react';
import { Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserInstructions = () => {
  return (
    <article className="instructions">
      <h4>Explore for hidden stories.</h4>
      <ol>
        <li>Share your location</li>
        <li>Browse and pick a story near you</li>
        <li>Follow the directions as they take you to your story's hidden spot.</li>
        <li>When you're within 1 mile of your story, click "Reveal."</li>
        <li>Read, enjoy, and find the hidden stories your community has to offer.</li>
      </ol>
      <p>Happy searching!</p>
      <Alert variant='warning'>
        Access to your current location is required for
        app functionality
      </Alert>
    </article>
  );
};

export default UserInstructions;
