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

type Props = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoryEdit = ({ newStory, show, showSetter, storySetter }) => {
  const { data } = newStory;
  const { attributes } = data;
  const [title, setTitle] = useState(attributes.title);
  const [message, setMessage] = useState(attributes.message);
  const id = data.id;
  const [left, setLeft] = useState(1000);

    /********************************************/
        /* SET LIMIT FOR STORY MESAAGE */
    /********************************************/
  const setCharacterLimit = (e) => {
    let input = e.target.value;
    setMessage(e.target.value);
    setLeft(1000 - input.length);
  };

    /********************************************/
        /* SUBMIT NEW STORY MESAAGE AND POST */
    /********************************************/
  const submitMessage = (e) => {
    e.preventDefault();
    const newStory = {
      name: attributes.name,
      title,
      message,
    };
    editNewStory(newStory, id).then((data) => console.log(data));
  };

    /********************************************/
                /* DELETE NEW STORY */
    /********************************************/
  const deleteNewStory = (e) => {
    e.preventDefault();
    deleteStory(id);
  };
    /********************************************/
                /* Handle Modal Close */
    /********************************************/
  const handleDelete = (e) => {
    deleteNewStory(e)
    storySetter(null)
    showSetter(false)
  }

  const handleEdit = (e) => {
    submitMessage(e)
    storySetter(null)
    showSetter(false)
  }

  return (
    <Box
      id="newStoryModal"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        id="editInstructions">
        Your story has successfully been added to Message in a Bottle.
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
          onClick={(e) => handleEdit(e)}
        >
          All Done
        </Button>
        <Button
          id="deleteBtn"
          variant="outlined"
          type="submit"
          onClick={(e) => handleDelete(e)}
        >
          Delete Story
        </Button>
      </Stack>
    </Box>
  );
};

export default StoryEdit;
