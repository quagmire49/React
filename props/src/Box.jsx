import React from "react";

function Box({name="Geetesh",profession="Webdeveloper"}){
  return(
    <div className="box">
    <h1>{name}</h1>
    <h2>{profession}</h2>
    </div>
  )
}

export default Box;