import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Card from "../src/Card/Card";
import styles from "../src/Card/Card.module.css";

function App() {
  const [data,setData]=useState([]);
  useEffect(() => {
    (async () => {
      var response = await axios.get("https://restcountries.com/v3.1/all")
      console.log(response.data);
      setData(response.data);
    })();
    
  })
  return (
    <div className="App">
      <header className="App-header">
        <div className={styles.flags}>
        {data.map((flagData)=>(<Card data = {flagData}/>))}
        </div>
      </header>
    </div>
  );
}

export default App;