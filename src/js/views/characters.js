import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

export const Characters = () => {
    const { id } = useParams();

    const [oneCharacter, setOneCharacter] = useState(null)

    useEffect(() => {
        const getCharacter = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${id}/`)
            const data = await response.json()
            setOneCharacter(data)
        }
        getCharacter();
    }, [id]);

    return(
        <div className="container-fluid">
            {oneCharacter && (
                <>
                <div className="d-flex character-details1 text-light col-md-8 m-4">
                    <div className="flex-grow-1 bg-dark p-3 rounded">
                        <h1>{oneCharacter.name}</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus quam, posuere eu purus at,                  sagittis mollis
                        velit. Duis rhoncus id augue nec tristique. Sed quis augue eget est ullamcorper consequat.                  Integer tristique
                        suscipit quam a venenatis. Vivamus sollicitudin enim sed sapien commodo, ac consectetur magna                   pretium. Nunc
                        congue gravida enim, porttitor pretium purus finibus at. Donec eget velit nunc. Maecenas quis                   consequat mauris.
                        Mauris et vulputate orci, quis vulputate ipsum. Integer at tincidunt neque. Fusce aliquet lectus                odio,
                        vestibulum accumsan dolor feugiat vitae.
                        </p>
                    </div>
                    <div className="character-info-img flex-shrink-0 col-md-4 d-flex   align-items-center     justify-content-center">
                       <img href="#" alt={oneCharacter.name} />
                    </div>
                </div>

                <div className="character-details2 text-white pt-5">
                    <div className="d-flex align-items-center bg-dark rounded secondary-info row m-4 p-3">
                        <div className="col d-flex flex-column border-end">
                            <p> <b>Name:</b> </p>
                            <p> {oneCharacter.name} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Birth Year:</b> </p>
                            <p> {oneCharacter.birth_year} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Gender:</b> </p>
                            <p> {oneCharacter.gender} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Height</b> </p>
                            <p> {oneCharacter.height} </p>
                        </div>

                        <div className="col d-flex flex-column border-end">
                            <p> <b>Skin Color:</b></p>
                            <p> {oneCharacter.skin_color} </p>
                        </div>

                        <div className="col d-flex flex-column">
                            <p> <b>Eye Color:</b> </p>
                            <p> {oneCharacter.eye_color} </p>
                        </div>
                    </div>            
                </div>
                </>
            )}
        </div>
    )
}
