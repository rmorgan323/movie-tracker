import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const CardContainer = props => {
  let userId;

  if (Object.keys(props.user).length !== 0) {
    userId = props.user.userInfo.id;
  } else {
    userId = null;
  }

  const cards = props.movies.map(card => {
    return (
      <Card
        key={card.movieId}
        userId={userId}
        id={card.movieId}
        title={card.title}
        image={card.image}
        releaseDate={card.releaseDate}
        voteAverage={card.voteAverage}
        overview={card.overview}
        favorite={card.favorite}
      />
    );
  });

  return <div className="card-container">{cards}</div>;
};

export const mapStateToProps = store => {
  return {
    movies: store.movies,
    user: store.user,
  };
};

export default withRouter(connect(mapStateToProps, null)(CardContainer));
