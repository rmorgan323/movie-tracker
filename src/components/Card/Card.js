import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

const Card = (props) => {
	const { id, image, userId, title, releaseDate, voteAverage, overview } = props;

  return (
    <div className="card">
      <div>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <h4>Released: {releaseDate}</h4>
      <h4>Average Review: {voteAverage}</h4>
      <h4 className="overview">Overview: {overview}</h4>
      <button onClick={() => console.log('hi')}> Favorite </button>
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export const mapDispatchToProps = dispatch => {
  // return {
  //   // toggleFavorite: props => {
  //   //   dispatch(actions.getFavorites(props));
  //   }
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
