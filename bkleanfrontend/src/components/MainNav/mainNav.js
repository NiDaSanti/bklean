import React from "react";
import "./mainNav.css";

const MainNav = () => {
	return(
		<nav>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo">Bklean Props</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="sass.html">Tops</a></li>
					<li><a href="badges.html">Bottoms</a></li>
					<li><a href="collapsible.html">Sweaters</a></li>
				</ul>
			</div>
		</nav>
	);
}
export default MainNav;