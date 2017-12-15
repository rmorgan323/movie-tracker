import React, {Component} from 'react';
import './Card.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/'

 // {image, title, releaseDate, voteAverage, overview})

class Card extends Component {
	constructor () {
    super()
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('nextprops', nextProps, 'nextstate', nextState)
  
  }

  render() {
    // console.log('prps', this.props)
   const {image, title, releaseDate, voteAverage, overview, userId} = this.props;
  return (

		<div className="card">
			<div><img src={image} alt={title} /></div>
			<h2>{title}</h2>
			<h4>Released: {releaseDate}</h4>
			<h4>Average Review: {voteAverage}</h4>
			<h4 className="overview">Overview: {overview}</h4>
      <button onClick = {()=> console.log('user', userId)}> Favorite </button>
		</div>
	)
}
}

export const mapStateToProps = store =>{
  return {
    user: store.user
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (userId) => {
      dispatch(actions.getFavorites(userId))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)