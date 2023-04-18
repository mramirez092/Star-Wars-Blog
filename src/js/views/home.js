import React from "react";
import { useState, useEffect } from "react";
import "../../styles/home.css";

export const Home = () => {

const [data, setData] = useState([]);

useEffect (() => {
	fetch("https://www.swapi.tech/api/people")
	.then((response) => response.json())
	.then((data) => {
    setData(data.results)
    console.log(data)
  })
	.catch(error => console.error(error))
}, []);

return (
    <div className="container-fluid">
      <div className="blog-title text-light m-3 pb-4">
        <h1>Characters</h1>
      </div>
      
      <div className="row flex-row flex-nowrap" id="scroll-container">
          {data.map((character, index) => (
              <div key={index} className="col">
                <div className="card">
                  <h4>{character.name}</h4>
                  <p>
                    Gender
                  </p>
                  <button data-text="Awesome" class="button">
                     <span class="actual-text">&nbsp;Learn More!&nbsp;</span>
                     <span class="hover-text" aria-hidden="true">&nbsp;Learn More!&nbsp;</span>
                  </button>
                </div>
              </div>
        ))}
      </div>
    </div>
  );
};
