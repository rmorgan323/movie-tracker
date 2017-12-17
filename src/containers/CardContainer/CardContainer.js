import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CardContainer.css';

export const CardContainer = props => {
  let userId;

  const endpoint = props.location.pathname;
  const favoritesArray = props.movies.reduce((newArray, movie) => {
    props.user.userInfo.favorites.forEach(favorite => {
      if (favorite.title === movie.title) {
        newArray.push(movie);
      }
    });
    return newArray;
  }, []);

  const cardArray = endpoint === '/favorites' ? favoritesArray : props.movies; 

  if (Object.keys(props.user).length !== 0) {
    userId = props.user.userInfo.id;
  } else {
    userId = null;
  }

  const cards = cardArray.map((card) => {

    return (
      <Card
        key={card.movieId}
        userId={userId}
        movieId={card.movieId}
        title={card.title}
        image={card.image}
        releaseDate={card.releaseDate}
        voteAverage={card.voteAverage}
        overview={card.overview}
      />
    );
  });

  return <div className="card-container">{cards}</div>;
};

export const mapStateToProps = store => {
  return {
    movies: store.movies,
    user: store.user
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  location: PropTypes.string,
  movies: PropTypes.array,
  user: PropTypes.object
};
