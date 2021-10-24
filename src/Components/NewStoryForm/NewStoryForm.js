import './NewStoryForm.css';
import React, { useState, useEffect } from 'react';
import { sendNewStory } from '../../apiCalls';
import MicroModal from 'react-micro-modal';
import StoryEdit from '../StoryEdit/StoryEdit';

//**************************** */ MUI Components

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
// import SendIcon from '@mui/icons-material/Send';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export const NewStoryForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [newStory, setNewStory] = useState(null);
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
    setMessage(e.target.value);
    setLeft(1000 - input.length);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  }, []);

  return (
    <Box
      className="new-story-modal"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {!newStory && (
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
        )}
        {newStory && (
          <MicroModal trigger={(open) => <StoryEdit newStory={newStory} />}>
            {(close) => {
              return <StoryEdit newStory={newStory} />;
            }}
          </MicroModal>
        )}
      </div>
    </Box>
  );
};
