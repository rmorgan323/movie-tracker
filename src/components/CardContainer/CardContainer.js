import React, { Component } from 'react';
// import './CardContainer.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';

 const CardContainer = ( props ) => {
	
	const cards = props.movies.map((card) => {
		console.log(card)
		return (
			<Card 
				key={card.movieId}
				cardImage={card.image}
				cardTitle={card.title} />
		)
	})

	return (
		<div>
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


export default connect(mapStateToProps, null)(CardContainer)