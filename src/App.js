import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import pictures from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";


// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedpictures: []
  };

  clickedImage = id => {
    // assign the state of the empty array so that it updates
    let clickedpictures = this.state.clickedpictures;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed photo
    if (clickedpictures.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedpictures.push(id);
      console.log(clickedpictures);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 8) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedpictures: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedpictures: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffles images
  makeShuffle = () => {
    this.setState({ pictures: shuffle(pictures) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          Sorry! Clicked on this picture already, try again...
        </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Amazing! You haven't clicked pictures twice!
        </div>
        <Scoreboard
          title="Photo Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.pictures.map(_pictures => (
            <Card
              key={pictures.id}
              id={pictures.id}
              image={pictures.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
