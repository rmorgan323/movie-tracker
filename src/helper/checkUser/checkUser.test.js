import checkUser from './checkUser.js';
import { mockCheckUserResponse } from '../../data/mockCheckUser.js';

describe('fetch checkUser tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCheckUserResponse)
    })
  );

  it('should be a function', () => {
    expect(checkUser).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await checkUser();
    expect(typeof fetch).toEqual('object');
  });

  it('should give a success response, userId, and password when called', async () => {
    const user = jest.fn();
    const expected = [
      'http://localhost:3000/api/users',
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];
    await checkUser();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});
