import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import { mockMovie } from '../../data/mockMovie';
import { mockRealUser } from '../../data/mockRealUser';
import { mockLocationData } from '../../data/mockLocation';

describe('CardContainer tests', () => {
  let mockMovies;
  let mockUser;
  let mockLocation;
  let renderedCardContainer;

  beforeEach(() => {
    mockMovies = [mockMovie];
    mockUser = mockRealUser;
    mockLocation = mockLocationData;

    renderedCardContainer = shallow(
      <CardContainer movies={[]} user={mockUser} location={mockLocation} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should be able to render user favorites based on pathname', () => {
    expect(renderedCardContainer.find('Connect(Component)').length).toEqual(0);

    mockLocation.pathname = '/favorites';
    renderedCardContainer = shallow(
      <CardContainer
        movies={mockMovies}
        user={mockUser}
        location={mockLocation}
      />
    );

    expect(renderedCardContainer.find('Connect(Component)').length).toEqual(1);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull movies from store', () => {
      const mockStore = {
        movies: [mockMovie]
      };
      const result = mapStateToProps(mockStore);

      expect(result.movies).toEqual(mockStore.movies);
    });

    it('Should pull a user from store', () => {
      const mockStore = {
        user: mockUser
      };
      const result = mapStateToProps(mockStore);

      expect(result.user).toEqual(mockStore.user);
    });
  });
});
