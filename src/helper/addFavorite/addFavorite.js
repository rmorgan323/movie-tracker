const plusFavorite = async ({ id, image, userId, title, releaseDate, voteAverage, overview }) => {
  console.log(id, userId, title)
  const fetchFavorite = await fetch(
    'http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify({
        movie_id: id,
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
  // const jsonFavorite = await fetchFavorite.json();

  console.log(fetchFavorite)
};

export default plusFavorite;