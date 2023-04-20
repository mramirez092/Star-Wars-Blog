import React from "react";
import { useState, useEffect } from "react";
import "../../styles/home.css";
import { Link, useParams } from 'react-router-dom'

export const Home = () => {

const [character, setCharacter] = useState([]);
const [planet, setPlanet] = useState([]);
const [vehicle, setVehicle] = useState([]);

useEffect (() => {
	fetch("https://swapi.dev/api/people/")
	.then((response) => response.json())
	.then((character) => {
    setCharacter(character.results)
    console.log(character)
  })
	.catch(error => console.error(error))
}, []);
 
useEffect (() => {
	fetch("https://swapi.dev/api/planets/")
	.then((response) => response.json())
	.then((planet) => {
    setPlanet(planet.results)
    console.log(planet)
  })
	.catch(error => console.error(error))
}, []);

useEffect (() => {
	fetch("https://swapi.dev/api/vehicles/")
	.then((response) => response.json())
	.then((vehicle) => {
    setVehicle(vehicle.results)
    console.log(vehicle)
  })
	.catch(error => console.error(error))
}, []);

return (
    <><><><div className="container-fluid">
        <div className="blog-title text-warning m-3 pb-4">
            <h1>Characters</h1>
        </div>

        <div className="row flex-row flex-nowrap" id="scroll-container">
            {character.map((c, index) => (
                <div key={index} className="col">
                    <div className="card">
                        <h4>{c.name}</h4>
                        
                        <div key={index} className="col">
                            Gender: {c.gender} <br />
                            Hair color: {c.hair_color} <br />
                            Eye-color: {c.eye_color}
                        </div>

                        <Link to={`/characters/${index + 1}`}>
                            <button data-text="Awesome" className="button">
                                <span className="actual-text">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                                <span className="hover-text" aria-hidden="true">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
        {/**PLANETAS */}
        <div className="container-fluid pt-4">
            <div className="blog-title text-warning m-3 pb-4">
                <h1>Planets</h1>
            </div>
            <div className="row flex-row flex-nowrap" id="scroll-container">
                {planet.map((planet, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <h4>{planet.name}</h4>
                            <div key={index}>
                                Population: {planet.population}<br />
                                Terrain: {planet.terrain}<br />
                            </div>
                            <Link to={`/planets/${index + 1}`}>
                            <button data-text="Awesome" className="button">
                                <span className="actual-text">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                                <span className="hover-text" aria-hidden="true">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                            </button>
                        </Link>
                    </div>
            </div>
            ))}
        </div>
    </div>
    </><div className="container-fluid pt-4">
            <div className="blog-title text-warning m-3 pb-4">
                <h1>Vehicles</h1>
            </div>
            <div className="row flex-row flex-nowrap" id="scroll-container">
                {vehicle.map((vehicle, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <h4>{vehicle.name}</h4>
                           
                            <div key={index}>
                                Passengers: {vehicle.passengers}<br />
                                Max Speed: {vehicle.max_atmosphering_speed}<br />
                            </div>
                            <Link to={`/vehicles/${index + 1}`}>
                            <button data-text="Awesome" className="button">
                                <span className="actual-text">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                                <span className="hover-text" aria-hidden="true">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div></></>
  );
};
