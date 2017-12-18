import userReducers from './userReducers';
import * as actions from '../../actions';
import { mockDefaultStore } from '../../data/mockDefaultStore';
import { mockStoreWithUser } from '../../data/mockStoreWithUser';
import { mockMessage } from '../../data/mockMessage';
import mockRealUser from '../../data/mockRealUser';
import { mockMovie, mockMovieArray, userWithMovieArray, mockMovieWithUser } from '../../data/mockMovie';
import { mockNewUserWithoutFaves } from '../../data/mockNewUserWithoutFaves';
import { mockNewUser2 } from '../../data/mockNewUser';

describe('userReducer tests', () => {
	describe('logins and logouts tests', () => {
		it('should return the default store on page load', () => {
			const expected = mockDefaultStore;

			expect(userReducers(undefined, {})).toEqual(expected);
		})

		it('should return a new store when set user action is called', () => {
			const expected = mockStoreWithUser;
			const mockUserState = mockNewUser2;

			expect(userReducers(undefined, actions.setUser(mockUserState))).toEqual(expected);
		})

		it('should return an error message when signup failure action is called', () => {
			const expected = mockMessage;

			expect(userReducers(undefined, actions.signupFailure(mockMessage))).toEqual(expected);
		})

		it('should return the default store when user logout action is called', () => {
			const expected = mockDefaultStore;
			const mockUserState = mockNewUserWithoutFaves;

			expect(userReducers(mockUserState, actions.userLogout())).toEqual(expected);
		})
	})

	describe('favorites tests', () => {
		it('should set pull user favorites when set user favorites action is called', () => {
			const mockUserState = mockNewUserWithoutFaves;
			const movies = mockMovieArray;
			const expected = userWithMovieArray;

			expect(userReducers(mockUserState, actions.setUserFavorites(movies))).toEqual(expected)
		})

		it('should update the store when add favorite action is called', () => {
			const mockUserState = mockNewUserWithoutFaves;
			const movie = mockMovieWithUser
			const expected = userWithMovieArray

			expect(userReducers(mockUserState, actions.addFavorite(movie))).toEqual(expected)
		})

		it('should update the store when delete favorite action is called', () => {
			const expected = mockNewUserWithoutFaves
			const movie = mockMovieWithUser
			const mockUserState = userWithMovieArray

			expect(userReducers(mockUserState, actions.deleteFavorite(movie))).toEqual(expected)
		})
	})
});
