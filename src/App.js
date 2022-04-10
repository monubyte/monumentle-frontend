import logo from './logo.svg';
import './App.css';
import Image from './Image.js'
import axios from "axios";
import React from "react";

function App() { 
  const [obj, setObj] = React.useState('');

  React.useEffect(() => {
    getImg();
  }, []);

  const getImg = () => {
    axios.get("http://localhost:8000/api/random")
    .then((response) => {
      // console.log(response.data.url);
      setObj(response.data.url);
  })
  .catch(error => console.error(`Error: ${error}`));
  }
  

  return (
    <Image url={obj}/>
  );
}

export default App;
