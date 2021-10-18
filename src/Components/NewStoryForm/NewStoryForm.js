import './NewStoryForm.css';
import React, { useState, useEffect } from 'react';
import { sendNewStory } from '../../apiCalls';

export const NewStoryForm = ({setNewStory}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [left, setLeft] = useState(1000);

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

  const setCharacterLimit = (e) => {
    let input = e.target.value;
    setMessage(e.target.value)
    setLeft(1000 - input.length);
  }

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
        // onChange={setCharacterLimit}
        className="message"
        placeholder="type your story here"
        maxLength={left}
        value={message}
        required
        onChange={(e) => setCharacterLimit(e)}
      />
      <h2>{left} characters left</h2>
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
