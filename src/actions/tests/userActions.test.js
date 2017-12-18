import * as actions from '../index';
import mockEmptyUser from '../../data/mockEmptyUser.js';
import mockMessage from '../../data/mockMessage.js';

describe('User Actions tests', () => {
  it('should create a SET_USER action', () => {
    const user = [mockEmptyUser];
    const expected = {
      type: 'SET_USER',
      user
    };

    expect(actions.setUser(user)).toEqual(expected);
  });

  it('should create an ADD_NEW_USER action', () => {
    const user = [mockEmptyUser];
    const expected = {
      type: 'ADD_NEW_USER',
      user
    };

    expect(actions.newUser(user)).toEqual(expected);
  });

  it('should create a SIGNUP_ERROR action', () => {
    const msg = mockMessage;
    const expected = {
      type: 'SIGNUP_ERROR',
      msg
    };

    expect(actions.signupFailure(msg)).toEqual(expected);
  });

  it('should create a USER_LOGOUT action', () => {
    const expected = {
      type: 'USER_LOGOUT'
    };

    expect(actions.userLogout()).toEqual(expected);
  });
});
