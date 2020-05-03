import React from "react";
import Card from "./Card";
import "../App.css";

const CardContainer = props => {

    return(
        <div className="card_con">
            <Card url={props.url} title={props.title} date={props.date} explanation={props.explanation} mediaType={props.mediaType} serviceVersion={props.serviceVersion}/>
            
        </div>   
    );
}

export default CardContainer;