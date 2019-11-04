import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar'
import Card from './components/Cards/Card'

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

        <div className="row">
          {this.state.characters.map(cards => (
            <Card
              key={cards.id}
              id={cards.id}
              name={cards.name}
              image={cards.image}
            />
          ))}
        </div>
      </div>
    );
  }
}





export default App;
