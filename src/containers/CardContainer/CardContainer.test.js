import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import mockMovie from '../../data/mockMovie';

describe('CardContainer tests', () => {
  it('Should exist', () => {
    const mockProps = {
      movies: []
    };
    console.log(mockProps);

    const renderedCardContainer = shallow(<CardContainer props={mockProps} />);
    console.log(renderedCardContainer.debug());

    expect(renderedCardContainer).toBeDefined();
  });

  it('Should match the snapshot', () => {
    const renderedCardContainer = shallow(<CardContainer />);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should display cards from props', () => {
    const mockProps = {
      movies: [mockMovie]
    };

    const renderedCardContainer = shallow(<CardContainer props={mockProps} />);

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
