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

  const [title, setTitle] = useState(attributes.title);
  const [message, setMessage] = useState(attributes.message);
  const id = data.id;
  const [left, setLeft] = useState(1000);

  const setCharacterLimit = (e) => {
    let input = e.target.value;
    setMessage(e.target.value);
    setLeft(1000 - input.length);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    const newStory = {
      name: attributes.name,
      title,
      message,
    };
    editNewStory(newStory, id).then((data) => console.log(data));
  };

  const deleteNewStory = (e) => {
    e.preventDefault();
    deleteStory(id);
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
      <Typography
        id="editInstructions">
        Your story successfully been added to Message in a Bottle.
        <br />
        Please take a moment to review, edit or remove your story.
        <br />
        Once you have exited this screen, you are unable to make any further
        changes.
      </Typography>
      <FormControl variant="standard">
        <TextField
          placeholder="Title"
          label="Title"
          size="small"
          type="text"
          id="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <Stack direction="column" spacing={4}>
        <FormControl variant="standard" >
          <TextField
            id="outlinedTextArea"
            label={`${left} characters left`}
            type="text"
            className="message"
            placeholder="Type your story here"
            value={message}
            required
            inputProps={{
              maxLength:1000
            }}
            onChange={(e) => setCharacterLimit(e)}
            multiline
          />
          <FormHelperText id="component-helper-text">Your Story</FormHelperText>
        </FormControl>
        <Typography variant="h6" id="text">
          Once you have clicked a button, click outside the dialog box to
          complete your submission
        </Typography>
        <Button
        id="editStoryBtn"
          variant="outlined"
          type="submit"
          onClick={(e) => submitMessage(e)}
        >
          Edit Story
        </Button>
        <Button
          id="deleteBtn"
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
