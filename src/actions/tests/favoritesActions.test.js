import * as actions from '../index';
import mockMovie from '../../data/mockMovie';


describe('Favorites Actions tests', () => {
	it('should create a SET_USER_FAVORITES action', () => {
		const favorites = [mockMovie];
		const expected = {
			type: 'SET_USER_FAVORITES',
			favorites
		}

		expect(actions.setUserFavorites(favorites)).toEqual(expected);
	})

	it('should create an ADD_FAVORITE action', () => {
		const movie = [mockMovie];
		const expected = {
			type: 'ADD_FAVORITE',
			movie
		}

		expect(actions.addFavorite(movie)).toEqual(expected);
	})

	it('should create a DELETE_FAVORITE action', () => {
		const movie = [mockMovie];
		const expected = {
			type: 'DELETE_FAVORITE',
			movie
		}

		expect(actions.deleteFavorite(movie)).toEqual(expected);
	})

});
