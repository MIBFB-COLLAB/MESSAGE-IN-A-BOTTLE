import './FullStoryCard.css';
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const FullStoryCard = ({ story }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">
          <h3>{story.title}</h3>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <p>{story.message}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FullStoryCard;
