import React, {useEffect} from "react";
import { useParams } from "react-router";

export const Planets = () => {

const { id } = useParams();

    useEffect (() => {
        fetch(`https://swapi.dev/api/planets/${id}/`)
        .then((response) => response.json())
        .then((planet) => {
        console.log(planet)
      })
        .catch(error => console.error(error))
    }, []);

    return(
        <div className="container-fluid">
            <h1>Planets</h1>
        </div>
    )
}