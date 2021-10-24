export const getData = async (latitude, longitude) => {
  const response = await fetch(
    `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories?latitude=${latitude}&longitude=${longitude}`,
    { mode: 'cors' }
  );
  return await response.json();
};

export const getDirections = async (id, latitude, longitude) => {
  const response = await fetch(
    `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories/${id}/directions?lat=${latitude}&long=${longitude}`,
    { mode: 'cors' }
  );
  return await response.json();
};

export const getStory = async (id, latitude, longitude) => {
  const response = await fetch(
    `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories/${id}?latitude=${latitude}&longitude=${longitude}`,
    { mode: 'cors' }
  )
  return await response.json();
}

export const sendNewStory = async (newStory) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newStory),
  };
  const response = await fetch(
    'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories',
    requestOptions
  );
  return await response.json();
};

export const editNewStory = async (newStory, id) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newStory),
  };
  const response = await fetch(
    `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories/${id}`,
    requestOptions
  );
  return await response.json();
};

export const deleteStory = async (id) => {
  const response = await fetch(
    `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories/${id}`,
    { method: 'DELETE' }
  );

  return await response.json();
};
