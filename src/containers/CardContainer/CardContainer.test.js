import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import mockMovie from '../../data/mockMovie';

describe('CardContainer tests', () => {
  it('Should match the snapshot', () => {
    const renderedCardContainer = shallow(<CardContainer movies={[]} />);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should display cards from props', () => {
    const mockMovies = [mockMovie]

    const renderedCardContainer = shallow(<CardContainer movies={mockMovies} />);

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
