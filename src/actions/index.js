import { getRecentMovies } from '../helper/getRecentMovies/getRecentMovies';
import addNewUser from '../helper/addNewUser/addNewUser';
import getUser from '../helper/getUser/getUser';
import checkUser from '../helper/checkUser/checkUser';
import getFavesOnLogin from '../helper/getFavorites/getFavorites';
import postNewFavoriteData from '../helper/postNewFavoriteData/postNewFavoriteData';
import deleteFavoriteData from '../helper/deleteFavoriteData/deleteFavoriteData';

export const makeMovieArray = movies => ({
  type: 'MAKE_MOVIE_ARRAY',
  movies
});

export const getMovies = () => async dispatch => {
  const newMovies = await getRecentMovies();
  dispatch(makeMovieArray(newMovies));
};

export const newUser = user => ({
  type: 'ADD_NEW_USER',
  user
});

export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const fetchUsers = user => async dispatch => {
  const response = await addNewUser(user);
  if (response.status === 'success') {
    const user = await getUser(response.id);
    dispatch(setUser(user));
  } else {
    dispatch(signupFailure('error-signup'));
  }
};

export const signupFailure = msg => ({
  type: 'SIGNUP_ERROR',
  msg
});

export const checkForUser = user => async dispatch => {
  const response = await checkUser(user);
  if (response.status === 'success') {
    dispatch(setUser(response.data));
  } else {
    dispatch(signupFailure('error-login'));
  }
};

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});

export const deletePost = (movie) => async dispatch => {
  const response = await deleteFavoriteData(movie.userId, movie.movieId);

  if (response.status === 'success') {
    dispatch(deleteFavorite(movie));
  }
};

export const deleteFavorite = (movie) => ({
  type: 'DELETE_FAVORITE',
  movie
});

export const addPost = (movie) => async dispatch => {
  const response = await postNewFavoriteData(movie);

  if (response.status === 'success') {
    dispatch(addFavorite(movie));
  }
};

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});

export const getUserFavorites = (userId) => async dispatch => {
  const response = await getFavesOnLogin(userId);
  dispatch(getFaves(response.data));
};

export const getFaves = (favorites) => ({
  type: 'GET_FAVORITES',
  favorites
});

