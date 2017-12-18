const postNewFavoriteData = async ({
  movieId,
  image,
  userId,
  title,
  releaseDate,
  voteAverage,
  overview
}) => {
  /*eslint-disable camelcase */
  const fetchFavorite = await fetch(
    'http://localhost:3000/api/users/favorites/new',
    {
      method: 'POST',
      body: JSON.stringify({
        movie_id: movieId,
        user_id: userId,
        title: title,
        poster_path: image,
        release_date: releaseDate,
        vote_average: voteAverage,
        overview: overview
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  let response = await fetchFavorite.json();
  console.log(response)

  return response;
};

export default postNewFavoriteData;
