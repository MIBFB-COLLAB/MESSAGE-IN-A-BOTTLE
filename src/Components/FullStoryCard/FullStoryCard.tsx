import './FullStoryCard.css';
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { CardActions } from '@mui/material';

const FullStoryCard = ({ story }) => {
  return (
    <article className="full-story-wrapper">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">
            {story.title}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <p>{story.message}</p>
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
};

export default FullStoryCard;
