import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
// import Card from "./Card"
import CardContainer from "./CardContainer";


function App() {

  
const [Apod, setApod] = useState([]);

    useEffect( () => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=zCYbMxOwixEfUUJh7XGUw5VRLKt6f1m45UkO4sQy`)
    .then(response => {
        console.log(response)
        setApod(response.data)
        
    })
    .catch(error => {
        console.log(error);
    })
  }, []) 
  
  



  return (
    <div className="App">
       <CardContainer url={Apod.hdurl} title={Apod.title} date={Apod.date} explanation={Apod.explanation} mediaType={Apod.mediaType} />
      
    </div>
  );
}

export default App;
