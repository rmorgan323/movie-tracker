import deleteFavoriteData from './deleteFavoriteData.js';
import { mockDeleteFavorite } from '../../data/mockDeleteFavorite.js';

describe('fetch checkUser tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockDeleteFavorite)
    })
  );

  it('should be a function', () => {
    expect(deleteFavoriteData).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await deleteFavoriteData();
    expect(typeof fetch).toEqual('object');
  });

  it('should give a success response and userId upon submission', async () => {
    const fetch = await deleteFavoriteData();
    expect(fetch).toEqual(mockDeleteFavorite);
  });

  it('deleteFavoriteData is called with the correct params', async () => {
    const expected = [
      'http://localhost:3000/api/users/1/favorites/181808',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];
    await deleteFavoriteData(1, 181808);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});
