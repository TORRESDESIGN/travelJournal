import React from 'react';

function Card(props) {
	console.log(props.item);
	return (
		<div className="card">
			<img className="card-profile" src={props.item.image}></img>
			<div className="card-text">
				<div className ="card-header">
					<i class="fa-solid fa-location-dot"></i><h3 className="country">{props.item.country}</h3><a target="_blank" href={props.item.map}>View on Google Maps</a>
				</div>
				<h1 className="city">{props.item.city}</h1>
				<h3 className="date">{props.item.date}</h3>
				<p>{props.item.description}</p>
			</div>
		</div>
	)
}

export default Card;