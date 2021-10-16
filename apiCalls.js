export const getData = async (longitude, latitude) => {
  const response = await fetch(
    'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories'
  );
  return await response.json();
};
