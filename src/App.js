import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
// import Card from "./Card"
import CardContainer from "./Component/CardContainer";


function App() {

  
const [Apod, setApod] = useState([]);

    useEffect( () => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=zCYbMxOwixEfUUJh7XGUw5VRLKt6f1m45UkO4sQy&date=2019-06-20`)
    // add &date=2020-06-24 at the end of your api url
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
       <CardContainer url={Apod.url} title={Apod.title} date={Apod.date} explanation={Apod.explanation} mediaType={Apod.mediaType} serviceVersion={Apod.service_version} copyright={Apod.copyright} />
      
    </div>
  );
}

export default App;

//  copyright={Apod.copyright}
