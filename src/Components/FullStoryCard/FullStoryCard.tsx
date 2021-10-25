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
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">
          <h3>{story.title}</h3>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <p>{story.message}</p>
        </Typography>
      </CardContent>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
};

export default FullStoryCard;
