import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import React from 'react';
import { shallow } from 'enzyme';
import mockUserData from '../../data/mockRealUser';

describe('Header tests', () => {
  let renderedHeader;
  let mockUser;
  let mockStoreMovies;

  beforeEach(() => {
    mockUser = mockUserData;
    mockStoreMovies = jest.fn();

    renderedHeader = shallow(<Header user={mockUser} storeMovies={mockStoreMovies} />)
  })

  it('Should match the snapshot', () => {
    expect(renderedHeader).toBeDefined();
  })
});
