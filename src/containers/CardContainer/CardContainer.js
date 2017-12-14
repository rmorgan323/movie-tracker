import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const CardContainer = ( props ) => {
	console.log(props)
	const cards = props.movies.map((card) => {
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
				favorite={card.favorite} />
		)
	})

	return (
		<div className="card-container">
			{cards}
		</div>
	)
}

const mapStateToProps = (store) =>{
	return {
		movies: store.movies
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {}
}


export default withRouter(connect(mapStateToProps, null)(CardContainer))