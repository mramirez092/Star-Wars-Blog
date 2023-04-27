import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../../styles/home.css";
import { Link, useParams } from 'react-router-dom'
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [favoriteStatus, setFavoriteStatus] = useState({});

    useEffect (() => {
        const favoriteIds = store.favorites.map((favorite) => favorite.index);
        const newfavoriteStatus = {};

        characters.forEach((c) => {
            newfavoriteStatus[c.index] = favoriteIds.includes(c.index);
        })
        setFavoriteStatus(newfavoriteStatus);
    },[store.favorites, characters]);

    const handleClick = (c, event) => {
        actions.selectId(c);
        actions.addFavorite();
        setFavoriteStatus((prevState) => ({
          ...prevState,
          [c.index]: !prevState[c.index]
        }));
      };
      

    useEffect (() => {
        fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((characters) => {
            setCharacters(characters.results)
            console.log(characters)
        })
        .catch(error => console.error(error))
    }, []);
    
    useEffect (() => {
        fetch("https://swapi.dev/api/planets/")
        .then((response) => response.json())
        .then((planets) => {
            setPlanets(planets.results)
            console.log(planets)
        })
        .catch(error => console.error(error))
    }, []);

    useEffect (() => {
        fetch("https://swapi.dev/api/vehicles/")
        .then((response) => response.json())
        .then((vehicles) => {
            setVehicles(vehicles.results)
            console.log('Este es mi get', vehicles)
        })
        .catch(error => console.error(error))
    }, []);

return (
    <><><><div className="container-fluid">
        <div className="blog-title text-warning m-3 pb-4">
            <h1>Characters</h1>
        </div>

        <div className="row flex-row flex-nowrap" id="scroll-container">
            {characters.map((c, index) => (
                <div key={index} className="col">
                    <div className="card">
                        <h4>{c.name}</h4>
                        <div className="card-img">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} />
                        </div>
                        <div key={index} className="card-text">
                            <b>Gender:</b> {c.gender} <br />
                            <b>Hair color:</b> {c.hair_color} <br />
                            <b>Eye-color:</b> {c.eye_color}
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
                        <button class="btn2" 
                        onClick={() => handleClick(c)} >
                            <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="iconFav">
                            <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                            </svg>
                        </button>
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
                {planets.map((planet, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <h4>{planet.name}</h4>
                            <div key={index} className="card-text">
                                Rotation Period: {planet.rotation_period}<br />
                                Gravity: {planet.gravity}<br />
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
                        <button class="btn2" 
                        onClick={() => handleClick(planet)} >
                            <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="iconFav">
                            <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                            </svg>
                        </button>
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
                {vehicles.map((vehicle, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <h4>{vehicle.name}</h4>
                            <div className="card-text">
                                Passengers: {vehicle.passengers}<br />
                                Max Speed: {vehicle.max_atmosphering_speed}<br />
                            </div>
                            <Link to={'vehicles/' + vehicle.url.split('/')[5]}>
                            <button data-text="Awesome" className="button">
                                <span className="actual-text">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                                <span className="hover-text" aria-hidden="true">
                                    &nbsp;Learn More!&nbsp;
                                </span>
                            </button>
                            </Link>
                            <button class="btn2" 
                            onClick={() => handleClick(vehicle)} >
                            <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="iconFav">
                            <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </div></></>
  );
};
