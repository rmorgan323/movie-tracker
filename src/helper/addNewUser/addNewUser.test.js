import addNewUser from './addNewUser.js';
import {mockNewUser, newUserApiResponse} from '../../data/mockNewUser.js';

describe('add new user', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () =>
      Promise.resolve(
        newUserApiResponse
      )
  })
  );

  it('should be a function', () =>{
    expect(addNewUser).toBeAFunction;
  });

  it('should render the fetch data', async () =>{
    const fetch = await addNewUser();
    expect(typeof fetch).toEqual('object');
  });

  it('should give a success response and userId upon submission', async () =>{
    const fetch = await addNewUser();
    expect(fetch).toEqual(newUserApiResponse);
  });

  it('addNewUser is called with the correct params', async () => {
    const expected = ["http://localhost:3000/api/users/new",
      {"body": undefined, 
        "headers": {"Content-Type": "application/json"},
        "method": "POST"}];

    await addNewUser(mockNewUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

});