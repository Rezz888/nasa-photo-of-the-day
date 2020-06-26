import React from "react";
import "../App.css";

export default function Card(props){

    return(
        <div className="card_container">
            <div className="img_container">
                <h1 className="mainTitle">Astronomy Picture of the Day</h1>
            <img className="cardImg" src={props.url} alt="APOD"></img>
            </div>
            <div className="text_container">
            <h1 className="title">{props.title}</h1>
            <p className="explanation">Date: {props.date}</p>
            <p className="explanation">{props.explanation}</p>
            <p className="SV">Service Version: {props.serviceVersion}</p>
            <footer>&copy; Copyright 2020: {props.copyright}</footer>

            </div>
        </div>
    )
}