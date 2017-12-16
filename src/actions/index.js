import { getRecentMovies } from '../helper/apiCalls';
import { addNewUser } from '../helper/addNewUser/addNewUser';
import getUser from '../helper/getUser.js';
import { checkUser } from '../helper/checkUser.js';
import getFavorites from '../helper/getFavorites/getFavorites';

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
		//dispactch(getFavorites(user.id))
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

export const toggleFavorite = (props, movieBundle) => async dispatch => ({
	
	// props.user.userInfo.favorites.find(favorite => favorite.id === movieBundle.id) ? dispatch(deleteFavorite(movieBundle)) : dispatch(addFavorite(movieBundle))
	// dispatch(addFavorite(movieBundle))
})

export const deleteFavorite = (movie) => ({
	type: 'DELETE_FAVORITE',
	movie
})

export const addFavorite = (movie) => ({
	type: 'ADD_FAVORITE',
	movie
})


// export const getFavorites = (userId, movieId, movieObj) => async dispatch => {
//   const response = await getFavorites(userId);

//   if (response.status === 'success') {
//     response.data.find(favorite => favorite.id === movieId)
//       ? deleteFavorite(userId, movieId)
//       : addFavorite(movieObj);
//   }
// };
