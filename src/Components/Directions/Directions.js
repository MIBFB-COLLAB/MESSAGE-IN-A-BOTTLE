import './Directions.css';
import React from "react"

const Directions = ({title, directions}) => {
  //directions will be an array of string we can iterate though to display
  return(
    <article className="directions">
      <h3>{title}</h3>
      <p>{directions}</p>
      <button>BACK TO CARD</button>
    </article>
  )
}

export default Directions;