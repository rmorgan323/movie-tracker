export const removeFavorite = async (userId, movieId) => {
  const removeFetch = await fetch(
    `http://localhost:3000/api/users/${userId}/favorites/${movieId}`,
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

export default removeFavorite;
