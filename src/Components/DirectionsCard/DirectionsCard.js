import React from 'react';

export const DirectionsCard = ({ directions }) => {
  const { narrative, distance } = directions;
  return (
    <article>
      <p>
        {narrative} for {distance}
      </p>
    </article>
  );
};
