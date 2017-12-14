import { getRecentMovies } from '../components/helper/apiCalls';

export const makeMovieArray = (movies) => ({
  type: 'MAKE_MOVIE_ARRAY', 
  movies
});

export const getMovies = () => async (dispatch) => {
	const newMovies = await getRecentMovies();
	dispatch(makeMovieArray(newMovies));
}