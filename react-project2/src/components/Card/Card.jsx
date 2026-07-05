import React from 'react'
import "./Card.css"
import virat from "../../assets/virat.jpg";
function Card({name="Kohli",price="21 Crores",image=virat}) {
  return (
    <div className="card">
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  )
}

export default Card