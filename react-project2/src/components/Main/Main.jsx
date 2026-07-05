import React from 'react';
import "./Main.css";
import Card from "../Card/Card.jsx";

import vaibhav from "../../assets/vaibhav.jpg";
import abd1 from "../../assets/abd1.jpg";

function Main() {
  return (
    <div className="main">
      <Card />
      <Card image={vaibhav} name="Suryavanshi" price="100 Crores" />
      <Card image={abd1} name="DeVilliers" price="Infinity" />
    </div>
  );
}

export default Main;