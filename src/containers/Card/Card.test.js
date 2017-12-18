import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import mockEmptyUser from '../../data/mockEmptyUser';
import mockRealUser from '../../data/mockRealUser';
import mockMovie from '../../data/mockMovie';
import * as actions from '../../actions';

describe('Card tests', () => {
  let renderedCard;
  let mockMovieData;
  let mockUser;

  beforeEach(() => {
    mockMovieData = mockMovie;
    mockUser = mockEmptyUser;

    renderedCard = shallow(<Card user={mockUser} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });

  it('Should have a different class if a user favorite matches movie title', () => {
    expect(renderedCard.find('.star-outline').length).toEqual(1);

    mockUser = mockRealUser;
    renderedCard = shallow(<Card user={mockUser} title={mockMovie.title} />);

    expect(renderedCard.find('.star-outline').length).toEqual(0);
    expect(renderedCard.find('.star-solid').length).toEqual(1);
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
    xit('Should call dispatch when deleteFavorite is called', async () => {
      const mockDispatch = jest.fn();
      const result = await mapDispatchToProps(mockDispatch);
      result.deleteFavorite(mockMovie);

      expect(mockDispatch).toHaveBeenCalledWith(actions.deletePost(mockMovie));
    });

    xit('Should call dispatch when addFavorite is called', async () => {
      const mockDispatch = jest.fn();
      const result = await mapDispatchToProps(mockDispatch);
      result.addFavorite(mockMovie);

      expect(mockDispatch).toHaveBeenCalledWith(actions.addPost(mockMovie));
    });
  });
});
