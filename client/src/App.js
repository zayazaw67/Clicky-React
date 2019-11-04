import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar'
import './App.css';
import characters from "./characters.json";


class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    characters,
    clicked: []
  };

  render() {
    console.log(characters)
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}





export default App;
