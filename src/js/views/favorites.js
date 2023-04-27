import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

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
							className="list-group-item d-flex justify-content-between ">
								<span>{like.name}</span>
							<button className="btn btn-secondary" onClick={() => actions.removeFavorite(like)}>
								<AiFillDelete />
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
