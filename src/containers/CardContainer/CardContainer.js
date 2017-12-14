import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const CardContainer = props => {
  const cards = props.movies.map(card => {
    return (
      <Card
        key={card.movieId}
        userId={card.userId}
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
    movies: store.movies
  };
};

export default withRouter(connect(mapStateToProps, null)(CardContainer));
