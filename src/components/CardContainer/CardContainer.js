import React, { Component } from 'react';
// import './CardContainer.css';
import { Card } from '../Card/Card';

export const CardContainer = ( {cardDisplay} ) => {

	const cards = cardDisplay.map((card) => {
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