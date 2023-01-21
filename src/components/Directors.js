import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList= directors.map((director)=>{
    const moviesList = (director.movies).map((mov) =>
      <li key={mov}>{mov}</li>)
      return (
        <div>
           <h1>{director.name}</h1>
           <ul>
             {moviesList}
           </ul>
        </div>)                                 
  })

  return (
      <div>
        <h1>Directors Page</h1>
        {directorList}
      </div>
  )
}

export default Directors;