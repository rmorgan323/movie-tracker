import React, { Component } from 'react';
// import './Card.css';

export const Card = ( {cardImage, cardTitle} ) => {

	return (
		<div>
			<div><img src={cardImage} alt={cardTitle} /></div>
			<h2>{cardTitle}</h2>
		</div>
	)
}