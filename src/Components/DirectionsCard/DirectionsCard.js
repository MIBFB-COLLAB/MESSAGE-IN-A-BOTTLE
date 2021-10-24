import React from 'react';

export const DirectionsCard = ({ direction }) => {
  const { narrative, distance } = direction;
  return (
    <>
      {distance > 0 && (
        <article>
          <p>
            {narrative} for {distance}
          </p>
        </article>
      )}
      {distance === '0 miles' && <p>"You have reached the story's origin"</p>}
    </>
  );
};
