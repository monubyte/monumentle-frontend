// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [img, setIMG] = useState(null);
  

  useEffect(() => {
    axios.get('http://localhost:8000/api/2').then((response) => {
      setIMG(response.data);
    }).catch((error) => {
      if (error.response) {
        console.log(error);
      }
    })
  })


  return (
    <div className="App">
      <img src={img.label} className="image" alt="missing"/>
    </div>
  );
}

export default App;