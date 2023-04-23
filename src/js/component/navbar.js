import React from "react";
import { Link } from "react-router-dom";
import swlogo from "../../img/Star_Wars_Logo.png";
import stylesheet from "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand text-light m-3 h1">Star Wars Blog</span>
			</Link>
			<div className="logo">
				<img src={swlogo}/>
			</div>
			
			<div class="btn-group m-4">
			<Link to = "/favorites">
  				<button class="btn btn-warning btn-lg" type="button">
   					 Favorites
  				</button>
			</Link>
				
  				<button type="button" class="btn btn-lg btn-warning dropdown-toggle dropdown-toggle-split"
						data-bs-toggle="dropdown" aria-expanded="false">

    				<span class="visually-hidden">Toggle Dropdown</span>

				</button>
  				<ul class="dropdown-menu">
    				...
  				</ul>
			</div>
		</nav>
	);
};
