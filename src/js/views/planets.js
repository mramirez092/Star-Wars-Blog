import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

export const Planets = () => {
    const params = useParams();    
    console.log(params);
    const [onePlanet, setOnePlanet] = useState(null)

    useEffect(() => {
        const getPlanet = async () => {
            const response = await fetch(`https://swapi.dev/api/planets/${params.idPlanets}/`)
            const data = await response.json()
            setOnePlanet(data)
            console.log('Este es mi get 2', data);
        }
        getPlanet();
    }, []);

    return(
        <div className="container-fluid">
            {onePlanet && (
                <>
                <div className="d-flex character-details1 text-light col-md-8 m-4">
                    <div className="flex-grow-1 bg-dark p-3 rounded">
                        <h1>{onePlanet.name}</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus quam, posuere eu purus at,                  sagittis mollis
                        velit. Duis rhoncus id augue nec tristique. Sed quis augue eget est ullamcorper consequat. Integer tristique
                        suscipit quam a venenatis. Vivamus sollicitudin enim sed sapien commodo, ac consectetur magna                   pretium. Nunc
                        congue gravida enim, porttitor pretium purus finibus at. Donec eget velit nunc. Maecenas quis                   consequat mauris.
                        Mauris et vulputate orci, quis vulputate ipsum. Integer at tincidunt neque. Fusce aliquet lectus odio,
                        vestibulum accumsan dolor feugiat vitae.
                        </p>
                    </div>
                    <div className="character-info-img flex-shrink-0 col-md-4 d-flex   align-items-center     justify-content-center">
                       <img href="#" alt={onePlanet.name} />
                    </div>
                </div>
                    
                <div className="character-details2 text-white pt-5">
                    <div className="d-flex align-items-center bg-dark rounded secondary-info row m-4 p-3">
                        <div className="col d-flex flex-column border-end">
                            <p> <b>Name:</b> </p>
                            <p> {onePlanet.name} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Climate:</b> </p>
                            <p> {onePlanet.climate} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Diameter:</b> </p>
                            <p> {onePlanet.diameter} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Population:</b> </p>
                            <p> {onePlanet.population} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Terrain:</b></p>
                            <p> {onePlanet.terrain} </p>
                        </div>

                        <div className="col d-flex flex-column">
                            <p> <b>Gravity:</b> </p>
                            <p> {onePlanet.gravity} </p>
                        </div>
                    </div>   
                    </div>         
                </>
            )}
        </div>
    )
}
