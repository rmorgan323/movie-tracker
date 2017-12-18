export const deleteFavoriteData = async (userId, movieId) => {
  const removeFetch = await fetch(
    'http://localhost:3000/api/users/1/favorites/181808',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  const response = await removeFetch.json();

  return response;
};

export default deleteFavoriteData;
