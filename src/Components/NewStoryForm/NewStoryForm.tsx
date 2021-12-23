import './NewStoryForm.css';
import React, { useState, useEffect } from 'react';
import { sendNewStory } from '../../apiCalls';

/****************************/
        /*MUI Components*/
/****************************/
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import CommunicationStayPrimaryLandscape from 'material-ui/svg-icons/communication/stay-primary-landscape';


export const NewStoryForm = ({newStory, setNewStory}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [left, setLeft] = useState(1000);
  const [disabled, setDisabled] = useState(true);

    /***********************************/
      /* GET USERS CURRENT LOCATION */
    /**********************************/
  const getLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

    /********************************************/
    /* ERROR FOR LOCATION FAIL/REJECTION */
    /********************************************/
  const catchError = () => {
    setError('Sorry, no position available.');
  };
  
    /***********************************/
      /* INPUT CHANGES/BUTTON DISABLE*/
    /**********************************/
  const handleChange = (e) => {
    setTitle(e.target.value)
    if ( title && message ) {
      setDisabled(false);
    }else {
      setDisabled(true)
    }
  }
  
    /***********************************/
          /* SUBMIT NEW MESSAGE */
    /**********************************/
    const submitMessage = (e) => {
      if ( !title || !message ) {
        return 
      } else {
        e.preventDefault();
        const newStory = {
          title,
          message,
          longitude,
          latitude,
        };
        sendNewStory(newStory).then((data) => setNewStory(data))
        .catch(error => setError(error));
      }
    };

    /***********************************/
      /* CHARACTER LIMIT FOR MESSAGE */
    /**********************************/
  const setCharacterLimit = (e) => {
    let input = e.target.value;
    setMessage(e.target.value);
    setLeft(1000 - input.length);

    if ( message && title ) {
      setDisabled(false)
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  }, []);

  return (
    <Box
      id="newStoryModal"
      component="form"
      sx={{
        // '& .MuiFormControl-root': { m: 1, width: .8 },
        backgroundColor: 'white',
        padding: '2%',

      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard"
        sx={{
          width: .9,
        }}
      >
        <TextField
        sx={{
          m: 1,
          width: '100%',
        }}
          inputProps={{
            id: "title",
          }}
          placeholder="Title"
          label="Title"
          size="small"
          type="text"
          className="title"
          value={title}
          required
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
      <Stack direction="column" spacing={4} justifyContent='center' m='auto'>
        <FormControl variant="standard">
          <TextField
            label={`${left} characters left`}
            sx={{
              m: 1,
            }}
            type="text"
            maxRows={4}
            className="message"
            placeholder="Type your story here"
            value={message}
            required
            inputProps={{
              maxLength: 1000,
              id: "message"
            }}
            onChange={(e) => setCharacterLimit(e)}
            multiline
          />
        </FormControl>
        <Button
          sx = {{
            width: .9,
            m: 'auto',
          }}
          disabled={disabled}
          variant="outlined"
          type="submit"
          className="story-submit-button"
          onClick={(e) => submitMessage(e)}
        >
          Submit Story
        </Button>
      </Stack>
    </Box>
  )
};
