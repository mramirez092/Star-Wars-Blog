import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

export const Vehicles = () => {
    const { id } = useParams();

    useEffect (() => {
        fetch(`{https://swapi.dev/api/vehicles/${id}/}`)
        .then((response) => response.json())
        .then((character) => {
        console.log(character)
      })
        .catch(error => console.error(error))
    }, []);

    return(
        <div className="container-fluid">
            <h1>Vehicles</h1>
        </div>
    )
}
