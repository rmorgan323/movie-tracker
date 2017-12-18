import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import React from 'react';
import { shallow } from 'enzyme';
import mockEmptyUser from '../../data/mockEmptyUser';
import mockRealUser from '../../data/mockRealUser';

describe('Header tests', () => {
  let renderedHeader;
  let mockStoreMovies;
  let mockLogout;

  beforeEach(() => {
    mockStoreMovies = jest.fn();
    mockLogout = jest.fn();

    renderedHeader = shallow(
      <Header
        user={mockEmptyUser}
        storeMovies={mockStoreMovies}
        logoutUser={mockLogout}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });

  it('Should have login and signup button with no user', () => {
    expect(renderedHeader.find('.login').length).toEqual(1);
    expect(renderedHeader.find('.signup').length).toEqual(1);
  });

  it('Should have a favorites button with user logged in', () => {
    expect(renderedHeader.find('button').length).toEqual(0);

    renderedHeader = shallow(
      <Header
        user={mockRealUser}
        storeMovies={mockStoreMovies}
        logoutUser={mockLogout}
      />
    );

    expect(renderedHeader.find('button').length).toEqual(1);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull a user from store', () => {
      const mockStore = {
        user: mockRealUser
      };
      const result = mapStateToProps(mockStore);

      expect(result.user).toEqual(mockStore.user);
    })
  })
});
