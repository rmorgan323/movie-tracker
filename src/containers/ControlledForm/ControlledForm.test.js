import {
  ControlledForm,
  mapStateToProps,
  mapDispatchToProps
} from './ControlledForm';
import React from 'react';
import { shallow, mount } from 'enzyme';

const defaultUserState = {
  name: '',
  password: '',
  email: ''
};

const defaultErrorState = '';

describe('ControlledForm tests', () => {
  it('should render component', () => {
    const renderedControlledForm = shallow(
      <ControlledForm user={{}} location={{}} />
    );
    expect(renderedControlledForm.find('.form-component').length).toEqual(1);
  });

  it('should have a default user state and a default error message state', () => {
    const renderedControlledForm = shallow(
      <ControlledForm user={{}} location={{}} />
    );
    expect(renderedControlledForm.state('users')).toEqual(defaultUserState);
    expect(renderedControlledForm.state('errorMessage')).toEqual(
      defaultErrorState
    );
  });

  it.skip('should set state when a signup error is passed in from nextProps', () => {
    const renderedControlledForm = shallow(
      <ControlledForm user={'error-signup'} location={{}} />
    );
    const signupErrorMessage =
      'That email is already registered. Please use another email or try logging in.';
    renderedControlledForm.update();
    expect(renderedControlledForm.state('errorMessage')).toEqual(
      signupErrorMessage
    );
  });

  it.skip('should set state when a login error is passed in from nextProps', () => {});

  it.skip('should set state for users when inputs contain text', () => {
    const renderedControlledForm = shallow(
      <ControlledForm user={{}} location={{}} />
    );
    expect(renderedControlledForm.state('users')).toEqual(defaultUserState);
  });
});
