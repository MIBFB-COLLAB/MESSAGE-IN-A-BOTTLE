import './NewStoryForm.css';
import React, { useState } from 'react';

export const NewStoryForm = () => {
  const [title, setTitle] = useState('');
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
    </form>
  );
};
