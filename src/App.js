import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Photocard from "./components/Photocard";
// import { Button } from 'reactstrap';
import Jumbo from "./components/Jumbotron";
import styled from "styled-components";

const CustomH1 = styled.h1({
  backgroundColor: 'salmon',
  color: 'white',
})

function App () {
  const [data, setData] = useState({});
  useEffect(() => {
  }, [])
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=BkJd5nodzxpNE8LfflXuBxSqkIyauu5LshS9mY1V")
  .then(res => {console.log(res.data);
  setData(res.data);
});
  return (
    <div className="App">
  
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <CustomH1>Nasa Pic of The Day</CustomH1>
      <Jumbo/>
      {/* <Button color="danger">danger</Button>{' '} */}
      <Photocard 
      title={data.title} 
      url={data.url}
      explanation={data.explanation}/>
    </div>
  );
  }

export default App;
