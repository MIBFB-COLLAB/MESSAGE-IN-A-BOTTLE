import './StoryEdit.css';
import { useState } from 'react';
import { editNewStory, deleteStory } from '../../apiCalls';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { FormHelperText } from '@mui/material';

const StoryEdit = ({ newStory }) => {
  const { data } = newStory;
  const { attributes } = data;
  const { name, title, message, latitude, longitude } = attributes;

  const [newTitle, setNewTitle] = useState(title);
  const [newMessage, setNewMessage] = useState(message);
  const id = newStory.data.id;
  const [left, setLeft] = useState(1000);

  const setCharacterLimit = (e) => {
    let input = e.target.value;
    setNewMessage(e.target.value);
    setLeft(1000 - input.length);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    console.log(latitude, longitude);
    const newStory = {
      newTitle,
      newMessage,
      longitude,
      latitude,
    };
    editNewStory(newStory, id).then((data) => console.log(data));
  };

  const deleteNewStory = (e) => {
    e.preventDefault();
    deleteStory(id).then((data) => console.log(data));
  };

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
      <Typography>
        Your story successfully been added to Message in a Bottle.
        <br />
        Please take a moment to review, edit or remove your story.
        <br />
        Once you have exited this screen, you are unable to make any further
        changes.
      </Typography>
      <FormControl variant="standard">
        {/* <InputLabel htmlFor="component-simple" required>
          Title
        </InputLabel> */}
        <TextField
          placeholder="Title"
          // id="component-simple"
          label="Title"
          size="small"
          type="text"
          className="title"
          value={newTitle}
          inputProps={{
            maxLength:{left},
          }}
          required
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </FormControl>
      <Stack direction="column" spacing={4}>
        <FormControl variant="standard">
          <TextField
            // id="outlined-textarea"
            label={`${left} characters left`}
            type="text"
            className="message"
            placeholder="Type your story here"
            value={newMessage}
            required
            inputProps={{
              maxLength:{left},
              minLength:0
            }}
            onChange={(e) => setCharacterLimit(e)}
            multiline
          />
          <FormHelperText id="component-helper-text">Your Story</FormHelperText>
        </FormControl>
        <Typography variant="h6">{left} characters left</Typography>
        <Button
          // endIcon={<SendIcon />}
          variant="outlined"
          type="submit"
          className="story-submit-button"
          onClick={(e) => submitMessage(e)}
        >
          Submit Story
        </Button>
        <Button
          // Trash Icon
          variant="outlined"
          type="submit"
          onClick={(e) => deleteNewStory(e)}
        >
          Delete Story
        </Button>
      </Stack>
    </Box>
  );
};

export default StoryEdit;
