import './NewStoryForm.css';
import React, { useState, useEffect } from 'react';
import { sendNewStory } from '../../apiCalls';

export const NewStoryForm = ({setNewStory}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');

  const getLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const catchError = () => {
    setError('Sorry, no position available.');
  };

  const submitMessage = (e) => {
    e.preventDefault();

    const newStory = {
      title,
      message,
      longitude,
      latitude,
    };
    sendNewStory(newStory).then((data) => setNewStory(data));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  }, []);

  return (
    <form type="submit" className="new-story-form">
      <input
        type="text"
        className="title"
        placeholder="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        className="message"
        placeholder="type your story here"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="story-submit-button"
        onClick={(e) => submitMessage(e)}
      >
        Submit Story
      </button>
    </form>
  );
};
