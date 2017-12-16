import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/';


const Card = (props) => {
	const { id, image, userId, title, releaseDate, voteAverage, overview } = props;
  const movieBundle = { id, image, userId, title, releaseDate, voteAverage, overview }

  const handleFavorites = (props, movieBundle) => {
    props.user.userInfo.favorites.find(favorite => favorite.id === movieBundle.id) ? props.deleteFavorite(movieBundle) : props.addFavorite(movieBundle)
  }

  return (  
    <div className="card">
      <div>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <h4>Released: {releaseDate}</h4>
      <h4>Average Review: {voteAverage}</h4>
      <h4 className="overview">Overview: {overview}</h4>
      <button onClick={() => handleFavorites(props, movieBundle)}> Favorite </button>
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
    deleteFavorite: (movieBundle) => {
      dispatch(actions.deleteFavorite(movieBundle));
    },
    addFavorite: (movieBundle) => {
      dispatch(actions.addFavorite(movieBundle));
    }


    // toggleFavorite: (props, movieBundle) => {
    //   dispatch(actions.addFavorite(props, movieBundle));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
