import { userSignIn } from './userSignIn';

describe('fetch user tests', () => {
  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            {results: mockSignInResponse.results}
          )
        }));
  });

  it('fetch user is called with the correct params', async () => {
    const user = jest.fn();
    const expected = [
      'http://localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];
    await userSignIn();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});

describe('error handling tests', () => {
  it('should throw an error if fetch is rejected', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expectedError = Error('Failed to find user');
    const getUserData = await userSignIn();
    
    expect(getUserData).toEqual(expectedError);
  });
});