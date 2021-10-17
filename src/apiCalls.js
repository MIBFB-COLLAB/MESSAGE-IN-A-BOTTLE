export const getData = async (longitude, latitude) => {
  const response = await fetch(
    'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories',
    { mode: 'cors' }
  );
  return await response.json();
};
