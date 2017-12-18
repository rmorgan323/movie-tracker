import getUserFavorites from './getUserFavorites';
import { mockGetUserFavoritesData } from '../../data/mockGetUserFavoritesData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockGetUserFavoritesData)
  })
);

describe('getUser Tests', () => {
  it('Should render correctly', () => {
    expect(getUserFavorites).toBeAFunction;
  });

  it('Should return an object when called', async () => {
    const mockUserFavorites = await getUserFavorites(24);

    expect(typeof mockUserFavorites).toEqual('object');
  });
});
