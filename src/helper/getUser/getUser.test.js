import getUser from './getUser';
import { mockGetUsersData } from '../../data/mockGetUsersData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockGetUsersData)
  })
);

describe('getUser Tests', () => {
  it('Should render correctly', () => {
    expect(getUser).toBeAFunction;
  });

  it('Should return an object when called', async () => {
    const mockUser = await getUser(1);
    expect(typeof mockUser).toEqual('object');
  });
});
