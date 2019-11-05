import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar'
import Card from './components/Cards/Card'

import characters from "./characters.json";
import './App.css';


class App extends Component {
  state = {
    characters,
    clicked: [],
    score: 0,
    highscore: 0
  };

  randomizer = () => {
    this.state.characters.sort((a, b) => { return 0.5 - Math.random() });
  };

  setHighScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      });
    }
  };

  restartGame = () => {
    this.setHighScore();
    this.setState({
      clicked: [],
      score: 0
    })
  };
  // character click event
  characterClick = event => {
    // console.log("clicked")
    const currentChar = event.target.id;
    // check to see if that character has been clicked or not, are they in the state array or not?
    const isClicked = this.state.clicked.indexOf(currentChar) > -1;

    // if that character is clicked, end the game, reset the score
    if (isClicked) {
      this.randomizer();
      this.restartGame();
    } else {
      // update and randomize
      this.randomizer();
      this.setState({
        // joins both arrays
        clicked: this.state.clicked.concat(currentChar),
        // increases score
        score: this.state.score + 1
      },
        // if user gets to all 12, shuffle the cards and reset the game
        () => {
          if (this.state.score === 12) {
            this.randomizer();
            this.restartGame();
          }
        });
    }
  };

  render() {
    // console.log(characters)
    return (
      <div className="App">
        <Navbar
          highscore={this.state.highscore}
          score={this.state.score}
        />
        <div className="container">
          <div className="row">
            {this.state.characters.map(cards => (
              <Card
                characterClick={this.characterClick}
                id={cards.id}
                key={cards.id}
                name={cards.name}
                image={cards.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}





export default App;
