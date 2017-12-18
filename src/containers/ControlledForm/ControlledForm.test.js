import {
  ControlledForm,
  mapStateToProps,
  mapDispatchToProps
} from './ControlledForm';
import React from 'react';
import { shallow } from 'enzyme';
import mockEmptyUser from '../../data/mockEmptyUser';
import mockRealUser from '../../data/mockRealUser';
import mockLocationData from '../../data/mockLocation';
import * as actions from '../../actions';

const defaultUserState = {
  name: '',
  password: '',
  email: ''
};

const defaultErrorState = '';

describe('ControlledForm tests', () => {
  let renderedControlledForm;
  let mockLocation = mockLocationData;

  beforeEach(() => {
    renderedControlledForm = shallow(
      <ControlledForm user={mockEmptyUser} location={mockLocation} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedControlledForm).toMatchSnapshot();
  });

  it('Should have a default user state and a default error message state', () => {
    expect(renderedControlledForm.state('users')).toEqual(defaultUserState);
    expect(renderedControlledForm.state('errorMessage')).toEqual(
      defaultErrorState
    );
  });

  it('Should render an error message if one is in state', () => {
    const signupErrorMessage =
      'That email is already registered. Please use another email or try logging in.';

    expect(renderedControlledForm.find('.error-message').text()).toEqual('');

    renderedControlledForm.setState({ errorMessage: signupErrorMessage });

    expect(renderedControlledForm.find('.error-message').text()).toEqual(
      signupErrorMessage
    );
  });

  it('Should have an extra input if endpoint is /signup', () => {
    expect(renderedControlledForm.find('input').length).toEqual(2);

    mockLocation.pathname = '/signup';
    renderedControlledForm = shallow(
      <ControlledForm user={mockEmptyUser} location={mockLocation} />
    );

    expect(renderedControlledForm.find('input').length).toEqual(3);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull a user from store', () => {
      const mockStore = {
        user: mockRealUser
      };
      const result = mapStateToProps(mockStore);

      expect(result.user).toEqual(mockStore.user);
    });
  });

  describe('mapDispatchToProps tests', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    xit('Should call dispatch when getUsers is called', () => {
      result.getUsers();

      expect(mockDispatch).toHaveBeenCalledWith(actions.fetchUsers());
    });

    xit('Should call dispatch when checkUsers is called', () => {
      result.checkUsers();

      expect(mockDispatch).toHaveBeenCalledWith(actions.checkForUser());
    });

    xit('Should call dispatch when getUserFavorites is called', () => {
      result.getUserFavorites();

      expect(mockDispatch).toHaveBeenCalledWith(actions.checkUserFavorites());
    });
  });
});
