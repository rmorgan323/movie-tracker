import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = props => {
  const {
    movieId,
    image,
    userId,
    title,
    releaseDate,
    voteAverage,
    overview
  } = props;

  const movieBundle = {
    movieId,
    image,
    userId,
    title,
    releaseDate,
    voteAverage,
    overview
  };

  const favorite = props.user.userInfo.favorites.find(
    favorite => favorite.title === movieBundle.title
  )
    ? true
    : false;

  const handleFavorites = (props, movieBundle) => {
    if (
      props.user.userInfo.favorites.find(
        favorite => favorite.title === movieBundle.title
      )
    ) {
      props.deleteFavorite(movieBundle);
    } else {
      props.addFavorite(movieBundle);
    }
  };

  return (
    <div className="card">
      <div>
        <img src={image} alt={title} />
      </div>

      <h2>{title}</h2>
      <h4>Released: {releaseDate}</h4>
      <h4>Average Review: {voteAverage}</h4>
      <h4 className="overview">Overview: {overview}</h4>
      <button
        onClick={() =>
          userId
            ? handleFavorites(props, movieBundle)
            : alert('hey idiot, why not sign up??')
        }
        className={favorite ? 'star-solid' : 'star-outline'}
      />
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    deleteFavorite: movieBundle => {
      dispatch(actions.deletePost(movieBundle));
    },
    addFavorite: movieBundle => {
      dispatch(actions.addPost(movieBundle));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
  movieId: PropTypes.string,
  userId: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.string,
  overview: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  movies: PropTypes.array,
  user: PropTypes.object,
  deleteFavorite: PropTypes.func,
  addFavorite: PropTypes.func
};
