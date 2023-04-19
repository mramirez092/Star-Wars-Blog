import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

export const Characters = () => {
    const { id } = useParams()

    useEffect (() => {
        fetch(`{https://swapi.dev/api/people/${id}/}`)
        .then((response) => response.json())
        .then((character) => {
        
        console.log(character)
      })
        .catch(error => console.error(error))
    }, []);

    return(
        <div>

       <h1>Characters</h1>
        
       </div>
    )
}

