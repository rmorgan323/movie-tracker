import getRecentMovies from '../helper/getRecentMovies/getRecentMovies';
import checkUser from '../helper/checkUser/checkUser';
import getUser from '../helper/getUser/getUser';
import addNewUser from '../helper/addNewUser/addNewUser';
import getUserFavorites from '../helper/getUserFavorites/getUserFavorites';
import postNewFavoriteData from '../helper/postNewFavoriteData/postNewFavoriteData';
import deleteFavoriteData from '../helper/deleteFavoriteData/deleteFavoriteData';

export const getMovies = () => async dispatch => {
  const newMovies = await getRecentMovies();
  dispatch(makeMovieArray(newMovies));
};

export const makeMovieArray = movies => ({
  type: 'MAKE_MOVIE_ARRAY',
  movies
});

export const fetchUsers = user => async dispatch => {
  const response = await addNewUser(user);

  if (response.status === 'success') {
    const user = await getUser(response.id);
    localStorage.setItem('movieTracker', JSON.stringify(response.data));
    dispatch(setUser(user));
  } else {
    dispatch(signupFailure('error-signup'));
  }
};

export const checkForUser = user => async dispatch => {
  const response = await checkUser(user);

  if (response.status === 'success') {
    localStorage.setItem('movieTracker', JSON.stringify(response.data));
    dispatch(setUser(response.data));
  } else {
    dispatch(signupFailure('error-login'));
  }
};

export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const newUser = user => ({
  type: 'ADD_NEW_USER',
  user
});

export const signupFailure = msg => ({
  type: 'SIGNUP_ERROR',
  msg
});

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});

export const checkUserFavorites = userId => async dispatch => {
  const response = await getUserFavorites(userId);

  const user = JSON.parse(localStorage.getItem('movieTracker'));
  localStorage.setItem(
    'movieTracker',
    JSON.stringify(Object.assign({}, user, { favorites: response.data }))
  );
  dispatch(setUserFavorites(response.data));
};

export const setUserFavorites = favorites => ({
  type: 'SET_USER_FAVORITES',
  favorites
});

export const addPost = movie => async dispatch => {
  const response = await postNewFavoriteData(movie);

  if (response.status === 'success') {
    dispatch(addFavorite(movie));
  }
};

export const addFavorite = movie => ({
  type: 'ADD_FAVORITE',
  movie
});

export const deletePost = movie => async dispatch => {
  const response = await deleteFavoriteData(movie.userId, movie.movieId);

  if (response.status === 'success') {
    dispatch(deleteFavorite(movie));
  }
};

export const deleteFavorite = movie => ({
  type: 'DELETE_FAVORITE',
  movie
});
