export const cleanRecentData = (moviesObj) => {
  const cleanData = moviesObj.reduce((cleanArray, movie) => {
    cleanArray.push({
      userId: null,
      movieId: movie.id,
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      releaseDate: cleanDate(movie.release_date),
      voteAverage: movie.vote_average,
      overview: movie.overview
    });
    return sortMovies(cleanArray);
  }, []);

  return cleanData;
};

const cleanDate = (date) => {
  const dateArray = date.split('-');
  const newDate = [dateArray[1], dateArray[2], dateArray[0]];

  return newDate.join('/');
};

const sortMovies = (array) => {
  return array.sort( (a, b) => {
    const aDate = a.releaseDate.split('/').splice(0, 2).join('');
    const bDate = b.releaseDate.split('/').splice(0, 2).join('');

    return bDate - aDate;
  });
};