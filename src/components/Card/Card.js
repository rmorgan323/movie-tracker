import React, { Component } from 'react';
import './Card.css';

const Card = ( {image, title, releaseDate, voteAverage, overview} ) => {
	return (
		<div className="card">
			<div><img src={image} alt={title} /></div>
			<h2>{title}</h2>
			<h4>Released: {releaseDate}</h4>
			<h4>Average Review: {voteAverage}</h4>
			<h4 className="overview">Overview: {overview}</h4>
		</div>
	)
}

export default Card;