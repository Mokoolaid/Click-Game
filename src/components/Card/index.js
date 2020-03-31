import React from "react";
import "./style.css";

const Cards = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.photo} src={props.image} />
      <div className="overlay">
        <div className="text">
          {props.photo}
          <br />
          {props.photo} by {props.photo}
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
