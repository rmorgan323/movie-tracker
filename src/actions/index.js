import { getRecentMovies } from '../components/helper/apiCalls';
import { addNewUser } from '../components/helper/addNewUser/addNewUser';
import getUser from '../components/helper/getUser.js'

export const makeMovieArray = (movies) => ({
  type: 'MAKE_MOVIE_ARRAY',
  movies
});

export const getMovies = () => async (dispatch) => {
	const newMovies = await getRecentMovies();
	dispatch(makeMovieArray(newMovies));
}

//////

export const newUser = (user) => ({
	type: 'ADD_NEW_USER',
	user
})

export const setUser = (user) =>({
	type: 'SET_USER',
	user
})

export const fetchUsers = (user) => async (dispatch) => {
	const response = await addNewUser(user);
	if(response.status === 'success'){
		const user = await getUser(response.id)
		dispatch(setUser(user))
	} 

}

export const checkUsers = (response) => ({
	type: 'CHECK_USERS',
	response
})

export const signupFailure = (msg) => {
	type: 'SIGNUP_ERROR',
	msg
}

