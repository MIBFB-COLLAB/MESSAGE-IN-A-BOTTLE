import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const DirectionsCard = ({ direction }) => {
  const { narrative, distance } = direction;
  const listItemStyle = {
    borderBottom: 'solid #EAEDF2 3px',
  };

  return (
    <ListItem sx={listItemStyle}>
      <ListItemText
        primary={narrative}
        secondary={`For the next ${distance}`}
      />
    </ListItem>
  );
};
