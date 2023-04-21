import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

export const Vehicles = () => {
    const params = useParams();    
    console.log(params);
    const [oneVehicle, setOneVehicle] = useState({})

    useEffect(() => {
        const getVehicle = async () => {
            const response = await fetch(`https://swapi.dev/api/vehicles/${params.idVehicles}/`)
            const data = await response.json()
            setOneVehicle(data)
            console.log('Este es mi get 2', data);
        }
        getVehicle();
    }, []);

    return(
        <div className="container-fluid">
            {oneVehicle && (
                <>
                <div className="d-flex character-details1 text-light col-md-8 m-4">
                    <div className="flex-grow-1 bg-dark p-3 rounded">
                        <h1>{oneVehicle.name}</h1>
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
                       <img href="#" alt={oneVehicle.name} />
                    </div>
                </div>
                    
                <div className="character-details2 text-white pt-5">
                    <div className="d-flex align-items-center bg-dark rounded secondary-info row m-4 p-3">
                        <div className="col d-flex flex-column border-end">
                            <p> <b>Name:</b> </p>
                            <p> {oneVehicle.name} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>length:</b> </p>
                            <p> {oneVehicle.length} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Model:</b> </p>
                            <p> {oneVehicle.model} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Passengers:</b> </p>
                            <p> {oneVehicle.passengers} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Crew:</b></p>
                            <p> {oneVehicle.crew} </p>
                        </div>

                        <div className="col d-flex flex-column">
                            <p> <b>Cargo Capacity:</b> </p>
                            <p> {oneVehicle.cargo_capacity} </p>
                        </div>
                    </div>   
                    </div>         
                </>
            )}
        </div>
    )
}
