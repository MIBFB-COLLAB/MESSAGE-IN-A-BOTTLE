export const getData = async (longitude, latitude) => {
  const response = await fetch(
    'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories',
    { mode: 'cors' }
  );
  return await response.json();
};

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
