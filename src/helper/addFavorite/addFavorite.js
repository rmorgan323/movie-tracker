const addFavorites = async ({ id, image, userId, title, releaseDate, voteAverage, overview }) => {
  const fetchFavorites = await fetch(
    'http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify({
        movie_id: id,
        user_id: userId,
        title: title,
        poster_path: image,
        release_date: releaseDate,
        vote_avergae: voteAverage,
        overview: overview
      }),
      headers: {
        'Content-Type': 'application/json'
    }
    }
  );
  const jsonFavorites = await fetchFavorites.json();

  return jsonFavorites;
};

export default getFavorites;