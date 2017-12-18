import detemineUser from './determineUser';
import { mockEmptyUser } from '../../data/mockEmptyUser';
import { mockRealUser } from '../../data/mockRealUser';

describe('detemineUser tests', () => {
  it('Should return false if no user is logger in', () => {
    expect(detemineUser(mockEmptyUser)).toEqual(false);
  });

  it('Should return false with an error message', () => {
    expect(detemineUser('error-signup')).toEqual(false);
    expect(detemineUser('error-login')).toEqual(false);
  });

  it('Should return true is a user is logged in', () => {
    expect(detemineUser(mockRealUser)).toEqual(true);
  });
});
