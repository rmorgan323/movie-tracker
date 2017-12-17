import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import mockMovie from '../../data/mockMovie';
import mockUserData from '../../data/mockUser';

describe('CardContainer tests', () => {
  let mockMovies;
  let mockUser;
  let mockLocation;
  let renderedCardContainer;

  beforeEach(() => {
    mockMovies = [mockMovie];
    mockUser = mockUserData;
    mockLocation = {};

    renderedCardContainer = shallow(
      <CardContainer
        movies={mockMovies}
        user={mockUser}
        location={mockLocation}
      />
    );
  });
  it('Should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should display cards from props', () => {
    expect(renderedCardContainer.find('Card').length).toEqual(1);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull movies from store', () => {
      const mockStore = {
        movies: []
      };
      const result = mapStateToProps(mockStore);

      expect(result.movies).toEqual(mockStore.movies);
    });
  });
});
