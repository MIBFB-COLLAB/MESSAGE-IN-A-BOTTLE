import './NewStoryForm.css';
import React, { useState } from 'react';

export const NewStoryForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
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
      <input
        type="message"
        className="message"
        placeholder="type your story here"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="story-submit-button">
        Submit Story
      </button>
    </form>
  );
};
