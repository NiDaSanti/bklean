import React, {useState} from "react";
import AddToCartButton from "../AddToCartButton/addToCartButton.js";
import shirtDemo from "../../assets/shirtDemo.jpeg";
import "./card.css";

const Card = () => {
	return(
		<div className="row">
			<div className="col s12 m7">
			  	<div className="card">
			    	<div className="card-image">
			      		<img className="stock" src={shirtDemo}></img>
			      		<span id="card-title" className="card-title">Card Title</span>
			    	</div>
			    	<div className="card-content">
			      		<p>T-shirt.</p>
			      		<p>Price: 15.00</p>
			    	</div>
			    	<div className="card-action">
			      		<AddToCartButton />
			    	</div>
			  </div>
			</div>
		</div>
	);
}
export default Card;