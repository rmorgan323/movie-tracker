import {
  ControlledForm,
  mapStateToProps,
  mapDispatchToProps
} from './ControlledForm';
import React from 'react';
import { shallow } from 'enzyme';
import mockEmptyUser from '../../data/mockEmptyUser';
import mockRealUser from '../../data/mockRealUser';

const defaultUserState = {
  name: '',
  password: '',
  email: ''
};

const defaultErrorState = '';

describe('ControlledForm tests', () => {
  let renderedControlledForm;

  beforeEach(() => {
    renderedControlledForm = shallow(
      <ControlledForm user={{}} location={{}} />
    )
  })
  it('Should render component', () => {
    expect(renderedControlledForm.find('.form-component').length).toEqual(1);
  });

  it('Should have a default user state and a default error message state', () => {
    expect(renderedControlledForm.state('users')).toEqual(defaultUserState);
    expect(renderedControlledForm.state('errorMessage')).toEqual(
      defaultErrorState
    );
  });

  it('Should set state when a signup error is passed in from nextProps', () => {
    renderedControlledForm = shallow(
      <ControlledForm user={'error-signup'} location={{}} />
    );
    const signupErrorMessage =
      'That email is already registered. Please use another email or try logging in.';

    console.log(renderedControlledForm.state())
    expect(renderedControlledForm.state('errorMessage')).toEqual(
      signupErrorMessage
    );
  });

  it.skip('Should set state when a login error is passed in from nextProps', () => {});

  it.skip('Should set state for users when inputs contain text', () => {
    const renderedControlledForm = shallow(
      <ControlledForm user={{}} location={{}} />
    );
    expect(renderedControlledForm.state('users')).toEqual(defaultUserState);
  });
});
