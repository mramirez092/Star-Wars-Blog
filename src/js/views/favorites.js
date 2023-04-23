import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<ul className="list-group">
				{store.favorites.map((like, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<Link to={`/characters/${index + 1}`}>
								<span>{like.name}</span>
							</Link>
							<button className="btn btn-success" onClick={() => actions.removeFavorite(like)}>
								Remove!
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-dark">Back home</button>
			</Link>
		</div>
	);
};
