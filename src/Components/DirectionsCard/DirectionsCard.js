import React from 'react';

export const DirectionsCard = ({ direction }) => {
  const { narrative, distance } = direction;
  return (
    <article>
      <p>
        {narrative} for {distance}
      </p>
    </article>
  );
};
